import { createFileRoute } from "@tanstack/react-router";
import Impressum from "@/pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Entlastium" },
      { name: "description", content: "Impressum und rechtliche Angaben von Entlastium." },
    ],
  }),
  component: Impressum,
});
