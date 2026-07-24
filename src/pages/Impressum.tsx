import LegalPageLayout from "@/components/LegalPageLayout";
import { Building2, Phone, Mail, Scale, Globe, FileText } from "lucide-react";

const Impressum = () => {
  return (
    <LegalPageLayout 
      title="Impressum" 
      subtitle="Angaben gemäß § 5 TMG"
    >
      <div className="space-y-10">
        {/* Firmeninfo */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              Unternehmen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Entlastium<br />
              Entrümpelung & Haushaltsauflösungen<br />
              Adlerstr. 14<br />
              44577 Castrop-Rauxel
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Phone className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Telefon: <a href="tel:+4912345678" className="text-secondary hover:underline">+49 123 456 78</a><br />
              E-Mail: <a href="mailto:info@entlastium.de" className="text-secondary hover:underline">info@entlastium.de</a>
            </p>
          </div>
        </section>

        {/* Umsatzsteuer */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <FileText className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [Ihre USt-IdNr.]
            </p>
          </div>
        </section>

        {/* Gewerbeanmeldung */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Scale className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              Gewerbeanmeldung
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Gewerbeanmeldung erfolgte bei der zuständigen Behörde der Stadt Bochum.
            </p>
          </div>
        </section>

        {/* Verantwortlich */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              [Name des Verantwortlichen]<br />
              [Straße und Hausnummer]<br />
              [PLZ] Bochum
            </p>
          </div>
        </section>

        {/* EU-Streitschlichtung */}
        <section className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Globe className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
              EU-Streitschlichtung
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-border pt-10">
          <h2 className="text-xl font-serif font-semibold text-foreground mb-6">
            Haftungsausschluss
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default Impressum;
