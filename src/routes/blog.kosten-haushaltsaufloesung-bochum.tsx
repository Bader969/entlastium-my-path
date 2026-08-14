import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Euro, Home, Truck, Recycle, MapPin, ArrowRight } from "lucide-react";

const CANONICAL = "https://entlastium.de/blog/kosten-haushaltsaufloesung-bochum";

const PRICE_TABLE = [
  { size: "1-Zimmer-Wohnung", sqm: "ca. 20–35 m²", price: "590 – 1.290 €", days: "1 Tag" },
  { size: "2-Zimmer-Wohnung", sqm: "ca. 40–60 m²", price: "990 – 1.890 €", days: "1 Tag" },
  { size: "3-Zimmer-Wohnung", sqm: "ca. 65–85 m²", price: "1.490 – 2.690 €", days: "1–2 Tage" },
  { size: "4-Zimmer-Wohnung", sqm: "ca. 85–110 m²", price: "1.990 – 3.490 €", days: "2 Tage" },
  { size: "Einfamilienhaus", sqm: "ab 120 m² + Keller", price: "2.890 – 5.900 €", days: "2–4 Tage" },
];

const FACTORS = [
  { icon: Home, title: "Wohnungsgröße & Stockwerk", text: "Altbauten in Bochum-Ehrenfeld oder im Stahlhauser Viertel haben oft kein Aufzug – das erhöht Personal- und Zeitaufwand." },
  { icon: Truck, title: "Müllmenge & Containergröße", text: "Die Entsorgungsmenge bestimmt Containermiete sowie Gebühren beim USB Bochum – oft 20–35 % der Endkosten." },
  { icon: Recycle, title: "Sondermüll & Sperrgut", text: "Elektrogeräte, Farben, Öle oder Klaviere müssen über zertifizierte Entsorger im Ruhrgebiet fachgerecht entsorgt werden." },
  { icon: Euro, title: "Wertanrechnung", text: "Verwertbare Möbel, Antiquitäten oder Elektronik reduzieren Ihren Endpreis in Bochum – oft um mehrere hundert Euro." },
];

const BOCHUM_DISTRICTS = [
  "Bochum-Mitte", "Wattenscheid", "Langendreer", "Werne", "Querenburg",
  "Weitmar", "Linden", "Dahlhausen", "Stiepel", "Hamme", "Ehrenfeld", "Grumme",
];

const FAQS = [
  {
    q: "Was kostet eine Haushaltsauflösung in Bochum?",
    a: "Für eine durchschnittliche 2- bis 3-Zimmer-Wohnung in Bochum liegen die Kosten 2026 zwischen 1.200 € und 2.500 € inklusive Entsorgung, besenrein und mit transparenter Festpreis-Garantie. Bei Wertanrechnung verwertbarer Gegenstände kann sich der Preis deutlich reduzieren.",
  },
  {
    q: "Was kostet eine Entrümpelung in Bochum pro m²?",
    a: "Als grober Richtwert: Eine Entrümpelung in Bochum kostet zwischen 25 € und 45 € pro m² – abhängig vom Füllgrad, Stockwerk und Sondermüllanteil. Bei wenig Müllvolumen kann der Preis darunter liegen.",
  },
  {
    q: "Wie funktioniert die Wertanrechnung bei einer Haushaltsauflösung in Bochum?",
    a: "Bei der kostenlosen Besichtigung in Bochum bewerten wir verwertbare Gegenstände wie Möbel, Schmuck, Sammlerstücke oder hochwertige Elektronik. Der ermittelte Restwert wird direkt vom Angebot abgezogen – Sie zahlen also nur die Differenz.",
  },
  {
    q: "Sind Entsorgungskosten beim USB Bochum im Festpreis enthalten?",
    a: "Ja. Containermiete, Deponiegebühren beim USB Bochum (Umweltservice Bochum), Personal, Fahrzeuge und besenreine Übergabe sind bei Entlastium komplett im Festpreis enthalten. Keine versteckten Zusatzkosten.",
  },
  {
    q: "Wann zahlt das Sozialamt Bochum eine Haushaltsauflösung?",
    a: "Bei Bedürftigkeit (z. B. nach Todesfall mittelloser Personen oder bei Bezug von Sozialhilfe / Grundsicherung) übernimmt das Sozialamt Bochum die Kosten ganz oder teilweise. Wir stellen entsprechende Kostenvoranschläge für die Antragstellung aus.",
  },
  {
    q: "Wie schnell ist ein Termin in Bochum möglich?",
    a: "In der Regel können wir in Bochum und Umgebung innerhalb von 48–72 Stunden eine kostenlose Besichtigung anbieten. Bei Notfällen (Mietende, Räumungsklage) auch kurzfristiger.",
  },
];

