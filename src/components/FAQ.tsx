import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "Was kostet eine Entrümpelung oder Haushaltsauflösung?",
      answer: "Die Kosten variieren je nach Objektgröße, Menge des zu entsorgenden Materials und Zugänglichkeit. Nach einer kostenlosen Vor-Ort-Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot – ohne versteckte Kosten. Kleinere Entrümpelungen beginnen oft schon ab 200€."
    },
    {
      question: "Wie schnell können Sie mit der Entrümpelung beginnen?",
      answer: "In der Regel können wir innerhalb von 24-48 Stunden nach Auftragserteilung mit der Arbeit beginnen. Bei dringenden Fällen bieten wir auch Express-Service am selben Tag an. Kontaktieren Sie uns einfach für eine schnelle Terminvereinbarung."
    },
    {
      question: "Muss ich bei der Entrümpelung anwesend sein?",
      answer: "Nein, Ihre Anwesenheit ist nicht zwingend erforderlich. Nach einer Erstbegehung und Auftragserteilung können wir die Arbeiten auch in Ihrer Abwesenheit durchführen. Wir sorgen für eine sichere Schlüsselübergabe und halten Sie über den Fortschritt auf dem Laufenden."
    },
    {
      question: "Was passiert mit verwertbaren Gegenständen?",
      answer: "Wertvolle oder noch brauchbare Gegenstände werden nach Absprache mit Ihnen aussortiert. Diese können verkauft, gespendet oder Ihnen zurückgegeben werden. Erlöse aus dem Verkauf werden transparent mit Ihnen abgerechnet und können die Gesamtkosten reduzieren."
    },
    {
      question: "Entsorgen Sie auch Sondermüll wie Farben oder Elektrogeräte?",
      answer: "Ja, wir entsorgen fachgerecht alle Arten von Abfällen, einschließlich Sondermüll, Elektrogeräte, Kühlschränke, Farben und Lacke. Die Entsorgung erfolgt umweltgerecht gemäß den gesetzlichen Vorschriften. Bitte informieren Sie uns vorab über vorhandene Schadstoffe."
    },
    {
      question: "Bieten Sie auch Teil-Entrümpelungen an?",
      answer: "Selbstverständlich! Ob einzelne Räume, Keller, Dachboden oder Garage – wir passen unseren Service flexibel an Ihre Bedürfnisse an. Sie bestimmen, was entrümpelt werden soll, und wir kümmern uns um den Rest."
    },
    {
      question: "Hinterlassen Sie das Objekt besenrein?",
      answer: "Ja, nach Abschluss der Entrümpelung übergeben wir das Objekt besenrein. Das bedeutet, alle beweglichen Gegenstände sind entfernt und die Böden grob gekehrt. Auf Wunsch bieten wir auch eine gründlichere Endreinigung als Zusatzleistung an."
    },
    {
      question: "Arbeiten Sie auch an Wochenenden oder Feiertagen?",
      answer: "Ja, nach Absprache sind wir auch an Wochenenden und Feiertagen für Sie im Einsatz. Wir verstehen, dass Entrümpelungen oft zeitkritisch sind, zum Beispiel bei Mieterwechseln oder Erbschaftsangelegenheiten."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Häufige Fragen
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            FAQ – Ihre Fragen, unsere Antworten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Entrümpelungs- und Haushaltsauflösungsdienste.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:shadow-md data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-4">
            Haben Sie weitere Fragen? Wir helfen Ihnen gerne!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
