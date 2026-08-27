import { createFileRoute } from "@tanstack/react-router";
import ProcessTimeline from "@/components/ProcessTimeline";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/ablauf")({
  head: () => {
    const title = "Ablauf | Entlastium";
    const description =
      "So läuft Ihre Entrümpelung ab: kostenlose Besichtigung, Festpreisangebot, Räumung mit eigenem Team und besenreine Übergabe – Schritt für Schritt erklärt.";
    const url = `${BASE_URL}/ablauf`;
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
      eyebrow="Ablauf"
      title="In 4 Schritten zur entrümpelten Immobilie"
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Ablauf" }]}
    >
      <ProcessTimeline />
    </PageLayout>
  ),
});
