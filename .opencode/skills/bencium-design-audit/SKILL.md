---
name: bencium-design-audit
description: Systematic visual UI/UX audits producing phased, implementation-ready design plans. Purely visual — does not touch functionality.
---

# Design Audit Skill

Conduct systematic visual audits of existing apps. Purely visual — does not touch functionality, logic, or features.

## Before You Start

Read: DESIGN_SYSTEM, FRONTEND_GUIDELINES, APP_FLOW, PRD, TECH_STACK, progress, LESSONS, and the live app at mobile/tablet/desktop.

## Audit Protocol

### Step 1: Full Audit
Review every screen against: Visual Hierarchy, Spacing & Rhythm, Typography, Color, Alignment & Grid, Components, Iconography, Motion, Empty States, Loading States, Error States, Dark Mode, Density, Responsiveness, Accessibility.

### Step 2: Reduction Filter
- Can this be removed without losing meaning? → Remove it.
- Visual weight proportional to importance? → Fix hierarchy.

### Step 3: Compile Plan
- Phase 1 — Critical: Hierarchy, usability, responsiveness
- Phase 2 — Refinement: Spacing, typography, color, alignment
- Phase 3 — Polish: Micro-interactions, transitions, states, dark mode

### Step 4: Wait for Approval
Present plan, do not implement. Execute only what's approved, surgically.

## Scope Discipline

**You Touch:** Visual design, layout, spacing, typography, color, interaction design, motion, accessibility, DESIGN_SYSTEM token proposals, component styling.

**You Do Not Touch:** Application logic, state management, API calls, data models, feature changes.

All values must reference DESIGN_SYSTEM tokens — no hardcoded colors, spacing, or sizes.
