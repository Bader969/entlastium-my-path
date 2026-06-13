import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Entlastium – Entrümpelung & Haushaltsauflösung NRW" },
      {
        name: "description",
        content:
          "Entlastium bietet schnelle, kostengünstige und fachgerechte Entrümpelung in Bochum, Umgebung und ganz NRW. Kostenlose Besichtigung & faire Festpreise.",
      },
      { name: "author", content: "Entlastium" },
      {
        name: "keywords",
        content:
          "Entrümpelung, Haushaltsauflösung, Bochum, NRW, Kellerentrümpelung, Wohnungsräumung, Gartenräumung",
      },
      { property: "og:site_name", content: "Entlastium" },
      { property: "og:title", content: "Entlastium – Entrümpelung & Haushaltsauflösung NRW" },
      {
        property: "og:description",
        content: "Schnelle, kostengünstige und fachgerechte Entrümpelung in Bochum und ganz NRW. Kostenlose Besichtigung & faire Festpreise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://entlastium.de/favicon.png" },
      { property: "og:image:alt", content: "Entlastium Logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Entlastium" },
      { name: "twitter:title", content: "Entlastium – Entrümpelung & Haushaltsauflösung NRW" },
      { name: "twitter:description", content: "Schnelle, kostengünstige und fachgerechte Entrümpelung in Bochum und ganz NRW. Kostenlose Besichtigung & faire Festpreise." },
      { name: "twitter:image", content: "https://entlastium.de/favicon.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Epilogue:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://entlastium.de/#organization",
              name: "Entlastium",
              url: "https://entlastium.de",
              logo: "https://entlastium.de/favicon.png",
              email: "info@entlastium.de",
              telephone: "+49-123-45678",
            },
            {
              "@type": "WebSite",
              "@id": "https://entlastium.de/#website",
              url: "https://entlastium.de",
              name: "Entlastium",
              publisher: { "@id": "https://entlastium.de/#organization" },
              inLanguage: "de-DE",
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://entlastium.de/#localbusiness",
              name: "Entlastium",
              description:
                "Professionelle Entrümpelung & Haushaltsauflösungen in Bochum und ganz NRW. Kostenlose Besichtigung, faire Festpreise.",
              url: "https://entlastium.de",
              telephone: "+49-123-45678",
              email: "info@entlastium.de",
              areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bochum",
                addressRegion: "NRW",
                addressCountry: "DE",
              },
              priceRange: "€€",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster richColors />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
