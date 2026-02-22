# P1. Cosmos Network

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #0B0B1A;            /* deep space black */
--bg-secondary: #111127;           /* dark navy */
--bg-card: rgba(255, 255, 255, 0.05); /* glass card fill */
--text-primary: #FFFFFF;
--text-secondary: #A0A0B8;         /* muted lavender */
--accent-purple: #7B61FF;
--accent-blue: #00C2FF;
--accent-pink: #FF6B9D;
--accent-orange: #FF8A50;
--gradient-orb-1: radial-gradient(circle, #7B61FF 0%, transparent 70%);
--gradient-orb-2: radial-gradient(circle, #00C2FF 0%, transparent 70%);
--gradient-orb-3: radial-gradient(circle, #FF6B9D 0%, transparent 70%);

/* ── Typography ── */
--font-heading: "Inter", "Satoshi", "General Sans", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 800 clamp(48px, 6vw, 72px) / 1.05 var(--font-heading);
--heading-section: 700 clamp(32px, 4vw, 48px) / 1.15 var(--font-heading);
--body: 400 clamp(16px, 1.2vw, 18px) / 1.6 var(--font-body);
--letter-spacing-tight: -0.02em;

/* ── Spacing ── */
--section-padding: clamp(80px, 10vw, 140px);
--max-width: 1200px;
--gap-cards: 24px;

/* ── Borders & Radius ── */
--radius-card: 20px;
--radius-button: 10px;
--glass-border: 1px solid rgba(255, 255, 255, 0.1);

/* ── Effects ── */
--glow-purple: 0 0 80px rgba(123, 97, 255, 0.3);
--glow-blue: 0 0 60px rgba(0, 194, 255, 0.2);
--backdrop-blur: blur(20px);
--orb-blur: blur(100px);
```

---

## AI Replication Prompt

```
You are building a premium dark-theme landing page inspired by Web3/blockchain aesthetics (think Cosmos Network). The goal is a "digital cosmos" experience that feels like floating through a futuristic galaxy. Follow these design rules precisely:

VISUAL FOUNDATION:
- Deep space black background (#0B0B1A) with subtle radial gradient overlays creating depth
- Floating gradient orbs positioned absolutely throughout the page: purple (#7B61FF), cyan (#00C2FF), pink (#FF6B9D), orange (#FF8A50). Each orb is a large div (400-600px) with radial-gradient, filter: blur(100px), opacity 0.3-0.5, and position: absolute
- Glassmorphism cards: background rgba(255,255,255,0.05), border 1px solid rgba(255,255,255,0.1), backdrop-filter: blur(20px), border-radius 20px
- Ethereal glow effects behind key elements using large box-shadows: 0 0 80px rgba(123,97,255,0.3)
- Subtle noise texture overlay on the background (optional, CSS grain via SVG filter)

TYPOGRAPHY:
- Geometric sans-serif (Inter, Satoshi, or General Sans)
- Hero headlines: clamp(48px, 6vw, 72px), font-weight 800, letter-spacing -0.02em, white
- Section headings: clamp(32px, 4vw, 48px), font-weight 700
- Body text: clamp(16px, 1.2vw, 18px), font-weight 400, muted lavender (#A0A0B8), line-height 1.6
- Large stat numbers displayed prominently (e.g., "$116B." / "249.") in bold white, 56-80px
- Stat labels in small text below numbers, uppercase, letter-spacing 0.05em

LAYOUT:
- Generous vertical section padding: clamp(80px, 10vw, 140px)
- Max-width 1200px, centered with auto margins
- Hero: full-viewport-height, headline left-aligned with floating 3D celestial illustration right
- Stats row: glass card with 4 key metrics in horizontal layout, dividers between them
- Feature trio: 3 glassmorphism cards in a row with subtle icon, title, body text
- Product section: dark glass card with centered UI mockup/screenshot + glowing backdrop
- Ecosystem section: asymmetric layout with text left, floating interactive cards right
- CTA section: centered text with gradient-border button on dark background
- Footer: minimal, logo + link columns on dark

COMPONENTS:
- Primary button: glass background, 1px accent-colored border, text-white, padding 12px 28px, border-radius 10px, hover: border glows with box-shadow, background brightens slightly
- Ghost button: transparent background, 1px white/30% border, hover: background white/5%
- Stat cards: large number (800 weight) + small label beneath, inside glass container
- Feature cards: glass container, 24px padding, small icon circle (accent colored) at top, title 20px bold, body 16px muted
- Navigation: fixed top, semi-transparent (#0B0B1A/80%), backdrop-blur(12px), logo left, links center, single accent CTA button right

ANIMATIONS & MICRO-INTERACTIONS:
- Orbs: CSS @keyframes drift — translateX(±30px) translateY(±20px) over 20-30s, infinite, ease-in-out. Each orb on a different delay and duration for organic movement
- Cards: Intersection Observer triggered — opacity 0→1, translateY(30px→0), transition 0.6s cubic-bezier(0.16, 1, 0.3, 1), staggered 100ms per card
- Hero headline: words animate in sequentially — each word fades up with 80ms stagger using clip-path or transform
- Stats: number counter animation (count from 0 to target value over 1.5s) using requestAnimationFrame or Framer Motion's useMotionValue
- Hover on glass cards: translateY(-4px), box-shadow increases glow intensity, border brightens to rgba(255,255,255,0.2), transition 0.3s ease
- Scroll parallax: orbs move at 0.3-0.5x scroll speed (CSS transform: translateY(calc(var(--scroll) * 0.3)))
- Navigation: transparent at top → adds background blur + slight bg color after 100px scroll
- Button hover: subtle pulse glow animation (box-shadow scales up and fades, 1.5s infinite)
- Page load: background orbs scale from 0.8→1 with 1s ease-out delay

IMMERSIVE DETAILS:
- Cursor: consider a custom cursor with a subtle trailing glow dot (small radial gradient following mouse position, 50ms delay, opacity 0.3)
- Scroll progress indicator: thin gradient line (purple→blue→pink) at the very top of viewport showing page scroll percentage
- Section transitions: as user scrolls between sections, background orbs shift position slightly creating a living, breathing feel
- Stars: tiny white dots (1-2px) scattered at random positions with twinkle animation (opacity 0→0.8→0, 3-5s infinite, random delays) for deep-space ambiance

MOOD: Futuristic, cosmic, trustworthy, cutting-edge. Like floating through a digital galaxy. The design should feel alive and responsive to user presence.
```
