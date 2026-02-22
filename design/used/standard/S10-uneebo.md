# S10. Uneebo

> **Source:** uneebo.com
> **Reference:** `S10-uneebo.webp`
> **Category:** Standard
> **Best For:** Serviços residenciais, arquitetos locais, reformas, paisagismo, decoradores

**Visual DNA:** Clean, Scandinavian minimal service page. Pure whites, subtle gray strokes, and pristine photography of clean houses. Emphasis on rigid structural grids to project competence, organization, and elite execution for local home services.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-gray: #F8F9FA;
--bg-dark: #1A1A1A;
--accent-border: #E9ECEF;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-light: #FFFFFF;

/* ── Typography ── */
--font-heading: "DM Serif Text", "Lora", serif;
--font-body: "Inter", sans-serif;
--heading-hero: 500 clamp(32px, 4vw, 48px) / 1.2 var(--font-heading);
--heading-section: 500 clamp(24px, 3vw, 36px) / 1.25 var(--font-heading);
--body: 400 16px / 1.65 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 8px; /* Architectural precision */
--radius-button: 4px;
--radius-image: 4px;
```

---

## AI Replication Prompt

```
You are building an architectural/home services standard landing page (reformas, paisagismo, decoradores). Apply a clean Scandinavian minimal aesthetic to strip away clutter. The design must communicate "we are clean, punctual, and highly skilled." Follow these rules:

VISUAL FOUNDATION:
- Pure White (#FFFFFF): Nearly the entire design sits on a pristine white background, letting the photography of completed home projects bring the color.
- Structural framing: Rely heavily on 1px borders (#E9ECEF) to create rigid architectural grids, cards, and tables for services.
- Dark Anchor (#1A1A1A) for footers and high-impact CTA sections to create stark contrast.
- Corner radii are tighter (8px) to signify precision and construction. No soft bubbly elements.

TYPOGRAPHY:
- Confident, structured serif headers paired with highly legible, tracked-out sans-serif microcopy (e.g., "01 — PINTURA", "02 — REFORMA").
- Utilize strict column alignments. Text paragraphs should align perfectly with the edges of photographic grids beneath them.

LAYOUT:
- Hero: Centered serif headline + dark CTA button + full-width architectural photo below.
- Process timelines: A vertical or horizontal line-art timeline detailing exactly how the service works ("1. Orçamento -> 2. Execução -> 3. Entrega").
- Before/After comparisons using native CSS image clipping or side-by-side rigid grids.
- "The Guarantee" badge: A minimalist, trust-building badge highlighting warranty or punctuality guarantees.

COMPONENTS:
- Primary Button: Dark background (#1A1A1A), white text, 4px sharp radius.
- Cards: Pure white, 1px light gray border, 8px radius.
- Line-art icons: Thin, technical stroke architectural icons to symbolize services.

ANIMATIONS & MICRO-INTERACTIONS:
- Functional, snap-to-grid interactions. Accordions open instantly. 
- Fast image loading and clean fade-ins (opacity: 0 -> 1 over 300ms) on scroll to simulate a clean reveal. No heavy parallax that might lag on mobile.
- Focus states (:focus-visible) must be perfectly styled to show attention to detail.

MOOD: Spotless, highly competent, architectural. The kind of service provider that leaves your house cleaner than they found it.
```
