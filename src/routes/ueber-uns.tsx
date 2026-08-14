import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/components/AboutUs";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/ueber-uns")({
  head: () => {
    const title = "Über uns | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.";
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
