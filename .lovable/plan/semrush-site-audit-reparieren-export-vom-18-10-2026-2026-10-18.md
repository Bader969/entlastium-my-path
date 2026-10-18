# Semrush Site Audit reparieren (Export vom 18.10.2026)

Ergebnis der Auswertung: 100 Seiten, 5 Fehlerarten (21 Fehler) und 4 Warnungsarten (131 Warnungen).

## Fehler (zuerst)

1. **Kaputter externer Link auf 24 Seiten** – der Instagram-Link im Fußbereich (`instagram.com/entlastium`) ist für Semrush nicht erreichbar. Prüfen, ob das Profil existiert; falls nicht, Link entfernen, sonst als Social-Link markieren. *Bitte bestätigen Sie, ob es das Instagram-Konto wirklich gibt.*
2. **Doppelte Canonical auf den 7 Leistungsseiten** – stammt aus der alten, veröffentlichten Version (bereits in der Vorschau behoben). Nachprüfen, dass jede Leistungsseite genau einen Canonical hat; wird nach dem Veröffentlichen grün.
3. **Fehlerhafte strukturierte Daten auf den 7 Leistungsseiten** – das „Service“-Markup ergänzen: `provider` auf das vollständige Unternehmen verweisen (Adresse, Telefon), `url`, `serviceType`; FAQ-Markup bleibt.
4. **Sitemap enthält falsche Seiten** – `/unsubscribe` (in robots.txt gesperrt) und weitere ungeeignete Einträge aus der Sitemap entfernen; nur echte, erreichbare Inhaltsseiten bleiben.

## Warnungen

5. **Kontakt-Varianten `/kontakt?stadt=…`** (7 Stück, dünner Inhalt, nur ein Link) – diese Varianten sollen nicht als eigene Seiten zählen: Canonical der Kontaktseite zeigt immer auf `/kontakt`, Links von Städteseiten bekommen `rel="nofollow"`.
6. **Leerer Link im Impressum** – Link ohne Text bekommt eine verständliche Beschriftung.
7. **92 nicht aussagekräftige Linktexte** („Mehr erfahren“, „Hier“) – durch beschreibende Texte ersetzen, z. B. „Kellerräumung im Detail“, „Entrümpelung in Köln anfragen“.
8. **Wenig Text auf 19 Seiten** (Ablauf, FAQ, Kontakt, Leistungen, Über uns, 7 Leistungsseiten) – jede Leistungsseite um sinnvolle Abschnitte erweitern (Ablauf, was entsorgt wird, Einsatzgebiet), Ablauf/Über-uns/Kontakt um kurze Einleitungen. Neutral, ohne Preise oder Zahlen.
9. **Niedriges Text-zu-Code-Verhältnis (88 Seiten)** – verbessert sich durch Punkt 8; kein eigener Umbau nötig (Warnung mit geringem Einfluss).

## Abschluss
- Alle Seiten lokal prüfen (ein Canonical, gültiges Markup, keine kaputten Links).
- Danach veröffentlichen und in Semrush den Audit neu starten.

## Technische Details
- Footer: `src/components/Footer.tsx`; Service-Markup/Head: `src/components/ServicePage.tsx`; Sitemap: `src/routes/sitemap[.]xml.ts`; Kontakt-Canonical: `src/routes/kontakt.tsx`; Städte-Link: `src/routes/entruempelung.$stadt.tsx`; Leistungstexte: `src/data/services.ts`; Impressum: `src/pages/Impressum.tsx`.
