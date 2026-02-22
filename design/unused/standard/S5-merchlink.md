# S5. Merchlink

> **Source:** merchlink.io
> **Reference:** `S5-merchlink.webp`
> **Category:** Standard
> **Best For:** E-commerce SaaS, partnership platforms, marketplace tools, brand collaboration tools

**Visual DNA:** Purple-accent SaaS — white base, vibrant purple CTAs and gradient rings, phone mockups as hero visuals, colorful bento feature cards, and a standard SaaS conversion funnel layout.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-light: #F5F0FF;              /* light purple tint */
--bg-purple: #F0E8FF;
--text-primary: #1A1A2E;
--text-secondary: #666677;
--accent-purple: #7B3FE4;
--accent-light-purple: #E8D5FF;
--accent-green: #22C55E;
--accent-pink: #EC4899;

/* ── Typography ── */
--font-heading: "Inter", "DM Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 800 clamp(36px, 4.5vw, 56px) / 1.1 var(--font-heading);
--heading-section: 700 clamp(28px, 3.5vw, 40px) / 1.15 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a SaaS e-commerce collaboration platform page inspired by Merchlink. Clean, friendly, conversion-focused. Follow these rules:

VISUAL FOUNDATION:
- Clean white base with light purple-tinted sections (#F5F0FF, #F0E8FF)
- Vibrant purple (#7B3FE4) as primary accent for ALL CTAs and interactive highlights
- Phone/device mockups showing the product UI as KEY visual elements — the product IS the hero image
- Circular gradient ring (purple, large, semi-transparent) as decorative backdrop behind phone mockups
- Colorful bento-style feature cards in the benefits section
- Screenshots and product UI walkthroughs for trust-building

TYPOGRAPHY:
- Bold friendly sans-serif (Inter or DM Sans, 700-800 weight)
- Hero: clamp(36px, 4.5vw, 56px), extra-bold, "Collaborate with brands to grow together!"
- Section headings: clamp(28px, 3.5vw, 40px), bold
- Body: 16px, gray (#666677), line-height 1.6
- Stats: large bold numbers (e.g., "133", "12%") in dark or purple

LAYOUT:
- Hero: headline + subtext + CTA pill button + overlapping product images/screenshots
- "Open a world of collaboration" section: image left / text right with inline product screenshots
- Stats callout: large numbers prominently displayed with context text
- App showcase: centered phone mockup on large circular purple gradient ring background + 3 feature labels below
- Product walkthrough: step-by-step UI screenshots showing the platform flow
- Bento grid: 2x2 colored feature cards — each with different accent color bg, icon, bold title, description:
  - Green card: "Zero risk, all reward"
  - Purple card: "Click. Connect. Profit."
  - Neutral card: "Sit back and relax."
  - Pink card: "Grow faster. Together."
- Marquee text band: scrolling "Get started is easy" or similar
- FAQ accordion: clean, centered, expandable questions
- CTA section at bottom
- Footer: 4-column links

COMPONENTS:
- Purple pill CTA: #7B3FE4 bg, white text, radius 999px, hover → darken to #6930C3 + scale(1.02)
- Ghost button: transparent, 1px purple border, purple text, hover → fills purple
- Bento cards: 16px radius, colored background (green, purple, neutral, pink), icon top, bold title, body text. No shadow
- Phone mockup: realistic device frame (or frameless), showing actual UI, centered
- Gradient ring: large circle (400-500px), radial-gradient purple to transparent, positioned behind phone mockup
- FAQ items: white bg, border divider, expand chevron, smooth toggle
- Stat displays: large bold number + description text

ANIMATIONS & MICRO-INTERACTIONS:
- Phone mockup: floats with gentle translateY(±6px), 4s infinite ease-in-out
- Gradient ring: slow rotation (0→360deg, 30s infinite) or slow pulse (scale 0.95→1.05, 6s infinite)
- Bento cards: staggered entrance — each card fades up from its position with 100ms delay, scale(0.95→1), 0.5s duration
- Stats: count-up animation from 0, 1.5s, triggered on scroll
- FAQ: smooth height transition + chevron rotation (0→180deg)
- Card hover: subtle translateY(-3px) + shadow appears (0 4px 16px rgba(123,63,228,0.15))
- Screenshot sections: slides in from the side they face (left images from left, right from right)
- Marquee band: continuous horizontal scroll, pauses on hover
- CTA button hover: scale(1.03), background darkens, subtle shadow glow in purple
- Page load: hero content staggers in — headline (0.2s), subtext (0.4s), CTA (0.6s), product images (0.8s, from different directions)

MOOD: Friendly SaaS, approachable, collaborative, trustworthy. Standard startup energy with polished execution.
```
