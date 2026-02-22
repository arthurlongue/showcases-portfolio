# S1. Scale API

> **Source:** scaleapi.com
> **Reference:** `S1-scale-api.webp`
> **Category:** Standard
> **Best For:** API platforms, developer tools, data services, B2B SaaS, AI/ML products

**Visual DNA:** SaaS gradient header (purple-to-pink), clean white content body, circular icon grids, code blocks, social proof enterprise logos, and a standard top-to-bottom conversion funnel layout.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-gradient-hero: linear-gradient(135deg, #7B68EE, #E066AA, #FF69B4);
--bg-primary: #FFFFFF;
--bg-light: #F8F8FC;
--text-primary: #1A1A2E;
--text-secondary: #666677;
--accent-purple: #7B68EE;
--accent-pink: #E066AA;
--accent-green: #4ADE80;

/* ── Typography ── */
--font-heading-serif: "Georgia", "Lora", serif;
--font-heading-sans: "Inter", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 700 clamp(32px, 4vw, 48px) / 1.2 var(--font-heading-serif);
--heading-section: 600 clamp(24px, 3vw, 36px) / 1.3 var(--font-heading-sans);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1100px;

/* ── Borders & Radius ── */
--radius-card: 12px;
--radius-button: 6px;
--radius-icon-circle: 50%;
--radius-code-block: 8px;
```

---

## AI Replication Prompt

```
You are building a clean SaaS/API platform landing page inspired by Scale AI. The design is "enterprise SaaS meets friendly" — gradient energy at the top funneling into clean, trustworthy content. Follow these rules:

VISUAL FOUNDATION:
- Gradient hero section: purple-to-pink diagonal gradient (#7B68EE → #E066AA → #FF69B4)
- Clean white (#FFFFFF) body sections with alternating light gray (#F8F8FC) bands
- Enterprise logos in grayscale (large brands: UBER, P&G, Alphabet) — instant credibility
- Floating UI element illustrations and product screenshots in the hero
- Chat widget indicator in bottom-right corner (small teal circle with chat icon)

TYPOGRAPHY:
- Serif for hero headline (Georgia or Lora): gives the tech content an editorial trust feel
- Clean sans-serif (Inter) for all other headings and body
- Hero: clamp(32px, 4vw, 48px), serif bold, white on gradient, "API For Human Intelligence"
- Section headings: clamp(24px, 3vw, 36px), sans-serif, centered, dark
- Body: 16px, gray (#666677), centered in content sections

LAYOUT:
- Hero: gradient background + serif headline + subtitle + CTA (filled) + "Learn More" link + floating product illustrations drifting right
- Client logo strip: grayscale logos scrolling or static row
- Products icon grid: 6 circular icon badges in a row, each with label (Image Recognition, Transcription, Categorization, Comparison, Phone Calls, Data Collection)
- Code example section: dark code block on left + aerial image on right, demonstrating API usage
- Scalers section: team/worker profile card on left + task management UI mockup on right
- Feature trio: 3 columns — icon + bold title + description
- Client logos strip (bottom): UBER, P&G, Alphabet, Houzz, Gusto
- CTA banner: gradient background + "Get started for free today" + buttons
- Footer: 4-column link grid + copyright

COMPONENTS:
- Gradient-filled CTA button: linear-gradient bg matching hero, white text, rounded 6px, shadow on hover
- Ghost outline button: transparent bg, 1px white border (on gradient) or dark border (on white), hover → fills
- Circular icon badges: 64px circles with subtle background tint + centered icon + label below
- Dark code block: monospaced font, syntax highlighted, border-radius 8px, subtle shadow
- Feature cards: no container — icon + title + description directly on background
- Chat widget: fixed bottom-right, small teal circle + chat icon, expandable

ANIMATIONS & MICRO-INTERACTIONS:
- Hero floating illustrations: gentle bobble — translateY(±8px) over 3-4s infinite, ease-in-out
- Section reveals: content fades up (opacity 0→1, translateY(25px→0), 0.5s, ease-out) triggered at 15% viewport intersection
- Icon badges: staggered pop-in on scroll — scale(0.8→1) + opacity, 80ms delay per icon
- Code block: appears with a typewriter effect — code text types in character by character, or entire block slides in from left
- Logo strip: can be a continuous slow horizontal scroll (marquee) or static with fade-in
- Gradient CTA button hover: gradient shifts position (background-position animation), subtle scale(1.02), shadow intensifies
- Feature trio: cards stagger in from bottom, 100ms apart
- Chat widget: bounces once on page load (translateY(10px→0) bounce), then shows a notification dot after 5s
- Page load: gradient hero renders first, then headline fades in (0.3s), then subtitle (0.5s), then CTA (0.7s), then floating illustrations drift in from right (0.9s)

MOOD: Professional SaaS, trustworthy, technical-but-approachable. Enterprise credibility with startup friendliness.
```
