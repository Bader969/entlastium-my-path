
# SEO-Offensive für Entlastium — NRW-weit sichtbar (Stand 2026)

Ziel: In **allen ~80 NRW-Städten** für „Entrümpelung [Stadt]" und „Haushaltsauflösung [Stadt]" ranken — plus moderne On-Page-, Technical- und AI-Search-Optimierung.

## Umfang (bestätigt)

1. **~80 NRW-Städte** — alle Großstädte + mittlere Städte (≥40k Einwohner)
2. **6 Service-Seiten als eigenständige Routen** (Haushaltsauflösung, Entrümpelung, Kellerräumung, Gartenräumung, Endreinigung, Wohnungsübergabe)
3. **Blog/Ratgeber** kommt später — jetzt nicht im Scope

## Schritte

### 1. Stammdaten (`src/data/nrw-cities.ts`)
Liste aller ~80 Städte: `{ slug, name, plz, einwohner, region, stadtteile[] }`. Köln, Düsseldorf, Dortmund, Essen, Bochum, Duisburg, Wuppertal, Bielefeld, Bonn, Münster, Mönchengladbach, Gelsenkirchen, Aachen, Krefeld, Oberhausen, Hagen, Hamm, Mülheim, Leverkusen, Solingen, Herne, Neuss, Paderborn, Recklinghausen, Bottrop, Remscheid, Moers, Siegen, Witten, Iserlohn, Gütersloh, Marl, Lünen, Velbert, Minden, Dorsten, Ratingen, Castrop-Rauxel, Lippstadt, Dormagen, Bergisch Gladbach, Troisdorf, Gladbeck, Herford, Detmold, Arnsberg, Rheine, Bocholt, Grevenbroich, Viersen, Euskirchen, Unna, Hürth, Sankt Augustin, Langenfeld, Hilden, Pulheim, Neuwied (NRW-nah), Stolberg, Dinslaken, Wesel, Soest, Lüdenscheid, Bornheim, Bergkamen, Erftstadt, Kerpen, Frechen, Goch, Kleve, Kamen, Meerbusch, Gummersbach, Ahlen, Beckum, Coesfeld, Warendorf, Borken, Steinfurt, Greven, Olpe, Brilon, Schwerte, Werl, Wermelskirchen — finale Liste in der Datei.

### 2. Dynamische Stadt-Route (`src/routes/entruempelung.$stadt.tsx`)
- URL: `/entruempelung/{slug}` (z. B. `/entruempelung/bochum`)
- Loader holt Stadt-Daten aus `nrw-cities.ts`, sonst `notFound()`
- `head()` baut individuell: Title, Description, OG-Tags, Canonical, JSON-LD `LocalBusiness` mit `areaServed` = Stadt
- Inhalt SSR-gerendert (echtes HTML für Google):
  - H1: „Entrümpelung & Haushaltsauflösung in {Stadt}"
  - Intro-Absatz mit Stadt-Variablen (Einwohner, PLZ, Region)
  - Service-Liste mit Stadtbezug
  - 4–5 lokale FAQ-Einträge
  - 6 interne Links zu Nachbarstädten
  - CTA mit vorausgefülltem Stadt-Feld im Kontaktformular

### 3. Eigenständige Service-Routen
- `src/routes/leistungen.tsx` — Übersicht
- `src/routes/leistungen.haushaltsaufloesung.tsx`
- `src/routes/leistungen.entruempelung.tsx`
- `src/routes/leistungen.kellerraeumung.tsx`
- `src/routes/leistungen.gartenraeumung.tsx`
- `src/routes/leistungen.endreinigung.tsx`
- `src/routes/leistungen.wohnungsuebergabe.tsx`

Jede Seite: eigene `head()`, einzigartiges H1, 400–600 Wörter Content, FAQ-Block, JSON-LD `Service`, Link zu Stadt-Übersicht.

