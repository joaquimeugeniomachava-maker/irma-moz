import { PERFIS } from "../data/sistafe";
import { PageHero, Section } from "../components/ui";

export function PerfisPage() {
  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Quem faz o quê"
        title="Perfis de operação"
        subtitle="AEO cabimenta · Controlo confere · AEF paga · Ordenador autoriza · Segurança só gere acessos."
      />
      <Section>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-500/30 bg-sky-950/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-400">AEO</p>
            <h3 className="mt-1 font-bold text-white">Agente de Execução Orçamental</h3>
            <p className="mt-2 text-sm text-slate-300">
              Cabimenta e trata a fase orçamental / processo da despesa. Não é quem «manda sair o
              dinheiro» sozinho.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">AEF</p>
            <h3 className="mt-1 font-bold text-white">Agente de Execução Financeira</h3>
            <p className="mt-2 text-sm text-slate-300">
              Executa pagamento e adiantamentos com processo válido, via CUT. Sem docs e cabimento,
              não paga.
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {[
            { p: "AEO", a: "cabimenta" },
            { p: "Controlo", a: "confere" },
            { p: "AEF", a: "paga" },
            { p: "Ordenador", a: "autoriza" },
            { p: "Segurança", a: "acessos" },
          ].map((m) => (
            <div
              key={m.p}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center"
            >
              <p className="text-sm font-bold">{m.p}</p>
              <p className="mt-0.5 text-xs text-fuchsia-300">{m.a}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PERFIS.map((p) => (
            <article
              key={p.nome}
              className="rounded-2xl border border-fuchsia-500/15 bg-white/[0.03] p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-white">{p.nome}</h3>
                <span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[11px] font-bold text-fuchsia-300">
                  {p.accao}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
