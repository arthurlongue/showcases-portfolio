# P10. Arctos Creative

> **Source:** arctoscreative.com
> **Reference:** `P10-arctos-creative.webp`
> **Category:** Premium
> **Best For:** Fotógrafos, diretores de arte, estúdios criativos, videographers

**Visual DNA:** Ethereal, dreamy, and highly spatial. Glassmorphism layered over fluid, WebGL-like watercolor gradient meshes. Typography is delicate serif matching the artistic intent of a high-end photography portfolio.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-base: #050505;
--text-primary: #FFFFFF;
--text-secondary: #888888;
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--blur-cyan: #4facfe;
--blur-purple: #a18cd1;
--blur-pink: #fbc2eb;

/* ── Typography ── */
--font-heading: "Instrument Serif", "Cormorant Garamond", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 italic clamp(64px, 8vw, 120px) / 1.0 var(--font-heading);
--heading-section: 400 italic clamp(36px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 300 16px / 1.6 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(80px, 10vw, 120px);
--max-width: 1400px;

/* ── Borders & Radius ── */
--radius-card: 24px;
--glass-blur: blur(24px);
```

---

## AI Replication Prompt

```
You are building an ultra-premium Fotógrafo / Creative Portfolio landing page. The design must feel like walking through a digital art gallery. Follow these rules:

VISUAL FOUNDATION:
- Deep dark base (#050505) but illuminated entirely by organic, fluid mesh gradients (cyan, purple, pink) acting as background watercolors.
- True Glassmorphism: Content is housed inside frosted glass cards (background: rgba(255,255,255,0.03), backdrop-filter: blur(24px), border: 1px solid rgba(255,255,255,0.08)).
- Photography is the star. DO NOT clutter the UI around the images.

TYPOGRAPHY:
- Typography must feel poetic. Utilize delicate italicized serifs (Instrument Serif or Cormorant) at massive scale.
- Often use all-lowercase for headers to give an approachable but highly artistic vibe.
- High contrast: Light aesthetic sans-serif tracking for body text.

LAYOUT:
- Spatial galleries: Do not just stack images. Utilize horizontal scroll-snapping track containers where photos overlap each other natively on the z-axis.
- "Free floating": Remove rigid bounding boxes anywhere they aren't strictly necessary.
- Let elements breathe with massive vertical padding.

COMPONENTS:
- Glass Cards: For services or contact info. Must properly blur the background mesh gradients behind them.
- Abstract shape layers behind the photo carousels to tie the scene together.
- Minimalist line-art navigation arrows and UI controls.

ANIMATIONS & MICRO-INTERACTIONS:
- Interactive Ambient Meshes: The background watercolor color blobs should follow the user's cursor slowly, creating a living, breathing canvas.
- Hover states on photography: Images should slightly scale up inside their containers (scale 1.05) extremely slowly (1200ms duration).
- Image Reveals: As the user scrolls, photos materialize through a mix of blur(10px) -> blur(0) and opacity 0 -> 1.

MOOD: Ethereal, deeply emotional, premium. The UI should disappear and let the art breathe completely.
```
