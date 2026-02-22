# Cafeteria Brutalist - Learnings

## Task 2: Layout & Styles
 Premium layouts follow two patterns:
  1. **Font-in-layout** (assinatura-cafe): Fonts loaded via `next/font/google` with CSS variable classes, styles inline on wrapper div
  2. **External CSS** (dentista/personal/fotografo): Import `./theme.css` with scoped `.X-theme` class containing CSS variables
 Cafeteria uses hybrid: fonts via `next/font/google` in layout + `./styles.css` for scoped CSS variables
 The `.cafeteria-theme` class scopes all custom CSS variables (no `@theme` block needed)
 Build has 10 pre-existing errors: missing `theme.css` in 8 showcases + `framer-motion` import in 2 components
 BiomeJS schema version mismatch (2.4.3 vs 2.4.4) is pre-existing — info only, not an error
 Font CSS variable convention: `--font-{name}` (e.g., `--font-anton`, `--font-inter`, `--font-jetbrains`)
 Tailwind v4 font application: `font-[family-name:var(--font-body)]` for inline usage

## Task 3: Brutalist Page Component
 Premium pages follow server/client split: `page.tsx` (server) imports from `./components/client.tsx` ("use client")
 Motion v12 import: `import { motion, useScroll, useTransform } from "motion/react"`
 CSS variables accessed via `var(--color-brutal-*)` in Tailwind arbitrary value syntax: `bg-[var(--color-brutal-accent)]`
 Font families via CSS variables: `font-[family-name:var(--font-heading)]` (not `font-[var(--font-heading)]`)
 Marquee implemented with two copies of content + `motion.div` infinite loop animation
 Brutalist design principles: no border-radius, heavy borders (`border-[var(--brutal-border-width)]`), hard shadows (`shadow-[var(--brutal-shadow)]`)
 BiomeJS lint passed with zero fixes on both new files
 Build failure is pre-existing (framer-motion + missing theme.css in 10 other showcases) — cafeteria has no build errors
