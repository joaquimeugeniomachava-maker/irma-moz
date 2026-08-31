import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import type { PageId } from "../types";
import { SEARCH_ITEMS } from "../data/sistafe";
import { PageHero, Section, Card } from "../components/ui";

const RESPOSTA_RAPIDA = [
  {
    tema: "AEO vs AEF",
    definicao: "AEO cabimenta e trata a fase orçamental; AEF paga com processo válido via CUT.",
    impacto: "Confundir os dois trava processos e quebra segregação.",
    risco: "Mesma pessoa cabimentar e pagar = fragilidade grave de controlo.",
    responsavel: "AEO · Controlo Interno · AEF · Ordenador (papéis distintos)",
    proximo: "Abrir Perfis e confirmar o que cada um pode / não pode.",
    page: "perfis" as PageId,
  },
  {
    tema: "Cabimento",
    definicao: "Verificar e registar verba no e-SISTAFE antes de comprometer a despesa.",
    impacto: "Sem cabimento digital a despesa é irregular (passivo oculto).",
    risco: "Compromisso manual — viola o espírito dos Arts. 14 e 30 da Lei 14/2020.",
    responsavel: "Agente de Execução Orçamental (AEO)",
    proximo: "Confirmar saldo e rubrica no MPO/MEX antes de qualquer assinatura.",
    page: "ciclo" as PageId,
  },
  {
    tema: "Pagamento (CUT)",
    definicao: "Saída de fundos pela Conta Única do Tesouro após processo válido.",
    impacto: "Só com liquidação/processo conforme o AEF pode pagar.",
    risco: "Pagar sem docs ou fora da CUT parte o rasto e a unidade de tesouraria.",
    responsavel: "AEF · STE/CUT · Controlo Interno confere (não paga)",
    proximo: "Conferir factura, termo de recepção e empenho antes do pagamento.",
    page: "ciclo" as PageId,
  },
];

