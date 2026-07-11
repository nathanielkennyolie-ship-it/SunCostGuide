---
name: bencium-innovative-ux-designer
description: Create distinctive, production-grade frontend interfaces with high design quality. Use when building web components, pages, or applications.
metadata:
  version: 2.0.0
---

# Innovative UX Designer

Create distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.

**Constraint:** This project's visual foundation is set by `DESIGN.md` (editorial minimalism). Use this skill for creative exploration on specific features/pages, not for system-wide design decisions. The editorial minimalism direction takes precedence for layout, color, typography, and motion defaults.

## Core Philosophy

**CRITICAL: Design Thinking Protocol**
Before coding, **ASK** to understand context, then commit to a direction.

### Questions to Ask First
1. **Purpose**: What problem does this interface solve?
2. **Tone**: What aesthetic extreme fits?
3. **Constraints**: Technical requirements (framework, performance, accessibility)?
4. **Differentiation**: What makes this unforgettable?

### Tone Options
Brutally minimal, Maximalist chaos, Retro-futuristic, Organic/natural, Luxury/refined, Playful/toy-like, Editorial/magazine, Brutalist/raw, Art deco, Soft/pastel, Industrial/utilitarian

## Foundational Design Principles

### Stand Out From Generic Patterns
**NEVER:** Inter as primary, generic SaaS blue, glass morphism, Apple mimicry, cookie-cutter layouts.
**DO:** Photography, textures, gradient meshes, noise textures, layered transparencies, dramatic shadows.

### Core Philosophy
1. **Simplicity Through Reduction**
2. **Material Honesty** — shadows/gradients allowed when intentional
3. **Functional Layering** — no glass morphism, no Apple mimicry
4. **Obsessive Detail**
5. **Coherent Design Language**
6. **Invisibility of Technology**

### Color & Typography
- Base palette: 4-5 neutrals, Accent: 1-3 bold colors
- NEVER default to Inter/Roboto/Space Grotesk
- Mathematical scale (1.25x ratio)
- WCAG 2.1 AA minimum

## Styling Implementation
- shadcn components from `@/components/ui`
- Tailwind utility classes
- `@phosphor-icons/react` for icons
- `sonner` for toasts
