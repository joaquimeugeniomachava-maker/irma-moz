import { useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { cn } from "../utils/cn";
import { PAY } from "../data/pay";
import type { PageId } from "../types";

const A11Y_KEY = "moz-sistafe-a11y-lg";

/** Casca própria do CV Maker — não mistura menu do Manual SISTAFE */
export function CvShell({
  onNavigate,
  children,
}: {
  onNavigate: (p: PageId) => void;
  children: ReactNode;
}) {
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    try {
      setLargeText(localStorage.getItem(A11Y_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("a11y-large", largeText);
    try {
      localStorage.setItem(A11Y_KEY, largeText ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [largeText]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c08] via-[#0a0a0f] to-[#050505] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-[#0f0c08]/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            MOZ-SISTAFE
          </button>
          <div className="flex items-center gap-2 font-display text-sm font-bold text-amber-200">
            <FileText size={16} />
            CV Maker MOZ
          </div>
          <button
            type="button"
            onClick={() => setLargeText((v) => !v)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-black",
              largeText
                ? "border-amber-400 bg-amber-400 text-black"
                : "border-white/15 text-slate-300",
            )}
          >
            {largeText ? "A+" : "A"}
          </button>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/5 px-4 py-8 text-center text-xs text-slate-600 print:hidden">
        <p>
          Produto: <strong className="text-slate-400">CV Maker MOZ</strong> · 50 MT ·{" "}
          {PAY.nome}
        </p>
        <p className="mt-1">
          WhatsApp {PAY.whatsappDisplay} · Pagamento {PAY.mpesa.display}
        </p>
        <p className="mt-3">
          O Manual SISTAFE é outro produto →{" "}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="text-violet-400 underline-offset-2 hover:underline"
          >
            voltar ao manual
          </button>
        </p>
      </footer>
    </div>
  );
}
