# Bericht und Plan: Ladezeit (LCP) auf allen Seiten unter 2,5 s

## Was die 10 Screenshots zeigen
| Seite | LCP | Größtes Element | TBT | CLS |
|---|---|---|---|---|
| / (Startseite) | 3,74 s (vorher bis 10 s) | Bild (Hintergrund-Logo) | 189 ms | 0 |
| /agb | 3,81 s | Textabsatz | 8 ms | 0 |
| /leistungen/kellerraeumung | 3,80 s | Textabsatz | 0 ms | 0 |
| /leistungen/wohnungsaufloesung | 2,87 s | Textabsatz | 0 ms | 0 |
| /entruempelung/koeln | 2,91 s | Textabsatz | 0 ms | 0 |
| /entruempelung/wuppertal | 3,06 s | Textabsatz | 0 ms | 0 |
| /entruempelung/dortmund | 3,82 s | Einleitungstext im Kopfbereich | 7 ms | 0 |
| /entruempelung/duisburg | 3,84 s | Textabsatz | 31 ms | 0 |
| /entruempelung/krefeld | 3,83 s | Textabsatz | 28 ms | 0 |
| /entruempelung/duesseldorf | 3,86 s | Textabsatz | 15 ms | 0 |

Gut: Alle Seiten haben sich nach dem letzten Veröffentlichen von "Poor" auf "To Improve" verbessert. Schriften laden jetzt von entlastium.de ("Text sichtbar während Schrift lädt" ist grün). Wartezeit und Layout-Sprünge sind überall grün.

Offen: Überall ist nur noch die Ladezeit des ersten großen Inhalts (LCP) gelb, 2,9 bis 3,9 s. Ziel ist unter 2,5 s.

## Die Ursachen, Punkt für Punkt
1. **Das Logo oben links ist der größte Bremser auf jeder Seite.** Ich habe die Live-Seite geprüft: Das Logo ist eine PNG-Datei mit 817×959 Pixeln und **277 KB**. Angezeigt wird es nur 64×64 Pixel groß. Außerdem ist es als "höchste Priorität" markiert und wird vorgeladen. Auf einem langsamen Handy nimmt es Schriften und Stylesheet die Bandbreite weg, deshalb erscheint der Text später. Das betrifft alle 10 Seiten und alle anderen Seiten auch (auch die Fußzeile nutzt dieses Logo).
2. **"Avoid chaining critical requests" / "Eliminate render-blocking resources"** (rot auf allen Seiten): Der Browser lädt zuerst die Seite, dann das Stylesheet (106 KB, gepackt ca. 18 KB) und erst danach die Schrift. Die Schriften sind schon vorgeladen. Der größte verbliebene Stau ist das Logo aus Punkt 1.
3. **"Preconnect to Required Origins"** (rot): Kommt fast sicher vom Logo und dem Hintergrund-Logo, die über den Datei-Speicher der Plattform laufen. Mit kleinen Dateien direkt von entlastium.de verschwindet das.
4. **"Reduce server response time"** (neu bei Startseite, Köln, Duisburg, Düsseldorf): Der Server baut jede Seite bei jedem Aufruf neu. Manchmal dauert das länger, wenn der Server "kalt" ist. Lösung: fertige Seiten kurz zwischenspeichern lassen (5 Min. Browser, 1 Tag beim Netzwerk, Aktualisierung im Hintergrund).
5. **"Remove Unused JavaScript"** (gelb/rot): Das Hauptskript ist 167 KB groß (gepackt). Es enthält React und den Seitenrouter, die nötig sind. Dazu kommt die Hinweis-Bibliothek (Toaster), die auf jeder Seite mitlädt, obwohl sie nur nach dem Absenden des Formulars gebraucht wird. Sie wird erst beim Gebrauch nachgeladen.
6. **Startseite TBT 189 ms / `__l5e/events…js` 316 ms:** Das ist die eingebaute Besucher-Statistik der Plattform. Ich kann sie nicht ändern. Sie ist grün und beeinflusst den LCP nicht.
7. **"Use video formats for animated content":** Auf der Seite gibt es keine GIFs und keine animierten Bilder (geprüft). Das ist sehr wahrscheinlich ein Fehlalarm von Semrush. Ich ändere dafür nichts. Nach den anderen Fixes sollte die Meldung von selbst verschwinden, sonst schaue ich sie noch einmal an.

## Verbesserungsplan (Aussehen bleibt gleich)
1. **Logo verkleinern:** kleine WebP-Versionen (128 px und 256 px für scharfe Displays, je ca. 5–15 KB statt 277 KB), direkt von entlastium.de geladen. Die "höchste Priorität" und das Vorladen entfallen. Kopfzeile und Fußzeile nutzen die kleine Version.
2. **Startseiten-Hintergrund-Logo:** WebP ebenfalls direkt von entlastium.de und in Handy-Größe (640 px) statt 46 KB vom Datei-Speicher.
3. **Seiten zwischenspeichern:** Cache-Hinweis für alle normalen Seiten. Formular und E-Mail-Funktionen sind davon ausgenommen.
4. **Toaster erst bei Bedarf laden:** Die Hinweis-Bibliothek kommt nicht mehr ins Hauptskript.
5. **Prüfung:** Lighthouse auf dem Handy, Vorher/Nachher für `/`, `/agb`, `/entruempelung/dortmund` und `/leistungen/kellerraeumung`, dazu ein Bildvergleich der Kopfzeile.

## Erwartung
LCP auf dem Handy ca. 1,8–2,5 s auf allen Seiten, die Startseite ebenfalls im grünen Bereich. Wirkt erst nach dem Veröffentlichen. Semrush zeigt die neuen Werte nach dem nächsten Scan.

## Technische Details
- `sharp`: logo-full.png auf 128/256 px WebP umwandeln, nach `public/brand/` legen. Header-`<img>` mit `srcset`, `width/height=64`, `fetchPriority` entfernen, `decoding="async"`. Footer mit `loading="lazy"`. Woher der `<link rel=preload as=image logo-full>` auf allen Seiten kommt, finden und ihn entfernen.
- Hero: logo-mark als 640/1024 px WebP in `public/brand/` mit `srcset` und `sizes`; Preload in `index.tsx` anpassen (`imagesrcset`).
- Cache: Request-Middleware in `src/start.ts` (oder bestehende) setzt `Cache-Control: public, max-age=300, s-maxage=86400, stale-while-revalidate=604800` nur für GET-HTML-Antworten außerhalb von `/api`, `/lovable`, `/email`, `/unsubscribe`.
- `Toaster` in `__root.tsx` per `React.lazy` hinter `ClientOnly`; `toast`-Aufrufe in ContactForm per dynamischem `import("sonner")`.
- Kein Entfernen von `tw-animate-css` (wird genutzt).
