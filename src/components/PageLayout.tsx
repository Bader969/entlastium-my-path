import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children: React.ReactNode;
}

const PageLayout = ({ eyebrow, title, intro, breadcrumbs, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <div className="bg-primary pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="container-custom">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/70">
                {breadcrumbs.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {b.href ? (
                      <a
                        href={b.href}
                        className="hover:text-primary-foreground transition-colors"
                      >
                        {b.label}
                      </a>
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
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-5 border border-accent/30">
              {eyebrow}
            </span>
          )}
          <h1 className="display-2 font-serif font-semibold text-primary-foreground">
            {title}
          </h1>
          {intro && (
            <p className="text-primary-foreground/85 mt-5 text-lg max-w-3xl leading-relaxed">
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
