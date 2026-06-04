## Ziel
Neues Logo überall einsetzen und die Seite auf ein seriöses "Slate & Steel"-Niveau heben (Enterprise-Look, ruhig, sachlich, hochwertig).

## 1. Logo-Konvertierung
- EPS (`download.eps`) via Ghostscript/ImageMagick (nix) in zwei Varianten rendern:
  - `logo-full.png` (1600×1600, transparent) — Hauptlogo
  - `logo-mark.png` (512×512, transparent) — Icon-Variante
- Via `lovable-assets` zu CDN-Pointern (`*.asset.json`) machen
- Alte Logos (`logo.jpeg`, `logo-icon.png`, `logo-full.png`) ersetzen bzw. entfernen

## 2. Farbsystem auf Slate & Steel umstellen (`src/styles.css`)
Neue Tokens (oklch-Äquivalente):
- `--background`: nahezu weiß mit leichtem kühlen Ton (`#f8fafc`)
- `--foreground` / `--primary`: tiefes Slate (`#1e293b`)
- `--secondary`: Slate-500 (`#475569`)
- `--accent`: gedämpftes Steel-Blau statt Sand-Gold (`#64748b` → Hover `#334155`)
- Sand/Gold/Teal-Tokens entfernen oder neutralisieren
- Gradients & Glow auf kühles Slate/Steel umstellen, Glow deutlich reduzieren (Seriösität statt Glanz)
- Schatten weicher und subtiler

## 3. Typografie & Tonalität
- Heading-Font auf `Instrument Serif` oder behalten, aber `font-weight` reduzieren
- Body bleibt Inter
- `text-gradient-animated` im Hero durch ruhigen statischen Akzent ersetzen (kein Regenbogen-Shift)
- `animate-float`, Pulse-Glow im Hintergrund stark reduzieren oder entfernen

## 4. Header (`Header.tsx`)
- Hintergrund von `primary/85` auf seriöses dunkles Slate mit dünnem Border
- Logo-Bild durch neues `logo-mark` ersetzen, dezent (h-10)
- Accent-Button → neutraler primärer Slate-Button mit feinem Border statt Gold

## 5. Hero (`Hero.tsx`)
- Großes schwebendes Hintergrund-Logo entfernen (wirkt unseriös) → ersetzen durch dezente Mesh-Layer
- Headline: ruhig, kein animierter Farbverlauf
- Neues Logo dezent links neben/über der Headline als kleiner Brand-Mark
- Trust-Row hinzufügen: "Versichert · Festpreis · DSGVO-konform · 4,9★ Bewertung" (statisch, schlicht)
- CTAs: ein primärer Slate-Button + ein outline-Button

## 6. Section-Components Politur
- `ServicesDashboard`, `ProcessTimeline`, `AboutUs`, `FAQ`, `ContactForm`, `Footer`:
  - Cards: dünner Border, geringere Border-Radius (von 1rem auf 0.75rem), subtilere Schatten
  - Icon-Container: monochrom Slate statt Gold
  - Hover-Effekte abdämpfen (kein "glow")
- Footer: neues Logo + zusätzliche Seriositäts-Elemente (Zahlungsmethoden-Hinweis, Versicherungs-Badge optional)

## 7. Favicon
- `public/favicon.png` aus neuem Logo neu generieren (64×64)

## Technische Details
```
nix run nixpkgs#imagemagick -- convert -density 600 -background none \
  /mnt/user-uploads/download.eps -resize 1600x1600 /tmp/logo-full.png
```
Dann `lovable-assets create --file /tmp/logo-full.png ...` → JSON-Pointer in `src/assets/`.

Imports im Code umstellen von `@/assets/logo.jpeg` etc. auf die neuen Asset-JSON-Pointer.

## Betroffene Dateien
- neu: `src/assets/logo-full.png.asset.json`, `src/assets/logo-mark.png.asset.json`
- gelöscht: `src/assets/logo.jpeg`, alte `logo-icon.png`, alte `logo-full.png`
- edit: `src/styles.css`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/ServicesDashboard.tsx`, `src/components/ProcessTimeline.tsx`, `src/components/AboutUs.tsx`, `src/components/FAQ.tsx`, `src/components/ContactForm.tsx`, `src/components/Footer.tsx`, `public/favicon.png`

## QA
- Preview auf Desktop, Tablet, Mobile prüfen
- Konsole/Network auf Fehler checken
- Kontrast (WCAG AA) der neuen Slate/Steel-Kombination bestätigen
