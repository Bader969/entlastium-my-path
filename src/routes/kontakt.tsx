import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/kontakt")({
  head: () => {
    const title = "Kontakt – Kostenlose Besichtigung anfragen | Entlastium";
    const description =
      "Kontaktieren Sie Entlastium für Ihre Entrümpelung in NRW. Telefon, E-Mail oder Online-Formular. Wir antworten innerhalb von 24 Stunden.";
    const url = `${BASE_URL}/kontakt`;
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
      eyebrow="Kontakt"
      title="Lassen Sie uns reden"
      intro="Wir freuen uns auf Ihre Anfrage. Kostenlose Besichtigung in ganz NRW."
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
    >
      <ContactForm />
    </PageLayout>
  ),
});
