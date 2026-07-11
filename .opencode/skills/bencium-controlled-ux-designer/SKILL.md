---
name: bencium-controlled-ux-designer
description: Expert UI/UX design guidance for unique, accessible interfaces. Use for visual decisions, colors, typography, layouts. Always ask before making design decisions.
metadata:
  version: 1.0.0
---

# UX Designer

Expert UI/UX design skill for unique, accessible, thoughtfully designed interfaces.

**Constraint:** This project's visual direction is set by `DESIGN.md` (editorial minimalism). This skill's "Always Ask Before Design Decisions" protocol remains active. Font bans (Inter, etc.) are overridden by the project's DESIGN.md — use Inter as the UI sans as specified.

## Core Philosophy

**CRITICAL: Design Decision Protocol**
- **ALWAYS ASK** before making any design decisions (colors, fonts, sizes, layouts)
- Never implement design changes until explicitly instructed
- Present alternatives and trade-offs, not single "correct" solutions

## Foundational Design Principles

### Stand Out From Generic Patterns

**Avoid Generic Training Dataset Patterns:**
- Don't default to "Claude style" designs (excessive bauhaus, liquid glass, apple-like)
- Don't use generic SaaS aesthetics that look machine-generated
- Don't rely only on solid colors - suggest photography, patterns, textures
- Think beyond typical patterns

**Draw Inspiration From:**
- Modern landing pages (Perplexity, Comet Browser, Dia Browser)
- Framer templates
- Leading brand design studios
- Historical design movements (Bauhaus, Otl Aicher, Braun)
- Beautiful background animations (CSS, SVG) - slow, looping, subtle

### Core Philosophy

1. **Simplicity Through Reduction** - Identify essential purpose, eliminate distractions
2. **Material Honesty** - Buttons communicate through color/spacing/typography (not shadows)
3. **Functional Layering** - Hierarchy through typography, color, spatial relationships
4. **Obsessive Detail** - Every pixel, interaction, and transition considered
5. **Coherent Design Language** - Nothing feels arbitrary
6. **Invisibility of Technology** - Users focus on content, not interface

### Color Usage
- Base palette: 4-5 neutral shades
- Accent palette: 1-3 bold colors
- Neutrals slightly desaturated, warm or cool based on brand

### Typography
- Headlines: Emotional, attention-grabbing
- Body/UI: Functional, highly legible
- 2-3 typefaces maximum
- Mathematical scale (1.25x ratio)

### Animation
- Purposeful: 100-300ms for most interactions
- Physics-informed easing
- Animate transform and opacity only

## Visual Design Standards

### Color & Contrast

**Color System Architecture:**
1. **Base/Neutral Palette (4-5 colors):** Backgrounds, surfaces, borders, text
2. **Accent Palette (1-3 colors):** Primary action, status, focus states

**Color Application Rules:**
- Backgrounds: Lightest neutral
- Text: Darkest neutral for primary, mid-tone for secondary
- Interactive states: Hover darken 10-15%, focus ring in accent
- WCAG 2.1 AA: 4.5:1 normal text, 3:1 large text

### Typography Excellence

**Font Selection:**
- 2-3 typefaces maximum, 3 weights per typeface
- Prefer variable fonts

**Typographic Scale (1.25x):**
```
xs: 0.64rem, sm: 0.8rem, base: 1rem, lg: 1.25rem, xl: 1.563rem
2xl: 1.953rem, 3xl: 2.441rem, 4xl: 3.052rem, 5xl: 3.815rem
```

**Spacing & Readability:**
- Line height: 1.5x for body
- Line length: 45-75 characters
- Tracking: larger text tighter (-0.02em), small text looser (+0.01em)

### Layout & Spatial Design

- Consistent underlying grid
- Generous negative space
- Group related elements through proximity and alignment
- Grid/flex wrappers with `gap`, avoid direct margins

## Styling Implementation

- shadcn components from `@/components/ui`
- Tailwind utility classes exclusively
- `@phosphor-icons/react` for icons
- `sonner` for toasts
- Skeleton loading states

## Accessibility Standards

- WCAG 2.1 AA
- Keyboard navigability
- 44×44px minimum touch targets
- Semantic HTML
- Visible focus states
