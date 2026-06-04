import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Leistungen", href: isHomePage ? "#services" : "/#services" },
    { label: "Ablauf", href: isHomePage ? "#process" : "/#process" },
    { label: "Über uns", href: isHomePage ? "#about" : "/#about" },
    { label: "FAQ", href: isHomePage ? "#faq" : "/#faq" },
    { label: "Kontakt", href: isHomePage ? "#contact" : "/#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group min-w-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logoMark.url}
              alt="Entlastium Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0"
            />
            <div className="min-w-0 leading-tight">
              <h1 className="text-lg sm:text-xl font-serif font-semibold text-foreground truncate">
                Entlastium
              </h1>
              <p className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-muted-foreground mt-0.5">
                Entrümpelung &amp; Haushaltsauflösungen
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-foreground/75 hover:text-foreground transition-colors font-medium after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="tel:+4912345678"
              className="flex items-center gap-2 text-foreground/75 hover:text-foreground transition-colors"
              aria-label="Telefonnummer anrufen"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline text-sm font-medium tabular-nums">
                +49 123 456 78
              </span>
            </a>
            <Button variant="default" size="default" asChild>
              <a href={isHomePage ? "#contact" : "/#contact"}>Kostenlos anfragen</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-foreground p-2 -mr-2"
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
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-background transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-custom px-6 py-8 flex flex-col h-full">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground text-base font-medium py-4 border-b border-border hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+4912345678"
              className="flex items-center justify-center gap-2 text-foreground py-3 rounded-md border border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium tabular-nums">+49 123 456 78</span>
            </a>
            <Button variant="default" size="lg" className="w-full" asChild>
              <a
                href={isHomePage ? "#contact" : "/#contact"}
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
