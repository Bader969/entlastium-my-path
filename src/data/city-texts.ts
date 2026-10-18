// Individuelle Stadttexte (Wir-Form) für alle Städteseiten.
// 8 Kernstädte: handgeschriebene Texte. Übrige Städte: aus echten Stammdaten
// (Stadtteile, Region) mit variierenden Bausteinen erzeugt, damit kein Text doppelt ist.
import type { NrwCity } from "./nrw-cities";

export interface CityText {
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  cta: string;
}

const PHONE = "0163 7948428";

const CUSTOM: Record<string, Omit<CityText, "title" | "description"> & { description?: string }> = {
  bochum: {
    heading: "Entrümpelung & Haushaltsauflösung in Bochum",
    paragraphs: [
      "Ob Wohnung in Langendreer, Haus in Stiepel oder Keller in Weitmar: Wir kommen persönlich zur kostenlosen Besichtigung und nennen Ihnen einen verbindlichen Festpreis. Auch in Wattenscheid, Laer, Linden oder Querenburg sind wir für Sie da.",
      "Wir übernehmen zum Beispiel Wohnungsauflösungen nach einem Todesfall, Kellerräumungen in Mehrfamilienhäusern und die Räumung vor der Wohnungsübergabe.",
    ],
    cta: `Rufen Sie an oder senden Sie Fotos per WhatsApp: ${PHONE}`,
  },
  "castrop-rauxel": {
    heading: "Entrümpelung in Castrop-Rauxel – direkt vor Ort",
    paragraphs: [
      "Unser Firmensitz ist in Castrop-Rauxel, deshalb sind die Wege kurz: nach Habinghorst, Ickern, Henrichenburg, Merklinde oder Schwerin. Wir besichtigen Ihre Räume kostenlos und geben Ihnen einen verbindlichen Festpreis.",
      "Zum Beispiel übernehmen wir Haushaltsauflösungen, Dachboden- und Kellerräumungen sowie die Räumung von Garten und Gartenlaube.",
    ],
    cta: `Rufen Sie an oder schreiben Sie per WhatsApp: ${PHONE}`,
  },
  herne: {
    description: `Entrümpelung & Haushaltsauflösung in Herne und Wanne-Eickel: kostenlose Besichtigung, Festpreis. Jetzt anrufen: ${PHONE}.`,
    heading: "Haushaltsauflösung & Entrümpelung in Herne",
    paragraphs: [
      "Herne und Wanne-Eickel liegen nicht weit von unserem Sitz entfernt. Ob Sodingen, Börnig, Holsterhausen, Röhlinghausen oder Eickel: Wir besichtigen Ihre Räume kostenlos und nennen Ihnen einen schriftlichen Festpreis.",
      "Wenn Sie uns vorab Fotos per WhatsApp schicken, können wir Ihnen oft schon eine erste Einschätzung geben.",
    ],
    cta: `Telefon und WhatsApp: ${PHONE}`,
  },
  dortmund: {
    description: `Entrümpelung & Haushaltsauflösung in Dortmund: kostenlose Besichtigung nach Terminabsprache, Festpreis. Anrufen: ${PHONE}.`,
    heading: "Entrümpelung in Dortmund",
    paragraphs: [
      "Von Castrop-Rauxel aus erreichen wir vor allem den Dortmunder Norden und Westen schnell, zum Beispiel Mengede, Huckarde, Lütgendortmund oder Eving. Auch in Hörde, Aplerbeck oder Brackel kommen wir nach Terminabsprache zur kostenlosen Besichtigung.",
      "Sie erhalten von uns einen verbindlichen Festpreis, bevor wir mit der Arbeit beginnen.",
    ],
    cta: `Rufen Sie an oder senden Sie Fotos per WhatsApp: ${PHONE}`,
  },
  gelsenkirchen: {
    heading: "Entrümpelung & Haushaltsauflösung in Gelsenkirchen",
    paragraphs: [
      "Sie wohnen in Buer, Erle, Horst, Schalke oder Ückendorf und möchten Wohnung, Keller oder Garage räumen lassen? Wir kommen zur kostenlosen Besichtigung und sagen Ihnen den Festpreis, bevor es losgeht.",
      "Auch die Räumung vor einer Wohnungsübergabe an Vermieter oder Hausverwaltung übernehmen wir.",
    ],
    cta: `Erreichbar per Telefon und WhatsApp: ${PHONE}`,
  },
  recklinghausen: {
    description: `Entrümpelung & Haushaltsauflösung in Recklinghausen: kostenlose Besichtigung, verbindlicher Festpreis. Jetzt anrufen: ${PHONE}.`,
    heading: "Entrümpelung in Recklinghausen",
    paragraphs: [
      "Recklinghausen liegt im selben Kreis wie unser Firmensitz. Ob Suderwich, Hochlarmark, Speckhorn, Hillerheide oder Recklinghausen-Süd: Wir besichtigen Ihre Räume persönlich und kostenlos.",
      "Sie bekommen einen verbindlichen Festpreis, auf Wunsch mit Anrechnung verwertbarer Gegenstände.",
    ],
    cta: `Anruf oder WhatsApp mit Fotos: ${PHONE}`,
  },
  witten: {
    heading: "Haushaltsauflösung & Entrümpelung in Witten",
    paragraphs: [
      "Witten liegt direkt neben Bochum, und wir kommen gern nach Annen, Herbede, Heven, Bommern oder Stockum. Nach einer kostenlosen Besichtigung erhalten Sie von uns einen verbindlichen Festpreis.",
      "Ob Wohnung, Keller, Dachboden oder Garten: Wir räumen und übergeben besenrein.",
    ],
    cta: `Rufen Sie an oder schreiben Sie per WhatsApp: ${PHONE}`,
  },
  essen: {
    description: `Entrümpelung & Haushaltsauflösung in Essen: kostenlose Besichtigung nach Terminabsprache, Festpreis. Anrufen: ${PHONE}.`,
    heading: "Entrümpelung in Essen",
    paragraphs: [
      "Für Aufträge in Essen, zum Beispiel in Altenessen, Borbeck, Kray, Steele oder Rüttenscheid, vereinbaren wir einen Besichtigungstermin mit Ihnen. Die Besichtigung ist kostenlos, und Sie erhalten danach einen verbindlichen Festpreis.",
      "Wir übernehmen Haushaltsauflösungen, Wohnungsräumungen und die Räumung zur Wohnungsübergabe.",
    ],
    cta: `Telefon oder WhatsApp mit Fotos: ${PHONE}`,
  },
};

