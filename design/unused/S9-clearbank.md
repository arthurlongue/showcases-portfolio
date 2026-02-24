# S9. ClearBank

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-light: #F8F8F8;
--text-primary: #000000;
--text-secondary: #666666;
--text-muted: #999999;
--accent-pink: #FF0066;           /* hot pink CTA */
--accent-blue: #0066FF;           /* link blue */

/* ── Typography ── */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 500 clamp(44px, 5.5vw, 64px) / 1.1 var(--font-heading);
--heading-feature: 400 clamp(36px, 4.5vw, 56px) / 1.1 var(--font-heading);
--heading-section: 500 clamp(24px, 3vw, 36px) / 1.2 var(--font-heading);
--body: 400 clamp(16px, 1.1vw, 18px) / 1.8 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(80px, 10vw, 140px);
--max-width: 1000px;
--whitespace-ratio: 0.65; /* 65%+ is breathing room */

/* ── Borders & Radius ── */
--radius-button: 999px;
--radius-card: 8px;
```

---

## AI Replication Prompt

```
You are building an ultra-minimal fintech B2B landing page inspired by ClearBank. The philosophy is "earned attention through emptiness" — every pixel of whitespace is intentional. Follow these rules:

VISUAL FOUNDATION:
- Maximum whitespace — 65%+ of every viewport is empty space. This IS the design
- Pure white (#FFF) background for almost everything. Occasional #F8F8F8 tinting
- ONE 3D abstract render (colorful, metallic/glass sphere with pink/magenta) as the hero visual — this is the ONLY decorative element on the entire page
- Hot pink (#FF0066) used EXCLUSIVELY for CTA buttons — the only color pop, maximum impact through scarcity
- Partner/client logos (Tide, Coinbase, eToro, Chip) in dark grayscale strip
- ONE professional photograph maximum (team/office) deep in the page

TYPOGRAPHY — WEIGHT IS THE KEY TOOL:
- Clean sans-serif (Inter or Outfit), LIGHT to MEDIUM weights (400-500 for headings, not bold)
- Hero: clamp(44px, 5.5vw, 64px), weight 500, STACKED single words per line:
  "Innovate.
   Differentiate.
   Grow."
- Feature headline: clamp(36px, 4.5vw, 56px), weight 400 (LIGHT), "Be part of the future of banking with our API" — takes up an ENTIRE section with just this text
- Body: clamp(16px, 1.1vw, 18px), gray (#666), line-height 1.8 (extra generous)
- Section markers: small "01" numbered labels in gray, monospaced feel
- Arrow links: "Explore our API →" in dark text

LAYOUT:
- Hero: stacked headline words (left-aligned) + tiny pink CTA button + 3D render floating right. Minimal. Enormous whitespace
- Logo strip immediately below hero: grayscale, widely spaced
- Text-only sections: just large type and body text, filling the width with words, no decoration
- Product list: ultra-clean text links stacked (Accounts →, Clearing, Embedded Banking) with arrow on hover
- Feature headline section: ONE large sentence spanning the full width — the text IS the design
- Two-column: professional photo left, "Your partner in growth" text right
- Feature grid: icon + title + short description, clean rows (not cards — no containers)
- Three-column service cards: minimal white cards with title + description + "Learn more →" link, subtle bottom border
- CTA section: "Ready to collaborate?" + pink CTA button
- Minimal footer: logo + link columns + legal

COMPONENTS:
- Hot pink pill CTA: #FF0066 bg, white text, radius 999px, small-to-medium size. Hover → darken to #E0005A + scale(1.02)
- Arrow links: dark text + "→", hover → text shifts right 3px, arrow stretches
- Section markers: "01" in gray, small, top-left of sections
- Icon features: simple line icon (24px) + title + description, no card container, no shadow
- Service cards: minimal white bg, thin border-bottom, title + body + "Learn more →"
- Navigation: ultra-clean, logo left, 3 text links + pink CTA button right, minimal height

ANIMATIONS & MICRO-INTERACTIONS:
- Content reveals: VERY subtle — opacity 0→1 only, NO translateY, 0.4s ease-out. Minimalism in motion too
- Hero words: each word fades in sequentially, 200ms stagger, 0.3s duration — simple, elegant
- 3D render: slow continuous rotation (rotateY 0→360deg, 20s infinite), OR gentle float (translateY ±6px, 5s infinite)
- Logo strip: fade in with 80ms stagger per logo
- Arrow links: on hover, → arrow translates right 4px with spring easing
- Pink CTA button: subtle shadow glow on hover (0 0 20px rgba(255,0,102,0.3))
- Service cards hover: border-bottom color transitions from gray to pink
- Scroll behavior: native smooth-scroll, nothing fancy — the minimalism IS the luxury
- Large feature text: fades in as one block, maybe with a subtle letter-spacing animation (-0.02em → -0.01em) as it enters
- Navigation: transparent at top, gains white bg + subtle shadow on scroll past 100px
- Page load: nav (0.2s), hero words stagger (0.4s-0.8s), 3D render fades in (1s), CTA (1.2s)

IMMERSIVE DETAILS:
- The 3D render should cast a very subtle color reflection on the white background (radial gradient in pink/magenta at 3% opacity beneath it)
- Hover on 3D render section: render rotates slightly faster, glow intensifies subtly
- Section markers "01", "02": fade opacity from 0.3 → 0.6 as their section enters viewport
- Ultra-refined detail: thin 1px horizontal rules at exactly 80px from section boundaries, at 10% opacity
- Consider a near-invisible grid overlay (2% opacity) on the background, suggesting precision and order

MOOD: Institutional, clean, supremely confident. Like Stripe's website distilled to its essence. Says "we're serious" through restraint. Anti-decoration.
```
