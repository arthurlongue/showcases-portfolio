# Cafeteria Premium Polish

## TL;DR

> **Quick Summary**: Polish the Cafeteria Premium showcase. Enhance mobile-first responsiveness, optimize web media layout, tighten the Protocolo scroll depth, and inject premium/cinematic micro-animations and text refinements.
> 
> **Deliverables**:
> - Re-spaced and responsive Hero, Navbar, and Footer.
> - Refined Protocolo sticky scrolling (reduced scroll fatigue).
> - Cinematic hover states and image parallax additions.
> - Polish of Portuguese copy for a luxury/premium feel.
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: NO - sequential (focused on a single showcase route)
> **Critical Path**: Task 1 (Protocolo spacing) -> Task 2 (Mobile-first margins) -> Task 3 (Animations) -> Task 4 (Copy)

---

## Context

### Original Request
Polish the cafeteria premium design, ensure mobile-first layout, optimize web media sizing, double check spacing and margins, add premium cinematic animations (user feedback/pointer hover), review texts, and fix the "protocolo" section taking up too much vertical space. It must feel super premium and immersive.

### Metis Review
**Identified Gaps**:
- *Protocol Scroll Fatigue*: The `mb-[100vh]` on Protocolo cards forces massive scrolling. This must be reduced (e.g., `mb-[30vh]` or `mb-[50vh]`) to stack efficiently without losing the sticky effect.
- *Mobile Margins*: Fixed heights (like `h-[80vh]`) and heavy paddings (like `p-10`) break on small mobile devices. Must switch to clamp or mobile-first breakpoints.
- *Media Optimization*: Videos and images need to fit elegantly inside containers without cropping poorly on mobile.

---

## Work Objectives

### Core Objective
Deliver a refined, luxury-tier cafeteria showcase that is visually stunning, highly responsive, and feels completely frictionless to scroll and interact with.

### Concrete Deliverables
- `src/app/premium/cafeteria/components/client.tsx` (Updated logic and styles for components)
- `src/app/premium/cafeteria/page.tsx` (Updated layout spacing and text)
- `src/app/premium/cafeteria/data.ts` (Text refinement if necessary)

### Definition of Done
- [ ] No layout overflows on mobile (`375px` width).
- [ ] Protocolo cards stack elegantly without requiring 300vh of blank scrolling.
- [ ] Cinematic hover and entrance animations applied to interactables.
- [ ] Portuguese copy reads elegantly and matches a luxury brand tone.

### Must Have
- [ ] Mobile-first Tailwind breakpoints (default to mobile, use `md:` for desktop).
- [ ] Playwright-based visual and interaction verification.
- [ ] Smooth `StickyStackingCards` behavior.

### Must NOT Have (Guardrails)
- [ ] DO NOT remove the Sticky effect entirely; just adjust the depth.
- [ ] DO NOT break existing Framer Motion animations (OriginShuffler, etc.).

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (Relying on Next.js build + Agent Playwright QA)
- **Automated tests**: None
- **Agent-Executed QA**: Playwright script to scroll, check overlaps, click buttons, and snapshot mobile/desktop viewports.

---

## Execution Strategy

### Parallel Execution Waves

Wave 1 (Structural & Spacing Fixes):
├── Task 1: Fix Protocolo Stacking Space [visual-engineering]
└── Task 2: Mobile-First Padding & Margins [visual-engineering]

Wave 2 (Cinematic & Copy Polish):
├── Task 3: Cinematic Animations & Hover Effects [artistry]
└── Task 4: Premium Copywriting Polish [writing]

Wave FINAL:
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Playwright QA (unspecified-high)
└── Task F3: Scope fidelity check (deep)

---

## TODOs

- [ ] 1. **Fix Protocolo Stacking Space**

  **What to do**:
  - In `src/app/premium/cafeteria/components/client.tsx`, locate `StickyStackingCards` and `StickyCard`.
  - Change `mb-[100vh]` to `mb-[40vh]` to reduce the empty scrolling space between cards.
  - **CRITICAL**: Because the scroll distance is shorter, the `useTransform` for `scale` and `filter` will trigger faster. Adjust the output ranges to be less aggressive (e.g., scale `[1, 0.95]` instead of `[1, 0.9]`, opacity to `[1, 0.6]` instead of `[1, 0.4]`, and blur `["blur(0px)", "blur(6px)"]`) for a smoother compressed feel.
  - Test the stacking logic to ensure cards don't overlap prematurely.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`

  **Parallelization**:
  - **Can Run In Parallel**: NO (Sequential flow for this page)

  **References**:
  - `src/app/premium/cafeteria/components/client.tsx:385-464` - StickyCard component logic.

  **Acceptance Criteria**:
  - [ ] `mb-[100vh]` is removed/reduced.
  - [ ] Cards stack with a visible scale and blur effect, but scroll much faster.

  **QA Scenarios**:
  ```
  Scenario: Protocolo Scroll Experience
    Tool: Playwright
    Preconditions: Page loaded on desktop
    Steps:
      1. Scroll to Protocolo section
      2. Scroll down 500px, verify Card 2 begins to overlay Card 1
      3. Verify scrolling through all cards takes less than 3 seconds of normal scrolling
    Expected Result: Smooth stacking without massive vertical gaps
    Evidence: .sisyphus/evidence/task-1-protocolo-scroll.webm
  ```

