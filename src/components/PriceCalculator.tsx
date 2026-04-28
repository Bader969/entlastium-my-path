import { useMemo, useState } from "react";
import { Calculator, Home, Building, Trees, Package, Sparkles, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RoomType = {
  id: string;
  label: string;
  icon: typeof Home;
  ratePerSqm: [number, number];
};

const roomTypes: RoomType[] = [
  { id: "wohnung", label: "Wohnung", icon: Home, ratePerSqm: [25, 45] },
  { id: "haus", label: "Haus", icon: Building, ratePerSqm: [22, 40] },
  { id: "keller", label: "Keller", icon: Package, ratePerSqm: [30, 55] },
  { id: "garten", label: "Garten / Laube", icon: Trees, ratePerSqm: [18, 35] },
];

const fillLevels = [
  { id: "leicht", label: "Leicht befüllt", multiplier: 0.7 },
  { id: "mittel", label: "Normal befüllt", multiplier: 1.0 },
  { id: "voll", label: "Stark befüllt", multiplier: 1.4 },
];

const PriceCalculator = () => {
  const [roomType, setRoomType] = useState<RoomType>(roomTypes[0]);
  const [size, setSize] = useState<number>(40);
  const [fill, setFill] = useState(fillLevels[1]);

  const price = useMemo(() => {
    const [low, high] = roomType.ratePerSqm;
    const base = 150; // anfahrt / mindestpauschale
    const min = Math.round((base + low * size * fill.multiplier) / 10) * 10;
    const max = Math.round((base + high * size * fill.multiplier) / 10) * 10;
    return { min, max };
  }, [roomType, size, fill]);

  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="rechner" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-secondary text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            Sofort-Schätzung
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Preis-Rechner – <span className="text-gradient-animated">in 30 Sekunden</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Erhalten Sie eine unverbindliche Kosteneinschätzung. Der finale Festpreis folgt nach kostenloser Vor-Ort-Besichtigung.
          </p>
        </div>

        <div ref={cardRef} className="reveal max-w-4xl mx-auto">
          <div className="glow-card p-6 md:p-10 bg-card/90 backdrop-blur-md">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                {/* Room type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    1. Was soll entrümpelt werden?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {roomTypes.map((rt) => {
                      const active = rt.id === roomType.id;
                      return (
                        <button
                          key={rt.id}
                          type="button"
                          onClick={() => setRoomType(rt)}
                          className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                            active
                              ? "border-secondary bg-secondary/10 shadow-[0_0_20px_hsl(var(--glow-teal)/0.3)]"
                              : "border-border hover:border-secondary/50 bg-background"
                          }`}
                        >
                          <rt.icon
                            className={`h-6 w-6 mb-2 mx-auto transition-colors ${
                              active ? "text-secondary" : "text-muted-foreground group-hover:text-secondary"
                            }`}
                          />
                          <span className="block text-sm font-medium text-foreground">
                            {rt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size slider */}
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <label className="text-sm font-semibold text-foreground">
                      2. Größe
                    </label>
                    <span className="text-2xl font-bold text-gradient-animated">
                      {size} m²
                    </span>
                  </div>
                  <Slider
                    value={[size]}
                    onValueChange={(v) => setSize(v[0])}
                    min={5}
                    max={300}
                    step={5}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5 m²</span>
                    <span>300 m²</span>
                  </div>
                </div>

                {/* Fill level */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    3. Füllgrad
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {fillLevels.map((fl) => {
                      const active = fl.id === fill.id;
                      return (
                        <button
                          key={fl.id}
                          type="button"
                          onClick={() => setFill(fl)}
                          className={`p-3 rounded-xl border-2 text-xs font-medium transition-all duration-300 ${
                            active
                              ? "border-accent bg-accent/15 text-foreground shadow-[0_0_20px_hsl(var(--glow-sand)/0.3)]"
                              : "border-border hover:border-accent/50 text-muted-foreground bg-background"
                          }`}
                        >
                          {fl.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="relative flex flex-col justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 blur-2xl" />
                <div className="relative glass rounded-2xl p-8 text-center animate-pulse-glow">
                  <Calculator className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">Geschätzter Festpreis</p>
                  <div className="font-serif font-bold text-foreground mb-2">
                    <span className="text-3xl md:text-4xl">{price.min} €</span>
                    <span className="text-2xl md:text-3xl text-muted-foreground mx-2">–</span>
                    <span className="text-3xl md:text-4xl">{price.max} €</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">
                    Inkl. Anfahrt, Entsorgung & MwSt. Endpreis nach Besichtigung.
                  </p>
                  <Button asChild variant="accent" size="lg" className="w-full magnetic-btn">
                    <a href="#contact">
                      Kostenloses Festangebot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
