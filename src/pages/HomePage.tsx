import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  ShoppingCart,
  Search,
  Users,
  AlertTriangle,
  GitBranch,
  Scale,
  Landmark,
  GraduationCap,
  User,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import type { PageId } from "../types";
import { Section } from "../components/ui";
import { BRAND } from "../data/brand";

export function HomePage({ onNavigate }: { onNavigate: (p: PageId) => void }) {
  return (
    <>
      <header className="relative overflow-hidden px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#7c3aed40_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#c4a35a18_0%,transparent_40%)]" />

        <div className="relative z-10 mx-auto mb-6 flex justify-center">
          <img
            src="/emblema-mocambique.svg"
            alt="Emblema da República de Moçambique"
            className="h-16 w-auto object-contain sm:h-20"
            width={72}
            height={80}
          />
        </div>

        <p className="relative z-10 mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400/90 sm:text-xs">
          República de Moçambique · Administração Pública
        </p>

        <p className="relative z-10 mb-4 text-xs font-semibold tracking-wide text-violet-300/90">
          {BRAND.nomeCurto}
        </p>

        <h1 className="relative z-10 mx-auto max-w-4xl bg-gradient-to-br from-violet-200 via-fuchsia-300 to-amber-200 bg-clip-text font-display text-3xl font-black leading-[1.15] tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[2.75rem]">
          {BRAND.nomeCompleto}
        </h1>

        <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base font-medium text-slate-300 md:text-lg">
          {BRAND.tagline}
        </p>
        <p className="relative z-10 mx-auto mt-3 max-w-xl text-sm text-slate-500">
          {BRAND.missao}
        </p>

        <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate("portal")}
            className="flex items-center gap-2 rounded-full bg-violet-400 px-7 py-3.5 text-sm font-black text-black shadow-lg shadow-violet-400/25 transition hover:bg-violet-300"
          >
            Entrar no manual <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate("megabrain")}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-white/10"
          >
            Ciclo completo do Estado
          </button>
        </div>

        <p className="relative z-10 mt-6 text-xs text-slate-600">
          Gratuito · telemóvel · sem instalar · fontes oficiais (BR / INM)
        </p>
      </header>

      <Section className="space-y-20 pb-24">
        {/* Para quem */}
        <section>
          <h2 className="mb-2 text-center font-display text-2xl font-black text-white">
            Para quem é este manual?
          </h2>
          <p className="mb-8 text-center text-sm text-slate-400">
            Uma porta. Três caminhos. A mesma verdade oficial.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <AudienceCard
              icon={<User className="text-sky-400" size={26} />}
              title="Cidadão"
              text="Compreender como o Estado gere o metical público — linguagem clara, emblema e Boletim da República."
              cta="Ver fontes oficiais"
              onClick={() => onNavigate("fontes")}
              border="border-sky-500/30 hover:border-sky-400/50"
            />
            <AudienceCard
              icon={<Briefcase className="text-violet-400" size={26} />}
              title="Funcionário / UGEA"
              text="AEO vs AEF, siglas, erros que devolvem processos, ciclo da despesa e contratação."
              cta="Abrir portal técnico"
              onClick={() => onNavigate("portal")}
              border="border-violet-500/30 hover:border-violet-400/50"
            />
            <AudienceCard
              icon={<GraduationCap className="text-amber-400" size={26} />}
              title="Formador / Gestor"
              text="Mega Brain, seis subsistemas, checklists e materiais de capacitação."
              cta="Mega Brain Pack"
              onClick={() => onNavigate("megabrain")}
              border="border-amber-500/30 hover:border-amber-400/50"
            />
          </div>
        </section>

        {/* Dor → solução */}
        <section className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 to-transparent p-6 sm:p-10">
          <h2 className="font-display text-xl font-black text-rose-100 sm:text-2xl">
            A dor que este manual resolve
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              "Processos que travam",
              "Documentos que voltam",
              "Pagamentos que atrasam",
            ].map((d) => (
              <li
                key={d}
                className="rounded-xl border border-rose-500/15 bg-black/20 px-4 py-3 text-center text-sm font-semibold text-rose-100/90"
              >
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            Muitas vezes não é falta de trabalho — é falta de{" "}
            <strong className="text-white">informação no momento certo</strong>. O manual reúne
            SISTAFE, e-SISTAFE, perfis, ciclo completo e legislação, com ligação ao que a{" "}
            <strong className="text-amber-200">Imprensa Nacional</strong> publica no Boletim da
            República.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("perfis")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/15"
          >
            Começar por AEO vs AEF <ArrowRight size={16} />
          </button>
        </section>

        {/* Métricas */}
        <section>
          <h2 className="mb-6 text-center font-display text-2xl font-black">
            O que encontra, em segundos
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icone: Search, n: "27+", l: "siglas e conceitos", cor: "text-sky-400", h: "siglas" as PageId },
              { icone: Users, n: "13", l: "perfis de operação", cor: "text-fuchsia-400", h: "perfis" as PageId },
              { icone: AlertTriangle, n: "10", l: "erros comuns", cor: "text-orange-400", h: "erros" as PageId },
              { icone: GitBranch, n: "26", l: "passos de processo", cor: "text-lime-400", h: "ciclo" as PageId },
            ].map((s) => (
              <button
                key={s.l}
                type="button"
                onClick={() => onNavigate(s.h)}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-center transition hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className={`${s.cor} mb-2 flex justify-center`}>
                  <s.icone size={22} />
                </div>
                <p className="text-2xl font-black">{s.n}</p>
                <p className="mt-0.5 text-xs text-slate-400 transition group-hover:text-slate-300">
                  {s.l}
                </p>
              </button>
            ))}
          </div>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-500">
            <Scale size={13} /> Lei 14/2020 · Decretos 79/2022 e 46/2026 · EGFAE · BR / INM
          </p>
        </section>

        {/* Pilares do ciclo completo */}
        <section>
          <h2 className="mb-2 text-center font-display text-2xl font-black">
            Ciclo completo de Administração Pública
          </h2>
          <p className="mb-8 text-center text-sm text-slate-400">
            Quatro blocos — do SISTAFE à fonte oficial do direito
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {BRAND.pilares.map((p, i) => (
              <div
                key={p.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-400">
                  Pilar {i + 1}
                </p>
                <h3 className="mt-1 font-bold text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("megabrain")}
              className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black"
            >
              <BookOpen size={16} /> Seis subsistemas
            </button>
            <button
              type="button"
              onClick={() => onNavigate("fontes")}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 text-sm font-bold text-amber-100"
            >
              <Landmark size={16} /> Emblema · BR · INM
            </button>
            <button
              type="button"
              onClick={() => onNavigate("legislacao")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white"
            >
              <RefreshCw size={16} /> Legislação
            </button>
          </div>
        </section>

        {/* Três portas práticas */}
        <section>
          <h2 className="mb-8 text-center font-display text-2xl font-black">
            Três portas de entrada
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <Pillar
              onClick={() => onNavigate("portal")}
              icon={<BookOpen className="text-violet-400" size={28} />}
              title="Consultar grátis"
              titleClass="text-violet-200"
              border="border-violet-500/25 hover:border-violet-400/50"
              bg="from-violet-900/30 to-violet-950/20"
              text="Portal de formação e consulta — reputação e utilidade pública."
            />
            <Pillar
              onClick={() => onNavigate("loja")}
              icon={<ShoppingCart className="text-amber-400" size={28} />}
              title="Aprofundar (loja)"
              titleClass="text-amber-200"
              border="border-amber-500/25 hover:border-amber-400/50"
              bg="from-amber-900/30 to-amber-950/20"
              text="Manuais PDF e serviços — M-Pesa / e-Mola + WhatsApp."
            />
            <Pillar
              onClick={() => onNavigate("fontes")}
              icon={<Landmark className="text-emerald-400" size={28} />}
              title="Confirmar na lei"
              titleClass="text-emerald-200"
              border="border-emerald-500/25 hover:border-emerald-400/50"
              bg="from-emerald-900/30 to-emerald-950/20"
              text="Imprensa Nacional e Boletim da República — a norma que manda."
            />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950/40 via-transparent to-amber-950/30 p-8 text-center">
          <p className="font-display text-lg font-bold text-white sm:text-xl">
            «Não procure fazer mais. Procure a informação que torna o erro desnecessário.»
          </p>
          <p className="mt-3 text-sm text-slate-500">
            {BRAND.nomeCurto} · {BRAND.url}
          </p>
          <button
            type="button"
            onClick={() => onNavigate("portal")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-400 px-8 py-3.5 text-sm font-black text-black"
          >
            Começar agora <ArrowRight size={18} />
          </button>
        </section>

        <section className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ecossistema · produto irmão
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Precisa de currículo?{" "}
            <button
              type="button"
              onClick={() => onNavigate("cv")}
              className="font-bold text-amber-400 underline-offset-2 hover:underline"
            >
              CV Maker MOZ · 50 MT
            </button>{" "}
            — site com identidade própria (não faz parte do manual do Estado).
          </p>
        </section>
      </Section>
    </>
  );
}

function AudienceCard({
  icon,
  title,
  text,
  cta,
  onClick,
  border,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  cta: string;
  onClick: () => void;
  border: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border bg-white/[0.03] p-6 text-left transition hover:bg-white/[0.05] ${border}`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
      <p className="mt-4 text-xs font-bold text-violet-300">{cta} →</p>
    </button>
  );
}

function Pillar({
  onClick,
  icon,
  title,
  titleClass,
  border,
  bg,
  text,
}: {
  onClick: () => void;
  icon: ReactNode;
  title: string;
  titleClass: string;
  border: string;
  bg: string;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group rounded-3xl border bg-gradient-to-b p-7 text-left transition ${border} ${bg}`}
    >
      <div className="mb-3 flex items-center justify-between">
        {icon}
        <ArrowRight
          size={18}
          className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-violet-400"
        />
      </div>
      <h3 className={`font-display text-lg font-black ${titleClass}`}>{title}</h3>
      <p className="mt-2 text-xs text-slate-400">{text}</p>
    </button>
  );
}
