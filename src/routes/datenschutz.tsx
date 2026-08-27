import { createFileRoute } from "@tanstack/react-router";
import Datenschutz from "@/pages/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Entlastium" },
      { name: "description", content: "Datenschutzerklärung von Entlastium: welche Daten bei Kontaktanfragen erhoben werden, wie sie verarbeitet werden und welche Rechte Sie haben." },
      { property: "og:title", content: "Datenschutz | Entlastium" },
      { property: "og:description", content: "Datenschutzerklärung von Entlastium: welche Daten bei Kontaktanfragen erhoben werden, wie sie verarbeitet werden und welche Rechte Sie haben." },
      { property: "og:url", content: "https://entlastium.de/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/datenschutz" }],
  }),
  component: Datenschutz,
});
