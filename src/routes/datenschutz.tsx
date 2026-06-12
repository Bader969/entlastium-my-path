import { createFileRoute } from "@tanstack/react-router";
import Datenschutz from "@/pages/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Entlastium" },
      { name: "description", content: "Datenschutzerklärung von Entlastium gemäß DSGVO: Welche Daten wir erheben, wie wir sie verarbeiten und welche Rechte Sie als Nutzer haben." },
      { property: "og:title", content: "Datenschutz – Entlastium" },
      { property: "og:description", content: "DSGVO-konforme Datenschutzerklärung von Entlastium – transparente Information zur Verarbeitung Ihrer Daten." },
      { property: "og:url", content: "https://entlastium.de/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/datenschutz" }],
  }),
  component: Datenschutz,
});