- [ ] 2. **Mobile-First Padding & Margins**

  **What to do**:
  - Update `Hero` section text sizes and paddings in `page.tsx`. Use `text-[clamp(56px,12vw,160px)]` for the serif text. For the subtitle, use `clamp(20px,6vw,48px)` or `text-xl md:text-3xl lg:text-[48px]` since 4vw is too small on mobile.
  - Update inner `motion.div` in `StickyCard` (client.tsx:426): Change `h-[80vh]` to `h-[65vh] md:h-[80vh]` and `p-10` to `p-6 md:p-10 lg:p-20` for mobile safety. Also change protocol text sizes from `text-5xl md:text-7xl` to `text-3xl md:text-5xl lg:text-7xl`.
  - Update `FloatingNavbar`: Adjust `px-8 py-4` to `px-4 py-3 md:px-8 md:py-4` and make the brand text smaller on mobile (`text-xl md:text-2xl`).
  - Update micro-UIs (`OriginShuffler`, etc.): Adjust `min-h-[400px]` to `min-h-[320px] md:min-h-[400px]` for better mobile fit.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`

  **References**:
  - `src/app/premium/cafeteria/page.tsx` - Hero text and section paddings.
  - `src/app/premium/cafeteria/components/client.tsx` - Card and Navbar paddings.

  **Acceptance Criteria**:
  - [ ] Layout fits on 375px wide screen with no horizontal scrolling.

  **QA Scenarios**:
  ```
  Scenario: Mobile Responsiveness Check
    Tool: Playwright
    Preconditions: Page loaded in mobile emulation (iPhone 12 - 390px)
    Steps:
      1. Assert no horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`)
      2. Verify Floating Navbar text doesn't overlap button
      3. Verify Hero text is visible and not cut off
    Expected Result: Clean mobile layout
    Evidence: .sisyphus/evidence/task-2-mobile-responsive.png
  ```

- [ ] 3. **Cinematic Animations & Hover Effects**

  **What to do**:
  - Add a subtle slow zoom to the Hero background video (wrap in a `motion.div` with a `useScroll`-driven `scale` transform like `[1, 1.08]`).
  - For Protocolo cards: Do NOT use scale on hover (it conflicts with scroll-driven scale). Instead, add a subtle border glow or ring: `ring-0 group-hover:ring-1 group-hover:ring-[#C49A5C]/20 transition-[box-shadow]`.
  - Ensure the Magnetic Button has a more pronounced "glow" or shadow on hover (`hover:shadow-lg hover:shadow-[#C49A5C]/20`).
  - Add a subtle `brightness` or `contrast` shift to `OriginShuffler` images on hover (`transition-[filter] duration-500 group-hover:brightness-110 group-hover:contrast-105`).

  **Recommended Agent Profile**:
  - **Category**: `artistry`
  - **Skills**: `frontend-ui-ux`

  **References**:
  - `src/app/premium/cafeteria/page.tsx:23` - Hero video tag.
  - `src/app/premium/cafeteria/components/client.tsx:11` - MagneticButton.

  **Acceptance Criteria**:
  - [ ] Hero video has subtle motion (scale/parallax).
  - [ ] Magnetic Button features an elegant box-shadow glow on hover.

  **QA Scenarios**:
  ```
  Scenario: Cinematic Hover States
    Tool: Playwright
    Preconditions: Desktop viewport
    Steps:
      1. Hover over the "Assinar" Magnetic Button
      2. Verify style includes shadow or elevated state
      3. Hover over an Origin Shuffler card, verify transform/scale
    Expected Result: Rich visual feedback on interaction
    Evidence: .sisyphus/evidence/task-3-hover-states.png
  ```

- [ ] 4. **Premium Copywriting Polish**

  **What to do**:
  - Review `src/app/premium/cafeteria/data.ts` AND `src/app/premium/cafeteria/page.tsx` for hardcoded texts.
  - Polish the Portuguese copy to be highly elegant, immersive, and luxurious. Replace generic terms with sensorial equivalents (e.g., "Engenharia de Sabor" in page.tsx -> "Arquitetura Sensorial", "Explorar a Coleção" -> "Descobrir a Safra").
  - **CRITICAL**: The "Estágio" label is hardcoded in `client.tsx:452`. Update it to "Fase" directly in `client.tsx`, in addition to updating texts in `data.ts` and `page.tsx`.
  - Ensure the grammar and tone perfectly match a high-end, 3rd-wave specialty coffee roaster.

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: `None`

  **References**:
  - `src/app/premium/cafeteria/data.ts` - All text constants.

  **Acceptance Criteria**:
  - [ ] Text updated in `data.ts`.
  - [ ] No typos or grammatical errors in pt-BR.

  **QA Scenarios**:
  ```
  Scenario: Copy Validation
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run `grep -r "Arquitetura" src/app/premium/cafeteria/data.ts`
      2. Verify refined text strings exist
    Expected Result: Data file reflects new premium copy
    Evidence: .sisyphus/evidence/task-4-copy.txt
  ```

---

## Final Verification Wave

> **PREREQUISITE**: Ensure `.sisyphus/evidence` exists (`mkdir -p .sisyphus/evidence`) before running QA.

- [ ] F1. **Build & Plan Compliance Audit** — `oracle`
  Run `pnpm build` to ensure no build errors. Verify all tasks were completed and UI elements adjusted as specified.
  
- [ ] F2. **Playwright QA** — `unspecified-high` + `playwright`
  Run the Playwright test suite to ensure no regressions in layout or interactions. Save evidence to `.sisyphus/evidence/`.

- [ ] F3. **Scope Fidelity Check** — `deep`
  Check git diff to ensure no unrelated files were touched outside of the cafeteria premium route.

---

## Success Criteria

- Next.js build passes.
- No horizontal scrolling on mobile.
- Protocolo section scrolls smoothly without massive gaps.