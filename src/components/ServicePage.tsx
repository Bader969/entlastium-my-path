import type { ServiceData } from "@/data/services";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { NRW_CITIES } from "@/data/nrw-cities";

const BASE_URL = "https://entlastium.de";

export function buildServiceHead(service: ServiceData) {
  const title = `${service.title} | Entlastium`;
  const description = `${service.title} von Entlastium: ${service.description} Kostenlose Besichtigung, Festpreisangebot und fachgerechte Entsorgung in NRW.`;
  const url = `${BASE_URL}/leistungen/${service.slug}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${BASE_URL}/#localbusiness`,
            name: "Entlastium",
            url: BASE_URL,
            telephone: "+49 163 7948428",
            image: `${BASE_URL}/favicon.png`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Adlerstr. 14",
              postalCode: "44577",
              addressLocality: "Castrop-Rauxel",
              addressRegion: "NRW",
              addressCountry: "DE",
            },
          },
          areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
          url,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}

export function ServicePage({ service }: { service: ServiceData }) {
  const topCities = NRW_CITIES.slice(0, 12);
  return (
    <PageLayout
      eyebrow="Leistung"
      title={`${service.title} in ganz Nordrhein-Westfalen`}
      intro={service.description}
      breadcrumbs={[
        { label: "Entlastium", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: service.shortTitle },
      ]}
    >
      <section className="prose prose-lg max-w-none mb-12 text-foreground">
        <p className="text-muted-foreground leading-relaxed text-lg">{service.intro}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Das ist enthalten</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">So läuft Ihre {service.shortTitle} ab</h2>
        <ol className="space-y-4 text-muted-foreground leading-relaxed">
          <li><strong className="text-foreground">Kostenlose Besichtigung:</strong> Wir sehen uns die Räume vor Ort an, besprechen Ihre Wünsche und klären, welche Gegenstände bleiben, verwertet oder entsorgt werden sollen.</li>
          <li><strong className="text-foreground">Verbindliches Festpreisangebot:</strong> Sie erhalten ein schriftliches Angebot ohne versteckte Kosten. Wertvolle Gegenstände können auf Wunsch angerechnet werden.</li>
          <li><strong className="text-foreground">Durchführung durch unser Team:</strong> Zum vereinbarten Termin arbeiten wir sorgfältig und zügig, schützen Böden und Treppenhäuser und sortieren alles nach Wertstoffen.</li>
          <li><strong className="text-foreground">Fachgerechte Entsorgung:</strong> Sperrmüll, Elektrogeräte und Sonderabfälle bringen wir zu zertifizierten Entsorgungsbetrieben – umweltgerecht und nach den gesetzlichen Vorgaben.</li>
          <li><strong className="text-foreground">Besenreine Übergabe:</strong> Zum Abschluss übergeben wir Ihnen die Räume besenrein, auf Wunsch mit Endreinigung und Begleitung bei der Wohnungsübergabe.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Häufige Fragen</h2>
        <div className="space-y-4">
          {service.faq.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          {service.shortTitle} in Ihrer Stadt
        </h2>
        <p className="text-muted-foreground mb-4">
          Wir bieten {service.shortTitle.toLowerCase()} in über {NRW_CITIES.length} NRW-Städten an. Eine Auswahl:
        </p>
        <div className="flex flex-wrap gap-2">
          {topCities.map((c) => (
            <a
              key={c.slug}
              href={`/entruempelung/${c.slug}`}
              className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 text-sm font-medium transition-colors"
            >
              {c.name}
            </a>
          ))}
          <a
            href="/staedte"
            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium transition-colors"
          >
            Alle Einsatzorte in NRW →
          </a>
        </div>
      </section>

      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Worauf wir bei {service.shortTitle} achten</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Jeder Auftrag beginnt mit einem persönlichen Gespräch. Wir möchten verstehen, was mit den Räumen geschehen soll, welche Gegenstände Ihnen wichtig sind und bis wann alles erledigt sein muss. Auf dieser Grundlage planen wir Team, Fahrzeuge und Ablauf so, dass Sie sich um nichts weiter kümmern müssen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Während der Arbeiten behandeln wir Ihr Eigentum mit Respekt. Persönliche Unterlagen, Fotos und Erinnerungsstücke legen wir beiseite, damit nichts Wichtiges verloren geht. Treppenhäuser und Böden schützen wir, und gegenüber Nachbarn treten wir zurückhaltend auf.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Für wen sich {service.shortTitle} eignet</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Unsere Kunden sind Privatpersonen, Erben, Vermieter, Hausverwaltungen und Makler. Häufige Anlässe sind ein Umzug, ein Todesfall, der Wechsel in eine Pflegeeinrichtung, ein Verkauf oder schlicht der Wunsch nach mehr Platz und Ordnung.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Gern kombinieren wir {service.shortTitle} mit weiteren Leistungen wie Endreinigung oder Wohnungsübergabe. So haben Sie einen festen Ansprechpartner von der Besichtigung bis zur Schlüsselübergabe und sparen Zeit, Wege und Abstimmung mit mehreren Firmen.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
          Kostenloses Angebot für {service.shortTitle}
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Wir kommen unverbindlich zu Ihnen, prüfen den Aufwand und nennen Ihnen einen verbindlichen Festpreis.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" size="lg" asChild>
            <a href="/kontakt">
              {service.shortTitle} anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline-light" size="lg" asChild>
            <a href="tel:+491637948428">
              <Phone className="mr-2 h-4 w-4" /> +49 163 7948428
            </a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
