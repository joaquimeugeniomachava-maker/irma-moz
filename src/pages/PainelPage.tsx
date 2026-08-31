import { useMemo, useState } from "react";
import { CHECKLIST_UGEA, PRODUTOS } from "../data/sistafe";
import { PageHero, Section } from "../components/ui";
import { LayoutDashboard, Target } from "lucide-react";
import { cn } from "../utils/cn";

const PLANO = [
  { mes: "Mês 1", foco: "Portal + conteúdo", meta: "Publicar siglas, ciclo, erros e 1 manual PDF." },
  { mes: "Mês 2", foco: "Distribuição", meta: "Formações UGEA + posts diários + 10 vendas M-Pesa." },
  { mes: "Mês 3", foco: "Escala", meta: "Pacotes de formação + parcerias distritais + painel real." },
];

export function PainelPage() {
  const [checks, setChecks] = useState<boolean[]>(() => CHECKLIST_UGEA.map(() => false));
  const progress = useMemo(() => {
    const done = checks.filter(Boolean).length;
    return { done, total: checks.length, pct: Math.round((done / checks.length) * 100) };
  }, [checks]);

  return (
    <>
      <PageHero
        accent="sky"
        eyebrow="Painel do dono"
        title="Alavancagem e controlo"
        subtitle="Checklist UGEA, plano de 90 dias e visão da loja — versão local sem base de dados."
      />
      <Section className="space-y-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { l: "Produtos na loja", v: String(PRODUTOS.length) },
            { l: "Checklist UGEA", v: `${progress.done}/${progress.total}` },
            { l: "Progresso", v: `${progress.pct}%` },
          ].map((k) => (
            <div
              key={k.l}
              className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-5 text-center"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">{k.l}</p>
              <p className="mt-1 font-display text-3xl font-black text-sky-200">{k.v}</p>
            </div>
          ))}
        </div>

        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black">
            <LayoutDashboard className="text-sky-400" size={22} /> Checklist operacional
          </h2>
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all"
              style={{ width: `${progress.pct}%` }}
            />
          </div>
          <ul className="space-y-2">
            {CHECKLIST_UGEA.map((item, i) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() =>
                    setChecks((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                  }
                  className={cn(
                    "w-full rounded-xl border px-4 py-3 text-left text-sm transition",
                    checks[i]
                      ? "border-sky-500/30 bg-sky-500/10 text-sky-100"
                      : "border-white/5 bg-white/[0.03] text-slate-300",
                  )}
                >
                  {checks[i] ? "☑ " : "☐ "}
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black">
            <Target className="text-amber-400" size={22} /> Plano de alavancagem — 90 dias
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {PLANO.map((p) => (
              <div
                key={p.mes}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {p.mes}
                </p>
                <p className="mt-2 font-bold text-white">{p.foco}</p>
                <p className="mt-2 text-sm text-slate-400">{p.meta}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            A alavancagem real: o portal atrai, a validação mantém a confiança, a loja traz a renda.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-bold text-white">Notas sobre a transferência do projecto</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
            <li>
              No GitHub, <code className="text-violet-300">sistafe-moz</code> está quase vazio
              (só README).
            </li>
            <li>
              O código vivo estava em <code className="text-violet-300">irma-moz</code> (Next.js +
              PostgreSQL/Drizzle).
            </li>
            <li>
              Esta conversa reconstruiu o Manual e-SISTAFE em Vite (sem servidor/DB) para não
              depender da outra sessão.
            </li>
            <li>
              Para voltar ao Next + Vercel: clona irma-moz, configura DATABASE_URL e faz deploy.
            </li>
          </ul>
        </section>
      </Section>
    </>
  );
}
