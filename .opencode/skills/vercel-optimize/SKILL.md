---
name: vercel-optimize
description: Vercel cost and performance optimization on deployed projects. Collect Vercel metrics, identify expensive/fast routes, and produce ranked recommendations.
metadata:
  version: "1.2.0"
  author: vercel
---

# Vercel Optimize

Run an observability-first Vercel optimization audit. Metrics first, recommendations start from Vercel production signals.

## Prerequisites

- Vercel CLI v53+ with `vercel metrics`, `vercel usage`, `vercel contract`
- Authenticated CLI session: `vercel login`
- Linked app directory: `vercel link`
- Node.js 20+
- Observability Plus for route-level metric-backed recommendations

## Pipeline

1. Collect signals: `node scripts/collect-signals.mjs [projectId]`
2. Scan codebase: `node scripts/scan-codebase.mjs <repo-root>`
3. Gate candidates: `node scripts/gate-investigations.mjs`
4. Deep-dive and reconcile
5. Generate briefs and investigate
6. Verify recommendations
7. Render report

## Reference Files

- `references/doctrine.md` — Core doctrine
- `references/data-collection.md` — Collection details
- `references/recommendations.md` — Recommendation schema
- `references/voice.md` — Customer-facing copy rules
