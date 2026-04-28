import LegalPageLayout from "@/components/LegalPageLayout";
import { FileText, Handshake, Package, CreditCard, Users, ClipboardCheck, XCircle, Shield, Scale } from "lucide-react";

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
          § {number}
        </span>
        <h2 className="text-xl font-serif font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  </section>
);

const Paragraph = ({ num, children }: { num: string; children: React.ReactNode }) => (
  <p>
    <span className="font-medium text-foreground/80">({num})</span> {children}
  </p>
);

const AGB = () => {
  return (
    <LegalPageLayout 
      title="Allgemeine Geschäftsbedingungen" 
      subtitle="Vertragsbedingungen für Entrümpelung & Haushaltsauflösungen"
    >
      <div className="space-y-10">
        <Section icon={<FileText className="h-6 w-6 text-secondary" />} number="1" title="Geltungsbereich und Vertragsgegenstand">
          <Paragraph num="1">
            Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Rechtsgeschäfte 
            zwischen Entlastium (Inhaber: [Dein Vor- und Nachname]), nachfolgend „Auftragnehmer" genannt, 
            und dem Vertragspartner, nachfolgend „Auftraggeber" genannt.
          </Paragraph>
          <Paragraph num="2">
            Gegenstand des Vertrages ist die Erbringung von Dienstleistungen im Bereich 
            Haushaltsauflösung, Entrümpelung sowie die entsorgungspflichtige Räumung von Objekten.
          </Paragraph>
          <Paragraph num="3">
            Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers erkennt 
            der Auftragnehmer nicht an, es sei denn, er hat ihrer Geltung ausdrücklich schriftlich zugestimmt.
          </Paragraph>
        </Section>

        <Section icon={<Handshake className="h-6 w-6 text-secondary" />} number="2" title="Zustandekommen des Vertrages">
          <Paragraph num="1">
            Die Angebote des Auftragnehmers sind freibleibend und unverbindlich.
          </Paragraph>
          <Paragraph num="2">
            Der Vertrag kommt durch die Annahme des Angebots durch den Auftraggeber (mündlich, 
            fernmündlich oder in Textform) und die anschließende Auftragsbestätigung durch den 
            Auftragnehmer oder durch Beginn der Leistungserbringung zustande.
          </Paragraph>
          <Paragraph num="3">
            Im Falle von Fernabsatzverträgen mit Verbrauchern weist der Auftragnehmer gesondert 
            auf das gesetzliche Widerrufsrecht hin.
          </Paragraph>
        </Section>

        <Section icon={<Package className="h-6 w-6 text-secondary" />} number="3" title="Eigentumsübergang und Verfügungsbefugnis">
          <Paragraph num="1">
            Mit der physischen Übernahme der zu entsorgenden Gegenstände durch den Auftragnehmer 
            geht das Eigentum an diesen Gegenständen auf den Auftragnehmer über (§ 929 BGB). Der 
            Auftragnehmer ist berechtigt, diese Gegenstände nach eigenem Ermessen zu verwerten oder 
            zu entsorgen.
          </Paragraph>
          <Paragraph num="2">
            Ausgenommen vom Eigentumsübergang sind Bargeld, Urkunden, Schmuck und sonstige 
            offensichtliche Wertsachen, die nicht explizit zur Entsorgung bestimmt waren.
          </Paragraph>
          <Paragraph num="3">
            Der Auftraggeber versichert, dass er uneingeschränkt über die zu räumenden 
            Gegenstände verfügen darf und keine Rechte Dritter entgegenstehen.
          </Paragraph>
        </Section>

        <Section icon={<CreditCard className="h-6 w-6 text-secondary" />} number="4" title="Vergütung und Zahlungsbedingungen">
          <Paragraph num="1">
            Es gelten die vertraglich vereinbarten Preise.
          </Paragraph>
          <div className="bg-muted/50 rounded-xl p-4 my-2">
            <p className="text-sm">
              <strong>Hinweis:</strong> Gemäß § 19 UStG wird keine Umsatzsteuer berechnet 
              und folglich auch nicht ausgewiesen.
            </p>
          </div>
          <Paragraph num="3">
            Sofern nichts anderes vereinbart ist, ist die Vergütung unmittelbar nach Beendigung 
            der Arbeiten vor Ort in bar oder per EC-Zahlung fällig.
          </Paragraph>
          <Paragraph num="4">
            Kommt der Auftraggeber in Zahlungsverzug, so ist der Auftragnehmer berechtigt, 
            Verzugszinsen gemäß § 288 BGB zu fordern.
          </Paragraph>
        </Section>

        <Section icon={<Users className="h-6 w-6 text-secondary" />} number="5" title="Mitwirkungspflichten des Auftraggebers">
          <Paragraph num="1">
            Der Auftraggeber ist verpflichtet, den Auftragnehmer vor Arbeitsbeginn über 
            vorhandene gefährliche Abfälle oder Schadstoffe (z.B. Asbest, Farben, Chemikalien) 
            zu unterrichten.
          </Paragraph>
          <Paragraph num="2">
            Unterlässt der Auftraggeber diese Hinweispflicht schuldhaft, haftet er für die 
            daraus entstehenden Mehrkosten der Entsorgung sowie für etwaige Schäden.
          </Paragraph>
          <Paragraph num="3">
            Der Auftraggeber gewährleistet eine ordnungsgemäße Zufahrt und Zugangsmöglichkeit 
            zum Objekt für die Dauer der Arbeiten.
          </Paragraph>
        </Section>

        <Section icon={<ClipboardCheck className="h-6 w-6 text-secondary" />} number="6" title="Leistungsumfang / Besenreinheit">
          <Paragraph num="1">
            Der Auftragnehmer schuldet die Räumung der vereinbarten Gegenstände und deren Abtransport.
          </Paragraph>
          <Paragraph num="2">
            Die Übergabe des Objekts erfolgt „besenrein". Dies definiert sich als das Entfernen 
            aller beweglichen Gegenstände und das grobe Kehren der Böden. Weitergehende 
            Reinigungsarbeiten sind nicht Vertragsbestandteil, sofern nicht gesondert vereinbart.
          </Paragraph>
        </Section>

        <Section icon={<XCircle className="h-6 w-6 text-secondary" />} number="7" title="Kündigung und Annahmeverzug">
          <Paragraph num="1">
            Kündigt der Auftraggeber den Vertrag vor Ausführung, so steht dem Auftragnehmer 
            gemäß § 648 BGB die vereinbarte Vergütung abzüglich ersparter Aufwendungen zu.
          </Paragraph>
          <div className="bg-destructive/10 rounded-xl p-4 my-2 border border-destructive/20">
            <p className="text-sm text-destructive font-medium">
              ⚠️ Stornierung unter 24 Stunden vor Arbeitsbeginn: 50% Stornopauschale
            </p>
          </div>
        </Section>

        <Section icon={<Shield className="h-6 w-6 text-secondary" />} number="8" title="Haftung">
          <Paragraph num="1">
            Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, 
            des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen 
            Pflichtverletzung beruhen.
          </Paragraph>
          <Paragraph num="2">
            Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder grober 
            Fahrlässigkeit.
          </Paragraph>
          <Paragraph num="3">
            Etwaige Schäden sind dem Auftragnehmer unverzüglich, spätestens jedoch binnen 
            3 Tagen nach Abschluss der Arbeiten schriftlich anzuzeigen.
          </Paragraph>
        </Section>

        <Section icon={<Scale className="h-6 w-6 text-secondary" />} number="9" title="Schlussbestimmungen">
          <Paragraph num="1">
            Es gilt das Recht der Bundesrepublik Deutschland.
          </Paragraph>
          <Paragraph num="2">
            Sollte eine Bestimmung dieser AGB unwirksam sein, so bleibt der Vertrag im Übrigen 
            wirksam. Anstelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften.
          </Paragraph>
        </Section>

        {/* Stand */}
        <div className="border-t border-border pt-8 mt-10">
          <p className="text-sm text-muted-foreground">
            Stand: Januar 2025
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default AGB;
