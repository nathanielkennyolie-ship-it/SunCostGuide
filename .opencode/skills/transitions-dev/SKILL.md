---
name: transitions-dev
description: Production-ready CSS transitions for web apps. Use when implementing notification badges, dropdowns, modals, panel reveals, page transitions, card resizes, number pop-ins, text swaps, icon swaps, success checks, avatar group hovers, error state shakes, skeleton loaders, shimmer text, sliding tabs, tooltips, staggered text reveals, card hover tilt, plus-to-menu morph, or accordions.
---

# Transitions.dev

Twenty-one portable CSS transitions, each namespaced under `t-*` selectors with semantic CSS custom properties.

**Lead constraint:** This skill defers to `DESIGN.md`'s editorial minimalism motion tokens for system-wide animation decisions. Only use transitions.dev transitions when explicitly requested for a specific UI element. The `--duration-*` tokens from DESIGN.md (`fast: 150ms`, `normal: 200ms`) take precedence over transitions.dev's `--duration-quick: 150ms` / `--duration-fast: 250ms` when both are present.

## Decision rules

When the user asks for a transition, match against visible UI element first, then verb:

| Pattern | Transition |
|---------|-----------|
| Trigger + small dot floating on top | notification badge |
| Trigger + surface that grows from it | dropdown or modal |
| Surface sliding into a region | panel reveal |
| Two screens, list ↔ detail | page side-by-side |
| Element changes width/height | card resize |
| Text content changes in place | text states swap |
| Two icons in same slot | icon swap |
| Number updates | number pop-in |
| Confirmation / success | success check |
| Hover on horizontal stack | avatar group hover |
| Form validation error | error state shake |
| Clearing a text field | input clear with dissolve |
| Placeholder → real content | skeleton loader and reveal |
| In-progress / "thinking" text | shimmer text |
| Segmented control / filter tabs | tabs sliding |
| Hover hint over trigger | tooltip open/close |
| Stacked headline entering | texts reveal |
| Card reacting in 3D | card hover tilt |
| Circular trigger → surface | plus-to-menu morph |
| Collapsible body | accordion expand |

## Commands

- `transitions reveal` — list all transitions
- `transitions review` — audit project for transition opportunities
- `transitions apply` — install best-fit transition at cursor
- `transitions refine` — replace ad-hoc motion with motion tokens

## Reference files

Each transition has a dedicated reference file (`01-card-resize.md` through `21-accordion.md`) plus `_root.css` for the universal install block.
