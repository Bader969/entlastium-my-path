import { createFileRoute } from "@tanstack/react-router";
import Impressum from "@/pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Entlastium" },
      { name: "description", content: "Impressum und rechtliche Angaben von Entlastium – Anbieter für Entrümpelungen und Haushaltsauflösungen in Bochum und ganz Nordrhein-Westfalen." },
      { property: "og:title", content: "Impressum – Entlastium" },
      { property: "og:description", content: "Impressum und rechtliche Angaben von Entlastium für Entrümpelungen in Bochum und ganz NRW." },
      { property: "og:url", content: "https://entlastium.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/impressum" }],
  }),
  component: Impressum,
});
