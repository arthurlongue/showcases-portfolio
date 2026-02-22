# App Router Agents Context

This directory (`src/app/`) contains the different routes for the showcase portfolio. 
The projects all live within this single codebase and are separated by specific routes.

## Guidelines for Adding/Modifying Routes
- **Niche Separation**: Each showcase must live in its own route (e.g., `/dentista`, `/psicologo`, `/salao`). Check the root `AGENTS.md` for a complete list of niches if needed.
- **Content**: You MUST use dummy, but highly realistic content in **Portuguese** for all text (e.g., realistic prices, testimonials, service names, and about sections tailored to the niche). Do not use generic "Lorem Ipsum".
- **Visuals & UX**: Do NOT produce generic "AI slop" or repeating layouts. Prioritize stunning aesthetics, mobile-first responsiveness, and smooth micro-interactions. For **Premium** tiers, utilize unconventional layouts, complex grids, advanced scroll effects (like parallax), and highly-animated pre-built components (e.g. enhanced shadcn variations). This is a sales tool—make it look premium to attract real-world clients.
- **Routing Structure**: Follow Next.js App Router conventions (`page.tsx`, `layout.tsx`). Organize routes by niche, and then by complexity tier (e.g., `/dentista/essencial` and `/dentista/premium`). Keep Client Components (`"use client"`) strictly at the leaves.
- **Data Fetching**: Use Server Components for any static data loading (like rendering dummy JSON configurations for a niche) and pass data down to Client component leaves gracefully.
