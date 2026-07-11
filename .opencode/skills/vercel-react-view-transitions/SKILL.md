---
name: vercel-react-view-transitions
description: Guide for implementing smooth, native-feeling animations using React's View Transition API. Use when adding page transitions, animating route changes, creating shared element animations, or implementing enter/exit animations without third-party libraries.
license: MIT
metadata:
  author: vercel
  version: "1.0.0"
---

# React View Transitions

Animate between UI states using the browser's native `document.startViewTransition`. Uses `<ViewTransition>`, `addTransitionType`, and CSS view transition pseudo-elements.

## When to Animate

Every `<ViewTransition>` should communicate a spatial relationship or continuity.

| Priority | Pattern | What it communicates |
|----------|---------|---------------------|
| 1 | **Shared element** (`name`) | "Same thing — going deeper" |
| 2 | **Suspense reveal** | "Data loaded" |
| 3 | **List identity** (per-item `key`) | "Same items, new arrangement" |
| 4 | **State change** (`enter`/`exit`) | "Something appeared/disappeared" |
| 5 | **Route change** (layout-level) | "Going to a new place" |

## Core Pattern

```jsx
import { ViewTransition } from 'react';

<ViewTransition enter="fade-in" exit="fade-out" default="none">
  <Component />
</ViewTransition>
```

- `startTransition` / `useDeferredValue` / `Suspense` activate VTs. Regular `setState` does not.
- `<ViewTransition>` only fires enter/exit if it appears **before any DOM nodes** in its parent.
- Always use `default="none"` and explicitly enable only desired triggers.

## Reference Files

- `references/implementation.md` — Step-by-step workflow
- `references/css-recipes.md` — Ready-to-use CSS animation recipes
- `references/nextjs.md` — Next.js App Router patterns
- `references/patterns.md` — Additional patterns and troubleshooting