export const Route = createFileRoute("/blog/kosten-haushaltsaufloesung-bochum")({
  component: KostenBochumGuide,
  head: () => ({
    meta: [
      { title: "Haushaltsauflösung Bochum: Was kostet sie 2026? | Entlastium" },
      {
        name: "description",
        content:
          "Was kostet eine Haushaltsauflösung in Bochum? Festpreise nach Wohnungsgröße, Kostenfaktoren, USB-Gebühren & Wertanrechnung im Ratgeber.",

      },
      { property: "og:title", content: "Haushaltsauflösung Bochum: Kosten & Preise 2026" },
      {
        property: "og:description",
        content:
          "Festpreise für Haushaltsauflösung & Entrümpelung in Bochum, alle Kostenfaktoren und wie die Wertanrechnung Ihren Preis senkt.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Bochum | Entlastium Entrümpelung & Haushaltsauflösungen",
          description:
            "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.",
          author: { "@type": "Organization", name: "Entlastium" },
          publisher: {
            "@type": "Organization",
            name: "Entlastium",
            logo: { "@type": "ImageObject", url: "https://entlastium.de/favicon.png" },
          },
          datePublished: "2026-06-13",
          dateModified: "2026-06-13",
          mainEntityOfPage: CANONICAL,
          about: { "@type": "City", name: "Bochum" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function KostenBochumGuide() {
  return (
    <PageLayout
      eyebrow="Ratgeber · Bochum"
      title="Haushaltsauflösung Bochum: Was kostet sie 2026?"
      intro="Transparente Festpreise für Haushaltsauflösung und Entrümpelung in Bochum – inklusive Kostenfaktoren, USB-Gebühren und Wertanrechnung verwertbarer Gegenstände."
      breadcrumbs={[
        { label: "Start", href: "/" },
        { label: "Blog" },
        { label: "Kosten Haushaltsauflösung Bochum" },
      ]}
    >
      <article className="prose prose-lg max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Kurz &amp; ehrlich: Haushaltsauflösung in Bochum
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Eine professionelle Haushaltsauflösung in Bochum kostet 2026 zwischen
            <strong> 590 € für ein 1-Zimmer-Apartment </strong> und
            <strong> 5.900 € für ein voll möbliertes Einfamilienhaus</strong>.
            Der exakte Preis hängt von vier Faktoren ab: Wohnungsgröße, Müllmenge,
            Sondermüll und der möglichen Wertanrechnung verwertbarer Gegenstände.
            Entlastium arbeitet in Bochum ausschließlich mit transparenten
            Festpreisen – nach der kostenlosen Besichtigung wissen Sie genau, was
            Sie zahlen. Keine Stundenabrechnung, keine Überraschungen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
            Preistabelle: Entrümpelung &amp; Haushaltsauflösung Bochum 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Objektgröße</th>
                  <th className="px-4 py-3 font-semibold">Fläche</th>
                  <th className="px-4 py-3 font-semibold">Festpreis (von – bis)</th>
                  <th className="px-4 py-3 font-semibold">Dauer</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_TABLE.map((row) => (
                  <tr key={row.size} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.sqm}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{row.price}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Preise inkl. Personal, Fahrzeuge, Containermiete, USB-Deponiegebühren
            und besenreine Übergabe. Stand: Juni 2026, gültig für Bochum und das
            gesamte Ruhrgebiet.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
            Die 4 wichtigsten Kostenfaktoren in Bochum
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FACTORS.map((f) => (
              <Card key={f.title} className="p-6">
                <f.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Wertanrechnung: So senken Sie Ihre Kosten in Bochum
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Viele Bochumer Haushalte – besonders in gewachsenen Stadtteilen wie
            Stiepel, Weitmar oder Wiemelhausen – enthalten Gegenstände mit
            Restwert, ohne dass die Bewohner es wissen. Bei der Besichtigung
            prüfen unsere Gutachter systematisch jeden Raum auf verwertbare
            Substanz:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Hochwertige Möbel (Massivholz, Designerstücke, Antiquitäten)",
              "Elektronik & Haushaltsgeräte unter 5 Jahren",
              "Schmuck, Uhren, Münzsammlungen",
              "Werkzeug, Fahrräder, E-Bikes",
              "Bücher, Schallplatten, Kunst & Porzellan",
              "Bergbau- & Ruhrgebiets-Sammlerstücke (Bochum-typisch)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Der ermittelte Restwert wird <strong>direkt vom Angebot abgezogen</strong>.
            In Einzelfällen reduziert sich der Endpreis um 30–60 % – bei
            nachlassreichen Haushalten in Bochum gelegentlich sogar auf 0 €.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Typische Zusatzkosten in Bochum – und wie Sie sie vermeiden
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[180px]">Sondermüll:</span>
              <span className="text-muted-foreground">
                Farben, Lacke, Altöl, Asbest – ca. 1,50–4 € pro Kilo, Abgabe am
                USB-Wertstoffhof Bochum.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[180px]">Elektrogroßgeräte:</span>
              <span className="text-muted-foreground">
                Kühlschrank, Waschmaschine: 25–60 € pro Gerät bei separater Entsorgung.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[180px]">Schwerlasten:</span>
              <span className="text-muted-foreground">
                Klavier, Tresor, Wasserbett: 150–400 € je nach Stockwerk &amp; Demontage –
                in Bochumer Altbauten ohne Aufzug öfter relevant.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[180px]">Anfahrt:</span>
              <span className="text-muted-foreground">
                Innerhalb Bochum und Umgebung bei Entlastium <strong>kostenfrei</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[180px]">Halteverbotszone:</span>
              <span className="text-muted-foreground">
                In engen Straßen (z. B. Bermuda3Eck, Innenstadt) ca. 80–150 € –
                wir kümmern uns um die Beantragung beim Ordnungsamt Bochum.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Wir arbeiten in allen Bochumer Stadtteilen
          </h2>
          <div className="flex flex-wrap gap-2">
            {BOCHUM_DISTRICTS.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                <MapPin className="h-3.5 w-3.5" />
                {d}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Häufig gestellte Fragen – Kosten in Bochum
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <Card key={f.q} className="p-6">
                <h3 className="font-serif text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 text-muted-foreground">
          <p>
            Weitere Informationen finden Sie in unserem allgemeinen{" "}
            <Link to="/blog/kosten-haushaltsaufloesung" className="text-primary underline">
              Preisguide für NRW
            </Link>{" "}
            oder direkt auf unserer{" "}
            <Link
              to="/entruempelung/$stadt"
              params={{ stadt: "bochum" }}
              className="text-primary underline"
            >
              Stadtseite Entrümpelung Bochum
            </Link>
            .
          </p>
        </section>

        <section className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Festpreis für Ihre Haushaltsauflösung in Bochum
          </h2>
          <p className="text-primary-foreground mb-6 max-w-2xl mx-auto">
            Kostenlose Besichtigung in ganz Bochum – mit transparenter
            Wertanrechnung und schriftlichem Festpreis-Angebot innerhalb von 24
            Stunden.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/kontakt">
              Jetzt kostenlos anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </article>
    </PageLayout>
  );
}
