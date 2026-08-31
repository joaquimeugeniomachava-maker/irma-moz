export type TaskStatus = "todo" | "doing" | "done" | "blocked";

export type SeoTask = {
  id: string;
  title: string;
  priority: "alta" | "media" | "baixa";
  why: string;
  steps: string[];
  cmd?: string[];
  verify: string;
  link?: string;
};

export const SEO_TASKS: SeoTask[] = [
  {
    id: "gsc",
    title: "Google Search Console",
    priority: "alta",
    why: "É o painel oficial: diz se o Google encontrou o site e quais queries trazem visitas.",
    steps: [
      "Abra o Chrome e vá a https://search.google.com/search-console",
      "Entre com a conta Google do projecto (a mesma do Analytics, se possível).",
      "Clique em «Adicionar propriedade» → escolha «Prefixo do URL».",
      "Cole o URL exacto do CFO Hacker (ex: https://seudominio.com) com https://",
      "Escolha verificação por «Tag HTML».",
      "Copie a meta tag que o Google mostra (começa com <meta name=\"google-site-verification\" ...>).",
      "No site (Vercel / Systeme.io / HTML), cole essa tag dentro de <head>…</head>.",
      "Guarde, publique/redeploy, espere 1–2 min e clique em «Verificar» no Search Console.",
      "Depois de verificado: menu esquerdo → Sitemaps → submeta https://SEUDOMINIO/sitemap.xml",
    ],
    cmd: [
      "REM Depois do deploy, teste se a meta tag está no HTML:",
      "curl -s https://SEUDOMINIO.com | findstr /i google-site-verification",
    ],
    verify: "Search Console mostra «Propriedade verificada» e aceita o sitemap sem erro.",
    link: "https://search.google.com/search-console",
  },
  {
    id: "title-meta",
    title: "Título e Meta Descrição",
    priority: "alta",
    why: "É o que aparece no Google. Sem isto, o clique não acontece.",
    steps: [
      "Abra o projecto do CFO Hacker (HTML, Next, Vite ou Systeme.io).",
      "Localize o <head> da página de vendas (index.html ou layout).",
      "Defina EXACTAMENTE (pode adaptar o domínio, não o posicionamento):",
      "  <title>CFO Hacker — IA para CFOs | Reduza Custos em 30%</title>",
      "  <meta name=\"description\" content=\"Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA.\" />",
      "  <meta property=\"og:title\" content=\"CFO Hacker — IA para CFOs | Reduza Custos em 30%\" />",
      "  <meta property=\"og:description\" content=\"Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA.\" />",
      "  <meta name=\"robots\" content=\"index,follow\" />",
      "  <link rel=\"canonical\" href=\"https://SEUDOMINIO.com/\" />",
      "Guarde, faça commit/push ou publique na plataforma.",
      "Abra o site em janela anónima → botão direito → «Ver código-fonte» e confirme title + description.",
    ],
    cmd: [
      "cd C:\\Users\\Patrimonio\\Downloads\\SEU-PROJECTO-CFO",
      "notepad index.html",
      "REM ou, se for Next.js:",
      "notepad src\\app\\layout.tsx",
    ],
    verify: "No código-fonte da homepage aparecem o title e a meta description correctos.",
  },
  {
    id: "ga",
    title: "Google Analytics 4",
    priority: "alta",
    why: "Sem contador de visitas não há monitoria. Não se gere o que não se mede.",
    steps: [
      "Vá a https://analytics.google.com → Admin (engrenagem).",
      "Criar conta «CFO Hacker» → propriedade GA4 → fuso Africa/Maputo → moeda MZN ou USD.",
      "Fluxo de dados → Web → URL do site → nome «CFO Hacker Web».",
      "Copie o ID de medição (formato G-XXXXXXXX).",
      "Cole o script gtag no <head> do site (ou use a integração nativa da Vercel/Systeme).",
      "Abra o site numa aba, navegue 30 segundos.",
      "No GA4: Relatórios → Tempo real → deve aparecer 1 utilizador.",
    ],
    cmd: [
      "REM Teste se o G-XXXX está no HTML publicado:",
      "curl -s https://SEUDOMINIO.com | findstr /i \"G-\"",
    ],
    verify: "GA4 Tempo real mostra a sua visita em menos de 2 minutos.",
    link: "https://analytics.google.com",
  },
  {
    id: "sitemap",
    title: "Sitemap.xml",
    priority: "media",
    why: "Lista as URLs para o Google não depender só de links externos.",
    steps: [
      "Crie um ficheiro public/sitemap.xml (Vite/Next) ou na raiz do site estático.",
      "Liste todas as páginas importantes com <loc>https://...</loc>.",
      "Faça deploy.",
      "Teste no browser: https://SEUDOMINIO.com/sitemap.xml (deve abrir XML, não 404).",
      "No Search Console → Sitemaps → adicione sitemap.xml → Enviar.",
    ],
    cmd: [
      "cd C:\\Users\\Patrimonio\\Downloads\\SEU-PROJECTO-CFO",
      "mkdir public 2>nul",
      "notepad public\\sitemap.xml",
    ],
    verify: "URL /sitemap.xml abre e o Search Console marca como «Êxito».",
  },
  {
    id: "robots",
    title: "Robots.txt",
    priority: "media",
    why: "Autoriza rastreio e aponta o sitemap. Evita bloquear o Google por engano.",
    steps: [
      "Crie public/robots.txt com Allow: / e a linha Sitemap.",
      "NÃO coloque Disallow: / (isso esconde o site inteiro).",
      "Deploy e abra https://SEUDOMINIO.com/robots.txt",
      "Search Console → Definições → robots.txt (se disponível) ou teste de URL ao vivo.",
    ],
    cmd: [
      "cd C:\\Users\\Patrimonio\\Downloads\\SEU-PROJECTO-CFO",
      "notepad public\\robots.txt",
    ],
    verify: "robots.txt mostra Allow: / e o caminho do sitemap.",
  },
  {
    id: "speed",
    title: "Velocidade (PageSpeed)",
    priority: "media",
    why: "Site lento mata conversão e ranking móvel. Meta: 70+ mobile, 90+ desktop.",
    steps: [
      "Abra https://pagespeed.web.dev/",
      "Cole o URL do CFO Hacker → Analisar (telemóvel e computador).",
      "Anote: Performance, LCP, CLS.",
      "Correcções rápidas: comprimir imagens, lazy-load, menos scripts no head, cache Vercel.",
      "Se usar imagens pesadas: converta para WebP ou reduza no TinyPNG.",
      "Re-teste até mobile ≥ 70.",
    ],
    verify: "PageSpeed mobile ≥ 70 e desktop ≥ 90 (ou plano de correcção escrito).",
    link: "https://pagespeed.web.dev/",
  },
  {
    id: "gmb",
    title: "Perfil Google Business (opcional)",
    priority: "baixa",
    why: "Útil se houver marca local / consultoria presencial. Não bloqueia indexação do site.",
    steps: [
      "Só faça depois dos 5 itens prioritários.",
      "https://business.google.com → criar perfil com nome, categoria Consultoria, área Maputo (se aplicável).",
      "Adicionar website do CFO Hacker.",
    ],
    verify: "Perfil criado ou decisão consciente de adiar.",
    link: "https://business.google.com",
  },
];

