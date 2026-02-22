# Premium / Nutricionista

## Diretrizes de Design e Comportamento

- **Referência Visual:** Utilize a imagem de referência fornecida como guia principal para a estrutura, espaçamento e "feeling" do design.
- **Adaptação de Nicho:** Adapte o design da referência para o nicho solicitado. O resultado não deve ser uma cópia exata, mas uma reinterpretação focada no nicho.
- **Paleta de Cores:** Escolha uma paleta de cores que se encaixe no nicho e na referência visual.
- **Entregável:** Landing page de nicho (LP) em React + Tailwind CSS + Framer Motion (arquivo único).
- **Linguagem:** 100% pt-BR em toda cópia visível, com texto realista do nicho.
- **Proibido:** Login, cadastro com senha, dashboard, portal, área logada, app SaaS, onboarding de produto.
- **Direção criativa:** Evitar visual genérico de IA. O resultado deve parecer um site autoral, premium e estratégico.
- **Conversão:** CTA principal sempre orientado a lead (WhatsApp, formulário, ligação, solicitar orçamento, agendar avaliação).
- **UX obrigatória:** Todo elemento clicável com hover, focus-visible ring e cursor-pointer.
- **Motion:** Animações sutis e intencionais (entradas, reveals, hover). Nada gratuito ou distrativo.
- **Responsividade:** Mobile-first real, com layout funcional em telas pequenas antes de escalar para desktop.
- **Mídia:** Usar imagens do Unsplash coerentes com o nicho e com alta qualidade visual.

## Prompt de Replicação IA (pt-BR)

```txt
Você é um desenvolvedor frontend expert e designer de UI/UX.
Estou enviando uma imagem de referência de um site (`nutricionista.webp`).

Sua tarefa é criar uma landing page para o nicho de **Premium / Nutricionista**, usando React, Tailwind CSS v4 e Framer Motion (motion/react).

**Público-alvo / Melhor para:** Nutricionista clínica, nutrição funcional, reeducação alimentar
**Visual DNA:** Saúde premium com toque humano. Branco impecável, off-white quente e verdes profundos para transmitir confiança, acolhimento e autoridade.

Use a imagem de referência como guia para o estilo visual, layout, espaçamentos e tipografia, mas adapte o conteúdo e escolha uma paleta de cores que se encaixe perfeitamente no nicho solicitado.

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
