import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import logoMark from "@/assets/logo-mark.png.asset.json";

const FAQS = [
  ["Was kostet eine Entrümpelung oder Haushaltsauflösung?", "Die Kosten variieren je nach Objektgröße, Menge des zu entsorgenden Materials und Zugänglichkeit. Nach einer kostenlosen Vor-Ort-Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot – ohne versteckte Kosten. Kleinere Entrümpelungen beginnen oft schon ab 200€."],
  ["Wie schnell können Sie mit der Entrümpelung beginnen?", "In der Regel können wir innerhalb von 24-48 Stunden nach Auftragserteilung mit der Arbeit beginnen. Bei dringenden Fällen bieten wir auch Express-Service am selben Tag an."],
  ["Muss ich bei der Entrümpelung anwesend sein?", "Nein, Ihre Anwesenheit ist nicht zwingend erforderlich. Nach einer Erstbegehung und Auftragserteilung können wir die Arbeiten auch in Ihrer Abwesenheit durchführen."],
  ["Was passiert mit verwertbaren Gegenständen?", "Wertvolle oder noch brauchbare Gegenstände werden nach Absprache mit Ihnen aussortiert. Diese können verkauft, gespendet oder Ihnen zurückgegeben werden. Erlöse werden transparent abgerechnet und können die Gesamtkosten reduzieren."],
  ["Entsorgen Sie auch Sondermüll wie Farben oder Elektrogeräte?", "Ja, wir entsorgen fachgerecht alle Arten von Abfällen, einschließlich Sondermüll, Elektrogeräte, Kühlschränke, Farben und Lacke – umweltgerecht gemäß den gesetzlichen Vorschriften."],
  ["Hinterlassen Sie das Objekt besenrein?", "Ja, nach Abschluss der Entrümpelung übergeben wir das Objekt besenrein. Auf Wunsch bieten wir auch eine gründlichere Endreinigung als Zusatzleistung an."],
];

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.";
    return {
      links: [
        { rel: "canonical", href: "https://entlastium.de/" },
        { rel: "preload", as: "image", href: logoMark.url, fetchpriority: "high" },
      ],
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: "https://entlastium.de/" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        },
      ],
    };
  },
  component: Index,
});
