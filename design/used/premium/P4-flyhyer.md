# P4. FlyHyer

> **Fonte:** flyhyer.com
> **Referência:** `P4-flyhyer.webp`
> **Categoria:** Premium
> **Rota Alvo:** `/premium/dentista`
> **Melhor Para:** Odontologia estética, clínica odontológica premium, harmonização facial

**Visual DNA:** Luxo clínico e precisão. Contraste entre branco puro e azul-marinho profundo,
com composição arquitetônica e muito espaço negativo.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #0D1B2A;
--bg-secondary: #1B263B;
--bg-light: #FFFFFF;
--bg-gray: #F8F9FA;
--text-primary: #0D1B2A;
--text-light: #FFFFFF;
--text-secondary: #6C757D;
--accent-border: #E0E0E0;

/* Tipografia */
--font-heading: "Playfair Display", "DM Serif Display", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 clamp(56px, 8vw, 96px) / 1.0 var(--font-heading);
--heading-section: 400 clamp(36px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 400 16px / 1.8 var(--font-body);
--label: 500 13px / 1 var(--font-body);

/* Espaçamento */
--section-padding: clamp(80px, 10vw, 130px);
--max-width: 1200px;

/* Bordas */
--radius-card: 0px;
--radius-button: 0px;
--radius-image: 0px;
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
Você está criando uma landing page premium para clínica odontológica.

Objetivo do projeto:
- Gerar agendamentos de avaliação e contatos comerciais.
- Comunicar excelência, segurança e estética de alto padrão.

Escopo obrigatório:
- Landing page institucional em pt-BR.
- Não criar portal do paciente, login, dashboard, prontuário digital ou plataforma.
- Sem visual de health-tech genérico.

Direção visual:
- Alternância rigorosa entre branco puro e azul-marinho profundo.
- Linhas finas de 1px para estrutura.
- Sem cores vibrantes e sem cantos arredondados.
- Fotos reais da clínica, equipe e resultados naturais.

Estrutura recomendada:
1. Hero com headline de autoridade + CTA "Agendar avaliação".
2. Procedimentos em grade técnica (lentes, facetas, implantes, clareamento).
3. Bloco de diferenciais (tecnologia, biossegurança, atendimento).
4. Antes e depois com apresentação sóbria.
5. Depoimentos e credenciais.
6. CTA final com canais de contato.

Interações:
- Animações lentas e discretas.
- Hover de linhas/tabelas destacando a linha inteira.
- Foco visível em todos os elementos clicáveis.

Tom:
- Exclusivo, preciso e confiável.
- Site de captação de pacientes, nunca produto digital.
```
