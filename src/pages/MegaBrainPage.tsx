import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  Copy,
  Download,
  Home,
  Layers,
  Scale,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  CHECKLIST_DAILY,
  CHECKLIST_WEEKLY,
  IMPLEMENTATION_PHASES,
  KIDS_STORY,
  LEGAL_AXES,
  MEGA,
  METICAL_CYCLE,
  NOTEBOOKLM_BRIEF,
  OBSIDIAN_NOTES,
  SUBSISTEMAS_6,
} from "../data/megabrain";
import { PageHero, Section, Badge } from "../components/ui";
import { cn } from "../utils/cn";
import type { PageId } from "../types";

type Tab = "mapa" | "ciclo" | "legal" | "check" | "simples" | "obsidian";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const COR: Record<string, string> = {
  sky: "from-sky-600/25 to-sky-950/20 border-sky-500/35",
  emerald: "from-emerald-600/25 to-emerald-950/20 border-emerald-500/35",
  violet: "from-violet-600/25 to-violet-950/20 border-violet-500/35",
  amber: "from-amber-600/25 to-amber-950/20 border-amber-500/35",
  rose: "from-rose-600/25 to-rose-950/20 border-rose-500/35",
  lime: "from-lime-600/25 to-lime-950/20 border-lime-500/35",
};

