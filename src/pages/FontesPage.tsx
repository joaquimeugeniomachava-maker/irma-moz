import {
  BookOpen,
  ExternalLink,
  Landmark,
  RefreshCw,
  Scale,
} from "lucide-react";
import {
  DIPLOMAS_TRACK,
  FONTES_OFICIAIS,
  IMPRENSA_NACIONAL,
  PROTOCOLO_BR,
  REPUBLICA,
} from "../data/oficial";
import { Badge, PageHero, Section } from "../components/ui";

export function FontesPage() {
  return (
    <>
      <PageHero
        accent="emerald"
        eyebrow="Estado · Direito escrito · Transparência"
        title="Emblema, BR e Imprensa Nacional"
        subtitle="O portal apoia a consulta. A norma vigente publica-se no Boletim da República pela Imprensa Nacional de Moçambique, E.P."
      />

      <Section className="space-y-12 pb-24">
        {/* Emblema */}
        <section className="grid items-center gap-8 rounded-3xl border border-amber-500/25 bg-gradient-to-br from-[#12100a] to-[#0a0a0f] p-6 sm:grid-cols-[auto_1fr] sm:p-10">
          <div className="mx-auto flex flex-col items-center">
            <img
              src={REPUBLICA.emblemaLocal}
              alt="Emblema da República de Moçambique"
              className="h-36 w-auto object-contain sm:h-44"
              width={160}
              height={176}
            />
            <a
              href={REPUBLICA.emblemaCommons}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-[11px] font-semibold text-amber-400/90 underline-offset-2 hover:underline"
            >
              Ver arte de referência (Wikimedia Commons)
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Símbolo do Estado
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
              {REPUBLICA.nome}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {REPUBLICA.notaEmblema}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Em documentos e portais de apoio à administração pública, o emblema recorda que o
              ciclo da despesa e a contratação pública são exercício de{" "}
              <strong className="text-slate-200">poder e dever do Estado</strong> — sujeitos à lei
              publicada oficialmente.
            </p>
          </div>
        </section>

        {/* INM */}
        <section className="rounded-3xl border border-emerald-500/25 bg-emerald-950/15 p-6 sm:p-8">
          <div className="flex flex-wrap items-start gap-3">
            <Landmark className="shrink-0 text-emerald-400" size={28} />
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-xl font-black text-emerald-100 sm:text-2xl">
                {IMPRENSA_NACIONAL.nome}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {IMPRENSA_NACIONAL.missao}
              </p>
              <p className="mt-3 text-sm text-slate-400">
                <strong className="text-white">É a INM que produz e divulga os BRs</strong> onde
                saem leis, decretos e actos de publicação obrigatória. Qualquer “actualização” do
                MOZ-SISTAFE (Decreto 46/2026, alterações ao 79/2022, etc.) deve{" "}
                <strong className="text-emerald-200">bater certo com o BR</strong> — não com rumores
                nem resumos sem referência.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={IMPRENSA_NACIONAL.boletim}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-black"
                >
                  Abrir Boletim da República
                  <ExternalLink size={16} />
                </a>
                <a
                  href={IMPRENSA_NACIONAL.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white"
                >
                  Site INM
                  <ExternalLink size={16} />
                </a>
                <a
                  href={IMPRENSA_NACIONAL.portalGovernoBR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white"
                >
                  Portal do Governo · BR
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {(
              [
                ["I Série", IMPRENSA_NACIONAL.serieNota.I],
                ["II Série", IMPRENSA_NACIONAL.serieNota.II],
                ["III Série", IMPRENSA_NACIONAL.serieNota.III],
              ] as const
            ).map(([s, d]) => (
              <div
                key={s}
                className="rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">{s}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Protocolo de actualização */}
        <section>
          <h2 className="flex items-center gap-2 font-display text-xl font-black text-white">
            <RefreshCw className="text-sky-400" size={22} />
            {PROTOCOLO_BR.titulo}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            {PROTOCOLO_BR.principio}
          </p>
          <ol className="mt-6 space-y-3">
            {PROTOCOLO_BR.passos.map((p) => (
              <li
                key={p.n}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm font-black text-sky-300">
                  {p.n}
                </span>
                <div>
                  <p className="font-bold text-white">{p.t}</p>
                  <p className="mt-1 text-sm text-slate-400">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Checklist semanal do editor do portal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {PROTOCOLO_BR.checklistSemanal.map((c) => (
                <li key={c}>☐ {c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Diplomas em acompanhamento */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black text-white">
            <Scale className="text-violet-400" size={22} /> Diplomas em acompanhamento
          </h2>
          <div className="space-y-3">
            {DIPLOMAS_TRACK.map((d) => (
              <div
                key={d.diploma}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-white">{d.diploma}</p>
                  <p className="text-sm text-slate-400">{d.tema}</p>
                  <p className="mt-1 text-xs text-slate-500">{d.fonte}</p>
                </div>
                <Badge estado={d.estado} />
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-black text-white">
            <BookOpen className="text-amber-400" size={22} /> Fontes oficiais (atalhos)
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FONTES_OFICIAIS.map((f) => (
              <a
                key={f.url}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-white group-hover:text-amber-100">{f.nome}</p>
                  <ExternalLink size={14} className="shrink-0 text-slate-500" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{f.papel}</p>
              </a>
            ))}
          </div>
        </section>

        <p className="text-center text-xs text-slate-600">
          MOZ-SISTAFE não é diário oficial. Para efeitos legais, vale o texto publicado no Boletim
          da República pela Imprensa Nacional de Moçambique, E.P.
        </p>
      </Section>
    </>
  );
}
