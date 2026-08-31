export type Confidence = "verificado" | "nao_verificado" | "inconclusivo";

export const SIGLAS = [
  { sigla: "SISTAFE", nome: "Sistema de Administração Financeira do Estado", desc: "Quadro legal e operacional da gestão financeira pública (Lei n.º 14/2020) — seis subsistemas.", estado: "verificado" as Confidence },
  { sigla: "e-SISTAFE", nome: "Sistema electrónico do SISTAFE", desc: "«Tablet mágico»: planificação, orçamento, execução, contabilidade e controlo digitais.", estado: "verificado" as Confidence },
  { sigla: "SPO", nome: "Subsistema de Planeamento e Orçamento", desc: "Prepara e monitoriza o PESOE — a «lista de compras» do Estado.", estado: "verificado" as Confidence },
  { sigla: "STE", nome: "Subsistema do Tesouro Público", desc: "Disponibilidades e unidade de tesouraria (CUT).", estado: "verificado" as Confidence },
  { sigla: "SCP", nome: "Subsistema de Contabilidade Pública", desc: "Registo contabilístico (PBCP → IPSAS). Combate passivos ocultos.", estado: "verificado" as Confidence },
  { sigla: "SPE", nome: "Subsistema do Património do Estado", desc: "Bens móveis/imóveis, inventário, abate — via MPE.", estado: "verificado" as Confidence },
  { sigla: "SCI", nome: "Subsistema de Controlo Interno", desc: "Legalidade, economia e eficiência — o «detetive» do sistema.", estado: "verificado" as Confidence },
  { sigla: "SAE", nome: "Subsistema de Aquisições do Estado", desc: "NOVO — Art. 52 Lei 14/2020. Compras, contratos electrónicos, UFSA.", estado: "verificado" as Confidence },
  { sigla: "CUT", nome: "Conta Única do Tesouro", desc: "Mealheiro único no Banco de Moçambique — unidade de tesouraria.", estado: "verificado" as Confidence },
  { sigla: "CEDSIF", nome: "Centro de Desenvolvimento de Sistemas de Informação de Finanças, IP", desc: "Desenvolve e gere o e-SISTAFE.", estado: "verificado" as Confidence },
  { sigla: "MPO", nome: "Módulo de Planificação e Orçamentação", desc: "Módulo digital do SPO — plano e OE.", estado: "verificado" as Confidence },
  { sigla: "MEX", nome: "Módulo de Execução", desc: "Cabimento, empenho, liquidação e pagamento.", estado: "verificado" as Confidence },
  { sigla: "MPE", nome: "Módulo de Gestão do Património do Estado", desc: "Registo e inventário de bens (trilho SPE). Não confundir com «mapa» informal de previsão.", estado: "verificado" as Confidence },
  { sigla: "MDP", nome: "Módulo de Dívida Pública", desc: "Gestão da dívida do Estado (órbita STE).", estado: "verificado" as Confidence },
  { sigla: "PESOE", nome: "Plano Económico e Social e Orçamento do Estado", desc: "Instrumento integrado de planificação e orçamento.", estado: "verificado" as Confidence },
  { sigla: "UGEA", nome: "Unidade Gestora Executora das Aquisições", desc: "Executa aquisições ao nível do órgão.", estado: "verificado" as Confidence },
  { sigla: "UFSA", nome: "Unidade Funcional de Supervisão das Aquisições", desc: "Supervisão técnica e registo de fornecedores.", estado: "verificado" as Confidence },
  { sigla: "CBS", nome: "Catálogo de Bens e Serviços", desc: "Catálogo de classificação para aquisições.", estado: "verificado" as Confidence },
  { sigla: "PLC", nome: "Plano de Contratação", desc: "Plano de contratações da unidade.", estado: "verificado" as Confidence },
  { sigla: "OE", nome: "Orçamento do Estado", desc: "Autoriza receita e despesa pública.", estado: "verificado" as Confidence },
  { sigla: "PES", nome: "Plano Económico e Social", desc: "Metas e prioridades anuais do Governo.", estado: "verificado" as Confidence },
  { sigla: "AEO", nome: "Agente de Execução Orçamental", desc: "Cabimenta e trata a fase orçamental/processo da despesa — não paga sozinho.", estado: "verificado" as Confidence },
  { sigla: "AEF", nome: "Agente de Execução Financeira", desc: "Executa pagamento e adiantamentos com processo válido — via CUT.", estado: "verificado" as Confidence },
  { sigla: "NUIT", nome: "Número Único de Identificação Tributária", desc: "Identificador fiscal.", estado: "verificado" as Confidence },
  { sigla: "EGFAE", nome: "Estatuto Geral dos Funcionários e Agentes do Estado", desc: "Lei n.º 4/2022.", estado: "verificado" as Confidence },
  { sigla: "TA", nome: "Tribunal Administrativo", desc: "Fiscalização da legalidade e gestão financeira.", estado: "verificado" as Confidence },
  { sigla: "MP", nome: "Ministério Público", desc: "Apreciação da legalidade em contratação.", estado: "verificado" as Confidence },
  { sigla: "GCCC", nome: "Gabinete Central de Combate à Corrupção", desc: "Prevenção e combate à corrupção.", estado: "verificado" as Confidence },
  { sigla: "IGF", nome: "Inspecção-Geral das Finanças", desc: "Inspecção e relatórios sobre gestão financeira.", estado: "verificado" as Confidence },
  { sigla: "ATM", nome: "Autoridade Tributária de Moçambique", desc: "Verificação fiscal de fornecedores.", estado: "verificado" as Confidence },
  { sigla: "PBCP", nome: "Plano Básico de Contabilidade Pública", desc: "Referencial contabilístico em transição para IPSAS.", estado: "verificado" as Confidence },
  { sigla: "IPSAS", nome: "International Public Sector Accounting Standards", desc: "Normas internacionais de contabilidade do sector público.", estado: "verificado" as Confidence },
  { sigla: "ACP", nome: "Função no fluxo do PLC", desc: "Papel operacional no plano de contratação — expansão literal varia; usar a função.", estado: "nao_verificado" as Confidence },
  { sigla: "AGC", nome: "Função de conformidade no PLC", desc: "Conformidade no plano de contratação — confirmar no manual do órgão.", estado: "nao_verificado" as Confidence },
  { sigla: "TSU", nome: "Tabela Salarial Única", desc: "Lei n.º 5/2022 — referência salarial.", estado: "verificado" as Confidence },
];

