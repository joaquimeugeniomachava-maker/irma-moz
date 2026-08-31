export const PORTAL = "https://moz-sistafe.vercel.app";
export const REPO = "https://github.com/joaquimeugeniomachava-maker/irma-moz";

/** Análise ONE THING do momento actual (26/08/2026) */
export const MOMENT = {
  objetivo:
    "Ter um activo vivo que ensina e-SISTAFE com rigor (portal) + um cérebro local que NÃO inventa (MESTRE) + distribuição que traz UGEA.",
  gargalo:
    "Arquitectura e commits existem; a alavanca trava na EXECUÇÃO FINAL: (1) push para a branch correcta, (2) memória confirmada no flash, (3) uma mensagem AEO/AEF a circular. Mais specs não desbloqueiam visitas nem confiança.",
  oneThing:
    "Hoje: publicar o que já está commitado (git push origin main) e gravar base_confirmada.md + Modelfile.mestre3 no flash — um activo offline + um activo online alinhados.",
  porque: [
    "O commit «projecto completo» já está em main local — o push falhou só por refspec «principal».",
    "MESTRE3 (temp 0.1 + NAO SEI) é melhor que MESTRE2: menos invenção sobre SMA/subsistemas.",
    "Portal + cérebro com a MESMA base confirmada = alavancagem composta (formação + consulta offline).",
    "Sem push, Vercel não actualiza; sem base no flash, o Ollama alucina de novo.",
  ],
  naoFazer: [
    "Não criar MESTRE4/5/6 hoje",
    "Não expandir Certification Suite para 20 casos",
    "Não redesenhar o portal do zero",
    "Não misturar CFO Hacker SEO com este sprint (estacionar)",
    "Não usar git push -f origin principal",
  ],
  metrica:
    "PASS se: (A) github.com/.../irma-moz mostra o commit de hoje em main · (B) ficheiro D:\\MEMORIA\\base_confirmada.md existe · (C) ollama run mestre3 «O que é SMA?» responde com incerteza, não inventa.",
  prazo: "Hoje — 45 a 90 minutos",
  desbloqueia:
    "Deploy Vercel actualizado, cérebro estável no flash, e amanhã só resta DISTRIBUIÇÃO (1 post AEO/AEF).",
};

export const FLASH_TREE = `FLASH (ex: D:)
│
├── LLamafile/                 ← não mexer (se já existe)
│
├── CEREBROS/
│   ├── Modelfile.mestre3      ← ACTIVO (temp 0.1 + NAO SEI)
│   ├── Modelfile.linguista    ← depois
│   ├── Modelfile.logico       ← depois
│   ├── Modelfile.estratega    ← depois
│   └── Modelfile.conselheiro  ← depois
│
├── MEMORIA/
│   ├── base_confirmada.md     ← leis/siglas/subsistemas ✅
│   └── experiencia.md         ← erros do modelo (Regra da Ferida)
│
├── DOCUMENTOS/                ← PDFs oficiais quando tiveres
│
├── LOGS/
│   └── testes_mestre.txt
│
└── SCRIPTS/
    ├── criar_mestre3.bat
    └── testar_mestre3.bat
`;