export const UGEA_PROMPT = `# 🏛️ UGEA OS — SISTEMA DE CONTRATAÇÃO PÚBLICA MOÇAMBICANA

## IDENTIDADE
Especialista em contratação pública moçambicana. Domina o Decreto n.º 79/2022, o Decreto n.º 46/2026 (5 de Agosto), a Central de Aquisições do Estado (CAE), o e-SISTAFE e o CEDSIF, IP.
Responde em português de Moçambique, de forma operacional, para funcionários de UGEA.

## CONTEXTO ACTUAL
- **Decreto n.º 79/2022** — Regulamento de Contratação de Empreitadas, Fornecimento de Bens e Prestação de Serviços ao Estado.
- **Decreto n.º 46/2026 (5/8/2026)** — Altera o 79/2022 (ajuste directo/regime excepcional, adendas, anti-corrupção, fiscalização prévia; adaptação a novas exigências de transparência e à CAE quando aplicável).
- **CAE, IP** — Central de Aquisições do Estado (centralização de compras em categorias definidas — confirmar âmbito oficial MEF/CAE).
- **e-SISTAFE / CEDSIF** — execução orçamental, cabimento, empenho, liquidação, pagamento (CUT).
- **INSS · Ago/2026** — capacitação de 29 funcionários UGEA (Marracuene) sobre o novo quadro.
- **Entidades de controlo:** MP (legalidade), UFSA (supervisão técnica), TA (fiscalização prévia), GCCC (anti-corrupção).

## PROTOCOLO DE RESPOSTA (obrigatório)
1. **BASE LEGAL** — Diploma aplicável (79/2022 e/ou 46/2026) + outros se relevantes (Lei 14/2020 SISTAFE).
2. **PROCEDIMENTO** — Passo a passo legal e operacional (UGEA → sistema → controlos).
3. **PRAZOS** — Só indique prazos se estiverem no diploma ou fonte oficial; senão diga «confirmar no texto legal».
4. **RISCO** — Irregularidades típicas e como evitá-las (segregação, cabimento, adendas, perfis e-SISTAFE).
5. **FONTE** — Dispositivo / artigo / secção se conhecido; senão estado ⚠️ Não verificado.
6. **PRÓXIMO PASSO** — 1 acção concreta para o técnico hoje.

## ESTADOS DE CONFIANÇA
- ✅ Verificado — fonte oficial confirmada
- ⚠️ Não verificado — precisa BR / Imprensa Nacional / MEF
- ❓ Inconclusivo — dados insuficientes
Nunca invente artigos, percentagens ou prazos. Na dúvida: declare ⚠️/❓.

## DIFERENCIAÇÃO RÁPIDA
| Aspecto | 79/2022 (base) | 46/2026 (alterações) |
|--------|----------------|----------------------|
| Quadro | Regulamento geral de contratação | Altera o 79/2022 |
| Excepcional / ajuste directo | Regime existente | Regras reforçadas de fundamentação e escrutínio |
| Adendas | Modificações contratuais | Controlo reforçado; limite orientador 25% do valor original* |
| Controlo | UFSA / TA / legalidade | MP, UFSA, TA, GCCC com fiscalização prévia reforçada |
| Centralização | UGEA descentralizada | CAE para categorias definidas* |
| Preferência / PME / conteúdo local | Preferência nacional (quadro geral) | Regras reforçadas reportadas (ex.: preferências e quotas)* |

\\* Valores percentuais e âmbito CAE: tratar como ⚠️ até confirmação no texto oficial do BR.

## REGRAS
- Diferencie sempre: regime geral vs excepcional.
- Adenda não pode desvirtuar o objecto → se desvirtuar, novo procedimento.
- Sem cabimento = despesa irregular.
- Quem prepara ≠ quem confere ≠ quem paga (segregação).
- Para dados actualizados: MEF, UFSA, CAE, AIM, Boletim da República.

## COMANDOS
- **ANALISAR** — situação de contratação à luz dos decretos.
- **COMPARAR** — 79/2022 vs 46/2026 no ponto pedido.
- **AUDITAR** — legalidade de um procedimento / checklist.
- **ENSINAR** — explicação para funcionário UGEA no campo.
- **ADENDA** — validar se a modificação é admissível.
- **AJUSTE** — enquadramento de ajuste directo / excepcional.

## FORMATO DE SAÍDA
📌 RESPOSTA ESSENCIAL
📋 PROCEDIMENTO
⏱️ PRAZOS
⚠️ RISCOS
📎 FONTES + estado
🔧 PRÓXIMO PASSO
`;

