import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { getCityBySlug, getNeighborCities, NRW_CITIES } from "@/data/nrw-cities";
import { SERVICES } from "@/data/services";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/entruempelung/$stadt")({
  loader: ({ params }) => {
    const city = getCityBySlug(params.stadt);
    if (!city) throw notFound();
    const neighbors = getNeighborCities(params.stadt, 6);
    return { city, neighbors };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const { city } = loaderData;
    const title = `Entrümpelung ${city.name} ab 250 € – Entlastium`;
    const description = `Professionelle Entrümpelung & Haushaltsauflösung in ${city.name}. ✓ Kostenlose Besichtigung ✓ Faire Festpreise ✓ Wertanrechnung ✓ 24h erreichbar. Jetzt anfragen!`;
    const url = `${BASE_URL}/entruempelung/${params.stadt}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Entlastium – Entrümpelung ${city.name}`,
            description,
            url,
            telephone: "+49-123-45678",
            email: "info@entlastium.de",
            areaServed: { "@type": "City", name: city.name },
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nordrhein-Westfalen",
              addressCountry: "DE",
              postalCode: city.plzPrefix,
              addressLocality: city.name,
            },
            priceRange: "€€",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Start", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "Städte", item: `${BASE_URL}/staedte` },
              { "@type": "ListItem", position: 3, name: city.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: StadtPage,
  notFoundComponent: () => (
    <PageLayout title="Stadt nicht gefunden" intro="Diese Stadt ist (noch) nicht in unserem Verzeichnis.">
      <a href="/staedte" className="text-primary hover:underline">Zur Städteübersicht</a>
    </PageLayout>
  ),
});

function StadtPage() {
  const { city, neighbors } = Route.useLoaderData();

  const localFaq = [
    {
      q: `Wie schnell sind Sie für eine Entrümpelung in ${city.name} vor Ort?`,
      a: `In ${city.name} und Umgebung sind wir oft schon innerhalb von 24–48 Stunden einsatzbereit. Bei Notfällen vereinbaren wir Termine am selben Tag.`,
    },
    {
      q: `Was kostet eine Haushaltsauflösung in ${city.name}?`,
      a: `Die Kosten richten sich nach Größe und Aufwand des Objekts. Eine 3-Zimmer-Wohnung in ${city.name} liegt typischerweise zwischen 800 € und 2.500 € — bei Wertanrechnung verwertbarer Gegenstände auch deutlich günstiger.`,
    },
    {
      q: `Welche Stadtteile von ${city.name} bedienen Sie?`,
      a: `Wir sind in ganz ${city.name} aktiv — von ${city.stadtteile.slice(0, 3).join(", ")} bis ${city.stadtteile[city.stadtteile.length - 1]}. PLZ-Bereich ${city.plzPrefix}.`,
    },
    {
      q: `Entsorgen Sie in ${city.name} auch Sondermüll?`,
      a: `Ja, alle Abfälle werden über zertifizierte Entsorger im Raum ${city.region} fachgerecht und umweltgerecht entsorgt — inkl. Elektrogeräte, Kühlschränke, Farben und Lacke.`,
    },
  ];

  return (
    <PageLayout
      eyebrow={`Entrümpelung in ${city.region}`}
      title={`Entrümpelung & Haushaltsauflösung in ${city.name}`}
      intro={`Professionell, fair und nachhaltig — Ihr lokaler Partner für Entrümpelung in ${city.name} (PLZ ${city.plzPrefix}, ${city.einwohner.toLocaleString("de-DE")} Einwohner). Kostenlose Besichtigung, transparente Festpreise, Wertanrechnung möglich.`}
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Städte", href: "/staedte" },
        { label: city.name },
      ]}
    >
      {/* Intro & USPs */}
      <section className="grid lg:grid-cols-3 gap-6 mb-16">
        {[
          { icon: CheckCircle2, title: "Kostenlose Besichtigung", text: `In ganz ${city.name} ohne Anfahrtskosten.` },
          { icon: MapPin, title: "Lokal vor Ort", text: `Team aus dem ${city.region}, schnelle Reaktionszeiten.` },
          { icon: Building2, title: "Wertanrechnung", text: "Verwertbare Gegenstände senken Ihren Preis." },
        ].map((u) => (
          <div key={u.title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <u.icon className="h-8 w-8 text-accent mb-3" />
            <h2 className="text-lg font-serif font-semibold mb-1">{u.title}</h2>
            <p className="text-sm text-muted-foreground">{u.text}</p>
          </div>
        ))}
      </section>

      {/* Long-form copy */}
      <section className="prose prose-lg max-w-none mb-16 text-foreground">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          Ihr Partner für Entrümpelung in {city.name}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {city.name} ist mit rund {city.einwohner.toLocaleString("de-DE")} Einwohnern eine der wichtigen Städte im {city.region}.
          Wir bei Entlastium kennen die lokalen Gegebenheiten — von engen Altbaukellern in {city.stadtteile[0]} bis zu großen Einfamilienhäusern in {city.stadtteile[1] ?? city.stadtteile[0]} — und passen unseren Einsatz exakt an Ihre Situation an.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Egal ob Haushaltsauflösung nach Erbschaft, Entrümpelung vor Umzug, Kellerräumung oder die komplette Auflösung einer Gewerbeimmobilie in {city.name}: Wir übernehmen den gesamten Prozess mit eigenem Team, eigenen Fahrzeugen und festen Festpreisen. Auf Wunsch begleiten wir Sie bis zur besenreinen Übergabe an Vermieter oder Käufer.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Verwertbare Möbel, Elektronik oder Schmuck werden transparent angerechnet — Sondermüll und Elektrogeräte fachgerecht über zertifizierte Wertstoffhöfe in der Region {city.region} entsorgt.
        </p>
      </section>

      {/* Service list */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Unsere Leistungen in {city.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="block rounded-xl border border-border bg-card p-5 hover:border-accent hover:shadow-card transition-all"
            >
              <h3 className="font-serif font-semibold text-lg mb-1 text-foreground">
                {s.shortTitle} in {city.name}
              </h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent mt-2">
                Details zu {s.shortTitle} in {city.name} <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Local FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Häufige Fragen zur Entrümpelung in {city.name}
        </h2>
        <div className="space-y-4">
          {localFaq.map((item) => (
            <div key={item.q} className="rounded-xl bg-card border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: localFaq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* Neighbors */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Wir sind auch in der Nähe von {city.name} aktiv
        </h2>
        <div className="flex flex-wrap gap-2">
          {neighbors.map((n: typeof neighbors[number]) => (
            <a
              key={n.slug}
              href={`/entruempelung/${n.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 text-sm font-medium transition-colors"
            >
              <MapPin className="h-3 w-3" />
              Entrümpelung {n.name}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Insgesamt sind wir in {NRW_CITIES.length}+ NRW-Städten aktiv —{" "}
          <a href="/staedte" className="text-primary hover:underline">vollständige Übersicht</a>.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
          Kostenlose Besichtigung in {city.name} anfragen
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Wir kommen unverbindlich zu Ihnen, prüfen den Aufwand und erstellen ein transparentes Festpreisangebot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" size="lg" asChild>
            <a href={`/kontakt?stadt=${encodeURIComponent(city.name)}`}>
              Jetzt anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline-light" size="lg" asChild>
            <a href="tel:+491637948428">
              <Phone className="mr-2 h-4 w-4" /> +49 163 7948428
            </a>
          </Button>
          <Button variant="outline-light" size="lg" asChild>
            <a href="mailto:info@entlastium.de">
              <Mail className="mr-2 h-4 w-4" /> E-Mail
            </a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
