# Technical Document
## ACAMS CAMS Certification & AML/KYC Interview Prep Tool

**Version:** 1.0  
**Date:** May 2, 2026  
**Audience:** Developers, DevOps, Technical Reviewers

---

## 1. System Architecture

### 1.1 Overview
The application is a fully client-side Single Page Application (SPA). There is no backend server, no database, and no API calls at runtime. All content (questions, flashcards, crossword words, video scenes) is statically bundled at build time and shipped as a single JavaScript bundle.

```
Browser
  └── React SPA (Vite bundle)
        ├── App.tsx  (tab router)
        ├── VideoWithControls  (Tab 1)
        ├── QuizApp            (Tab 2)
        ├── MockTestApp        (Tab 3)
        ├── FlashCardApp       (Tab 4)
        └── CrosswordApp       (Tab 5)
```

### 1.2 Monorepo Structure
The project lives inside a pnpm workspace monorepo:

```
workspace/
├── artifacts/
│   └── acams-prep-video/       ← this app (@workspace/acams-prep-video)
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   ├── index.css
│       │   ├── components/
│       │   │   ├── quiz/
│       │   │   │   ├── QuizApp.tsx
│       │   │   │   ├── MockTestApp.tsx
│       │   │   │   ├── FlashCardApp.tsx
│       │   │   │   └── CrosswordApp.tsx
│       │   │   └── video/
│       │   │       └── VideoWithControls.tsx
│       │   ├── data/
│       │   │   ├── quizQuestions.ts   (200 MCQs)
│       │   │   ├── mockTests.ts       (5 × 50 MCQs)
│       │   │   └── flashCards.ts      (200 cards)
│       │   ├── hooks/
│       │   ├── lib/
│       │   │   └── video/
│       │   │       └── animations.ts
│       │   └── utils/
│       │       └── crosswordGenerator.ts
│       ├── public/
│       ├── index.html
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── package.json
├── artifacts/api-server/          ← separate Express API (unused by this app)
├── pnpm-workspace.yaml
└── package.json
```

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Language | TypeScript | ~5.x | Type-safe development |
| UI Framework | React | ^19 | Component rendering |
| Build Tool | Vite | ^6 | Dev server, bundling, HMR |
| Styling | Tailwind CSS | ^3 | Utility-first CSS |
| Animation | Framer Motion | ^12 | Video scenes, flip cards |
| Icons | Lucide React | latest | Tab bar and button icons |
| Package Manager | pnpm | workspace | Monorepo dependency management |
| Runtime | Browser (no Node.js at runtime) | — | Client-side only |

---

## 3. Component Architecture

### 3.1 App.tsx — Root Router
**Location:** `src/App.tsx`  
**Role:** Single state controller for tab selection. Uses a `Tab` union type (`'video' | 'quiz' | 'mock' | 'flash' | 'crossword'`) and renders all five panels simultaneously using `absolute inset-0` positioning with conditional `hidden` class to preserve state across tab switches.

```typescript
type Tab = 'video' | 'quiz' | 'mock' | 'flash' | 'crossword';
const [tab, setTab] = useState<Tab>('video');
```

All five panels are always mounted in the DOM — only their visibility toggles. This avoids re-mounting components and losing local state (quiz progress, timer, card marks) when switching tabs.

### 3.2 QuizApp — 200 Practice Questions
**Location:** `src/components/quiz/QuizApp.tsx`  
**Data source:** `src/data/quizQuestions.ts`

**State:**
- `questions: QuizQuestion[]` — filtered/shuffled working set
- `current: number` — index into working set
- `selected: number | null` — user's chosen option index
- `score: number` — running correct count
- `category: string` — active filter (default: "All")
- `shuffled: boolean` — whether deck is shuffled

**Data shape:**
```typescript
interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];   // always length 4
  answer: number;      // index 0–3
  explanation: string;
}
```

**Key behaviors:**
- Answer lock: once a selection is made, all options become non-interactive until the user navigates forward
- Category filter resets `current` to 0 to avoid out-of-bounds
- Shuffle uses `Fisher-Yates` via `Array.sort(() => Math.random() - 0.5)`

### 3.3 MockTestApp — 5 Mock Tests
**Location:** `src/components/quiz/MockTestApp.tsx`  
**Data source:** `src/data/mockTests.ts`

**Data shape:**
```typescript
interface MockTest {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  questions: QuizQuestion[];  // always 50 items
}
```

**State machine (3 views):**
1. `'select'` — test selection grid showing all 5 tests
2. `'test'` — active question with answer options
3. `'results'` — score summary with pass/fail indication

