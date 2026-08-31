/** Capítulo Contratação Pública — ENCERRADO · Próximos 3 pepinos */

export const CAPITULO_FECHADO = {
  id: "contratacao-publica",
  titulo: "Contratação Pública + Manual SISTAFE",
  estado: "ENCERRADO" as const,
  entregue: [
    "Portal MOZ-SISTAFE (consulta, perfis AEO/AEF, ciclo, erros, siglas)",
    "Mega Brain · 6 subsistemas · Lei 14/2020",
    "Decreto 79/2022 + 46/2026 · checklist UGEA",
    "Emblema · Imprensa Nacional · protocolo BR",
    "Loja M-Pesa / e-Mola + WhatsApp",
    "MESTRE3 anti-alucinação (Ollama)",
    "Copy social + Founder OS + ONE THING",
  ],
  naoFazerMais: [
    "Não redesenhar o portal do zero",
    "Não criar mestre4/5/6 esta semana",
    "Não expandir suíte de 20 testes sem uso real",
    "Não misturar CFO Hacker dentro do SISTAFE",
  ],
  manutencao:
    "Só reabrir este capítulo para: (1) deploy da versão nova, (2) update quando sair BR novo, (3) bug crítico reportado por utilizador.",
};

/**
 * 3 pepinos em paralelo — cada um com UMA alavanca.
 * Regra: 3 frentes OK se cada uma tiver dono de tempo separado (manhã/tarde/noite).
 */
export const TRES_PEPINOS = [
  {
    id: "p1",
    emoji: "📄",
    nome: "CV MAKER · 50 MT no ar",
    dor: "Carta 4.1: CV Maker é a prioridade de caixa. Contactos e PRÉVIA tinham de estar correctos.",
    oneThing:
      "CV Maker com WhatsApp 84 489 8420, pagamento 87 048 8008, marca d'água PRÉVIA até código MOZCV-…",
    porque:
      "Dor do jovem + 50 MT = teste de caixa mais barato do ecossistema. Confia/KeyHouse esperam evidência.",
    metricas: [
      "Página CV gera prévia com PRÉVIA",
      "Números Carta correctos na UI",
      "Desbloqueio remove PRÉVIA + print PDF",
    ],
    naoFazer: ["Não construir Confia MZ esta semana", "Não KeyHouse antes de 10 CVs pagos"],
    blocosTempo: "Bloco A · FEITO no builder · falta deploy",
    comandos: [
      "Menu CV Maker neste app",
      "Testar formulário + PRÉVIA",
      "Deploy para Vercel (rota / ou hash)",
      "1 venda teste com comprovativo real",
    ],
    cor: "amber",
  },
  {
    id: "p2",
    emoji: "🚀",
    nome: "DEPLOY · Ecossistema no ar",
    dor: "moz-sistafe.vercel.app ainda mostra o Manual antigo — CV e contactos novos não estão públicos.",
    oneThing:
      "Push + Vercel verde com Home + CV Maker + Loja + contactos da Carta.",
    porque: "Sem deploy, 50 MT e o manual novo não existem para o país.",
    metricas: [
      "GitHub main actualizado",
      "Vercel Success",
      "URL pública: CV + emblema + loja",
    ],
    naoFazer: ["Não features novas antes do verde", "Não apagar o manual SISTAFE"],
    blocosTempo: "Bloco B · 60–90 min",
    comandos: [
      "git push origin main (repo certo)",
      "Vercel joaquimeugeniomachava-4349s-projects",
      "Ctrl+F5 moz-sistafe.vercel.app",
    ],
    cor: "violet",
  },
  {
    id: "p3",
    emoji: "📣",
    nome: "DISTRIBUIÇÃO · 10 CVs / 10 manuais",
    dor: "Sem mensagens, zero caixa. Meta 75k/mês é HYPOTHESIS até haver evidência.",
    oneThing:
      "10 WhatsApps: 5 CV Maker (jovens) + 5 Manual SISTAFE (UGEA) — anotar respostas.",
    porque: "Valida os dois funis sem construir Confia/KeyHouse.",
    metricas: [
      "10 envios",
      "≥3 cliques ou respostas",
      "≥1 pagamento ou pedido sério",
    ],
    naoFazer: ["Não postar KeyHouse ainda", "Não prometer selo Ouro Confia"],
    blocosTempo: "Bloco C · 30–45 min",
    comandos: [
      "Copy CV 50 MT + número 87…",
      "Copy SISTAFE AEO/AEF",
      "Notepad feedback",
    ],
    cor: "sky",
  },
] as const;

export const REGRA_3_PEPINOS = {
  titulo: "Como atacar 3 de uma vez sem rebentar",
  texto:
    "Não são 3 prioridades iguais. São 3 blocos de tempo com 1 ONE THING cada. Se o dia só tiver 90 min: só Pepino 1. Se tiver 3 horas: 1 → 2 → 3. Nunca os três abertos na mesma hora.",
  sequenciaIdeal: [
    "Dia 1 manhã: DEPLOY (P1)",
    "Dia 1 tarde ou Dia 2: DISTRIBUIÇÃO (P2)",
    "Dia 2 ou 3: CFO SEO (P3)",
  ],
  auditoria:
    "No fim de cada bloco: checkbox PASS/FAIL. Só o FAIL volta amanhã. O resto fica estacionado.",
};
