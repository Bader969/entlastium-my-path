import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const stats = [
    { value: "24h", label: "Reaktionszeit" },
    { value: "✓", label: "Langjährige Erfahrung" },
  ];

  

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Über Entlastium
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Professionelle Entrümpelung <span className="text-secondary">mit System & Erfahrung</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card shadow-card"
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews Section - Placeholder for future Google Reviews integration */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Das sagen unsere <span className="text-secondary">Kunden</span>
            </h3>
          </div>

          {/* Google Reviews will be integrated here */}
          <div className="text-center py-12 bg-card rounded-2xl shadow-card">
            <p className="text-muted-foreground">
              Kundenbewertungen werden bald hier angezeigt.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl gradient-hero text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Unsere Geschichte
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
              Entlastium wurde aus einer einfachen Idee geboren: Entrümpelung muss nicht stressig sein. 
              Nach Jahren in der Branche haben wir gesehen, wie viele Menschen mit überfordernden 
              Situationen allein gelassen werden – ob bei Haushaltsauflösungen, Erbschaften oder 
              einfach dem Wunsch nach einem Neuanfang.
            </p>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Heute sind wir stolz darauf, nicht nur Räume zu entrümpeln, sondern Menschen 
              echte Entlastung zu bieten. Denn hinter jedem Gegenstand steckt eine Geschichte – 
              und wir behandeln sie mit dem Respekt, den sie verdient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
