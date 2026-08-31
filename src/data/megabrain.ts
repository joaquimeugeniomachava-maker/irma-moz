export type Confidence = "verificado" | "nao_verificado" | "inconclusivo";

export const MEGA = {
  title: "All-in-One Mega Brain Pack",
  subtitle: "Lei n.º 14/2020 · Seis subsistemas · Ciclo de um Metical Público",
  principle:
    "Planeamento → Contratação → Execução digital. Sem cabimento prévio no e-SISTAFE não há despesa regular.",
};

/** Os 6 subsistemas — Lei 14/2020 (SAE Art. 52) */
export const SUBSISTEMAS_6 = [
  {
    id: "spo",
    sigla: "SPO",
    nome: "Subsistema de Planeamento e Orçamento",
    emoji: "📋",
    cor: "sky",
    objetivo: "Preparar e monitorizar o PESOE — como o dinheiro será distribuído.",
    modulo: "MPO — Planificação e Orçamentação",
    risco:
      "Credibilidade orçamental: despesas reais fora do sistema não batem com o planeado.",
    casa: "A lista de compras da casa grande",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020",
    aliases: ["SPO", "Planeamento e Orçamento"],
  },
  {
    id: "ste",
    sigla: "STE",
    nome: "Subsistema do Tesouro Público",
    emoji: "🏦",
    cor: "emerald",
    objetivo: "Gerir disponibilidades e assegurar a unidade de tesouraria (CUT).",
    modulo: "MEX (pagamentos via CUT) · MDP (dívida pública)",
    risco:
      "Repatriados e receitas fora da CUT impedem previsão de caixa e uso legal dos fundos.",
    casa: "O mealheiro gigante no Banco de Moçambique",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020",
    aliases: ["STE", "STP", "Tesouro Público", "CUT"],
  },
  {
    id: "scp",
    sigla: "SCP",
    nome: "Subsistema de Contabilidade Pública",
    emoji: "📚",
    cor: "violet",
    objetivo: "Registar todos os actos e factos da gestão pública (PBCP → IPSAS).",
    modulo: "MEX (execução/liquidação) · consolidação de contas",
    risco:
      "Passivos ocultos: contratos sem registo impedem classificação correcta e criam dívida invisível.",
    casa: "O livro onde se anota cada metical",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020",
    aliases: ["SCP", "Contabilidade Pública", "PBCP", "IPSAS"],
  },
  {
    id: "spe",
    sigla: "SPE",
    nome: "Subsistema do Património do Estado",
    emoji: "🏛",
    cor: "amber",
    objetivo: "Gerir bens móveis e imóveis, inventário e abate.",
    modulo: "MPE — Gestão do Património",
    risco:
      "Depreciação acelerada (~15%/ano em bens sem gestão). Alienação célere de perecíveis protege o erário.",
    casa: "Etiquetas em tudo o que a casa compra",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020 · gestão patrimonial (confirmar diploma de alienação no BR)",
    aliases: ["SPE", "Património", "MPE"],
  },
  {
    id: "sci",
    sigla: "SCI",
    nome: "Subsistema de Controlo Interno",
    emoji: "🔍",
    cor: "rose",
    objetivo: "Assegurar legalidade, economia e eficiência do uso dos recursos.",
    modulo: "MAI · evolução para auditoria em tempo real no e-SISTAFE",
    risco:
      "Baixa eficácia coerciva: relatórios IGF/TA sem consequência disciplinar automática.",
    casa: "O detetive / árbitro da família",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020",
    aliases: ["SCI", "SAI", "Controlo Interno", "Auditoria"],
  },
  {
    id: "sae",
    sigla: "SAE",
    nome: "Subsistema de Aquisições do Estado",
    emoji: "🛒",
    cor: "lime",
    objetivo:
      "Autonomia e transparência nas compras (Art. 52, Lei 14/2020) — contratos e fornecedores.",
    modulo: "e-Acordos / contratos electrónicos · UFSA (fornecedores)",
    risco:
      "Compromissos manuais sem cabimento digital = maior causa de ilegalidade e dívida. Conflitos de interesse no UFSA.",
    casa: "Escolher a melhor loja com o dinheiro de todos",
    estado: "verificado" as Confidence,
    lei: "Lei n.º 14/2020, Art. 52",
    aliases: ["SAE", "Aquisições", "Contratação Pública", "NOVO"],
    novo: true,
  },
];

