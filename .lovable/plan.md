# WhatsApp-Kontaktknopf (schwebend, auf allen Seiten)

## Was entsteht
Ein runder WhatsApp-Knopf unten rechts. Er ist auf jeder Seite zu sehen und bleibt auch beim Scrollen an seinem Platz, auf Handy, Tablet und Computer.

- **Farbe:** WhatsApp-Grün mit weißem WhatsApp-Symbol, damit man ihn sofort erkennt. Dazu kommt ein feiner Schatten, aber kein Leuchteffekt.
- **Klick:** öffnet WhatsApp mit der Nummer +49 163 7948428. Eine Nachricht steht schon im Feld, zum Beispiel: „Hallo Entlastium, ich interessiere mich für eine kostenlose Besichtigung."
  - Auf dem Handy öffnet sich die WhatsApp-App.
  - Am Computer öffnet sich WhatsApp Web oder die Desktop-App.

## Kreative Extras (Vorschlag)
1. **Passende Nachricht je Seite:** Wer zum Beispiel die Seite „Entrümpelung Bochum" ansieht, schickt automatisch „…Entrümpelung in Bochum…". Sie sehen so sofort, worum es geht.
2. **Kleine Sprechblase am Computer:** Nach etwa 6 Sekunden erscheint einmalig neben dem Knopf „Fragen? Schreiben Sie uns auf WhatsApp". Man kann sie wegklicken. Danach erscheint sie für diesen Besucher nicht mehr.
3. **Handy: Leiste unten:** Auf dem Handy gibt es statt nur eines runden Knopfes eine schmale Leiste am unteren Rand mit zwei Knöpfen: „Anrufen" und „WhatsApp". Das ist heute bei Entrümpelungsfirmen üblich und bringt die meisten Anfragen. Am Computer bleibt der runde Knopf.
4. **Ruhige Bewegung:** Der Knopf blendet sanft ein und hebt sich leicht an, wenn man mit der Maus darüberfährt. Er blinkt oder pulsiert nicht ständig.
5. **Erreichbarkeits-Hinweis:** In der Sprechblase steht „Antwort meist innerhalb weniger Stunden". Das ist neutral formuliert, ohne feste Zahlen.

## Technische Details
- Neues Element `src/components/WhatsAppButton.tsx`, einmal eingebunden in `src/routes/__root.tsx`. Dadurch erscheint es auf allen Seiten.
- Link `https://wa.me/491637948428?text=<encoded>`. Der Text passt sich der aktuellen Seite an (`useLocation`): Stadtname oder Leistung.
- `fixed bottom-5 right-5 z-30` und `env(safe-area-inset-bottom)` für iPhones. Das Element liegt unter dem Burger-Menü (z-40), damit es das Menü nicht verdeckt.
- Leiste auf dem Handy (`lg:hidden`): Die Seite bekommt unten etwas zusätzlichen Platz, damit die Leiste keinen Inhalt verdeckt.
- WhatsApp-Grün als eigene Farbe `--whatsapp` in `styles.css`. Die Sprechblase merkt sich das Wegklicken im Browser (`localStorage`, gelesen in `useEffect`).
- Barrierefreiheit: `aria-label="Per WhatsApp kontaktieren"`, `rel="noopener"`, öffnet in einem neuen Tab.
- Test mit Playwright bei 390 px und 1280 px: Knopf sichtbar, Link korrekt, Menü nicht verdeckt.
