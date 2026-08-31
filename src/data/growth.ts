export const PORTAL_URL = "https://moz-sistafe.vercel.app";

/** Auditoria do portal em produção — OBSERVADO vs SUGESTÃO */
export const AUDIT = {
  url: PORTAL_URL,
  date: "2026-08-25",
  critico: [
    {
      id: "c1",
      title: "Inconsistência AEO vs AEF na liquidação",
      observado:
        "Na página /formacao (Resposta rápida · Liquidação) o responsável aparece como «Agente de Execução Orçamental + Controlo Interno». Na página /ciclo (passo 7) a liquidação/autorização de pagamento é atribuída ao Agente de Execução Financeira (AEF). Na página /perfis, AEO = cabimentação/liquidação processual e AEF = pagamento.",
      risco:
        "É exactamente a dor da copy viral. Se o portal contradiz-se no ponto de entrada, perde a confiança que está a vender.",
      sugestao:
        "Padronizar em todo o site: AEO trata fase orçamental (cabimento e processo); AEF trata pagamento/adiantamentos com processo válido; Controlo Interno confere e não paga. Uma frase fixa no topo de /perfis e na resposta rápida.",
    },
    {
      id: "c2",
      title: "Homepage não mostra as 4 métricas prometidas na copy",
      observado:
        "A copy social promete «27 siglas · 13 perfis · 10 erros · ciclo completo». No HTML/render da homepage pública as contagens (27+, 13, 10, 26) não aparecem de forma clara no texto extraído — só o bloco de base legal.",
      risco:
        "Visitante que chega do Facebook não confirma em 3 segundos a promessa do post.",
      sugestao:
        "Colocar os 4 cartões acima da dobra, com links directos, e repetir a pergunta AEO vs AEF no hero.",
    },
  ],
  importante: [
    {
      id: "i1",
      title: "robots.txt ausente / inacessível",
      observado: "GET /robots.txt no domínio de produção devolveu erro/indisponível.",
      risco: "Dificulta rastreio e pedido de indexação no Search Console.",
      sugestao: "Publicar robots.txt com Allow: / e Sitemap absoluto do domínio Vercel.",
    },
    {
      id: "i2",
      title: "Tom «retorno / M-Pesa / painel» na homepage pública",
      observado:
        "A homepage mistura utilidade pública com funil de rendimento («Manual pago», «recebes no teu número», «vês o rendimento real»).",
      risco:
        "Para o funcionário público que chega pela copy de serviço, o tom comercial cedo demais pode reduzir credibilidade institucional.",
      sugestao:
        "Manter loja, mas na 1.ª tela: só dor → prova → portal. Funil de venda depois do valor (secção inferior ou /loja).",
    },
    {
      id: "i3",
      title: "MPE com dois significados no mesmo fluxo",
      observado:
        "No ciclo, Ficha MPE está ❓ e admite Mapa de Previsão de Execução OU Módulo de Património.",
      risco: "Correcto em rigor, mas confunde o técnico no campo se não houver regra de leitura.",
      sugestao:
        "Frase padrão: «Neste roteiro de despesa, leia MPE como mapa/plano de execução orçamental; património = módulo MPE/SPE noutro trilho.»",
    },
    {
      id: "i4",
      title: "Mobile: navegação longa",
      observado:
        "Muitas rotas (/formacao, /siglas, /perfis, /ciclo, /erros, /loja, /alavancagem, /auditoria). No telemóvel o caminho até AEO vs AEF não é óbvio a partir do post.",
      risco: "O post vende a diferença AEO/AEF; o site não a destaca na 1.ª dobra.",
      sugestao:
        "Botão sticky ou card na homepage: «AEO vs AEF — 30 segundos» → âncora em /perfis.",
    },
  ],
  melhoria: [
    {
      id: "m1",
      title: "Meta title genérico",
      observado: "Title do separador: «SISTAFE - Contabilidade Publica de Mocambique» (sem acentos, pouco orientado a clique).",
      sugestao:
        "Ex.: «Manual e-SISTAFE — AEO vs AEF, siglas e erros | Moçambique».",
    },
    {
      id: "m2",
      title: "Prova social e autor",
      observado: "Pouco destaque a quem mantém o portal e à política de «não inventar».",
      sugestao: "Linha fixa: autor + «estados ✅⚠️❓» + link CEDSIF/UFSA.",
    },
    {
      id: "m3",
      title: "Partilha WhatsApp/Facebook",
      observado: "Não há botão «Copiar mensagem pronta» no próprio portal.",
      sugestao: "Botão de partilha com a copy lapidada (já preparada neste Founder OS).",
    },
    {
      id: "m4",
      title: "Sitemap / GSC",
      observado: "Não verificado nesta auditoria se sitemap.xml está activo no mesmo domínio.",
      sugestao: "Confirmar /sitemap.xml e submeter no Search Console do domínio moz-sistafe.vercel.app.",
    },
  ],
  oneThing:
    "Corrigir e destacar em toda a 1.ª experiência a diferença AEO vs AEF (texto único, sem contradições) — é a promessa da copy, a dor real e o motivo de partilha.",
};

