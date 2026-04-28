import LegalPageLayout from "@/components/LegalPageLayout";
import { Shield, User, Database, Lock, Clock, AlertCircle, Server, FileCheck, Mail } from "lucide-react";

interface SectionProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ icon, number, title, children }: SectionProps) => (
  <section className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
          {number}
        </span>
        <h2 className="text-xl font-serif font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </section>
);

const Datenschutz = () => {
  return (
    <LegalPageLayout 
      title="Datenschutzerklärung" 
      subtitle="Informationen zur Verarbeitung Ihrer personenbezogenen Daten"
    >
      <div className="space-y-10">
        <Section icon={<Shield className="h-6 w-6 text-secondary" />} number="1" title="Datenschutz auf einen Blick">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </Section>

        <Section icon={<User className="h-6 w-6 text-secondary" />} number="2" title="Verantwortliche Stelle">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="bg-muted/50 rounded-xl p-4 mt-2">
            <p>
              <strong>Entlastium</strong><br />
              Entrümpelung & Haushaltsauflösungen<br />
              [Straße und Hausnummer]<br />
              [PLZ] Bochum<br /><br />
              Telefon: +49 123 456 78<br />
              E-Mail: info@entlastium.de
            </p>
          </div>
        </Section>

        <Section icon={<Database className="h-6 w-6 text-secondary" />} number="3" title="Datenerfassung auf dieser Website">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-2">Welche Daten werden erfasst?</h3>
            <ul className="list-none space-y-2 mt-2">
              {[
                "Vor- und Nachname",
                "E-Mail-Adresse",
                "Telefonnummer (optional)",
                "Art des Raumes (z.B. Wohnung, Keller)",
                "Größe des Raumes in m²",
                "Adresse des Objekts",
                "Ihre Nachricht/Anfrage"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section icon={<Lock className="h-6 w-6 text-secondary" />} number="4" title="Ihre Rechte">
          <p>
            Sie haben jederzeit das Recht auf:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Auskunft über Ihre gespeicherten personenbezogenen Daten",
              "Berichtigung oder Löschung Ihrer Daten",
              "Einschränkung der Verarbeitung",
              "Widerspruch gegen die Verarbeitung",
              "Datenübertragbarkeit"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </Section>

        <Section icon={<Server className="h-6 w-6 text-secondary" />} number="5" title="Hosting">
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
            erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich 
            um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten handeln.
          </p>
        </Section>

        <Section icon={<Shield className="h-6 w-6 text-secondary" />} number="6" title="SSL/TLS-Verschlüsselung">
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. 
            Eine verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in Ihrer Browserzeile 
            und daran, dass die Adresszeile von „http://" auf „https://" wechselt.
          </p>
        </Section>

        <Section icon={<Clock className="h-6 w-6 text-secondary" />} number="7" title="Speicherdauer">
          <p>
            Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck für die 
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen, 
            werden Ihre Daten gelöscht, sofern keine rechtlichen Aufbewahrungsfristen entgegenstehen.
          </p>
        </Section>

        <Section icon={<FileCheck className="h-6 w-6 text-secondary" />} number="8" title="Widerruf">
          <p>
            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </Section>

        <Section icon={<AlertCircle className="h-6 w-6 text-secondary" />} number="9" title="Beschwerderecht">
          <p>
            Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer 
            Aufsichtsbehörde zu.
          </p>
          <div className="bg-muted/50 rounded-xl p-4 mt-2">
            <p className="text-sm">
              <strong>Zuständige Aufsichtsbehörde für NRW:</strong><br />
              Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
              Postfach 20 04 44, 40102 Düsseldorf<br />
              E-Mail: poststelle@ldi.nrw.de
            </p>
          </div>
        </Section>

         <Section icon={<Mail className="h-6 w-6 text-secondary" />} number="10" title="E-Mail-Versand">
           <p>
             Für die technische Übermittlung von Kontaktanfragen nutzen wir unseren eigenen 
             E-Mail-Server. Der Versand erfolgt direkt über unsere Domain ohne Einschaltung 
             externer Drittanbieter.
           </p>
           <div>
             <h3 className="font-semibold text-foreground mb-2">Welche Daten werden übermittelt?</h3>
             <p>
               Bei Nutzung unseres Kontaktformulars werden Ihre eingegebenen Daten (Name, E-Mail-Adresse, 
               Telefonnummer, Objektdetails, Nachricht und ggf. hochgeladene Bilder) über unseren 
               E-Mail-Server an uns übermittelt.
             </p>
           </div>
           <div>
             <h3 className="font-semibold text-foreground mb-2">Sicherheit</h3>
             <ul className="list-none space-y-2 mt-2">
               {[
                 "Verschlüsselte Übertragung mittels SSL/TLS (Port 465)",
                 "Keine Weitergabe an externe E-Mail-Dienste",
                 "Direkte Zustellung auf unseren E-Mail-Server",
                 "Keine dauerhafte Zwischenspeicherung bei Dritten"
               ].map((item) => (
                 <li key={item} className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </Section>

        {/* Stand */}
        <div className="border-t border-border pt-8 mt-10">
          <p className="text-sm text-muted-foreground">
            Stand: Januar 2026
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default Datenschutz;