/** Ciclo de um Metical Público — âncora visual */
export const METICAL_CYCLE = [
  {
    n: 1,
    fase: "Planeamento",
    sub: "SPO / MPO",
    titulo: "PESOE & necessidade",
    desc: "Lista o que o país/unidade precisa. Sem plano, o gasto vira confusão.",
  },
  {
    n: 2,
    fase: "Aquisição",
    sub: "SAE / UGEA / UFSA",
    titulo: "Contratar com regras",
    desc: "Modalidade legal, fornecedor válido, zero compromisso manual.",
  },
  {
    n: 3,
    fase: "Cabimento",
    sub: "MEX + SPO",
    titulo: "Há verba?",
    desc: "Dotação e cabimento digital antes de assinar. Art. 14 e 30 — Lei 14/2020.",
  },
  {
    n: 4,
    fase: "Empenho",
    sub: "MEX",
    titulo: "Reservar o metical",
    desc: "Nota de empenho: o dinheiro fica comprometido de forma rastreável.",
  },
  {
    n: 5,
    fase: "Receber",
    sub: "MEX + SPE/MPE",
    titulo: "Conferir & etiquetar",
    desc: "Bem/serviço ok + registo patrimonial. Evita ferrugem e desaparecimento.",
  },
  {
    n: 6,
    fase: "Liquidar",
    sub: "MEX / SCP",
    titulo: "Reconhecer a dívida",
    desc: "Processo válido: factura, termo, conformidade. Contabilidade regista o facto.",
  },
  {
    n: 7,
    fase: "Pagar",
    sub: "STE / CUT / AEF",
    titulo: "Saída do mealheiro",
    desc: "Pagamento via Conta Única do Tesouro — unidade de tesouraria.",
  },
  {
    n: 8,
    fase: "Controlar",
    sub: "SCI / TA / IGF",
    titulo: "Detetive do tablet",
    desc: "Rasto digital, auditoria e responsabilização. Sem isto, as regras morrem no papel.",
  },
];

export const LEGAL_AXES = [
  {
    title: "Vinculação digital absoluta dos contratos",
    text: "Nenhum contrato público sem registo prévio no e-SISTAFE, dotação e cabimento digital. Objectivo: extinguir compromissos manuais e passivos ocultos (Lei 14/2020; reforço de vinculação digital — confirmar enquadramento exacto do Decreto 42/2022 no BR).",
    estado: "verificado" as Confidence,
  },
  {
    title: "Alienação administrativa célere (SPE)",
    text: "Bens apreendidos/perecíveis perdem valor (~15%/ano sem gestão). SPE deve permitir liquidação célere; valor em caução na CUT até trânsito em julgado — economicidade.",
    estado: "nao_verificado" as Confidence,
  },
  {
    title: "Responsabilização e eficácia coerciva",
    text: "Ligar relatórios IGF/TA a consequências disciplinares efectivas — combater a baixa taxa de sanção a gestores faltosos.",
    estado: "nao_verificado" as Confidence,
  },
  {
    title: "Integração de valores repatriados",
    text: "Recursos de repatriação judicial entram via STE na CUT para classificação contabilística e uso orçamental (saúde, educação, etc.).",
    estado: "verificado" as Confidence,
  },
];

export const IMPLEMENTATION_PHASES = [
  {
    when: "0–3 meses",
    title: "Imediato",
    items: [
      "Instruções para suspender validade de pagamentos fora do sistema electrónico",
      "Checklist diário UGEA: cabimento antes de qualquer compromisso",
      "Mapa de perfis e segregação (AEO ≠ AEF ≠ Controlo)",
    ],
  },
  {
    when: "3–6 meses",
    title: "Curto prazo",
    items: [
      "Cruzamento UFSA × beneficiários efectivos (conflitos de interesse)",
      "Formação intensiva AEO/AEF/ciclo do metical",
      "Painel simples de processos devolvidos e motivos",
    ],
  },
  {
    when: "6–12 meses",
    title: "Capacitação distrital",
    items: [
      "Programa jurídico-digital para os 154 distritos",
      "Operação e-SISTAFE com rigor técnico no território",
      "Réplicas do Mega Brain Pack em formação presencial",
    ],
  },
  {
    when: "12–18 meses",
    title: "Reforma procedimental",
    items: [
      "Regulamentos de alienação célere e manuais SPE",
      "Padronização de adendas e regime excepcional (79/2022 + 46/2026)",
    ],
  },
  {
    when: "18–24 meses",
    title: "Institucionalização",
    items: [
      "Automatização de fluxos de controlo interno",
      "Indicadores tipo PEFA e auditoria em tempo real",
    ],
  },
];

