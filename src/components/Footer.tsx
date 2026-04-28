import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Haushaltsauflösung",
    "Entrümpelung",
    "Kellerräumung",
    "Gartenräumung",
    "Endreinigung",
    "Wohnungsübergabe",
  ];

  const links = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
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
                alt="Entlastium Logo" 
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
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
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
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Entlastium. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-primary-foreground/40">Mit ❤️ für Ordnung</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
