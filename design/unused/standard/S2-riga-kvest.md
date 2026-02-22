# S2. Riga Kvest

> **Source:** rigakvest.com
> **Reference:** `S2-riga-kvest.webp`
> **Category:** Standard
> **Best For:** Tourism, city experiences, escape rooms, local events, adventure brands

**Visual DNA:** Tourism/experience website — playful with real photography of old-town architecture, red-coral accents, bento-style asymmetric image grids, map integrations, and a friendly modern feel.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-dark: #1A1A1A;
--bg-light: #E8F4F4;              /* light mint tint */
--text-primary: #000000;
--text-secondary: #666666;
--accent-coral: #FF4444;
--accent-green: #4CAF50;          /* price badge green */

/* ── Typography ── */
--font-heading: "Inter", "DM Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 800 clamp(40px, 5vw, 56px) / 1.1 var(--font-heading);
--heading-section: 700 clamp(28px, 3.5vw, 40px) / 1.2 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-image: 16px;
--radius-card: 12px;
--radius-button: 999px;
--radius-badge: 50%;
```

---

## AI Replication Prompt

```
You are building a tourism/experience landing page inspired by RigaKvest. The vibe is "discover something magical in the city" — friendly, adventurous, photographically rich. Follow these rules:

VISUAL FOUNDATION:
- Clean white background with generous whitespace as the base
- Real photography of the city/experience is the PRIMARY visual element — architecture, streets, people exploring
- Red-coral accent (#FF4444) for CTAs and interactive elements — warm, inviting
- Dark (#1A1A1A) section for featured experience (dramatic contrast with photography)
- Light mint-tinted sections (#E8F4F4) for variety and breathing room
- Decorative hand-drawn path lines: dashed curves/paths connecting elements (SVG dashed strokes)

TYPOGRAPHY:
- Bold modern sans-serif (Inter or DM Sans, 700-800 weight)
- Hero: clamp(40px, 5vw, 56px), extra-bold, "Online quest through the old city of Riga!"
- Section headings: clamp(28px, 3.5vw, 40px), bold
- Body: 16px, gray (#666), line-height 1.6
- Duration/stat text: large bold display (e.g., "2-3h" in 48px)

LAYOUT:
- Hero: large city photograph filling upper section + overlapping headline text + decorative white swooping path SVG + CTA pill button
- Feature duo: 2 columns with icon + bold title + description ("Easy payment", "Come in anytime")
- Bento image grid: asymmetric rounded photo tiles at different scales and aspect ratios — 3-5 photos arranged playfully
- Map section: embedded styled map with custom pin + location card overlay
- Dark photography section: "The Old Town, through the eyes of the locals!" — full-bleed dark image band with white text overlay + price badge
- About section: text-heavy left + sidebar images right
- Info cards: quest duration display "2-3h" with clock icon, circular price badge "20€"
- Photo gallery: horizontal strip of team/local photos
- Footer: 4-column links + social icons + contact info

COMPONENTS:
- Rounded coral CTA buttons: #FF4444 bg, white text, pill shape (radius 999px), "Let's go!"
- Circular price badge: green (#4CAF50) circle, white text "20€" centered, absolute positioned floating on image
- Rounded photo tiles: 16px radius, subtle shadow on hover
- Dashed path lines: SVG dashed stroke connecting hero elements (curved swooping paths)
- Feature icons: small coral circles with white icon inside
- Map card: white overlay card on embedded map with location name + details
- Duration display: large bold number + unit with clock icon

ANIMATIONS & MICRO-INTERACTIONS:
- Hero entrance: photograph fades in + scales from 1.05→1 (0.8s), headline slides up from below (0.5s delay), CTA pops in (0.8s delay)
- Dashed path SVG: stroke-dashoffset animation draws the path progressively on scroll, creating a "journey" feeling
- Bento images: staggered entrance — each tile fades up + slides in with 100ms delay, some from left, some from right
- Price badge: bouncy pop-in — scale(0→1.15→1) with overshoot easing on scroll entry
- Photo tiles hover: scale(1.03), shadow deepens (0 8px 24px rgba(0,0,0,0.15)), transition 0.3s
- Dark section: content reveals with dramatic fade (0→1) + translateY(30px→0), 0.6s
- Map: custom pin drops in from above (translateY(-20px→0) + bounce) when section enters viewport
- Scroll parallax: hero photograph scrolls at 0.85x speed, creating depth
- CTA button hover: scale(1.05), shadow appears, background darkens slightly to #E03333
- Gallery strip: can auto-scroll horizontally at slow speed, pauses on hover
- Page load: hero image loads first as a blur (filter: blur(10px)→blur(0)) to simulate progressive loading feel

IMMERSIVE DETAILS:
- Location dots: on the dashed path SVG, add small animated dots that travel along the path (SVG animateMotion)
- Photo hover: show a subtle location pin icon overlay on photos when hovered
- Info cards: subtle float animation (translateY ±3px, 3s infinite) to feel playful
- Time display: clock icon has a subtle ticking animation (second hand rotates, or pulse)
- Sound (optional): ambient city sounds on hero section, muted by default with small speaker toggle

MOOD: Friendly, adventurous, inviting, exploratory. Like a beautifully designed Airbnb Experience page that makes you want to book immediately.
```
