import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const MAX_IMAGES = 5
const MAX_IMAGE_BYTES = 10 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

const SubmitSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(60).optional().or(z.literal('')),
  roomType: z.string().trim().min(1).max(60),
  roomTypeLabel: z.string().trim().min(1).max(120),
  roomSizeM2: z.string().trim().min(1).max(20),
  roomSizeM3: z.string().trim().max(20).optional().or(z.literal('')),
  address: z.string().trim().max(500).optional().or(z.literal('')),
  message: z.string().trim().max(5000).optional().or(z.literal('')),
  honeypot: z.string().max(0).optional(),
})

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_+/g, '_')
    .slice(0, 80)
}

export const Route = createFileRoute('/api/public/contact-submit')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let form: FormData
        try {
          form = await request.formData()
        } catch {
          return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }

        const fieldsResult = SubmitSchema.safeParse({
          name: form.get('name'),
          email: form.get('email'),
          phone: form.get('phone') || undefined,
          roomType: form.get('roomType'),
          roomTypeLabel: form.get('roomTypeLabel'),
          roomSizeM2: form.get('roomSizeM2'),
          roomSizeM3: form.get('roomSizeM3') || undefined,
          address: form.get('address') || undefined,
          message: form.get('message') || undefined,
          honeypot: form.get('honeypot') || undefined,
        })
        if (!fieldsResult.success) {
          return Response.json(
            { error: 'Ungültige Eingaben', issues: fieldsResult.error.flatten() },
            { status: 400 },
          )
        }
        const data = fieldsResult.data

        // Honeypot — silently succeed for bots
        if (data.honeypot && data.honeypot.length > 0) {
          return Response.json({ success: true })
        }

        // Collect & validate images
        const rawImages = form.getAll('images').filter((v): v is File => v instanceof File && v.size > 0)
        if (rawImages.length > MAX_IMAGES) {
          return Response.json({ error: `Maximal ${MAX_IMAGES} Bilder erlaubt.` }, { status: 400 })
        }
        for (const f of rawImages) {
          if (!ALLOWED_TYPES.has(f.type)) {
            return Response.json({ error: `Bildformat nicht unterstützt: ${f.name}` }, { status: 400 })
          }
          if (f.size > MAX_IMAGE_BYTES) {
            return Response.json({ error: `Bild zu groß (max 10 MB): ${f.name}` }, { status: 400 })
          }
        }

        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const requestId = crypto.randomUUID()
        const uploadedPaths: string[] = []
        const signedImages: { url: string; filename: string }[] = []

        for (let i = 0; i < rawImages.length; i++) {
          const file = rawImages[i]
          const safe = sanitizeFilename(file.name) || `bild-${i + 1}`
          const path = `${requestId}/${i + 1}-${safe}`
          const buf = new Uint8Array(await file.arrayBuffer())
          const { error: uploadErr } = await supabase.storage
            .from('contact-uploads')
            .upload(path, buf, { contentType: file.type, upsert: false })
          if (uploadErr) {
            console.error('Upload failed', { error: uploadErr, path })
            return Response.json({ error: 'Bild-Upload fehlgeschlagen.' }, { status: 500 })
          }
          uploadedPaths.push(path)
          const { data: signed, error: signErr } = await supabase.storage
            .from('contact-uploads')
            .createSignedUrl(path, 60 * 60 * 24 * 30) // 30 days
          if (!signErr && signed?.signedUrl) {
            signedImages.push({ url: signed.signedUrl, filename: safe })
          }
        }

        // Persist
        const { error: insertErr } = await supabase.from('contact_requests').insert({
          id: requestId,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          room_type: data.roomType,
          room_type_label: data.roomTypeLabel,
          room_size_m2: data.roomSizeM2,
          room_size_m3: data.roomSizeM3 || null,
          address: data.address || null,
          message: data.message || null,
          image_paths: uploadedPaths,
        })
        if (insertErr) {
          console.error('Insert failed', { error: insertErr })
          return Response.json({ error: 'Speichern fehlgeschlagen.' }, { status: 500 })
        }

        const submittedAt = new Date().toLocaleString('de-DE', {
          dateStyle: 'long',
          timeStyle: 'short',
          timeZone: 'Europe/Berlin',
        })

        const { enqueueTransactionalEmail } = await import('@/lib/email/enqueue.server')

        // Notify the team
        const notify = await enqueueTransactionalEmail({
          supabase,
          templateName: 'contact-notification',
          idempotencyKey: `contact-notify-${requestId}`,
          templateData: {
            name: data.name,
            email: data.email,
            phone: data.phone || undefined,
            roomTypeLabel: data.roomTypeLabel,
            roomSizeM2: data.roomSizeM2,
            roomSizeM3: data.roomSizeM3 || undefined,
            address: data.address || undefined,
            message: data.message || undefined,
            images: signedImages,
            submittedAt,
          },
        })
        if (!notify.success) {
          console.error('Notify email failed', notify)
        }

        // Confirm to the customer
        const confirm = await enqueueTransactionalEmail({
          supabase,
          templateName: 'contact-confirmation',
          recipientEmail: data.email,
          idempotencyKey: `contact-confirm-${requestId}`,
          templateData: {
            name: data.name,
            roomTypeLabel: data.roomTypeLabel,
            roomSizeM2: data.roomSizeM2,
            roomSizeM3: data.roomSizeM3 || undefined,
            address: data.address || undefined,
            message: data.message || undefined,
            imageCount: signedImages.length,
          },
        })
        if (!confirm.success) {
          console.error('Confirm email failed', confirm)
        }

        return Response.json({ success: true, id: requestId })
      },
    },
  },
})
