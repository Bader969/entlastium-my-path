import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-full.png.asset.json";
import { NRW_CITIES } from "@/data/nrw-cities";
import { SERVICES } from "@/data/services";
const logo = logoAsset.url;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Top 20 Städte nach Einwohnerzahl (Daten sind bereits absteigend sortiert)
  const topCities = NRW_CITIES.slice(0, 20);

  const links = [
    { label: "Impressum", href: "/impressum" as const },
    { label: "Datenschutz", href: "/datenschutz" as const },
    { label: "AGB", href: "/agb" as const },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Entlastium Entrümpelung Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Entlastium</h3>
                <p className="text-xs text-primary-foreground/70">Entrümpelung & Haushaltsauflösungen</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Ihr Partner für professionelle Entrümpelung in Bochum, Umgebung und ganz NRW.
              Schnell, fair und nachhaltig.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/leistungen/${service.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/leistungen"
                  className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Alle Leistungen →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Telefon</p>
                  <a href="tel:+4912345678" className="text-sm font-medium hover:text-accent transition-colors">
                    +49 123 456 78
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">E-Mail</p>
                  <a href="mailto:info@entlastium.de" className="text-sm font-medium hover:text-accent transition-colors">
                    info@entlastium.de
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Einsatzgebiet</p>
                  <p className="text-sm font-medium">Bochum & ganz NRW</p>
                </div>
              </li>
            </ul>

            <h4 className="text-lg font-serif font-semibold mt-8 mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Städte */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-2">Entrümpelung in NRW</h4>
            <p className="text-xs text-primary-foreground/60 mb-4">
              Wir sind in über {NRW_CITIES.length} Städten aktiv:
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {topCities.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/entruempelung/${city.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/staedte"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Alle {NRW_CITIES.length} Städte ansehen
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Compliance / Vertrauen */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 grid md:grid-cols-3 gap-4 text-xs text-primary-foreground/70">
          <div>
            <p className="font-semibold text-primary-foreground/90 mb-1">Entsorgungsfachbetrieb</p>
            <p>Nachweis-Nr.: <span className="text-primary-foreground/60">[wird ergänzt]</span></p>
          </div>
          <div>
            <p className="font-semibold text-primary-foreground/90 mb-1">Versicherung</p>
            <p>Haftpflicht- und Betriebsversicherung vorhanden</p>
          </div>
          <div>
            <p className="font-semibold text-primary-foreground/90 mb-1">Mitgliedschaften</p>
            <p><span className="text-primary-foreground/60">[wird ergänzt]</span></p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Entlastium. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Professionelle Entrümpelung in Bochum & ganz NRW
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
