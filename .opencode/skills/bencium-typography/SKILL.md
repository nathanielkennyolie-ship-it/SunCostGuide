---
name: bencium-typography
description: Professional typography rules for UI design. Enforces correct quote marks, dashes, spacing, hierarchy, and layout. Auto-applies to generated HTML/CSS/React code.
---

# UI Typography Skill

Professional typography rules distilled from Butterick's *Practical Typography*.

## Mode of Operation

**ENFORCEMENT (default):** When generating UI with visible text, apply every rule automatically. Do not ask permission.
**AUDIT:** When reviewing existing code, identify violations and provide fixes.

## Characters

### Quotes and Apostrophes — Always Curly
- Double: `&ldquo;` `&rdquo;`
- Single: `&lsquo;` `&rsquo;`
- Apostrophe: `&rsquo;` (closing single quote)
- In JSX: Use actual UTF-8 characters or `{'\u2019'}` expressions

### Dashes — Three Distinct
- Hyphen `-`: Compound words
- En dash `&ndash;`: Ranges (1–10), connections
- Em dash `&mdash;`: Sentence breaks—like this

### Ellipses — One Character: `&hellip;`

### Math: `&times;` for multiplication, `&minus;` for subtraction

### Accented Characters — Mandatory in proper names

## Spacing
- **One space after punctuation** — never two
- `&nbsp;` before numeric refs, after copyright symbol, after honorifics
- Never multiple `<br>` tags for spacing

## Text Formatting
- Bold OR italic — never both
- Never underline (use `text-decoration-thickness: 1px` for links)
- ALL CAPS: < 1 line, always 5-12% letterspacing
- Kerning always on
- Ligatures: mandatory when fi/fl visually collide

## Page Layout
- Body text first (font, size, line spacing, line length)
- Line length: 45-90 characters (`max-width: 65ch`)
- Line spacing: 120-145% (`line-height: 1.2` to `1.45`)
- Left-align for web
- Paragraphs: indent OR space, never both
- Headings: max 3 levels, never all-caps or underlined
