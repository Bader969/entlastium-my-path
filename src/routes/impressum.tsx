import { createFileRoute } from "@tanstack/react-router";
import Impressum from "@/pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Entlastium Entrümpelung & Haushaltsauflösungen" },
      { name: "description", content: "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt." },
      { property: "og:title", content: "Impressum | Entlastium Entrümpelung & Haushaltsauflösungen" },
      { property: "og:description", content: "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt." },
      { property: "og:url", content: "https://entlastium.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/impressum" }],
  }),
  component: Impressum,
});
