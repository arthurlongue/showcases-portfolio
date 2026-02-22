# P4. FlyHyer

> **Source:** flyhyer.com
> **Reference:** `P4-flyhyer.webp`
> **Category:** Premium
> **Best For:** Odontologia estética, clínicas premium de odontologia, harmonização facial, high-end healthcare

**Visual DNA:** Deep-contrast luxury clinic aesthetic. Immaculate pure white surfaces layered over deep restorative navy blues. Editorial minimal serif type, spatial separation through extreme whitespace, and precision instrument-like hairlines.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #0D1B2A; /* deep navy */
--bg-secondary: #1B263B;
--bg-light: #FFFFFF; /* pristine white */
--bg-gray: #F8F9FA;
--text-primary: #0D1B2A;
--text-light: #FFFFFF;
--text-secondary: #6C757D;
--accent-border: #E0E0E0;

/* ── Typography ── */
--font-heading: "Playfair Display", "DM Serif Display", serif;
--font-body: "Inter", "Satoshi", sans-serif;
--heading-hero: 400 clamp(56px, 8vw, 96px) / 1.0 var(--font-heading);
--heading-section: 400 clamp(36px, 4vw, 56px) / 1.1 var(--font-heading);
--body: 400 16px / 1.8 var(--font-body);
--label: 500 13px / 1 var(--font-body); /* 0.08em letter-spacing */

/* ── Spacing ── */
--section-padding: clamp(80px, 10vw, 130px);
--max-width: 1200px;

/* ── Borders & Radius ── */
--radius-card: 0px; /* Sharp precision */
--radius-button: 0px;
--radius-image: 0px;
```

---

## AI Replication Prompt

```
You are building a high-end luxury dentistry / facial aesthetics landing page. The design philosophy is "Precision and Purity." Avoid generic health tech tropes. It must feel like a Five-Star Hotel or exclusive aviation club applied to healthcare. Use simple, standard Tailwind or CSS implementations. Follow these rules:

VISUAL FOUNDATION:
- Extreme polarity: The UI alternates between pristine white (#FFFFFF, representing clean teeth/hygiene) and deep navy blue (#0D1B2A, representing calm, trust, and depth).
- ZERO bright vibrant accent colors. Sophistication comes strictly from optical negative space and razor-sharp 1px hairlines (#E0E0E0).
- Shape: 0px border-radius everywhere. Everything is strictly geometric. No rounded pill buttons. Sharp aesthetic signifies surgical precision and exactness.
- Photography: Edge-to-edge structural photography showing the clinic space, pristine equipment, or flawless subtle smiles, unfiltered.

TYPOGRAPHY:
- Hero: Oversized fluid display typography using the overarching serif (e.g. "Playfair Display").
- Treatment of trademark/copyright symbols (e.g., Lente de Contato®) as high-end ornamental elements mimicking luxury brand signatures.
- Clinical uppercase micro-copy (13px, tracked out 0.08em) functions as architectural scaffolding framing the huge imagery.

LAYOUT:
- Hero Section: Deep navy background, large serif text in white, high-contrast imagery. Strict, architectural grid.
- Over 60% of the viewport should be negative space.
- The "Services" or "Treatments" table grid: A pure CSS Grid with 1px border lines replicating an elegant technical architecture document (e.g. Invisalign, Facetas em Resina).
- Before/After Highlights: Strict side-by-side squares with 0px gap, extremely clinical.

COMPONENTS:
- Primary Button: Sharp rectangle. Pure white background, dark text (or inverted if on white). 1px border.
- Cards: No background, just sharp 1px borders forming a strict grid.
- Service Items: Architectural lists with uppercase microcopy numbering (e.g., "01 — CLINICAL").

ANIMATIONS & MICRO-INTERACTIONS:
- Whisper, don't shout: Everything animates slowly (800ms) with ease-out. No bouncing. Elements elegantly unfurl, fade and slide up by 15px.
- Hover states on service tables highlight the full grid row softly, transforming text colors.
- Image Parallax: High-res clinic photos move inside their containers at strictly 0.9x scroll speed, generating luxurious spatial depth.

MOOD: Impeccably clean, highly exclusive, deeply trusted. The UI equivalent of walking into a multi-million-dollar aesthetic clinic with a marble lobby.
```
