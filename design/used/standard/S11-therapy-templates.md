> **Fontes:** Dr. Devis, Laura Fragman, Elias therapist templates
> **Referências:** `S11-therapy-dr-devis-full.webp`, `S11-therapy-dr-devis-overview.webp`, `S11-therapy-laura-fragman.webp`, `S11-therapy-elias.webp`
> **Categoria:** Essencial
> **Rota Alvo:** `/essencial/psicologo`
> **Melhor Para:** Psicólogo clínico, terapeuta, psicanalista

**Visual DNA:** Humano, acolhedor e profissional. Fundo quente, tipografia serifa suave e ritmo
calmo para transmitir segurança emocional.

---

## Design Tokens

```css
/* Cores */
--bg-primary: #F5E6D0;
--bg-light: #FFFFFF;
--bg-olive: #8FA84A;
--bg-peach: #FDDCCC;
--text-primary: #8B4513;
--text-secondary: #666655;
--text-light: #FFFFFF;

/* Tipografia */
--font-heading: "DM Serif Display", "Playfair Display", serif;
--font-body: "Inter", "DM Sans", sans-serif;
--heading-hero: 400 clamp(36px, 4.5vw, 48px) / 1.15 var(--font-heading);
--heading-section: 400 clamp(24px, 3vw, 32px) / 1.2 var(--font-heading);
--body: 400 16px / 1.65 var(--font-body);

/* Espaçamento */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1000px;

/* Bordas */
--radius-card: 12px;
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
Você está criando uma landing page essencial para Psicólogo.

Objetivo do projeto:
- Gerar agendamentos de primeira consulta.
- Transmitir acolhimento, ética e confiança.

Escopo obrigatório:
- LP institucional em português do Brasil.
- Não criar prontuário digital, portal do paciente, login ou plataforma.

Direção visual:
- Fundo areia quente com cartões claros para respiro.
- Tipografia serifa leve e legível.
- Fotos reais do profissional e ambiente de atendimento.

Estrutura recomendada:
1. Hero com proposta acolhedora + CTA "Agendar consulta".
2. Sobre o profissional (abordagem, público, experiência).
3. Especialidades/temas atendidos.
4. Como funciona o processo terapêutico.
5. Perguntas frequentes e informações de sessão.
6. CTA final com WhatsApp e contato.

Interações:
- Animações discretas, sem estímulo excessivo.
- Acordeões para FAQ com transição suave.
- Foco visível e acessível em botões/links.

Tom:
- Seguro, empático e claro.
- Sempre site institucional de captação de pacientes.
```
