import { createFileRoute } from "@tanstack/react-router";
import FAQ from "@/components/FAQ";
import PageLayout from "@/components/PageLayout";
import { FAQ_ITEMS } from "@/data/faqs";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/faq")({
  head: () => {
    const title = "FAQ | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.";
    const url = `${BASE_URL}/faq`;
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
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: () => (
    <PageLayout
      eyebrow="FAQ"
      title="Häufig gestellte Fragen"
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "FAQ" }]}
    >
      <FAQ />
    </PageLayout>
  ),
});
