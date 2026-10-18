# Text-zu-Code-Verhältnis: die restlichen 13 Seiten

## Stand
Fortschritt: Von 82 betroffenen Seiten sind noch 13 übrig. Alle 84 Städteseiten sind raus. Übrig sind: Startseite, Ablauf, FAQ, Impressum, Kontakt, Städte-Übersicht, Leistungen und 6 Leistungsseiten. Ihr Wert liegt bei 6–10 %. Semrush möchte über 10 % sehen.

Meine Messung in der Vorschau zeigt drei Ursachen:
1. **Zugeklappte FAQ-Antworten:** Die Antworten werden erst beim Aufklappen erzeugt. Für Google und Semrush sind sie deshalb unsichtbar, nur die Fragen stehen im Text. Das betrifft FAQ, die Startseite und die Leistungsseiten.
2. **Viele Bild-Symbole im Code:** Jedes kleine Icon (Haken, Pfeile, Telefon) steht als Grafik-Code in der Seite. Allein auf der Startseite sind das rund 40 KB, fast ein Drittel der Seite.
3. **Lange Gestaltungs-Angaben:** Viele Elemente tragen lange Listen mit Design-Angaben.

## Sofort-Fix (Wirkung von hoch nach niedrig)
1. **FAQ-Antworten immer im Text mitliefern:** Für Besucher bleiben sie zugeklappt, aber Suchmaschinen lesen sie mit. Das bringt den größten Sprung und ist auch für Google ein echter Gewinn.
2. **Symbole verschlanken:** Wo Symbole nur zur Deko dienen und sich oft wiederholen (z. B. Haken in Listen, Sterne, Pfeile in Karten), kommen schlanke Aufzählungspunkte oder einmal definierte Symbole zum Einsatz. Das Aussehen bleibt gleich.
3. **Kleinere Textergänzungen**, nur wo danach noch nötig: Impressum, Städte-Übersicht und Startseite bekommen je einen kurzen, sachlichen Absatz. Neutral, ohne Preise oder Zahlen.
4. Danach messe ich jede der 13 Seiten in der Vorschau und mache weiter, bis jede über 10 % liegt.

## Einordnung
Diese Meldung ist bei Semrush nur ein „Hinweis mit geringer Wirkung“, und Google bewertet sie nicht direkt. Punkt 1 hilft der Sichtbarkeit aber wirklich. Design, Farben und Layout bleiben unverändert.

## Technische Details
- Radix Accordion in `src/components/FAQ.tsx` (und FAQ-Blöcke in `ServicePage.tsx`): `forceMount` auf `AccordionContent` und das Ausblenden über `data-[state=closed]:hidden` statt Unmount.
- Häufige lucide-Icons in `ServicesDashboard`, `TrustBar`, `Hero`, `ServicePage`, `Footer`: Deko-Icons durch CSS-Marker bzw. ein gemeinsames SVG `<symbol>` und `<use>` ersetzen.
- Messung: SSR-HTML per curl, Text ohne Skripte geteilt durch die HTML-Länge, Ziel über 0,10.
