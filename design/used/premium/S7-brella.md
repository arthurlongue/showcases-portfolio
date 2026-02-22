# S7. Brella

> **Fonte:** joinbrella.com
> **Referência:** `S7-brella.webp`
> **Categoria:** Premium
> **Rota Alvo:** `/premium/nutricionista`
> **Melhor Para:** Nutricionista clínica, nutrição funcional, reeducação alimentar

**Visual DNA:** Saúde premium com toque humano. Branco impecável, off-white quente e verdes
profundos para transmitir confiança, acolhimento e autoridade.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #FFFFFF;
--bg-warm: #F5F5F0;
--bg-sage: #E6EFEC;
--bg-forest: #2D6A4F;
--text-primary: #1A4331;
--text-secondary: #4A6E59;
--text-light: #FFFFFF;

/* Tipografia */
--font-heading: "Inter", "DM Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(40px, 5vw, 64px) / 1.1 var(--font-heading);
--heading-section: 600 clamp(28px, 3.5vw, 44px) / 1.2 var(--font-heading);
--body: 400 18px / 1.65 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* Bordas */
--radius-card: 16px;
--radius-button: 999px;
--radius-image: 8px;
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
Você está criando uma landing page premium para uma Nutricionista.

Objetivo do projeto:
- Captar leads para contratação de consulta (WhatsApp, formulário ou telefone).
- Comunicar autoridade clínica + acolhimento.

Escopo obrigatório:
- Página institucional de serviços (LP), em português do Brasil.
- Não criar plataforma, app, dashboard, área do paciente, login, cadastro com senha ou onboarding de produto.
- Não usar linguagem de SaaS.

Direção visual:
- Alternar branco (#FFFFFF) com off-white quente (#F5F5F0).
- Usar verde floresta (#2D6A4F) como cor de ação para botões e destaques.
- Sombras suaves com leve tom esverdeado.
- Fotos reais de alimentação saudável, atendimento e bastidores de consultório.

Estrutura recomendada:
1. Hero com proposta clara + CTA "Agendar avaliação nutricional".
2. Blocos de serviços (emagrecimento, performance, saúde intestinal, acompanhamento).
3. Método de acompanhamento em etapas.
4. Provas de confiança (CRN, depoimentos, resultados possíveis sem promessas irreais).
5. FAQ objetivo.
6. Bloco final com CTA forte e contato rápido.

Microinterações:
- Hover de botões com leve escala (1.02) e transição suave.
- Cards surgindo com fade + translateY curto.
- Foco visível em links e botões para acessibilidade.

Tom:
- Premium, limpo, humano e confiável.
- Sempre vender serviço profissional, nunca produto/plataforma digital.
```
