import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/components/AboutUs";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/ueber-uns")({
  head: () => {
    const title = "Über uns | Entlastium";
    const description =
      "Wer hinter Entlastium steht: eingespieltes Team, eigene Fahrzeuge, Diskretion und termingerechte Abwicklung von Entrümpelungen in NRW.";
    const url = `${BASE_URL}/ueber-uns`;
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
      eyebrow="Über uns"
      title="Erfahrung, Diskretion und Zuverlässigkeit"
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
    >
      <AboutUs />
    </PageLayout>
  ),
});