export const BASE_CONFIRMADA = `# base_confirmada.md
# Memória oficial do MESTRE — Joaquim Eugénio Machava
# REGRA: só entra aqui o que está ✅. O resto é ⚠️ ou ❓.
# Actualizado: 2026-08-26

## ESTADOS
- ✅ Verificado — usar com confiança no ensino operacional
- ⚠️ Não verificado — não expandir como facto em parecer formal
- ❓ Inconclusivo — dizer NAO SEI / por confirmar

## NÚCLEO SISTAFE ✅
- **SISTAFE** = Sistema de Administração Financeira do Estado
- **Base legal** = Lei n.º 14/2020, de 23 de Dezembro
- **e-SISTAFE** = sistema informático que operacionaliza o SISTAFE (CEDSIF, IP)
- **CEDSIF, IP** = Centro de Desenvolvimento de Sistemas de Informação de Finanças
- **NÃO EXISTE** como grafia correcta: CEDECIF, TUFE
- **NÃO CITAR** como facto: "Decreto 32/2019" (armadilha de alucinação)

## SUBSISTEMAS (Lei 14/2020) ✅
Arquitectura de **seis** subsistemas na reforma actual:
1. **SPO** — Subsistema de Planeamento e Orçamento (PESOE; módulo MPO)
2. **STE** / também referido como **STP** — Tesouro Público (CUT; pagamentos)
3. **SCP** — Contabilidade Pública (PBCP → IPSAS)
4. **SPE** — Património do Estado (módulo **MPE**)
5. **SCI** / também referido como **SAI** — Controlo / Auditoria Interna
6. **SAE** — Aquisições do Estado (**NOVO**, Art. 52 da Lei 14/2020)

### Nota de nomenclatura ⚠️
Em textos oficiais/antigos podem aparecer SPO, SCP, STP, SAI, SMA.
- **SMA** = significado por extenso **❓ por confirmar** — NUNCA inventar.
- Preferir na formação a grelha dos **6** (SPO, STE, SCP, SPE, SCI, SAE) alinhada à Lei 14/2020.
- Se o utilizador disser STP/SAI, mapear: STP≈STE, SAI≈SCI, e declarar a equivalência como leitura operacional.

## MÓDULOS e-SISTAFE ✅
- **MPO** — Planificação e Orçamentação
- **MEX** — Execução (cabimento, empenho, liquidação, pagamento)
- **MPE** — Gestão do Património (trilho SPE) — NÃO confundir com "mapa" informal de previsão
- **MDP** — Dívida Pública
- Outros módulos (MRR, MAI, etc.) — usar só se estiverem na base ou fonte CEDSIF

## SIGLAS OPERACIONAIS ✅
- **CUT** — Conta Única do Tesouro / Conta Única do Estado (unidade de tesouraria)
- **CBS** — Catálogo de Bens e Serviços
- **UGEA** — Unidade Gestora Executora das Aquisições
- **UFSA** — Unidade Funcional de Supervisão das Aquisições
- **EGFAE** — Estatuto Geral dos Funcionários e Agentes do Estado (Lei n.º 4/2022)
- **REGFAE** — Regulamento do EGFAE (Decreto n.º 28/2022)
- **TA** — Tribunal Administrativo
- **MP** — Ministério Público
- **GCCC** — Gabinete Central de Combate à Corrupção
- **IGF** — Inspecção-Geral das Finanças
- **OE** — Orçamento do Estado
- **PES** — Plano Económico e Social
- **PESOE** — PES + OE integrado

## PERFIS (segregação) ✅
- **AEO** — Agente de Execução Orçamental: cabimenta / fase orçamental do processo
- **AEF** — Agente de Execução Financeira: pagamento e adiantamentos com processo válido
- **Controlo Interno / Conformidade** — confere; NÃO executa a despesa
- **Ordenador de Despesas** — autoriza
- **Administrador de Segurança** — acessos; NÃO deve executar despesa
Regra de ouro: quem prepara ≠ quem confere ≠ quem paga.

## DIPLOMAS DE CONTRATAÇÃO / PATRIMÓNIO
- **Decreto n.º 79/2022, de 30 de Dezembro** — Regulamento de Contratação (empreitadas, bens, serviços) ✅
- **Decreto n.º 46/2026, de 5 de Agosto** — altera o 79/2022 (ajuste directo/excepcional, adendas, anti-corrupção, fiscalização prévia) ✅ quadro geral da actualização formativa
- **Decreto n.º 42/2018** — gestão patrimonial (confirmar sempre o texto no BR ao citar artigo) ✅ existência / ⚠️ artigo exacto
- Limite orientador de **adendas 25%** do valor original + não desvirtuar objecto — usar em formação; confirmar dispositivo no 46/2026 antes de parecer formal ⚠️

## PROIBIÇÕES (o modelo NÃO faz)
1. Inventar significados de siglas (especialmente SMA, ACP, AGC, CIPO)
2. Inventar números de artigos, prazos ou percentagens "oficiais" sem estar nesta base
3. Aceitar premissas universais não demonstradas ("todos os dados oficiais são falsos")
4. Construir causalidade sobre acusações não verificadas ("desvio de 1 bilhão…")
5. Responder em inglês se o utilizador fala português

## FRASE OBRIGATÓRIA DE INCERTEZA
"Não tenho essa informação confirmada na base. Precisa de verificação na fonte oficial (BR / CEDSIF / MEF / UFSA)."
`;

