import { useState, type ReactNode } from "react";
import {
  CheckCircle2,
  Copy,
  Eye,
  MessageCircle,
  Smartphone,
  Wallet,
} from "lucide-react";
import { FLUXO_PASSOS, OFERTAS, PAY, waPedido, waSuporte } from "../data/pay";
import { PageHero, Section } from "../components/ui";

export function LojaPage() {
  const [toast, setToast] = useState<string | null>(null);
  const [ref, setRef] = useState("");

  async function copyNum(num: string, label: string) {
    try {
      await navigator.clipboard.writeText(num);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = num;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setToast(`${label} copiado: ${num}`);
    window.setTimeout(() => setToast(null), 2200);
  }

  return (
    <>
      <PageHero
        accent="amber"
        eyebrow="Monetização · fluxo simples"
        title="Loja MOZ-SISTAFE"
        subtitle="Portal gratuito ensina. Produtos pagos aprofundam. Pagamento M-Pesa ou e-Mola + confirmação WhatsApp."
      />

      <Section className="space-y-10 pb-24">
        {/* Aviso honesto */}
        <div className="rounded-2xl border border-sky-500/25 bg-sky-950/20 p-5 text-sm leading-relaxed text-slate-300">
          <p className="font-bold text-sky-200">Como ganhas (fluxo realista em Moçambique)</p>
          <p className="mt-2">
            Ainda <strong className="text-white">não</strong> é pagamento 100% automático tipo
            cartão internacional. O fluxo fiável é:{" "}
            <strong className="text-white">cliente paga → envia comprovativo → tu entregas</strong>.
            Isso já é um sistema. Automação total (API M-Pesa) vem depois de haver volume.
          </p>
        </div>

        {/* Números de pagamento */}
        <div className="grid gap-4 sm:grid-cols-2">
          <PayCard
            icon={<Smartphone className="text-emerald-400" size={22} />}
            title="M-Pesa"
            display={PAY.mpesa.display}
            number={PAY.mpesa.number}
            onCopy={() => copyNum(PAY.mpesa.number, "M-Pesa")}
            tip="Transfere o valor exacto · nome do titular conforme o teu registo Vodacom"
          />
          <PayCard
            icon={<Wallet className="text-amber-400" size={22} />}
            title="e-Mola"
            display={PAY.emola.display}
            number={PAY.emola.number}
            onCopy={() => copyNum(PAY.emola.number, "e-Mola")}
            tip="Alternativa Movitel · mesmo valor do produto"
          />
        </div>

        <p className="text-center text-sm text-slate-400">
          Beneficiário: <strong className="text-white">{PAY.nome}</strong>
          <span className="mx-2 text-slate-600">·</span>
          Confirmação:{" "}
          <a
            href={waSuporte()}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-emerald-400 underline-offset-2 hover:underline"
          >
            WhatsApp {PAY.whatsappDisplay}
          </a>
        </p>

        {/* Fluxo 4 passos */}
        <div>
          <h2 className="mb-4 font-display text-xl font-black text-white">
            Fluxo de venda (4 passos)
          </h2>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FLUXO_PASSOS.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-black text-amber-300">
                  {s.n}
                </span>
                <p className="mt-3 font-bold text-white">{s.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Produtos */}
        <div>
          <h2 className="mb-4 font-display text-xl font-black text-white">Ofertas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {OFERTAS.map((p) => (
              <article
                key={p.id}
                className="flex flex-col rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-950/30 to-transparent p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-bold text-slate-400">
                      {p.tipo}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-amber-100">
                      {p.nome}
                    </h3>
                  </div>
                  <p className="shrink-0 font-black text-amber-300">
                    {p.preco.toLocaleString("pt-MZ")} MT
                  </p>
                </div>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.desc}</p>
                <p className="mt-3 text-xs text-slate-500">Entrega: {p.entrega}</p>
                <a
                  href={waPedido(p.nome, p.preco)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
                >
                  <MessageCircle size={18} /> Comprar via WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Referência opcional */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="font-bold text-white">Dica de organização (teu lado)</h3>
          <p className="mt-2 text-sm text-slate-400">
            No comprovativo pede: nome + produto. No telemóvel cria pasta WhatsApp «Vendas
            MOZ-SISTAFE». Opcional — código de referência que o cliente pode escrever na transferência:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value.toUpperCase())}
              placeholder="Ex: UGEA-JOAQUIM"
              className="rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="button"
              onClick={() => copyNum(ref || "MOZ-SISTAFE", "Referência")}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white"
            >
              Copiar referência
            </button>
          </div>
        </div>

        {/* Acessibilidade */}
        <div className="rounded-2xl border border-violet-500/25 bg-violet-950/20 p-5">
          <div className="flex items-start gap-3">
            <Eye className="mt-0.5 shrink-0 text-violet-300" size={22} />
            <div>
              <h3 className="font-bold text-violet-100">Letras grandes / vista cansada</h3>
              <p className="mt-2 text-sm text-slate-300">
                No topo do site há o botão <strong className="text-white">A+</strong> (Letras
                grandes). Activa para aumentar texto em todo o portal — útil em formação e para
                quem tem dificuldade em ler letras pequenas no telemóvel.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-400">
                <li>• A+ = modo leitura ampliada</li>
                <li>• A = tamanho normal</li>
                <li>• O telemóvel também permite zoom com dois dedos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5 text-sm text-slate-300">
          <p className="flex items-center gap-2 font-bold text-emerald-200">
            <CheckCircle2 size={18} /> O que é “automático” agora vs depois
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <strong className="text-white">Agora:</strong> botão WhatsApp pré-preenchido + números
              visíveis + tu confirmas comprovativo (fluxo manual fiável).
            </li>
            <li>
              <strong className="text-white">Depois (quando houver volume):</strong> API M-Pesa /
              pagamento na app, PDF automático por link, painel de pedidos na base de dados.
            </li>
          </ul>
        </div>
      </Section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}

function PayCard({
  icon,
  title,
  display,
  number,
  onCopy,
  tip,
}: {
  icon: ReactNode;
  title: string;
  display: string;
  number: string;
  onCopy: () => void;
  tip: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <p className="mt-4 font-display text-2xl font-black tracking-wide text-amber-200 sm:text-3xl">
        {display}
      </p>
      <p className="mt-1 font-mono text-sm text-slate-500">{number}</p>
      <p className="mt-3 text-xs text-slate-400">{tip}</p>
      <button
        type="button"
        onClick={onCopy}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/15"
      >
        <Copy size={14} /> Copiar número
      </button>
    </div>
  );
}
