import { createFileRoute } from "@tanstack/react-router";
import Impressum from "@/pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Entlastium Entrümpelung & Haushaltsauflösungen" },
      { name: "description", content: "Impressum von Entlastium – Anbieterkennzeichnung, Anschrift, Kontaktdaten und inhaltlich Verantwortlicher gemäß § 5 TMG." },
      { property: "og:title", content: "Impressum | Entlastium Entrümpelung & Haushaltsauflösungen" },
      { property: "og:description", content: "Impressum von Entlastium – Anbieterkennzeichnung, Anschrift, Kontaktdaten und inhaltlich Verantwortlicher gemäß § 5 TMG." },
      { property: "og:url", content: "https://entlastium.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://entlastium.de/impressum" }],
  }),
  component: Impressum,
});
