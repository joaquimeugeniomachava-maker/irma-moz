import { PageHero, Section } from "../components/ui";
import { ClipboardCheck, Shield } from "lucide-react";

const PONTOS = [
  {
    t: "Segregação de funções",
    d: "Quem prepara não confere; quem confere não paga. Rever matrizes de acesso mensalmente.",
  },
  {
    t: "Trilho de auditoria",
    d: "Cada operação deve deixar rasto: utilizador, data, valor, documento e estado.",
  },
  {
    t: "Perfis e-SISTAFE",
    d: "Auditoria contínua de perfis (alerta GCCC Inhambane). Remover contas inactivas.",
  },
  {
    t: "Documentação",
    d: "Despacho, cabimento, contrato, termo de recepção e factura no mesmo processo.",
  },
  {
    t: "Adendas",
    d: "Controlar % acumulado face ao contrato original e se o objecto se manteve.",
  },
  {
    t: "Fiscalização prévia",
    d: "Despesas sujeitas a TA/MP devem ter parecer antes da assunção do compromisso.",
  },
];

export function AuditoriaPage() {
  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Controlo interno"
        title="Auditoria e conformidade"
        subtitle="Pontos de verificação para SCI, gestores e formadores — alinhados ao Decreto 46/2026."
      />
      <Section>
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5">
          <Shield className="text-violet-300" />
          <p className="text-sm text-slate-300">
            Use esta lista em revisões internas semanais. Não substitui o trabalho do Tribunal
            Administrativo nem do GCCC.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {PONTOS.map((p, i) => (
            <article
              key={p.t}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-black text-violet-300">
                  {i + 1}
                </span>
                <h3 className="font-bold text-white">{p.t}</h3>
              </div>
              <p className="text-sm text-slate-400">{p.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="flex items-center gap-2 font-bold text-white">
            <ClipboardCheck className="text-emerald-400" size={18} /> Frase de fecho
          </h3>
          <p className="mt-3 text-sm italic text-slate-400">
            “Auditoria não é caça ao erro — é prova de que o processo é repetível, rastreável e
            defensável.”
          </p>
        </div>
      </Section>
    </>
  );
}
