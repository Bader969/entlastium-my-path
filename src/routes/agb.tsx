import { createFileRoute } from "@tanstack/react-router";
import AGB from "@/pages/AGB";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Entlastium" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Entlastium für Entrümpelungen und Haushaltsauflösungen in Bochum und ganz Nordrhein-Westfalen." },
      { property: "og:title", content: "AGB – Entlastium" },
      { property: "og:description", content: "Allgemeine Geschäftsbedingungen von Entlastium für Entrümpelungen und Haushaltsauflösungen in Bochum und ganz NRW." },
      { property: "og:url", content: "https://entlastium.de/agb" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/agb" }],
  }),
  component: AGB,
});
