# DESIGN.md — SunCostGuide

## Aesthetic
Editorial Warmth — authoritative, premium, approachable. Think Wirecutter meets Kinfolk.

## Color
- Page background: `#faf8f6` (warm off-white)
- Surface: `#ffffff`
- Body text: `#1a1f2e` (deep navy-charcoal)
- Muted text: `#6b7280`
- Accent: `#f5a623` → `#f59e0b` (amber)
- Accent hover: `#d97706`
- Borders: `#e5e0d8` (warm gray)
- Muted bg: `#f0ede8`

## Typography
- Display: Playfair Display (serif) — headlines, section titles
- Body: Inter (sans-serif) — body text, UI labels
- Data: JetBrains Mono — calculator, tables, stats
- Scale: 4px base unit
- Body leading: relaxed

## Layout
- Max content width: 1120px
- Section padding: `py-20` / `py-28`
- Rounded: `0.75rem` default
- CTA buttons: pill-shaped (`rounded-full`)
- Generated space over density

## Motion
- Hero entrance: fade + translateY
- Scroll reveals: opacity transition with stagger
- Interactive: color transitions only (no scale/translate)
- Calculator: smooth height transition between form and result
- Respects `prefers-reduced-motion`

## Rules
- No stock photography
- No centered hero + 3 icon boxes pattern
- No system font stack
- No pure black text
- No dark mode
