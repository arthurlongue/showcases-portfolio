# P2. Klarna

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #0A0A0A;             /* near-black */
--bg-card: #1A1A1A;
--bg-elevated: #222222;
--text-primary: #FFFFFF;
--text-secondary: #999999;
--accent-pink: #FFB3C7;            /* Klarna pink */
--accent-green: #90EE90;
--accent-yellow: #FFED4A;
--accent-purple: #C8A2FF;

/* ── Typography ── */
--font-heading: "Klarna Display", "Space Grotesk", "Cabinet Grotesk", sans-serif;
--font-body: "Inter", system-ui, sans-serif;
--heading-hero: 900 clamp(56px, 8vw, 96px) / 0.95 var(--font-heading);
--heading-section: 800 clamp(40px, 6vw, 72px) / 1.0 var(--font-heading);
--body: 400 16px / 1.5 var(--font-body);
--letter-spacing-display: -0.03em;

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 120px);
--max-width: 1280px;
--gap-grid: 24px;

/* ── Borders & Radius ── */
--radius-card: 24px;
--radius-image: 24px;
--radius-button: 999px;             /* pill shape */

/* ── Effects ── */
--image-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
```

---

## AI Replication Prompt

```
You are building a bold, dark-mode fintech landing page inspired by Klarna's aesthetic. The key personality trait is CONFIDENCE — oversized type, unapologetic color, and mixed-media visual richness. Follow these rules:

VISUAL FOUNDATION:
- Near-black background (#0A0A0A) with slightly lighter card areas (#1A1A1A)
- NO gradients on backgrounds — pure flat dark surfaces for maximum contrast
- Bold color accents used sparingly but punchy: soft pink (#FFB3C7), lime green (#90EE90), yellow (#FFED4A), lavender (#C8A2FF)
- Large rounded photography (border-radius 24px) mixed with product UI screenshots and 3D renders in collage-style layouts
- Inline emoji-like icon elements used as typographic decoration within headlines (e.g., a pink Klarna logo icon between text, a colored badge inline)

TYPOGRAPHY — THIS IS THE KEY DIFFERENTIATOR:
- Extremely bold, oversized headings: clamp(56px, 8vw, 96px), font-weight 900, letter-spacing -0.03em, condensed line-height 0.95
- Headlines break across lines in unexpected, playful ways. Each significant word gets its OWN line:
  "Pay in 4
   online
   offline
   abroad
   anywhere."
- Mix of font sizes WITHIN a single headline for emphasis hierarchy (e.g., "Ready" at 48px, "for" at 36px, "rewards?" at 64px)
- Some words interrupted by inline colored icons/emoji (small colored circles, brand badges)
- Body text: 16px, normal weight, gray (#999999), clean contrast

LAYOUT:
- Asymmetric grids: text on one side, large rounded photos on the other, alternating per section
- Mixed-media sections: product photos + hands holding phones + 3D-rendered objects overlapping
- Full-bleed photographic sections with bold white text overlay
- Bento-grid feature cards: 2-3 columns, different heights/spans, dark cards with rounded images
- "No hassle here." section: 2x2 bento grid with text cards + image cards mixed
- Product showcase: large phone mockup centered with lifestyle imagery surrounding it
- FAQ accordion at the bottom: clean dark styling, plus/minus toggle
- Footer: minimal, dark, logo + link columns

COMPONENTS:
- Pill-shaped CTA buttons (border-radius 999px): pink fill with dark text, or outlined with white text
- Bento feature cards: dark (#1A1A1A) background, 24px radius, image at top + title + body
- Photo collages: multiple images at different scales, some overlapping, all with 24px radius
- Inline icon badges: small colored circles or brand marks placed INSIDE headline text flow
- FAQ accordion: dark cards, white text, smooth expand/collapse
- Navigation: dark, fixed, minimal text links, pink pill CTA button right

ANIMATIONS & MICRO-INTERACTIONS:
- Scroll-triggered reveals: each section fades in + slides up (opacity 0→1, translateY(40px→0), duration 0.7s, cubic-bezier(0.16, 1, 0.3, 1))
- Staggered card entrance: bento grid cards animate in with 100-150ms stagger between each
- Hero text: words cascade in from below with stagger — each word translateY(100%)→0 with overflow hidden on parent, 100ms per word delay
- Hover on bento cards: scale(1.02), subtle shadow lift, border brightens to rgba(255,255,255,0.1), transition 0.3s ease
- Image parallax: photos move at 0.85x scroll speed creating depth within collage sections
- FAQ accordion: smooth height animation with CSS grid rows (grid-template-rows: 0fr → 1fr transition)
- Button hover: background shifts slightly brighter, subtle translateY(-1px)
- Mixed-media section: images have subtle ken-burns drift (slow scale 1→1.05 over 15s, or slow pan)
- Page scroll: navigation background transitions from transparent → rgba(10,10,10,0.9) with backdrop-blur(12px) after 80px scroll
- Inline emoji icons: subtle bounce or pop-in animation on scroll entry (scale 0.5→1 with overshoot easing)

IMMERSIVE DETAILS:
- Smooth scroll behavior: scroll-behavior: smooth on html, or Lenis/LocomotiveScroll for buttery smoothness
- Text splitting: hero headlines animate word-by-word using split-text technique (overflow-hidden wrappers per word)
- Photo hover: images scale to 1.03 with a subtle warm filter shift on hover
- Section transitions: background color can subtly shift between sections (very dark → slightly less dark → very dark) for rhythm
- Loading entrance: page content staggers in on first load — nav first (200ms), then hero text (400ms), then hero images (600ms)
- Magnetic buttons: CTA buttons subtly follow cursor position when hovering near them (±5px translate based on mouse position)

MOOD: Confident, youthful, disruptive, premium-casual. Like a luxury streetwear brand doing fintech. Unapologetically bold.
```
