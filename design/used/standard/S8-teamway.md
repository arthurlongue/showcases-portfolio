# S8. Teamway

> **Fonte:** teamway.io
> **Referência:** `S8-teamway.webp`
> **Categoria:** Essencial
> **Rota Alvo:** `/essencial/manicure`
> **Melhor Para:** Manicure, nail designer, estúdio de unhas

**Visual DNA:** Limpo, feminino e comercial. Pastéis suaves com foco em portfólio visual,
serviços e agendamento rápido.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #FAFAF5;
--bg-lavender: #E8E0F5;
--bg-peach: #F5E0D8;
--bg-mint: #E0F0E8;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-light: #FFFFFF;

/* Tipografia */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(32px, 4vw, 48px) / 1.15 var(--font-heading);
--heading-section: 500 clamp(20px, 2.5vw, 28px) / 1.25 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1100px;

/* Bordas */
--radius-card: 16px;
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
Você está criando uma landing page essencial para Manicure.

Objetivo do projeto:
- Gerar agendamentos rápidos.
- Mostrar qualidade do trabalho com fotos e provas sociais.

Escopo obrigatório:
- LP institucional em pt-BR.
- Não criar área de cliente, login, painel de horários avançado ou plataforma.

Direção visual:
- Fundo off-white com cartões em tons pastel.
- Fotos close-up de unhas e do espaço.
- Visual leve, organizado e comercial.

Estrutura recomendada:
1. Hero com proposta + CTA "Agendar horário".
2. Serviços e preços iniciais.
3. Galeria antes/depois.
4. Depoimentos de clientes.
5. Sobre a profissional.
6. CTA final com WhatsApp.

Interações:
- Transições rápidas e suaves (200ms).
- Hover claro em cards e botões.
- Focus ring obrigatório em elementos clicáveis.

Tom:
- Acolhedor, profissional e direto para conversão.
- Site de captação local, sem arquitetura de plataforma.
```
