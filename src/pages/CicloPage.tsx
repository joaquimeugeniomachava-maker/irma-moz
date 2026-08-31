import { useState } from "react";
import { CICLO_8, MEX_FLUXO, PLC_PASSOS } from "../data/sistafe";
import { Badge, PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

type Fase = "ciclo" | "mex" | "plc" | "trator" | "alertas";

export function CicloPage() {
  const [fase, setFase] = useState<Fase>("ciclo");

  return (
    <>
      <PageHero
        accent="sky"
        eyebrow="Processos"
        title="Ciclo de Compras Públicas"
        subtitle="Da Ficha MPE até à liquidação — o roteiro completo, com estados de confiança."
      />

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(
            [
              ["ciclo", "Os 8 Passos"],
              ["mex", "Fluxo MEX (11)"],
              ["plc", "Plano de Contratação"],
              ["trator", "Exemplo: Trator"],
              ["alertas", "⚠️ Alertas de Rigor"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFase(id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition",
                fase === id
                  ? "bg-sky-400 text-black"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {fase === "ciclo" && (
          <ol className="space-y-4">
            {CICLO_8.map((c, i) => (
              <li key={c.n} className="relative">
                <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 font-black text-sky-300">
                    {c.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-white">{c.titulo}</h3>
                        <p className="text-xs text-sky-300/80">{c.sub}</p>
                      </div>
                      <Badge estado={c.estado} />
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
                    {c.nota && (
                      <p className="mt-2 text-xs text-amber-200/80">⚠️ {c.nota}</p>
                    )}
                  </div>
                </div>
                {i < CICLO_8.length - 1 && (
                  <div className="ml-5 h-4 w-px bg-gradient-to-b from-sky-500/40 to-transparent" />
                )}
              </li>
            ))}
          </ol>
        )}

        {fase === "mex" && (
          <div>
            <div className="mb-6 rounded-2xl border border-sky-500/20 bg-sky-950/20 p-5">
              <h3 className="font-bold text-sky-200">🔁 Fluxo Operacional MEX / MPO / MPE</h3>
              <p className="mt-2 text-sm text-slate-400">
                MPO = planificação e orçamento · MEX = execução · MPE = património.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {MEX_FLUXO.map((m) => (
                <div
                  key={m.n}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-500/15 text-sm font-black text-lime-300">
                    {m.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{m.titulo}</p>
                  </div>
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-bold text-slate-400">
                    {m.modulo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {fase === "plc" && (
          <div>
            <div className="mb-6 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5">
              <h3 className="font-bold text-violet-200">📑 Perfil do Plano de Contratação (PLC)</h3>
              <p className="mt-2 text-sm text-slate-400">
                7 passos com padrão de papéis ACP / AGC. Expansão exacta das siglas: ❓ a clarificar.
              </p>
            </div>
            <ol className="space-y-3">
              {PLC_PASSOS.map((p) => (
                <li
                  key={p.n}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                >
                  <span className="font-mono text-sm font-bold text-violet-300">{p.n}</span>
                  <span className="flex-1 text-sm text-slate-200">{p.titulo}</span>
                  <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                    {p.sigla}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {fase === "trator" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-lime-500/20 bg-lime-950/10 p-6">
              <h3 className="font-bold text-lime-200">🚜 Roteiro prático: comprar um trator</h3>
              <p className="mt-2 text-sm text-slate-400">
                Como uma UGEA compra um trator, explicado no campo.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <h4 className="font-bold text-white">📋 FASE 1 — Planeamento</h4>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
                <li>Ficha MPE: verificar onde consta o plano de actividades.</li>
                <li>Autorização do chefe da UGEA para a necessidade do trator.</li>
              </ol>
              <p className="mt-3 text-xs text-amber-200/80">
                ⚠️ Limite exacto para Ajuste Directo de equipamentos agrícolas: confirmar no
                regulamento.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <h4 className="font-bold text-white">💰 FASE 2 — Execução e Pagamento</h4>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300" start={3}>
                <li>Requisição com especificações técnicas.</li>
                <li>Cabimento: confirmar verba na Ficha MPE.</li>
                <li>Nota de Empenho — reserva o dinheiro.</li>
                <li>Liquidação após entrega e conferência.</li>
                <li>Pagamento autorizado pelo AEF via CUT.</li>
              </ol>
            </div>
          </div>
        )}

        {fase === "alertas" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
              <p className="text-sm text-amber-100/90">
                Nenhuma afirmação é ✅ sem fonte citável. As referências abaixo precisam de
                confirmação na Imprensa Nacional.
              </p>
            </div>
            {[
              {
                t: "Decreto do Regulamento do SISTAFE",
                d: "Confirmar sempre o número e o ano exactos no BR antes de citar em documentos oficiais.",
              },
              {
                t: "Decreto n.º 42 — gestão patrimonial",
                d: "Pode haver confusão entre anos/assuntos diferentes. Verificar diploma exacto.",
              },
              {
                t: "UFSA — diplomas de criação",
                d: "Números de diplomas de criação da UFSA: confirmar antes de usar como citáveis.",
              },
              {
                t: "Manual de Execução Orçamental",
                d: "Referências a páginas específicas só com o PDF/manual em mão.",
              },
            ].map((a) => (
              <div
                key={a.t}
                className="rounded-2xl border border-amber-500/15 bg-white/[0.03] p-5"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-white">{a.t}</h4>
                  <Badge estado="nao_verificado" />
                </div>
                <p className="text-sm text-slate-400">{a.d}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
