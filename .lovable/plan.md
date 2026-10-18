# Semrush Site Audit: Fehler und Warnungen beheben

Ausgangslage (Screenshot): 100 Seiten gecrawlt, Site Health 91 %, 21 Fehler, 131 Warnungen, Internal Linking 90 %, Markups 98 %, Core Web Vitals 0 % (keine Daten).

Die Semrush-Verbindung kann Site-Audit-Berichte nicht abrufen. Sobald die exportierte Fehlerliste (CSV/PDF/Screenshots) hochgeladen ist, wird jeder Punkt genau zugeordnet. Bis dahin deckt dieser Plan die typischen Ursachen ab.

## Schritte

1. **Fehlerliste auswerten** – Export lesen, jeden Fehler und jede Warnung einer Seite zuordnen.
2. **Eigener Crawl** – alle Seiten aus der Sitemap prüfen auf: kaputte Links (4xx), Weiterleitungsketten, doppelte Titel/Beschreibungen, zu lange/kurze Titel, fehlende H1 oder mehrere H1, Bilder ohne Alt-Text, fehlende Canonicals.
3. **Sitemap bereinigen** – `/unsubscribe` aus der Sitemap entfernen (keine Inhaltsseite, ist in robots.txt gesperrt – klassischer Semrush-Fehler).
4. **Interne Verlinkung** – Seiten mit nur einem eingehenden Link (z. B. Städte-Seiten, Ratgeber) zusätzlich aus passenden Seiten verlinken; Links mit Slash-Varianten (`/leistungen` vs. `/leistungen/`) vereinheitlichen.
5. **Markup** – strukturierte Daten auf den gemeldeten Seiten korrigieren (bestehende FAQ-Schemas bleiben).
6. **Ladezeit** – große Bilder verkleinern, Bildgrößen angeben, unnötig blockierende Ressourcen prüfen.
7. **Prüfen** – erneuter eigener Crawl ohne Fehler, Build fehlerfrei; danach neu veröffentlichen und den Semrush-Audit erneut starten.

## Technische Details
- Sitemap: `src/routes/sitemap[.]xml.ts`
- Metadaten nur in den Seiten-heads (Projektregel), keine Root-Titel.
- Core Web Vitals 0 % bedeutet meist "keine Daten", nicht schlecht – wird erst nach mehr Besuchern gemessen.