export const COPY_LAPIDADA = `Sabe o que pode acontecer quando falta clareza no e-SISTAFE?

Processos travam.
Documentos voltam.
O pagamento atrasa.

Muitas vezes não é falta de trabalho.
É falta de informação no momento certo.

🇲🇿 MANUAL INTELIGENTE DO SISTAFE
e Ciclo Completo de Administração Pública de Moçambique

Pergunta:
Sabe a diferença entre Agente de Execução Orçamental e Agente de Execução Financeira?

Se hesitou — isto é para si (e para quem forma equipas no Estado):

👉 ${PORTAL_URL}

Consulta gratuita:
• Siglas e conceitos
• Perfis (pode / não pode)
• Erros comuns
• Ciclo da despesa
• Seis subsistemas (Lei 14/2020)
• Ligação ao Boletim da República (Imprensa Nacional)

Para o cidadão, o funcionário e o formador.
No telemóvel. Sem instalar.

Guarde o link. Envie a quem trabalha na Administração Pública.

Informação certa, no momento certo.

#eSISTAFE #SISTAFE #Mocambique #AdministracaoPublica #CEDSIF #UFSA #UGEA`;

export const COPY_CURTA_WA = `🇲🇿 e-SISTAFE em 30 segundos

Sabe a diferença entre Agente de Execução Orçamental e Agente de Execução Financeira?

Portal gratuito:
${PORTAL_URL}

Siglas · perfis · erros · ciclo da despesa
Lei 14/2020 · Decretos 79/2022 e 42/2018

Partilhe com quem trabalha na admin. pública.`;

/** Tom institucional — grupos CEDSIF / formação oficial */
export const COPY_CEDSIF_GROUP = `📚🇲🇿 Partilha para apoio à formação em e-SISTAFE

Caros colegas,

Para quem está em formação ou trabalha com o e-SISTAFE, partilho uma ferramenta gratuita de consulta e revisão de conceitos no dia a dia.

*MOZ-SISTAFE*
• Siglas e conceitos de forma simples
• Perfis e responsabilidades dos intervenientes
• Erros comuns e pontos de atenção
• Ciclo da despesa
• Referências à legislação relevante
• Acesso pelo telemóvel, sem instalação

👉 ${PORTAL_URL}

A ideia é servir como *ferramenta complementar de consulta*, não substituir os conteúdos, orientações ou formação oficial do CEDSIF.

Se estiver a estudar, tiver dúvidas sobre algum conceito ou quiser testar a compreensão de um processo, pode usar o portal como apoio.

Informação certa, no momento certo, pode evitar erros processuais.

Partilho para que possa ser útil aos colegas. 🇲🇿

#eSISTAFE #Moçambique #AdministraçãoPública #ContabilidadePública #CEDSIF #UFSA #UGEA`;

