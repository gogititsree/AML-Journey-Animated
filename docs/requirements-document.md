# Requirements Document
## ACAMS CAMS Certification & AML/KYC Interview Prep Tool

**Version:** 1.0  
**Date:** May 2, 2026  
**Audience:** Product Owner, Developer, Stakeholders

---

## 1. Project Overview

### 1.1 Purpose
This application is a self-contained, browser-based study tool designed to help a professional transitioning from an Enrolled Agent (tax) career into Anti-Money Laundering (AML) compliance. It covers the full ACAMS Certified Anti-Money Laundering Specialist (CAMS) certification curriculum and equips the user for technical AML/KYC job interviews.

### 1.2 Target User
- Primary: An individual Enrolled Agent switching career tracks into AML compliance
- Secondary: Any AML/KYC candidate preparing for the CAMS exam or compliance interviews

### 1.3 Scope
A single-page web application with five integrated learning modules, all running client-side with no backend or database dependencies.

---

## 2. Functional Requirements

### 2.1 Global Navigation
| ID | Requirement |
|----|-------------|
| FR-001 | The application shall present a persistent tab bar at the top of the screen with five tabs |
| FR-002 | The active tab shall be visually distinguished from inactive tabs |
| FR-003 | Tab switching shall be instantaneous; all module states shall be preserved when switching between tabs |
| FR-004 | The tab bar shall scroll horizontally on narrow viewports without wrapping |

### 2.2 Tab 1 — Animated Story (Video)
| ID | Requirement |
|----|-------------|
| FR-010 | The application shall display an animated, narrated story video covering the user's career transition journey (Enrolled Agent → AML Analyst) |
| FR-011 | The video shall include playback controls (play/pause, seek, progress bar) |
| FR-012 | The animation shall use multi-scene Framer Motion sequences covering key AML/CAMS narrative milestones |
| FR-013 | The video shall be fully rendered in-browser without any external video file dependency |

### 2.3 Tab 2 — 200 Practice Questions
| ID | Requirement |
|----|-------------|
| FR-020 | The application shall provide exactly 200 multiple-choice questions (MCQs) drawn from CAMS study guide content |
| FR-021 | Questions shall span at least 14 distinct subject categories covering all major CAMS exam topics |
| FR-022 | Each question shall have exactly four answer options |
| FR-023 | Upon answer selection, the application shall immediately reveal whether the answer is correct or incorrect |
| FR-024 | For incorrect answers, the application shall display the correct answer highlighted in green |
| FR-025 | Each question shall display a detailed written explanation after the user answers |
| FR-026 | The application shall display a running score (correct/total) at all times during a quiz session |
| FR-027 | Users shall be able to shuffle the question order |
| FR-028 | Users shall be able to filter questions by subject category |
| FR-029 | Users shall be able to reset the quiz to restart from the beginning |

### 2.4 Tab 3 — 5 Mock Tests
| ID | Requirement |
|----|-------------|
| FR-030 | The application shall provide five distinct mock tests, each containing exactly 50 questions |
| FR-031 | Each mock test shall be mapped to specific CAMS Study Guide chapters |
| FR-032 | Mock tests shall be thematically organized as follows: |
| | Test 1: Financial Crime Methods & Typologies (Ch. 1–2) |
| | Test 2: Sector-Specific Money Laundering Risks (Ch. 2–4) |
| | Test 3: Global Standards & Regulatory Frameworks (Ch. 5–6) |
| | Test 4: Building an AFC Compliance Program (Ch. 7–8) |
| | Test 5: Technology, Data & Investigations (Ch. 9–10) |
| FR-033 | Each mock test question shall follow the same format as practice questions (4 options, correct answer reveal, explanation) |
| FR-034 | A summary score screen shall be displayed upon completing all 50 questions |
| FR-035 | Users shall be able to navigate between mock tests from a selection screen |

### 2.5 Tab 4 — 200 Flashcards
| ID | Requirement |
|----|-------------|
| FR-040 | The application shall provide exactly 200 flashcards organized into 10 chapters |
| FR-041 | Each chapter shall contain exactly 20 flashcards |
| FR-042 | Chapters shall correspond to the 10 CAMS Study Guide chapters |
| FR-043 | Each flashcard shall display a question/term on the front face and an answer/definition on the back face |
| FR-044 | Cards shall flip with a 3D animation when clicked |
| FR-045 | Users shall be able to mark each card as "Got It" or "Still Learning" |
| FR-046 | The application shall track and display counts for "Got It" and "Still Learning" cards |
| FR-047 | Users shall be able to shuffle the deck order |
| FR-048 | Users shall be able to filter cards to show only "Still Learning" cards |
| FR-049 | Users shall be able to reset all card states |
| FR-050 | Users shall be able to navigate by chapter using a chapter selector |

