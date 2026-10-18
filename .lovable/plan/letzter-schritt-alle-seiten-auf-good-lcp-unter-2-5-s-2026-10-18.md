# Letzter Schritt: alle Seiten auf "Good" (LCP unter 2,5 s)

## Stand laut Screenshot
- Bereits **Good**: Wuppertal 2,33 s, Duisburg 2,39 s, Düsseldorf 2,31 s.
- Knapp drüber (0,01–0,25 s): Kellerräumung 2,51, Dortmund 2,60, AGB 2,61, Köln 2,63, Krefeld 2,69, Wohnungsauflösung 2,73.
- Startseite 3,05 s. Größtes Element ist dort das Hintergrund-Logo.
- Wartezeit (TBT) und Layout-Sprünge (CLS) sind überall grün. Die kleine Verschiebung von 0,005 auf der AGB-Seite ist unbedenklich.

Es fehlen also nur noch ein paar Zehntelsekunden. Zwei Wartezeiten bleiben übrig: (a) Der Server baut jede Seite neu, gemessen ca. 0,4 s bis zum ersten Byte. (b) Erst wenn das Stylesheet geladen ist, kann der Text erscheinen.

## Maßnahmen (Aussehen bleibt gleich)
1. **Feste Seiten vorab fertig bauen:** Die Startseite, alle Leistungsseiten, die Städteseiten, Ablauf, FAQ, Über uns, Kontakt, AGB, Impressum, Datenschutz, Städte und die Ratgeber werden beim Veröffentlichen einmal fertig erstellt. Danach werden sie sofort als fertige Datei ausgeliefert. Das spart pro Aufruf ca. 0,2–0,4 s und behebt auch "Reduce server response time". Das Formular und der E-Mail-Versand funktionieren weiter wie bisher.
2. **Startseiten-Logo für Handys kleiner:** Auf dem Handy wird das Logo nur ca. 320 px breit angezeigt. Es bekommt eine 400-px-Version mit ca. 12 KB statt 41 KB. Größere Bildschirme behalten die 640-px-Version.
3. **Logo oben nicht mehr vorladen lassen:** Das Logo ist schon klein, wird aber noch automatisch vorgeladen und wartet dann vor dem Stylesheet. Es soll ganz normal laden.
4. **Prüfung:** Lighthouse auf dem Handy vorher und nachher für `/`, `/agb`, `/entruempelung/koeln` und `/leistungen/wohnungsaufloesung`. Dazu ein Screenshot-Vergleich.

## Erwartung
Alle 10 Seiten liegen bei ca. 1,8–2,3 s, also "Good". Die Startseite liegt bei etwa 2,3–2,6 s. Wirksam erst nach dem Veröffentlichen und dem nächsten Semrush-Scan.

## Technische Details
- `vite.config.ts`: `defineConfig({ tanstackStart: { pages: [...], prerender: { enabled: true, autoStaticPathsDiscovery: false } } })`. In `pages` stehen alle statischen Routen, alle Städte aus `NRW_CITIES` (`/entruempelung/{slug}`) und alle Leistungsslugs aus `SERVICES`. `/unsubscribe`, `/api/*`, `/lovable/*` und `/email/*` sind ausgeschlossen. Die Version 2.26.5 erfüllt die Voraussetzung (ab 2.20.0).
- Prüfen, dass keine Seite Cookies oder Session liest. Den QueryClient-Timer mit dem `TSS_PRERENDERING`-Schutz versehen, falls der Build nicht beendet wird.
- Hero: `srcSet="/brand/mark-400.webp 400w, /brand/mark-640.webp 640w"` mit `sizes="(max-width:640px) 320px, 640px"`. Preload mit `imageSrcSet`/`imageSizes`.
- Header-Logo: `loading="lazy"` verhindert das automatische Vorladen durch React.