**Mock test mapping:**
| Test | Topic | CAMS Chapters |
|------|-------|---------------|
| 1 | Financial Crime Methods & Typologies | 1–2 |
| 2 | Sector-Specific ML Risks | 2–4 |
| 3 | Global Standards & Regulatory Frameworks | 5–6 |
| 4 | Building an AFC Compliance Program | 7–8 |
| 5 | Technology, Data & Investigations | 9–10 |

### 3.4 FlashCardApp — 200 Flashcards
**Location:** `src/components/quiz/FlashCardApp.tsx`  
**Data source:** `src/data/flashCards.ts`

**Data shape:**
```typescript
interface FlashCard {
  id: number;
  chapter: number;
  chapterTitle: string;
  front: string;   // question / term
  back: string;    // answer / definition
}
```

**State:**
- `flipped: Set<number>` — set of card IDs currently showing the back face
- `gotIt: Set<number>` — cards the user marked as known
- `stillLearning: Set<number>` — cards the user flagged to review
- `activeChapter: number | 'all'` — chapter filter
- `showOnlyStillLearning: boolean` — review-mode filter
- `shuffled: boolean`

**3D flip implementation:**
Uses Framer Motion `animate` with CSS `rotateY` and `perspective`. Front face: `rotateY(0deg)`, Back face: `rotateY(180deg)`. The card wrapper uses `transform-style: preserve-3d` and each face has `backface-visibility: hidden`.

**Chapter color map:** Each of the 10 chapters has a unique hex accent color used for the chapter badge and card border.

### 3.5 CrosswordApp — Crossword Puzzle
**Location:** `src/components/quiz/CrosswordApp.tsx`  
**Generator:** `src/utils/crosswordGenerator.ts`

**State:**
- `userGrid: string[][]` — user-entered letters (mirrors grid dimensions)
- `selected: { r, c } | null` — active cell position
- `dir: 'across' | 'down'` — active input direction
- `checked: boolean` — whether "Check" has been pressed (triggers color feedback)
- `revealed: Set<string>` — set of `"r,c"` keys for revealed cells
- `completed: boolean` — puzzle solved flag
- `timer: number` — seconds elapsed
- `timerActive: boolean`

**Computed values (derived, not stored in state):**
- `activeWord` — the `PlacedWord` at the selected cell in the active direction
- `isCellInActiveWord(r, c)` — used for highlighting
- `isCellCorrect(r, c)` — only valid when `checked === true`

**Keyboard handling:**
All keyboard events are handled in a single `handleKeyDown` callback attached to the outer `div` with `tabIndex={-1}`. The div is auto-focused via `ref={el => el?.focus()}` on mount.

| Key | Action |
|-----|--------|
| Letter (A–Z) | Enter letter, advance cursor |
| Backspace | Clear cell, retreat cursor |
| Delete | Clear current cell only |
| Tab | Toggle direction Across ↔ Down |
| Arrow keys | Move cursor, set direction |

---

## 4. Data Layer

### 4.1 quizQuestions.ts
- 200 `QuizQuestion` objects in a single exported array
- Organized by category with sequential IDs (1–200)
- Categories: Bank Secrecy Act, FATF, Typologies, SAR, KYC/CDD, PEP, Sanctions/OFAC, Correspondent Banking, TBML, Terrorist Financing, Virtual Assets, EDD, Transaction Monitoring, Beneficial Ownership

### 4.2 mockTests.ts
- 5 `MockTest` objects, each embedding 50 `QuizQuestion` objects
- Question IDs prefixed by test number (Test 1: 1001–1050, Test 2: 2001–2050, etc.)
- Imports `QuizQuestion` type from `quizQuestions.ts` for type safety

### 4.3 flashCards.ts
- 200 `FlashCard` objects in a single exported array
- ID scheme: `chapterNumber * 100 + cardIndex` (e.g., chapter 3, card 5 = ID 305)
- Exports `CHAPTERS` array with chapter metadata (number, title, color)

---

## 5. Crossword Generator Algorithm

**File:** `src/utils/crosswordGenerator.ts`

### 5.1 Grid Representation
A 15×15 2D array of `GridCell`:
```typescript
interface GridCell {
  letter: string;
  isBlack: boolean;
  number?: number;   // clue number, assigned last
}
```