export const COPY_CEDSIF_SHORT = `Colegas — ferramenta *complementar* (não oficial) para consulta rápida em e-SISTAFE:

Siglas · perfis · erros · ciclo da despesa · legislação

👉 ${PORTAL_URL}

Gratuito · telemóvel · sem instalar
Não substitui a formação nem as orientações do CEDSIF.

#eSISTAFE #CEDSIF`;

export const COPY_HOOK_AEO_AEF = `⚙️ AEO vs AEF (e-SISTAFE)

Agente de Execução Orçamental (AEO)
→ Cabimenta e trata a fase orçamental / processo da despesa
→ Não é o perfil de «mandar sair o dinheiro» sozinho

Agente de Execução Financeira (AEF)
→ Executa pagamento e adiantamentos
→ Só com processo válido

Controlo Interno → confere, não executa a despesa
Ordenador → autoriza

Fonte de leitura: portal ${PORTAL_URL}/perfis
Confirme sempre no manual CEDSIF da sua unidade.`;

/** 80/20 — O Maior Vendedor do Mundo (Og Mandino) + Homem mais rico da Babilónia */
export const BOOKS_8020 = {
  mandino: {
    title: "O Maior Vendedor do Mundo",
    author: "Og Mandino",
    essence: "Hábitos diários > talento. O pergaminho que se vive vence o que só se lê.",
    scrolls: [
      {
        n: 1,
        name: "Eu sou um grande sucesso",
        core: "Identidade antes da táctica.",
        ugea: "Sou o técnico que evita o erro processual — não o que «empurra papel».",
        founder: "Sou o construtor do Manual e-SISTAFE para a nação, não um post solto.",
      },
      {
        n: 2,
        name: "Saudarei este dia com amor",
        core: "Servir primeiro.",
        ugea: "Tratar o colega da UGEA com paciência: ensinar AEO/AEF sem humilhar.",
        founder: "A copy começa na dor do outro, não no ego do produto.",
      },
      {
        n: 3,
        name: "Persistirei até conseguir",
        core: "Repetição até à maestria.",
        ugea: "Rever o mesmo processo até cabimento → liquidação → pagamento ficar limpo.",
        founder: "1 post/dia + 1 melhoria/semana no portal. Sem drama.",
      },
      {
        n: 4,
        name: "Sou da natureza única",
        core: "Diferenciação real.",
        ugea: "O diferencial é rigor (✅⚠️❓), não volume de texto.",
        founder: "Nicho: contabilidade pública MZ + linguagem de campo.",
      },
      {
        n: 5,
        name: "Viverei este dia como se fosse o último",
        core: "Urgência nobre.",
        ugea: "Hoje fecho o processo que está a atrasar o pagamento de alguém.",
        founder: "Hoje indexo / publico / corrijo AEO vs AEF — não «amanhã».",
      },
      {
        n: 6,
        name: "Serei senhor das minhas emoções",
        core: "Calma sob pressão.",
        ugea: "Documento devolvido ≠ insulto. É checklist.",
        founder: "Comentário negativo no FB: responder com link e facto, não ego.",
      },
      {
        n: 7,
        name: "Rirei do mundo",
        core: "Leveza e resiliência.",
        ugea: "Errar no perfil ensina; esconder o erro custa caro.",
        founder: "Rir do deploy falhado, corrigir em 1h, seguir.",
      },
      {
        n: 8,
        name: "Multiplicarei o meu valor",
        core: "Crescer cada dia 1%.",
        ugea: "1 sigla ou 1 erro estudado por dia.",
        founder: "1 melhoria de UX ou 1 peça de conteúdo por dia.",
      },
      {
        n: 9,
        name: "Terei compaixão",
        core: "Empatia na acção.",
        ugea: "Formar o colega novo no distrito como gostaria de ter sido formado.",
        founder: "Portal gratuito primeiro; loja depois da confiança.",
      },
      {
        n: 10,
        name: "Guiar-me-ei pelo amor e a oração / propósito",
        core: "Propósito acima do impulso.",
        ugea: "O dinheiro público não é abstracto — é escola, saúde, salário.",
        founder: "Missão: menos processo travado em Moçambique.",
      },
    ],
    sales8020: [
      "Não vendas o portal — vende o fim do processo que volta.",
      "Uma pergunta afiada (AEO vs AEF) > 10 adjectives.",
      "Prova em 3 segundos (link + 4 bullets) > discurso longo.",
      "Partilha fácil (WhatsApp) é o teu exército de vendas.",
      "Nunca afirme «a maioria» ou «cada decreto» sem evidência — precisão é a marca.",
    ],
  },
  babylon: {
    title: "O Homem mais rico da Babilónia",
    author: "George S. Clason (1910)",
    essence: "Guarde parte do que entra. Faça o dinheiro trabalhar. Proteja o capital. Conhecimento paga juros.",
    laws: [
      {
        name: "Pague-se primeiro (1/10)",
        core: "Guardar ≥10% do que entra.",
        apply:
          "Founder: 10% do tempo ou da receita M-Pesa vai para reserva + melhoria do portal. Funcionário: 10% da energia da semana para estudar o sistema (não só apagar fogos).",
      },
      {
        name: "Controle as despesas",
        core: "Desejo ≠ necessidade.",
        apply:
          "Não gastar verba sem cabimento. Não gastar atenção em features antes de corrigir AEO/AEF.",
      },
      {
        name: "Faça o ouro multiplicar",
        core: "Investir com retorno.",
        apply:
          "Conteúdo que ensina → confiança → formação/manual pago. O gratuito é isco de valor, não caridade sem estratégia.",
      },
      {
        name: "Proteja o tesouro de perdas",
        core: "Não arriscar o essencial.",
        apply:
          "Rigor legal: estados ✅⚠️❓. Não publicar percentagens ou artigos não confirmados. Backup do repo e domínio.",
      },
      {
        name: "Torne o lar um investimento",
        core: "Base sólida.",
        apply:
          "Infra: Vercel estável, SEO básico, robots/sitemap, Analytics. Casa digital em ordem.",
      },
      {
        name: "Garanta uma renda futura",
        core: "Activos que trabalham.",
        apply:
          "PDF + formação + lista de contactos UGEA. Activos > posts que morrem em 24h.",
      },
      {
        name: "Aumente a capacidade de ganhar",
        core: "Skill stack.",
        apply:
          "Dominar ciclo + perfis + 46/2026 + copy. Quanto mais clareza, mais o país partilha o teu link.",
      },
    ],
    ugeaMoneyTruths: [
      "Cabimento é a versão pública de «não gastes o que não tens».",
      "Segregação de funções é a versão pública de «não confies todo o ouro a uma só mão».",
      "Registo no e-SISTAFE é o livro-razão da Babilónia digital.",
      "Adenda sem controlo é «investir no que não entendes».",
    ],
  },
};

export const AEO_AEF = {
  aeo: {
    sigla: "AEO",
    nome: "Agente de Execução Orçamental",
    faz: [
      "Cabimentação",
      "Tratar o processo administrativo da despesa na fase orçamental",
      "Liquidação no sentido de fase do processo orçamental (conforme manual da unidade)",
      "Abrir / manter / encerrar processos administrativos da despesa",
    ],
    naoFaz: [
      "Não deve ser o único a autorizar a saída de fundos",
      "Não substitui o Ordenador de Despesas",
      "Não gere acessos de segurança",
    ],
  },
  aef: {
    sigla: "AEF",
    nome: "Agente de Execução Financeira",
    faz: [
      "Executar a fase de pagamento",
      "Concessão de adiantamentos de fundos",
      "Operar só com processo válido e conforme",
    ],
    naoFaz: [
      "Não inventa cabimento onde não há saldo",
      "Não paga sem documentação e liquidação/processo válido",
      "Não acumula perfil de conformidade «para ir mais depressa»",
    ],
  },
  rule: "Orçamento cabimenta e prepara · Financeiro paga · Controlo confere · Ordenador autoriza · Segurança só gere acessos.",
};
