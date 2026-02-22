# S7. Brella

> **Source:** joinbrella.com
> **Reference:** `S7-brella.webp`
> **Category:** Premium
> **Best For:** Nutricionista, nutrição funcional, clínicas de bem-estar, health-tech premium

**Visual DNA:** Clean, trusting health platform. Impeccable pure white and warm off-white layered with deep, grounding forest greens. High-end lifestyle and holistic health photography matched with clean, precise data visualization for health metrics.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-warm: #F5F5F0; /* warm off-white */
--bg-sage: #E6EFEC;
--bg-forest: #2D6A4F; /* deep green anchor */
--text-primary: #1A4331; /* dark forest green */
--text-secondary: #4A6E59;
--text-light: #FFFFFF;

/* ── Typography ── */
--font-heading: "Inter", "DM Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(40px, 5vw, 64px) / 1.1 var(--font-heading);
--heading-section: 600 clamp(28px, 3.5vw, 44px) / 1.2 var(--font-heading);
--body: 400 18px / 1.65 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-button: 999px;
--radius-image: 8px;
```

---

## AI Replication Prompt

```
You are building a premium Nutritionist / Functional Health landing page. The primary directive is "Organic Trust." The UI must feel clinical enough to be credible, but organic enough to be welcoming. Use simple, standard Tailwind or CSS implementations. Follow these rules:

VISUAL FOUNDATION:
- Background: Use pure white (#FFFFFF) interchanged with warm off-white (#F5F5F0) to segment the journey.
- Anchor color: Forest Green (#2D6A4F). Use it deliberately for interactive elements (pills) and high-value data/stats cards.
- Shadows must NOT be pure gray. All drop-shadows must carry a faint tint of forest green (rgba(45, 106, 79, 0.08)) to harmonize the page depth.
- Photography: Humans consuming healthy organic foods in natural light, high-end kitchen environments, or macro-shots of raw ingredients.

TYPOGRAPHY:
- Fluid typographic hierarchy utilizing geometric sans-serifs (Inter/DM Sans). Tracking should be open on micro-copy for readability.
- Headlines are tightly leaded (1.1 line-height) but massive (clamp up to 64px) to command the hero. Focus on dark green text (#1A4331) for high legibility.
- Stat indicators (e.g., "10Kg", "100%", "Phase 1") use the largest font scale to anchor complex sections.

LAYOUT:
- Hero: Clean alignment, bold sans-serif headline, organic photography seamlessly bleeding into the edges.
- Asymmetric Cards: Use interlocking bento grids for "The Method" or "Nutritional Plans."
- Data-driven sections: Use spatial z-indexing to float small trust badges (e.g. "CRN: 12345", "Plano Personalizado") partially over the boundaries of hero or feature imagery.
- Testimonials: Minimalist cards overlapping structural backgrounds to create a tactile, scrapbook-but-digital feel.

COMPONENTS:
- Primary Button: Pill shape (999px radius), forest green background, white text. Hover scales gently.
- Bento Cards: 16px border-radius, warm off-white background, subtle green-tinted shadow.
- Trust Badges: Small floating white pills with green text and icons.

ANIMATIONS & MICRO-INTERACTIONS:
- Choreographed data reveal: Big stat numbers inside green feature cards must count up from 0 to their target.
- Micro-interactions: Feature checkmarks are not static SVGs; they use SVG stroke draw-on animations as the user reads down the list.
- Component feedback: Buttons gently scale up by 2% and elevate their drop shadow on hover providing satisfying, organic tactile feedback instantly.

MOOD: Credible, deeply healthy, modern, and transformative. The feeling of breathing clean morning air.
```
