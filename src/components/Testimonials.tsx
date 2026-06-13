import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// PLATZHALTER-Stimmen – ersetzen Sie diese durch echte Kundenzitate,
// sobald Bewertungen vorliegen.
const testimonials = [
  {
    quote:
      "Sehr professionelle und freundliche Abwicklung. Der Festpreis wurde exakt eingehalten, die Wohnung war besenrein übergeben.",
    author: "Beispiel-Stimme",
    role: "Haushaltsauflösung · Bochum",
  },
  {
    quote:
      "Schnelle Rückmeldung, faire Beratung und ein eingespieltes Team. Ich kann Entlastium uneingeschränkt weiterempfehlen.",
    author: "Beispiel-Stimme",
    role: "Kellerentrümpelung · Essen",
  },
  {
    quote:
      "Sehr diskret und respektvoll bei einer schwierigen Erbschafts­situation. Alles wurde fachgerecht entsorgt.",
    author: "Beispiel-Stimme",
    role: "Erbschaftsauflösung · Dortmund",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="kundenstimmen" className="section-padding bg-background">
      <div className="container-custom">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Vertrauen, das aus Erfahrung wächst
          </h2>
          <p className="text-lg text-muted-foreground">
            Was unsere Auftraggeber über die Zusammenarbeit sagen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-custom-md transition-shadow duration-300 flex flex-col"
            >
              <Quote className="h-7 w-7 text-secondary/40 mb-3" aria-hidden="true" />
              <blockquote className="text-foreground leading-relaxed mb-5 flex-1">
                „{t.quote}"
              </blockquote>
              <div className="flex items-center gap-1 mb-3" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption>
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8">
          Hinweis: Die abgebildeten Zitate sind Platzhalter und werden durch echte
          Kundenbewertungen ersetzt.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
