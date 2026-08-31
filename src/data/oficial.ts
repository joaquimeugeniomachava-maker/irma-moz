/**
 * Fontes oficiais da República de Moçambique
 * — Emblema: representação de referência (Wikimedia Commons / uso institucional)
 * — Direito escrito vigente: Boletim da República via Imprensa Nacional de Moçambique, E.P.
 */

export const REPUBLICA = {
  nome: "República de Moçambique",
  emblemaLocal: "/emblema-mocambique.svg",
  /** Arte de referência no Wikimedia Commons (Emblem of Mozambique) */
  emblemaCommons:
    "https://commons.wikimedia.org/wiki/File:Emblem_of_Mozambique.svg",
  emblemaCommonsFile:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Emblem_of_Mozambique.svg/240px-Emblem_of_Mozambique.svg.png",
  notaEmblema:
    "O emblema identifica o Estado. Este portal é material de apoio formativo — não substitui publicação oficial no Boletim da República.",
};

export const IMPRENSA_NACIONAL = {
  nome: "Imprensa Nacional de Moçambique, E.P. (INM, E.P.)",
  sigla: "INM",
  missao:
    "Impressão, distribuição e divulgação do Boletim da República — mecanismo competente para leis, decretos e actos de publicação obrigatória.",
  site: "https://www.inm.gov.mz/",
  boletim: "https://www.inm.gov.mz/pt-br/bulletin",
  /** Espelho / acesso frequente no Portal do Governo */
  portalGovernoBR:
    "https://www.portaldogoverno.gov.mz/por/Governo/Legislacao/Boletins-da-Republica",
  serieNota: {
    I: "Leis da AR, resoluções, decretos, convenções e actos principais do Estado",
    II: "Actos administrativos e publicações da II Série",
    III: "Outros actos de publicação obrigatória (III Série)",
  },
};

export const FONTES_OFICIAIS = [
  {
    nome: "Imprensa Nacional — Boletim da República",
    url: IMPRENSA_NACIONAL.boletim,
    papel: "Fonte primária de decretos e leis publicados",
    prioridade: 1,
  },
  {
    nome: "Imprensa Nacional — site",
    url: IMPRENSA_NACIONAL.site,
    papel: "Instituição editora do BR",
    prioridade: 1,
  },
  {
    nome: "Portal do Governo — Boletins da República",
    url: IMPRENSA_NACIONAL.portalGovernoBR,
    papel: "Acesso público a BR (espelho / navegação)",
    prioridade: 2,
  },
  {
    nome: "CEDSIF, IP",
    url: "https://www.cedsif.gov.mz/",
    papel: "e-SISTAFE e sistemas de finanças",
    prioridade: 2,
  },
  {
    nome: "UFSA",
    url: "https://www.ufsa.gov.mz/",
    papel: "Supervisão das aquisições",
    prioridade: 2,
  },
  {
    nome: "MEF",
    url: "https://www.mef.gov.mz/",
    papel: "Política orçamental e financeira",
    prioridade: 2,
  },
];

/** Protocolo de actualização normativa do portal */
export const PROTOCOLO_BR = {
  titulo: "Como o sistema se actualiza (fonte = BR / INM)",
  principio:
    "Nenhuma norma entra como ✅ VERIFICADO no MOZ-SISTAFE sem publicação no Boletim da República (Imprensa Nacional) ou confirmação em fonte oficial citável.",
  passos: [
    {
      n: 1,
      t: "Monitorar o BR",
      d: "Consultar periodicamente inm.gov.mz (Boletim da República) — I, II e III Séries.",
    },
    {
      n: 2,
      t: "Identificar o diploma",
      d: "Anotar: tipo (Lei/Decreto), número, data, série e número do BR, páginas se possível.",
    },
    {
      n: 3,
      t: "Ler o dispositivo",
      d: "Extrair o que muda para UGEA / e-SISTAFE / contratação / património — sem inventar artigos.",
    },
    {
      n: 4,
      t: "Classificar confiança",
      d: "✅ se BR/INM confirmado · ⚠️ se só notícia ou resumo · ❓ se ambíguo",
    },
    {
      n: 5,
      t: "Actualizar o portal + base_confirmada",
      d: "Legislação, Mega Brain, MESTRE (Ollama) e copy — a mesma memória em todos os canais.",
    },
    {
      n: 6,
      t: "Registar a fonte",
      d: "Sempre link ou referência BR (ex.: BR I Série n.º … de …). O portal aponta para a INM; não substitui o texto oficial.",
    },
  ],
  checklistSemanal: [
    "Abri inm.gov.mz / boletim esta semana?",
    "Há decreto ou lei nova sobre finanças, contratação ou património?",
    "Actualizei a página Legislação e o estado ✅/⚠️?",
    "O MESTRE / base_confirmada precisa da mesma linha?",
  ],
};

export const DIPLOMAS_TRACK = [
  {
    diploma: "Lei n.º 14/2020",
    tema: "SISTAFE — seis subsistemas, CUT",
    fonte: "Boletim da República",
    estado: "verificado" as const,
  },
  {
    diploma: "Decreto n.º 79/2022",
    tema: "Regulamento de Contratação Pública",
    fonte: "BR / INM — confirmar sempre o texto integral",
    estado: "verificado" as const,
  },
  {
    diploma: "Decreto n.º 46/2026",
    tema: "Alterações ao 79/2022 (formação 2026)",
    fonte: "Confirmar publicação no BR (INM) antes de parecer formal",
    estado: "nao_verificado" as const,
  },
  {
    diploma: "Decreto n.º 42/2018",
    tema: "Gestão patrimonial",
    fonte: "BR — confirmar artigos no texto oficial",
    estado: "verificado" as const,
  },
  {
    diploma: "Lei n.º 4/2022 (EGFAE)",
    tema: "Estatuto dos funcionários",
    fonte: "BR / MAEFP",
    estado: "verificado" as const,
  },
];
