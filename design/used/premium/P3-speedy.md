# P3. Speedy.io

> **Fonte:** speedy.io
> **Referência:** `P3-speedy.webp`
> **Categoria:** Premium
> **Rota Alvo:** `/premium/personal`
> **Melhor Para:** Personal trainer, preparação física, coach de performance

**Visual DNA:** Energia alta, contraste extremo e linguagem visual de performance. Preto profundo,
branco agressivo e verde neon como cor de ataque.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #040404;
--bg-secondary: #141414;
--text-primary: #FFFFFF;
--text-secondary: #999999;
--accent-neon: #E6FF00;

/* Tipografia */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 800 clamp(48px, 6vw, 96px) / 1.0 var(--font-heading);
--heading-section: 700 clamp(32px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* Bordas */
--radius-card: 24px;
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
Você está criando uma landing page premium para Personal Trainer.

Objetivo do projeto:
- Converter tráfego em leads para consultoria/treino.
- Passar autoridade em performance e transformação física.

Escopo obrigatório:
- LP institucional em pt-BR.
- Não criar app de treino, login de aluno, painel de progresso ou plataforma.
- Nada de fluxo SaaS; foco em contratação direta.

Direção visual:
- Canvas preto com alto contraste e verde neon pontual.
- Fotos preto e branco de treino real com muita intensidade.
- Tipografia grande, densa e impactante.

Estrutura recomendada:
1. Hero com promessa forte + CTA "Começar agora".
2. Programas/serviços com cards de alta legibilidade.
3. Bloco de resultados e métricas de alunos.
4. Método de acompanhamento (diagnóstico, plano, execução).
5. Depoimentos em vídeo/texto.
6. CTA final para WhatsApp/form.

Interações:
- Transições rápidas e firmes.
- Hover com contraste forte nos CTAs.
- Focus ring visível em toda navegação.

Tom:
- Agressivo, premium e orientado a resultado.
- Vender serviço do personal, não produto digital.
```