export const PERFIS = [
  { nome: "Agente de Execução Orçamental (AEO)", accao: "Cabimenta", desc: "Faz cabimentação e gere o processo administrativo da despesa na fase orçamental. Não deve autorizar sozinho a saída de fundos." },
  { nome: "Agente de Execução Financeira (AEF)", accao: "Paga", desc: "Executa pagamento e adiantamentos com processo válido, via CUT/STE. Não cria cabimento onde não há saldo." },
  { nome: "Agente de Controlo Interno / Conformidade", accao: "Confere", desc: "Valida legalidade, documentos e sequência. Não executa a despesa." },
  { nome: "Ordenador de Despesas", accao: "Autoriza", desc: "Dá a autorização final da despesa pública." },
  { nome: "Agente de Património (SPE/MPE)", accao: "Etiqueta", desc: "Regista, movimenta e acompanha bens no património do Estado." },
  { nome: "Agente Contabilista (SCP)", accao: "Regista", desc: "Lançamentos da execução orçamental, financeira e patrimonial." },
  { nome: "Agente de Consulta", accao: "Vê", desc: "Só consulta — sem alterar processos." },
  { nome: "Administrador de Segurança", accao: "Acessos", desc: "Cria e controla perfis. Não deve executar despesa." },
  { nome: "Chefe da UGEA", accao: "Dirige", desc: "Autoriza necessidades e conduz aquisições na unidade." },
  { nome: "Supervisão UFSA", accao: "Supervisiona", desc: "Qualidade técnica e transparência das aquisições (SAE)." },
  { nome: "Auditor Interno (SCI)", accao: "Audita", desc: "Rasto, conformidade e riscos — relatório preventivo." },
  { nome: "Gestor Sénior", accao: "Decide", desc: "Usa resumo, risco e indicadores para autorizar." },
  { nome: "Formador / Consultor", accao: "Ensina", desc: "Capacita UGEA com ciclo do metical e checklists." },
];