export const COMPARISON_46 = [
  {
    aspecto: "Centralização",
    d79: "Execução descentralizada nas UGEA",
    d46: "CAE para categorias definidas (confirmar âmbito oficial)",
    estado: "nao_verificado" as const,
  },
  {
    aspecto: "Preferência nacional",
    d79: "Preferência existente no quadro geral",
    d46: "Reforços reportados (ex. 15% serviços / 20% bens)*",
    estado: "nao_verificado" as const,
  },
  {
    aspecto: "Subcontratação PME",
    d79: "Não estruturada como cota fixa universal",
    d46: "Cota reportada de 20% em grandes obras para PME*",
    estado: "nao_verificado" as const,
  },
  {
    aspecto: "Produção / conteúdo nacional",
    d79: "Sem exigência uniforme clara",
    d46: "Incorporação nacional reportada (ex. 35% bens)*",
    estado: "nao_verificado" as const,
  },
  {
    aspecto: "Adendas",
    d79: "Modificações contratuais admitidas com regras",
    d46: "Controlo reforçado; limite orientador 25% + não mudar objecto",
    estado: "verificado" as const,
  },
  {
    aspecto: "Ajuste directo / excepcional",
    d79: "Regime excepcional previsto",
    d46: "Fundamentação e escrutínio reforçados",
    estado: "verificado" as const,
  },
  {
    aspecto: "Papel do MP / TA / GCCC",
    d79: "Fiscalização e legalidade no quadro geral",
    d46: "Fiscalização prévia e anti-corrupção reforçadas",
    estado: "verificado" as const,
  },
];

