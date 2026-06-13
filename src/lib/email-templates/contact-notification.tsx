import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ImageItem {
  url: string
  filename: string
}

interface Props {
  name?: string
  email?: string
  phone?: string
  roomTypeLabel?: string
  roomSizeM2?: string
  roomSizeM3?: string
  address?: string
  message?: string
  images?: ImageItem[]
  submittedAt?: string
}

const ContactNotification = ({
  name = '—',
  email = '—',
  phone,
  roomTypeLabel = '—',
  roomSizeM2 = '—',
  roomSizeM3,
  address,
  message,
  images = [],
  submittedAt,
}: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Neue Kontaktanfrage von {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Neue Kontaktanfrage</Heading>
        <Text style={meta}>
          {submittedAt ? `Eingegangen am ${submittedAt}` : 'Soeben eingegangen'}
        </Text>

        <Section style={card}>
          <Row label="Name" value={name} />
          <Row
            label="E-Mail"
            value={<Link href={`mailto:${email}`} style={link}>{email}</Link>}
          />
          {phone ? (
            <Row
              label="Telefon"
              value={<Link href={`tel:${phone}`} style={link}>{phone}</Link>}
            />
          ) : null}
          <Row label="Raumart" value={roomTypeLabel} />
          <Row label="Größe (m²)" value={roomSizeM2} />
          {roomSizeM3 ? <Row label="Größe (m³)" value={roomSizeM3} /> : null}
          {address ? <Row label="Adresse" value={address} /> : null}
        </Section>

        {message ? (
          <Section style={card}>
            <Text style={label}>Nachricht</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        {images.length > 0 ? (
          <Section style={card}>
            <Text style={label}>Bilder ({images.length})</Text>
            <Text style={hint}>
              Vorschauen unten – Download-Links sind 30 Tage gültig.
            </Text>
            <div>
              {images.map((img, i) => (
                <div key={i} style={imgWrap}>
                  <Link href={img.url}>
                    <Img
                      src={img.url}
                      alt={img.filename}
                      width="240"
                      style={imgStyle}
                    />
                  </Link>
                  <Text style={imgCaption}>
                    <Link href={img.url} style={link}>
                      {img.filename} herunterladen
                    </Link>
                  </Text>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          Entlastium · Automatische Benachrichtigung vom Kontaktformular
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label: l, value }: { label: string; value: React.ReactNode }) => (
  <div style={rowWrap}>
    <Text style={rowLabel}>{l}</Text>
    <Text style={rowValue}>{value}</Text>
  </div>
)

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '32px 24px' }
const h1 = { color: '#1a2e1f', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }
const meta = { color: '#6b7280', fontSize: '13px', margin: '0 0 24px' }
const card = {
  backgroundColor: '#f7f5f0',
  borderRadius: '12px',
  padding: '20px 24px',
  marginBottom: '16px',
}
const rowWrap = { marginBottom: '12px' }
const rowLabel = { fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const rowValue = { fontSize: '15px', color: '#1a2e1f', margin: 0, fontWeight: 500 }
const label = { fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 8px' }
const messageText = { fontSize: '15px', color: '#1a2e1f', margin: 0, lineHeight: 1.6, whiteSpace: 'pre-wrap' as const }
const hint = { fontSize: '12px', color: '#6b7280', margin: '0 0 12px' }
const imgWrap = { display: 'inline-block', margin: '0 12px 16px 0', verticalAlign: 'top' as const }
const imgStyle = { borderRadius: '8px', display: 'block', maxWidth: '240px', height: 'auto' }
const imgCaption = { fontSize: '12px', margin: '6px 0 0', color: '#6b7280' }
const link = { color: '#1a2e1f', textDecoration: 'underline' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', textAlign: 'center' as const, margin: 0 }

export const template = {
  component: ContactNotification,
  subject: (d: Record<string, any>) => `Neue Anfrage von ${d.name || 'Website'}`,
  displayName: 'Kontaktformular – Benachrichtigung an Team',
  to: 'info@entlastium.de',
  previewData: {
    name: 'Maria Beispiel',
    email: 'maria@beispiel.de',
    phone: '+49 234 555 1234',
    roomTypeLabel: 'Wohnung',
    roomSizeM2: '65',
    roomSizeM3: '160',
    address: 'Musterstraße 12, 44789 Bochum',
    message: 'Wohnung muss bis Ende des Monats geräumt werden.',
    images: [],
    submittedAt: new Date().toLocaleString('de-DE'),
  },
} satisfies TemplateEntry