export function MegaBrainPage({ onNavigate }: { onNavigate?: (p: PageId) => void }) {
  const [tab, setTab] = useState<Tab>("mapa");
  const [daily, setDaily] = useState<boolean[]>(() => CHECKLIST_DAILY.map(() => false));
  const [weekly, setWeekly] = useState<boolean[]>(() => CHECKLIST_WEEKLY.map(() => false));
  const [toast, setToast] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string>("sae");

  const dailyPct = useMemo(() => {
    const d = daily.filter(Boolean).length;
    return Math.round((d / daily.length) * 100);
  }, [daily]);

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  }

  const tabs: { id: Tab; label: string; icon: typeof Layers }[] = [
    { id: "mapa", label: "6 Subsistemas", icon: Layers },
    { id: "ciclo", label: "Ciclo do Metical", icon: Workflow },
    { id: "legal", label: "Jurídico + Plano", icon: Scale },
    { id: "check", label: "Checklists", icon: CheckSquare },
    { id: "simples", label: "Explicar fácil", icon: Home },
    { id: "obsidian", label: "Obsidian / LM", icon: BookOpen },
  ];

  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Mega Brain Pack · Lei 14/2020"
        title="Os 6 subsistemas + Ciclo de um Metical"
        subtitle={MEGA.principle}
      />

      <Section className="space-y-8 pb-24">
        <div className="rounded-2xl border border-violet-500/25 bg-violet-950/20 p-5">
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-violet-200">Actualização de memória:</strong> a arquitectura
            central são os <strong>seis subsistemas</strong> (SPO, STE, SCP, SPE, SCI e o{" "}
            <strong>novo SAE</strong> — Art. 52). O fluxo legal é{" "}
            <strong>Planeamento → Contratação → Execução digital</strong>. Compromisso manual =
            risco fiscal (passivo oculto). Património sem MPE/SPE = perda de valor. Controlo (SCI)
            fecha o ciclo.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold sm:text-sm",
                  tab === t.id
                    ? "bg-violet-400 text-black"
                    : "border border-white/10 bg-white/5 text-slate-300",
                )}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "mapa" && (
          <div className="space-y-6">
            {/* Diagrama hub */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#12101a] to-[#0a0a0f] p-6 sm:p-10">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">
                Diagrama estilizado · NotebookLM / formação
              </p>
              <h2 className="mt-2 text-center font-display text-2xl font-black text-white sm:text-3xl">
                Integração sistémica e-SISTAFE
              </h2>

              <div className="mx-auto mt-8 flex max-w-md flex-col items-center">
                <div className="rounded-2xl border border-violet-400/40 bg-violet-500/20 px-6 py-4 text-center shadow-lg shadow-violet-500/10">
                  <p className="text-xs font-bold text-violet-200">NÚCLEO</p>
                  <p className="font-display text-lg font-black text-white">Lei 14/2020 · SISTAFE</p>
                  <p className="text-xs text-slate-300">e-SISTAFE · CEDSIF, IP · rastreio digital</p>
                </div>
                <div className="my-3 h-6 w-px bg-gradient-to-b from-violet-400 to-transparent" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SUBSISTEMAS_6.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setOpenSub(s.id)}
                    className={cn(
                      "rounded-2xl border bg-gradient-to-b p-4 text-left transition hover:scale-[1.02]",
                      COR[s.cor],
                      openSub === s.id && "ring-2 ring-white/30",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-2xl">{s.emoji}</span>
                      {s.novo && (
                        <span className="rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-black text-black">
                          NOVO Art.52
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-mono text-lg font-black text-white">{s.sigla}</p>
                    <p className="text-xs font-semibold text-slate-200">{s.nome}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-400">{s.casa}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-400">
                {["Planeamento", "Contratação", "Cabimento", "Execução", "Património", "Controlo"].map(
                  (x, i) => (
                    <span key={x} className="inline-flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                        {x}
                      </span>
                      {i < 5 && <ArrowRight size={12} className="text-violet-400" />}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Detalhe */}
            {SUBSISTEMAS_6.filter((s) => s.id === openSub).map((s) => (
              <article
                key={s.id}
                className={cn("rounded-3xl border bg-gradient-to-b p-6 sm:p-8", COR[s.cor])}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-3xl">{s.emoji}</p>
                    <h3 className="mt-2 font-display text-2xl font-black text-white">
                      {s.sigla} — {s.nome}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">{s.lei}</p>
                  </div>
                  <Badge estado={s.estado} />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-black/25 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Objectivo
                    </p>
                    <p className="mt-1 text-sm text-slate-200">{s.objetivo}</p>
                  </div>
                  <div className="rounded-xl bg-black/25 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Módulos
                    </p>
                    <p className="mt-1 text-sm text-slate-200">{s.modulo}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-rose-500/20 bg-rose-950/30 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-rose-300">
                    Risco / conformidade
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{s.risco}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "ciclo" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-5">
              <h2 className="flex items-center gap-2 font-display text-xl font-black text-amber-100">
                <Sparkles size={20} /> Ciclo de um Metical Público
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Âncora visual para operação diária e formação. Vermelho mental: compromisso manual,
                contrato sem cabimento, pagamento fora da CUT, bem sem etiqueta, perfis acumulados.
              </p>
            </div>

            <ol className="space-y-3">
              {METICAL_CYCLE.map((step, i) => (
                <li key={step.n} className="relative">
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-violet-500/20 font-black text-violet-200">
                      {step.n}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-300">
                          {step.fase}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500">{step.sub}</span>
                      </div>
                      <h3 className="mt-1 font-bold text-white">{step.titulo}</h3>
                      <p className="mt-1 text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                  {i < METICAL_CYCLE.length - 1 && (
                    <div className="ml-6 h-3 w-px bg-violet-500/30" />
                  )}
                </li>
              ))}
            </ol>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Compromisso manual",
                "Contrato sem cabimento",
                "Pagamento fora da CUT",
                "Bem sem registo MPE",
                "Mesma pessoa prepara+paga",
                "Passivo oculto",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-rose-500/30 bg-rose-950/30 px-4 py-3 text-center text-sm font-semibold text-rose-100"
                >
                  🚫 {x}
                </div>
              ))}
            </div>

            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate("ciclo")}
                className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black"
              >
                Abrir ciclo operacional completo <ArrowRight size={16} />
              </button>
            )}
          </div>
        )}

        {tab === "legal" && (
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-xl font-black text-white">
                4 eixos jurídicos prioritários
              </h2>
              <div className="mt-4 space-y-3">
                {LEGAL_AXES.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-bold text-violet-100">{a.title}</h3>
                      <Badge estado={a.estado} />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-black text-white">
                Plano de implementação (0–24 meses)
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {IMPLEMENTATION_PHASES.map((p) => (
                  <article
                    key={p.when}
                    className="rounded-2xl border border-sky-500/20 bg-sky-950/15 p-5"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                      {p.when}
                    </p>
                    <h3 className="mt-1 font-bold text-white">{p.title}</h3>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      {p.items.map((i) => (
                        <li key={i}>• {i}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "check" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <ChecklistBlock
              title="Checklist diário UGEA"
              items={CHECKLIST_DAILY}
              state={daily}
              setState={setDaily}
              pct={dailyPct}
            />
            <ChecklistBlock
              title="Checklist semanal (preventivo SCI)"
              items={CHECKLIST_WEEKLY}
              state={weekly}
              setState={setWeekly}
              pct={Math.round((weekly.filter(Boolean).length / weekly.length) * 100)}
            />
            <div className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-5 lg:col-span-2">
              <p className="text-sm text-amber-100/90">
                <strong>Património:</strong> incluir actualização MPE/SPE no ritmo diário/semanal
                responde ao risco de depreciação de activos (~15%/ano sem gestão).{" "}
                <strong>Auditoria digital:</strong> o relatório preventivo semanal prepara a
                equipa para o e-SISTAFE como ferramenta de auditoria em tempo real.
              </p>
            </div>
          </div>
        )}

        {tab === "simples" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-lime-500/25 bg-lime-950/15 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-black text-lime-100">
                {KIDS_STORY.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{KIDS_STORY.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {KIDS_STORY.parts.map((p) => (
                <article
                  key={p.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="font-bold text-white">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.d}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-950/30 p-5">
              <p className="text-sm font-semibold text-violet-100">{KIDS_STORY.bolso}</p>
            </div>
            <button
              type="button"
              onClick={async () => {
                const t = `${KIDS_STORY.title}\n\n${KIDS_STORY.intro}\n\n${KIDS_STORY.parts.map((p) => `${p.t}\n${p.d}`).join("\n\n")}\n\n${KIDS_STORY.bolso}`;
                await copyText(t);
                flash("História copiada — pronta para WhatsApp");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black"
            >
              <Copy size={16} /> Copiar versão WhatsApp
            </button>
          </div>
        )}

        {tab === "obsidian" && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  const all = OBSIDIAN_NOTES.map((n) => n.body).join("\n\n---\n\n");
                  downloadText("SISTAFE_6_subsistemas_Obsidian.md", all);
                  flash("Pack Obsidian descarregado");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-4 py-2 text-xs font-bold text-black"
              >
                <Download size={14} /> 6 notas Obsidian (.md)
              </button>
              <button
                type="button"
                onClick={async () => {
                  await copyText(NOTEBOOKLM_BRIEF);
                  flash("Brief NotebookLM copiado");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white"
              >
                <Copy size={14} /> Brief diagrama NotebookLM
              </button>
            </div>

            <p className="text-sm text-slate-400">
              Cada bloco abaixo = 1 ficheiro na vault. O Graph View liga-os a uma nota central
              [[SISTAFE]].
            </p>

            <div className="space-y-4">
              {OBSIDIAN_NOTES.map((n) => (
                <div
                  key={n.file}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs text-violet-300">{n.file}</p>
                    <button
                      type="button"
                      onClick={async () => {
                        await copyText(n.body);
                        flash(`${n.file} copiado`);
                      }}
                      className="text-xs font-bold text-amber-300"
                    >
                      Copiar
                    </button>
                  </div>
                  <pre className="max-h-48 overflow-auto whitespace-pre-wrap text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
                    {n.body}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}

function ChecklistBlock({
  title,
  items,
  state,
  setState,
  pct,
}: {
  title: string;
  items: string[];
  state: boolean[];
  setState: Dispatch<SetStateAction<boolean[]>>;
  pct: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-bold text-white">{title}</h3>
        <span className="text-sm font-black text-violet-300">{pct}%</span>
      </div>
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={item}>
            <button
              type="button"
              onClick={() =>
                setState((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
              }
              className={cn(
                "w-full rounded-xl border px-3 py-3 text-left text-sm transition",
                state[i]
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                  : "border-white/5 bg-black/20 text-slate-300",
              )}
            >
              {state[i] ? "☑ " : "☐ "}
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
