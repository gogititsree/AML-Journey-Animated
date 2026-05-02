# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## ACAMS Prep Video Artifact (`artifacts/acams-prep-video`)

- **Framework**: React + Vite + TypeScript + Tailwind CSS
- **Port**: 19676 (previewPath: `/acams-prep-video/`)
- **Tabs**:
  1. **Animated Story** — 5-scene Framer Motion video (Enrolled Agent → AML journey)
  2. **200 Practice Questions** — Interactive MCQ quiz with 14 categories, shuffle, explanations, scoring (`src/components/quiz/QuizApp.tsx`, `src/data/quizQuestions.ts`)
  3. **5 Mock Tests** — 50 questions each, mapped to CAMS Study Guide chapters (`src/components/quiz/MockTestApp.tsx`, `src/data/mockTests.ts`)
  4. **200 Flashcards** — 20 cards per chapter (10 chapters), 3D flip animation, shuffle, "Got It / Still Learning" tracking (`src/components/quiz/FlashCardApp.tsx`, `src/data/flashCards.ts`)
  5. **Crossword Puzzle** — algorithmically generated from 30 AML/CAMS terms, interactive grid with click/keyboard input, check/reveal, timer, clue panels (`src/components/quiz/CrosswordApp.tsx`, `src/utils/crosswordGenerator.ts`)
     - Test 1: Financial Crime Methods & Typologies (Ch. 1–2)
     - Test 2: Sector-Specific ML Risks (Ch. 2–4)
     - Test 3: Global Standards & Regulatory Frameworks (Ch. 5–6)
     - Test 4: Building an AFC Compliance Program (Ch. 7–8)
     - Test 5: Technology, Monitoring & Investigations (Ch. 9–10)
