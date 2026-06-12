import { Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; to?: string }[];
  children: React.ReactNode;
}

const PageLayout = ({ eyebrow, title, intro, breadcrumbs, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <div className="bg-primary pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/70">
                {breadcrumbs.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {b.to ? (
                      <Link
                        to={b.to}
                        className="hover:text-primary-foreground transition-colors"
                      >
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-primary-foreground">{b.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            {title}
          </h1>
          {intro && (
            <p className="text-primary-foreground/80 mt-4 text-lg max-w-3xl leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </div>

      <main className="flex-1 py-12 md:py-20">
        <div className="container-custom">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
