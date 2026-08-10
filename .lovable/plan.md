# Vorher/Nachher auf Mobil, Garten-Bild & Impressum

## 1. Vorher/Nachher auch auf dem Handy nutzbar

Aktuell wechselt das Bild nur über CSS-Hover (`group-hover`). Auf Touch-Geräten gibt es keinen echten Hover, daher passiert dort nichts.

Umsetzung in `src/components/ServicesDashboard.tsx`:
- Bildbereich wird ein echter Button (`type="button"`, `aria-pressed`), der pro Karte einen State „nachher an/aus“ umschaltet — Tippen wechselt zwischen Vorher und Nachher.
- Auf Desktop bleibt Hover erhalten: Bild wechselt beim Zeiger drüber wie bisher; Klick fixiert den Zustand.
- Labels „Vorher“/„Nachher“ richten sich nach dem State statt nur nach Hover.
- Hinweistext unten rechts wird geräteabhängig formuliert: „Tippen zum Vergleich“ auf Touch, „Zeiger drüber“ auf Desktop (über die bestehende Mobile-Erkennung bzw. eine CSS-Media-Query `hover: hover`).
- Tastaturbedienung inklusive (Enter/Space), Fokusring vorhanden.

## 2. Garten-Bild „vorher“ weniger chaotisch

Das aktuelle Vorher-Bild für Gartenräumung wirkt zu stark verwildert (Gärtner-Optik statt Räumung).
- Neue Version von `src/assets/service-garten-before.jpg` erzeugen: aufgeräumter Garten mit deutlich sichtbarem Räumgut — alte Möbel, Kartons, Gartenabfall in Säcken, Schrott — aber gepflegter Rasen und keine Wildnis.
- Nachher-Bild bleibt unverändert (leerer, sauberer Garten).

## 3. Impressum anpassen

In `src/pages/Impressum.tsx`:
- Abschnitt „Umsatzsteuer-ID“ komplett entfernen (inkl. nicht mehr benötigtem Icon-Import).
- Abschnitt „Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV“ auf:

```text
Bader Lababidi, Entlastium
Adlerstr. 14
44577 Castrop-Rauxel
```

## Nicht im Scope
- Keine Änderungen an Farben, Layout-Struktur oder anderen Bildern.
- Keine Änderungen an Backend/Formular-Logik.
