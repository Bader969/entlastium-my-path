import { createFileRoute } from "@tanstack/react-router";
import FAQ from "@/components/FAQ";
import PageLayout from "@/components/PageLayout";
import InfoText, { INFO_TEXTS } from "@/components/InfoText";
import { FAQ_ITEMS } from "@/data/faqs";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/faq")({
  head: () => {
    const title = "FAQ | Entlastium";
    const description =
      "Antworten auf häufige Fragen zu Entrümpelung und Haushaltsauflösung: Ablauf, Termine, Wertanrechnung, Entsorgung von Sondermüll und besenreine Übergabe.";
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
      breadcrumbs={[{ label: "Entlastium", href: "/" }, { label: "FAQ" }]}
    >
      <FAQ />
      <InfoText blocks={INFO_TEXTS.faq} />
    </PageLayout>
  ),
});