### 5.2 Placement Algorithm
1. Sort all words by length descending
2. Place the longest word horizontally at the center row
3. For each remaining word:
   - Iterate over all already-placed words (`PlacedWord[]`)
   - For each letter pair match (existing word letter === new word letter), compute the candidate position
   - Call `canPlace()` to validate:
     - Bounds check
     - Word boundary check (cell before start and after end must be black)
     - Letter conflict check (any already-filled cell must have the matching letter)
     - Perpendicular adjacency check (empty cells in the new word must not be adjacent to letters from other words, preventing unintended word merges)
   - If valid, call `doPlace()` to write letters into the grid and record the word
   - First pass tries perpendicular placement (Across→Down, Down→Across)
   - Second pass tries parallel placement (same direction, letter-sharing)

### 5.3 Post-Processing
1. **Trim:** Compute bounding box of all non-black cells and slice the grid to remove empty margins
2. **Renumber:** Scan trimmed grid left-to-right, top-to-bottom; assign clue numbers to cells that start an Across or Down word
3. **Cache:** Result is stored in module-level `_cachedResult` so the expensive generation runs only once per page load

### 5.4 Complexity
- Worst case: O(W² × L²) where W = number of words, L = max word length
- In practice the 30-word list generates in < 5ms

---

## 6. Styling System

### 6.1 Tailwind CSS
All layout and spacing uses Tailwind utility classes. The `tailwind.config.ts` scans `./src/**/*.{ts,tsx}`.

### 6.2 CSS Custom Properties (index.css)
```css
--font-display: /* heading font */
--font-body:    /* body font */
```

### 6.3 Color Conventions
| Context | Color |
|---------|-------|
| Active tab (most) | Amber (`bg-amber-400`, `text-gray-900`) |
| Active tab (Crossword) | Violet (`bg-violet-500`, `text-white`) |
| Correct answer | Green (`#4ade80`) |
| Wrong answer | Red (`#f87171`) |
| Revealed cell | Amber (`#f59e0b`) |
| Selected crossword cell | Violet (`#7c3aed`) |
| Active word highlight | Violet 25% opacity |

---

## 7. Build & Development

### 7.1 Prerequisites
```
Node.js >= 18
pnpm >= 8
```

### 7.2 Install Dependencies
```bash
pnpm install
```

### 7.3 Development Server
```bash
pnpm --filter @workspace/acams-prep-video run dev
```
Vite starts on the port specified by the `PORT` environment variable.

### 7.4 Production Build
```bash
pnpm --filter @workspace/acams-prep-video run build
```
Output is emitted to `artifacts/acams-prep-video/dist/`.

### 7.5 Type Checking
```bash
pnpm --filter @workspace/acams-prep-video exec tsc --noEmit
```

Note: The project tsconfig currently lacks `"lib": ["dom"]` in some packages, producing harmless type warnings on `window`, `document`, and `.focus()` calls. These do not affect the runtime behavior since Vite's browser target provides full DOM access.

### 7.6 Vite Configuration
Key settings in `vite.config.ts`:
- `base`: Set to the artifact's preview path (`/acams-prep-video/`) for correct asset resolution through the shared reverse proxy
- `server.allowedHosts: true`: Required when Vite is accessed through a proxied preview host
- Path alias `@` → `./src`

---

## 8. Routing & Proxy

The application is served at path `/acams-prep-video/` through a shared reverse proxy. The proxy routes by path prefix; no path rewriting occurs, so all internal asset references must be relative or prefixed with the base path. Vite's `base` config option handles this automatically.

In production (deployed), the artifact is served over HTTPS on the configured deployment domain.

---

## 9. Dependency List

### Runtime (bundled into client JS)
| Package | Purpose |
|---------|---------|
| react | UI framework |
| react-dom | DOM rendering |
| framer-motion | Animation (video scenes, card flip) |
| lucide-react | Icon set |
| tailwindcss | CSS utility framework |

### Build/Dev Only
| Package | Purpose |
|---------|---------|
| vite | Build tool and dev server |
| typescript | Static type checking |
| @vitejs/plugin-react | React JSX transform for Vite |
| autoprefixer | CSS vendor prefixing |
| postcss | CSS processing pipeline |

---

## 10. Known Limitations & Future Considerations

| Item | Notes |
|------|-------|
| No progress persistence | Quiz/flashcard state resets on page refresh. Could add `localStorage` in a future version. |
| Crossword deterministic | The same puzzle is always generated (cached). Could randomize per session by seeding differently. |
| Single language | English only. |
| No offline support | No Service Worker / PWA manifest. Could be added for offline study. |
| Crossword mobile UX | Keyboard input works via the hidden `<input>` capture; native mobile virtual keyboard may vary by browser. |
| tsconfig `lib: dom` | Several files produce TS2304/TS2812 warnings due to missing DOM lib declaration in the tsconfig. Does not affect runtime. |
