import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/kontakt")({
  head: () => {
    const title = "Kontakt | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Professionelle Entrümpelung mit System & Erfahrung Wir sind ein dynamisches Unternehmen, das frischen Wind in die Branche bringt – fundiert durch langjährige Erfahrung und tiefe Fachkenntnis im Bereich der Entrümpelung. Unser Team besteht aus eingespielten Profis, die wissen, worauf es ankommt: Diskretion, Schnelligkeit und absolute Zuverlässigkeit. Wir schaffen Raum für das, was zählt – professionell, termingerecht und mit höchster Sorgfalt.";
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
