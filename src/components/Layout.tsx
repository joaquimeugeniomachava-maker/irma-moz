import { useEffect, useState, type ReactNode } from "react";
import {
  BookOpen,
  Menu,
  X,
  Home,
  GraduationCap,
  GitBranch,
  Users,
  Search,
  AlertTriangle,
  Scale,
  ShoppingCart,
  ClipboardCheck,
  FileText,
  Landmark,
  Layers,
  Settings2,
} from "lucide-react";
import { cn } from "../utils/cn";
import type { PageId } from "../types";
import { OfficialBar } from "./OfficialBar";

const A11Y_KEY = "moz-sistafe-a11y-lg";

/** Menu que o país vê — só Administração Pública */
const NAV_PUBLIC: { id: PageId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Início", icon: Home },
  { id: "portal", label: "Portal", icon: GraduationCap },
  { id: "ciclo", label: "Ciclo", icon: GitBranch },
  { id: "siglas", label: "Siglas", icon: Search },
  { id: "perfis", label: "Perfis", icon: Users },
  { id: "erros", label: "Erros", icon: AlertTriangle },
  { id: "contratacao", label: "Contratação", icon: FileText },
  { id: "legislacao", label: "Legislação", icon: Scale },
  { id: "megabrain", label: "6 Subsistemas", icon: Layers },
  { id: "fontes", label: "BR · INM", icon: Landmark },
  { id: "loja", label: "Loja", icon: ShoppingCart },
  { id: "auditoria", label: "Auditoria", icon: ClipboardCheck },
];

export function Layout({
  page,
  onNavigate,
  children,
}: {
  page: PageId;
  onNavigate: (p: PageId) => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0a12] to-[#050505] text-slate-100">
      <div className="sticky top-0 z-50">
        <OfficialBar compact />
        <nav className="border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="flex min-w-0 items-center gap-2 font-display text-sm font-bold text-violet-300"
            >
              <BookOpen size={16} className="shrink-0" />
              <span className="truncate">MOZ-SISTAFE</span>
            </button>

            <div className="hidden items-center gap-1 xl:flex">
              {NAV_PUBLIC.slice(0, 8).map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => onNavigate(n.id)}
                  className={cn(
                    "rounded-full px-2.5 py-1.5 text-[11px] font-bold transition",
                    page === n.id
                      ? "bg-violet-400 text-black"
                      : "border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10",
                  )}
                >
                  {n.label}
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setLargeText((v) => !v)}
                aria-pressed={largeText}
                aria-label={largeText ? "Letras normais" : "Letras grandes"}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-black transition",
                  largeText
                    ? "border-amber-400/50 bg-amber-400 text-black"
                    : "border-white/15 bg-white/5 text-slate-200",
                )}
              >
                {largeText ? "A+" : "A"}
              </button>
              <button
                type="button"
                aria-label="Menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 xl:hidden"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="max-h-[70vh] overflow-y-auto border-t border-white/5 bg-[#0a0a0f] px-4 py-4 xl:hidden">
              <div className="grid grid-cols-2 gap-2">
                {NAV_PUBLIC.map((n) => {
                  const Icon = n.icon;
                  return (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => onNavigate(n.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold",
                        page === n.id ? "bg-violet-400 text-black" : "bg-white/5 text-slate-200",
                      )}
                    >
                      <Icon size={16} />
                      {n.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </div>

      {children}

      <footer className="mt-8 border-t border-white/5 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src="/emblema-mocambique.svg"
              alt=""
              className="mt-0.5 h-10 w-9 object-contain opacity-90"
              width={36}
              height={40}
            />
            <div>
              <p className="font-display text-sm font-bold text-violet-300">MOZ-SISTAFE</p>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-500">
                Manual Inteligente do SISTAFE e Ciclo Completo de Administração Pública de
                Moçambique
              </p>
              <p className="mt-2 text-[11px] text-slate-600">
                Norma vigente:{" "}
                <a
                  href="https://www.inm.gov.mz/pt-br/bulletin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500/90 underline-offset-2 hover:underline"
                >
                  Boletim da República (INM)
                </a>
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-600">
            <p className="font-semibold text-slate-500">Outros produtos do ecossistema</p>
            <button
              type="button"
              onClick={() => onNavigate("cv")}
              className="mt-2 block text-left text-amber-500/90 underline-offset-2 hover:underline"
            >
              CV Maker MOZ · 50 MT
            </button>
            <button
              type="button"
              onClick={() => onNavigate("ops")}
              className="mt-2 flex items-center gap-1 text-left text-slate-600 hover:text-slate-400"
            >
              <Settings2 size={12} /> Ops (fundador)
            </button>
            <p className="mt-4 max-w-xs">
              Conteúdo orientador. Confirme sempre no BR / Imprensa Nacional. Não substitui o
              e-SISTAFE oficial (CEDSIF).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
