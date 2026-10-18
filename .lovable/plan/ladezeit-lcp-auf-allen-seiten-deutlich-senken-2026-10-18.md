# Ladezeit (LCP) auf allen Seiten deutlich senken

## Was die Screenshots zeigen
- Kurze Wartezeit (TBT) und Layout-Sprünge (CLS) sind auf allen Seiten grün. Daran liegt es nicht.
- Das Problem ist überall **LCP**, also wann der größte Inhalt erscheint: 4–7 s, Ziel ist unter 2,5 s.
- Auf fast allen Seiten ist dieser Inhalt **ein Textabsatz** (Einleitungstext, sogar auf der AGB-Seite). Nur auf der Startseite ist es das große Logo im Hintergrund.
- Text kann eigentlich sofort erscheinen. Er kommt hier spät, weil der Browser vorher auf Folgendes wartet: das Stylesheet, ein zweites Stylesheet von Google Fonts (eigener Server, zusätzliche Verbindung) und dann die Schriftdateien selbst. Auf einem simulierten langsamen Handy summiert sich das auf mehrere Sekunden.

## Sofort-Fixes (Design bleibt exakt gleich)
1. **Schriften selbst hosten:** Urbanist und Epilogue als eigene Dateien direkt von entlastium.de laden statt von Google. Nur die tatsächlich genutzten Stärken behalten, die zwei wichtigsten Schriftdateien vorladen. Die Verbindung zu Google Fonts fällt komplett weg.
2. **Text nie verstecken:** Schriften so einstellen, dass der Text sofort in einer passenden Ersatzschrift erscheint. Die Maße der Ersatzschrift werden angeglichen, damit beim Wechsel nichts springt.
3. **Startseiten-Logo verkleinern:** Das Hintergrund-Logo (aktuell 112 KB PNG) wird zu einem kleinen WebP (~15–25 KB) in passender Größe für Handys. Die Einblend-Animation oben im Startbereich wird entfernt, damit nichts unsichtbar startet.
4. **Weniger blockierender CSS-Code:** Ungenutzte Animations-Bibliothek prüfen und entfernen, falls sie nicht gebraucht wird. So wird das Stylesheet kleiner.
5. **Hinweis zum Analyse-Skript:** `__l5e/events…js` (300 ms auf der Startseite) ist das eingebaute Besucher-Tracking der Plattform. Es lässt sich nicht im Code ändern. Es bremst nur die Wartezeit, nicht die LCP-Anzeige, und ist bereits grün.

## Erwartung
LCP auf dem Handy etwa 1,5–2,5 s statt 4–7 s. Wirksam erst nach dem Veröffentlichen. Semrush zeigt die neuen Werte nach dem nächsten Scan.

## Technische Details
- woff2-Dateien (latin-Subset, nur die Stärken 400/500/600/700) unter `public/fonts/`, `@font-face` mit `font-display: swap` in `src/styles.css`, zusätzlich Fallback-`@font-face` mit `size-adjust`/`ascent-override` gegen CLS.
- In `__root.tsx`: die Google-Fonts-Links und preconnects entfernen, `preload` für 2 woff2 hinzufügen (crossOrigin).
- Logo: mit sharp in WebP 640px umwandeln, per lovable-assets hochladen, Pointer in `Hero.tsx` und den Preload in `index.tsx` tauschen. `animate-fade-in` aus dem Hero entfernen.
- Den Import von `tw-animate-css` nur dann entfernen, wenn kein `animate-in`/`fade-in-*`-Klassenname in Komponenten (Dialog/Sheet/Accordion) genutzt wird. Sonst behalten.
- Prüfung: lokal mit Lighthouse (mobile) Vorher/Nachher für `/`, `/entruempelung/koeln`, `/agb` und einen Screenshot-Vergleich, damit die Optik identisch bleibt.
