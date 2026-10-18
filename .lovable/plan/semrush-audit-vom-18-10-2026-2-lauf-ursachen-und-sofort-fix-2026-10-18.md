# Semrush-Audit vom 18.10.2026 (2. Lauf) – Ursachen und Sofort-Fix

Gute Nachricht: Alle **Fehler** (Errors) stehen jetzt auf 0. Doppelte Canonicals, strukturierte Daten und Sitemap sind behoben. Übrig sind nur noch 4 **Warnungen**. Die Ursachen sind klar:

## 1. „Kaputte externe Links“ (19 Seiten): WhatsApp-Knopf
- **Ursache:** Der Link ist nicht kaputt. WhatsApp (`wa.me`) blockiert automatische Prüfprogramme mit Code **429 („zu viele Anfragen“)**. Semrush wertet das als kaputt. Für Besucher funktioniert der Link.
- **Fix:** Der WhatsApp-Knopf und die mobile Leiste erscheinen erst, wenn die Seite im Browser geladen ist. Besucher merken davon nichts (der Knopf ist wie bisher sofort da). Crawler sehen den `wa.me`-Link dann nicht mehr im Seitenquelltext, also auch keinen „kaputten Link“.

## 2. „Nofollow bei internen Links“ (82 Städteseiten)
- **Ursache:** Diese Warnung kommt von unserem letzten Fix: Der Knopf „Anfrage für [Stadt]“ hat `rel="nofollow"` bekommen. Semrush mag kein nofollow auf internen Links.
- **Fix:** `nofollow` entfernen und die Stadt nicht mehr in der Adresse übergeben (`/kontakt?stadt=…`). Der Link geht einfach auf `/kontakt`. Die Stadt wird unsichtbar mitgegeben, damit das Formular trotzdem vorausgefüllt ist. Ergebnis: keine Varianten der Kontaktseite und kein nofollow mehr.

## 3. „Wenig Text“ (5 Seiten: Ablauf, FAQ, Kontakt, Leistungen, Über uns)
- **Ursache:** Auf diesen Seiten stehen nur 145–197 Wörter. Semrush erwartet mindestens ca. 200.
- **Fix:** Jede Seite bekommt einen kurzen, hilfreichen Abschnitt mit etwa 150–250 Wörtern, neutral formuliert und ohne Preise oder Zahlen:
  - Ablauf: „Was Sie vorbereiten können“ und „Was nach der Übergabe passiert“
  - FAQ: Einleitung und Hinweis auf die kostenlose Besichtigung
  - Kontakt: „So geht es nach Ihrer Anfrage weiter“ und Einsatzgebiet NRW
  - Leistungen: Überblick, welche Leistung wann passt, mit Links zu den Detailseiten
  - Über uns: Arbeitsweise, Diskretion und umweltgerechte Entsorgung
- Diese Texte schreibe ich selbst. Bitte prüfen Sie danach, ob sie zu Ihrem Betrieb passen.

## 4. „Niedriges Text-zu-Code-Verhältnis“ (82 Seiten)
- **Ursache:** Moderne Webseiten bringen viel Technik mit (Design, Skripte, Schema-Daten). Semrush stuft das nur als Warnung mit geringer Wirkung ein, und Google bewertet es nicht.
- **Fix:** Punkt 1 (weniger Code) und Punkt 3 (mehr Text) verbessern den Wert schon. Dazu kommt auf den Städteseiten ein kurzer, stadtspezifischer Absatz. Einen großen Umbau dafür mache ich nicht, weil der Nutzen zu klein wäre.

## Abschluss
- Prüfung in der Vorschau: Der WhatsApp-Knopf funktioniert, das Formular ist mit der Stadt vorausgefüllt, im Seitenquelltext steht kein nofollow und kein `wa.me`.
- Danach **veröffentlichen** und in Semrush den Audit neu starten („Re-run campaign“).

## Technische Details
- `src/components/WhatsAppButton.tsx`: Erst nach dem Laden im Browser anzeigen (Mounted-State bzw. `useHydrated`), Inhalt sonst `null`.
- `src/routes/entruempelung.$stadt.tsx`: `<Link to="/kontakt" state={{ stadt }}>`, kein `rel="nofollow"`. Optional ein zusätzlicher Absatz pro Stadt.
- `src/components/ContactForm.tsx`: Stadt aus `useRouterState().location.state` lesen, mit dem bisherigen `?stadt=`-Parameter als Rückfall.
- Textabschnitte in `src/routes/ablauf.tsx`, `faq.tsx`, `kontakt.tsx`, `leistungen.index.tsx`, `ueber-uns.tsx`.
