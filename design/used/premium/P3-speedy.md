# P3. Speedy.io

> **Source:** speedy.io
> **Reference:** `P3-speedy.webp`
> **Category:** Premium
> **Best For:** Personal Trainers, academias boutique, crossfit premium, performance couching

**Visual DNA:** High-octane cinematic performance. Extreme contrast black and white with blistering neon green energy spikes. Bold, wide tracking display typography integrated with volumetric 3D animations representing speed, muscle, and power.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #040404; /* pitch black */
--bg-secondary: #141414; /* dark gray */
--text-primary: #FFFFFF;
--text-secondary: #999999;
--accent-neon: #E6FF00; /* striking neon green */

/* ── Typography ── */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 800 clamp(48px, 6vw, 96px) / 1.0 var(--font-heading);
--heading-section: 700 clamp(32px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 24px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a high-energy Personal Trainer / Fitness Coach landing page. The aesthetic is cinematic black-and-white performance-driven UI. Avoid cheap gym tropes. Follow these rules:

VISUAL FOUNDATION:
- Pitch Black (#040404) canvas.
- Intense stark contrast: Only black, white, dark grays, and the singular explosive Neon Green (#E6FF00) accent.
- Photography: Gritty, high-contrast black-and-white photography of athletes, sweat, and movement.
- Shapes: Sharp 24px radiuses on cards to feel modern and aggressive but structured.

TYPOGRAPHY:
- Massive, ultra-bold sans-serifs (Inter or Outfit at 800/900 weight).
- Tracked tightly (-0.02em letter-spacing) for maximum visual density.
- Headlines should punch you in the face. Capitalize dramatically.

LAYOUT:
- Hero Section: Dark background, giant white/neon typography overlapping a dynamic B&W workout image.
- "The Program" grid: Brutalist CSS grid layout with neon borders highlighting the current active element.
- Stats/Results block: Huge typography ("-15KG", "+20% MUSCLE") taking up half the screen.
- Video integrations: Emphasize workout clips inside sleek container masks.

COMPONENTS:
- Primary Button: Pill shape, Neon Green background, Black text. Extremely high impact.
- Secondary Button: Pure black, white border.
- Spec Cards: Dark gray (#141414) background, white text.

ANIMATIONS & MICRO-INTERACTIONS:
- Muscular spatial transforms: Quick, aggressive snap animations (spring physics, high tension/low friction).
- Image Hover: B&W photos gain full saturation/color rapidly on hover like a lighting strike.
- Infinite marquee banners with bold text (e.g. "NO EXCUSES // START NOW //").

MOOD: Adrenaline, brutal capability, extremely high-end performance. Nightclub meets elite athletic facility.
```
