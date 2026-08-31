import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SIGLAS } from "../data/sistafe";
import { Badge, PageHero, Section } from "../components/ui";

export function SiglasPage() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return SIGLAS;
    return SIGLAS.filter(
      (x) =>
        x.sigla.toLowerCase().includes(s) ||
        x.nome.toLowerCase().includes(s) ||
        x.desc.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <>
      <PageHero
        accent="sky"
        eyebrow="Glossário"
        title="Siglas e conceitos"
        subtitle={`${SIGLAS.length} entradas do e-SISTAFE e da contratação pública — com estado de confiança.`}
      />
      <Section>
        <div className="relative mb-8 max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filtrar sigla…"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((s) => (
            <article
              key={s.sigla}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-lg bg-sky-500/15 px-2.5 py-1 font-mono text-sm font-black text-sky-300">
                  {s.sigla}
                </span>
                <Badge estado={s.estado} />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{s.nome}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
