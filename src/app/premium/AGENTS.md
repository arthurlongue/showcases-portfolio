# Premium Tier Showcases

## OVERVIEW
The `/premium` route houses high-end, unconventional showcases designed to demonstrate peak UI/UX capabilities. These are the primary sales tools for attracting premium clients who value unique digital experiences over standard layouts.

- **Base URL**: `/premium/[niche]`
- **Tech Focus**: Framer Motion, complex CSS layouts, advanced interactivity.

## EXISTING SHOWCASES
- **Assinatura de Café**: Cozy, atmospheric design with focus on sensory visuals and subscription model.
- **Dentista**: High-tech, clean, clinical yet sophisticated interactive elements.
- **Fotografo**: Immersive, gallery-focused with unique image transitions.
- **Nutricionista**: Data-driven, clean visuals with smooth progress animations.
- **Personal**: High-energy, bold typography, and performance-oriented motion.

## DESIGN PRINCIPLES
- **Unconventionality**: Break the grid where it adds value. Avoid standard "header-hero-features" patterns.
- **Immersive UX**: Use parallax, scroll-triggered animations, and smooth page transitions to keep users engaged.
- **High Visual Fidelity**: Every pixel counts. Use premium typography, subtle shadows, and high-quality assets.
- **Precision**: Ensure layout shifts are intentional and animated. Avoid jarring jumps or generic "AI-generated" looks.

## ANIMATION GUIDELINES
- **Framer Motion**: The standard for all complex animations within this tier.
- **Micro-interactions**: Every button, link, and interactive card must feel alive. Use `whileHover`, `whileTap`, and `layoutId` for seamless state changes.
- **Scroll Effects**: Implement parallax, sticky sections, and reveal-on-scroll patterns using `useScroll` and `useTransform`.
- **Performance**: Keep "use client" boundaries strictly at the leaves. Animate properties that don't trigger layout reflows (transform, opacity) whenever possible.
- **Purpose**: Animations should guide the user's eye and reinforce the premium feel, not just add noise.
