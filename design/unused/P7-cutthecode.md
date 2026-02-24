# P7. CutTheCode

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #0A0A0A;
--bg-card: #1A1A1A;
--bg-light: #F5F5F5;               /* contrast sections */
--bg-elevated: #151515;
--text-primary: #FFFFFF;
--text-on-light: #000000;
--text-muted: #777777;
--accent-pink: #E8A0BF;            /* soft pink/lavender */
--accent-purple: #9B59B6;

/* ── Typography ── */
--font-heading: "Inter", "Satoshi", "Geist", sans-serif;
--font-body: "Inter", sans-serif;
--heading-hero: 700 clamp(44px, 5.5vw, 64px) / 1.1 var(--font-heading);
--heading-section: 600 clamp(28px, 3.5vw, 44px) / 1.2 var(--font-heading);
--body: 400 16px / 1.6 var(--font-body);
--marquee: 300 clamp(60px, 8vw, 120px) / 1.0 var(--font-heading);

/* ── Spacing ── */
--section-padding: clamp(60px, 8vw, 100px);
--max-width: 1280px;
--gap-cards: 20px;

/* ── Borders & Radius ── */
--radius-card: 16px;
--radius-button: 999px;
--radius-tag: 999px;

/* ── Effects ── */
--marquee-opacity: 0.15;
--card-hover-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

---

## AI Replication Prompt

```
You are building a dark-theme digital agency landing page inspired by CutTheCode. The vibe is "creative agency that actually ships" — dark, confident, showcase-focused. Follow these rules:

VISUAL FOUNDATION:
- Near-black background (#0A0A0A) for majority of the page
- Light (#F5F5F5) sections for testimonials, community, and contrast breaks
- Soft pink/lavender (#E8A0BF) as primary accent for CTAs, tags, and highlights
- Vibrant, colorful project showcase images that POP against the dark background
- Client/partner logos displayed in grayscale rows on light sections
- Tool/platform logos (Webflow, Hubspot) as trust badges

TYPOGRAPHY:
- Clean geometric sans (Inter, Satoshi, or Geist Sans)
- Hero: clamp(44px, 5.5vw, 64px), bold, white, multi-line headline
- Section headers with decorative prefix markers: "+ Our vision", "+ Projects", "+ Contacts"
- Large FADED decorative text behind sections — watermark-style marquee at 15% opacity, clamp(60px, 8vw, 120px), like "digital creators" scrolling horizontally
- Body: 16px, gray (#777) on dark, dark on light
- Tag pills: small, bold, uppercase on accent backgrounds

LAYOUT:
- Hero: large headline + 3D/colorful floating mockup right + two CTA buttons (filled pink + outlined ghost)
- Client logos strip below hero: grayscale, horizontal
- Services row: 3 columns (Design, Build, Automate) — icon or number + title + description
- "The no-code revolution" featured text section: large display text with pink CTA button
- Faded decorative marquee text band: "digital creators" scrolling behind project section
- Project showcase: 4-column card grid, each with vibrant thumbnail image, project title, tag pills, and client name
- Light section: testimonial cards with avatar + quote + name + company
- Community section: overlapping avatar circles + description + CTA
- Scrolling marquee band: "+ Ready to move faster? + Get in touch!" repeating horizontally
- Footer: dark, newsletter signup + 4 column links + social buttons

COMPONENTS:
- Pink filled CTA: #E8A0BF bg, dark text, pill shape (radius 999px)
- Ghost button: transparent, 1px white border, pill shape, hover → fills with pink
- Project cards: dark bg (#1A1A1A), rounded image top (radius 12px), title 18px bold, tag pills below, client name in muted text
- Tag pills: small rounded (radius 999px), colored background, 12px bold text
- Testimonial cards: white bg, quote text, avatar circle, name, role, company
- Section prefix markers: "+" symbol in accent color before section label
- Avatar overlap: 4-5 circular avatars with -8px negative margin, border: 2px solid background
- Scrolling marquee: overflow hidden, inner div translates horizontally infinitely

ANIMATIONS & MICRO-INTERACTIONS:
- Horizontal scrolling marquee: CSS translateX animation, speed ~30px/s, infinite loop, two copies of content for seamless repeat. Hover → pauses animation
- Project cards: staggered entrance — each card fades up (opacity 0→1, translateY(30px→0)) with 80ms delay between cards
- Card hover: scale(1.03), box-shadow intensifies to 0 8px 32px rgba(0,0,0,0.3), image inside scales to 1.05 with overflow hidden. Transition 0.3s ease
- Hero mockup: floats with subtle translateY(±10px) animation, 4s infinite ease-in-out
- Faded background text: scrolls continuously at slow speed (translateX), independent of page scroll
- Light→dark section transitions: smooth background-color transition as you scroll (use Intersection Observer + CSS custom properties)
- Testimonial cards: subtle slide-in from left/right, staggered
- Avatar circles: pop in one by one with scale(0→1) and 80ms stagger
- Ghost button hover: border color transitions from white to pink, background fills with pink/10%
- CTA marquee band: continuous scroll, pauses on hover, text has subtle text-shadow glow in pink
- Page load: nav slides down (translateY(-100%→0), 0.3s), hero content fades up (0.5s), client logos fade in (0.8s)

IMMERSIVE DETAILS:
- Project card images: on hover, apply a subtle brightness increase (filter: brightness(1.1)) for a "spotlight" feel
- "+" prefix: subtle rotation animation on scroll entry (rotate -90deg → 0deg, 0.3s)
- Dark section ambient: very subtle noise texture overlay (CSS SVG filter at 3% opacity)
- Marquee speed: slightly accelerates when user scrolls, returns to normal speed when scroll stops
- Cursor: custom cursor on project cards — shows a "View" text badge following the cursor
- Smooth scrolling: Lenis for consistent buttery scrolling across sections

MOOD: Creative agency energy, modern, competent, confident. Like a design-forward Webflow studio that ships fast and shows receipts.
```