export const CICLO_8 = [
  { n: 1, titulo: "Planeamento (SPO/MPO)", sub: "PESOE e necessidade", desc: "Enquadrar a despesa no plano/orçamento. A «lista de compras» vem antes da loja.", estado: "verificado" as Confidence, nota: "O módulo MPE é património (SPE). O «mapa do plano» de despesas é trilho SPO/MPO — não misturar os dois significados." },
  { n: 2, titulo: "Aquisição (SAE/UGEA)", sub: "Contratar com regras", desc: "Definir necessidade, modalidade e fornecedor. Zero compromisso manual.", estado: "verificado" as Confidence },
  { n: 3, titulo: "Requisição formal", sub: "Pedido com specs", desc: "Formalizar o pedido com especificações e classificação correcta.", estado: "verificado" as Confidence },
  { n: 4, titulo: "Cabimento digital (AEO)", sub: "Há verba?", desc: "Cabimento prévio no e-SISTAFE. Sem isto a despesa é irregular (passivo oculto).", estado: "verificado" as Confidence },
  { n: 5, titulo: "Contrato registado", sub: "Vinculação digital", desc: "Registo no sistema antes/com o compromisso — não assinar «por fora».", estado: "verificado" as Confidence },
  { n: 6, titulo: "Nota de Empenho", sub: "Reservar o metical", desc: "Empenho: reserva formal e rastreável da despesa.", estado: "verificado" as Confidence },
  { n: 7, titulo: "Receber · Liquidar · Património", sub: "Conferir + etiquetar", desc: "Conferir bem/serviço e docs; liquidar no processo; registar no MPE/SPE. Controlo Interno confere — AEF não paga sem processo válido.", estado: "verificado" as Confidence },
  { n: 8, titulo: "Pagamento (AEF · STE/CUT)", sub: "Saída do mealheiro", desc: "AEF executa o pagamento via Conta Única do Tesouro. SCI/TA fecham o rasto.", estado: "verificado" as Confidence },
];

export const MEX_FLUXO = [
  { n: 1, titulo: "Plano de contratação", modulo: "MPO" },
  { n: 2, titulo: "Orçamento de tesouraria", modulo: "MPO" },
  { n: 3, titulo: "Gestão de concurso", modulo: "MEX" },
  { n: 4, titulo: "Cativo do valor", modulo: "MEX" },
  { n: 5, titulo: "Programação financeira", modulo: "MEX" },
  { n: 6, titulo: "Cabimentação", modulo: "MEX" },
  { n: 7, titulo: "Receber e aceitar bens / serviços", modulo: "MEX" },
  { n: 8, titulo: "Liquidação", modulo: "MEX" },
  { n: 9, titulo: "Incorporar e liquidar bens / serviços", modulo: "MPE" },
  { n: 10, titulo: "Pagamento", modulo: "MEX" },
  { n: 11, titulo: "Gestão patrimonial", modulo: "MPE" },
];

export const PLC_PASSOS = [
  { n: 1, titulo: "Criar Proposta de Plano de Contratação", sigla: "ACP" },
  { n: 2, titulo: "Conformidade para Proposta do PLC", sigla: "AGC" },
  { n: 3, titulo: "Ajuste à Proposta de Plano de Contratação", sigla: "ACP" },
  { n: 4, titulo: "Conformidade para Proposta do PLC", sigla: "AGC" },
  { n: 5, titulo: "Criar Plano de Contratação", sigla: "ACP" },
  { n: 6, titulo: "Conformidade do Plano de Contratação", sigla: "AGC" },
  { n: 7, titulo: "Criar Plano de Contratação Efectivo", sigla: "ACP" },
];

export const ERROS = [
  { n: 1, titulo: "Perfil errado no utilizador", consequencia: "Alguém que só devia consultar recebe permissões de execução, ou alguém da conformidade recebe perfil de pagamento. Cria risco de fraude e quebra de segregação de funções.", evitar: "Atribuir o perfil exacto à função. Rever acessos periodicamente (Administrador de Segurança)." },
  { n: 2, titulo: "Falta de segregação de funções", consequencia: "A mesma pessoa prepara, valida e executa a mesma despesa. Gera fragilidade de controlo e compromete auditorias.", evitar: "Garantir que conformidade e execução são feitas por pessoas diferentes." },
  { n: 3, titulo: "Cabimento sem saldo suficiente", consequencia: "A despesa é lançada sem saldo na dotação. O processo falha ou fica irregular.", evitar: "Confirmar a cobertura orçamental e a rubrica correcta antes de executar." },
  { n: 4, titulo: "Classificação orçamental errada", consequencia: "Rubrica, actividade, programa ou unidade orgânica errada. A despesa fica mal registada e dá trabalho corrigir.", evitar: "Verificar a rubrica e a actividade antes de lançar." },
  { n: 5, titulo: "Documentação incompleta", consequencia: "Faltam anexos, despacho, proposta, factura, contrato ou termo de recepção. O processo é recusado ou devolvido.", evitar: "Conferir todos os documentos exigidos antes da submissão." },
  { n: 6, titulo: "Processo sem sequência lógica", consequencia: "Despesa lançada antes do despacho, ou pagamento antes da liquidação. O e-SISTAFE é sequencial — saltar etapas gera inconsistência.", evitar: "Seguir a ordem: cabimento → conformidade → execução → liquidação → pagamento." },
  { n: 7, titulo: "Dados do fornecedor errados", consequencia: "Erro no NUIT, nome, conta bancária ou referência causa bloqueios e devoluções.", evitar: "Validar os dados do fornecedor antes de submeter." },
  { n: 8, titulo: "Uso indevido do perfil de consulta", consequencia: "Tentar operar com perfil só de consulta. Atrasa o trabalho e revela má gestão de acessos.", evitar: "Solicitar o perfil adequado à função; o Administrador de Segurança ajusta os acessos." },
  { n: 9, titulo: "Não conferir a conformidade antes do envio", consequencia: "Processos devolvidos por pequenos erros que uma revisão interna evitaria.", evitar: "Checagem final: valores, datas, rubricas, anexos e assinaturas." },
  { n: 10, titulo: "Registo tardio", consequencia: "Registo depois da execução física/financeira cria desencontro entre o feito e o que está no sistema.", evitar: "Manter o sistema actualizado quase em tempo real — registo logo após a operação." },
];

