import { useState } from "react";
import {
  Zap, Euro, Calendar, Leaf, Users, Shield,
  Home, Trash2, Paintbrush, Wrench, TreePine, Building, Key, Layers, Plug,
  ChevronDown, CheckCircle2,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import imgHaushalt from "@/assets/service-haushalt.jpg";
import imgKeller from "@/assets/service-keller.jpg";
import imgKueche from "@/assets/service-kueche.jpg";
import imgGarten from "@/assets/service-garten.jpg";
import imgDachboden from "@/assets/service-dachboden.jpg";
import imgReinigung from "@/assets/service-reinigung.jpg";

const ServicesDashboard = () => {
  const [openId, setOpenId] = useState<string | null>("haushalt");

  const headerRef = useScrollReveal<HTMLDivElement>();
  const benefitsRef = useStaggerReveal<HTMLDivElement>(80);
  const accordionRef = useScrollReveal<HTMLDivElement>();

  const mainBenefits = [
    { icon: Zap, title: "Schnell & Effektiv", description: "Lokales Team in Ihrer Nähe – oft innerhalb von 24-48 Stunden einsatzbereit." },
    { icon: Euro, title: "Kostengünstig", description: "Transparente Festpreise. Auf Wunsch mit Wertanrechnung." },
    { icon: Shield, title: "Fachgerecht", description: "Professionelle Entsorgung nach allen gesetzlichen Vorschriften." },
    { icon: Calendar, title: "Rundum-Service", description: "Wir koordinieren Ihre Entrümpelung von A bis Z." },
    { icon: Leaf, title: "Nachhaltig", description: "Wiederverwertbare Gegenstände werden gespendet oder recycelt." },
    { icon: Users, title: "Lokales Team", description: "Als lokales Unternehmen sind wir schnell vor Ort." },
  ];

  const services = [
    {
      id: "haushalt",
      icon: Trash2,
      image: imgHaushalt,
      title: "Haushaltsauflösung",
      description: "Komplette Räumung von Haushalten bei Umzug, Erbschaft oder Verkleinerung.",
      features: ["Wertanrechnung möglich", "Diskret & respektvoll", "Komplette Entsorgung", "Besenrein"],
    },
    {
      id: "keller",
      icon: Building,
      image: imgKeller,
      title: "Keller & Dachboden",
      description: "Befreiung von überfüllten Kellern, Dachböden und Speichern.",
      features: ["Auch enge Zugänge", "Schwere Gegenstände", "Sortierung vor Ort", "Sicherer Abtransport"],
    },
    {
      id: "kueche",
      icon: Home,
      image: imgKueche,
      title: "Küchen- & Möbeldemontage",
      description: "Komplette Küchendemontage inklusive Elektro- und Wasseranschlüsse.",
      features: ["Einbauküchen", "Elektrogeräte", "Sichere Demontage", "Fachgerechte Entsorgung"],
    },
    {
      id: "garten",
      icon: TreePine,
      image: imgGarten,
      title: "Garten & Gartenlaube",
      description: "Gartenabfälle, alte Möbel, Schuppen-Inhalte – wir räumen Ihren Garten auf.",
      features: ["Grünschnitt-Entsorgung", "Lauben-Räumung", "Auf Wunsch Abriss", "Komplettservice"],
    },
    {
      id: "dachboden",
      icon: Layers,
      image: imgDachboden,
      title: "Deckenplatten & Teppiche",
      description: "Fachgerechte Demontage von Deckenverkleidungen, Teppichen und Bodenbelägen.",
      features: ["Styropor-Decken", "Holzverkleidungen", "Kleberreste entfernen", "Renovierungsbereit"],
    },
    {
      id: "reinigung",
      icon: Paintbrush,
      image: imgReinigung,
      title: "Endreinigung & Wohnungsübergabe",
      description: "Professionelle Grundreinigung und Übergabe an Vermieter oder Hausverwaltung.",
      features: ["Besenrein oder Endreinigung", "Kleine Reparaturen", "Übergabeprotokoll", "Termin-Koordination"],
    },
  ];

  const extras = [
    { icon: Wrench, label: "Herd-Demontage" },
    { icon: Plug, label: "Lampen & E-Geräte" },
    { icon: Key, label: "Wohnungsübergabe" },
    { icon: Building, label: "Gewerbe-Entrümpelung" },
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-secondary text-sm font-semibold mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Professionelle Entrümpelung <span className="text-gradient-animated">aus einer Hand</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der kostenlosen Besichtigung bis zur besenreinen Übergabe – Rundum-Service für jede Situation.
          </p>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {mainBenefits.map((b) => (
            <div key={b.title} className="reveal glow-card p-6 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Accordion with images */}
        <div ref={accordionRef} className="reveal">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 text-center">
            Alle Services im <span className="text-gradient-animated">Detail</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            Klicken Sie auf einen Service für mehr Informationen
          </p>

          <div className="max-w-5xl mx-auto space-y-4">
            {services.map((s) => {
              const isOpen = openId === s.id;
              return (
                <div
                  key={s.id}
                  className={`glow-card overflow-hidden transition-all duration-500 ${
                    isOpen ? "shadow-[0_0_40px_hsl(var(--glow-teal)/0.25)]" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : s.id)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-secondary to-accent text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-teal)/0.5)]"
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
                    }`}>
                      <s.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-serif font-semibold text-foreground">
                        {s.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-1 md:line-clamp-none">
                        {s.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-secondary flex-shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-6 p-5 md:p-6 pt-0 md:pt-0">
                        <div className="relative rounded-xl overflow-hidden group">
                          <img
                            src={s.image}
                            alt={s.title}
                            loading="lazy"
                            width={1024}
                            height={640}
                            className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {s.description}
                          </p>
                          <ul className="space-y-2">
                            {s.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                                <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent transition-colors group/link"
                          >
                            Angebot anfragen
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra services chips */}
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-4">Zusätzlich bieten wir:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {extras.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 text-sm text-foreground hover:border-secondary/60 hover:shadow-[0_0_15px_hsl(var(--glow-teal)/0.3)] transition-all duration-300"
                >
                  <e.icon className="h-4 w-4 text-secondary" />
                  {e.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDashboard;