export const CHECKLIST_DAILY = [
  "Confirmei cabimento digital antes de qualquer compromisso ou assinatura?",
  "O processo está no e-SISTAFE (não só em papel/WhatsApp)?",
  "Perfil correcto? (AEO prepara · Controlo confere · AEF paga · Ordenador autoriza)",
  "Documentos completos: despacho, specs, factura, termo de recepção?",
  "Fornecedor com dados válidos (NUIT, conta) no UFSA quando aplicável?",
  "Bem recebido já tem caminho para registo no MPE/SPE?",
];

export const CHECKLIST_WEEKLY = [
  "Rever processos devolvidos e causa-raiz (perfil, cabimento, docs, sequência)",
  "Auditoria rápida de acessos: contas inactivas e acumulação de perfis",
  "Inventário: bens novos da semana entraram no MPE?",
  "Adendas: % acumulado vs contrato original e objecto intacto?",
  "Relatório preventivo SCI: 3 riscos da unidade e dono de cada acção",
  "Actualizar diário de bordo (data, valor, responsável, estado)",
];

export const KIDS_STORY = {
  title: "A Casa Grande e o Tablet Mágico",
  intro:
    "Imagina que Moçambique é uma casa muito grande. Para haver escola, hospital e comida, o dinheiro de todos tem de ser bem cuidado.",
  parts: [
    {
      t: "O Tablet Mágico (e-SISTAFE)",
      d: "É a aplicação onde se escreve tudo. Queres comprar pão para a casa? Escreve primeiro no tablet. Se não escreveres, a compra não vale — assim ninguém gasta às escondidas.",
    },
    {
      t: "A Lista de Compras (SPO)",
      d: "A família decide: este mês cadernos ou telhado? Sem lista, a casa vira confusão.",
    },
    {
      t: "A Melhor Loja (SAE)",
      d: "Para coisas grandes, não se escolhe só o amigo. Escolhe-se quem vende bem e barato, com regras justas.",
    },
    {
      t: "O Mealheiro Gigante (CUT / STE)",
      d: "Em vez de moedas em gavetas, um mealheiro único. Assim sabe-se quanto há de verdade.",
    },
    {
      t: "Etiquetas nas Coisas (SPE / MPE)",
      d: "Carros, mesas, computadores ganham etiqueta. Não ficam à chuva nem «andam» para casa de ninguém.",
    },
    {
      t: "O Detetive (SCI)",
      d: "Olha o tablet todos os dias. Se alguém fizer batota, apita para se corrigir.",
    },
  ],
  bolso:
    "SISTAFE = regras. e-SISTAFE = tablet. Dinheiro de todos com respeito: nada comprado sem autorização, coisas do país bem cuidadas.",
};

