import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { NRW_CITIES } from "@/data/nrw-cities";
import { SERVICES } from "@/data/services";

const WA_NUMBER = "491637948428";
const TEL = "tel:+491637948428";
const STORAGE_KEY = "entlastium-wa-bubble-dismissed";

export function buildWhatsAppMessage(pathname: string): string {
  const base = "Hallo Entlastium,";
  const city = pathname.match(/^\/entruempelung\/([^/]+)/)?.[1];
  if (city) {
    const c = NRW_CITIES.find((x) => x.slug === city);
    if (c) return `${base} ich interessiere mich für eine Entrümpelung in ${c.name} und hätte gern eine kostenlose Besichtigung.`;
  }
  const svc = pathname.match(/^\/leistungen\/([^/]+)/)?.[1];
  if (svc) {
    const s = SERVICES.find((x) => x.slug === svc);
    if (s) return `${base} ich interessiere mich für ${s.shortTitle} und hätte gern eine kostenlose Besichtigung.`;
  }
  return `${base} ich interessiere mich für eine kostenlose Besichtigung.`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.67L.62 23.25l5.63-1.48a11.3 11.3 0 0 0 5.8 1.58c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(pathname))}`;
  const [bubble, setBubble] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setBubble(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop/Tablet: floating round button */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-30 items-end gap-3 animate-fade-in">
        {bubble && (
          <div className="relative max-w-60 rounded-2xl bg-card text-card-foreground border border-border p-4 pr-8 shadow-custom-lg animate-slide-up">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Hinweis schließen"
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="font-semibold text-sm">Fragen? Schreiben Sie uns auf WhatsApp</p>
            <p className="text-xs text-muted-foreground mt-1">Antwort meist innerhalb weniger Stunden</p>
          </div>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Per WhatsApp kontaktieren"
          onClick={() => bubble && dismiss()}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-custom-lg transition-transform duration-300 hover:-translate-y-1"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>

      {/* Mobile: bottom action bar */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-border bg-card/95 backdrop-blur-md px-3 pt-2"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={TEL}
          aria-label="Entlastium anrufen"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3 font-semibold text-sm"
        >
          <Phone className="h-4 w-4" /> Anrufen
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Per WhatsApp kontaktieren"
          className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground py-3 font-semibold text-sm"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
      </div>
      <div aria-hidden="true" className="lg:hidden h-20" />
    </>
  );
}
