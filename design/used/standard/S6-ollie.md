# S6. Ollie

> **Source:** myollie.com
> **Reference:** `S6-ollie.webp`
> **Category:** Standard
> **Best For:** Padarias artesanais, confeitarias, cafés locais, pequenos produtores

**Visual DNA:** Warm, wholesome, artisanal bakery aesthetic. Earthy terracotta, cream, and sage tones. High structural legibility with generous padding combined with soft radii to invoke approachability and comfort.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-warm: #F5EDE3; /* warm oatmeal */
--bg-sage: #8FAE7E; 
--bg-terracotta: #C67B5C;
--text-primary: #5C4033; /* dark warm espresso/brown */
--text-secondary: #666666;
--text-light: #FFFFFF;

/* ── Typography ── */
--font-heading: "DM Serif Text", "Lora", serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(40px, 5vw, 56px) / 1.15 var(--font-heading);
--heading-section: 500 clamp(24px, 3.5vw, 36px) / 1.25 var(--font-heading);
--body: 400 17px / 1.65 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1100px;

/* ── Borders & Radius ── */
--radius-card: 24px;
--radius-image: 16px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a warm, appetizing Padaria / Artisanal Food standard landing page. Apply a clean structural approach combined with artisanal warmth. Follow these rules:

VISUAL FOUNDATION:
- Switch generously between white (#FFFFFF) and warm oatmeal (#F5EDE3) to create clear bounding boxes for content without needing drop shadows.
- Generous Softness: Use large 24px border-radiuses for imagery and feature cards to invoke doughy, soft, baked-good energy. No sharp 0px corners anywhere.
- Accent colors: Sage Green (#8FAE7E) and Terracotta (#C67B5C) for specific sections, badges, and highlights.
- Photography MUST do heavy lifting: High-resolution shots of bread crusts, flour, rolling pins, and smiling bakers. Warm natural lighting.

TYPOGRAPHY:
- Friendly, legible serif (DM Serif Text) for headers.
- Dark brown (#5C4033) text instead of black ensures the warmth stays intact.
- The hierarchy is extremely strict: Title -> Body -> High-contrast CTA pill button. No confusing tertiary buttons.

LAYOUT:
- Hero: Centered welcoming serif headline over a warm oatmeal background, giant appetizing bread photo directly below.
- Product/Menu Grids: 3-column or 4-column structured CSS Grids. Standardized soft-corner image aspect ratios so the menu looks impeccable.
- "Review" block: Use a dark warm background (terracotta or dark brown) with cream text to break up the page visually.
- Local roots: A section emphasizing neighborhood connection with a map, address, and friendly photo.

COMPONENTS:
- Primary Button: Pill-shape, Terracotta background, white text.
- Recipe/Menu Cards: 16px radius, food photo top, title + description + price.
- Badges: Small "Best Seller" or "Vegan" tags in Sage Green.

ANIMATIONS & MICRO-INTERACTIONS:
- Keep interactions highly functional: Native CSS hovers affecting `transform: scale(1.02)` and `background-color`. No complex prolonged 3D spatial motion.
- Buttons should feel tactile — clicking should compress them slightly (scale 0.98) via :active states.
- Clean fade-in on scroll.

MOOD: Smell the fresh bread. Inviting, local, extremely high quality but deeply accessible.
```
