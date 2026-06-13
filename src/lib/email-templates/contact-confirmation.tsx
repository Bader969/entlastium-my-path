import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  roomTypeLabel?: string
  roomSizeM2?: string
  roomSizeM3?: string
  address?: string
  message?: string
  imageCount?: number
}

const ContactConfirmation = ({
  name = 'gern',
  roomTypeLabel,
  roomSizeM2,
  roomSizeM3,
  address,
  message,
  imageCount = 0,
}: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Wir haben Ihre Anfrage erhalten – Entlastium meldet sich innerhalb von 24 Stunden.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Vielen Dank, {name}!</Heading>
        <Text style={lead}>
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von
          24 Stunden mit einem unverbindlichen Angebot oder einem Termin für
          die kostenlose Vor-Ort-Besichtigung.
        </Text>

        <Section style={card}>
          <Text style={cardTitle}>Zusammenfassung Ihrer Anfrage</Text>
          {roomTypeLabel ? <SummaryRow label="Raumart" value={roomTypeLabel} /> : null}
          {roomSizeM2 ? <SummaryRow label="Größe" value={`${roomSizeM2} m²${roomSizeM3 ? ` · ${roomSizeM3} m³` : ''}`} /> : null}
          {address ? <SummaryRow label="Adresse" value={address} /> : null}
          {imageCount > 0 ? (
            <SummaryRow label="Bilder" value={`${imageCount} Bild${imageCount === 1 ? '' : 'er'} angehängt`} />
          ) : null}
          {message ? (
            <div style={{ marginTop: '12px' }}>
              <Text style={summaryLabel}>Ihre Nachricht</Text>
              <Text style={summaryMessage}>{message}</Text>
            </div>
          ) : null}
        </Section>

        <Text style={p}>
          Sollten Sie zwischenzeitlich Fragen haben, erreichen Sie uns unter{' '}
          <Link href="mailto:info@entlastium.de" style={link}>info@entlastium.de</Link>.
        </Text>

        <Hr style={hr} />
        <Text style={signature}>
          Herzliche Grüße<br />
          Ihr Entlastium-Team
        </Text>
        <Text style={footer}>
          Entlastium · Entrümpelung & Haushaltsauflösung in NRW
        </Text>
      </Container>
    </Body>
  </Html>
)

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ marginBottom: '8px' }}>
    <Text style={summaryLabel}>{label}</Text>
    <Text style={summaryValue}>{value}</Text>
  </div>
)

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const h1 = { color: '#1a2e1f', fontSize: '26px', fontWeight: 700, margin: '0 0 16px' }
const lead = { color: '#374151', fontSize: '16px', lineHeight: 1.6, margin: '0 0 24px' }
const p = { color: '#374151', fontSize: '15px', lineHeight: 1.6, margin: '16px 0' }
const card = { backgroundColor: '#f7f5f0', borderRadius: '12px', padding: '20px 24px', margin: '16px 0' }
const cardTitle = { fontSize: '13px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 12px', fontWeight: 600 }
const summaryLabel = { fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const summaryValue = { fontSize: '15px', color: '#1a2e1f', margin: 0, fontWeight: 500 }
const summaryMessage = { fontSize: '14px', color: '#374151', margin: 0, lineHeight: 1.5, whiteSpace: 'pre-wrap' as const }
const link = { color: '#1a2e1f', textDecoration: 'underline' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const signature = { fontSize: '15px', color: '#1a2e1f', margin: '0 0 16px', lineHeight: 1.6 }
const footer = { fontSize: '12px', color: '#9ca3af', textAlign: 'center' as const, margin: 0 }

export const template = {
  component: ContactConfirmation,
  subject: 'Wir haben Ihre Anfrage erhalten – Entlastium',
  displayName: 'Kontaktformular – Bestätigung an Kunde',
  previewData: {
    name: 'Maria',
    roomTypeLabel: 'Wohnung',
    roomSizeM2: '65',
    roomSizeM3: '160',
    address: 'Musterstraße 12, 44789 Bochum',
    message: 'Wohnung muss bis Ende des Monats geräumt werden.',
    imageCount: 2,
  },
} satisfies TemplateEntry
