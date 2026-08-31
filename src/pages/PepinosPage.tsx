import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Lock,
  Rocket,
  Target,
  Ban,
} from "lucide-react";
import {
  CAPITULO_FECHADO,
  REGRA_3_PEPINOS,
  TRES_PEPINOS,
} from "../data/pepinos";
import { PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

const STORAGE = "moz-3-pepinos-v1";

type DoneMap = Record<string, boolean>;

function load(): DoneMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE) || "{}") as DoneMap;
  } catch {
    return {};
  }
}

export function PepinosPage() {
  const [done, setDone] = useState<DoneMap>({});
  const [open, setOpen] = useState<string>("p1");

  useEffect(() => {
    setDone(load());
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(done));
  }, [done]);

  function toggle(key: string) {
    setDone((p) => ({ ...p, [key]: !p[key] }));
  }

  const p1 = done["p1-done"];
  const p2 = done["p2-done"];
  const p3 = done["p3-done"];
  const all = p1 && p2 && p3;

  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Capítulo fechado · Próxima temporada"
        title="3 pepinos · 3 alavancas"
        subtitle="Contratação pública e o Manual SISTAFE saem do modo construção. Agora: deploy, distribuição e CFO Hacker — um bloco de cada vez."
      />

      <Section className="space-y-10 pb-24">
        {/* Capítulo encerrado */}
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Lock className="text-emerald-400" size={22} />
            <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black">
              {CAPITULO_FECHADO.estado}
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-black text-white">
            {CAPITULO_FECHADO.titulo}
          </h2>
          <p className="mt-2 text-sm text-slate-400">{CAPITULO_FECHADO.manutencao}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {CAPITULO_FECHADO.entregue.map((e) => (
              <li
                key={e}
                className="flex gap-2 text-sm text-emerald-100/90"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300">
              <Ban size={14} /> Não reabrir para…
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              {CAPITULO_FECHADO.naoFazerMais.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regra 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="flex items-center gap-2 font-bold text-white">
            <Target size={18} className="text-amber-400" />
            {REGRA_3_PEPINOS.titulo}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {REGRA_3_PEPINOS.texto}
          </p>
          <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-slate-300">
            {REGRA_3_PEPINOS.sequenciaIdeal.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-slate-500">{REGRA_3_PEPINOS.auditoria}</p>
        </div>

        {/* Score */}
        <div className="grid grid-cols-3 gap-3">
          {TRES_PEPINOS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(`${p.id}-done`)}
              className={cn(
                "rounded-2xl border p-4 text-center transition",
                done[`${p.id}-done`]
                  ? "border-emerald-500/40 bg-emerald-500/15"
                  : "border-white/10 bg-white/[0.03]",
              )}
            >
              <p className="text-2xl">{done[`${p.id}-done`] ? "✅" : p.emoji}</p>
              <p className="mt-2 text-[11px] font-bold text-slate-300 sm:text-xs">
                {p.nome.split("·")[0].trim()}
              </p>
            </button>
          ))}
        </div>
        {all && (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/15 p-4 text-center text-sm font-bold text-emerald-100">
            Os 3 pepinos do sprint estão PASS. Próximo capítulo: só o que o feedback exigir.
          </div>
        )}

        {/* Cards */}
        <div className="space-y-4">
          {TRES_PEPINOS.map((p) => {
            const isOpen = open === p.id;
            const border =
              p.cor === "violet"
                ? "border-violet-500/30"
                : p.cor === "amber"
                  ? "border-amber-500/30"
                  : "border-sky-500/30";
            const badge =
              p.cor === "violet"
                ? "bg-violet-400 text-black"
                : p.cor === "amber"
                  ? "bg-amber-400 text-black"
                  : "bg-sky-400 text-black";

            return (
              <article
                key={p.id}
                className={cn("overflow-hidden rounded-3xl border bg-white/[0.03]", border)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : p.id)}
                  className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-black text-white sm:text-xl">
                        {p.nome}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-black uppercase",
                          badge,
                        )}
                      >
                        {p.blocosTempo}
                      </span>
                      {done[`${p.id}-done`] && (
                        <CheckCircle2 className="text-emerald-400" size={18} />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{p.dor}</p>
                  </div>
                </button>

                {isOpen && (
                  <div className="space-y-4 border-t border-white/5 px-5 pb-6 sm:px-6">
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-950/25 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        🏆 ONE THING
                      </p>
                      <p className="mt-1 text-sm font-bold leading-snug text-amber-50">
                        {p.oneThing}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">{p.porque}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Métricas PASS
                      </p>
                      <ul className="mt-2 space-y-2">
                        {p.metricas.map((m, i) => {
                          const key = `${p.id}-m${i}`;
                          return (
                            <li key={key}>
                              <button
                                type="button"
                                onClick={() => toggle(key)}
                                className="flex w-full items-start gap-2 text-left text-sm text-slate-300"
                              >
                                {done[key] ? (
                                  <CheckCircle2
                                    size={16}
                                    className="mt-0.5 shrink-0 text-emerald-400"
                                  />
                                ) : (
                                  <Circle
                                    size={16}
                                    className="mt-0.5 shrink-0 text-slate-600"
                                  />
                                )}
                                {m}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Comandos / ordem
                      </p>
                      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-300">
                        {p.comandos.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-xl border border-rose-500/15 bg-rose-950/15 p-3">
                      <p className="text-[11px] font-bold text-rose-300">NÃO FAZER</p>
                      <ul className="mt-1 space-y-1 text-xs text-slate-400">
                        {p.naoFazer.map((n) => (
                          <li key={n}>• {n}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggle(`${p.id}-done`)}
                      className={cn(
                        "w-full rounded-full py-3 text-sm font-bold",
                        done[`${p.id}-done`]
                          ? "bg-emerald-500 text-black"
                          : "bg-white/10 text-white",
                      )}
                    >
                      {done[`${p.id}-done`]
                        ? "Pepino PASS ✓"
                        : "Marcar pepino como PASS"}
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="rounded-3xl border border-violet-500/25 bg-violet-950/20 p-6 text-center">
          <Rocket className="mx-auto text-violet-300" size={28} />
          <p className="mt-3 font-display text-lg font-bold text-white">
            Sequência de ouro se só tiveres energia para um
          </p>
          <p className="mt-2 text-sm text-slate-400">
            <strong className="text-violet-200">Só Pepino 1 (Deploy).</strong> Sem o site novo no
            ar, distribuição vende a versão velha e o CFO Hacker continua noutro silo. Deploy
            primeiro — sempre.
          </p>
        </div>
      </Section>
    </>
  );
}
