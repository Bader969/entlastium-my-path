import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Hero = () => {
  const benefits = [
    "Kostenlose Besichtigung",
    "Faire Festpreise",
    "Nachhaltige Entsorgung",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Sauberer Raum nach Entrümpelung" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 mesh-bg opacity-50" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" style={{ animation: "pulse-glow 4s ease-in-out infinite", animationDelay: "1s" }} />

      {/* Logo Background Element */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <img 
          src={logoIcon} 
          alt="" 
          className="w-[400px] md:w-[550px] lg:w-[650px] opacity-20 object-contain animate-float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/40 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Ihr Partner für stressfreie Entrümpelung
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground leading-[1.1] mb-6">
            Ihre neue Freiheit{" "}
            <span className="block text-gradient-animated">beginnt hier.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-xl">
            Entlastium – Professionelle Entrümpelung & Raumtransformation. 
            Wir koordinieren Ihre Entrümpelung von A bis Z und schaffen Platz für Neues.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-3 mb-10">
            {benefits.map((benefit) => (
              <div 
                key={benefit} 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary-foreground/20 text-primary-foreground/95 hover:border-accent/60 transition-colors"
              >
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" asChild className="group magnetic-btn">
              <a href="#contact">
                Kostenlose Besichtigung
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#rechner">Preis berechnen</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
