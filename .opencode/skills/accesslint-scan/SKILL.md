---
name: accesslint-scan
description: "Audit a live page for accessibility issues and locate each violation precisely. Pass a URL or config target name. Locates; doesn't edit."
argument-hint: "[target|url]"
---

# AccessLint Scan

Audit a live page and report WCAG violations. Locate; don't fix.

## Usage

```bash
npx -y @accesslint/chrome@latest ensure
npx -y @accesslint/cli@latest scan <target> --port "$PORT" --format json
```

## Report

Counts by impact, then per violation:
- **where** — selector + `file:line` if available
- **evidence** — contrast ratio, missing attribute, etc.
- **fix** — mechanical change or `NEEDS HUMAN`
