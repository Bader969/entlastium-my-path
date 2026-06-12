import { createFileRoute } from "@tanstack/react-router";
import FAQ from "@/components/FAQ";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/faq")({
  head: () => {
    const title = "FAQ – Häufige Fragen zur Entrümpelung | Entlastium";
    const description =
      "Antworten auf die häufigsten Fragen zu Entrümpelung, Haushaltsauflösung, Kosten, Ablauf und Entsorgung in NRW.";
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
