# Project Overview
This is a Next.js (App Router) project acting as a portfolio and showcase for potential website creation clients. 
The main objective is to provide a beautiful UI and UX experience to attract leads. 
It contains multiple dummy projects from different niches (Dentista, Psicólogo, Salão, Barbearia, Clínica de Estética, Nutricionista, etc.), all in Portuguese (pt-br). 
These projects all live inside this single codebase and are separated by specific routes.
The stack includes React 19, Tailwind CSS v4, shadcn/ui, Framer Motion, and BiomeJS.

# STRUCTURE
```
showcases-portfolio/
├── src/
│   ├── app/
│   │   ├── essencial/          # 4 niches: manicure, padaria, psicologo, servicos-residenciais
│   │   ├── premium/            # 5 niches: assinatura-cafe, dentista, fotografo, nutricionista, personal
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Entry point
│   │   └── globals.css         # Global styles + Tailwind v4 theme
│   ├── components/
│   │   └── ui/                 # 56 shadcn/ui components
│   ├── hooks/
│   │   └── use-mobile.ts
│   └── lib/
│       └── utils.ts            # cn() utility
├── public/
├── design/                   # Design assets (used/unused)
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json           # shadcn config
```

# WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Adding new niche showcase | src/app/[tier]/[niche]/ | Create page.tsx, layout.tsx |
| UI components | src/components/ui/ | shadcn/ui primitives |
| Shared components | src/components/[domain]/ | Cross-niche reusable components |
| Custom hooks | src/hooks/ | Stateful logic separation |
| Utilities | src/lib/ | cn(), helpers |
| Global styles | src/app/globals.css | Tailwind v4 CSS config |
| Root layout | src/app/layout.tsx | Fonts, providers |
| Entry point | src/app/page.tsx | Portfolio landing |

# Common Commands
- **Development Server**: `pnpm dev`
- **Build for Production**: `pnpm build`
- **Lint & Format**: `pnpm run lint` (Uses Biome styling/linting rules. Always verify that linting passes after making changes).
- **Testing**: Not natively configured yet. When verifying functionality, depend on local builds (`pnpm build`) and manual browser testing first.
  - *If tests are added in the future, standard commands like `pnpm test` or `pnpm vitest run <file>` should be used.*

# High-Level Architecture
- `src/app/[niche]/[tier]`: Separate Next.js App Router definitions for each showcase niche, divided by complexity tiers (e.g. `/dentista/essencial` vs `/dentista/premium`). EVERYTHING the lead might read or see in the URL must be in **pt-br**.
  - **Essencial Tier**: Straightforward, conventional layout and design.
  - **Premium Tier**: Detailed, highly interactive, unconventional design with heavy animations.
- `src/components/ui/`: Reusable, accessible UI components (primarily shadcn/ui). Use these building blocks rather than building raw elements.
- `src/components/[domain]/`: Shared components across niches (e.g. Hero, Testimonials) to avoid duplication.
- `src/hooks/`: Custom React hooks, separating stateful logic from UI components.
- `src/lib/`: Shared utilities and helpers (e.g., the `cn` utility for Tailwind).

# Coding Principles & Guidelines

_Project AGENTS.md overrides global. Code is truth. Ship > Perfect. Minimal Surface. Evidence > Assumptions._

## Agent Behavior & Workflow
- **Context First**: Read relevant files and dependencies before proposing changes.
- **No Lazy Code**: NEVER use `// ...existing code...`. Output complete, copy-pasteable blocks or use precise diffs.
- **Step-by-Step**: Plan architecture silently before writing code. 
- **Terminal Tasks**: Always verify commands via `pnpm build` or `pnpm run lint` before declaring a task complete.