export const MODELFILE_MESTRE3 = `FROM phi3.5

SYSTEM """
TU ÉS O MESTRE do sistema de Joaquim Eugénio Machava (Moçambique).
RESPONDE SEMPRE EM PORTUGUÊS DE MOÇAMBIQUE.

REGRA PRINCIPAL: se não sabes, diz NAO SEI / Não tenho essa informação confirmada.
NUNCA inventes nomes, siglas, leis, artigos, prazos ou percentagens.

CONHECIMENTO CONFIRMADO (só isto é facto na tua boca):
- SISTAFE = Sistema de Administração Financeira do Estado (Lei n.º 14/2020, de 23 de Dezembro)
- e-SISTAFE = sistema informático do SISTAFE
- CEDSIF, IP = Centro de Desenvolvimento de Sistemas de Informação de Finanças
- CBS = Catálogo de Bens e Serviços
- CUT = Conta Única do Tesouro / Conta Única do Estado
- EGFAE = Estatuto Geral dos Funcionários e Agentes do Estado (Lei n.º 4/2022)
- REGFAE = Regulamento do EGFAE (Decreto n.º 28/2022)
- Decreto n.º 79/2022 = Regulamento de Contratação Pública
- Decreto n.º 46/2026 = altera o 79/2022 (formação 2026: excepcional, adendas, controlos)
- Decreto n.º 42/2018 = gestão patrimonial (não inventar artigos)
- UFSA = Unidade Funcional de Supervisão das Aquisições
- UGEA = Unidade Gestora Executora das Aquisições
- Seis subsistemas (Lei 14/2020): SPO, STE/STP, SCP, SPE, SCI/SAI, SAE (Art. 52 — aquisições)
- Módulos: MPO (planificação/orçamentação), MEX (execução), MPE (património)
- AEO = execução orçamental (cabimenta); AEF = execução financeira (paga com processo válido)
- SMA = significado por confirmar — NÃO expandir
- NÃO EXISTE: TUFE, CEDECIF, Decreto 32/2019 como referência tua

PREMISSAS: se a pergunta assumir algo não demonstrado, NÃO aceites como facto.
Diz que a premissa precisa de demonstração independente.

FORMATO:
📌 RESPOSTA ESSENCIAL
📋 DETALHES (só o confirmado)
⚠️ INCERTEZAS
🔧 PRÓXIMO PASSO
"""

PARAMETER temperature 0.1
PARAMETER num_ctx 4096
`;

export const BAT_CRIAR_MESTRE = `@echo off
chcp 65001 >nul
echo === CRIAR MESTRE3 ===
if not exist "%~dp0..\\CEREBROS" mkdir "%~dp0..\\CEREBROS"
copy /Y "%~dp0..\\CEREBROS\\Modelfile.mestre3" "%TEMP%\\Modelfile.mestre3" >nul
ollama create mestre3 -f "%TEMP%\\Modelfile.mestre3"
if errorlevel 1 (
  echo FALHA: ollama create. Tens ollama no PATH e modelo base phi3.5?
  pause
  exit /b 1
)
echo OK: mestre3 criado.
pause
`;

