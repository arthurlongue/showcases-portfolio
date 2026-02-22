# S8. Teamway

> **Source:** teamway.io
> **Reference:** `S8-teamway.webp`
> **Category:** Standard
> **Best For:** Manicure, salões de beleza, nail designers, estúdios de estética

**Visual DNA:** Soft, clean beauty studio aesthetic. Pastel lavenders, mints, and blush pinks against a clean off-white background. High emphasis on personal connection, crisp before/after photography, and simple booking UX.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FAFAF5; /* warm off-white */
--bg-lavender: #E8E0F5;
--bg-peach: #F5E0D8;
--bg-mint: #E0F0E8;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-light: #FFFFFF;

/* ── Typography ── */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(32px, 4vw, 48px) / 1.15 var(--font-heading);
--heading-section: 500 clamp(20px, 2.5vw, 28px) / 1.25 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1100px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-image: 8px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a clean, highly approachable Manicure/Beauty Studio standard landing page. Build a fast, trustworthy, conversion-optimized booking experience. Follow these rules:

VISUAL FOUNDATION:
- The page is anchored in a warm off-white (#FAFAF5). 
- Segment content using soft pastel panels (lavender #E8E0F5, peach #F5E0D8, mint #E0F0E8).
- Photography: Extreme close-ups of nail art, clean hands, and the professional studio environment. High lighting, low contrast shadows, highly curated Instagram aesthetic.
- Shapes: Soft and welcoming (16px radiuses). Everything feels cushioned.

TYPOGRAPHY:
- Clean, highly legible sans-serif for everything. No script fonts (they look dated).
- Use weight contrast (bold headers, light body) to establish hierarchy.
- Huge, proud numbers for review counts or years of experience.

LAYOUT:
- Hero: Left-aligned bold sans-serif text, pastel graphic or photo on the right.
- Services Grid: Simple 2x2 or 3x3 grids showing the nail service out of context (just the hand/nails) against the soft pastel backgrounds.
- High conversion "Book Now" sticky header or prominent floating action block utilizing high-contrast Ink Black buttons.
- Meet the Team: Small circular avatar photos (50% radius) of the nail designers with bold names.

COMPONENTS:
- Primary Button: Ink Black (#1A1A1A), Pill shaped, White Text.
- Pastel Cards: Lavender, Peach, or Mint background, dark text, no drop-shadow needed. 

ANIMATIONS & MICRO-INTERACTIONS:
- Rapid CSS transitions (200ms ease) for all hover states. Fast interface = professional interface.
- Before/After image sliders if applicable, highly responsive.
- Simple upward fades for sections as they enter the viewport. No complex delays needed, just rapid functional reveals.

MOOD: Spotless, friendly, professional beauty. Like a highly curated Instagram feed translated perfectly to a booking site.
```
