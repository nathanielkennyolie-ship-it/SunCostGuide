# Token Budget for Claude Design

Five-phase sequence to preserve Claude Design quota:

1. **System scaffold** (~1hr) — one detailed brief + DESIGN.md upload
2. **Reference screens** (~30min) — 3-4 canonical screens only
3. **Iteration** — inline comments only (not chat re-prompts)
4. **Variants** — branch from existing tokens, don't regenerate
5. **Hand-off** — bundle to Claude Code once (all screens at once)

Key rules:
- Cap at 4 reference screens per conversation
- Use sliders for token-level tweaks
- Use inline comments for component-level tweaks
- Use branch action for variants
- Single bundle for hand-off
