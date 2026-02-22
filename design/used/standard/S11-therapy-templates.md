> **Sources:** Dr. Devis, Laura Fragman, Elias therapist templates
> **References:** `S11-therapy-dr-devis-full.webp`, `S11-therapy-dr-devis-overview.webp`, `S11-therapy-laura-fragman.webp`, `S11-therapy-elias.webp`
> **Category:** Standard
> **Best For:** Psicólogos, terapeutas, psicanalistas, coaches de saúde mental

**Visual DNA:** Warm, human-centric therapy aesthetic. Earthy creams, burnt sienna, and olive accents. Uses soft spacing to establish safety, calmness, and professionalism through rounded shapes and natural color harmonies.

---

## Design Tokens

```css
/* ── Colors ── */
--bg-primary: #F5E6D0; /* warm sand */
--bg-light: #FFFFFF;
--bg-olive: #8FA84A;
--bg-peach: #FDDCCC;
--text-primary: #8B4513; /* burnt sienna */
--text-secondary: #666655;
--text-light: #FFFFFF;

/* ── Typography ── */
--font-heading: "DM Serif Display", "Playfair Display", serif;
--font-body: "Inter", "DM Sans", sans-serif;
--heading-hero: 400 clamp(36px, 4.5vw, 48px) / 1.15 var(--font-heading);
--heading-section: 400 clamp(24px, 3vw, 32px) / 1.2 var(--font-heading);
--body: 400 16px / 1.65 var(--font-body);

/* ── Spacing ── */
--section-padding: clamp(60px, 6vw, 100px);
--max-width: 1000px;

/* ── Borders & Radius ── */
--radius-card: 12px;
--radius-button: 999px;
```

---

## AI Replication Prompt

```
You are building a warm, trust-building therapist/counseling standard landing page. The emotional goal is "you're safe here" — human, professional, non-clinical. Follow these rules:

VISUAL FOUNDATION:
- Base color is NOT white. The entire page sits on a warm sand background (#F5E6D0). It must feel like a warm, well-lit room.
- White (#FFFFFF) is only used for specific floating elements (testimonial cards, pricing cards) to lift them slightly off the sand background.
- Accents: Burnt Sienna (#8B4513) for text and Olive Green (#8FA84A) for CTAs.
- Emphasize the therapist's portrait: High-quality, softly lit, approachable human photography. Avoid stock imagery at all costs.

TYPOGRAPHY:
- Warm classic serif (DM Serif Display or Playfair Display) exclusively at a 400 weight. It should never feel heavy or aggressive.
- Maintain a highly readable sans-serif for body text. Spacing and readability are paramount for individuals seeking help.

LAYOUT:
- Hero: Large therapist portrait photo + overlapping calm serif headline + warm background color.
- Specialty accordions: Clean vertical lists with 12px radiuses, expanding to reveal treatment details. Use small colored borders (peach to sienna gradient) on the left side of items.
- "The Journey" section: A visual timeline or process steps leading from initial consultation to long-term healing. Use thin stroke paths to connect these steps.
- Floating credential badges: Small pill-shaped badges ("CRP 12345", "TCC") overlapping the edges of the primary portrait.

COMPONENTS:
- Primary Button: Olive Green background, White text, 999px pill radius.
- Secondary Button: Burnt Sienna background.
- Accordion Items: 12px radius, cream background, plus (+) to expand.
- Badges: Small white pills, dark text.

ANIMATIONS & MICRO-INTERACTIONS:
- The UI must NOT be distracting.
- Focus on micro-reassurances: When clicking an accordion, the icon rotates smoothly. 
- When hovering over the primary CTA ("Agendar Consulta"), the button's background subtly deepens (transform: scale(1.01) over 250ms).
- Avoid rapid, aggressive entrance animations. If using scroll reveals, use extremely slow, calming fade-ins.

MOOD: Safe, warm, human, deeply empathetic. The digital equivalent of a comfortable couch and a warm cup of tea.
```
