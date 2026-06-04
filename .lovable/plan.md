## Ziel
Webseite "Entlastium" aufräumen: Preisrechner komplett entfernen, Top-Navigation neu strukturieren und alle gefundenen Responsive-Bugs (Mobile, Tablet, Desktop) beheben.

## 1. Preisrechner entfernen
- `src/components/PriceCalculator.tsx` löschen
- Import + Render aus `src/pages/Index.tsx` entfernen
- Nav-Eintrag "Preisrechner" aus `Header.tsx` entfernen
- Sekundären CTA "Preis berechnen" im `Hero.tsx` ersetzen durch "Mehr erfahren" (Anker zu `#services`)
- Im `ContactForm` / FAQ Erwähnungen prüfen und ggf. anpassen

## 2. Header-Navigation reparieren
Aktuelles Problem: Desktop-Nav erscheint erst ab `lg` (1024 px), CTA + Telefon aber schon ab `md` (768 px). Zwischen 768–1023 px steht das Hamburger-Icon **neben** Telefon + Button → unübersichtlich. Zusätzlich quetschen sich 7 Nav-Items im Desktop-Layout.

Fixes:
- Breakpoints vereinheitlichen: Desktop-Nav + Telefon + CTA gemeinsam ab `lg`, darunter nur Logo + Burger.
- Telefonnummer auf Desktop kompakter (Icon + Text), auf Mobile in Burger-Menü verschoben.
- Nav-Items optisch konsistent (gleicher Spacing-Rhythmus, Hover-Underline).
- Mobile-Menü: Vollbild-Overlay mit größeren Tap-Targets statt eingeklemmt im Header.
- Logo-Subtitle „Entrümpelung & Haushaltsauflösungen" auf < `xl` ausblenden (verhindert Umbruch).
- Smooth-Scroll-Verhalten für Anker-Links sicherstellen (`scroll-behavior: smooth` in `body` / `html`).

## 3. Responsive-Audit & Fixes
Pro Sektion durchgehen und prüfen / fixen:

**Hero**
- Floating Logo-Icon (650 px) auf Mobile zu groß → mobil 280 px, Tablet 400 px, Desktop 600 px.
- Headline `text-7xl` auf Tablet zu groß → Klassen entschärfen (`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`).
- Benefit-Chips Wrap-Verhalten und Button-Stack auf < `sm` prüfen.

**ServicesDashboard / ProcessTimeline / AboutUs / FAQ / ContactForm / Footer**
- Grids auf `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` normalisieren wo nötig.
- Padding/Margins über `section-padding` konsistent halten.
- Bilder mit `w-full h-auto object-cover` und sinnvollen `aspect-ratio`.
- Lange Texte: `break-words`, kein horizontales Scrollen.
- Footer-Spalten auf Mobile gestapelt, Links als Tap-Targets ≥ 44 px.
- FAQ-Accordion: volle Breite, Icon nicht abgeschnitten.
- ContactForm: Inputs `w-full`, Labels lesbar, Button volle Breite auf Mobile.

**Globale Checks**
- `overflow-x: hidden` auf `body` ergänzen, um horizontales Scrollen durch Glow-Orbs zu verhindern.
- `html { scroll-padding-top: 5rem }` damit Anker-Scroll nicht hinter dem Fixed-Header landet.
- Legal-Seiten (Impressum/Datenschutz/AGB): Lesbreite + Padding auf Mobile prüfen.

## 4. Verifikation
- Preview in 3 Viewports prüfen: 375 px (Mobile), 820 px (Tablet), 1440 px (Desktop).
- Konsole + Netzwerk-Tab auf Fehler prüfen.
- Visueller Sanity-Check je Sektion.

## Geänderte / gelöschte Dateien (geplant)
- gelöscht: `src/components/PriceCalculator.tsx`
- bearbeitet: `src/pages/Index.tsx`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/ServicesDashboard.tsx`, `src/components/ProcessTimeline.tsx`, `src/components/AboutUs.tsx`, `src/components/FAQ.tsx`, `src/components/ContactForm.tsx`, `src/components/Footer.tsx`, `src/components/LegalPageLayout.tsx`, `src/styles.css`
