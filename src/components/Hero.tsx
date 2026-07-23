import { ArrowRight, CheckCircle, ShieldCheck, Leaf, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const logoIcon = logoMark.url;

const Hero = () => {
  const benefits = [
    "Kostenlose Besichtigung",
    "Faire Festpreise",
    "Nachhaltige Entsorgung",
  ];

  const trustItems = [
    { icon: ShieldCheck, label: "Versichert" },
    { icon: BadgeCheck, label: "Festpreisgarantie" },
    { icon: Leaf, label: "Entsorgung nach KrWG" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 gradient-hero" />

      {/* Logo Background Element */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          fetchPriority="high"
          className="w-[260px] sm:w-[360px] md:w-[460px] lg:w-[560px] xl:w-[640px] opacity-15 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-2xl xl:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-secondary/40 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-primary-foreground text-xs sm:text-sm font-medium tracking-wide">
              Ihr Partner für stressfreie Entrümpelung
            </span>
          </div>

          <h1 className="display-1 font-serif font-semibold text-primary-foreground mb-6">
            Professionelle Entrümpelung &amp; Haushaltsauflösung{" "}
            <span className="block text-gradient">in Bochum &amp; NRW</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
            Entlastium – Ihr verlässlicher Partner für Entrümpelung und Raumtransformation.
            Wir koordinieren Ihre Entrümpelung von A bis Z und schaffen Platz für Neues.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-foreground/20 text-primary-foreground/95"
              >
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 text-primary-foreground/85">
            {trustItems.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm">
                <t.icon className="h-4 w-4 text-accent" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="accent" size="xl" asChild className="group w-full sm:w-auto">
              <a href="/kontakt">
                Kostenloses Angebot anfordern
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline-light" size="xl" asChild className="w-full sm:w-auto">
              <a href="/leistungen">Leistungen entdecken</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
