import { ArrowRight, Shield, BadgeCheck, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const Hero = () => {
  const trust = [
    { icon: Shield, label: "Voll versichert" },
    { icon: BadgeCheck, label: "Faire Festpreise" },
    { icon: Leaf, label: "Nachhaltige Entsorgung" },
    { icon: Star, label: "4,9 / 5 Bewertung" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Subtle mesh background */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" aria-hidden="true" />
      {/* Hairline divider at bottom for definition */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" aria-hidden="true" />

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-foreground/80 text-xs sm:text-sm font-medium tracking-wide">
              Entrümpelung &amp; Haushaltsauflösungen · Bochum &amp; NRW
            </span>
          </div>

          <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-normal text-foreground mb-6">
            Ordnung schaffen,{" "}
            <span className="italic text-secondary">mit Verantwortung.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Entlastium übernimmt Ihre Entrümpelung diskret, termingerecht und zum
            vereinbarten Festpreis — von der kostenlosen Besichtigung bis zur
            besenreinen Übergabe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Button variant="default" size="xl" asChild className="magnetic-btn w-full sm:w-auto group">
              <a href="#contact">
                Kostenlose Besichtigung
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
              <a href="#services">Leistungen ansehen</a>
            </Button>
          </div>

          {/* Trust row */}
          <div className="pt-6 border-t border-border">
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3">
              {trust.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                >
                  <t.icon className="h-4 w-4 text-secondary shrink-0" />
                  <span className="font-medium text-foreground/80">{t.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: logo lockup */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-full bg-mist/60 blur-2xl" aria-hidden="true" />
            <div className="relative h-full w-full rounded-3xl border border-border bg-card shadow-custom-lg flex items-center justify-center p-10">
              <img
                src={logoMark.url}
                alt="Entlastium Markenzeichen"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Corner credential badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg px-4 py-2.5 shadow-custom-md flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wide">Geprüfter Fachbetrieb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
