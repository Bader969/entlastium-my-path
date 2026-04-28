import { createFileRoute } from "@tanstack/react-router";
import AGB from "@/pages/AGB";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Entlastium" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Entlastium." },
    ],
  }),
  component: AGB,
});
