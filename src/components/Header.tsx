import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", href: isHomePage ? "#home" : "/" },
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "Ablauf", href: isHomePage ? "#process" : "/#process" },
    { label: "Preisrechner", href: isHomePage ? "#rechner" : "/#rechner" },
    { label: "Über uns", href: isHomePage ? "#about" : "/#about" },
    { label: "FAQ", href: isHomePage ? "#faq" : "/#faq" },
    { label: "Kontakt", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-primary-foreground/10 shadow-[0_4px_30px_hsl(var(--primary)/0.3)]">
      <div className="container-custom section-padding py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={logo} 
                alt="Entlastium Logo" 
                className="relative h-12 w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-accent/0 group-hover:ring-accent/60 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">
                Entlastium
              </h1>
              <p className="text-xs text-primary-foreground/70">
                Entrümpelung & Haushaltsauflösungen
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+4912345678" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+49 123 456 78</span>
            </a>
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Kostenlos anfragen</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="accent" size="lg" className="mt-2" asChild>
                <a href="#contact">Kostenlos anfragen</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