export function PortalPage({ onNavigate }: { onNavigate: (p: PageId) => void }) {
  const [busca, setBusca] = useState("");

  const resultados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_ITEMS.filter(
      (i) =>
        i.titulo.toLowerCase().includes(q) ||
        i.resumo.toLowerCase().includes(q) ||
        i.keywords.some((k) => k.includes(q) || q.includes(k)),
    );
  }, [busca]);

  return (
    <>
      <PageHero
        eyebrow="Portal de consulta"
        title="Encontrar rápido · entender · agir"
        subtitle="Pesquisa, caminhos por perfil e módulos de formação para UGEA e gestores."
      />

      <Section>
        <div className="relative mx-auto max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar: cabimento, MPO, liquidação, adenda…"
            className="w-full rounded-2xl border border-white/15 bg-white/[0.05] py-4 pl-12 pr-5 text-base outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {busca.trim() && (
          <div className="mt-8">
            <p className="mb-4 text-sm text-slate-400">
              Resultados para “{busca}” ({resultados.length})
            </p>
            {resultados.length === 0 && (
              <p className="text-sm text-slate-500">
                Nada encontrado. Tente “cabimento”, “património” ou “pagamento”.
              </p>
            )}
            <div className="grid gap-3 sm:grid-cols-2">
              {resultados.map((r) => (
                <Card key={r.id} onClick={() => onNavigate(r.page as PageId)}>
                  <p className="font-bold text-violet-200">{r.titulo}</p>
                  <p className="mt-1 text-sm text-slate-400">{r.resumo}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!busca.trim() && (
          <>
            <h2 className="mb-2 mt-12 text-center font-display text-xl font-black">
              O que queres fazer?
            </h2>
            <p className="mb-6 text-center text-sm text-slate-400">
              Navega por intenção, não por sigla.
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { t: "Consultar", d: "Siglas e conceitos", p: "siglas" as PageId, c: "text-sky-400" },
                { t: "Aprender", d: "Módulos e guias", p: "ciclo" as PageId, c: "text-violet-400" },
                { t: "Resolver erro", d: "Falhas e correcções", p: "erros" as PageId, c: "text-orange-400" },
                { t: "Documentos", d: "Base legal 2026", p: "legislacao" as PageId, c: "text-emerald-400" },
              ].map((x) => (
                <Card key={x.t} onClick={() => onNavigate(x.p)}>
                  <p className={`text-sm font-black ${x.c}`}>{x.t}</p>
                  <p className="mt-1 text-xs text-slate-400">{x.d}</p>
                </Card>
              ))}
            </div>

            <h2 className="mb-2 mt-14 font-display text-xl font-black">Consulta rápida</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { l: "Siglas", p: "siglas" as PageId },
                { l: "Perfis", p: "perfis" as PageId },
                { l: "Fluxo de Processos", p: "ciclo" as PageId },
                { l: "Erros Comuns", p: "erros" as PageId },
                { l: "Base Legal", p: "legislacao" as PageId },
                { l: "Contratação", p: "contratacao" as PageId },
              ].map((c) => (
                <button
                  key={c.l}
                  type="button"
                  onClick={() => onNavigate(c.p)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm font-semibold text-slate-200 transition hover:border-violet-400/40"
                >
                  {c.l}
                </button>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="font-display text-xl font-black">Resposta rápida · para gestores</h2>
              <p className="mt-1 text-sm text-slate-400">
                Definição, impacto, risco, responsável e próximo passo — em 30 segundos.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {RESPOSTA_RAPIDA.map((r) => (
                  <div
                    key={r.tema}
                    className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <p className="font-bold text-violet-200">{r.tema}</p>
                      <button
                        type="button"
                        onClick={() => onNavigate(r.page)}
                        className="flex items-center gap-1 text-xs font-semibold text-violet-400"
                      >
                        Ver <ArrowRight size={12} />
                      </button>
                    </div>
                    <ul className="space-y-1.5 text-xs leading-relaxed text-slate-300">
                      <li>
                        <span className="text-slate-500">Definição:</span> {r.definicao}
                      </li>
                      <li>
                        <span className="text-slate-500">Impacto:</span> {r.impacto}
                      </li>
                      <li>
                        <span className="text-rose-300/80">Risco:</span> {r.risco}
                      </li>
                      <li>
                        <span className="text-slate-500">Responsável:</span> {r.responsavel}
                      </li>
                    </ul>
                    <p className="mt-3 text-xs font-medium text-emerald-300/90">
                      → {r.proximo}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14" id="modulos">
              <h2 className="mb-5 font-display text-xl font-black">Aprende por módulos</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { n: 1, t: "Fundamentos", d: "SISTAFE, e-SISTAFE, SPO, PES, OE.", p: "siglas" as PageId, b: "border-sky-500/40" },
                  { n: 2, t: "Perfis", d: "Quem faz o quê: execução, conformidade, segurança.", p: "perfis" as PageId, b: "border-fuchsia-500/40" },
                  { n: 3, t: "Contratação", d: "Concurso, cabimento, adjudicação, pagamento.", p: "contratacao" as PageId, b: "border-lime-500/40" },
                  { n: 4, t: "Erros frequentes", d: "Os 10 erros que travam processos.", p: "erros" as PageId, b: "border-orange-500/40" },
                  { n: 5, t: "Base legal", d: "Lei 14/2020, Decretos 79/2022 e 46/2026.", p: "legislacao" as PageId, b: "border-emerald-500/40" },
                  { n: 6, t: "Ciclo completo", d: "8 passos + fluxo MEX + PLC.", p: "ciclo" as PageId, b: "border-amber-500/40" },
                ].map((m) => (
                  <button
                    key={m.n}
                    type="button"
                    onClick={() => onNavigate(m.p)}
                    className={`rounded-2xl border bg-white/[0.03] p-5 text-left transition hover:bg-white/[0.05] ${m.b}`}
                  >
                    <p className="text-[11px] font-bold tracking-wider text-slate-500">
                      MÓDULO {m.n}
                    </p>
                    <p className="mt-1 font-bold text-white">{m.t}</p>
                    <p className="mt-1 text-xs text-slate-400">{m.d}</p>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </Section>
    </>
  );
}