export const BASES_LEGAIS = [
  { lei: "Lei n.º 14/2020", desc: "Lei do SISTAFE — define os subsistemas e a Conta Única do Tesouro (CUT).", status: "Verificado" },
  { lei: "Decreto n.º 79/2022", desc: "Regulamento de Contratação de Empreitadas, Bens e Serviços ao Estado (quadro de contratação).", status: "Verificado" },
  { lei: "Decreto n.º 46/2026", desc: "Altera o Decreto 79/2022 — ajuste directo, adendas, anti-corrupção e fiscalização prévia.", status: "Actualização 2026" },
  { lei: "Decreto n.º 42/2018", desc: "Referência a gestão patrimonial — confirmar enquadramento exacto na Imprensa Nacional.", status: "A confirmar ano/âmbito" },
  { lei: "Lei n.º 4/2022 (EGFAE)", desc: "Estatuto Geral dos Funcionários e Agentes do Estado.", status: "Verificado" },
  { lei: "Lei n.º 5/2022", desc: "Tabela Salarial Única (TSU) — vínculo com execução salarial.", status: "Verificado" },
];

export const SUBSISTEMAS = [
  { sigla: "MPO", nome: "Planeamento e Orçamentação", papel: "Define necessidades, cabimento orçamental e dotações. Sem dotação = sem contrato.", cor: "from-blue-600/20 to-blue-900/10", border: "border-blue-500/30" },
  { sigla: "UFSA", nome: "Supervisão das Aquisições", papel: "Supervisiona transparência e qualidade técnica dos processos de aquisição.", cor: "from-purple-600/20 to-purple-900/10", border: "border-purple-500/30" },
  { sigla: "SAE", nome: "Aquisições do Estado", papel: "Regista contratos electrónicos e fornecedores (Art. 52, Lei 14/2020).", cor: "from-amber-600/20 to-amber-900/10", border: "border-amber-500/30" },
  { sigla: "CUT", nome: "Conta Única do Tesouro", papel: "Centraliza pagamentos do Estado no Banco de Moçambique.", cor: "from-emerald-600/20 to-emerald-900/10", border: "border-emerald-500/30" },
  { sigla: "SCI", nome: "Controlo Interno", papel: "Fiscaliza legalidade e gestão financeira pública.", cor: "from-rose-600/20 to-rose-900/10", border: "border-rose-500/30" },
  { sigla: "SPE", nome: "Património do Estado", papel: "Inventário, depreciação e baixa de bens adquiridos.", cor: "from-teal-600/20 to-teal-900/10", border: "border-teal-500/30" },
];

export const PRODUTOS = [
  { id: "manual-ugea", nome: "Manual Prático UGEA", preco: 1500, tipo: "PDF", desc: "Roteiros de cabimento, liquidação, perfis e checklist diária." },
  { id: "kit-erros", nome: "Kit 10 Erros + Correcções", preco: 800, tipo: "PDF", desc: "Cartaz e guia de bolso para formação de equipas." },
  { id: "pacote-formacao", nome: "Pacote Formação 1 dia", preco: 12000, tipo: "Serviço", desc: "Sessão presencial/online para até 20 técnicos." },
  { id: "consultoria", nome: "Consultoria de processo", preco: 5000, tipo: "Serviço", desc: "Revisão de um processo real (adenda, ajuste directo ou fluxo MEX)." },
];

