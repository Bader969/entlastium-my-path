import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { NRW_CITIES } from "@/data/nrw-cities";

const BASE_URL = "https://entlastium.de";

export const Route = createFileRoute("/staedte")({
  head: () => {
    const title = "Städte | Entlastium Entrümpelung & Haushaltsauflösungen";
    const description =
      "Übersicht aller Städte in NRW, in denen Entlastium Entrümpelungen und Haushaltsauflösungen durchführt – mit Direktlink zu Ihrer Stadt.";
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
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NRW_CITIES;
    return NRW_CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.slug.includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.plzPrefix.includes(q),
    );
  }, [query]);

  // Gruppieren nach Region
  const byRegion = filtered.reduce<Record<string, typeof NRW_CITIES>>((acc, c) => {
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
      {/* Such-Filter */}
      <div className="mb-10">
        <label htmlFor="city-search" className="sr-only">
          Stadt suchen
        </label>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            id="city-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Stadt, PLZ oder Region suchen…"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {filtered.length} von {NRW_CITIES.length} Städten
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            Keine Stadt für „{query}" gefunden. Rufen Sie uns an —{" "}
            <a href="tel:+491637948428" className="text-primary hover:underline">
              wir kommen trotzdem.
            </a>
          </p>
        </div>
      ) : (
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
      )}
    </PageLayout>
  );
}
