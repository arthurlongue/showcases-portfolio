# P5. MyHealthPrac

> **Fonte:** myhealthprac.com
> **Referência:** `P5-myhealthprac.webp`
> **Categoria:** Premium
> **Rota Alvo:** `/premium/assinatura-cafe`
> **Melhor Para:** Clube de café por assinatura, torrefação artesanal, cafeteria autoral

**Visual DNA:** Editorial quente, cinematográfico e sensorial. Tons de café espresso, creme e
destaques dourados para percepção de produto premium.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #FAF7F3;
--bg-secondary: #F5F0EB;
--bg-dark: #1A1208;
--bg-accent: #C49A5C;
--text-primary: #1A1208;
--text-secondary: #5A4D45;
--text-on-dark: #FAF7F3;

/* Tipografia */
--font-heading: "DM Serif Display", "Lora", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 clamp(44px, 5vw, 72px) / 1.1 var(--font-heading);
--heading-section: 400 clamp(30px, 3.5vw, 44px) / 1.2 var(--font-heading);
--body: 400 18px / 1.65 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* Bordas */
--radius-card: 12px;
--radius-image: 8px;
--radius-button: 999px;
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
Você está criando uma landing page premium para um serviço de assinatura de café.

Objetivo do projeto:
- Converter visitantes em assinantes por meio de CTA direto.
- Valorizar origem, curadoria e experiência sensorial do café.

Escopo obrigatório:
- Site institucional/LP em pt-BR para aquisição de leads e assinaturas.
- Não criar plataforma de gestão, área do cliente com login, dashboard de pedidos ou app.
- Sem linguagem de produto SaaS.

Direção visual:
- Base creme quente com blocos escuros em tom espresso.
- Cor de destaque dourada para CTAs e elementos de valor.
- Fotografia próxima: grãos, moagem, preparo, embalagem, ritual.

Estrutura recomendada:
1. Hero com headline forte + CTA "Assinar agora".
2. Como funciona a assinatura (3 passos simples).
3. Planos (mensal, quinzenal, presenteável) com benefícios claros.
4. Origem e curadoria dos grãos.
5. Depoimentos e prova social.
6. FAQ e CTA final.

Interações:
- Hover elegante em cards e botões.
- Revelações suaves no scroll.
- Feedback visual claro para botões clicáveis.

Tom:
- Sensorial, sofisticado e autoral.
- Foco em venda de assinatura como serviço direto, não como plataforma digital.
```
