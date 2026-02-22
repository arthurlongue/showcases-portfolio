# S3. Mail.ru Design

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-light: #F5F5F7;
--text-primary: #000000;
--text-secondary: #666666;
--accent-blue: #005FF9;
--card-colors: #FF6B6B, #4ECDC4, #45B7D1, #1A1A2E, #FF90E8; /* varied card bgs */

/* ── Typography ── */
--font-heading: "Inter", "Satoshi", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 900 clamp(44px, 5.5vw, 64px) / 1.05 var(--font-heading);
--heading-section: 800 clamp(32px, 4vw, 48px) / 1.1 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;
--gap-cards: 16px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-button: 8px;
--radius-icon: 20px;
```

---

## AI Replication Prompt

```
You are building a design team/company showcase page inspired by Mail.ru Design. The feel is "organized creativity" — clean corporate structure with bursts of color. Follow these rules:

VISUAL FOUNDATION:
- Clean white (#FFF) background, structured and orderly
- Bold blue (#005FF9) as primary accent for links, buttons, and highlights
- Colorful product icons with gradient fills in hero area (app icons arranged in a row)
- Event/highlight cards use VARIED colored backgrounds — each card has a different accent color (pink, teal, dark, blue, etc.)
- Subtle 3D floating UI component illustrations as section decoration (floating buttons, cards, inputs)
- Gray (#F5F5F7) alternating sections for visual rhythm

TYPOGRAPHY:
- Extra-bold grotesque sans (900 weight) for hero headlines — punchiest weight possible
- Hero: clamp(44px, 5.5vw, 64px), 900 weight, black text on white
- Section headings: clamp(32px, 4vw, 48px), 800 weight
- Body: 16px, gray (#666), clean readability
- Small "Details >" links in blue with arrow

LAYOUT:
- Hero: massive bold headline + colorful product icon row + blue CTA button + floating 3D UI elements right
- Social links strip: icon row (Facebook, VK, Behance, Dribbble, YouTube)
- Events grid: asymmetric card layout (masonry-like), different sizes. Each card has a unique colored bg + event title + label. Larger cards for featured events
- Design system section: floating UI component illustrations + descriptive text
- Product grid: 2x2 cards, each with colorful gradient icon (20px radius) + product name + "Details >" link
- Research section: illustration + headline + description + blue CTA
- Team section: employee cards with real photos + name + role title
- Job listings: role cards with title + link
- Newsletter signup + social links at bottom

COMPONENTS:
- Blue filled CTA button: #005FF9 bg, white text, 8px radius, hover → darken to #0050DD
- Event cards: colored bg (each different), white or dark text, 16px radius, padding 24-32px. Title + label + optional image
- Product icon badges: 56px rounded square (20px radius), gradient fill, centered product icon
- "Details >" link: blue text, → arrow, hover → underline + shift right 2px
- Employee cards: photo (circle or rounded rect) + name bold + role muted
- Job cards: simple row with role name + link arrow

ANIMATIONS & MICRO-INTERACTIONS:
- Hero entrance: headline animates word-by-word from below (translateY(40px→0), opacity, 60ms stagger)
- Product icons: staggered pop-in from left to right — scale(0.8→1) + opacity, 80ms stagger
- Event cards: staggered entrance with slight rotation — translateY(20px→0) + rotate(1deg→0deg), 100ms stagger per card
- 3D UI elements: float with gentle bobble (translateY ±6px, rotate ±1deg, 4s infinite)
- Card hover: translateY(-4px), shadow deepens (0 8px 24px rgba(0,0,0,0.12)), transition 0.3s
- "Details >" hover: text shifts right 4px (translateX(4px)), arrow stretches
- Job card hover: background tints with light blue (#005FF9 at 5% opacity)
- Scroll: sections fade in with 0.5s ease on viewport entry
- Product icons hover: scale(1.1), shadow appears, slight rotate(±3deg) for playfulness
- Page load: logo and nav appear first (0.2s), hero content fades up (0.4s), icons stagger in (0.6s+)

MOOD: Corporate-creative, organized, design-system-oriented. Professional tech company design team that takes pride in their craft.
```
