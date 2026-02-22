# P9. Gumroad

> **Source:** gumroad.com
> **Reference:** `P9-gumroad.webp`
> **Category:** Premium
> **Best For:** Creator economy, marketplaces, indie tools, community platforms, zine/DIY brands

**Visual DNA:** Hot pink maximalism, hand-drawn doodle illustrations, bold sans-serif on bright color blocks, pop-art/zine energy with real photo cutouts and illustrated overlays. The internet's friendliest startup.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-pink: #FF90E8;               /* HOT PINK — the dominant color */
--bg-white: #FFFFFF;
--bg-yellow: #FFED4A;
--bg-light-pink: #FFE0F5;
--bg-peach: #FFDECF;
--text-primary: #000000;
--accent-teal: #23A094;
--accent-pink: #FF90E8;

/* ── Typography ── */
--font-heading: "Mabry Pro", "Nunito", "DM Sans", sans-serif;
--font-body: "Inter", "DM Sans", sans-serif;
--heading-hero: 900 clamp(44px, 6vw, 72px) / 1.1 var(--font-heading);
--heading-section: 800 clamp(28px, 4vw, 48px) / 1.15 var(--font-heading);
--body: 400 clamp(16px, 1.1vw, 18px) / 1.6 var(--font-body);
--stat-display: 900 clamp(64px, 10vw, 120px) / 1.0 var(--font-heading);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-button: 999px;           /* full pill */
--radius-card: 16px;
--border-thick: 3px solid #000000;

/* ── Effects ── */
--doodle-filter: none;             /* hand-drawn SVG illustrations, no CSS filters */
--cutout-shadow: 4px 4px 0 rgba(0,0,0,0.1);
```

---

## AI Replication Prompt

```
You are building a vibrant, maximalist creator-economy landing page inspired by Gumroad. The energy is "indie internet made beautiful" — joyful, colorful, empowering. Think zine culture meets product design. Follow these rules:

VISUAL FOUNDATION:
- Hot pink (#FF90E8) is THE COLOR — used as section backgrounds, button fills, and primary accent
- Alternating vivid color-block sections: pink, white, yellow (#FFED4A), light pink (#FFE0F5), peach (#FFDECF)
- Hand-drawn doodle illustrations scattered throughout: arrows, squiggles, stars, faces, speech bubbles — NOT icon library icons, actual sketchy drawings
- Real photography of diverse creators with backgrounds REMOVED (cutout style) placed directly on color blocks
- Illustrated stickers, badges, and doodle overlays layered ON TOP of photographs
- Every section is its own bold color world — no section looks like another

TYPOGRAPHY:
- Extra-bold rounded sans-serif: Mabry Pro, Nunito Bold, or DM Sans Black — friendly, bubbly, bold
- Hero: clamp(44px, 6vw, 72px), weight 900, black on pink, "Go from zero to $1"
- REPEATING TEXT PATTERN — this is signature: the same phrase repeated 4+ times in a horizontal row with dot (·) separators: "See what sticks · See what sticks · See what sticks · See what sticks"
- Section headings: clamp(28px, 4vw, 48px), bold 800, playful
- Product type labels: large display text with dot separators ("Subscriptions · Tutorials · Plugins")
- Massive stat display: clamp(64px, 10vw, 120px) bold for "$3,214,273" — biggest text on the page
- Body: clamp(16px, 1.1vw, 18px), clean, black on light backgrounds, generous line-height

LAYOUT:
- NO GRID CONSISTENCY — intentionally magazine-like, varied layouts per section
- Hero: pink background, bold headline, subtext, black pill CTA, doodle illustrations floating around
- Color-block sections: each major section has a DIFFERENT vivid background color
- Two-column with photo cutout: real person (background removed) on one side, text + features on other
- "Don't take risks / Place small bets" split section: two contrasting cards side by side
- Feature list: vertical stack with icon/illustration + name + description per row
- Massive stat section: "$3,214,273" centered on white, with descriptive text below
- Pricing table: clean, left-aligned, tiered percentages ($0→0%, $1K→5%, etc.)
- Testimonial quotes: large text with real photo cutout + attribution
- Multiple CTAs throughout: "Start Selling" black pill button appears in every other section
- Footer: dark, newsletter signup + link grid

COMPONENTS:
- Pill CTA buttons: border-radius 999px, black fill with white text (or outlined with thick 3px border)
- Doodle illustrations: hand-drawn SVGs used as decoration — arrows pointing to CTAs, squiggly underlines, star bursts
- Photo cutouts: real people with transparent backgrounds, placed on color blocks with subtle cutout shadow
- Feature rows: illustration left (40px icon-size drawing) + bold name + body text
- Repeating text strip: horizontal band with same text repeated, separated by dots
- Pricing table: simple text-based, left label + right percentage, clean grid
- "GUMROAD" brand mark: displayed large and bold in yellow/pink at section breaks

ANIMATIONS & MICRO-INTERACTIONS:
- Repeating text strip: auto-scrolling horizontal marquee (CSS translateX, 40px/s, infinite). Two copies for seamless loop. Hover → pauses
- Doodle illustrations: wiggle/jiggle animation on scroll entry — rotate(±3deg) oscillation for 0.5s, then settle. Like they're vibrating with excitement
- Photo cutouts: pop-in entrance with subtle bounce — scale(0.8→1.05→1) + opacity(0→1), 0.4s with overshoot easing
- Color block sections: each section fades in with its background color expanding (clip-path: circle(0%)→circle(100%)) or simple fade+slide
- Stat counter: "$3,214,273" counts up from $0 with comma formatting, 2.5s, triggered on scroll entry
- Arrows and doodle pointers: draw-on animation (SVG stroke-dashoffset from full→0), 0.6s, pointing toward CTAs
- Button hover: scale(1.05), background color inverts (black→pink, pink→black), transition 0.2s
- Pricing table rows: stagger entrance from top, 60ms per row
- Section color transitions: as you scroll between colored sections, the background cross-fades smoothly
- Hero doodles: float with continuous gentle animation (translateY ±5px, translateX ±3px, 3-4s infinite, different phase per doodle)
- Photo cutout hover: subtle tilt toward cursor (±3deg, perspective-based)

IMMERSIVE DETAILS:
- Confetti burst: on clicking "Start Selling" CTA, trigger a small confetti animation (canvas-confetti library or CSS particles) — pink and yellow pieces
- Doodle cursor: on the pink hero section, cursor changes to a custom hand-drawn arrow SVG
- Sticker peel: doodle stickers can have a subtle 3D tilt on hover (perspective + rotateX/Y based on mouse position)
- Section entrance sounds (optional, off by default): playful pop/click sounds when sections enter viewport
- Dot separator animation: the dots (·) between repeated text can pulse in sequence, creating a "wave" effect along the strip
- Easter egg: somewhere on the page, a hidden doodle character winks when hovered (eye SVG animation)
- Loading: page loads with a brief pink flash (#FF90E8 full screen, 200ms, then fades to reveal content)

MOOD: Empowering, DIY-creative, indie-internet, JOYFUL. Like a zine made by creators FOR creators. Anti-corporate, pro-human, pro-weird. Makes you want to start building something immediately.
```
