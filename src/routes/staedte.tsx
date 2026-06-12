import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { NRW_CITIES } from "@/data/nrw-cities";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/staedte")({
  head: () => {
    const title = "Entrümpelung in NRW – über 80 Städte | Entlastium";
    const description = `Wir entrümpeln in über ${NRW_CITIES.length} Städten in Nordrhein-Westfalen — von Köln und Düsseldorf bis Münster und Aachen. Lokal vor Ort, faire Festpreise.`;
    const url = `${BASE_URL}/staedte`;
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
  component: StaedtePage,
});

function StaedtePage() {
  // Gruppieren nach Region
  const byRegion = NRW_CITIES.reduce<Record<string, typeof NRW_CITIES>>((acc, c) => {
    (acc[c.region] ||= []).push(c);
    return acc;
  }, {});

  return (
    <PageLayout
      eyebrow="Einsatzgebiet"
      title="Entrümpelung in ganz Nordrhein-Westfalen"
      intro={`Wir sind in über ${NRW_CITIES.length} Städten in NRW aktiv — mit kurzen Anfahrtswegen, lokaler Marktkenntnis und festen Festpreisen.`}
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Städte" }]}
    >
      <div className="space-y-12">
        {Object.entries(byRegion).map(([region, cities]) => (
          <section key={region}>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              {region}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map((c) => (
                <a
                  key={c.slug}
                  href={`/entruempelung/${c.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-accent hover:shadow-sm transition-all"
                >
                  <div className="font-medium text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">
                    PLZ {c.plzPrefix} · {c.einwohner.toLocaleString("de-DE")} Einw.
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
