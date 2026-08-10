# Favicon: Lovable-Icon durch Entlastium-Logo ersetzen

## Warum Google das Lovable-Icon zeigt

Beide Favicon-Dateien im Projekt sind noch die Standard-Dateien von Lovable:

- `public/favicon.png` (64×64) — zeigt das lila/blaue Lovable-Symbol
- `public/favicon.ico` — ebenfalls das Lovable-Symbol

Im Seiten-Head ist zwar `/favicon.png` verlinkt, aber die Datei selbst ist das
Lovable-Icon. Zusätzlich holen Google & Co. bevorzugt `/favicon.ico` direkt vom
Server — und dort liegt ebenfalls das Lovable-Icon. Deshalb erscheint es in den
Suchergebnissen.

## Was gemacht wird

1. Das echte Entlastium-Logo (`logo-mark.png` aus den Projekt-Assets) als Quelle
   nehmen und daraus quadratische Favicon-Dateien erzeugen:
   - `public/favicon.png` (mit Rand statt Verzerrung, damit das Zeichen bei 16–32 px
     erkennbar bleibt)
   - `public/favicon.ico` wird durch eine aus demselben Logo erzeugte Multi-Größen-Datei
     ersetzt (16/32/48 px), damit auch der direkte `/favicon.ico`-Abruf von Google
     das richtige Bild liefert
2. Im Head (`src/routes/__root.tsx`) ergänze ich neben dem bestehenden
   PNG-Icon-Eintrag `apple-touch-icon` und einen `shortcut icon`-Eintrag,
   damit alle Clients dieselbe Datei bekommen.
3. Das Organisations-JSON-LD verweist derzeit als `logo` auf `favicon.png` —
   das bleibt korrekt, sobald die Datei das echte Logo enthält.

## Danach

Google zeigt Favicons stark gecacht an. Nach dem Veröffentlichen dauert es
in der Regel einige Tage bis zum nächsten Crawl, bis das neue Icon in den
Suchergebnissen erscheint. Ein erneutes Anfordern der Startseite in der
Search Console beschleunigt das.