export const OBSIDIAN_NOTES: { file: string; body: string }[] = [
  {
    file: "SPO — Subsistema de Planeamento e Orçamento.md",
    body: `---
aliases: [SPO, Planeamento e Orçamento]
tags: [SISTAFE, Subsistema, Planeamento]
tipo: Subsistema
status: Ativo
lei: Lei n.º 14/2020
---
# SPO — Subsistema de Planeamento e Orçamento

## Descrição e Base Legal
O SPO prepara e monitoriza os instrumentos de planeamento do Estado.
* **Objectivo:** Elaborar o **PESOE** (Plano Económico e Social e Orçamento do Estado).

## Módulos e-SISTAFE
* **MPO** — Planificação e Orçamentação

## Pontos de Atenção
* **Credibilidade orçamental:** risco quando a execução real (ou manual) não bate com o planeado no SPO.

## Ligações
- [[SISTAFE]] · [[e-SISTAFE]] · [[PESOE]] · [[MPO]]
`,
  },
  {
    file: "STE — Subsistema do Tesouro Público.md",
    body: `---
aliases: [STE, STP, Tesouro Público, CUT]
tags: [SISTAFE, Subsistema, Tesouro, CUT]
tipo: Subsistema
status: Ativo
lei: Lei n.º 14/2020
---
# STE — Subsistema do Tesouro Público

## Descrição
Gere disponibilidades e assegura a **unidade de tesouraria**.
* **CUT** — Conta Única do Tesouro no Banco de Moçambique.

## Módulos
* **MEX** — fluxo de pagamentos via CUT
* **MDP** — Dívida Pública

## Riscos
* Valores repatriados devem entrar na CUT via STE.
* Falhas de compromisso impedem previsão real de caixa.

## Ligações
- [[CUT]] · [[MEX]] · [[SISTAFE]]
`,
  },
  {
    file: "SCP — Subsistema de Contabilidade Pública.md",
    body: `---
aliases: [SCP, Contabilidade Pública, PBCP, IPSAS]
tags: [SISTAFE, Subsistema, Contabilidade]
tipo: Subsistema
status: Ativo
lei: Lei n.º 14/2020
---
# SCP — Subsistema de Contabilidade Pública

## Descrição
Registo contabilístico de actos e factos da gestão pública.
* **PBCP** · transição **IPSAS**

## Módulos
* **MEX** — execução e liquidação
* Consolidação de contas do Estado

## Crítico
* **Passivos ocultos** por contratos sem registo no sistema.

## Ligações
- [[MEX]] · [[SISTAFE]] · [[IPSAS]]
`,
  },
  {
    file: "SPE — Subsistema do Património do Estado.md",
    body: `---
aliases: [SPE, Património, MPE]
tags: [SISTAFE, Subsistema, Património]
tipo: Subsistema
status: Ativo
lei: Lei n.º 14/2020
---
# SPE — Subsistema do Património do Estado

## Descrição
Bens móveis e imóveis, inventário e abate — incluindo apreendidos.

## Módulos
* **MPE** — Gestão do Património

## Riscos
* Depreciação ~**15%/ano** sem gestão.
* Alienação célere de perecíveis (confirmar diploma no BR).

## Ligações
- [[MPE]] · [[CUT]] · [[SISTAFE]]
`,
  },
  {
    file: "SCI — Subsistema de Controlo Interno.md",
    body: `---
aliases: [SCI, SAI, Controlo Interno]
tags: [SISTAFE, Subsistema, Auditoria]
tipo: Subsistema
status: Ativo
lei: Lei n.º 14/2020
---
# SCI — Subsistema de Controlo Interno

## Descrição
Legalidade, economia e eficiência dos recursos públicos.

## Módulos
* **MAI** — apoio à auditoria interna
* Evolução: e-SISTAFE como auditoria em tempo real

## Inconformidades
* Baixa eficácia coerciva face a relatórios IGF/TA.
* Meta: consequências disciplinares efectivas.

## Ligações
- [[TA]] · [[IGF]] · [[e-SISTAFE]]
`,
  },
  {
    file: "SAE — Subsistema de Aquisições do Estado.md",
    body: `---
aliases: [SAE, Aquisições, Contratação Pública]
tags: [SISTAFE, Subsistema, Compras, Novo]
tipo: Subsistema
status: NOVO
lei: Lei n.º 14/2020 (Art. 52)
---
# SAE — Subsistema de Aquisições do Estado

## Descrição
**Novo** pelo **Art. 52** da Lei n.º 14/2020 — autonomia e transparência nas compras.

## Módulos / actores
* Contratos electrónicos
* **UFSA** — Registo Único de Fornecedores

## Risco 80/20
* **Compromissos manuais** sem cabimento digital.
* Conflitos de interesse: cruzar UFSA com beneficiários efectivos.

## Ligações
- [[UFSA]] · [[UGEA]] · [[SPO]] · [[MEX]]
`,
  },
];

export const NOTEBOOKLM_BRIEF = `# Diagrama — Ciclo de um Metical Público (NotebookLM / formação)

## Título
Ciclo de um Metical Público · Lei n.º 14/2020 · e-SISTAFE

## Mensagem central
Nada se gasta sem escrever no tablet (e-SISTAFE).
Fluxo único legal: Planeamento (SPO) → Aquisição (SAE) → Cabimento → Empenho → Receber+Património (SPE) → Liquidar (SCP) → Pagar (STE/CUT) → Controlar (SCI).

## Seis caixas (satélites)
1. SPO — lista / PESOE / MPO
2. SAE — compras / UFSA / contratos digitais
3. STE — CUT mealheiro único
4. SCP — livro contabilístico / anti passivo oculto
5. SPE — etiquetas / MPE / anti-depreciação 15%
6. SCI — detetive / auditoria

## Proibições em vermelho
- Compromisso manual
- Contrato sem cabimento
- Pagamento fora da CUT
- Bem sem registo patrimonial
- Mesma pessoa prepara + confere + paga

## Rodapé
CEDSIF, IP · Formação UGEA · Estados ✅⚠️❓
`;
