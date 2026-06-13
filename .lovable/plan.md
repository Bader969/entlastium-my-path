## Ziel
Das Kontaktformular versendet beim Klick auf „Jetzt Kontakt aufnehmen" automatisch eine HTML-E-Mail mit allen Daten + Bildvorschauen/-Links an `info@entlastium.de`. Der Kunde erhält parallel eine Bestätigungs-E-Mail mit Zusammenfassung seiner Anfrage. Bilder werden in Lovable Storage hochgeladen und per signiertem Link in die E-Mail eingebettet.

## Provider / Auftragsverarbeiter
**Empfehlung: Lovable Emails (kein Resend nötig).**
- Läuft über die in Lovable Cloud integrierte Infrastruktur (EU-Hosting, AV-konform)
- Versand-Subdomain: `notify.entlastium.de` (NS-Records werden bei der Domain-Einrichtung vorgegeben — muss beim Domain-Registrar einmalig eingetragen werden)
- Kein zusätzlicher Account, kein extra Vertrag bei Drittanbieter
- Resend wäre nur sinnvoll, wenn dort schon ein Konto besteht — bringt hier keinen Mehrwert

## Format der E-Mails
**HTML-E-Mail** (kein PDF) — leichter, mobilfreundlich, durchsuchbar, klickbare Bild-Links.

### Benachrichtigung an info@entlastium.de
- Betreff: „Neue Anfrage von {Name} – {Raumart}"
- Reply-To: Kunden-E-Mail (direkte Antwort möglich)
- Inhalt: Alle Formularfelder (Name, E-Mail, Telefon, Raumart, m²/m³, Adresse, Nachricht)
- Bilder: bis zu 5 inline-Thumbnails + Download-Link zum Original (Storage, signierte URLs, 30 Tage gültig)
- Markenkonform im Entlastium-Stil

### Bestätigungs-E-Mail an den Kunden
- Betreff: „Ihre Anfrage bei Entlastium – wir melden uns innerhalb von 24h"
- Inhalt: Persönliche Anrede + Zusammenfassung der Anfrage (gleiche Felder + Bildvorschau)
- Hinweis auf Reaktionszeit + Kontaktdaten

## Umsetzungsschritte

1. **Lovable Cloud aktivieren** (Datenbank, Storage, Server-Routen)
2. **Lovable Emails einrichten** für die Subdomain `notify.entlastium.de` (DNS-Setup-Dialog — du trägst die NS-Records beim Registrar ein)
3. **Storage-Bucket `contact-uploads`** anlegen (privat, signierte URLs)
4. **Tabelle `contact_requests`** für die Anfragen (Audit-Trail, falls eine E-Mail mal nicht ankommt)
5. **E-Mail-Templates** in `src/lib/email-templates/`:
   - `contact-notification.tsx` (intern an info@)
   - `contact-confirmation.tsx` (Bestätigung an Kunden)
6. **Public Server-Route** `/api/public/contact-submit`:
   - Nimmt Formulardaten + Bild-Uploads entgegen
   - Validiert mit Zod (Längen-Limits, E-Mail-Format, max. 5 Bilder, max. 10 MB pro Bild, nur Bildtypen)
   - Lädt Bilder in Storage hoch, generiert signierte URLs
   - Speichert Anfrage in `contact_requests`
   - Triggert beide E-Mails (Benachrichtigung + Bestätigung) über Lovable Emails
   - Honeypot-Feld gegen Bots
7. **`ContactForm.tsx` umbauen**: statt `mailto:` → echter `fetch`-Call zur Server-Route, mit Loading-State, Erfolgs-/Fehler-Toast
8. **Test**: Formular einmal abschicken, beide E-Mails verifizieren

## Was du danach noch tun musst
- Beim Domain-Anbieter einmalig die NS-Records für `notify.entlastium.de` eintragen (Anleitung erscheint im Setup-Dialog)
- Datenschutzerklärung ergänzen: Hinweis auf Verarbeitung über Lovable Cloud (Supabase EU) + E-Mail-Versand via Mailgun (EU). Ich kann den entsprechenden Absatz mitliefern.

## Was nicht geändert wird
- Design, Layout und alle anderen Komponenten bleiben unverändert
- Hover-Effekte bleiben wie zuletzt eingestellt
