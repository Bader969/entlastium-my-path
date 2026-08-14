// Service-Stammdaten für Service-Landingpages und Sitemap.
export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  features: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    shortTitle: "Haushaltsauflösung",
    description:
      "Komplette Auflösung von Wohnungen und Häusern bei Umzug, Erbschaft oder Verkleinerung — diskret, schnell und mit Wertanrechnung.",
    intro:
      "Eine Haushaltsauflösung ist oft mit Emotionen, Zeitdruck und Behördengängen verbunden. Wir übernehmen den gesamten Prozess: von der ersten Sichtung über die Sortierung wertvoller Gegenstände bis zur besenreinen Übergabe. Auf Wunsch rechnen wir verwertbare Stücke gegen die Auftragssumme an. So sparen Sie Zeit, Nerven und in vielen Fällen auch Geld.",
    features: [
      "Komplette Räumung aller Räume inkl. Keller, Dachboden, Garage",
      "Diskrete und respektvolle Behandlung persönlicher Gegenstände",
      "Wertanrechnung für Möbel, Schmuck, Antiquitäten",
      "Fachgerechte Entsorgung & Recycling",
      "Besenreine Übergabe an Vermieter oder Käufer",
      "Hilfe bei Behördengängen und Wohnungsübergabe",
    ],
    faq: [
      { q: "Wie schnell können Sie eine Haushaltsauflösung durchführen?", a: "In dringenden Fällen innerhalb von 48 Stunden. Standardtermine sind in 5–10 Tagen verfügbar." },
      { q: "Was kostet eine Haushaltsauflösung?", a: "Die Kosten richten sich nach Größe und Aufwand des Objekts. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot – Wertanrechnung kann den Preis reduzieren." },
      { q: "Werden Wertsachen anerkannt?", a: "Ja, alle verwertbaren Gegenstände werden transparent bewertet und gegen die Rechnung verrechnet." },
    ],
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    shortTitle: "Entrümpelung",
    description:
      "Vollständige Entrümpelung von Wohnungen, Häusern, Gewerberäumen und Lagern — fair, schnell und umweltgerecht.",
    intro:
      "Ob Messie-Wohnung, vollgestopfter Speicher oder geräumtes Gewerbeobjekt — wir entrümpeln zuverlässig und nach klar definierten Festpreisen. Unser Team arbeitet diskret, mit eigenem Material und eigenen Fahrzeugen. Sie müssen vor Ort nichts vorbereiten.",
    features: [
      "Festpreis nach kostenloser Besichtigung",
      "Eigenes Team, eigene LKW & Container",
      "Sondermüll, Elektrogeräte, Sperrmüll — alles fachgerecht",
      "Wiederverwertung & Spenden statt Deponie",
      "Auch Messie-Wohnungen & verwahrloste Objekte",
      "Termin auch am Wochenende möglich",
    ],
    faq: [
      { q: "Was unterscheidet eine Entrümpelung von Sperrmüll?", a: "Beim Sperrmüll müssen Sie selbst sortieren, schleppen und entsorgen. Wir übernehmen alles komplett." },
      { q: "Entsorgen Sie auch Sondermüll?", a: "Ja — Farben, Lacke, Akkus, Elektrogeräte und Kühlgeräte werden fachgerecht zertifizierten Stellen zugeführt." },
    ],
  },
  {
    slug: "kellerraeumung",
    title: "Kellerräumung",
    shortTitle: "Kellerräumung",
    description:
      "Befreiung von vollgestopften Kellern, Lagerräumen und Abstellkammern — auch enge Treppen sind kein Problem.",
    intro:
      "Keller sammeln über Jahre alles an, was woanders keinen Platz findet. Wir räumen sortiert, klären welche Stücke noch Wert haben und transportieren den Rest fachgerecht ab — selbst bei engen Kellertreppen, Steigen oder verwinkelten Lagerräumen.",
    features: [
      "Auch bei schwer zugänglichen Kellern",
      "Schwere Möbel, Werkzeuge, Reifen, Sperrmüll",
      "Sortierung in Verwertbares und Abfall",
      "Trennung von Sondermüll & Elektroschrott",
      "Schnelle Termine — oft binnen 48 Std.",
    ],
    faq: [
      { q: "Wie lange dauert eine Kellerräumung?", a: "Ein durchschnittlicher Kellerraum (10–15 m²) ist in 2–4 Stunden geräumt." },
      { q: "Was kostet die Kellerräumung?", a: "Wir kalkulieren individuell nach Menge und Zugänglichkeit. Den genauen Festpreis nennen wir nach der kostenlosen Besichtigung." },
    ],
  },
  {
    slug: "gartenraeumung",
    title: "Gartenräumung",
    shortTitle: "Gartenräumung",
    description:
      "Räumung von Gärten, Schuppen, Gartenlauben und Grünanlagen — inklusive Grünschnitt, Möbel und Geräte.",
    intro:
      "Eine verwilderte Parzelle, ein altes Gartenhaus oder eine komplette Pachtfläche — wir räumen Gärten komplett. Dabei trennen wir Grünabfälle, Sperrmüll und verwertbare Materialien. Auf Wunsch übernehmen wir auch den Abriss von Schuppen und Lauben.",
    features: [
      "Grünschnitt & Baumverschnitt",
      "Räumung von Gartenhäusern & Lauben",
      "Auf Wunsch Abriss von Bauten",
      "Entfernung von Müll & Sperrmüll",
      "Hinterlassen einer ebenen, sauberen Fläche",
    ],
    faq: [
      { q: "Räumen Sie auch Kleingärten in Anlagen?", a: "Ja, wir koordinieren auch mit Vereinen und übergeben besenrein zur Inspektion." },
      { q: "Können Sie auch Bäume fällen?", a: "Kleinere Bäume und Sträucher ja. Für Großbäume arbeiten wir mit zertifizierten Partnern." },
    ],
  },
  {
    slug: "endreinigung",
    title: "Endreinigung",
    shortTitle: "Endreinigung",
    description:
      "Professionelle Endreinigung nach Entrümpelung oder Umzug — bereit zur Übergabe an Vermieter oder Käufer.",
    intro:
      "Eine besenreine Übergabe reicht oft nicht aus — viele Vermieter fordern eine Grundreinigung. Wir reinigen Böden, Sanitärbereiche, Küchen, Fenster und Türen so, dass die Übergabe sauber gelingt und keine Nachforderungen entstehen.",
    features: [
      "Komplette Grundreinigung aller Räume",
      "Bad, Küche, Fenster, Böden",
      "Entfernung von Kalk, Fett, Schimmel",
      "Auf Wunsch mit Übergabeprotokoll",
      "Sofort vermietbar / verkaufbar",
    ],
    faq: [
      { q: "Reicht eine besenreine Übergabe nicht?", a: "Im Mietvertrag steht oft 'besenrein', viele Vermieter fordern jedoch faktisch eine Endreinigung. Wir empfehlen sie zur Vermeidung von Streitigkeiten." },
      { q: "Was kostet die Endreinigung?", a: "Der Preis richtet sich nach Fläche und Verschmutzungsgrad. Genauer Festpreis nach Besichtigung." },
    ],
  },
  {
    slug: "wohnungsuebergabe",
    title: "Wohnungsübergabe",
    shortTitle: "Wohnungsübergabe",
    description:
      "Koordination und Begleitung der Wohnungsübergabe an Vermieter oder Käufer — inkl. Protokoll und Schlüsselübergabe.",
    intro:
      "Wir koordinieren den Übergabetermin mit Vermieter, Hausverwaltung oder Käufer und übergeben die Wohnung in Ihrem Namen. Inklusive Übergabeprotokoll, Schlüsselzählung und Zählerständen — Sie müssen nicht persönlich anwesend sein.",
    features: [
      "Terminkoordination mit Vermieter",
      "Übergabeprotokoll & Zählerstände",
      "Schlüsselzählung & -übergabe",
      "Auch in Ihrer Abwesenheit",
      "Foto-Dokumentation des Zustands",
    ],
    faq: [
      { q: "Können Sie mich rechtlich bei der Übergabe vertreten?", a: "Mit einer einfachen Vollmacht ja — wir übergeben in Ihrem Namen und dokumentieren alles per Protokoll und Foto." },
      { q: "Was passiert bei Mängelanzeigen des Vermieters?", a: "Alle Mängel werden im Protokoll vermerkt und an Sie übermittelt — Sie entscheiden über das weitere Vorgehen." },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  SERVICES.find((s) => s.slug === slug);
