import { useState } from "react";
import {
  Copy,
  Download,
  ExternalLink,
  BookOpen,
  Megaphone,
  ShieldAlert,
  Sparkles,
  Scale,
} from "lucide-react";
import {
  AEO_AEF,
  AUDIT,
  BOOKS_8020,
  COPY_CURTA_WA,
  COPY_HOOK_AEO_AEF,
  COPY_LAPIDADA,
  PORTAL_URL,
} from "../data/growth";
import { PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

type Tab = "audit" | "copy" | "aeo" | "books";

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

export function GrowthPage() {
  const [tab, setTab] = useState<Tab>("audit");
  const [toast, setToast] = useState<string | null>(null);

  async function onCopy(text: string, label: string) {
    await copyText(text);
    setToast(`${label} copiado`);
    window.setTimeout(() => setToast(null), 2000);
  }

  const tabs: { id: Tab; label: string; icon: typeof ShieldAlert }[] = [
    { id: "audit", label: "Auditoria UX", icon: ShieldAlert },
    { id: "copy", label: "Copy social", icon: Megaphone },
    { id: "aeo", label: "AEO vs AEF", icon: Scale },
    { id: "books", label: "80/20 Livros", icon: BookOpen },
  ];

  return (
    <>
      <PageHero
        accent="amber"
        eyebrow="Conversas recuperadas · 25/08/2026"
        title="Auditoria · Copy · Pergaminhos"
        subtitle="Portal moz-sistafe.vercel.app — sem alterar produção até autorização. Aqui: diagnóstico, mensagens prontas e 80/20 dos livros."
      />

      <Section className="space-y-8 pb-24">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:underline"
          >
            {PORTAL_URL} <ExternalLink size={14} />
          </a>
          <span className="text-xs text-slate-500">Auditoria: {AUDIT.date}</span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
            Nenhuma alteração em produção sem o teu OK
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold sm:text-sm",
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

        {tab === "audit" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-rose-500/30 bg-rose-950/30 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-rose-400">🔴 Crítico</p>
              <div className="mt-4 space-y-4">
                {AUDIT.critico.map((item) => (
                  <AuditCard key={item.id} {...item} tone="critico" />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/30 bg-orange-950/20 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                🟠 Importante
              </p>
              <div className="mt-4 space-y-4">
                {AUDIT.importante.map((item) => (
                  <AuditCard key={item.id} {...item} tone="importante" />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/25 bg-emerald-950/15 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                🟢 Melhoria
              </p>
              <div className="mt-4 space-y-4">
                {AUDIT.melhoria.map((item) => (
                  <AuditCard key={item.id} {...item} tone="melhoria" />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-950/50 to-amber-950/30 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                🏆 One Thing
              </p>
              <p className="mt-3 font-display text-xl font-black text-white sm:text-2xl">
                {AUDIT.oneThing}
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Aguardo a tua autorização explícita antes de modificar o portal em produção ou o
                código deployado em moz-sistafe.vercel.app. Neste ambiente local já preparei o
                bloco AEO vs AEF e as copies — activar no deploy só com o teu OK.
              </p>
            </div>
          </div>
        )}

        {tab === "copy" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="font-display text-lg font-black text-white">Porque a copy é forte</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Começa na dor (processo trava / documento volta / pagamento atrasa).</li>
                <li>• Faz uma pergunta de estatuto profissional (AEO vs AEF).</li>
                <li>• Oferece prova concreta + link + gratuito no telemóvel.</li>
                <li>
                  • Ajuste de credibilidade: evitar «a maioria não sabe» e «cada decreto» como facto
                  sem evidência.
                </li>
              </ul>
            </div>

            <CopyBlock
              title="Copy lapidada (Facebook / LinkedIn)"
              text={COPY_LAPIDADA}
              onCopy={() => onCopy(COPY_LAPIDADA, "Copy lapidada")}
              onDownload={() => {
                downloadText("copy_moz_sistafe_lapidada.txt", COPY_LAPIDADA);
                setToast("Ficheiro descarregado");
              }}
            />
            <CopyBlock
              title="Copy curta (WhatsApp / SMS)"
              text={COPY_CURTA_WA}
              onCopy={() => onCopy(COPY_CURTA_WA, "Copy WhatsApp")}
              onDownload={() => downloadText("copy_whatsapp.txt", COPY_CURTA_WA)}
            />
            <CopyBlock
              title="Hook AEO vs AEF (stories / imagem)"
              text={COPY_HOOK_AEO_AEF}
              onCopy={() => onCopy(COPY_HOOK_AEO_AEF, "Hook AEO/AEF")}
              onDownload={() => downloadText("hook_aeo_aef.txt", COPY_HOOK_AEO_AEF)}
            />
          </div>
        )}

        {tab === "aeo" && (
          <div className="space-y-6">
            <p className="text-sm text-slate-400">
              Texto canónico proposto para o portal (alinhado a /perfis em produção). Confirmar
              sempre no manual CEDSIF da unidade.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <ProfileCard side="aeo" data={AEO_AEF.aeo} />
              <ProfileCard side="aef" data={AEO_AEF.aef} />
            </div>
            <div className="rounded-2xl border border-violet-500/25 bg-violet-950/25 p-5">
              <p className="text-sm font-semibold text-violet-100">{AEO_AEF.rule}</p>
            </div>
            <button
              type="button"
              onClick={() =>
                onCopy(
                  `${COPY_HOOK_AEO_AEF}\n\nRegra: ${AEO_AEF.rule}`,
                  "Bloco AEO/AEF",
                )
              }
              className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-5 py-2.5 text-sm font-bold text-black"
            >
              <Copy size={16} /> Copiar bloco canónico
            </button>
          </div>
        )}

        {tab === "books" && (
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl font-black text-amber-100">
                {BOOKS_8020.mandino.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {BOOKS_8020.mandino.author} · {BOOKS_8020.mandino.essence}
              </p>
              <div className="mt-5 space-y-3">
                {BOOKS_8020.mandino.scrolls.map((s) => (
                  <article
                    key={s.n}
                    className="rounded-2xl border border-amber-500/15 bg-white/[0.03] p-4 sm:p-5"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Pergaminho {s.n}
                    </p>
                    <h3 className="mt-1 font-bold text-white">{s.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{s.core}</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <p className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100">
                        <strong>UGEA:</strong> {s.ugea}
                      </p>
                      <p className="rounded-xl bg-violet-500/10 px-3 py-2 text-xs text-violet-100">
                        <strong>Founder:</strong> {s.founder}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
                <h3 className="flex items-center gap-2 font-bold text-amber-100">
                  <Sparkles size={16} /> 80/20 de vendas (Mandino → portal)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {BOOKS_8020.mandino.sales8020.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black text-sky-100">
                {BOOKS_8020.babylon.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {BOOKS_8020.babylon.author} · {BOOKS_8020.babylon.essence}
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {BOOKS_8020.babylon.laws.map((l) => (
                  <article
                    key={l.name}
                    className="rounded-2xl border border-sky-500/20 bg-sky-950/15 p-5"
                  >
                    <h3 className="font-bold text-sky-100">{l.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{l.core}</p>
                    <p className="mt-3 text-sm text-slate-300">{l.apply}</p>
                  </article>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold text-white">Verdades de ouro → e-SISTAFE</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {BOOKS_8020.babylon.ugeaMoneyTruths.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>
            </section>

            <button
              type="button"
              onClick={() => {
                const txt = `80/20 MANDINO + BABILÓNIA × MOZ-SISTAFE\n\n${BOOKS_8020.mandino.sales8020.join("\n")}\n\n${BOOKS_8020.babylon.ugeaMoneyTruths.join("\n")}`;
                downloadText("8020_mandino_babilonia_sistafe.txt", txt);
                setToast("80/20 descarregado");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black"
            >
              <Download size={16} /> Descarregar 80/20
            </button>
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

function AuditCard({
  title,
  observado,
  risco,
  sugestao,
  tone,
}: {
  title: string;
  observado: string;
  risco?: string;
  sugestao: string;
  tone: "critico" | "importante" | "melhoria";
}) {
  const border =
    tone === "critico"
      ? "border-rose-500/20"
      : tone === "importante"
        ? "border-orange-500/20"
        : "border-emerald-500/20";
  return (
    <article className={cn("rounded-2xl border bg-black/20 p-4 sm:p-5", border)}>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
        Observado
      </p>
      <p className="mt-1 text-sm text-slate-300">{observado}</p>
      {risco && (
        <>
          <p className="mt-3 text-xs font-bold uppercase tracking-wider text-rose-400/80">
            Risco
          </p>
          <p className="mt-1 text-sm text-slate-300">{risco}</p>
        </>
      )}
      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-sky-400/80">
        Sugestão (não aplicada)
      </p>
      <p className="mt-1 text-sm text-slate-300">{sugestao}</p>
    </article>
  );
}

function CopyBlock({
  title,
  text,
  onCopy,
  onDownload,
}: {
  title: string;
  text: string;
  onCopy: () => void;
  onDownload: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-bold text-white">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-black"
          >
            <Copy size={12} /> Copiar
          </button>
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-white"
          >
            <Download size={12} /> .txt
          </button>
        </div>
      </div>
      <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-black/40 p-4 text-xs leading-relaxed text-slate-300">
        {text}
      </pre>
    </div>
  );
}

function ProfileCard({
  side,
  data,
}: {
  side: "aeo" | "aef";
  data: (typeof AEO_AEF)["aeo"];
}) {
  const color = side === "aeo" ? "border-sky-500/30" : "border-emerald-500/30";
  const badge = side === "aeo" ? "bg-sky-500/15 text-sky-300" : "bg-emerald-500/15 text-emerald-300";
  return (
    <article className={cn("rounded-3xl border bg-white/[0.03] p-6", color)}>
      <span className={cn("rounded-md px-2 py-1 text-xs font-black", badge)}>{data.sigla}</span>
      <h3 className="mt-3 font-display text-xl font-black text-white">{data.nome}</h3>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-400">Pode fazer</p>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
        {data.faz.map((x) => (
          <li key={x}>✓ {x}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-rose-400">Não deve</p>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
        {data.naoFaz.map((x) => (
          <li key={x}>✕ {x}</li>
        ))}
      </ul>
    </article>
  );
}
