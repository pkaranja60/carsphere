---
name: domain-refactor
description: >-
  Use this skill when the user asks to refactor a domain or decompose a domain to comply with the Universal Code Formatting & Architecture Standard (UCFAS) and the 200-line rule.
---

# Domain Refactoring & Decomposition

When asked to refactor a domain, strictly comply with the Universal Code Formatting & Architecture Standard (UCFAS). You must enforce the following architectural rules:

## 1. Domain Decomposition (The 200-Line Rule) - UCFAS Rule 5
- Review all files in the domain. Any file exceeding 200 lines is a review candidate; any file exceeding 300 lines requires MANDATORY decomposition.
- Extract repeatable UI blocks, headers, footers, and complex logic into small, focused, and reusable components within `src/domains/[Domain]/components/`.
- Ensure the domain communicates through a single public entry point by properly exporting new abstractions from `index.ts`.

## 2. Differentiating Code Sections - UCFAS Rule 14.3
- Organize all refactored files using standard UCFAS section dividers to visually separate distinct responsibilities (e.g., Imports, Interfaces, Components, Helpers).
- You MUST use this exact format:
  ```typescript
  // ─────────────────────────────────────────────
  // SECTION: [Section Name]
  // ─────────────────────────────────────────────
  ```

## 3. Comment Hygiene & Density - UCFAS Rules 14.1 & 14.8
- Comment WHY, not WHAT. Never narrate obvious code or JSX structure.
- PROACTIVELY DELETE any existing inline comments that simply restate what the UI is doing (e.g., remove `{/* Title Section */}`, `{/* Option Cards */}`, `{/* Bottom Section */}`).
- Retain or write new comments ONLY if they explain business rules, external system quirks, performance optimizations, security decisions, or temporary workarounds.

## 4. Verification
When finished, ensure you run the project's linter/formatter and the TypeScript compiler to guarantee the refactor is structurally sound and type-safe:
- Formatter/Linter: `bun x ultracite fix`
- TypeScript: `bun x tsc --noEmit`
