import { createFileRoute } from "@tanstack/react-router";
import Datenschutz from "@/pages/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Entlastium" },
      { name: "description", content: "Datenschutzerklärung von Entlastium gemäß DSGVO." },
    ],
  }),
  component: Datenschutz,
});
