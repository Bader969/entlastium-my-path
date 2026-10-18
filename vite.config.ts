// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { NRW_CITIES } from "./src/data/nrw-cities";
import { SERVICES } from "./src/data/services";

// Static marketing pages are prerendered for fast first paint (identical HTML for every visitor).
const STATIC_PATHS = [
  "/",
  "/ablauf",
  "/agb",
  "/datenschutz",
  "/faq",
  "/impressum",
  "/kontakt",
  "/leistungen",
  "/staedte",
  "/ueber-uns",
  "/blog/kosten-haushaltsaufloesung",
  "/blog/kosten-haushaltsaufloesung-bochum",
  ...SERVICES.map((s) => `/leistungen/${s.slug}`),
  ...NRW_CITIES.map((c) => `/entruempelung/${c.slug}`),
];

export default defineConfig({
  tanstackStart: {
    pages: [...new Set(STATIC_PATHS)].map((path) => ({ path })),
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
