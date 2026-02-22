# P6. FutureGreenSteps

> **Source:** futuregreensteps.com
> **Reference:** `P6-futuregreensteps.webp`
> **Category:** Premium
> **Best For:** Sustainability, clean-tech, ESG platforms, green finance, climate startups

**Visual DNA:** Dark sustainability theme with electric lime/neon-green accents on pure black. Geometric grid patterns, green icon badges on dark cards, and high-contrast CTA sections in vivid lime.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #000000;
--bg-card: #111111;
--bg-accent: #CCFF00;             /* electric lime */
--bg-accent-dark: #1A2600;        /* dark olive for subtle tints */
--text-primary: #FFFFFF;
--text-secondary: #888888;
--text-on-accent: #000000;
--accent-lime: #CCFF00;

/* ── Typography ── */
--font-heading: "Inter", "Outfit", "General Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 700 clamp(48px, 6vw, 72px) / 1.05 var(--font-heading);
--heading-section: 600 clamp(32px, 4vw, 48px) / 1.15 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;
--gap-cards: 20px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-button: 8px;
--radius-icon-badge: 10px;
--border-card: 1px solid rgba(255, 255, 255, 0.08);

/* ── Effects ── */
--lime-glow: 0 0 40px rgba(204, 255, 0, 0.15);
--grid-pattern: repeating-linear-gradient(transparent, transparent 40px, rgba(204,255,0,0.03) 40px, rgba(204,255,0,0.03) 41px);
```

---

## AI Replication Prompt

```
You are building a dark-theme sustainability/green-tech landing page inspired by FutureGreenSteps. The design principle is "dark canvas, electric accent" — black gives the neon-lime maximum impact. Follow these rules:

VISUAL FOUNDATION:
- Pure black background (#000000) as the base canvas
- Cards and content containers in slightly lighter dark (#111111) with very subtle borders (rgba(255,255,255,0.08))
- Electric lime/neon green (#CCFF00) as the SOLE accent — used for CTAs, icon badges, section backgrounds, and key highlights. This is the only color that matters
- Full-width lime (#CCFF00) CTA bands that SLAM the user with contrast — pure black → pure lime → pure black
- Subtle geometric grid pattern overlay on hero section (thin lime lines at 3% opacity)
- High-quality photography: nature aerials, electric vehicles, sustainability imagery — contained in rectangular blocks

TYPOGRAPHY:
- Geometric sans-serif (Inter, Outfit, or General Sans) — clean and modern
- Hero: clamp(48px, 6vw, 72px), bold 700, white on black, "Investing in tomorrow"
- Section headings: clamp(32px, 4vw, 48px), medium-bold
- Body: 16px, muted gray (#888) on dark sections, black (#000) on lime sections
- Section labels: small text with bullet prefix ("• SERVICES", "• BENEFITS"), lime colored, uppercase, letter-spacing 0.05em
- On lime sections: all text is black, buttons are black

LAYOUT:
- Hero: dark with geometric green overlay pattern, large headline, small subtext, CTA button
- About section: numbered section marker ("•") + large serif-ish heading + body text, with photography right
- Photography pairs: two different-sized photos in asymmetric layout
- Full-width lime CTA band: "Let's work together" centered, dark button
- Services grid: 2x3 dark cards on black background, each with small lime icon badge (10px rounded square with icon inside), title, description
- Benefits accordion: expandable list items with labels (e.g., "On-to Renewables", "Carbon offsetting")
- Contact section: form on dark background with lime submit button
- Footer: dark, logo + links

COMPONENTS:
- Lime pill button: #CCFF00 background, black text, border-radius 8px, font-weight 600
- Dark button (for lime sections): black bg, white text
- Service cards: dark #111 bg, subtle border, small lime icon badge (32x32px rounded square with centered icon), title in white 18px bold, body in gray 15px
- Icon badges: lime (#CCFF00) background, 10px radius, black icon inside, 32x32px
- Dot-prefixed section labels: "• Label" in lime, 12px, uppercase
- Accordion items: dark background, white text, expand/collapse chevron, subtle bottom border
- Navigation: dark background, logo left, links center, lime CTA button right

ANIMATIONS & MICRO-INTERACTIONS:
- Card grid entrance: cards stagger in from bottom — opacity 0→1, translateY(30px→0), 100ms delay between each card, duration 0.5s, cubic-bezier(0.16, 1, 0.3, 1)
- Lime section entrance: when lime CTA band enters viewport, it "wipes" in from left to right using clip-path: inset(0 100% 0 0) → inset(0 0 0 0), duration 0.6s
- Icon badges: lime badges pop in with scale(0→1) + slight overshoot (cubic-bezier(0.34, 1.56, 0.64, 1)), staggered 80ms
- Accordion: smooth height animation using grid-template-rows: 0fr→1fr, chevron rotates 180deg
- Photography: subtle parallax, images scroll at 0.92x speed
- Hover on cards: border brightens to rgba(204,255,0,0.2), subtle lime glow appears (box-shadow: 0 0 20px rgba(204,255,0,0.1)), translateY(-3px)
- Hover on lime buttons: background shifts to #D4FF33 (slightly brighter), subtle scale(1.02)
- Dark buttons on lime: hover → background shifts to #222, scale(1.02)
- Grid pattern: subtle slow drift animation (background-position shift over 30s infinite)
- Hero entrance: grid pattern fades in first (0.5s), then headline (0.8s), then subtext (1s), then CTA (1.2s)
- Scroll: lime elements have a subtle glow trail that fades (box-shadow pulses when entering viewport)

IMMERSIVE DETAILS:
- Green scanline: thin horizontal lime line that scrolls down the page at the viewport edge (very subtle, 1px, opacity 0.2)
- Dark card hover: inner glow effect — radial gradient of lime at 5% opacity centered on cursor position within card
- Geometric pattern: hero grid pattern can respond to mouse movement (subtle parallax shift based on cursor position)
- Lime sections: add a very subtle animation of "energy" — tiny particles or dots rising upward slowly (CSS animated, opacity 0.3)
- Environmental imagery: photos can have a subtle green tint overlay on hover (mix-blend-mode: multiply with lime at 5% opacity)
- Loading: page content loads with a lime "flash" — screen briefly flashes #CCFF00 for 100ms then fades to black

MOOD: Eco-tech forward, bold, electrifying. Like Tesla's website energy applied to sustainability consulting. Black canvas makes the green feel alive.
```