export const DECRETO_46 = {
  titulo: "Decreto n.º 46/2026, de 5 de Agosto",
  base: "Altera o Decreto n.º 79/2022, de 30 de Dezembro",
  eixos: [
    "Ajuste directo e regime excepcional de contratação",
    "Modificações contratuais (adendas) — limite orientador 25%",
    "Mecanismos de conduta e combate à corrupção",
    "Fiscalização prévia dos processos (TA, MP, UFSA, GCCC)",
  ],
  instituicoes: [
    { sigla: "MP", papel: "Apreciação da legalidade dos processos" },
    { sigla: "UFSA", papel: "Supervisão técnica das aquisições" },
    { sigla: "TA", papel: "Controlo e fiscalização prévia das despesas" },
    { sigla: "GCCC", papel: "Prevenção e combate à corrupção" },
  ],
  alerta: {
    titulo: "Alerta GCCC — Caso Inhambane",
    pontos: [
      "Uso indevido de perfis de acesso restrito no e-SISTAFE para pagamentos ilegais de salários e subsídios.",
      "Reforçar segurança digital e controlo de acessos.",
      "Auditoria contínua aos perfis de utilizadores.",
    ],
  },
  capacitacao: {
    titulo: "Capacitação INSS — Agosto 2026",
    local: "Marracuene",
    datas: "24–28 de Agosto de 2026",
    participantes: "29 funcionários das UGEA",
    formadores: ["MP", "UFSA", "TA", "GCCC"],
  },
};

export const SEARCH_ITEMS = [
  { id: "cab", titulo: "Cabimento", resumo: "Verificar se existe verba antes de executar a despesa.", keywords: ["cabimento", "dotação", "saldo", "verba"], page: "ciclo" },
  { id: "liq", titulo: "Liquidação", resumo: "Conferir entrega e autorizar o pagamento.", keywords: ["liquidação", "factura", "recepção"], page: "ciclo" },
  { id: "seg", titulo: "Segregação de funções", resumo: "Cada perfil faz só o que lhe compete.", keywords: ["segregação", "perfil", "acesso", "fraude"], page: "perfis" },
  { id: "adenda", titulo: "Adendas contratuais", resumo: "Limite 25%, assinaturas e objecto contratual (Decreto 46/2026).", keywords: ["adenda", "aditamento", "25%", "modificação"], page: "legislacao" },
  { id: "ajuste", titulo: "Ajuste directo", resumo: "Regime excepcional com fundamentação reforçada.", keywords: ["ajuste", "directo", "excepcional"], page: "contratacao" },
  { id: "mex", titulo: "Fluxo MEX", resumo: "11 passos de execução no e-SISTAFE.", keywords: ["mex", "execução", "empenho", "pagamento"], page: "ciclo" },
  { id: "cut", titulo: "Conta Única do Tesouro", resumo: "Pagamentos centralizados do Estado.", keywords: ["cut", "pagamento", "tesouro"], page: "siglas" },
  { id: "ugea", titulo: "UGEA", resumo: "Unidade Gestora Executora das Aquisições.", keywords: ["ugea", "aquisições", "compras"], page: "perfis" },
  { id: "erro", titulo: "Erros comuns", resumo: "Os 10 erros que mais travam processos.", keywords: ["erro", "falha", "bloqueio", "trava"], page: "erros" },
  { id: "d46", titulo: "Decreto 46/2026", resumo: "Actualização legislativa de contratação pública.", keywords: ["46/2026", "decreto", "legislação", "2026"], page: "legislacao" },
];

export const CHECKLIST_UGEA = [
  "Confirmar se o procedimento se enquadra em ajuste directo ou regime excepcional e se a fundamentação está completa.",
  "Submeter o processo aos controlos de legalidade (MP) e supervisão técnica (UFSA) quando aplicável.",
  "Garantir fiscalização prévia do TA antes da assunção de despesas relevantes.",
  "Nas adendas: calcular o impacto percentual (≤25%), validar o objecto e obter assinaturas exigidas.",
  "Rever perfis e acessos no e-SISTAFE; registar evidências de segregação de funções.",
  "Arquivar documentação de suporte para auditoria e eventual apreciação do GCCC.",
  "Validar NUIT e dados bancários do fornecedor antes do pagamento.",
  "Registar bem no património (MPE/SPE) após recepção.",
];
