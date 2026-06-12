// Stammdaten der wichtigsten NRW-Städte für lokale SEO-Landingpages.
// Slug = URL-tauglicher Name (lowercase, Bindestrich statt Umlaut).

export interface NrwCity {
  slug: string;
  name: string;
  plzPrefix: string;
  einwohner: number;
  region: string;
  stadtteile: string[];
}

export const NRW_CITIES: NrwCity[] = [
  { slug: "koeln", name: "Köln", plzPrefix: "50–51", einwohner: 1080000, region: "Rheinland", stadtteile: ["Innenstadt", "Ehrenfeld", "Nippes", "Lindenthal", "Mülheim", "Porz", "Kalk"] },
  { slug: "duesseldorf", name: "Düsseldorf", plzPrefix: "40–41", einwohner: 620000, region: "Rheinland", stadtteile: ["Altstadt", "Bilk", "Oberkassel", "Pempelfort", "Flingern", "Gerresheim"] },
  { slug: "dortmund", name: "Dortmund", plzPrefix: "44", einwohner: 590000, region: "Ruhrgebiet", stadtteile: ["Innenstadt", "Hörde", "Aplerbeck", "Hombruch", "Eving", "Brackel"] },
  { slug: "essen", name: "Essen", plzPrefix: "45", einwohner: 580000, region: "Ruhrgebiet", stadtteile: ["Rüttenscheid", "Borbeck", "Altendorf", "Steele", "Werden", "Kettwig"] },
  { slug: "duisburg", name: "Duisburg", plzPrefix: "47", einwohner: 500000, region: "Ruhrgebiet", stadtteile: ["Hamborn", "Meiderich", "Rheinhausen", "Walsum", "Homberg"] },
  { slug: "bochum", name: "Bochum", plzPrefix: "44", einwohner: 365000, region: "Ruhrgebiet", stadtteile: ["Innenstadt", "Wattenscheid", "Langendreer", "Querenburg", "Weitmar", "Linden"] },
  { slug: "wuppertal", name: "Wuppertal", plzPrefix: "42", einwohner: 360000, region: "Bergisches Land", stadtteile: ["Elberfeld", "Barmen", "Vohwinkel", "Ronsdorf", "Cronenberg"] },
  { slug: "bielefeld", name: "Bielefeld", plzPrefix: "33", einwohner: 335000, region: "Ostwestfalen-Lippe", stadtteile: ["Mitte", "Schildesche", "Brackwede", "Sennestadt", "Heepen"] },
  { slug: "bonn", name: "Bonn", plzPrefix: "53", einwohner: 335000, region: "Rheinland", stadtteile: ["Zentrum", "Bad Godesberg", "Beuel", "Hardtberg", "Tannenbusch"] },
  { slug: "muenster", name: "Münster", plzPrefix: "48", einwohner: 320000, region: "Münsterland", stadtteile: ["Altstadt", "Hiltrup", "Gievenbeck", "Coerde", "Kinderhaus"] },
  { slug: "moenchengladbach", name: "Mönchengladbach", plzPrefix: "41", einwohner: 270000, region: "Niederrhein", stadtteile: ["Rheydt", "Eicken", "Hardt", "Giesenkirchen"] },
  { slug: "gelsenkirchen", name: "Gelsenkirchen", plzPrefix: "45–46", einwohner: 265000, region: "Ruhrgebiet", stadtteile: ["Buer", "Schalke", "Horst", "Erle", "Resse"] },
  { slug: "aachen", name: "Aachen", plzPrefix: "52", einwohner: 250000, region: "Rheinland", stadtteile: ["Mitte", "Brand", "Eilendorf", "Haaren", "Laurensberg"] },
  { slug: "krefeld", name: "Krefeld", plzPrefix: "47", einwohner: 230000, region: "Niederrhein", stadtteile: ["Cracau", "Bockum", "Uerdingen", "Hüls", "Fischeln"] },
  { slug: "oberhausen", name: "Oberhausen", plzPrefix: "46", einwohner: 210000, region: "Ruhrgebiet", stadtteile: ["Alt-Oberhausen", "Sterkrade", "Osterfeld"] },
  { slug: "hagen", name: "Hagen", plzPrefix: "58", einwohner: 190000, region: "Sauerland", stadtteile: ["Mitte", "Haspe", "Eilpe", "Hohenlimburg"] },
  { slug: "hamm", name: "Hamm", plzPrefix: "59", einwohner: 180000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Bockum-Hövel", "Heessen", "Pelkum", "Rhynern"] },
  { slug: "muelheim-an-der-ruhr", name: "Mülheim an der Ruhr", plzPrefix: "45", einwohner: 170000, region: "Ruhrgebiet", stadtteile: ["Broich", "Speldorf", "Heißen", "Saarn", "Styrum"] },
  { slug: "leverkusen", name: "Leverkusen", plzPrefix: "51", einwohner: 165000, region: "Rheinland", stadtteile: ["Wiesdorf", "Opladen", "Schlebusch", "Bergisch Neukirchen"] },
  { slug: "solingen", name: "Solingen", plzPrefix: "42", einwohner: 160000, region: "Bergisches Land", stadtteile: ["Mitte", "Ohligs", "Wald", "Höhscheid", "Burg"] },
  { slug: "herne", name: "Herne", plzPrefix: "44", einwohner: 155000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Wanne", "Eickel", "Sodingen", "Baukau"] },
  { slug: "neuss", name: "Neuss", plzPrefix: "41", einwohner: 155000, region: "Rheinland", stadtteile: ["Innenstadt", "Norf", "Erfttal", "Grimlinghausen", "Holzheim"] },
  { slug: "paderborn", name: "Paderborn", plzPrefix: "33", einwohner: 152000, region: "Ostwestfalen-Lippe", stadtteile: ["Kernstadt", "Schloß Neuhaus", "Elsen", "Sennelager"] },
  { slug: "recklinghausen", name: "Recklinghausen", plzPrefix: "45", einwohner: 115000, region: "Ruhrgebiet", stadtteile: ["Süd", "Hochlarmark", "Suderwich", "König-Ludwig"] },
  { slug: "bottrop", name: "Bottrop", plzPrefix: "46", einwohner: 117000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Kirchhellen", "Eigen", "Boy"] },
  { slug: "remscheid", name: "Remscheid", plzPrefix: "42", einwohner: 110000, region: "Bergisches Land", stadtteile: ["Alt-Remscheid", "Lennep", "Lüttringhausen"] },
  { slug: "moers", name: "Moers", plzPrefix: "47", einwohner: 105000, region: "Niederrhein", stadtteile: ["Mitte", "Asberg", "Hochstraß", "Repelen", "Kapellen"] },
  { slug: "siegen", name: "Siegen", plzPrefix: "57", einwohner: 102000, region: "Siegerland", stadtteile: ["Mitte", "Weidenau", "Geisweid", "Eiserfeld"] },
  { slug: "witten", name: "Witten", plzPrefix: "58", einwohner: 98000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Annen", "Herbede", "Bommern"] },
  { slug: "iserlohn", name: "Iserlohn", plzPrefix: "58", einwohner: 92000, region: "Sauerland", stadtteile: ["Mitte", "Letmathe", "Hennen", "Sümmern"] },
  { slug: "guetersloh", name: "Gütersloh", plzPrefix: "33", einwohner: 102000, region: "Ostwestfalen-Lippe", stadtteile: ["Innenstadt", "Spexard", "Avenwedde", "Friedrichsdorf"] },
  { slug: "marl", name: "Marl", plzPrefix: "45", einwohner: 85000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Hüls", "Hamm", "Brassert"] },
  { slug: "luenen", name: "Lünen", plzPrefix: "44", einwohner: 87000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Brambauer", "Horstmar", "Süggel"] },
  { slug: "velbert", name: "Velbert", plzPrefix: "42", einwohner: 82000, region: "Niederbergisches Land", stadtteile: ["Mitte", "Langenberg", "Neviges"] },
  { slug: "minden", name: "Minden", plzPrefix: "32", einwohner: 82000, region: "Ostwestfalen-Lippe", stadtteile: ["Innenstadt", "Dützen", "Bärenkämpen", "Aminghausen"] },
  { slug: "dorsten", name: "Dorsten", plzPrefix: "46", einwohner: 75000, region: "Münsterland", stadtteile: ["Altstadt", "Hervest", "Wulfen", "Holsterhausen"] },
  { slug: "ratingen", name: "Ratingen", plzPrefix: "40", einwohner: 92000, region: "Rheinland", stadtteile: ["Mitte", "Hösel", "Lintorf", "Tiefenbroich"] },
  { slug: "castrop-rauxel", name: "Castrop-Rauxel", plzPrefix: "44", einwohner: 73000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Habinghorst", "Ickern", "Rauxel"] },
  { slug: "lippstadt", name: "Lippstadt", plzPrefix: "59", einwohner: 68000, region: "Ostwestfalen-Lippe", stadtteile: ["Mitte", "Lipperode", "Bad Waldliesborn"] },
  { slug: "dormagen", name: "Dormagen", plzPrefix: "41", einwohner: 65000, region: "Rheinland", stadtteile: ["Mitte", "Zons", "Horrem", "Hackenbroich"] },
  { slug: "bergisch-gladbach", name: "Bergisch Gladbach", plzPrefix: "51", einwohner: 112000, region: "Rheinland", stadtteile: ["Mitte", "Bensberg", "Refrath", "Paffrath"] },
  { slug: "troisdorf", name: "Troisdorf", plzPrefix: "53", einwohner: 78000, region: "Rheinland", stadtteile: ["Mitte", "Sieglar", "Spich", "Oberlar"] },
  { slug: "gladbeck", name: "Gladbeck", plzPrefix: "45", einwohner: 76000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Brauck", "Butendorf", "Zweckel"] },
  { slug: "herford", name: "Herford", plzPrefix: "32", einwohner: 67000, region: "Ostwestfalen-Lippe", stadtteile: ["Mitte", "Stedefreund", "Schwarzenmoor", "Diebrock"] },
  { slug: "detmold", name: "Detmold", plzPrefix: "32", einwohner: 75000, region: "Ostwestfalen-Lippe", stadtteile: ["Mitte", "Pivitsheide", "Hiddesen", "Heiligenkirchen"] },
  { slug: "arnsberg", name: "Arnsberg", plzPrefix: "59", einwohner: 73000, region: "Sauerland", stadtteile: ["Alt-Arnsberg", "Neheim", "Hüsten", "Oeventrop"] },
  { slug: "rheine", name: "Rheine", plzPrefix: "48", einwohner: 78000, region: "Münsterland", stadtteile: ["Innenstadt", "Mesum", "Hauenhorst", "Eschendorf"] },
  { slug: "bocholt", name: "Bocholt", plzPrefix: "46", einwohner: 71000, region: "Münsterland", stadtteile: ["Innenstadt", "Stenern", "Lowick", "Biemenhorst"] },
  { slug: "grevenbroich", name: "Grevenbroich", plzPrefix: "41", einwohner: 64000, region: "Rheinland", stadtteile: ["Mitte", "Kapellen", "Wevelinghoven", "Hemmerden"] },
  { slug: "viersen", name: "Viersen", plzPrefix: "41", einwohner: 78000, region: "Niederrhein", stadtteile: ["Mitte", "Süchteln", "Dülken", "Boisheim"] },
  { slug: "euskirchen", name: "Euskirchen", plzPrefix: "53", einwohner: 60000, region: "Rheinland", stadtteile: ["Mitte", "Kuchenheim", "Stotzheim", "Großbüllesheim"] },
  { slug: "unna", name: "Unna", plzPrefix: "59", einwohner: 60000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Königsborn", "Massen", "Lünern"] },
  { slug: "huerth", name: "Hürth", plzPrefix: "50", einwohner: 60000, region: "Rheinland", stadtteile: ["Mitte", "Efferen", "Hermülheim", "Kendenich"] },
  { slug: "sankt-augustin", name: "Sankt Augustin", plzPrefix: "53", einwohner: 56000, region: "Rheinland", stadtteile: ["Mitte", "Menden", "Hangelar", "Niederpleis"] },
  { slug: "langenfeld", name: "Langenfeld", plzPrefix: "40", einwohner: 60000, region: "Rheinland", stadtteile: ["Mitte", "Reusrath", "Richrath", "Wiescheid"] },
  { slug: "hilden", name: "Hilden", plzPrefix: "40", einwohner: 56000, region: "Rheinland", stadtteile: ["Mitte", "Nord", "Süd", "Ost"] },
  { slug: "pulheim", name: "Pulheim", plzPrefix: "50", einwohner: 56000, region: "Rheinland", stadtteile: ["Mitte", "Brauweiler", "Stommeln", "Sinnersdorf"] },
  { slug: "stolberg", name: "Stolberg", plzPrefix: "52", einwohner: 56000, region: "Rheinland", stadtteile: ["Mitte", "Vicht", "Mausbach", "Breinig"] },
  { slug: "dinslaken", name: "Dinslaken", plzPrefix: "46", einwohner: 67000, region: "Niederrhein", stadtteile: ["Mitte", "Lohberg", "Hiesfeld", "Eppinghoven"] },
  { slug: "wesel", name: "Wesel", plzPrefix: "46", einwohner: 60000, region: "Niederrhein", stadtteile: ["Mitte", "Büderich", "Flüren", "Obrighoven"] },
  { slug: "soest", name: "Soest", plzPrefix: "59", einwohner: 48000, region: "Ostwestfalen-Lippe", stadtteile: ["Mitte", "Müllingsen", "Ostönnen", "Meiningsen"] },
  { slug: "luedenscheid", name: "Lüdenscheid", plzPrefix: "58", einwohner: 73000, region: "Sauerland", stadtteile: ["Mitte", "Brügge", "Brunscheid", "Wehberg"] },
  { slug: "bornheim", name: "Bornheim", plzPrefix: "53", einwohner: 49000, region: "Rheinland", stadtteile: ["Mitte", "Roisdorf", "Hersel", "Walberberg"] },
  { slug: "bergkamen", name: "Bergkamen", plzPrefix: "59", einwohner: 49000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Oberaden", "Rünthe", "Weddinghofen"] },
  { slug: "erftstadt", name: "Erftstadt", plzPrefix: "50", einwohner: 51000, region: "Rheinland", stadtteile: ["Liblar", "Lechenich", "Friesheim", "Erp"] },
  { slug: "kerpen", name: "Kerpen", plzPrefix: "50", einwohner: 67000, region: "Rheinland", stadtteile: ["Mitte", "Horrem", "Sindorf", "Türnich"] },
  { slug: "frechen", name: "Frechen", plzPrefix: "50", einwohner: 54000, region: "Rheinland", stadtteile: ["Mitte", "Königsdorf", "Habbelrath", "Bachem"] },
  { slug: "goch", name: "Goch", plzPrefix: "47", einwohner: 34000, region: "Niederrhein", stadtteile: ["Mitte", "Pfalzdorf", "Asperden", "Hassum"] },
  { slug: "kleve", name: "Kleve", plzPrefix: "47", einwohner: 53000, region: "Niederrhein", stadtteile: ["Mitte", "Materborn", "Kellen", "Rindern"] },
  { slug: "kamen", name: "Kamen", plzPrefix: "59", einwohner: 43000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Methler", "Heeren-Werve", "Südkamen"] },
  { slug: "meerbusch", name: "Meerbusch", plzPrefix: "40", einwohner: 56000, region: "Rheinland", stadtteile: ["Büderich", "Osterath", "Lank-Latum", "Strümp"] },
  { slug: "gummersbach", name: "Gummersbach", plzPrefix: "51", einwohner: 51000, region: "Bergisches Land", stadtteile: ["Mitte", "Derschlag", "Dieringhausen", "Niederseßmar"] },
  { slug: "ahlen", name: "Ahlen", plzPrefix: "59", einwohner: 53000, region: "Münsterland", stadtteile: ["Mitte", "Vorhelm", "Dolberg", "Süd"] },
  { slug: "beckum", name: "Beckum", plzPrefix: "59", einwohner: 37000, region: "Münsterland", stadtteile: ["Mitte", "Neubeckum", "Roland", "Vellern"] },
  { slug: "coesfeld", name: "Coesfeld", plzPrefix: "48", einwohner: 36000, region: "Münsterland", stadtteile: ["Mitte", "Lette", "Goxel", "Stockum"] },
  { slug: "warendorf", name: "Warendorf", plzPrefix: "48", einwohner: 38000, region: "Münsterland", stadtteile: ["Mitte", "Freckenhorst", "Hoetmar", "Milte"] },
  { slug: "borken", name: "Borken", plzPrefix: "46", einwohner: 43000, region: "Münsterland", stadtteile: ["Mitte", "Burlo", "Gemen", "Weseke"] },
  { slug: "steinfurt", name: "Steinfurt", plzPrefix: "48", einwohner: 35000, region: "Münsterland", stadtteile: ["Burgsteinfurt", "Borghorst", "Hollich", "Sellen"] },
  { slug: "greven", name: "Greven", plzPrefix: "48", einwohner: 38000, region: "Münsterland", stadtteile: ["Mitte", "Reckenfeld", "Gimbte", "Schmedehausen"] },
  { slug: "schwerte", name: "Schwerte", plzPrefix: "58", einwohner: 47000, region: "Ruhrgebiet", stadtteile: ["Mitte", "Westhofen", "Ergste", "Villigst"] },
  { slug: "wermelskirchen", name: "Wermelskirchen", plzPrefix: "42", einwohner: 35000, region: "Bergisches Land", stadtteile: ["Mitte", "Dabringhausen", "Dhünn", "Tente"] },
];

export const getCityBySlug = (slug: string): NrwCity | undefined =>
  NRW_CITIES.find((c) => c.slug === slug);

export const getNeighborCities = (slug: string, count = 6): NrwCity[] => {
  const idx = NRW_CITIES.findIndex((c) => c.slug === slug);
  if (idx === -1) return NRW_CITIES.slice(0, count);
  const result: NrwCity[] = [];
  for (let offset = 1; result.length < count && offset < NRW_CITIES.length; offset++) {
    if (idx - offset >= 0) result.push(NRW_CITIES[idx - offset]);
    if (result.length < count && idx + offset < NRW_CITIES.length) result.push(NRW_CITIES[idx + offset]);
  }
  return result;
};
