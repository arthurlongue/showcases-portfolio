# P10. Arctos Creative

> **Fonte:** arctoscreative.com
> **Referência:** `P10-arctos-creative.webp`
> **Categoria:** Premium
> **Rota Alvo:** `/premium/fotografo`
> **Melhor Para:** Fotógrafos autorais, diretores de arte, estúdios criativos

**Visual DNA:** Galeria digital etérea. Base escura com camadas translúcidas e degradês orgânicos,
priorizando imagem, atmosfera e direção artística.

---

## Design Tokens

```css
/* Cores */
--bg-base: #050505;
--text-primary: #FFFFFF;
--text-secondary: #888888;
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--blur-cyan: #4facfe;
--blur-purple: #a18cd1;
--blur-pink: #fbc2eb;

/* Tipografia */
--font-heading: "Instrument Serif", "Cormorant Garamond", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 italic clamp(64px, 8vw, 120px) / 1.0 var(--font-heading);
--heading-section: 400 italic clamp(36px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 300 16px / 1.6 var(--font-body);

/* Espaçamento */
--section-padding: clamp(80px, 10vw, 120px);
--max-width: 1400px;

/* Bordas */
--radius-card: 24px;
--glass-blur: blur(24px);
```

---

## Diretrizes Globais (Projeto + DESIGN_CREATION_GUIDANCE)

- Contexto do projeto: este site é um showcase de portfolio para captar leads que querem contratar criação de sites.
- Entregável: landing page de nicho (LP), não plataforma digital.
- Linguagem obrigatória: 100% pt-BR em toda cópia visível, com texto realista do nicho.
- Proibido: login, cadastro com senha, dashboard, portal, área logada, app SaaS, onboarding de produto.
- Direção criativa: evitar visual genérico de IA. O resultado deve parecer um site autoral, premium e estratégico.
- Hierarquia mínima da LP: Hero com CTA, serviços, diferenciais/método, prova social, FAQ (quando fizer sentido), CTA final com contato.
- Conversão: CTA principal sempre orientado a lead (WhatsApp, formulário, ligação, solicitar orçamento, agendar avaliação).
- UX obrigatória: todo elemento clicável com hover, focus-visible ring e cursor-pointer.
- Motion: animações sutis e intencionais (entradas, reveals, hover). Nada gratuito ou distrativo.
- Responsividade: mobile-first real, com layout funcional em telas pequenas antes de escalar para desktop.
- Mídia: usar imagens coerentes com o nicho e com alta qualidade visual. Não usar placeholders quebrados.
- Acessibilidade e legibilidade: contraste adequado, tipografia clara e espaçamento consistente.

## Prompt de Replicação IA (pt-BR)

```txt
Você está criando uma landing page premium para fotógrafo.

Objetivo do projeto:
- Vender ensaios e captar leads qualificados.
- Posicionar o estúdio como assinatura artística de alto valor.

Escopo obrigatório:
- LP institucional em português do Brasil.
- Não criar área de cliente com login, prova online com senha, dashboard ou plataforma SaaS.
- A navegação deve servir à conversão e ao portfólio.

Direção visual:
- Fundo escuro profundo com gradientes orgânicos suaves.
- Cards translúcidos com glassmorphism real.
- Fotografia como protagonista absoluta.
- Tipografia serifada elegante em grande escala.

Estrutura recomendada:
1. Hero impactante com imagem forte + CTA "Solicitar orçamento".
2. Portfólio em trilha horizontal ou blocos editoriais.
3. Serviços (casamento, retrato, editorial, corporativo).
4. Processo criativo em etapas.
5. Depoimentos e marcas atendidas.
6. Contato rápido no final.

Interações:
- Hover lento em imagens (zoom suave).
- Revelação no scroll com blur para nitidez.
- Estados de foco e hover bem definidos.

Tom:
- Artístico, emocional e premium.
- Sempre um site de apresentação e captação, nunca uma plataforma.
```
