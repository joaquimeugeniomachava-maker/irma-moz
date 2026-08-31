import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Copy,
  Download,
  ExternalLink,
  Rocket,
  Shield,
  Terminal,
  TriangleAlert,
  Flame,
  ClipboardList,
  Bot,
  Search,
} from "lucide-react";
import {
  COMPARISON_46,
  DESKTOP_PLAYBOOK,
  SAMPLE_CASE,
  SEO_TASKS,
  UGEA_PROMPT,
  type SeoTask,
} from "../data/founder";
import { PageHero, Section, Badge } from "../components/ui";
import { cn } from "../utils/cn";

type Tab = "missao" | "cfo" | "ugea" | "desktop" | "monitoria";

const STORAGE_KEY = "founder-os-seo-v1";

function loadStatus(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  }
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function FounderOSPage() {
  const [tab, setTab] = useState<Tab>("missao");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [openTask, setOpenTask] = useState<string>("title-meta");
  const [toast, setToast] = useState<string | null>(null);
  const [caseOut, setCaseOut] = useState("");

  useEffect(() => {
    setDone(loadStatus());
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done]);

  const stats = useMemo(() => {
    const total = SEO_TASKS.length;
    const finished = SEO_TASKS.filter((t) => done[t.id]).length;
    const alta = SEO_TASKS.filter((t) => t.priority === "alta");
    const altaDone = alta.filter((t) => done[t.id]).length;
    return {
      total,
      finished,
      pct: Math.round((finished / total) * 100),
      altaDone,
      altaTotal: alta.length,
    };
  }, [done]);

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  async function onCopy(text: string, label: string) {
    await copyText(text);
    flash(`${label} copiado`);
  }

  function toggle(id: string) {
    setDone((p) => ({ ...p, [id]: !p[id] }));
  }

  function runCaseSkeleton() {
    setCaseOut(`📌 RESPOSTA ESSENCIAL
Antes de qualquer ajuste directo: (1) fundamentar a urgência com factos ✅/⚠️, (2) cabimentar no e-SISTAFE ✅, (3) verificar se a categoria está sujeita à CAE ⚠️, (4) aplicar regras de excepcionalidade do 79/2022 com reforços do 46/2026 ✅.

📋 PROCEDIMENTO
1. Confirmar necessidade e especificações técnicas (UGEA).
2. Verificar plano/PLC e cobertura orçamental (MPO) → CABIMENTO no e-SISTAFE.
3. Enquadrar modalidade: urgência real vs conveniência — exigência de fundamentação reforçada (46/2026).
4. Confirmar se a aquisição está no âmbito de centralização CAE ⚠️ (MEF/CAE).
5. Se ajuste directo admissível: processo + conformidade + autorizações.
6. Empenho → recepção → liquidação → pagamento CUT.
7. Arquivo completo para MP/TA/GCCC/UFSA.

⏱️ PRAZOS
Não inventar prazos. Confirmar no texto do 79/2022 e 46/2026 e manuais UFSA ⚠️.

⚠️ RISCOS
- Urgência fictícia → irregularidade / GCCC
- Sem cabimento → despesa ilegal
- Mesma pessoa prepara/confere/paga → quebra de segregação
- Adjudicar antes do sistema → rasto partido
- Ignorar CAE quando obrigatória ⚠️

📎 FONTES
- Decreto 79/2022 — quadro base ✅/⚠️ conforme artigo exacto
- Decreto 46/2026 — alterações (excepcional, adendas, controlos) ✅ quadro geral
- Lei 14/2020 SISTAFE — execução/cabimento ✅
- Âmbito CAE e % preferência/PME — ⚠️ confirmar BR/MEF

🔧 PRÓXIMO PASSO (HOJE)
Abrir o processo no e-SISTAFE, pedir cabimento na rubrica correcta e registar por escrito a fundamentação da urgência com evidências — sem adjudicar ainda.`);
    flash("Esqueleto de resposta gerado — valide com o diploma");
  }

  const tabs: { id: Tab; label: string; icon: typeof Rocket }[] = [
    { id: "missao", label: "Missão", icon: Flame },
    { id: "cfo", label: "CFO Hacker SEO", icon: Search },
    { id: "ugea", label: "UGEA OS", icon: Bot },
    { id: "desktop", label: "Desktop / CMD", icon: Terminal },
    { id: "monitoria", label: "Monitoria", icon: ClipboardList },
  ];

  return (
    <>
      <PageHero
        accent="violet"
        eyebrow="Arquiteto Founder OS"
        title="Indexação CFO Hacker + Prompt UGEA"
        subtitle="Um ecrã para executar o 80/20: SEO que indexa e prompt normativo que não alucina."
      />

      <Section className="space-y-8 pb-24">
        {/* KPI strip */}
        <div className="grid gap-3 sm:grid-cols-4">
          <Kpi label="SEO concluído" value={`${stats.finished}/${stats.total}`} sub={`${stats.pct}%`} />
          <Kpi label="Prioridade ALTA" value={`${stats.altaDone}/${stats.altaTotal}`} sub="GSC · Meta · GA4" />
          <Kpi label="UGEA prompt" value="1 pág" sub="79/2022 + 46/2026" />
          <Kpi label="Modo" value="Execução" sub="Desktop + browser" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm",
                  tab === t.id
                    ? "bg-violet-400 text-black shadow-lg shadow-violet-400/20"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10",
                )}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "missao" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-rose-500/25 bg-gradient-to-br from-rose-950/40 to-transparent p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-1 shrink-0 text-rose-400" />
                <div>
                  <h2 className="font-display text-xl font-black text-white">Gargalo actual</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Dois projectos, uma atenção. Sem indexação o CFO Hacker não existe no Google.
                    Sem prompt fechado a UGEA alucina diplomas. Hoje resolve-se o 20% que destrava
                    80% do resultado.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setTab("cfo")}
                className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-950/40 to-transparent p-6 text-left transition hover:border-amber-400/50"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  One Thing A
                </p>
                <h3 className="mt-2 font-display text-2xl font-black text-amber-100">
                  CFO Hacker → 5 SEO
                </h3>
                <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-slate-300">
                  <li>Title + meta</li>
                  <li>Google Analytics 4</li>
                  <li>Search Console</li>
                  <li>Sitemap + robots</li>
                  <li>PageSpeed</li>
                </ol>
                <p className="mt-4 text-xs font-semibold text-amber-300">
                  Clique para executar passo a passo →
                </p>
              </button>

              <button
                type="button"
                onClick={() => setTab("ugea")}
                className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 to-transparent p-6 text-left transition hover:border-emerald-400/50"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  One Thing B
                </p>
                <h3 className="mt-2 font-display text-2xl font-black text-emerald-100">
                  UGEA OS → Prompt 1 pág
                </h3>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>· Decreto 79/2022 + 46/2026</li>
                  <li>· Protocolo BASE→RISCO→FONTE</li>
                  <li>· Comandos ANALISAR / AUDITAR</li>
                  <li>· Caso real de teste</li>
                </ul>
                <p className="mt-4 text-xs font-semibold text-emerald-300">
                  Clique para copiar e testar →
                </p>
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="flex items-center gap-2 font-bold text-white">
                <Rocket size={18} className="text-violet-400" /> Ordem de batalha (hoje)
              </h3>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <strong className="text-white">1.</strong> Abrir separador{" "}
                  <button type="button" className="text-violet-300 underline" onClick={() => setTab("desktop")}>
                    Desktop / CMD
                  </button>{" "}
                  e criar pasta FOUNDER_OS.
                </li>
                <li>
                  <strong className="text-white">2.</strong> Executar SEO ALTA no separador CFO (title →
                  GA4 → GSC).
                </li>
                <li>
                  <strong className="text-white">3.</strong> Copiar prompt UGEA e guardar em{" "}
                  <code className="text-violet-300">UGEA_OS_PROMPT.md</code>.
                </li>
                <li>
                  <strong className="text-white">4.</strong> Correr 1 caso ANALISAR e guardar a resposta.
                </li>
                <li>
                  <strong className="text-white">5.</strong> Fechar o dia na{" "}
                  <button type="button" className="text-violet-300 underline" onClick={() => setTab("monitoria")}>
                    Monitoria
                  </button>
                  .
                </li>
              </ol>
            </div>
          </div>
        )}

        {tab === "cfo" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-black text-amber-100">
                  Indexação CFO Hacker — execução
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Progresso gravado neste browser (localStorage). Meta: 3 ALTA hoje.
                </p>
              </div>
              <div className="min-w-[140px]">
                <div className="mb-1 flex justify-between text-xs text-slate-400">
                  <span>Progresso</span>
                  <span>{stats.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-black/40">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-violet-500 transition-all"
                    style={{ width: `${stats.pct}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-12 bg-white/5 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <div className="col-span-1">OK</div>
                <div className="col-span-5 sm:col-span-4">Tarefa</div>
                <div className="col-span-3 sm:col-span-2">Prioridade</div>
                <div className="hidden sm:col-span-5 sm:block">Verificação</div>
              </div>
              {SEO_TASKS.map((t) => (
                <div
                  key={t.id}
                  className="grid grid-cols-12 items-center border-t border-white/5 px-4 py-3 text-sm"
                >
                  <div className="col-span-1">
                    <button type="button" onClick={() => toggle(t.id)} aria-label="toggle">
                      {done[t.id] ? (
                        <CheckCircle2 className="text-emerald-400" size={18} />
                      ) : (
                        <Circle className="text-slate-600" size={18} />
                      )}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenTask(openTask === t.id ? "" : t.id)}
                    className="col-span-5 text-left font-semibold text-white hover:text-amber-200 sm:col-span-4"
                  >
                    {t.title}
                  </button>
                  <div className="col-span-3 sm:col-span-2">
                    <PriorityBadge p={t.priority} />
                  </div>
                  <div className="col-span-3 hidden truncate text-xs text-slate-500 sm:col-span-5 sm:block">
                    {t.verify}
                  </div>
                </div>
              ))}
            </div>

            {SEO_TASKS.filter((t) => t.id === openTask).map((t) => (
              <TaskDetail
                key={t.id}
                task={t}
                done={!!done[t.id]}
                onToggle={() => toggle(t.id)}
                onCopyCmd={async () => {
                  if (t.cmd) {
                    await onCopy(t.cmd.join("\r\n"), "Comandos CMD");
                  }
                }}
              />
            ))}

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-bold text-white">Snippet pronto — title + meta (CFO Hacker)</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-black/40 p-4 text-[11px] leading-relaxed text-amber-100/90 sm:text-xs">
{`<title>CFO Hacker — IA para CFOs | Reduza Custos em 30%</title>
<meta name="description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://SEUDOMINIO.com/" />
<meta property="og:title" content="CFO Hacker — IA para CFOs | Reduza Custos em 30%" />
<meta property="og:description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />`}
              </pre>
              <button
                type="button"
                onClick={() =>
                  onCopy(
                    `<title>CFO Hacker — IA para CFOs | Reduza Custos em 30%</title>
<meta name="description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://SEUDOMINIO.com/" />
<meta property="og:title" content="CFO Hacker — IA para CFOs | Reduza Custos em 30%" />
<meta property="og:description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />`,
                    "Snippet SEO",
                  )
                }
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black"
              >
                <Copy size={14} /> Copiar snippet
              </button>
            </div>
          </div>
        )}

        {tab === "ugea" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-black text-emerald-100">
                  UGEA OS — prompt compacto
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  79/2022 + 46/2026 · CAE · e-SISTAFE · anti-alucinação
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onCopy(UGEA_PROMPT, "Prompt UGEA")}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-black"
                >
                  <Copy size={14} /> Copiar prompt
                </button>
                <button
                  type="button"
                  onClick={() => {
                    downloadText("UGEA_OS_PROMPT.md", UGEA_PROMPT);
                    flash("Download UGEA_OS_PROMPT.md");
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white"
                >
                  <Download size={14} /> .md
                </button>
              </div>
            </div>

            <pre className="max-h-[420px] overflow-auto rounded-2xl border border-white/10 bg-black/50 p-4 text-[11px] leading-relaxed text-emerald-100/85 sm:text-xs">
              {UGEA_PROMPT}
            </pre>

            <div>
              <h3 className="mb-3 font-display text-lg font-black">
                O que muda: 79/2022 vs 46/2026
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Aspecto</th>
                      <th className="px-4 py-3">79/2022</th>
                      <th className="px-4 py-3">46/2026</th>
                      <th className="px-4 py-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_46.map((r) => (
                      <tr key={r.aspecto} className="border-t border-white/5 align-top">
                        <td className="px-4 py-3 font-semibold text-white">{r.aspecto}</td>
                        <td className="px-4 py-3 text-slate-400">{r.d79}</td>
                        <td className="px-4 py-3 text-slate-300">{r.d46}</td>
                        <td className="px-4 py-3">
                          <Badge estado={r.estado} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-amber-200/80">
                * Percentagens de preferência/PME/conteúdo local e âmbito exacto da CAE: marcar ⚠️
                até confirmação no Boletim da República / MEF. Não use em parecer formal sem o
                texto oficial.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-500/25 bg-violet-950/20 p-5">
              <h3 className="font-bold text-violet-100">Testar com caso real</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-black/40 p-4 text-[11px] text-slate-300 sm:text-xs">
                {SAMPLE_CASE}
              </pre>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onCopy(`${UGEA_PROMPT}\n\n---\n\n${SAMPLE_CASE}`, "Prompt + caso")}
                  className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-4 py-2 text-xs font-bold text-black"
                >
                  <Copy size={14} /> Copiar prompt + caso
                </button>
                <button
                  type="button"
                  onClick={runCaseSkeleton}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white"
                >
                  <Shield size={14} /> Gerar esqueleto de resposta
                </button>
              </div>
              {caseOut && (
                <pre className="mt-4 overflow-x-auto rounded-xl border border-emerald-500/20 bg-black/50 p-4 text-[11px] leading-relaxed text-emerald-100/90 sm:text-xs">
                  {caseOut}
                </pre>
              )}
            </div>
          </div>
        )}

        {tab === "desktop" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-sky-500/25 bg-sky-950/20 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-black text-sky-100">
                  Passo a passo — Desktop / CMD / Bloco de notas
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Execute na ordem. Substitua SEUDOMINIO pelo domínio real do CFO Hacker.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onCopy(DESKTOP_PLAYBOOK, "Playbook")}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-xs font-bold text-black"
                >
                  <Copy size={14} /> Copiar playbook
                </button>
                <button
                  type="button"
                  onClick={() => {
                    downloadText("FOUNDER_OS_PLAYBOOK.txt", DESKTOP_PLAYBOOK);
                    flash("Download FOUNDER_OS_PLAYBOOK.txt");
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white"
                >
                  <Download size={14} /> .txt
                </button>
              </div>
            </div>

            <ol className="space-y-4">
              {[
                {
                  n: "0",
                  t: "Abrir o campo de batalha (2 min)",
                  lines: [
                    "Tecla Windows + R → escreva cmd → Enter",
                    "No CMD, cole:",
                    "mkdir C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS 2>nul",
                    "cd /d C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS",
                    "mkdir cfo-hacker ugea-os 2>nul",
                    "notepad diario.txt",
                  ],
                },
                {
                  n: "1",
                  t: "CFO — Title + Meta (15 min) 🔴",
                  lines: [
                    "Abra a pasta do site CFO Hacker no Explorer",
                    "Shift+clique direito na pasta → «Abrir janela PowerShell/CMD aqui»",
                    "notepad index.html   (ou o layout do Next/Vite)",
                    "Cole o snippet do separador CFO Hacker SEO",
                    "Troque SEUDOMINIO.com pelo domínio real",
                    "Guarde → faça deploy/publish",
                    "Chrome → abra o site → Ctrl+U → confirme <title> e description",
                  ],
                },
                {
                  n: "2",
                  t: "CFO — Google Analytics (20 min) 🔴",
                  lines: [
                    "Chrome → https://analytics.google.com",
                    "Admin → Criar propriedade GA4 → Web stream",
                    "Copiar ID G-XXXXXXXX",
                    "Colar gtag no <head> do site → publish",
                    "Abrir o site → GA4 → Relatórios → Tempo real (tem de aparecer 1)",
                  ],
                },
                {
                  n: "3",
                  t: "CFO — Search Console (25 min) 🔴",
                  lines: [
                    "https://search.google.com/search-console",
                    "Adicionar propriedade → Prefixo do URL → https://SEUDOMINIO.com",
                    "Verificação Tag HTML → copiar meta",
                    "Colar no <head> → publish → Verificar",
                    "Sitemaps → adicionar sitemap.xml → Enviar",
                    "Inspeção de URL da homepage → Pedir indexação",
                  ],
                },
                {
                  n: "4",
                  t: "robots.txt + sitemap.xml (15 min) 🟡",
                  lines: [
                    "cd pasta-do-site",
                    "notepad public\\robots.txt",
                    "notepad public\\sitemap.xml",
                    "Use os modelos do playbook (Allow: / + Sitemap)",
                    "Deploy → teste no browser /robots.txt e /sitemap.xml",
                  ],
                },
                {
                  n: "5",
                  t: "PageSpeed (15 min) 🟡",
                  lines: [
                    "https://pagespeed.web.dev/ → colar URL",
                    "Anotar Mobile e Desktop no diario.txt",
                    "Se mobile < 70: comprimir imagens e reduzir scripts",
                  ],
                },
                {
                  n: "6",
                  t: "UGEA — gravar prompt (10 min)",
                  lines: [
                    "Neste site: Founder OS → UGEA OS → Copiar prompt",
                    "cd /d C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS\\ugea-os",
                    "notepad UGEA_OS_PROMPT.md → Ctrl+V → Guardar",
                    "Copiar prompt+caso → colar no ChatGPT/Claude/Ollama",
                    "Guardar a melhor resposta em resposta_caso1.md",
                  ],
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 font-mono text-sm font-black text-sky-300">
                      {s.n}
                    </span>
                    <h3 className="font-bold text-white">{s.t}</h3>
                  </div>
                  <ul className="space-y-1.5 pl-1 text-sm text-slate-300">
                    {s.lines.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span className="text-sky-500">›</span>
                        <span className={l.startsWith("mkdir") || l.startsWith("cd ") || l.startsWith("notepad") || l.startsWith("https") ? "font-mono text-xs text-sky-200/90" : ""}>
                          {l}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <pre className="max-h-80 overflow-auto rounded-2xl border border-white/10 bg-black/60 p-4 text-[10px] leading-relaxed text-slate-400 sm:text-[11px]">
              {DESKTOP_PLAYBOOK}
            </pre>
          </div>
        )}

        {tab === "monitoria" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-violet-500/25 bg-violet-950/20 p-5">
              <h2 className="font-display text-xl font-black text-violet-100">
                Monitoria — como se a vida dependesse
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Ritmo diário de 10–15 minutos. Sem isto, SEO e UGEA morrem em 7 dias.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold text-amber-200">Manhã (CFO Hacker)</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>☐ GA4 → utilizadores 24h / tempo real</li>
                  <li>☐ Search Console → erros de cobertura</li>
                  <li>☐ Homepage ainda tem title/meta correctos? (Ctrl+U)</li>
                  <li>☐ 1 acção de tráfego (post, grupo, email, parceria)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold text-emerald-200">Tarde (UGEA OS)</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>☐ 1 caso ANALISAR ou AUDITAR com o prompt</li>
                  <li>☐ Marcar ✅/⚠️/❓ em cada afirmação legal</li>
                  <li>☐ Anotar dúvida para confirmar no BR/MEF</li>
                  <li>☐ Actualizar checklist UGEA se houver norma nova</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-bold text-white">Semana 1 — definição de «ganhámos»</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  ✅ CFO: propriedade no GSC verificada + sitemap «Êxito» + GA4 a registar visitas
                </li>
                <li>✅ CFO: title/meta correctos no código-fonte público</li>
                <li>✅ UGEA: prompt guardado em disco + 3 casos testados</li>
                <li>✅ UGEA: tabela 79 vs 46 usada sem inventar % não confirmadas</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5">
              <h3 className="font-bold text-rose-200">Sinais de alarme (parar e corrigir)</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>🚨 robots.txt com <code>Disallow: /</code></li>
                <li>🚨 GSC não verifica há &gt; 24h após meta tag</li>
                <li>🚨 GA4 sem tempo real depois do publish</li>
                <li>🚨 Prompt UGEA a inventar artigos/prazos sem ⚠️</li>
                <li>🚨 Deploy Vercel falhou e o domínio serve página antiga</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                downloadText(
                  "diario_founder_os.txt",
                  `DIÁRIO FOUNDER OS — ${new Date().toISOString().slice(0, 10)}\n\nCFO:\n- GSC:\n- GA4:\n- Title/meta OK?\n- PageSpeed mobile:\n- Acção de tráfego:\n\nUGEA:\n- Caso testado:\n- Dúvidas ⚠️:\n- Próximo passo:\n\nBloqueios:\n-\n`,
                );
                flash("Modelo de diário descarregado");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black"
            >
              <Download size={16} /> Descarregar modelo diario.txt
            </button>
          </div>
        )}
      </Section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-violet-400/30 bg-violet-500 px-5 py-2.5 text-sm font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}

function Kpi({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-display text-2xl font-black text-white">{value}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function PriorityBadge({ p }: { p: SeoTask["priority"] }) {
  const map = {
    alta: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    media: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    baixa: "bg-slate-500/15 text-slate-300 border-slate-500/30",
  };
  return (
    <span className={cn("rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase", map[p])}>
      {p}
    </span>
  );
}

function TaskDetail({
  task,
  done,
  onToggle,
  onCopyCmd,
}: {
  task: SeoTask;
  done: boolean;
  onToggle: () => void;
  onCopyCmd: () => void;
}) {
  return (
    <article className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-950/30 to-transparent p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-black text-white">{task.title}</h3>
            <PriorityBadge p={task.priority} />
          </div>
          <p className="mt-2 text-sm text-slate-400">{task.why}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-bold",
            done ? "bg-emerald-400 text-black" : "bg-white/10 text-white",
          )}
        >
          {done ? "Concluído ✓" : "Marcar feito"}
        </button>
      </div>

      <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-amber-400">
        Passo a passo
      </h4>
      <ol className="mt-3 space-y-2">
        {task.steps.map((s, i) => (
          <li key={s} className="flex gap-3 text-sm text-slate-200">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-500/15 text-[11px] font-black text-amber-300">
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>

      {task.cmd && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">CMD</h4>
            <button
              type="button"
              onClick={onCopyCmd}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300"
            >
              <Copy size={12} /> Copiar
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-black/50 p-3 text-[11px] text-sky-100/90">
            {task.cmd.join("\n")}
          </pre>
        </div>
      )}

      <p className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-950/20 px-4 py-3 text-sm text-emerald-100/90">
        <strong>Verificar:</strong> {task.verify}
      </p>

      {task.link && (
        <a
          href={task.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:underline"
        >
          Abrir ferramenta <ExternalLink size={14} />
        </a>
      )}
    </article>
  );
}