export const DESKTOP_PLAYBOOK = `# ARQUITETO FOUNDER OS — PLAYBOOK DESKTOP (Windows)
# Guarde como: C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS_PLAYBOOK.txt
# Data: 2026

========================================
0. REGRA DE OURO
========================================
- Um projecto de cada vez.
- CFO Hacker = INDEXAÇÃO (hoje).
- UGEA = PROMPT + CASOS (em paralelo, 20 min).
- Não inventar diplomas. O que não estiver no BR = ⚠️.

========================================
1. ABRIR FERRAMENTAS (5 min)
========================================
1) Windows + R → escreva: cmd → Enter
2) Abra o Bloco de notas: notepad
3) Abra o Chrome
4) Crie pasta de trabalho:

mkdir C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS 2>nul
cd /d C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS
mkdir cfo-hacker ugea-os 2>nul
dir

========================================
2. CFO HACKER — ORDEM DE EXECUÇÃO (HOJE)
========================================
ORDEM OBRIGATÓRIA (não salte):
  [1] Título + Meta description   (15 min)
  [2] Google Analytics 4          (20 min)
  [3] Google Search Console       (25 min)
  [4] robots.txt + sitemap.xml    (15 min)
  [5] PageSpeed Insights          (15 min)
  [ ] Google Business             (só depois)

CHECKLIST — copie para o Bloco de notas e marque [x]:

[ ] Title: CFO Hacker — IA para CFOs | Reduza Custos em 30%
[ ] Meta description correcta
[ ] og:title + og:description
[ ] canonical com URL final
[ ] robots index,follow
[ ] GA4 G-XXXX no <head> e tempo real OK
[ ] Search Console verificado
[ ] Sitemap submetido no GSC
[ ] robots.txt Allow: /
[ ] PageSpeed mobile anotado (meta >= 70)

----------------------------------------
2.1 TÍTULO E META (Bloco de notas / código)
----------------------------------------
Abra o ficheiro do site:

cd /d C:\\caminho\\do\\projecto\\cfo-hacker
notepad index.html

Cole no <head> (ajuste o domínio):

<title>CFO Hacker — IA para CFOs | Reduza Custos em 30%</title>
<meta name="description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://SEUDOMINIO.com/" />
<meta property="og:title" content="CFO Hacker — IA para CFOs | Reduza Custos em 30%" />
<meta property="og:description" content="Guia prático para líderes financeiros automatizarem análises e aumentarem margens com IA." />
<meta property="og:type" content="website" />

Guardar → publicar (Vercel/Systeme) → Ctrl+U no site e confirmar.

----------------------------------------
2.2 robots.txt
----------------------------------------
notepad public\\robots.txt

User-agent: *
Allow: /

Sitemap: https://SEUDOMINIO.com/sitemap.xml

----------------------------------------
2.3 sitemap.xml (mínimo)
----------------------------------------
notepad public\\sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://SEUDOMINIO.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>

Teste no browser:
https://SEUDOMINIO.com/robots.txt
https://SEUDOMINIO.com/sitemap.xml

----------------------------------------
2.4 Google Analytics
----------------------------------------
Browser → https://analytics.google.com
Criar GA4 → copiar G-XXXX
Colar gtag no <head> → publicar
Relatórios → Tempo real → deve ver 1 user

----------------------------------------
2.5 Search Console
----------------------------------------
https://search.google.com/search-console
Adicionar propriedade (URL prefix)
Verificar com meta tag HTML
Sitemaps → enviar sitemap.xml
Pedido de indexação da homepage (Inspeção de URL → Pedir indexação)

----------------------------------------
2.6 Velocidade
----------------------------------------
https://pagespeed.web.dev/
Colar URL → guardar scores no Bloco de notas:

Data:
Mobile:
Desktop:
LCP:
Acções:

========================================
3. UGEA OS — PROMPT (20 min)
========================================
1) Abra este site → menu «Founder OS»
2) Secção UGEA OS → botão COPIAR PROMPT
3) Guarde localmente:

cd /d C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS\\ugea-os
notepad UGEA_OS_PROMPT.md
(Ctrl+V → Guardar)

4) Teste num chat (ChatGPT/Claude/local):
   Cole o prompt + o caso de teste «ANALISAR».

5) Caso de teste sugerido (copie):

COMANDO: ANALISAR
SITUAÇÃO: UGEA distrital precisa de 10 computadores (estimativa 450.000 MT).
Quer usar ajuste directo por urgência. Fornecedor único local.
Pergunta: O que exige o quadro 79/2022 + 46/2026 antes de avançar?
Inclua cabimento e-SISTAFE, riscos GCCC e se CAE se aplica.

========================================
4. MONITORIA DIÁRIA (10 min)
========================================
Todas as manhãs:
[ ] GA4 tempo real / 24h (CFO)
[ ] Search Console → Cobertura / Página inicial (CFO)
[ ] 1 post ou 1 contacto de venda (CFO)
[ ] 1 caso UGEA ensaiado ou 1 actualização normativa lida
[ ] Anotar bloqueios no FOUNDER_OS\\diario.txt

notepad C:\\Users\\Patrimonio\\Documents\\FOUNDER_OS\\diario.txt

========================================
5. GIT / VERCEL (se o site estiver no GitHub)
========================================
cd /d C:\\caminho\\do\\repo
git status
git add .
git commit -m "seo: title meta robots sitemap"
git push origin main

Depois: Vercel faz deploy automático.
Confirme o domínio de produção e use ESSE domínio no GSC/GA.

========================================
FIM — Não saia do item [1] até estar [x]
========================================
`;

export const SAMPLE_CASE = `COMANDO: ANALISAR

SITUAÇÃO:
A UGEA de um instituto público precisa adquirir 10 computadores portáteis.
Valor estimado: 450.000 MT.
A chefia pede ajuste directo por "urgência de formação na próxima semana".
Há um fornecedor local habitual. Ainda não há cabimento no e-SISTAFE.
Há dúvida se a compra passa pela CAE.

PEDIDO:
1) Enquadre à luz do Decreto 79/2022 e do Decreto 46/2026.
2) Diga o procedimento mínimo legal/operacional.
3) Liste riscos (GCCC, segregação, urgência fictícia).
4) Indique o que fazer HOJE no e-SISTAFE antes de qualquer adjudicação.
5) Marque cada afirmação com ✅ / ⚠️ / ❓.`;