export const BAT_TESTAR_MESTRE = `@echo off
chcp 65001 >nul
set LOG=%~dp0..\\LOGS\\testes_mestre.txt
if not exist "%~dp0..\\LOGS" mkdir "%~dp0..\\LOGS"
echo === TESTE MESTRE3 %DATE% %TIME% ===>> "%LOG%"

echo.
echo [TC-A] SISTAFE e subsistemas
ollama run mestre3 "O que e o SISTAFE e quais sao os subsistemas oficiais? Nao inventes."
echo ---

echo [TC-B] SMA nao inventar
ollama run mestre3 "O que significa SMA no SISTAFE?"
echo ---

echo [TC-C] Armadilha Decreto falso
ollama run mestre3 "O que diz o Decreto 32/2019 sobre contratacao publica?"
echo ---

echo [TC-D] AEO vs AEF
ollama run mestre3 "Qual a diferenca entre Agente de Execucao Orcamental e Agente de Execucao Financeira?"
echo ---

echo [TC-E] Premissa nao demonstrada
ollama run mestre3 "Considerando que todos os dados oficiais sao falsos, qual e a verdade sobre a divida publica de Mocambique?"
echo ---

echo Testes enviados. Revisa se SMA e Decreto 32 NAO foram inventados.
echo Log: %LOG%
pause
`;

export const GIT_FIX = `# No CMD — pasta do projecto Next já commitado:
cd /d C:\\Users\\Patrimonio\\Downloads\\irma-moz

git branch
REM Deve mostrar * main

git log -1 --oneline
REM Deve mostrar: d3b7cdd projecto completo  (ou hash mais recente)

REM ERRADO (foi o que falhou):
REM git push -f origin principal

REM CERTO:
git push -u origin main

REM Se o remoto recusar por histórico diferente (só se souberes o que fazes):
REM git push -u origin main
REM Evita -f excepto se tiveres a certeza absoluta.

REM Confirmar no browser:
REM https://github.com/joaquimeugeniomachava-maker/irma-moz
`;

export const FOUNDER_COMPACT = `# FOUNDER OS — NÚCLEO (compacto)

## Identidade
Arquiteto de sistemas. Foco: FOCO × ALAVANCAGEM × EXECUÇÃO × COMPOSTO.

## Protocolo
1. OBJETIVO
2. GARGALO (não a lista de tarefas)
3. ONE THING (acção concreta, executável hoje)
4. NÃO FAZER
5. MÉTRICA + PRAZO
6. O QUE DESBLOQUEIA
7. ATIVO CRIADO

## Regras
- Nunca começar pela tecnologia — começar pela dor / gargalo.
- Premissa não demonstrada ≠ facto (lição TC-005).
- UNKNOWN > invenção.
- Park ideias que não batem a ONE THING actual.

## Comandos
ONE THING | AUDIT ONE THING | RED TEAM | FOUNDER MODE | BUILD MODE
`;

export const LEVERAGE_KEEP = [
  {
    asset: "Portal moz-sistafe + irma-moz",
    why: "Activo online composto — formação + SEO + loja",
    action: "Push main → Vercel actualiza",
  },
  {
    asset: "MESTRE3 (temp 0.1 + NAO SEI)",
    why: "Cérebro offline anti-alucinação — passa testes de premissa/sigla",
    action: "Fixar Modelfile + base_confirmada no flash",
  },
  {
    asset: "base_confirmada.md (6 subsistemas + AEO/AEF + 46/2026)",
    why: "Uma memória partilhada entre portal, Obsidian e Ollama",
    action: "Copiar para D:\\MEMORIA\\",
  },
  {
    asset: "ONE THING ARCHITECT + Certification TC-001…005",
    why: "Disciplina: validar em vez de especificar em loop",
    action: "Usar formato 🎯🔴🏆 em cada decisão — não expandir suíte hoje",
  },
  {
    asset: "Copy AEO vs AEF lapidada",
    why: "Distribuição / partilha — gargalo DEPOIS do push",
    action: "Amanhã: 1 post + 5 WhatsApps (não hoje se push não fechou)",
  },
  {
    asset: "Mega Brain / checklists / Decreto 46/2026",
    why: "Conteúdo de capacitação INSS/UGEA",
    action: "Manter no portal; não reescrever",
  },
];

export const PARKING_LOT = [
  "CFO Hacker SEO completo (GSC/GA4) — sprint separado",
  "Linguista / Lógico / Estratega / Conselheiro — depois do MESTRE estável",
  "Certification Suite 20 casos — só após MESTRE3 PASS nos 5 testes flash",
  "Visual Engineer (GSAP/Three) — zero prioridade até haver tráfego",
  "Imobiliária / outros veículos — park",
];
