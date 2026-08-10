# Logo & Glassmorphism-Overhaul

## Ziel
Das bestehende Logo wirkt im Header zu klein und unscharf, der Untertitel unter dem Logo wirkt unruhig. Der erste Eindruck der Seite soll durch dezente Glassmorphism-Effekten moderner und seriöser wirken, ohne die bestehende Farb- und Layoutsprache zu verändern.

## Umsetzung

### 1. Header überarbeiten
- **Datei:** `src/components/Header.tsx`
- Logo-Mark (`logo-full.png`) vergrößern: von `h-10 w-10` / `sm:h-12 sm:w-12` auf `h-12 w-12` / `sm:h-14 sm:w-14`.
- Schriftzug "Entlastium" leicht vergrößern und fetter setzen, damit er allein als Branding funktioniert.
- Untertitel "Entrümpelung & Haushaltsauflösungen" unter dem Logo entfernen.
- Header-Hintergrund auf Glassmorphism umstellen: statt `bg-primary/95 backdrop-blur-md` ein stärkerer Frosted-Glass-Effekt mit `backdrop-blur-xl`, halbtransparenter Hintergrund und feiner Rahmenlinie.

### 2. Hero-Hintergrund-Logo verstärken
- **Datei:** `src/components/Hero.tsx`
- Hintergrund-Logo (`logo-mark.png`) deutlich vergrößern: von max `640px` auf mindestens `900px` bis `1100px` je Viewport.
- Opazität erhöhen (von `opacity-15` auf `opacity-20`–`opacity-25`), damit es als stimmungsvolles Wasserzeichen erkennbar ist, ohne den Text zu überlagern.
- Optional: ein sehr dezentes `blur`- oder `drop-shadow`-Filter auf das Hintergrund-Logo, damit es klarer und räumlicher wirkt.

### 3. Hero-Content mit Glassmorphism
- **Datei:** `src/components/Hero.tsx`
- Headline-/CTA-Block in ein Glassmorphism-Panel packen: starker Blur, halbtransparenter Hintergrund, feine Border, ausreichend Padding.
- Eyebrow-Chip und Benefit-Chips an den neuen Glass-Look anpassen (deutlicher lesbar, aber weiterhin dezent).
- Sicherstellen, dass der Panel-Text auf dem Hintergrund-Logo und dem Gradienten kontrastreich bleibt.

### 4. Design-System ergänzen
- **Datei:** `src/styles.css`
- `.glass`-Utility erweitern oder eine neue `.glass-strong`-Utility hinzufügen (`backdrop-blur-xl`, höhere Hintergrund-Deckkraft, stärkere Border).
- Sicherstellen, dass die neuen Utilities in Tailwind v4 korrekt als `@utility` oder CSS-Klassen definiert sind.
- Keine Glow-Effekte hinzufügen (bestehende Design-Regel).

### 5. QA
- Preview auf Desktop und Mobile prüfen: Logo nicht abgeschnitten, Header nicht zu hoch, Hero-Text weiterhin gut lesbar.
- Kontrastprüfung für Glassmorphism-Text im Hero.
- Build und Lighthouse-Kurzcheck durchführen.

## Nicht im Scope
- Kein neues Logo-Asset generieren (bestehende Assets bleiben).
- Keine Änderungen an Business-Logik, Routen oder SEO-Metadaten.
