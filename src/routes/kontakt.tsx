import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/kontakt")({
  head: () => {
    const title = "Kontakt | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Kontakt zu Entlastium: kostenlose Besichtigung anfragen, telefonisch oder per Formular. Adlerstr. 14, 44577 Castrop-Rauxel – Mo–Fr 8–18 Uhr, Sa 10–14 Uhr.";
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