### 2.6 Tab 5 — Crossword Puzzle
| ID | Requirement |
|----|-------------|
| FR-060 | The application shall generate a crossword puzzle using AML/KYC/CAMS terminology |
| FR-061 | The puzzle shall contain a minimum of 25 placed words from a 30-word candidate list |
| FR-062 | The puzzle grid shall be generated algorithmically using a greedy backtracking placement algorithm |
| FR-063 | Each word shall be accompanied by a clue relevant to its AML/KYC meaning |
| FR-064 | Clues shall be organized into Across and Down panels, sorted by number |
| FR-065 | Users shall be able to select any cell by clicking it |
| FR-066 | Users shall be able to type letters into selected cells using a physical or virtual keyboard |
| FR-067 | Pressing Tab or clicking the same cell again shall toggle direction between Across and Down |
| FR-068 | Arrow keys shall navigate between cells and set the active direction |
| FR-069 | Backspace shall clear the current cell and retreat the cursor |
| FR-070 | Clicking a clue in the panel shall jump to the first cell of that word |
| FR-071 | The currently active word shall be highlighted in the grid |
| FR-072 | A "Check" button shall validate all filled cells, coloring correct cells green and incorrect cells red |
| FR-073 | A "Reveal Letter" button shall reveal the correct letter in the currently selected cell |
| FR-074 | A "Reveal Word" button shall reveal all letters in the currently active word |
| FR-075 | Revealed letters shall be displayed in a distinct color (amber) to differentiate them from user-entered letters |
| FR-076 | A "Reset" button shall clear the entire grid and restart the timer |
| FR-077 | A live timer shall track elapsed time from the start of the puzzle |
| FR-078 | A progress indicator shall show the percentage of cells correctly filled |
| FR-079 | A completion banner shall appear when all cells are correctly filled |
| FR-080 | Completed clues shall be visually marked with a checkmark in the clue panels |

---

## 3. Non-Functional Requirements

### 3.1 Performance
| ID | Requirement |
|----|-------------|
| NFR-001 | The application shall load within 3 seconds on a standard broadband connection |
| NFR-002 | Tab switching shall complete within 100ms (no visible lag) |
| NFR-003 | Crossword generation shall complete synchronously at module load; no runtime delay |
| NFR-004 | Flashcard flip animations shall run at 60fps |

### 3.2 Compatibility
| ID | Requirement |
|----|-------------|
| NFR-010 | The application shall run in all modern browsers (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+) |
| NFR-011 | The application shall be functional on desktop viewports (1024px and wider) as the primary target |
| NFR-012 | The tab bar shall remain usable on viewports as narrow as 360px via horizontal scrolling |

### 3.3 Accessibility
| ID | Requirement |
|----|-------------|
| NFR-020 | All interactive elements shall be keyboard accessible |
| NFR-021 | Color shall not be the sole means of conveying answer correctness (icons also used) |

### 3.4 Data & Privacy
| ID | Requirement |
|----|-------------|
| NFR-030 | The application shall operate entirely client-side with no user data sent to any server |
| NFR-031 | No user account, login, or registration shall be required |
| NFR-032 | All session state (quiz progress, flashcard marks) shall persist only for the duration of the browser session |

### 3.5 Content Accuracy
| ID | Requirement |
|----|-------------|
| NFR-040 | All question content, explanations, and flashcard definitions shall be based on the ACAMS CAMS Study Guide curriculum |
| NFR-041 | All crossword clues shall accurately reflect the AML/CAMS meaning of the associated term |

---

## 4. Content Specifications

### 4.1 Quiz Categories (200 Practice Questions)
1. Bank Secrecy Act
2. FATF & International Standards
3. Money Laundering Typologies
4. Suspicious Activity Reports (SAR)
5. Know Your Customer (KYC) / CDD
6. Politically Exposed Persons (PEP)
7. Sanctions & OFAC
8. Correspondent Banking
9. Trade-Based Money Laundering
10. Terrorist Financing
11. Virtual Assets & Cryptocurrency
12. Enhanced Due Diligence (EDD)
13. Transaction Monitoring
14. Beneficial Ownership

### 4.2 Flashcard Chapters (200 Flashcards)
| Ch. | Title | Cards |
|-----|-------|-------|
| 1 | Understanding Financial Crime | 20 |
| 2 | ML Risks in Financial Services | 20 |
| 3 | ML Risks in Non-Bank Financial Institutions | 20 |
| 4 | ML Risks in DNFBPs & Other Sectors | 20 |
| 5 | Global AFC Frameworks | 20 |
| 6 | AFC Regulations | 20 |
| 7 | Building an AFC Program | 20 |
| 8 | Transaction Monitoring & Investigation | 20 |
| 9 | Technology for AFC Compliance | 20 |
| 10 | Data Collection & Preparation | 20 |

### 4.3 Crossword Word List (30 candidate words)
INTEGRATION, LAUNDERING, COMPLIANCE, SCREENING, REPORTING, PREDICATE, THRESHOLD, SANCTIONS, PLACEMENT, LAYERING, SMURFING, OFFSHORE, PROCEEDS, NOMINEE, FINCEN, HAWALA, BEARER, TERROR, CRIME, ALERT, SHELL, FATF, MULE, WIRE, RISK, SAR, KYC, PEP, CTR, EDD

---

## 5. Constraints & Assumptions

- No backend, API calls, or database; all data is statically bundled at build time
- No authentication or user accounts required
- Progress is not persisted between browser sessions (no localStorage requirement for v1)
- All content is in English
- The animated video is entirely code-driven (Framer Motion); no video files are served