## Principles
- **KISS**: Simple > Complex (unless Type Safety dictates over simplicity).
- **YAGNI**: No speculative features (unless Core requirement).
- **DRY & Modularity**: Strongly prioritize modularizing code to avoid DRY violations across the different niche showcases. If a component can be reused across `/dentista` and `/salao` with different props, extract it to a shared component in `src/components/` rather than duplicating the layout.
- **SOLID**: Single job, Composition, Small props, Dependency Injection.
- **Priority Stack**: YAGNI > DRY | Type Safety > KISS | Readability > DRY | Clean Code > Performance.

## Stack & Code Style
- **Tools**: pnpm, TS (strict), Next 15+ (App Router), React 19, Tailwind v4, shadcn/ui, Motion, BiomeJS.
- **Formatting (Biome)**: 
  - Indent with **tabs** (width: 2).
  - Max line width: 100 characters.
  - **No semicolons** (`"asNeeded"`).
  - Use **double quotes** for strings and JSX.
- **Types**: 
  - Strict TypeScript. `noExplicitAny` is an error.
  - Use `interface` over `type`.
  - Use `as const` over `enum`.
- **Naming Conventions**: 
  - `kebab-case` for files and directories (e.g., `user-profile.tsx`).
  - `PascalCase` for React components (e.g., `UserProfile`).
  - `camelCase` for functions, hooks, and variables (e.g., `useMobile`, `formatDate`).
- **File Structure**: Exports -> Subcomponents -> Helpers -> Types.
- **Exports**: Prefer Named exports over Default exports (unless required by Next.js app router like `page.tsx`, `layout.tsx`).
- **Control Flow**: Prefer early returns to reduce nesting.
- **Comments**: Document the *Why*, not the *What*. Use JSDoc for complex shared logic.

## Next.js & Logic
- **Components**: React Server Components (RSC) by default. Use `"use client"` ONLY for UI interactivity (framer motion, interactive shadcn components, light client state). Keep client boundaries at the leaves of the render tree.
- **Data**: Since these are dummy showcases, data will be mocked statically or loaded via local files. There are no external databases or complex Server Actions needed unless simulating a form submission.
- **State**: Keep state minimal and focused on UI (e.g., opened menus, selected tabs, modal visibility).

## UX & Interaction
- **Aesthetics & UI Quality**: Do NOT produce generic "AI slop" or repeating layouts. Every showcase must look uniquely crafted, stunning, and professional. You are creating a portfolio to sell high-end websites.
- **Complexity Tiers**: For each niche, aim to build two distinct versions:
  - *Essencial*: A conventional, clean, straightforward layout.
  - *Premium*: An unconventional, highly interactive layout. Use heavy micro-animations (Framer Motion), complex grid/flex layouts, and (when applicable) advanced scroll effects like parallax. Leverage prebuilt, highly-animated components compatible with shadcn to noticeably increase perceived value.
- **Mobile-First Design**: Design and style for mobile screens first (e.g. default Tailwind classes). Ensure all UI elements, layout shifts, and interactions fall back gracefully or are optimized for touch devices before scaling up to desktop breakpoints (`sm:`, `md:`, `lg:`). Prefer Flexbox over CSS Grid when possible.
- **Content**: Always use realistic, high-quality dummy text, specifically in Portuguese, tailored to the current niche (e.g. realistic dental services, salon pricing, clinic testimonials).
- **Interactivity**: EVERY clickable element must have a visual `hover:` state, `focus-visible:` ring, and `cursor-pointer`.
- **Feedback**: Never leave the user guessing. Disable submit buttons during pending states. Show loading indicators (Skeletons > Spinners).
- **Mutations**: Provide immediate feedback. Use optimistic updates where possible, and always trigger a toast notification for success/error results.
- **Motion**: Use subtle micro-interactions (`transition-colors duration-200`). Animate layout shifts and enter/exit states using Motion.

## Error Handling & Validation
- **Fail Fast**: Throw errors early. Do not swallow errors silently with empty catch blocks.
- **Validation**: Use Zod at system boundaries (API inputs, DB reads, Form submissions).
- **UI Errors**: Use `error.tsx` for route errors and local Error Boundaries for component isolation. Provide fallback UI rather than crashing the entire app.
