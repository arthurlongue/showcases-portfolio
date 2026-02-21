# Playwright QA Report: Cafeteria Premium Showcase

**Date:** 2026-02-21
**URL:** http://localhost:3000/premium/cafeteria
**Page Title:** Aura Roasters | Cinematic Espresso

---

## 1. Mobile View (375px width)

### Horizontal Overflow
- **PASS** - No horizontal overflow detected
- `document.documentElement.scrollWidth (360) <= clientWidth (360)`
- `document.body.scrollWidth (360) <= clientWidth (360)`

### Layout Quality
- Hero section properly contained with correct text sizing
- Navigation shows brand + CTA button (nav links hidden on mobile)
- All Protocol cards render properly within viewport bounds
- Footer elements contained

### Evidence
- `mobile-375-hero-top.png` - Hero section
- `mobile-375-fullpage.png` - Full page snapshot
- `mobile-375-artifacts.png` - Artifacts section
- `mobile-375-protocol-header.png` - Protocol heading
- `mobile-375-protocol-card1.png` - Fase 01: Curadoria de Origem
- `mobile-375-protocol-card2.png` - Fase 02: Alquimia da Torra
- `mobile-375-protocol-card3.png` - Fase 03: Ritual de Frescor

---

## 2. Desktop Hover Effects (1440px width)

### Navigation
- **PASS** - Full nav links visible: Origens, Manifesto, Clube de Curadoria
- **PASS** - "Fazer parte" CTA button present with hover state

### CTA Buttons
- **PASS** - "Descobrir a Safra" button responds to hover
- **PASS** - Play button secondary CTA present

### Artifacts Section
- **PASS** - Terroir card auto-cycles between coffee origins (Mantiqueira -> Caparao -> Cerrado)
- **PASS** - Terminal/metrics card shows typing animation
- **PASS** - Calendar card with day selection states visible

### Evidence
- `desktop-1440-hero.png` - Hero at 1440px
- `desktop-hover-cta-button.png` - CTA hover state
- `desktop-hover-fazer-parte.png` - Header CTA hover
- `desktop-hover-nav-link.png` - Nav link hover
- `desktop-artifacts-section.png` - Bento grid artifacts
- `desktop-artifacts-hover-terroir.png` - Origin card cycling

---

## 3. Protocol Stacking Animation

### Sticky Behavior
- **PASS** - 3 sticky cards with `position: sticky; top: 0px`
- **PASS** - Each card is `h-screen` with `mb-[40vh]` bottom margin
- **PASS** - Cards stack cleanly without visual glitches

### Scroll Spacing (Desktop 1440x900)
| Metric | Value |
|--------|-------|
| Card 1 (Curadoria) top | 2980px |
| Card 2 (Alquimia) top | 4240px |
| Card 3 (Ritual) top | 5500px |
| Card-to-card gap | 1260px (~1.4x viewport) |
| Total Protocol scroll | 3420px (~3.8x viewport) |
| Total body height | 7157px |

### Assessment
- Card spacing of ~1.4x viewport height is appropriate for stacking scroll effects
- No excessive "dead air" or huge scrolling gaps
- Cards transition cleanly with full overlay (no partial peek/bleed)

### Evidence
- `desktop-protocol-header.png` - Protocol section heading
- `desktop-protocol-card1-sticky.png` - Card 1 in sticky position
- `desktop-protocol-stacking-transition.png` - Card 2 overlaying card 1
- `desktop-protocol-card3-sticky.png` - Card 3 in sticky position
- `desktop-footer.png` - Footer section

---

## 4. Console Errors
- **0 errors** (only 1 HMR-related warning from Framer Motion container)

## Summary

| Check | Status |
|-------|--------|
| Mobile 375px - No horizontal overflow | PASS |
| Mobile 375px - Layout quality | PASS |
| Desktop hover effects (CTA, nav, cards) | PASS |
| Protocol stacking scroll speed | PASS |
| Protocol cards stack cleanly | PASS |
| No console errors | PASS |
| 19 screenshots captured | PASS |

**Overall: ALL CHECKS PASSED**
