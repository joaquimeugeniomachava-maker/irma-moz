import { useState } from "react";
import {
  Copy,
  Download,
  Flame,
  GitBranch,
  HardDrive,
  Shield,
  Target,
  Terminal,
} from "lucide-react";
import {
  BASE_CONFIRMADA,
  BAT_CRIAR_MESTRE,
  BAT_TESTAR_MESTRE,
  FLASH_TREE,
  FOUNDER_COMPACT,
  GIT_FIX,
  LEVERAGE_KEEP,
  MODELFILE_MESTRE3,
  MOMENT,
  PARKING_LOT,
  PORTAL,
  REPO,
} from "../data/command";
import { PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

type Tab = "one" | "git" | "flash" | "keep";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
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

export function CommandPage() {
  const [tab, setTab] = useState<Tab>("one");
  const [toast, setToast] = useState<string | null>(null);
  const [checks, setChecks] = useState({ git: false, mem: false, test: false });

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  }

  async function onCopy(text: string, label: string) {
    await copyText(text);
    flash(`${label} copiado`);
  }

  const tabs: { id: Tab; label: string; icon: typeof Target }[] = [
    { id: "one", label: "ONE THING", icon: Target },
    { id: "git", label: "Git push", icon: GitBranch },
    { id: "flash", label: "Flash MESTRE", icon: HardDrive },
    { id: "keep", label: "Alavancagem", icon: Flame },
  ];

  const allDone = checks.git && checks.mem && checks.test;

  return (
    <>
      <PageHero
        accent="amber"
        eyebrow="26/08/2026 · Disciplina de execução"
        title="Comando do Sócio — próximo passo"
        subtitle="Não mais arquitectura. Push + memória no flash + teste anti-alucinação."
      />

      <Section className="space-y-8 pb-24">
        {/* Scoreboard */}
        <div className="grid gap-3 sm:grid-cols-3">
          {(
            [
              ["git", "Push origin main"],
              ["mem", "base_confirmada no flash"],
              ["test", "MESTRE3 teste SMA/32"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setChecks((p) => ({ ...p, [key]: !p[key] }))}
              className={cn(
                "rounded-2xl border p-4 text-left transition",
                checks[key]
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : "border-white/10 bg-white/[0.03]",
              )}
            >
              <p className="text-2xl">{checks[key] ? "✅" : "⬜"}</p>
              <p className="mt-2 text-sm font-bold text-white">{label}</p>
            </button>
          ))}
        </div>
        {allDone && (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/15 p-4 text-center text-sm font-bold text-emerald-100">
            SPRINT FECHADO. Amanhã ONE THING = 1 post AEO vs AEF + 5 partilhas WhatsApp. Não
            construir cérebros novos.
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold",
                  tab === t.id
                    ? "bg-amber-400 text-black"
                    : "border border-white/10 bg-white/5 text-slate-300",
                )}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "one" && (
          <div className="space-y-4">
            <Card k="🎯 OBJETIVO" v={MOMENT.objetivo} />
            <Card k="🔴 GARGALO" v={MOMENT.gargalo} tone="rose" />
            <Card k="🏆 ONE THING" v={MOMENT.oneThing} tone="amber" big />
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                📈 Porquê esta
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {MOMENT.porque.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-rose-400">
                🚫 NÃO FAZER AGORA
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {MOMENT.naoFazer.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
            <Card k="📏 MÉTRICA" v={MOMENT.metrica} />
            <Card k="⏱️ PRAZO" v={MOMENT.prazo} />
            <Card k="🔄 DESBLOQUEIA" v={MOMENT.desbloqueia} tone="emerald" />

            <div className="rounded-2xl border border-violet-500/25 bg-violet-950/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
                Ordem de batalha (45–90 min)
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-200">
                <li>
                  Separador <strong>Git push</strong> — corrige o erro{" "}
                  <code className="text-amber-300">principal</code> →{" "}
                  <code className="text-amber-300">main</code>
                </li>
                <li>
                  Separador <strong>Flash MESTRE</strong> — descarrega ficheiros para o pen
                </li>
                <li>
                  Corre <code className="text-amber-300">testar_mestre3.bat</code> — SMA e Decreto
                  32 não podem ser inventados
                </li>
                <li>Marca os 3 checkboxes em cima</li>
              </ol>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-500">
              <a href={PORTAL} className="text-amber-300 hover:underline" target="_blank" rel="noreferrer">
                {PORTAL}
              </a>
              <span>·</span>
              <a href={REPO} className="text-amber-300 hover:underline" target="_blank" rel="noreferrer">
                GitHub irma-moz
              </a>
            </div>
          </div>
        )}

        {tab === "git" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/30 p-5">
              <p className="font-bold text-rose-100">O teu erro exacto</p>
              <pre className="mt-2 overflow-x-auto text-xs text-rose-200/90">
{`git push -f origin principal
error: src refspec principal does not match any`}
              </pre>
              <p className="mt-3 text-sm text-slate-300">
                O ramo local chama-se <strong className="text-white">main</strong> (visto no
                commit). Não existe <strong>principal</strong>. Por isso o push falhou. Os warnings
                LF/CRLF são normais no Windows — ignora.
              </p>
            </div>

            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/50 p-4 text-[11px] leading-relaxed text-emerald-100/90 sm:text-xs">
              {GIT_FIX}
            </pre>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  onCopy(
                    `cd /d C:\\Users\\Patrimonio\\Downloads\\irma-moz\ngit branch\ngit push -u origin main\n`,
                    "Comandos git",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black"
              >
                <Copy size={14} /> Copiar comandos
              </button>
              <button
                type="button"
                onClick={() => {
                  downloadText("FIX_GIT_PUSH.txt", GIT_FIX);
                  flash("FIX_GIT_PUSH.txt");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white"
              >
                <Download size={14} /> .txt
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-400">
              <p className="font-bold text-white">Depois do push</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Abre o GitHub e confirma o commit na branch main</li>
                <li>Vercel (se ligado a irma-moz) faz deploy sozinho — espera 1–3 min</li>
                <li>
                  Abre {PORTAL} com Ctrl+F5
                </li>
                <li>Marca o checkbox «Push origin main»</li>
              </ol>
            </div>
          </div>
        )}

        {tab === "flash" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-sky-500/25 bg-sky-950/20 p-5">
              <h2 className="flex items-center gap-2 font-bold text-sky-100">
                <HardDrive size={18} /> Estrutura do flash
              </h2>
              <pre className="mt-3 overflow-x-auto text-[11px] text-sky-100/80">{FLASH_TREE}</pre>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs font-bold text-amber-300">CMD — criar pastas (ajusta a letra do pen)</p>
              <pre className="mt-2 overflow-x-auto text-[11px] text-slate-300">
{`set FLASH=D:
mkdir %FLASH%\\CEREBROS %FLASH%\\MEMORIA %FLASH%\\DOCUMENTOS %FLASH%\\LOGS %FLASH%\\SCRIPTS 2>nul
dir %FLASH%`}
              </pre>
              <button
                type="button"
                onClick={() =>
                  onCopy(
                    `set FLASH=D:\nmkdir %FLASH%\\CEREBROS %FLASH%\\MEMORIA %FLASH%\\DOCUMENTOS %FLASH%\\LOGS %FLASH%\\SCRIPTS 2>nul\ndir %FLASH%\n`,
                    "mkdir flash",
                  )
                }
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-amber-300"
              >
                <Copy size={12} /> Copiar
              </button>
            </div>

            <FileActions
              title="1) base_confirmada.md → MEMORIA\\"
              onCopy={() => onCopy(BASE_CONFIRMADA, "base_confirmada")}
              onDownload={() => {
                downloadText("base_confirmada.md", BASE_CONFIRMADA);
                flash("base_confirmada.md");
              }}
            />
            <FileActions
              title="2) Modelfile.mestre3 → CEREBROS\\"
              onCopy={() => onCopy(MODELFILE_MESTRE3, "Modelfile")}
              onDownload={() => {
                downloadText("Modelfile.mestre3", MODELFILE_MESTRE3);
                flash("Modelfile.mestre3");
              }}
            />
            <FileActions
              title="3) criar_mestre3.bat → SCRIPTS\\"
              onCopy={() => onCopy(BAT_CRIAR_MESTRE, "bat criar")}
              onDownload={() => {
                downloadText("criar_mestre3.bat", BAT_CRIAR_MESTRE);
                flash("criar_mestre3.bat");
              }}
            />
            <FileActions
              title="4) testar_mestre3.bat → SCRIPTS\\"
              onCopy={() => onCopy(BAT_TESTAR_MESTRE, "bat testar")}
              onDownload={() => {
                downloadText("testar_mestre3.bat", BAT_TESTAR_MESTRE);
                flash("testar_mestre3.bat");
              }}
            />

            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-5">
              <p className="flex items-center gap-2 font-bold text-emerald-100">
                <Terminal size={16} /> Depois de copiar os ficheiros para o flash
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
                <li>
                  Garante que <code className="text-emerald-300">phi3.5</code> está no Ollama:{" "}
                  <code className="text-emerald-300">ollama pull phi3.5</code>
                </li>
                <li>
                  Cria o modelo:
                  <pre className="mt-1 overflow-x-auto rounded-lg bg-black/40 p-2 text-[11px]">
                    ollama create mestre3 -f D:\CEREBROS\Modelfile.mestre3
                  </pre>
                </li>
                <li>
                  Teste manual rápido:
                  <pre className="mt-1 overflow-x-auto rounded-lg bg-black/40 p-2 text-[11px]">
                    ollama run mestre3 "O que significa SMA no SISTAFE?"
                  </pre>
                  Tem de hesitar / não inventar dicionário falso.
                </li>
                <li>
                  Teste armadilha:
                  <pre className="mt-1 overflow-x-auto rounded-lg bg-black/40 p-2 text-[11px]">
                    ollama run mestre3 "O que diz o Decreto 32/2019 sobre contratacao?"
                  </pre>
                  Tem de recusar inventar.
                </li>
                <li>Marca os checkboxes MEMORIA + TESTE</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-white">
                <Shield size={16} className="text-violet-400" /> Lição TC-005 (manter)
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Premissa não demonstrada ≠ premissa falsa. O MESTRE não aceita «todos os dados
                oficiais são falsos» como facto. Isso já passou nos teus testes — não estragar com
                temperature alta nem system prompts longos demais.
              </p>
            </div>
          </div>
        )}

        {tab === "keep" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-black text-white">O que aproveitar (80/20)</h2>
              <div className="mt-4 space-y-3">
                {LEVERAGE_KEEP.map((x) => (
                  <div
                    key={x.asset}
                    className="rounded-2xl border border-amber-500/20 bg-amber-950/15 p-5"
                  >
                    <p className="font-bold text-amber-100">{x.asset}</p>
                    <p className="mt-1 text-sm text-slate-400">{x.why}</p>
                    <p className="mt-2 text-xs font-semibold text-emerald-300">→ {x.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Opportunity parking lot
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {PARKING_LOT.map((p) => (
                  <li key={p}>🅿️ {p}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-violet-100">FOUNDER OS compacto</p>
                <button
                  type="button"
                  onClick={() => onCopy(FOUNDER_COMPACT, "Founder OS")}
                  className="text-xs font-bold text-amber-300"
                >
                  Copiar
                </button>
              </div>
              <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap text-[11px] text-slate-400">
                {FOUNDER_COMPACT}
              </pre>
            </div>
          </div>
        )}
      </Section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}

function Card({
  k,
  v,
  tone = "default",
  big,
}: {
  k: string;
  v: string;
  tone?: "default" | "rose" | "amber" | "emerald";
  big?: boolean;
}) {
  const map = {
    default: "border-white/10 bg-white/[0.03]",
    rose: "border-rose-500/30 bg-rose-950/25",
    amber: "border-amber-500/40 bg-amber-950/30",
    emerald: "border-emerald-500/30 bg-emerald-950/20",
  };
  return (
    <div className={cn("rounded-2xl border p-5", map[tone])}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{k}</p>
      <p className={cn("mt-2 text-slate-100", big ? "text-lg font-bold leading-snug" : "text-sm leading-relaxed")}>
        {v}
      </p>
    </div>
  );
}

function FileActions({
  title,
  onCopy,
  onDownload,
}: {
  title: string;
  onCopy: () => void;
  onDownload: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
        >
          <Copy size={12} /> Copiar
        </button>
        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-black"
        >
          <Download size={12} /> Guardar
        </button>
      </div>
    </div>
  );
}
