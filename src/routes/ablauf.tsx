import { createFileRoute } from "@tanstack/react-router";
import ProcessTimeline from "@/components/ProcessTimeline";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/ablauf")({
  head: () => {
    const title = "Ablauf | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.";
    const url = `${BASE_URL}/ablauf`;
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
      eyebrow="Ablauf"
      title="In 4 Schritten zur entrümpelten Immobilie"
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Ablauf" }]}
    >
      <ProcessTimeline />
    </PageLayout>
  ),
});
