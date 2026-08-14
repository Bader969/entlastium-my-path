import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SERVICES } from "@/data/services";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/leistungen")({
  head: () => {
    const title = "Leistungen | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Alle Leistungen von Entlastium im Überblick: Entrümpelung, Haushaltsauflösung, Kellerräumung, Gartenräumung, Endreinigung und Wohnungsübergabe in NRW.";
    const url = `${BASE_URL}/leistungen`;
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
  component: LeistungenPage,
});

function LeistungenPage() {
  return (
    <PageLayout
      eyebrow="Leistungen"
      title="Professionelle Entrümpelung aus einer Hand"
      intro="Sechs spezialisierte Leistungen — von der Erstbesichtigung bis zur besenreinen Übergabe. Alles aus einer Hand, in ganz Nordrhein-Westfalen."
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            href={`/leistungen/${s.slug}`}
            className="block rounded-2xl border border-border bg-card p-6 hover:border-accent hover:shadow-card transition-all group"
          >
            <h2 className="text-xl font-serif font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
              {s.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              {s.shortTitle} im Detail <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </PageLayout>
  );
}
