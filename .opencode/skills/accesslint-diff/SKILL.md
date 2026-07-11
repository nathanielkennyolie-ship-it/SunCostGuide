---
name: accesslint-diff
description: "Diff a live page's accessibility violations against a baseline. Reports only new violations, fixed violations, and pre-existing count."
argument-hint: "[--branch [<name>]] [target|url]"
---

# AccessLint Diff

Report only what changed between versions. Locate; don't fix.

## Modes

- **Stash mode** (default) — stashes uncommitted changes, captures baseline, restores, then audits
- **Branch mode** (`--branch <name>`) — checks out branch for baseline, then restores

## Report Format

```
Accessibility diff — <url> vs <baseline>
N new · M fixed · K pre-existing hidden

New — Critical
- rule-id — detail
    where: selector   fix: directive
Fixed
- rule-id — (no longer present)
```
