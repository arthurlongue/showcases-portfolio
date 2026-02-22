# Master Reference: Showcase Niches & Design Tokens

This document maps each showcase route to its active design prompt and core visual tokens.

The `design/` folder is organized into two main directories:
- `design/used/`: Active templates implemented in routes.
- `design/unused/`: Archived templates for future showcases.

---

## Premium Tier Niches

### 1. Assinatura de Café (`/premium/assinatura-cafe`)
- **Reference Template:** [`assinatura-cafe.md`](design/used/premium/assinatura-cafe.md)
- **Core Aesthetic:** Warm, cinematic editorial dual-tone (rich espresso and warm oat milk cream).
- **Core Tokens:** `--bg-primary` (#FAF7F3), `--bg-dark` (#1A1208), `--bg-accent` (#C49A5C)

### 2. Nutricionista (`/premium/nutricionista`)
- **Reference Template:** [`nutricionista.md`](design/used/premium/nutricionista.md)
- **Core Aesthetic:** Impeccably clean, trustworthy, health-focused with organic photography.
- **Core Tokens:** `--bg-primary` (#FFFFFF), `--bg-forest` (#2D6A4F), `--bg-warm` (#F5F5F0)

### 3. Personal Trainer (`/premium/personal`)
- **Reference Template:** [`personal.md`](design/used/premium/personal.md)
- **Core Aesthetic:** Cinematic black-and-white performance-driven UI with striking neon accents.
- **Core Tokens:** `--bg-primary` (#040404), `--bg-secondary` (#141414), `--accent-neon` (#E6FF00)

### 4. Dentista (`/premium/dentista`)
- **Reference Template:** [`dentista.md`](design/used/premium/dentista.md)
- **Core Aesthetic:** Deep-contrast luxury clinic aesthetic. Pure white over deep resonant navy.
- **Core Tokens:** `--bg-primary` (#0D1B2A), `--bg-light` (#FFFFFF), `--radius-card` (0px sharp)

### 5. Fotógrafo (`/premium/fotografo`)
- **Reference Template:** [`fotografo.md`](design/used/premium/fotografo.md)
- **Core Aesthetic:** Ethereal, dreamy, watercolor mesh gradients behind glassmorphism.
- **Core Tokens:** `--bg-base` (#050505), `--glass-bg` (rgba 255,255,255,0.03), `--blur-cyan` (#4facfe)

---

## Essencial Tier Niches

### 6. Padaria (`/essencial/padaria`)
- **Reference Template:** [`padaria.md`](design/used/essencial/padaria.md)
- **Core Aesthetic:** Warm, wholesome, artisanal. Earthy terracotta, sage, and cream.
- **Core Tokens:** `--bg-warm` (#F5EDE3), `--bg-sage` (#8FAE7E), `--bg-terracotta` (#C67B5C)

### 7. Psicólogo (`/essencial/psicologo`)
- **Reference Template:** [`psicologo.md`](design/used/essencial/psicologo.md)
- **Core Aesthetic:** Human-centric, incredibly safe and calm. Sand and Olive tones.
- **Core Tokens:** `--bg-primary` (#F5E6D0), `--bg-olive` (#8FA84A), `--text-primary` (#8B4513)

### 8. Serviços Residenciais (`/essencial/servicos-residenciais`)
- **Reference Template:** [`servicos-residenciais.md`](design/used/essencial/servicos-residenciais.md)
- **Core Aesthetic:** Scandinavian minimal, architectural, structural grids for home services.
- **Core Tokens:** `--bg-primary` (#FFFFFF), `--bg-dark` (#1A1A1A), `--accent-border` (#E9ECEF)

### 9. Manicure (`/essencial/manicure`)
- **Reference Template:** [`manicure.md`](design/used/essencial/manicure.md)
- **Core Aesthetic:** Highly curated Instagram beauty feed converted into UI. Pastel panels.
- **Core Tokens:** `--bg-primary` (#FAFAF5), `--bg-lavender` (#E8E0F5), `--bg-peach` (#F5E0D8)

---

**Implementation Note:**
To ensure consistent code generation quality, use clear CSS root variables (`--bg-primary`,
`--text-primary`) instead of overly abstract token ontologies.
