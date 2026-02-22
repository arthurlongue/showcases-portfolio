# S4. OlympusDAO

> **Source:** olympusdao.finance
> **Reference:** `S4-olympus-dao.webp`
> **Category:** Standard
> **Best For:** DeFi protocols, financial platforms, treasury dashboards, token/crypto projects

**Visual DNA:** Refined beige/cream DeFi site with 3D rendered gold coins, soft warm shadows, neutral palette, clean data presentation, and a sophisticated "traditional finance meets Web3" aesthetic.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #F5F0E8;            /* warm cream */
--bg-card: #FFFFFF;
--bg-muted: #EDE8DF;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--accent-gold: #C9A84C;
--accent-dark: #2D2D2D;

/* ── Typography ── */
--font-heading: "Inter", "Outfit", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 600 clamp(36px, 4.5vw, 56px) / 1.15 var(--font-heading);
--heading-section: 600 clamp(28px, 3vw, 40px) / 1.2 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);
--stat-number: 700 clamp(36px, 5vw, 72px) / 1.0 var(--font-heading);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1100px;

/* ── Borders & Radius ── */
--radius-card: 12px;
--radius-button: 8px;

/* ── Effects ── */
--card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
--warm-shadow: 0 8px 32px rgba(180, 160, 120, 0.08);
```

---

## AI Replication Prompt

```
You are building a refined DeFi/financial protocol landing page inspired by OlympusDAO. The aesthetic is "warm credibility" — warm tones convey trust, clean data conveys competence. Follow these rules:

VISUAL FOUNDATION:
- Warm cream/beige background (#F5F0E8) — NOT cold white, everything has warmth
- White cards (#FFF) with soft warm shadows (0 4px 20px rgba(0,0,0,0.06)) floating on cream
- 3D rendered metallic/gold coin elements as hero illustration — sophisticated, financial
- Entirely light and warm — NO dark sections, no dramatic contrast
- Subtle muted beige (#EDE8DF) sections for variety within the warm palette
- Minimal decorative elements — let the data and typography speak

TYPOGRAPHY:
- Clean modern sans-serif (Inter or Outfit), medium weights (500-600)
- Hero: clamp(36px, 4.5vw, 56px), weight 600, "The Future Decentralized Reserve Currency"
- Section headings: clamp(28px, 3vw, 40px), weight 600
- Stat numbers: clamp(36px, 5vw, 72px), bold 700, for treasury values ("$302,972,692", "120,000+", "99.29%")
- Body: 16px, gray (#666), generous line-height 1.6
- Stat labels: small uppercase text, letter-spacing 0.04em, muted

LAYOUT:
- Hero: headline + paragraph + dark CTA button + 3D coin illustration right
- Stats card: white card spanning full width with 4 metrics in a row (Treasury Balance, Number of Holders, Protocol Owned Liquidity, Unique Tokens), separated by vertical dividers
- "A Better Digital Economy" section: paragraph + 3-column feature cards (Purchasing Power, Broad Acceptance, High Utility) with icon + title + description
- Participation section: 2 equal cards (Staking, Bonding) with photography + description + CTA
- Community Stats: large numbers (138,750+ Twitter Followers, 80,000+ Discord Members) with icons
- Product grid: 4 cards (OlympusPro, OlyZaps, Olympus Give, Bonds V2) with icon + title + description + arrow link
- News/blog section: article cards with title + date in bordered containers
- FAQ accordion: clean expand/collapse with plus/minus icons
- Footer: logo + 4-column link grid

COMPONENTS:
- Dark solid button: #2D2D2D bg, white text, 8px radius, hover → lighten to #444
- White cards: 12px radius, warm shadow, 24-32px padding
- Feature cards: white bg, subtle shadow, top icon (line icon in circle), title bold, body muted
- Arrow link buttons: small circle with → arrow, dark stroke, hover → fills dark
- FAQ accordion: white bg, border-bottom divider, plus/minus toggle icon, smooth expand
- Stat display: large bold number + small label beneath, all within white card container
- Product cards: white bg, icon top-left, title, description, arrow link bottom-right

ANIMATIONS & MICRO-INTERACTIONS:
- Stats card: numbers count up from 0 to target value with easing (2s duration), triggered on scroll entry. Format with commas and appropriate symbols ($, +, %)
- Feature cards: stagger entrance from bottom — translateY(20px→0) + opacity, 100ms per card, 0.5s duration
- 3D coin illustration: subtle hover float — translateY(±5px) + rotate(±2deg), 5s infinite ease-in-out
- Cards hover: translateY(-3px), shadow deepens to 0 8px 32px rgba(180,160,120,0.12), transition 0.3s
- FAQ accordion: smooth height animation (max-height transition or grid-template-rows: 0fr→1fr), plus rotates 45deg to become X
- Arrow links: arrow shifts right 4px on hover (translateX(4px)), circle border darkens
- Section reveals: gentle fade up (0.4s), triggered at 20% viewport intersection — understated, not flashy
- Participation section images: subtle parallax (0.95x scroll speed)
- Page load: hero content fades in (0.3s), stats card slides up (0.5s), 3D illustration drifts in from right (0.7s)
- Community stat numbers: pulse briefly (scale 1→1.02→1) after count-up completes

IMMERSIVE DETAILS:
- Warm ambient: very subtle warm gradient overlay on the entire page (transparent → rgba(245,240,232,0.3)) reinforcing warmth
- Card hover: consider a very subtle gold (#C9A84C at 3% opacity) tint on the card border
- 3D coin: on hover, increase rotation speed slightly and add a subtle gold shimmer (box-shadow pulse in gold)
- Smooth scrolling: gentle, matching the warm, unhurried aesthetic
- Data freshness: stat numbers could have a small "Live" indicator dot (green, pulsing) next to them

MOOD: Trustworthy, established, warm-minimal. Like a well-designed traditional finance platform that happens to be decentralized. Quiet confidence.
```