### 4. Weitere echte Routen (statt Hash-Anchors)
- `src/routes/ueber-uns.tsx`
- `src/routes/ablauf.tsx`
- `src/routes/kontakt.tsx`
- `src/routes/faq.tsx`
- `src/routes/staedte.tsx` — Übersicht aller 80 NRW-Städte (interne Verlinkung + Hub-Seite)

Header-Navigation wird auf diese echten Routen umgestellt.

### 5. Strukturierte Daten (JSON-LD)
- `__root.tsx`: `Organization` + `WebSite` mit SearchAction
- Homepage: `LocalBusiness` (areaServed: NRW), `AggregateOffer`
- FAQ-Route + jede Stadt-/Service-FAQ: `FAQPage`
- Stadt-Seiten: `LocalBusiness` + `Service` + `BreadcrumbList`
- Service-Seiten: `Service` + `BreadcrumbList`

### 6. Dynamische `sitemap.xml`
Neue Route `src/routes/sitemap[.]xml.ts`: enthält Homepage, alle Service-Routen, alle 80 Stadt-URLs, statische Seiten — automatisch generiert aus `nrw-cities.ts` und Service-Liste.

### 7. `robots.txt` (in `public/`)
- `Sitemap: https://entlastium.de/sitemap.xml`
- AI-Bots explizit erlauben: `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `OAI-SearchBot`, `Bytespider`

### 8. AI-Search-Optimierung (`llms.txt` in `public/`)
Kuratierte Übersicht der wichtigsten Seiten + Service-Beschreibung im Markdown-Format — Standard 2026 für ChatGPT Search, Perplexity, Claude.

### 9. On-Page-Pass über bestehende Komponenten
- `<img>` bekommen `width`/`height` + sinnvolle `alt`-Texte mit Keyword-Bezug
- Hero-Logo: `fetchpriority="high"`, andere Bilder `loading="lazy"`
- Genau eine `<h1>` pro Route, semantische `h2`/`h3`-Hierarchie
- Footer-Block „Wir sind in diesen Städten aktiv:" mit Links zu Top-20 Städten (interner Link-Juice für Long-Tail)

### 10. Header-Navigation umbauen
Von Hash-Anchors (`/#services`) auf echte Routen (`/leistungen`, `/ueber-uns`, `/staedte`, `/kontakt`, `/faq`).

### 11. SEO-Scan
Nach Implementierung: Lovable SEO-Review starten zur Validierung.

## Technische Details

```text
src/data/nrw-cities.ts                 — Stammdaten
src/routes/entruempelung.$stadt.tsx    — dyn. Stadt-Seite
src/routes/staedte.tsx                 — Städte-Hub
src/routes/leistungen.tsx + 6 Subs     — Service-Seiten
src/routes/ueber-uns.tsx | ablauf.tsx | kontakt.tsx | faq.tsx
src/routes/sitemap[.]xml.ts            — dyn. Sitemap
public/robots.txt                      — AI-Bots + Sitemap
public/llms.txt                        — LLM-Crawler-Hub
src/components/Header.tsx              — Nav auf echte Routen
src/components/Footer.tsx              — Städte-Linkblock
__root.tsx                             — Organization/WebSite JSON-LD
```

## Hinweise zu Off-Page (Nutzer-Tasks)

Außerhalb des Codes wirken am stärksten:
- **Google Business Profile** für Bochum (NAP konsistent zur Webseite)
- **Search Console + Bing Webmaster** verifizieren (Lovable hat dafür eine Integration)
- Lokale Verzeichnisse: Gelbe Seiten, Das Örtliche, 11880, ProvenExpert
- Google-Bewertungen aktiv einsammeln

Diese erwähne ich am Ende der Implementierung als Checkliste.

Bereit zur Umsetzung — ich starte mit den Stammdaten und der dynamischen Stadt-Route, dann Service-Routen, Sitemap, robots/llms, JSON-LD, und zum Schluss Header/Footer + SEO-Scan.
