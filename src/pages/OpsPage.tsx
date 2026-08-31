import { CAPITULO_FECHADO, TRES_PEPINOS } from "../data/pepinos";
import { ECOSYSTEM, KNOWLEDGE_LEGEND, RED_TEAM_CARTA } from "../data/founderOs";
import { PageHero, Section } from "../components/ui";
import type { PageId } from "../types";
import { ArrowRight, Lock } from "lucide-react";

/** Ferramentas do fundador — fora do produto público */
export function OpsPage({ onNavigate }: { onNavigate: (p: PageId) => void }) {
  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Área interna · não é o site do cidadão"
        title="Ops · Ecossistema"
        subtitle="SISTAFE = produto público. CV / Confia / KeyHouse = produtos irmãos. Esta página é só para ti."
      />
      <Section className="space-y-10 pb-24">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Lock size={14} /> {CAPITULO_FECHADO.estado}
          </p>
          <h2 className="mt-2 font-bold text-white">{CAPITULO_FECHADO.titulo}</h2>
          <p className="mt-2 text-sm text-slate-400">{CAPITULO_FECHADO.manutencao}</p>
        </div>

        <div>
          <h2 className="font-display text-lg font-black text-white">Projectos (Carta)</h2>
          <ul className="mt-4 space-y-3">
            {ECOSYSTEM.projects.map((p) => (
              <li
                key={p.id}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="font-bold text-white">
                  {p.nome}{" "}
                  <span className="text-xs font-normal text-amber-400">{p.preco}</span>
                </p>
                <p className="text-xs text-slate-500">{p.status}</p>
                <p className="mt-1 text-sm text-slate-400">{p.dor}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-black text-white">3 pepinos actuais</h2>
          <div className="mt-4 space-y-3">
            {TRES_PEPINOS.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="font-bold text-amber-100">
                  {p.emoji} {p.nome}
                </p>
                <p className="mt-1 text-sm text-slate-300">{p.oneThing}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-black text-white">RED TEAM (Carta)</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {RED_TEAM_CARTA.map((r) => (
              <li key={r.risk} className="rounded-lg border border-rose-500/15 bg-rose-950/15 p-3">
                <span className="text-[10px] font-bold text-rose-300">{r.class}</span>
                <p className="text-slate-200">{r.risk}</p>
                <p className="mt-1 text-xs">→ {r.fix}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-bold text-slate-500">Classes de conhecimento</p>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {Object.entries(KNOWLEDGE_LEGEND).map(([k, v]) => (
              <li key={k}>
                <strong className="text-slate-300">{k}</strong> — {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black"
          >
            Ver produto público <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate("cv")}
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black"
          >
            Abrir CV Maker (casca própria)
          </button>
        </div>

        <p className="text-center text-xs text-slate-600">
          Contactos Carta: WA {ECOSYSTEM.whatsapp} · Pay {ECOSYSTEM.pay} · GitHub{" "}
          {ECOSYSTEM.github}
        </p>
      </Section>
    </>
  );
}
