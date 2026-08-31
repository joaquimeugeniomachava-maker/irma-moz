import { DECRETO_46, BASES_LEGAIS } from "../data/sistafe";
import { Badge, PageHero, Section } from "../components/ui";
import { AlertTriangle, Building2, GraduationCap, Scale } from "lucide-react";

export function LegislacaoPage() {
  return (
    <>
      <PageHero
        accent="emerald"
        eyebrow="Actualização legislativa · Agosto 2026"
        title={DECRETO_46.titulo}
        subtitle={DECRETO_46.base}
      />
      <Section className="space-y-12">
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black">
            <Scale className="text-emerald-400" size={22} /> Principais eixos de alteração
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {DECRETO_46.eixos.map((e, i) => (
              <div
                key={e}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                  Eixo {i + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{e}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-gold-200/10 border-amber-500/20 bg-amber-950/15 p-5">
            <p className="text-sm text-amber-100">
              <strong>Adendas:</strong> limite orientador de <strong>25%</strong> do valor original;
              assinatura da Autoridade Competente e do Prestador; verificar se a alteração não
              configura novo objecto contratual.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black">
            <Building2 className="text-violet-400" size={22} /> Instituições de fiscalização
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-12 bg-white/5 text-xs font-bold uppercase tracking-wider text-slate-400 sm:grid">
              <div className="col-span-2 px-4 py-3">Sigla</div>
              <div className="col-span-10 px-4 py-3">Papel</div>
            </div>
            {DECRETO_46.instituicoes.map((inst) => (
              <div
                key={inst.sigla}
                className="grid gap-1 border-t border-white/5 px-4 py-4 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-2">
                  <span className="inline-flex rounded-md bg-violet-500/20 px-2.5 py-1 text-sm font-black text-violet-300">
                    {inst.sigla}
                  </span>
                </div>
                <p className="text-sm text-slate-300 sm:col-span-10">{inst.papel}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-rose-500/25">
          <div className="bg-gradient-to-r from-rose-700 to-rose-900 px-6 py-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 shrink-0 text-white" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Recomendações do sistema
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  {DECRETO_46.alerta.titulo}
                </h3>
                <p className="mt-1 text-sm text-white/75">Fraude no e-SISTAFE · perfis de acesso</p>
              </div>
            </div>
          </div>
          <ul className="space-y-3 bg-rose-950/30 p-6">
            {DECRETO_46.alerta.pontos.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-rose-500/15 bg-black/20 px-4 py-3 text-sm text-slate-200"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-sky-500/20 bg-sky-950/20 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 font-display text-xl font-black text-sky-200">
            <GraduationCap size={22} /> {DECRETO_46.capacitacao.titulo}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Meta label="Local" value={DECRETO_46.capacitacao.local} />
            <Meta label="Datas" value={DECRETO_46.capacitacao.datas} />
            <Meta label="Participantes" value={DECRETO_46.capacitacao.participantes} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {DECRETO_46.capacitacao.formadores.map((f) => (
              <span
                key={f}
                className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-bold text-sky-300"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl font-black">Quadro legal de referência</h2>
          <div className="space-y-3">
            {BASES_LEGAIS.map((b) => (
              <div
                key={b.lei}
                className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-white">{b.lei}</p>
                  <p className="text-xs text-slate-400">{b.desc}</p>
                </div>
                <Badge estado={b.status} />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-6">
          <h2 className="font-display text-lg font-black text-amber-100">
            Actualização: só vale o Boletim da República
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            A <strong className="text-white">Imprensa Nacional de Moçambique, E.P.</strong> publica
            o Boletim da República (I, II e III Séries) — fonte oficial de leis e decretos. Este
            portal resume e organiza para formação;{" "}
            <strong className="text-white">não substitui</strong> o texto do BR. Antes de um
            parecer formal, confirme o diploma em:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://www.inm.gov.mz/pt-br/bulletin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black"
            >
              BR · inm.gov.mz
            </a>
            <a
              href="https://www.inm.gov.mz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white"
            >
              Site INM
            </a>
          </div>
        </section>
      </Section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
