import { ShieldCheck, BadgeCheck, Leaf, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Geprüfter Fachbetrieb", desc: "Erfahrenes Team, festangestellte Mitarbeiter" },
  { icon: BadgeCheck, title: "Versichert & seriös", desc: "Haftpflicht- und Betriebsversicherung" },
  { icon: Leaf, title: "Fachgerechte Entsorgung", desc: "Recycling & Entsorgung nach KrWG" },
  { icon: Clock, title: "Schnelle Reaktionszeit", desc: "Persönliches Angebot in 24 h" },
];

const TrustBar = () => {
  return (
    <section aria-label="Vertrauensmerkmale" className="bg-card border-y border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <it.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">{it.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
