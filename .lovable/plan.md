# Plan: Seriöser Auftritt für Entlastium

**Farben, Layout und Seitenstruktur bleiben unverändert.** Nur Glow-Effekte raus, neue Typografie, Vertrauens-Upgrades.

---

## 1. Glow-Effekte komplett entfernen

**In `src/styles.css`:**
- Tokens entfernen: `--shadow-glow`, `--shadow-glow-sand`, `--shadow-inset-glow`, `--glow-teal`, `--glow-sand`, `--glow-primary`, `--gradient-glow`, `--gradient-animated`, `--gradient-mesh`
- Utility-Klassen entfernen: `.glow-card`, `.glow-border`, `.text-gradient-animated`, `.magnetic-btn` (Glow-Hover), `.animate-pulse-glow`, `.animate-float`, `.mesh-bg`
- Keyframes entfernen: `pulse-glow`, `gradient-shift`, `float`
- `.glass` bleibt, aber ohne Glow-Border

**In Komponenten:**
- `Hero.tsx`: pulsierende Glow-Orbs raus, schwebendes Logo statisch, `text-gradient-animated` → statisches `text-gradient` (Teal→Sand), `magnetic-btn` raus
- `ServicesDashboard.tsx`, Cards: `glow-card` → ruhige `shadow-card`-Variante
- Globale Suche/Reinigung: alle Vorkommen von `glow`, `pulse-glow`, `animate-float`, `mesh-bg`, `magnetic-btn`

Ergebnis: ruhig, klar, professionell — Navy/Teal/Sand-Palette unverändert.

---

## 2. Typografie: Urbanist + Epilogue

- Headings: **Urbanist** (modern, sachlich, vertrauenswürdig)
- Body: **Epilogue** (klar, sehr lesbar)
- Google-Fonts-`<link>` in `src/routes/__root.tsx` ersetzen (Playfair + Inter raus)
- In `src/styles.css`: `--font-serif` → `"Urbanist", sans-serif`, `--font-sans` → `"Epilogue", sans-serif`
- Heading-Gewicht 600 (statt 700) für seriöseren Ton
- `font-serif` Klassen behalten ihre Bedeutung (= Headline-Font), nur Wert ändert sich

---

## 3. Vertrauens-Upgrades (ohne Layout-Umbau)

1. **Hero-Trust-Zeile** unter den Benefit-Chips: „Versichert · Festpreisgarantie · Fachgerechte Entsorgung nach KrWG"
2. **Siegel-/Vertrauensleiste** zwischen Hero und Services: monochrome Badges („Geprüfter Fachbetrieb", „Versichert", „Fachgerechte Entsorgung", „Kostenlose Besichtigung") — neutral formuliert, keine konkreten Nummern/Summen (trägst du später nach)
3. **Telefon-CTA im Header**: sichtbarer Anruf-Button (wichtig für 50+-Zielgruppe)
4. **Services-Bereich**: neutrale Vertrauensformulierungen statt Preise („Transparente Festpreise nach Besichtigung", „Persönliches Angebot in 24 h")
5. **Kundenstimmen-Sektion** zwischen ProcessTimeline und FAQ — mit 3 **Platzhalter-Zitaten** (klar als Beispiel markiert, damit du sie leicht ersetzen kannst), Struktur ist sofort produktiv
6. **Footer**: vorbereitete Platzhalter-Zeile für Entsorgungsfachbetrieb-Nr., Versicherung, Mitgliedschaften — du füllst die Werte später
7. **Animationen beruhigen**: nur dezente `fade-in` / `slide-up` beim Scrollen; alle Endlos-Animationen weg
8. **CTA-Texte präziser**: „Kostenloses Angebot anfordern" statt „Kostenlose Besichtigung"
9. **Mikro-Politur**: konsistente Schatten (`shadow-card`/`shadow-md`), weniger blur/glass, dezentere Border-Radien

---

## Technische Details

- Edits: `src/styles.css`, `src/routes/__root.tsx`, `src/components/Hero.tsx`, `src/components/Header.tsx`, `src/components/ServicesDashboard.tsx`, `src/components/Footer.tsx`, evtl. `ProcessTimeline.tsx` / `AboutUs.tsx` / `ServicePage.tsx` für Glow-Reste
- Neue Komponente: `src/components/Testimonials.tsx` (Platzhalter-Zitate), in `src/pages/Index.tsx` zwischen `ProcessTimeline` und `FAQ` einsetzen
- Keine neuen Packages, keine Routen-/Datenmodell-Änderungen
- Farb-Tokens unverändert

Bereit zum Umsetzen — sag „los" und ich baue es.
