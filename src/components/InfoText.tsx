type Block = { heading: string; paragraphs: string[] };

export default function InfoText({ blocks }: { blocks: Block[] }) {
  return (
    <section className="mt-16 grid gap-10 md:grid-cols-2">
      {blocks.map((b) => (
        <div key={b.heading}>
          <h2 className="text-2xl font-serif font-bold mb-3 text-foreground">{b.heading}</h2>
          {b.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}

export const INFO_TEXTS = {
  staedte: [
    {
      heading: "Entrümpelung in ganz Nordrhein-Westfalen",
      paragraphs: [
        "Unser Team ist von Castrop-Rauxel aus in allen Regionen von NRW unterwegs: im Ruhrgebiet, im Rheinland, im Bergischen Land, im Münsterland, in Ostwestfalen-Lippe, im Sauerland und am Niederrhein. Auf jeder Städteseite finden Sie Informationen zu unseren Leistungen vor Ort.",
        "Ihre Stadt ist nicht dabei? Sprechen Sie uns trotzdem an. Wir prüfen gern, ob wir auch in Ihrem Ort eine kostenlose Besichtigung anbieten können.",
      ],
    },
    {
      heading: "Gleiche Qualität an jedem Einsatzort",
      paragraphs: [
        "Egal ob Großstadt oder kleinere Gemeinde: Sie erhalten überall dieselbe sorgfältige Arbeit, ein transparentes Festpreisangebot nach der Besichtigung und eine besenreine Übergabe. Wir arbeiten mit eigenem Team und eigenen Fahrzeugen und entsorgen alles fachgerecht bei regionalen Entsorgungsbetrieben.",
      ],
    },
  ],
  impressum: [
    {
      heading: "Über dieses Angebot",
      paragraphs: [
        "Entlastium ist ein Dienstleister für Entrümpelung, Haushaltsauflösung, Wohnungsauflösung, Kellerräumung, Gartenräumung, Endreinigung und Wohnungsübergabe in Nordrhein-Westfalen. Der Firmensitz befindet sich in Castrop-Rauxel.",
        "Für Anfragen, Rückfragen zu Angeboten oder Hinweise zu dieser Website erreichen Sie uns telefonisch, per E-Mail oder über das Kontaktformular. Wir antworten so schnell wie möglich.",
      ],
    },
  ],
  start: [
    {
      heading: "Entrümpelung und Haushaltsauflösung mit Verlass",
      paragraphs: [
        "Eine Haushaltsauflösung oder Entrümpelung ist oft mehr als nur Arbeit. Häufig stehen persönliche Veränderungen dahinter, ein Umzug, ein Erbfall oder ein neuer Lebensabschnitt. Wir nehmen Ihnen diese Last ab: von der kostenlosen Besichtigung über das transparente Festpreisangebot bis zur besenreinen Übergabe.",
        "Unser Team arbeitet sorgfältig, diskret und termingerecht. Wiederverwertbares führen wir dem Recycling zu, brauchbare Gegenstände werden nach Absprache angerechnet oder gespendet, und Sondermüll entsorgen wir nach den gesetzlichen Vorgaben.",
      ],
    },
  ],

  ablauf: [
    {
      heading: "Warum ein fester Ablauf wichtig ist",
      paragraphs: [
        "Ein klarer Ablauf schafft Sicherheit. Sie wissen jederzeit, was als Nächstes passiert, wer Ihr Ansprechpartner ist und wann die Räume frei sind. Termine stimmen wir verbindlich mit Ihnen ab, auch mit Vermietern, Hausverwaltungen oder Nachlassverwaltern, wenn Sie das wünschen. So vermeiden wir Überraschungen und halten Fristen zuverlässig ein.",
      ],
    },
    {
      heading: "Was Sie vorbereiten können",
      paragraphs: [
        "Eine gute Vorbereitung ist nicht nötig, macht die Räumung aber noch entspannter. Legen Sie persönliche Unterlagen, Dokumente, Fotos und Erinnerungsstücke beiseite, die Sie behalten möchten. Markieren Sie Möbel oder Gegenstände, die mitgenommen, verkauft oder gespendet werden sollen.",
        "Klären Sie, ob Keller, Dachboden, Garage oder Garten ebenfalls geräumt werden sollen, und ob es Parkmöglichkeiten für unser Fahrzeug gibt. Alles Weitere besprechen wir gemeinsam bei der kostenlosen Besichtigung.",
      ],
    },
    {
      heading: "Was nach der Übergabe passiert",
      paragraphs: [
        "Nach Abschluss der Arbeiten gehen wir mit Ihnen oder einer beauftragten Person gemeinsam durch das Objekt. Die Räume werden besenrein übergeben, auf Wunsch auch mit Endreinigung für die Wohnungsübergabe an Vermieter oder Käufer.",
        "Alle mitgenommenen Gegenstände werden sortiert und fachgerecht entsorgt oder wiederverwertet. Verwertbares wird nach Absprache angerechnet. So haben Sie nach der Übergabe keine weiteren Wege und keinen zusätzlichen Aufwand.",
      ],
    },
  ],
  faq: [
    {
      heading: "Rund um Entsorgung und Wertanrechnung",
      paragraphs: [
        "Viele Fragen drehen sich darum, was mit Möbeln, Elektrogeräten und Erinnerungsstücken passiert. Wir trennen alles sorgfältig: Brauchbares wird nach Absprache verkauft, gespendet oder angerechnet, Wertstoffe gehen ins Recycling, und Sondermüll entsorgen wir fachgerecht nach den gesetzlichen Vorgaben. Persönliche Dokumente und Fotos legen wir für Sie beiseite.",
      ],
    },
    {
      heading: "Ihre Frage ist nicht dabei?",
      paragraphs: [
        "Jede Entrümpelung und jede Haushaltsauflösung ist anders. Deshalb beantworten wir Ihre individuellen Fragen gern persönlich, telefonisch, per WhatsApp oder über unser Kontaktformular. Wir erklären Ihnen verständlich, wie wir vorgehen und worauf Sie achten sollten.",
      ],
    },
    {
      heading: "Kostenlose Besichtigung vor Ort",
      paragraphs: [
        "Die zuverlässigste Antwort auf viele Fragen ist ein Termin vor Ort. Bei der kostenlosen und unverbindlichen Besichtigung schauen wir uns Räume, Menge und Zugänglichkeit an. Danach erhalten Sie ein transparentes Festpreisangebot, auf das Sie sich verlassen können, ganz ohne versteckte Kosten.",
      ],
    },
  ],
  kontakt: [
    {
      heading: "Welche Angaben uns helfen",
      paragraphs: [
        "Für eine schnelle Einschätzung helfen uns ein paar Angaben: Art des Objekts, ungefähre Größe, Stockwerk und Aufzug, gewünschter Zeitraum und ob Keller, Dachboden oder Garten dazugehören. Fotos sind willkommen, aber kein Muss. Alles Weitere klären wir gemeinsam bei der kostenlosen Besichtigung vor Ort, ohne Verpflichtung für Sie.",
      ],
    },
    {
      heading: "So geht es nach Ihrer Anfrage weiter",
      paragraphs: [
        "Nach Ihrer Anfrage melden wir uns zeitnah bei Ihnen und vereinbaren einen passenden Termin für die kostenlose Besichtigung. Vor Ort besprechen wir Ihre Wünsche, prüfen den Aufwand und beantworten offene Fragen.",
        "Anschließend erhalten Sie ein schriftliches Festpreisangebot. Erst wenn Sie zustimmen, planen wir den Einsatz. Ihre Angaben behandeln wir vertraulich und nutzen sie ausschließlich für die Bearbeitung Ihrer Anfrage.",
      ],
    },
    {
      heading: "Unser Einsatzgebiet in NRW",
      paragraphs: [
        "Von unserem Standort in Castrop-Rauxel sind wir in ganz Nordrhein-Westfalen für Sie da, im Ruhrgebiet ebenso wie im Rheinland, im Münsterland, in Ostwestfalen und im Sauerland. Ob Wohnung, Haus, Keller, Dachboden oder Garten: Wir übernehmen Räumungen für Privatpersonen, Erben, Vermieter und Hausverwaltungen.",
      ],
    },
  ],
  leistungen: [
    {
      heading: "Alles aus einer Hand",
      paragraphs: [
        "Statt mehrere Firmen zu beauftragen, erhalten Sie bei uns Räumung, Entsorgung, Reinigung und Übergabe aus einer Hand. Das spart Zeit und Abstimmung. Sie haben einen festen Ansprechpartner, ein verbindliches Festpreisangebot nach der Besichtigung und die Gewissheit, dass alles termingerecht und sauber erledigt wird, in ganz Nordrhein-Westfalen.",
      ],
    },
    {
      heading: "Welche Leistung passt zu Ihnen?",
      paragraphs: [
        "Wenn ein ganzer Haushalt aufgelöst werden muss, etwa nach einem Todesfall oder einem Umzug ins Pflegeheim, ist die Haushaltsauflösung oder Wohnungsauflösung die richtige Wahl. Für einzelne Bereiche wie Keller, Dachboden oder Garten bieten wir gezielte Räumungen an.",
        "Steht eine Rückgabe an Vermieter oder Käufer bevor, kombinieren Sie die Räumung am besten mit Endreinigung und Wohnungsübergabe. So erhalten Sie alles aus einer Hand.",
      ],
    },
    {
      heading: "Unser Anspruch bei jedem Auftrag",
      paragraphs: [
        "Bei jeder Leistung arbeiten wir mit eigenem Team und eigenen Fahrzeugen, diskret und termingerecht. Wir trennen Abfälle sorgfältig, führen Wertstoffe dem Recycling zu und entsorgen Sondermüll fachgerecht. Brauchbare Gegenstände werden nach Absprache angerechnet oder gespendet.",
      ],
    },
  ],
  ueberUns: [
    {
      heading: "Unsere Arbeitsweise",
      paragraphs: [
        "Wir wissen, dass eine Entrümpelung oft mit besonderen Lebenssituationen verbunden ist. Deshalb nehmen wir uns Zeit für Ihre Anliegen, hören zu und gehen respektvoll mit persönlichen Gegenständen um. Absprachen halten wir ein, und Sie haben während des gesamten Auftrags einen festen Ansprechpartner.",
      ],
    },
    {
      heading: "Diskret und umweltgerecht",
      paragraphs: [
        "Diskretion ist für uns selbstverständlich, gegenüber Nachbarn ebenso wie im Umgang mit Dokumenten und privaten Daten. Bei der Entsorgung achten wir auf eine sorgfältige Trennung: Holz, Metall, Elektrogeräte und Sondermüll werden den passenden Verwertungswegen zugeführt. Was noch gut ist, bekommt nach Möglichkeit ein zweites Leben.",
      ],
    },
  ],
};
