/** Núcleo operativo — Carta 27/08/2026 · activado nesta conversa */

export const FOUNDER_OS_ACTIVE = true;

export type KnowledgeClass =
  | "FACT"
  | "EVIDENCE"
  | "INFERENCE"
  | "HYPOTHESIS"
  | "UNKNOWN"
  | "ASSUMPTION";

export const KNOWLEDGE_LEGEND: Record<KnowledgeClass, string> = {
  FACT: "Dado estabelecido e verificável (ex.: Lei 14/2020 existe)",
  EVIDENCE: "Prova observável (screenshot, BR, log, commit)",
  INFERENCE: "Conclusão lógica a partir de factos/evidências",
  HYPOTHESIS: "Afirmação a testar — ainda não validada",
  UNKNOWN: "Não sei — não inventar",
  ASSUMPTION: "Premissa não demonstrada — declarar explicitamente",
};

export const ECOSYSTEM = {
  owner: "Joaquim Eugénio Machava",
  whatsapp: "+258 84 489 8420",
  pay: "+258 87 048 8008",
  github: "joaquimeugeniomachava-maker/irma-moz",
  vercel: "joaquimeugeniomachava-4349s-projects",
  date: "2026-08-27",
  projects: [
    {
      id: "cv-maker",
      nome: "CV Maker MOZ",
      preco: "50 MZN",
      status: "PRIORIDADE · correcção/implantação",
      dor: "Jovens sem CV decente e barato",
    },
    {
      id: "confia",
      nome: "Confia MZ",
      preco: "500 MZN/mês",
      status: "PARK até CV gerar evidência de caixa",
      dor: "Confiança em negócios locais",
    },
    {
      id: "keyhouse",
      nome: "KeyHouse Properties",
      preco: "5% comissão",
      status: "PARK · não construir antes de validar CV",
      dor: "Match imobiliário MZ",
    },
    {
      id: "sistafe",
      nome: "MOZ-SISTAFE Manual",
      preco: "Grátis + manuais pagos",
      status: "CAPÍTULO FECHADO · deploy + distribuição",
      dor: "Clareza e-SISTAFE / AP",
    },
  ],
};

export const RED_TEAM_CARTA = [
  {
    risk: "URL moz-sistafe = Manual SISTAFE, não CV Maker",
    class: "FACT" as KnowledgeClass,
    fix: "CV Maker deve ser rota /cv ou subdomínio — não substituir o manual inteiro.",
  },
  {
    risk: "Meta 75.000 MZN/mês no mês 1 sem evidência de conversão",
    class: "HYPOTHESIS" as KnowledgeClass,
    fix: "Meta de semana 1 = 10 CVs pagos ou 10 tentativas medidas — não a meta de mês.",
  },
  {
    risk: "3 produtos em 3 semanas (CV + Confia + KeyHouse)",
    class: "ASSUMPTION" as KnowledgeClass,
    fix: "Viola ONE THING. Sequência: CV → caixa → só depois Confia MVP.",
  },
  {
    risk: "PayPal + Supabase + automação antes de 1 venda M-Pesa",
    class: "INFERENCE" as KnowledgeClass,
    fix: "Stack mínima: frontend + WhatsApp + M-Pesa manual. Supabase quando houver volume.",
  },
];
