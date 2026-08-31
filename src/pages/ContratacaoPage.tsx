import { useState } from "react";
import { BookOpen, CheckSquare } from "lucide-react";
import { BASES_LEGAIS, SUBSISTEMAS, CHECKLIST_UGEA } from "../data/sistafe";
import { Badge, PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

const FLUXO = [
  { passo: "1", titulo: "Identificação da Necessidade", desc: "UGEA identifica bem/serviço. Envia ao MPO para cabimento." },
  { passo: "2", titulo: "Cabimento Orçamental (MPO)", desc: "Verificar dotação. Sem cabimento prévio = compromisso manual = ilegal." },
  { passo: "3", titulo: "Procedimento de Contratação", desc: "Concurso, ajuste directo ou outro regime — com fundamentação." },
  { passo: "4", titulo: "Registo no e-SISTAFE", desc: "Contrato entra no sistema. Rasto digital obrigatório." },
  { passo: "5", titulo: "Execução Contratual", desc: "Fornecedor entrega. UGEA confere. Bem entra no SPE." },
  { passo: "6", titulo: "Pagamento via CUT", desc: "Liquidação e pagamento rastreável do início ao fim." },
  { passo: "7", titulo: "Auditoria (SCI / TA)", desc: "Controlo interno e fiscalização prévia/posterior." },
];

export function ContratacaoPage() {
  const [tab, setTab] = useState("bases");
  const [checks, setChecks] = useState<Record<number, boolean>>({});

  const done = Object.values(checks).filter(Boolean).length;

  return (
    <>
      <PageHero
        accent="amber"
        eyebrow="SISTAFE · MPO · UFSA · SAE · CUT"
        title="Contratação Pública"
        subtitle="Subsistemas, fluxo e checklist operacional — com rigor e estados de confiança."
      />
      <Section className="space-y-10">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            ["bases", "📜 Bases Legais"],
            ["subsistemas", "🔗 Subsistemas"],
            ["fluxo", "🔄 Fluxo"],
            ["checklist", "✅ Checklist"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-bold transition",
                tab === id
                  ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                  : "border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "bases" && (
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="text-amber-400" /> Bases Legais
            </h2>
            {BASES_LEGAIS.map((b) => (
              <div
                key={b.lei}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:border-amber-500/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-amber-200">{b.lei}</h3>
                    <p className="mt-1 text-sm text-slate-300">{b.desc}</p>
                  </div>
                  <Badge estado={b.status} />
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "subsistemas" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SUBSISTEMAS.map((s) => (
              <div
                key={s.sigla}
                className={cn(
                  "rounded-2xl border bg-gradient-to-b p-5",
                  s.border,
                  s.cor,
                )}
              >
                <p className="font-mono text-lg font-black text-white">{s.sigla}</p>
                <p className="mt-1 text-sm font-semibold text-slate-200">{s.nome}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.papel}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "fluxo" && (
          <ol className="space-y-3">
            {FLUXO.map((f) => (
              <li
                key={f.passo}
                className="flex gap-4 rounded-2xl border border-amber-500/15 bg-white/[0.03] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 font-black text-amber-300">
                  {f.passo}
                </span>
                <div>
                  <h3 className="font-bold text-white">{f.titulo}</h3>
                  <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {tab === "checklist" && (
          <div>
            <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5">
              <div className="flex items-center gap-2">
                <CheckSquare className="text-emerald-400" />
                <p className="font-bold text-emerald-200">Checklist UGEA</p>
              </div>
              <p className="text-sm font-bold text-emerald-300">
                {done}/{CHECKLIST_UGEA.length}
              </p>
            </div>
            <ul className="space-y-2">
              {CHECKLIST_UGEA.map((item, i) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setChecks((p) => ({ ...p, [i]: !p[i] }))}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition",
                      checks[i]
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                        : "border-white/5 bg-white/[0.03] text-slate-300 hover:border-white/10",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-[10px]",
                        checks[i]
                          ? "border-emerald-400 bg-emerald-500 text-black"
                          : "border-slate-500",
                      )}
                    >
                      {checks[i] ? "✓" : ""}
                    </span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </>
  );
}
