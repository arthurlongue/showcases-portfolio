# Essencial Tier Overview
Conventional, clean, and straightforward layouts designed for maximum clarity and quick delivery. These showcases prioritize essential business information with a professional, trustworthy aesthetic.

# Existing Showcases
Each niche follows the pattern `/essencial/[niche]` and provides a complete, conversion-focused landing page experience.

- **Manicure**: Elegant, visual-heavy layout for beauty professionals.
- **Padaria**: Warm, inviting design highlighting products and local presence.
- **Psicologo**: Calm, minimalist interface focusing on authority and scheduling.
- **Serviços Residenciais**: Bold, service-oriented layout with clear calls to action.

# Design Principles
- **Mobile-First**: Every layout is optimized for touch and small screens before desktop.
- **Realistic Content**: Use high-quality, niche-specific Portuguese dummy text. No "Lorem Ipsum".
- **Standard Interactivity**: All buttons and links must have `hover:`, `focus-visible:`, and `cursor-pointer`.
- **Clarity Over Complexity**: Avoid heavy animations; focus on fast loading and clear hierarchy.

# File Structure
Each niche directory contains its own routing and layout definition to ensure complete isolation.

```
essencial/
├── [niche]/
│   ├── page.tsx       # Main landing page (Server Component)
│   ├── layout.tsx     # Niche-specific layout (Head, Footer, Fonts)
│   └── components/    # (Optional) Local UI components for this niche
```

# Implementation Rules
- Content MUST be in Portuguese (pt-br).
- Use realistic pricing, service descriptions, and testimonials.
- Keep client interactivity (Framer Motion) subtle and functional.
