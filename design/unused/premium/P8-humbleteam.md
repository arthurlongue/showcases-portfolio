# P8. Humbleteam

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #FFFFFF;
--bg-accent: #E8430A;             /* vibrant orange-red */
--bg-dark: #1A1A1A;
--bg-cream: #FFF5F0;              /* warm tinted white */
--text-primary: #000000;
--text-on-accent: #FFFFFF;
--text-on-dark: #FFFFFF;
--accent-orange: #E8430A;

/* ── Typography ── */
--font-heading: "Space Grotesk", "Satoshi", "Cabinet Grotesk", sans-serif;
--font-display: var(--font-heading);  /* same, at massive sizes */
--font-body: "Inter", sans-serif;
--heading-brand: 900 clamp(80px, 12vw, 140px) / 0.95 var(--font-display);
--heading-section: 800 clamp(32px, 4vw, 48px) / 1.1 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 0px;               /* sharp edges for sticker aesthetic */
--radius-button: 0px;             /* sharp rectangular buttons */
--border-thick: 3px solid #000000;

/* ── Effects ── */
--hand-drawn-underline: wavy-underline-svg; /* SVG wavy line for emphasis */
--sticker-shadow: 2px 2px 0 rgba(0,0,0,0.1);
```

---

## AI Replication Prompt

```
You are building a bold, personality-driven agency landing page inspired by Humbleteam. This is NOT a template — it's a brand experience. Maximum character, zero corporate energy. Follow these rules:

VISUAL FOUNDATION:
- Three-color palette STRICTLY ENFORCED: white (#FFF), vibrant orange-red (#E8430A), and black (#1A1A1A). No other colors. Period
- Custom cartoon illustrations EVERYWHERE: quirky orange mascot creatures, flying pigs, headphones-wearing characters, shipping stickers
- "Shipping label" aesthetic: rectangular sticker-like badges with text ("THIS WAY APP", "PLEASE HANDLE WITH CARE", "START") scattered in hero area, with thick borders and stamp-like styling
- Full-width orange-red (#E8430A) sections for big stats and social proof
- Clean white for main content, black for footer and select sections
- Illustrations and text interweave — characters peek out from behind text, sit on headings, etc.

TYPOGRAPHY — THIS IS CRITICAL:
- Brand name displayed MASSIVE: clamp(80px, 12vw, 140px), lowercase, extra-bold (900) grotesque sans, "humbleteam" followed by an orange dot
- Headlines: clamp(32px, 4vw, 48px), bold 800, playful but professional
- Key emphasis words get HAND-DRAWN TREATMENT: wavy/squiggly underlines drawn as SVG paths on words like "insanely" in "insanely great product" and "just work" in "products that just work"
- "work!" displayed as a massive decorative word (100px+) in the contact section — letters get playful treatment (the 'o' replaced with a character/sticker)
- CTA button text: bold, irreverent copy like "KNOCK, KNOCK" instead of "Submit"
- Body: 16px, clean, high readability, normal weight

LAYOUT:
- Hero: massive "humbleteam" brand name + orange dot → scattered sticker illustrations around it (THIS WAY APP, mascots, arrows) creating a collage
- Tagline: "From cool idea to insanely great product." with wavy underline on "insanely"
- Case study grid: 2-column, each card has illustration/screenshot top (on orange or dark bg), title + client name + description below. Thick bottom border on cards
- "VIEW ALL CASE STUDIES" outlined button: thick border (3px), sharp corners, centered
- Full-bleed orange section: "$370M raised" in MASSIVE type (100px+), client stat text below
- "We work WITH them" philosophy section: icon-style cards, each with fun illustration + bold label (SWIPE logo, shirt icon labeled "S, M, L, XL", HMBL badge). Italic "We work with them." as subheading
- Contact section: "work!" in massive decorative type + orange mascot, email form below, "KNOCK, KNOCK" submit button
- Footer: cities (Prague, New York) + social links + tagline repeat

COMPONENTS:
- Outlined buttons: thick border (3px solid #000), NO fill, sharp corners. Hover → fills black, text turns white
- Orange buttons: #E8430A bg, white text, sharp corners. Hover → darkens to #CC3A08
- Sticker labels: rectangular badges with thick border, bold uppercase text, slight rotation (±2deg), sticker shadow
- Case study cards: no radius, image top with colored overlay, thick bottom divider, title + description
- Philosophy cards: illustration + bold one-line label + description
- "KNOCK, KNOCK" CTA: orange bg, white uppercase bold text, sharp corners, large padding

ANIMATIONS & MICRO-INTERACTIONS:
- Sticker illustrations: each sticker enters with a playful "stamp" animation — scale(1.3→1) + rotate(±5deg→0deg) + opacity(0→1), with overshoot easing, staggered 120ms
- Brand name entrance: letters animate in one by one from below (translateY(100%→0)) with overflow hidden on wrapper, 50ms stagger — feels like being typed/printed
- Hand-drawn underlines: SVG path stroke animates from 0→full length (stroke-dashoffset technique), triggered on scroll entry, 0.8s duration
- Orange section: slides in from below as a full block — translateY(50px→0) + opacity, 0.6s, revealing the massive stat number
- Stat number: counts up from $0 → $370M with comma formatting, 2s duration, triggered on section entry
- Case study cards: alternate left/right entrance — odd cards from left (translateX(-30px→0)), even from right (translateX(30px→0))
- Hover on case study cards: image scales 1.05 inside container (overflow hidden), thick border color changes to orange
- Sticker hover: individual stickers rotate ±3deg more on hover, slight scale(1.05)
- Mascot animations: cartoon characters have idle animations — subtle bobble (translateY ±3px, 2s infinite) or blink (opacity flicker on eyes)
- Scroll: sections have strong entrance animations with 0.7s duration, making scrolling feel like flipping through a physical portfolio
- "work!" text: letters animate individually — each letter pops in with a different timing/rotation creating playful energy
- KNOCK, KNOCK button: on hover, text shakes slightly (translateX ±2px, 0.1s, 3 iterations) like actually knocking

IMMERSIVE DETAILS:
- Paper texture: very subtle paper/grain texture on white sections (CSS SVG filter, 2% opacity) for a printed-material feel
- Sticker peeling: on hover, stickers tilt slightly (perspective + rotateX) as if being peeled off the page
- Cursor: custom cursor on dark/orange sections — small white crosshair or arrow
- Case study images: on hover, show a subtle "parallax tilt" effect (transform based on mouse position within card)
- Sound effects (optional, off by default): click sounds on buttons, stamp sound on sticker hover — physical, tactile
- Footer: "From cool idea to insanely great product." tagline + mascot should have a subtle wave/nod animation

MOOD: Irreverent, confident, startup-culture, FUN. Like if a vinyl record sleeve designer built an agency website. Maximum personality, zero corporate blandness. Makes you smile.
```
