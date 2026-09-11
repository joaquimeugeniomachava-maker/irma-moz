/**
 * Contactos oficiais — Carta de Intenção 27/08/2026
 * WhatsApp ≠ necessariamente o mesmo número de pagamento
 */
export const PAY = {
  nome: "Joaquim Eugénio Machava",
  marca: "MOZ-SISTAFE",
  portal: "https://moz-sistafe.vercel.app",
  /** Contacto / pedidos */
  whatsappDisplay: "+258 84 489 8420",
  whatsapp: "258844898420",
  /** Pagamento M-Pesa e e-Mola (mesmo número na Carta) */
  mpesa: {
    label: "M-Pesa",
    number: "844898420",
    display: "+258 84 489 8420",
  },
  emola: {
    label: "e-Mola",
    number: "870488008",
    display: "+258 87 048 8008",
  },
  nota: "Após o pagamento, envie o comprovativo por WhatsApp com o seu nome e o produto.",
};

export const OFERTAS = [
  {
    id: "cv-maker",
    nome: "CV Maker MOZ (PDF sem marca d'água)",
    preco: 50,
    tipo: "Digital",
    desc: "Currículo profissional em PDF. Prévia grátis com marca d'água; após pagamento M-Pesa/e-Mola, PDF limpo.",
    entrega: "Código de desbloqueio ou PDF por WhatsApp após comprovativo",
  },
  {
    id: "manual-ugea",
    nome: "Manual Prático UGEA (PDF)",
    preco: 500,
    tipo: "Digital",
    desc: "Cabimento, AEO vs AEF, erros comuns e checklist diária.",
    entrega: "PDF por WhatsApp em até 24h após comprovativo",
  },
  {
    id: "kit-erros",
    nome: "Kit 10 Erros + Correcções (PDF)",
    preco: 300,
    tipo: "Digital",
    desc: "Os erros que mais devolvem processos — e como evitá-los.",
    entrega: "PDF por WhatsApp em até 24h",
  },
  {
    id: "pacote-formacao",
    nome: "Sessão de formação (até 20 pessoas)",
    preco: 12000,
    tipo: "Serviço",
    desc: "1 dia: e-SISTAFE, perfis, ciclo da despesa — online ou presencial.",
    entrega: "Agendamento por WhatsApp",
  },
  {
    id: "consultoria",
    nome: "Revisão de 1 processo real",
    preco: 2500,
    tipo: "Serviço",
    desc: "Adenda, ajuste directo ou fluxo MEX — riscos + próximos passos.",
    entrega: "Parecer em 48–72h",
  },
];

export function waPedido(produto: string, preco: number) {
  const text = encodeURIComponent(
    `Olá Joaquim — quero comprar:\n*${produto}*\nValor: ${preco} MT\n\nVou pagar por M-Pesa/e-Mola: ${PAY.mpesa.display}\n\nNome:\nJá enviei comprovativo: Sim / Não`,
  );
  return `https://wa.me/${PAY.whatsapp}?text=${text}`;
}

export function waSuporte() {
  const text = encodeURIComponent(
    "Olá Joaquim — vim do MOZ-SISTAFE. Preciso de ajuda com:",
  );
  return `https://wa.me/${PAY.whatsapp}?text=${text}`;
}

export function waCvUnlock(nome: string) {
  const text = encodeURIComponent(
    `Olá Joaquim — paguei o CV Maker MOZ (50 MT).\nNome no CV: ${nome || "(indicar)"}\nComprovativo: (anexar)\nM-Pesa/e-Mola: ${PAY.mpesa.display}`,
  );
  return `https://wa.me/${PAY.whatsapp}?text=${text}`;
}

export const FLUXO_PASSOS = [
  {
    n: 1,
    t: "Escolhe o produto",
    d: "CV 50 MT, manuais, formação ou revisão.",
  },
  {
    n: 2,
    t: "Paga M-Pesa ou e-Mola",
    d: `Número: ${PAY.mpesa.display} — valor exacto do produto.`,
  },
  {
    n: 3,
    t: "Envia comprovativo no WhatsApp",
    d: `WhatsApp ${PAY.whatsappDisplay} — nome + produto + captura.`,
  },
  {
    n: 4,
    t: "Recebes a entrega",
    d: "PDF limpo, código de desbloqueio ou agendamento.",
  },
];
