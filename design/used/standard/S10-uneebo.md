# S10. Uneebo

> **Fonte:** uneebo.com
> **Referência:** `S10-uneebo.webp`
> **Categoria:** Essencial
> **Rota Alvo:** `/essencial/servicos-residenciais`
> **Melhor Para:** Serviços residenciais, reformas, manutenção, paisagismo

**Visual DNA:** Minimalismo escandinavo funcional. Branco predominante, linhas finas e fotos de
execução real para reforçar organização e confiança.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #FFFFFF;
--bg-gray: #F8F9FA;
--bg-dark: #1A1A1A;
--accent-border: #E9ECEF;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-light: #FFFFFF;

/* Tipografia */
--font-heading: "DM Serif Text", "Lora", serif;
--font-body: "Inter", sans-serif;
--heading-hero: 500 clamp(32px, 4vw, 48px) / 1.2 var(--font-heading);
--heading-section: 500 clamp(24px, 3vw, 36px) / 1.25 var(--font-heading);
--body: 400 16px / 1.65 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1200px;

/* Bordas */
--radius-card: 8px;
--radius-button: 4px;
--radius-image: 4px;
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
Você está criando uma landing page essencial para serviços residenciais.

Objetivo do projeto:
- Gerar pedidos de orçamento para serviços locais.
- Comunicar pontualidade, qualidade e garantia.

Escopo obrigatório:
- LP institucional em português do Brasil.
- Não criar sistema de chamados com login, painel do cliente, app ou plataforma.

Direção visual:
- Branco predominante com blocos cinza claro.
- Grid limpo com bordas de 1px.
- Visual técnico, organizado e objetivo.

Estrutura recomendada:
1. Hero com proposta direta + CTA "Pedir orçamento".
2. Lista de serviços com ícones simples.
3. Etapas do atendimento (orçamento, execução, entrega).
4. Antes e depois.
5. Garantias e prova social.
6. Contato final.

Interações:
- Hover simples e funcional.
- Animações rápidas sem exagero.
- Estados de foco visíveis.

Tom:
- Profissional, claro e confiável.
- Sempre página de captação de serviços locais.
```
