# Die letzten zwei Seiten: Startseite und AGB

## Befund
**AGB (2,51 s, Ziel unter 2,5 s):** Es fehlen nur 0,01 s. Das größte Element ist der erste Absatz. Dieser Text ist schnell da, allerdings zuerst in einer Ersatzschrift. Etwas später wird er in der eigentlichen Schrift (Epilogue) neu gezeichnet. Google zählt diesen zweiten Moment als "fertig". Dadurch geht die Zeit verloren.

**Startseite (3,46 s):** Hier ist das größte Element das blasse Hintergrund-Logo (20 % Deckkraft). Ich habe die Live-Seite geprüft:
- Das Logo wird **doppelt** zum Vorladen angemeldet: einmal von mir, einmal automatisch. Beide Anmeldungen konkurrieren mit Stylesheet und Schriften.
- Die Handy-Version ist mit 30 KB noch zu schwer für ein Bild, das nur blass im Hintergrund liegt.
- Die Besucher-Statistik der Plattform (208 ms) lässt sich nicht ändern. Sie ist grün.

## Maßnahmen
1. **Fließtext ohne zweites Neuzeichnen:** Für die Fließtext-Schrift Epilogue stelle ich `font-display: optional` ein. Da die Schrift vorgeladen ist, erscheint sie normal sofort. Nur bei einer extrem langsamen ersten Verbindung bleibt der Text bei diesem einen Besuch in der angeglichenen Ersatzschrift. Beim nächsten Aufruf ist die richtige Schrift da. Die Überschriften-Schrift Urbanist bleibt wie bisher. Das hilft der AGB-Seite und allen Textseiten.
2. **Doppeltes Vorladen entfernen:** Auf der Startseite bleibt nur eine Anmeldung für das Logo.
3. **Hintergrund-Logo leichter machen:** Es gibt neue Versionen speziell für die blasse Darstellung: 320 px für Handys und 640 px für größere Bildschirme, stärker komprimiert. Bei 20 % Deckkraft sieht man keinen Unterschied. Die Handy-Datei wird etwa 15–20 KB statt 30 KB groß.
4. **Schriften auf der Startseite nicht vor dem Logo laden:** Dort bekommt das Logo Vorrang. Die Schriften laden direkt danach.
5. **Prüfung:** Lighthouse auf dem Handy für `/` und `/agb` sowie ein Screenshot-Vergleich der Startseite.

## Erwartung
AGB etwa 2,1–2,3 s, also "Good". Startseite etwa 2,4–2,8 s.

Falls die Startseite danach noch knapp über 2,5 s liegt, bleibt nur eine Design-Entscheidung: das Hintergrund-Logo auf dem Handy etwas kleiner darstellen, damit die Überschrift das größte Element wird. Das würde ich nur nach Ihrer Zustimmung machen.

## Technische Details
- `src/styles.css`: Epilogue `@font-face` erhält `font-display: optional`, Urbanist bleibt `swap`.
- `src/routes/index.tsx`: Den manuellen Image-Preload entfernen. Das `<img fetchPriority="high">` von React erzeugt den Preload bereits.
- `public/brand/mark-320.webp` und eine neue Version von `mark-640.webp` mit q≈40 erstellen. Im Hero `srcSet` 320w/640w mit `sizes="(max-width: 640px) 320px, 640px"`.
- Font-Preloads in `__root.tsx` behalten. Auf der Startseite die Reihenfolge so legen, dass der Bild-Preload zuerst kommt, ohne zusätzlichen Head-Mechanismus.
