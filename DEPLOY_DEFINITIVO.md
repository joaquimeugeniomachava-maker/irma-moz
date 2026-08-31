# DEPLOY DEFINITIVO — MOZ-SISTAFE
# 27/08/2026 · Aceite no grupo CEDSIF, IP

Objectivo: https://moz-sistafe.vercel.app mostrar ESTE manual
(emblema, BR/INM, AEO/AEF, loja, CV separado, letras A+).

---

## CAMINHO RECOMENDADO (substituir o site Next antigo)

O GitHub `irma-moz` e a Vercel ainda servem o Next antigo.
Vamos publicar ESTE projecto Vite no mesmo URL.

### A) No PC — localizar ESTA pasta do builder

Se exportaste / descarregaste o projecto desta conversa, entra nela.
Se o código só existe no ambiente Arena, faz Download do projecto primeiro.

Exemplo (ajusta o caminho real):

```bat
cd /d C:\Users\Patrimonio\Downloads
dir
```

Procura a pasta deste app (react-vite / moz-sistafe / arena project).

### B) Ligar ao GitHub irma-moz (mesmo remote do site)

**Opção B1 — repo limpo na main (histórico novo, mais simples)**

```bat
cd /d CAMINHO\DESTA\PASTA_VITE
git init
git remote add origin https://github.com/joaquimeugeniomachava-maker/irma-moz.git
git checkout -b main
git add .
git commit -m "deploy: MOZ-SISTAFE manual definitivo CEDSIF"
git push -u origin main --force
```

⚠️ `--force` substitui o Next antigo no GitHub.
Só usa se tiveres a certeza de que o backup do Next já não é preciso
(ou já está noutro sítio).

**Opção B2 — sem force (branch e mudar na Vercel)**

```bat
git checkout -b moz-sistafe-vite
git add .
git commit -m "deploy: MOZ-SISTAFE vite definitivo"
git push -u origin moz-sistafe-vite
```

Na Vercel: Project → Settings → Git → Production Branch = `moz-sistafe-vite`
Framework: Vite · Build: `npm run build` · Output: `dist`

### C) Vercel (dashboard)

1. https://vercel.com → project ligado a `irma-moz`
   (joaquimeugeniomachava-4349s-projects)
2. Deployments → espera **Ready** (verde)
3. Abre https://moz-sistafe.vercel.app com Ctrl+F5

### D) Checklist PASS no telemóvel

- [ ] Home: emblema + nome “Manual Inteligente do SISTAFE…”
- [ ] Menu: Portal, Ciclo, Perfis, BR·INM (sem confusão de 20 itens de ops)
- [ ] Perfis: AEO vs AEF claro
- [ ] Loja: WhatsApp 84 489 8420 · pagamento 87 048 8008
- [ ] Rodapé: link Imprensa Nacional / BR
- [ ] Botão A+ funciona
- [ ] CV Maker só como produto irmão (não no menu principal do Estado)

---

## Se der erro de build na Vercel

```
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Node: 20.x
```

---

## Mensagem curta para o grupo CEDSIF (após deploy)

```text
Colegas — o portal foi actualizado (consulta + ciclo + fontes oficiais BR/INM).

👉 https://moz-sistafe.vercel.app

Continua complementar à formação CEDSIF — não a substitui.
Obrigado pelo apoio à partilha.
```

---

## NÃO FAZER no dia do deploy

- Não anunciar CV Maker / 50 MT no grupo CEDSIF
- Não force push se não souberes o que estás a substituir
- Não mudar números de contacto à última hora
