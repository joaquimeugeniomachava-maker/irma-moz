import { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, Lightbulb } from "lucide-react";
import { ERROS } from "../data/sistafe";
import { PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

const BOAS = [
  "Confirmar o perfil certo para cada função.",
  "Revisar a dotação antes de cabimentar.",
  "Verificar a rubrica e a actividade antes de lançar.",
  "Conferir todos os documentos antes da submissão.",
  "Garantir que conformidade e execução são pessoas diferentes.",
  "Validar os dados do fornecedor.",
  "Registar logo após a operação, sem atrasos.",
];

export function ErrosPage() {
  const [aberto, setAberto] = useState<number | null>(1);

  return (
    <>
      <PageHero
        accent="orange"
        eyebrow="Formação prática"
        title="Erros comuns no e-SISTAFE"
        subtitle="Os 10 erros que mais travam processos — e como evitá-los no dia a dia."
      />
      <Section className="max-w-3xl space-y-12">
        <section>
          <h2 className="mb-2 flex items-center gap-2 font-display text-2xl font-black">
            <AlertTriangle className="text-orange-400" size={24} /> Os 10 erros mais comuns
          </h2>
          <p className="mb-6 text-sm text-slate-400">
            Cada fase depende da anterior. Erro na planificação, cabimentação ou conformidade — e o
            processo trava.
          </p>
          <div className="space-y-3">
            {ERROS.map((e) => (
              <div
                key={e.n}
                className={cn(
                  "rounded-2xl border transition",
                  aberto === e.n
                    ? "border-orange-500/30 bg-white/[0.05]"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10",
                )}
              >
                <button
                  type="button"
                  onClick={() => setAberto(aberto === e.n ? null : e.n)}
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/15 text-sm font-black text-orange-300">
                    {e.n}
                  </span>
                  <span className="flex-1 text-sm font-bold">{e.titulo}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "text-slate-500 transition-transform",
                      aberto === e.n && "rotate-180",
                    )}
                  />
                </button>
                {aberto === e.n && (
                  <div className="space-y-2 px-4 pb-4 pl-16">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-rose-300">Consequência:</span>{" "}
                      {e.consequencia}
                    </p>
                    <p className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>
                        <span className="font-semibold text-emerald-300">Como evitar:</span>{" "}
                        {e.evitar}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-8">
          <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-black">
            <Lightbulb className="text-emerald-400" size={24} /> Boas práticas
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {BOAS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/20 p-3 text-sm text-slate-200"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                {b}
              </li>
            ))}
          </ul>
        </section>

        <blockquote className="rounded-2xl border-l-4 border-orange-400 bg-orange-950/20 p-6 text-sm italic leading-relaxed text-orange-100">
          “No e-SISTAFE, o erro mais caro não é só técnico: é processual. Se o perfil estiver
          errado, o cabimento falhar ou a documentação estiver incompleta, o sistema apenas revela
          o que a organização ainda não controla.”
        </blockquote>
      </Section>
    </>
  );
}
