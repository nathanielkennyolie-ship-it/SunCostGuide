---
name: accesslint-audit
description: Find and fix WCAG 2.2 accessibility issues. Two modes — report (sweep, produce written report) and fix (audit→edit→verify).
---

# AccessLint Audit

Audit accessibility and optionally fix what's broken.

## Modes

- **Report mode** — audit + write report. No edits.
- **Fix mode** — audit → edit → verify loop.

## Flow

1. **`audit_live`** — prefer for any URL. Auto-launches Chrome headless if needed.
2. **`audit_html`** — for raw HTML strings or files.

## Reporting

Format: Summary → Critical → Serious → Moderate/Minor → Recommendations → Positive Findings.
