# S6. Ollie

> **Fonte:** myollie.com
> **Referência:** `S6-ollie.webp`
> **Categoria:** Essencial
> **Rota Alvo:** `/essencial/padaria`
> **Melhor Para:** Padaria artesanal, confeitaria local, café de bairro

**Visual DNA:** Aconchegante e artesanal. Tons quentes, texturas de comida real e composição limpa
para facilitar pedido e contato.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #FFFFFF;
--bg-warm: #F5EDE3;
--bg-sage: #8FAE7E;
--bg-terracotta: #C67B5C;
--text-primary: #5C4033;
--text-secondary: #666666;
--text-light: #FFFFFF;

/* Tipografia */
--font-heading: "DM Serif Text", "Lora", serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(40px, 5vw, 56px) / 1.15 var(--font-heading);
--heading-section: 500 clamp(24px, 3.5vw, 36px) / 1.25 var(--font-heading);
--body: 400 17px / 1.65 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1100px;

/* Bordas */
--radius-card: 24px;
--radius-image: 16px;
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
Você está criando uma landing page essencial para Padaria.

Objetivo do projeto:
- Atrair clientes locais e gerar pedidos/encomendas.
- Exibir cardápio e diferenciais de forma clara.

Escopo obrigatório:
- LP institucional em pt-BR.
- Não criar e-commerce completo, área logada, painel de pedidos ou plataforma.

Direção visual:
- Alternar branco com fundo quente (oatmeal).
- Destaques em terracota e verde sálvia.
- Fotos de pães, doces, vitrine e produção real.

Estrutura recomendada:
1. Hero convidativo + CTA "Fazer encomenda".
2. Cardápio principal com itens e preços.
3. Produtos sazonais/destaques.
4. Depoimentos e reputação local.
5. Endereço, horário e mapa.
6. CTA final para WhatsApp.

Interações:
- Hover suave em cards e botões.
- Feedback de clique claro.
- Foco visível em elementos interativos.

Tom:
- Artesanal, próximo e acolhedor.
- Página de captação local, sem lógica de plataforma.
```
