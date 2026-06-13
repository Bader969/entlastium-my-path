## Problem
Der aktuelle Hover-Effekt basiert nur auf `shadow-card` → `shadow-custom-md`. Beide Schatten nutzen Navy mit 10–12 % Deckkraft – auf dem warmen Creme-Hintergrund ist der Unterschied kaum wahrnehmbar. Daher wirkt es, als würde beim Hover „nichts passieren".

## Ziel
Der Hover bleibt dezent und seriös (kein Glow, keine Farbänderung), wird aber spürbar – durch einen deutlich kräftigeren Schatten und ein minimales Anheben der Karte.

## Änderungen

### 1. `src/styles.css` – Hover-Schatten verstärken
Neue Utility-Klasse `.shadow-hover` mit klar sichtbarem, aber weichem Schatten (Navy ~22 %, größerer Radius/Offset). Zusätzlich eine kleine Lift-Bewegung via Transform.

```css
.shadow-hover { box-shadow: 0 14px 32px -12px color-mix(in oklab, var(--navy) 22%, transparent); }

.hover-lift {
  transition: box-shadow 0.3s var(--transition-smooth), transform 0.3s var(--transition-smooth);
}
.hover-lift:hover {
  box-shadow: 0 14px 32px -12px color-mix(in oklab, var(--navy) 22%, transparent);
  transform: translateY(-2px);
}
```

### 2. Hover-Klassen auf den betroffenen Elementen ersetzen
Überall `hover:shadow-custom-md transition-shadow duration-300` → `hover-lift` (kombiniert Schatten + dezentes Anheben):

- `src/components/ServicesDashboard.tsx` – Benefit-Cards (6 Stück)
- `src/components/Testimonials.tsx` – Testimonial-Cards (3 Stück)
- `src/components/FAQ.tsx` – Accordion-Items (`hover:shadow-md` → `hover-lift`)

### 3. Service-Accordion (ServicesDashboard)
Das große Service-Accordion nutzt aktuell nur `shadow-card`/`shadow-custom-md` ohne Hover. Hier nur Hover am geschlossenen Zustand ergänzen (offen bleibt wie bisher), ebenfalls `hover-lift`-artig.

### 4. Extra-Chips (ServicesDashboard)
Bleiben wie bisher (`hover:border-secondary/50`) – Border-Hover ist dort passend.

## Nicht enthalten
- Keine Glow-, Farbwechsel- oder Skalierungs-Effekte
- Keine Layout-, Farb- oder Typografie-Änderungen
- Keine Änderungen an anderen Komponenten (Hero, TrustBar, Header, Footer)