const REGION_LINE: Record<string, (c: string) => string> = {
  Ruhrgebiet: (c) => `${c} liegt wie unser Firmensitz in Castrop-Rauxel mitten im Ruhrgebiet – die Anfahrt ist kurz.`,
  Rheinland: (c) => `Für Aufträge in ${c} und im Rheinland planen wir feste Besichtigungstermine nach Absprache.`,
  "Bergisches Land": (c) => `Ins Bergische Land und nach ${c} kommen wir nach Terminabsprache.`,
  "Niederbergisches Land": (c) => `${c} erreichen wir aus dem Ruhrgebiet gut; den Besichtigungstermin stimmen wir mit Ihnen ab.`,
  Münsterland: (c) => `Auch im Münsterland sind wir unterwegs – für ${c} vereinbaren wir einen festen Besichtigungstermin.`,
  "Ostwestfalen-Lippe": (c) => `Für ${c} in Ostwestfalen-Lippe legen wir Besichtigung und Räumung in einem abgestimmten Zeitfenster fest.`,
  Sauerland: (c) => `Nach ${c} im Sauerland kommen wir nach Terminabsprache zur Besichtigung.`,
  Niederrhein: (c) => `Am Niederrhein und in ${c} sind wir nach Terminabsprache für Sie im Einsatz.`,
  Siegerland: (c) => `Für ${c} im Siegerland vereinbaren wir die Besichtigung frühzeitig mit Ihnen.`,
};

const OPENERS = [
  (c: string, t: string) => `Ob Wohnung in ${t}: Wir räumen in ${c} zuverlässig und besichtigen vorher kostenlos.`,
  (c: string, t: string) => `Sie möchten in ${c} Wohnung, Keller oder Haus räumen lassen? Wir sind unter anderem in ${t} für Sie da.`,
  (c: string, t: string) => `In ${c} – etwa in ${t} – übernehmen wir Entrümpelungen und Haushaltsauflösungen zum Festpreis.`,
  (c: string, t: string) => `Ob in ${t}: Wir kommen in ${c} persönlich zur kostenlosen Besichtigung.`,
];

const EXAMPLES = [
  "Wir übernehmen zum Beispiel Wohnungsauflösungen nach einem Todesfall, Kellerräumungen und die Räumung vor der Wohnungsübergabe.",
  "Typische Aufträge sind Haushaltsauflösungen nach einem Umzug ins Pflegeheim, Dachbodenräumungen und Garagenentrümpelungen.",
  "Häufig räumen wir komplette Häuser für Erbengemeinschaften, Kellerabteile in Mehrfamilienhäusern oder Gartenlauben.",
  "Ob Messie-Wohnung, Büroauflösung oder einzelne Räume: Wir übergeben besenrein an Vermieter, Käufer oder Hausverwaltung.",
];

const CTAS = [
  `Rufen Sie an oder senden Sie Fotos per WhatsApp: ${PHONE}`,
  `Telefon und WhatsApp: ${PHONE}`,
  `Anruf oder WhatsApp mit Fotos: ${PHONE}`,
  `Rufen Sie an oder schreiben Sie per WhatsApp: ${PHONE}`,
];

function hash(s: string) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function listParts(parts: string[]) {
  const p = parts.filter((x) => x !== "Mitte" && x !== "Innenstadt" && x !== "Zentrum");
  const use = (p.length >= 2 ? p : parts).slice(0, 4);
  if (use.length < 2) return use.join("");
  return `${use.slice(0, -1).join(", ")} oder ${use[use.length - 1]}`;
}

export function getCityText(city: NrwCity): CityText {
  const title = `Entrümpelung ${city.name} – Festpreis | Entlastium`;
  const defaultDesc = `Entrümpelung & Haushaltsauflösung in ${city.name}: kostenlose Besichtigung, Festpreis, besenrein. Jetzt anrufen: ${PHONE}.`;
  const custom = CUSTOM[city.slug];
  if (custom) return { title, description: custom.description ?? defaultDesc, ...custom };

  const h = hash(city.slug);
  const parts = listParts(city.stadtteile);
  const region = REGION_LINE[city.region] ?? ((c: string) => `Für ${c} vereinbaren wir einen Besichtigungstermin mit Ihnen.`);
  return {
    title,
    description: defaultDesc,
    heading: h % 2 ? `Entrümpelung & Haushaltsauflösung in ${city.name}` : `Haushaltsauflösung & Entrümpelung in ${city.name}`,
    paragraphs: [
      `${OPENERS[h % OPENERS.length](city.name, parts)} ${region(city.name)} Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis.`,
      EXAMPLES[(h >> 3) % EXAMPLES.length],
    ],
    cta: CTAS[(h >> 5) % CTAS.length],
  };
}
