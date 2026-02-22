# Assinatura de Café (Premium Showcase)

## TL;DR

> **Quick Summary**: Transform the existing `cafeteria` premium showcase into an explicitly framed Coffee Subscription ("Clube de Assinatura") showcase. This involves renaming routes, updating asset paths, and refining copy to emphasize a recurring delivery model.
> 
> **Deliverables**:
> - Renamed route from `src/app/premium/cafeteria` to `src/app/premium/assinatura-cafe`.
> - Renamed public assets folder `public/showcases/cafeteria` to `public/showcases/assinatura-cafe`.
> - Updated references in `data.ts`, `layout.tsx`, and `page.tsx`.
> - Refined copy to emphasize "Clube de Assinatura", "Planos", and "Receba em Casa".
> 
> **Estimated Effort**: Quick
> **Parallel Execution**: NO - sequential
> **Critical Path**: Folder Renames → Path Updates → Content Tweaks

---

## Context

### Original Request
Change the cafeteria premium to assinatura cafe and review the content of the page to adjust if needed.

### Interview Summary
**Key Discussions**:
- [User Decision]: Proceed with full renaming of folders and paths (Recommended).
- [User Decision]: Update text to explicitly mention subscriptions (Recommended).
- [User Decision]: Keep the existing layout structure (it already has a 'SubscriptionScheduler' section), just update content.

### Metis Review
**Identified Gaps** (addressed):
- [Gap 1: Asset Consistency]: Must ensure no "ghost" references remain. Handled via specific grep/replace tasks.
- [Gap 2: Documentation Sync]: Need to update references in root `AGENTS.md` and `src/app/premium/AGENTS.md`. Handled via a documentation update task.
- [Gap 3: UI Structure Lock]: Keeping the cinematic layout as requested, avoiding a full pricing-table redesign.
- [Gap 4: Language Enforcement]: Ensuring all new copy strictly follows pt-br.

---

## Work Objectives

### Core Objective
Successfully transition the "Cafeteria" premium showcase into an "Assinatura de Café" showcase, modifying paths and textual content while retaining the high-fidelity UI and animations.

### Concrete Deliverables
- `src/app/premium/assinatura-cafe` route.
- `public/showcases/assinatura-cafe` folder.
- Updated `data.ts` with subscription-focused copy.
- Updated `layout.tsx` metadata and `page.tsx` component names.

### Definition of Done
- [ ] Route `localhost:3000/premium/assinatura-cafe` loads successfully.
- [ ] All images and videos load correctly from the new `public/showcases/assinatura-cafe` path.
- [ ] Text clearly indicates a subscription service (e.g., "Assinar", "Clube").
- [ ] Code lints successfully (`pnpm run lint`).

### Must Have
- Maintain existing Framer Motion animations and layout structure.
- Update internal Next.js links if any exist in the main portfolio page.

### Must NOT Have (Guardrails)
- Do NOT add complex state management for a checkout flow.
- Do NOT add new sections; use the existing `SubscriptionScheduler` and `ProtocolSection` layouts.
- Do NOT leave broken image/video links.

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: NO
- **Agent-Executed QA**: ALWAYS. Every task MUST include agent-executed QA scenarios using interactive_bash or Playwright.

---

## Execution Strategy

### Sequential Execution

```
Wave 1:
├── Task 1: Rename Folders (public and src) [quick]
├── Task 2: Update References in Data and Layout [quick]
├── Task 3: Refine Copy for Subscription Model [writing]
└── Task 4: Documentation and Main Page Sync [quick]

Critical Path: Task 1 → Task 2 → Task 3 → Task 4
```

---

## Final Verification Wave

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. Verify route exists at `/premium/assinatura-cafe`. Verify no broken media links. Output: `VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `pnpm run lint` and `pnpm build`. Ensure no path-related errors. Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill)
  Start from clean state. Execute EVERY QA scenario from EVERY task. Save to `.sisyphus/evidence/final-qa/`. Output: `Scenarios [N/N pass] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  Verify 1:1 against spec. Check "Must NOT do" compliance (no checkout flow added). Output: `Tasks [N/N compliant] | VERDICT`

---

## Commit Strategy

- **1**: `refactor(premium): migrate cafeteria showcase to assinatura-cafe` — all files

---

## Success Criteria

### Verification Commands
```bash
ls src/app/premium/assinatura-cafe  # Expected: page.tsx, layout.tsx, data.ts, components/
ls public/showcases/assinatura-cafe  # Expected: media assets
pnpm run lint # Expected: No errors
```