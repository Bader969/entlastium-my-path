import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-full.png.asset.json";
const logo = logoAsset.url;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Ablauf", href: "/ablauf" },
    { label: "Städte", href: "/staedte" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group min-w-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Entlastium Entrümpelung Logo"
              width={817}
              height={959}
              fetchPriority="high"
              className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <div className="min-w-0">
              <span className="block text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-primary-foreground leading-none truncate">
                Entlastium
              </span>
              <p className="hidden xl:block text-xs text-primary-foreground/70 mt-1">
                Entrümpelung & Haushaltsauflösungen
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm xl:text-base text-primary-foreground/85 hover:text-primary-foreground transition-colors font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="tel:+491637948428"
              className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground transition-colors"
              aria-label="Telefonnummer anrufen"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline text-sm font-medium">
                +49 163 7948428
              </span>
            </a>
            <Button variant="accent" size="default" asChild>
              <a href="/kontakt">Anfragen</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-primary-foreground p-2 -mr-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-primary/98 backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-custom px-6 py-8 flex flex-col h-full">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground text-lg font-medium py-3 border-b border-primary-foreground/10 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="tel:+491637948428"
              className="flex items-center justify-center gap-2 text-primary-foreground py-3 rounded-xl border border-primary-foreground/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+49 163 7948428</span>
            </a>
            <Button variant="accent" size="lg" className="w-full" asChild>
              <a
                href="/kontakt"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenlos anfragen
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
