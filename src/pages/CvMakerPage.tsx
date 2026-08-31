import { useMemo, useRef, useState, type ReactNode } from "react";
import {
  Copy,
  Download,
  Eye,
  FileText,
  Lock,
  MessageCircle,
  Printer,
  Unlock,
} from "lucide-react";
import { PAY, waCvUnlock } from "../data/pay";
import { PageHero, Section } from "../components/ui";
import { cn } from "../utils/cn";

type CvData = {
  nome: string;
  titulo: string;
  telefone: string;
  email: string;
  cidade: string;
  resumo: string;
  experiencia: string;
  formacao: string;
  competencias: string;
  idiomas: string;
};

const EMPTY: CvData = {
  nome: "",
  titulo: "",
  telefone: "",
  email: "",
  cidade: "Maputo",
  resumo: "",
  experiencia: "",
  formacao: "",
  competencias: "",
  idiomas: "Português",
};

/** Código simples pós-pagamento (o Joaquim envia após ver comprovativo) */
const UNLOCK_PREFIX = "MOZCV-";

function lines(text: string) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export function CvMakerPage() {
  const [data, setData] = useState<CvData>(EMPTY);
  const [paid, setPaid] = useState(false);
  const [code, setCode] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const filled = useMemo(() => data.nome.trim().length > 2, [data.nome]);

  function set<K extends keyof CvData>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function tryUnlock() {
    const c = code.trim().toUpperCase();
    // Aceita código que o dono envia: MOZCV-XXXX ou palavra PAGO-MOZ (formação/teste)
    if (c.startsWith(UNLOCK_PREFIX) && c.length >= 10) {
      setPaid(true);
      flash("CV desbloqueado — sem marca d'água");
      return;
    }
    if (c === "PAGO-MOZ" || c === "TESTE-SOCIO") {
      setPaid(true);
      flash("Modo teste: desbloqueado");
      return;
    }
    flash("Código inválido. Pague e envie comprovativo no WhatsApp.");
  }

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2500);
  }

  async function copyPay() {
    try {
      await navigator.clipboard.writeText(PAY.mpesa.number);
      flash("Número de pagamento copiado");
    } catch {
      flash(PAY.mpesa.display);
    }
  }

  function printPdf() {
    window.print();
  }

  return (
    <>
      <PageHero
        accent="amber"
        eyebrow="Ecossistema · CV Maker MOZ · 50 MZN"
        title="Currículo profissional em minutos"
        subtitle="Prévia grátis com marca d'água. Após M-Pesa/e-Mola, PDF limpo — sem PRÉVIA."
      />

      <Section className="space-y-8 pb-24">
        {/* Pagamento */}
        <div className="grid gap-4 rounded-3xl border border-amber-500/30 bg-amber-950/20 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Preço
            </p>
            <p className="mt-1 font-display text-4xl font-black text-amber-100">50 MT</p>
            <p className="mt-2 text-sm text-slate-400">
              M-Pesa ou e-Mola:{" "}
              <strong className="text-white">{PAY.mpesa.display}</strong>
            </p>
            <p className="mt-1 text-sm text-slate-400">
              WhatsApp (comprovativo):{" "}
              <strong className="text-white">{PAY.whatsappDisplay}</strong>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyPay}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black"
              >
                <Copy size={14} /> Copiar {PAY.mpesa.number}
              </button>
              <a
                href={waCvUnlock(data.nome)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-2 text-xs font-bold text-emerald-100"
              >
                <MessageCircle size={14} /> Enviar comprovativo
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-white">
              {paid ? (
                <Unlock className="text-emerald-400" size={18} />
              ) : (
                <Lock className="text-amber-400" size={18} />
              )}
              {paid ? "Desbloqueado — sem PRÉVIA" : "Bloqueado — marca d'água PRÉVIA"}
            </p>
            {!paid && (
              <>
                <p className="mt-2 text-xs text-slate-400">
                  Após pagar 50 MT, envie o comprovativo no WhatsApp. Receberá um código{" "}
                  <span className="font-mono text-amber-200">MOZCV-…</span> para tirar a marca
                  d&apos;água.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Cole o código MOZCV-…"
                    className="min-w-[12rem] flex-1 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="button"
                    onClick={tryUnlock}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white"
                  >
                    Desbloquear
                  </button>
                </div>
              </>
            )}
            {paid && (
              <button
                type="button"
                onClick={printPdf}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-bold text-black"
              >
                <Printer size={16} /> Guardar / Imprimir PDF
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="space-y-4 print:hidden">
            <h2 className="flex items-center gap-2 font-display text-lg font-black text-white">
              <FileText size={18} className="text-amber-400" /> Os seus dados
            </h2>
            <Field label="Nome completo" value={data.nome} onChange={(v) => set("nome", v)} />
            <Field
              label="Título profissional"
              value={data.titulo}
              onChange={(v) => set("titulo", v)}
              placeholder="Ex: Técnico de administração / Contabilista"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Telefone"
                value={data.telefone}
                onChange={(v) => set("telefone", v)}
                placeholder="+258 8…"
              />
              <Field label="Email" value={data.email} onChange={(v) => set("email", v)} />
            </div>
            <Field label="Cidade" value={data.cidade} onChange={(v) => set("cidade", v)} />
            <Field
              label="Resumo profissional"
              value={data.resumo}
              onChange={(v) => set("resumo", v)}
              textarea
              placeholder="3–4 frases sobre o seu percurso e objectivo."
            />
            <Field
              label="Experiência (uma por linha)"
              value={data.experiencia}
              onChange={(v) => set("experiencia", v)}
              textarea
              placeholder={"2022-2024 · Empresa X · Função\nRealização 1\nRealização 2"}
            />
            <Field
              label="Formação (uma por linha)"
              value={data.formacao}
              onChange={(v) => set("formacao", v)}
              textarea
              placeholder="2020 · Licenciatura · Universidade"
            />
            <Field
              label="Competências (separadas por vírgula)"
              value={data.competencias}
              onChange={(v) => set("competencias", v)}
              placeholder="Excel, e-SISTAFE, atendimento, ..."
            />
            <Field label="Idiomas" value={data.idiomas} onChange={(v) => set("idiomas", v)} />
          </div>

          {/* Preview */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-2 print:hidden">
              <h2 className="flex items-center gap-2 font-display text-lg font-black text-white">
                <Eye size={18} className="text-sky-400" /> Pré-visualização
              </h2>
              <button
                type="button"
                disabled={!filled}
                onClick={printPdf}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold",
                  filled
                    ? "bg-white/10 text-white"
                    : "cursor-not-allowed bg-white/5 text-slate-600",
                )}
              >
                <Download size={14} /> {paid ? "PDF limpo" : "PDF com PRÉVIA"}
              </button>
            </div>

            <div
              ref={previewRef}
              id="cv-print-area"
              className="relative overflow-hidden rounded-sm border border-slate-300 bg-white text-slate-900 shadow-xl"
            >
              {!paid && (
                <div
                  className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
                  aria-hidden
                >
                  <p className="rotate-[-28deg] select-none text-5xl font-black tracking-[0.3em] text-rose-600/25 sm:text-6xl">
                    PRÉVIA
                  </p>
                </div>
              )}
              {!paid && (
                <div className="absolute right-3 top-3 z-20 rounded bg-rose-600 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-white print:block">
                  PRÉVIA — pague 50 MT
                </div>
              )}

              <div className="relative z-0 p-6 sm:p-8">
                <header className="border-b-2 border-slate-800 pb-4">
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    {data.nome || "O seu nome"}
                  </h1>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {data.titulo || "Título profissional"}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    {[data.telefone, data.email, data.cidade].filter(Boolean).join(" · ") ||
                      "Telefone · Email · Cidade"}
                  </p>
                </header>

                {data.resumo && (
                  <CvBlock title="Perfil">{data.resumo}</CvBlock>
                )}

                {lines(data.experiencia).length > 0 && (
                  <CvBlock title="Experiência">
                    <ul className="list-disc space-y-1 pl-4">
                      {lines(data.experiencia).map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </CvBlock>
                )}

                {lines(data.formacao).length > 0 && (
                  <CvBlock title="Formação">
                    <ul className="list-disc space-y-1 pl-4">
                      {lines(data.formacao).map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </CvBlock>
                )}

                {data.competencias && (
                  <CvBlock title="Competências">
                    <p>{data.competencias}</p>
                  </CvBlock>
                )}

                {data.idiomas && (
                  <CvBlock title="Idiomas">
                    <p>{data.idiomas}</p>
                  </CvBlock>
                )}

                <p className="mt-8 text-[9px] text-slate-400">
                  Gerado via CV Maker MOZ · {PAY.portal} · {PAY.nome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-xl print:hidden">
          {toast}
        </div>
      )}

      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #cv-print-area, #cv-print-area * { visibility: visible !important; }
          #cv-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
            border: none !important;
            box-shadow: none !important;
          }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "mt-1 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-amber-400";
  return (
    <label className="block text-xs font-semibold text-slate-400">
      {label}
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={cls + " resize-y"}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}

function CvBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-5">
      <h2 className="border-b border-slate-300 pb-1 text-xs font-black uppercase tracking-wider text-slate-800">
        {title}
      </h2>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}
