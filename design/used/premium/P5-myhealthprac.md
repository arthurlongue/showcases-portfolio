# P5. MyHealthPrac

> **Source:** myhealthprac.com
> **Reference:** `P5-myhealthprac.webp`
> **Category:** Premium
> **Best For:** Cafeteria, high-end coffee shops, roasteries, artisanal bakeries

**Visual DNA:** Warm, cinematic editorial dual-tone (rich espresso and warm oat milk cream). Emphasis on dynamic fluid layouts, deep layered depth maps, and immersive photography overlays.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FAF7F3; /* warm oat milk */
--bg-secondary: #F5F0EB;
--bg-dark: #1A1208; /* deep warm espresso */
--bg-accent: #C49A5C; /* golden crema */
--text-primary: #1A1208;
--text-secondary: #5A4D45;
--text-on-dark: #FAF7F3;

/* ── Typography ── */
--font-heading: "DM Serif Display", "Lora", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 clamp(44px, 5vw, 72px) / 1.1 var(--font-heading);
--heading-section: 400 clamp(30px, 3.5vw, 44px) / 1.2 var(--font-heading);
--body: 400 18px / 1.65 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 12px;
--radius-image: 8px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a premium artisanal Cafeteria / Coffee Roastery landing page. The aesthetic is "cinematic editorial espresso" — warm, dramatic, high-end, and deeply sensory. Use simple, standard Tailwind or CSS implementations. Follow these rules:

VISUAL FOUNDATION:
- Background base: Warm oat milk (#FAF7F3). No pure whites, no cold grays.
- Deep contrast sections: Use deep warm espresso (#1A1208) for immersive background blocks.
- Accent color: Golden crema (#C49A5C) for subtle highlights, active states, and buttons.
- Photography: Sepia or warm-temperature graded. Intimate close-ups of coffee roasting, pouring, textures, and steam. Images should feel like a high-end magazine.
- Soft gradients: Use subtle radial gradients (golden crema glow at 10% opacity) behind hero text or feature products to create depth.

TYPOGRAPHY:
- Headings: Elegant serif (DM Serif Display or Lora), 400 weight ONLY. Let the size do the work, not the weight.
- Body: Clean, modern sans-serif (Inter) for maximum legibility.
- Typographic art: Allow hero text to dynamically overlap images. Use italics for emotional emphasis or pull quotes.

LAYOUT:
- Hero Section: Full-bleed espresso dark background (#1A1208) with a cinematic coffee image (reduced opacity/Ken Burns effect). Massive, fluid serif headline in warm cream.
- "The Philosophy" Section: Large serif statement on a clean cream background. High whitespace, centered alignment.
- Menu / Beans Featured: A horizontal scroll or CSS grid of floating product cards (radius 12px) featuring bags of coffee or signature drinks.
- Origin Story: Split 50/50 layout. Left side: immersive tall image. Right side: typography describing the farm-to-cup process.
- Footer: Dark espresso background, clean layout, newsletter signup with golden crema accent button.

COMPONENTS:
- Primary Button: Pill shape (999px radius), dark espresso background, cream text. Hover: slight scale up and background shifts to golden crema.
- Secondary Button: Transparent background, 1px dark border.
- Product Cards: Clean cream background, subtle warm shadow (rgba(26,18,8,0.05)), high-res product image on top, elegant typography below.

ANIMATIONS & MICRO-INTERACTIONS:
- Smooth Scroll reveals: Sections fade in upward smoothly (opacity 0 -> 1, translateY 20px -> 0) over 600ms.
- Image Hover: Slow, deliberate scale (1.00 -> 1.05) over 1 second to create a "breathing" effect.
- Parallax: Give background images a slight slower scroll speed to create intense depth behind the typography.
- Button Hover: Background fill transitions smoothly, text color inverts.

MOOD: Artisanal, uncompromising quality. A sensory coffee experience transcribed to the screen via deep contrast and elegant serifs.
```
