# Text-zu-Code-Verhältnis: die letzten 3 Seiten

## Stand
Laut neuem Semrush-Export liegen nur noch 3 Seiten knapp unter 10 %:
- Startseite: 9 %
- Ablauf: 9 %
- Kontakt: 8 %

Alle anderen Seiten sind jetzt in Ordnung. Es fehlen also jeweils nur 1–2 Prozentpunkte.

## Sofort-Fix
1. **Code verschlanken, ohne dass sich das Aussehen ändert:**
   - Ablauf und Startseite: Die Deko-Symbole im Ablauf (Schritt-Icons, Pfeile) werden einmal definiert und dann wiederverwendet, statt jedes Mal komplett in der Seite zu stehen.
   - Kontakt: Die Symbole im Formular (Telefon, Mail, Ort, Uhr, Upload, Haken) werden genauso verschlankt. Lange, wiederholte Design-Angaben an Eingabefeldern fasse ich zu einer gemeinsamen Klasse zusammen.
   - Startseite: Wiederholte Symbole in TrustBar und Hero ebenso.
2. **Nur falls danach noch nötig:** ein kurzer, sachlicher Absatz pro Seite (ohne Preise oder Zahlen), z. B. auf der Kontaktseite zu „Erreichbarkeit und Rückmeldung“.
3. Jede der 3 Seiten in der Vorschau messen, bis sie sicher über 10 % liegt (Semrush misst etwa 1–2 Punkte höher als meine Messung).

## Sicherheit gegen neue Warnungen
- Keine neuen Links, kein nofollow, keine versteckten Texte.
- Titel, Beschreibungen, Schema-Daten bleiben unverändert.
- Design, Farben, Hover-Effekte und Layout bleiben gleich.

Danach: veröffentlichen und Semrush-Audit neu starten.

## Technische Details
- Gemeinsames SVG-Sprite (`<svg><symbol id>`) in einer kleinen Icon-Komponente, `<use href="#id">` in `ProcessTimeline`, `ContactForm`, `TrustBar`, `Hero`.
- Wiederholte Tailwind-Klassenketten der Formularfelder als `@utility`/Klasse in `src/styles.css`.
- Messung: SSR-HTML per curl, Text ohne Skripte / HTML-Länge, Ziel lokal ≥ 0,09, besser 0,10.
