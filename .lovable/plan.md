
## Ziel
Zurück zum vorherigen, lebendigeren Design (Sand/Gold/Teal Palette mit Animationen), aber das neue Logo (transparenter Hintergrund) bleibt überall im Einsatz.

## Schritte

1. **Design-System zurücksetzen** (`src/styles.css`)
   - Slate & Steel OKLCH-Tokens entfernen
   - Vorherige Sand/Gold/Teal Palette wiederherstellen
   - Gradients, Glow-Effekte und Schatten wie vorher
   - Animationen reaktivieren (`animate-float`, `pulse-glow`, `text-gradient-animated`)

2. **Typografie zurücksetzen** (`src/routes/__root.tsx`)
   - Vorherige Schriftarten-Konfiguration wiederherstellen

3. **Komponenten zurücksetzen** auf vorherigen Stand:
   - `Header.tsx` — alte Optik, aber neues Logo behalten
   - `Hero.tsx` — Trust-Row & "Geprüfter Fachbetrieb" Badge entfernen, floating Background-Logo wieder rein (mit neuem transparenten Logo)
   - `Footer.tsx` — Trust-Strip entfernen, alte Variante zurück

4. **Logo beibehalten**
   - `src/assets/logo-full.png.asset.json` und `src/assets/logo-mark.png.asset.json` bleiben unverändert
   - `public/favicon.png` (neu generiert) bleibt
   - Alle `<img src={...logo...}>` Referenzen zeigen weiter auf die neuen transparenten PNGs

## Nicht ändern
- Preis-Rechner bleibt entfernt (frühere User-Entscheidung)
- Responsive Fixes aus vorherigen Runden bleiben erhalten
- Neue Logo-Assets werden NICHT gelöscht
