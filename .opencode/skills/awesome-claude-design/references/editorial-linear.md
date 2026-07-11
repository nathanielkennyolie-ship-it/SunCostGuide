# Linear — Editorial Minimalism

Reference DESIGN.md for calm-neutral SaaS with one surgical purple accent.

## Color Palette
```
--bg:              #ffffff
--bg-alt:          #fafafa
--surface:         #f4f4f5
--bg-dark:         #0f0f14
--surface-dark:    #1a1a20
--text:            #0f0f14
--text-muted:      #6b6b76
--text-dim:        #a0a0ab
--border:          #e4e4e7
--border-strong:   #d4d4d8
--accent:          #5e6ad2
--accent-hover:    #4e5acb
```

## Typography
- UI: Inter, 400/500/600 weight, -0.5% tracking at headline sizes
- Mono: Berkeley Mono / SF Mono
- Scale: 11/13/14/16/18/22/28/36/48/64
- No serif, no italics for emphasis

## Components
- Primary buttons: accent fill, white text, 6px radius, 8/14 padding
- Cards: bg-alt bg, 1px border, 8px radius, no shadow
- Inputs: 1px border, 6px radius, 8/12 padding, 2px accent focus ring

## Layout
- 1200px max, 24px gutter, 12-column
- 4px base unit: 4/8/12/16/24/32/48/64
- Flat, border-based depth only
- Shadow only on popovers (0 2px 8px rgba(0,0,0,0.04))

## Rules
- Accent on primary action, links, focus rings only — never on backgrounds
- Max 8px border radius
- No drop shadows on cards or buttons
- No second accent color
- No gradients
