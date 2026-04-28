import { MessageSquare, Search, Truck, KeyRound, ArrowRight } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Anfrage",
    description: "Kontaktieren Sie uns telefonisch oder über das Formular. Wir antworten innerhalb von 24 Stunden.",
  },
  {
    icon: Search,
    number: "02",
    title: "Besichtigung",
    description: "Kostenloser Vor-Ort-Termin. Wir prüfen den Aufwand und erstellen ein transparentes Festpreis-Angebot.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Räumung",
    description: "Unser professionelles Team räumt schnell, sauber und fachgerecht – inklusive umweltgerechter Entsorgung.",
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Übergabe",
    description: "Besenreine Übergabe der Räume. Auf Wunsch koordinieren wir auch die Wohnungsübergabe mit dem Vermieter.",
  },
];

const ProcessTimeline = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(150);

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-background">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-secondary text-sm font-semibold mb-4">
            So einfach geht's
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            In <span className="text-gradient-animated">4 Schritten</span> zur entrümpelten Immobilie
          </h2>
          <p className="text-lg text-muted-foreground">
            Klar definierter Ablauf – keine versteckten Kosten, keine Überraschungen.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.number} className="reveal relative group">
              <div className="glow-card p-6 h-full text-center bg-card/80 backdrop-blur-sm">
                {/* Number badge with glow */}
                <div className="relative mx-auto mb-5 w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-secondary/15 to-accent/15 border border-secondary/30 flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-12 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-secondary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
