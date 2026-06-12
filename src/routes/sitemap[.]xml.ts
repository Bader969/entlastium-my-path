import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { NRW_CITIES } from "@/data/nrw-cities";
import { SERVICES } from "@/data/services";

const BASE_URL = "https://entlastium.de";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/leistungen", changefreq: "monthly", priority: "0.9" },
          { path: "/staedte", changefreq: "monthly", priority: "0.9" },
          { path: "/ueber-uns", changefreq: "monthly", priority: "0.7" },
          { path: "/ablauf", changefreq: "monthly", priority: "0.7" },
          { path: "/kontakt", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/impressum", changefreq: "yearly", priority: "0.3" },
          { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
          { path: "/agb", changefreq: "yearly", priority: "0.3" },
        ];

        const serviceEntries: SitemapEntry[] = SERVICES.map((s) => ({
          path: `/leistungen/${s.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const cityEntries: SitemapEntry[] = NRW_CITIES.map((c) => ({
          path: `/entruempelung/${c.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const all = [...staticEntries, ...serviceEntries, ...cityEntries];

        const urls = all.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
