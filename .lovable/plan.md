
## Ziel

Alle 84 NRW-Städte aus `src/data/nrw-cities.ts` von **jeder Seite aus** intern verlinken — für besseres Crawling, mehr Link-Juice auf die Stadt-Seiten und höhere lokale Sichtbarkeit.

## Status quo (Bestätigung)

- 84 Städte in `src/data/nrw-cities.ts` ✅
- Jede hat eine eigene SSR-Route `/entruempelung/<slug>` mit eigenem `head()`, JSON-LD und FAQ ✅
- Alle in `sitemap.xml` ✅
- Hub-Seite `/staedte` listet alle Städte nach Region ✅
- **Aber:** Footer & Header verlinken bisher weder `/staedte` noch einzelne Städte.

## Änderungen

### 1. `src/components/Footer.tsx` — neue Spalte „Wir entrümpeln in NRW"

- Neuer Block mit **Top-20 Städten** (nach Einwohnerzahl sortiert: Köln, Düsseldorf, Dortmund, Essen, Bochum, Duisburg, Wuppertal, Bielefeld, Bonn, Münster, Mönchengladbach, Gelsenkirchen, Aachen, Krefeld, Oberhausen, Hagen, Hamm, Mülheim, Leverkusen, Solingen).
- Jede Stadt = klickbarer Link auf `/entruempelung/<slug>`.
- Darunter ein Link: **„Alle 84 Städte in NRW ansehen →"** auf `/staedte`.
- Footer-Grid wird von `lg:grid-cols-4` auf `lg:grid-cols-5` erweitert (oder Städte-Block spannt 2 Spalten).
- „Leistungen"-Links werden gleichzeitig von `#services` (Hash-Anchor) auf echte Routen `/leistungen/<slug>` umgestellt.

### 2. `src/components/Header.tsx` — Navigation ergänzen

- Menüpunkt **„Städte"** hinzufügen, der auf `/staedte` verweist.
- Falls Desktop-Nav zu voll wird: als Dropdown (Top-10 Städte + „Alle Städte ansehen").

### 3. `src/routes/staedte.tsx` — kleine Aufwertung

- Bereits vorhandene Hub-Seite. Zusätzlich oben einen **Such-/Filter-Input** (clientseitig) zum schnellen Finden einer Stadt — bei 84 Einträgen nützlich für UX.
- Kein neuer SEO-Aufwand nötig, Hub steht.

### 4. Keine Änderung an Sitemap / Stadt-Routen

Alle Städte sind bereits enthalten und SSR-gerendert. Es geht ausschließlich um zusätzliche **interne Links** von Layout-Komponenten.

## Warum nicht alle 84 in den Footer?

- 84 Links im Footer wirken spammig und verwässern die Linkkraft.
- Best Practice: **Top-N im Footer** (~15–25) + **Hub-Seite** (`/staedte`) mit allen.
- Google folgt von der Hub-Seite zu allen 84, weil sie ihrerseits auf jeder Seite (über den Footer-Link „Alle Städte ansehen") erreichbar ist → maximal 2 Klicks von jeder Seite zu jeder Stadt.

## Technische Details

```text
src/components/Footer.tsx       — neue Spalte „Städte" + Link zu /staedte; Leistungen auf echte Routen
src/components/Header.tsx       — neuer Nav-Link „Städte" → /staedte
src/routes/staedte.tsx          — optional: clientseitiger Such-Filter
```

Kein Backend, keine neuen Routen, keine Sitemap-Änderung.
