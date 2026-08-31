import { ExternalLink, RefreshCw, Shield } from "lucide-react";
import { IMPRENSA_NACIONAL, REPUBLICA } from "../data/oficial";

/** Faixa institucional: emblema + República + link INM/BR */
export function OfficialBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "border-b border-white/5 bg-[#07070c]/95"
          : "border-b border-amber-500/20 bg-gradient-to-r from-[#0c1018] via-[#0a0a0f] to-[#12100a]"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={REPUBLICA.emblemaLocal}
            alt="Emblema da República de Moçambique"
            className="h-11 w-10 shrink-0 object-contain sm:h-12 sm:w-11"
            width={44}
            height={48}
          />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400/90 sm:text-[11px]">
              {REPUBLICA.nome}
            </p>
            <p className="truncate text-xs text-slate-400 sm:text-sm">
              Manual Inteligente do SISTAFE · Ciclo completo AP
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={IMPRENSA_NACIONAL.boletim}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1.5 text-[11px] font-bold text-amber-100 transition hover:bg-amber-500/20"
          >
            <RefreshCw size={12} />
            BR · Imprensa Nacional
            <ExternalLink size={11} className="opacity-70" />
          </a>
          <a
            href={IMPRENSA_NACIONAL.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-slate-300 transition hover:bg-white/10"
          >
            <Shield size={12} />
            INM, E.P.
            <ExternalLink size={11} className="opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
