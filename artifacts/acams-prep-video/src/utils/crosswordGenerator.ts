export interface WordClue {
  word: string;
  clue: string;
}

export interface PlacedWord {
  word: string;
  clue: string;
  row: number;
  col: number;
  direction: 'across' | 'down';
  number: number;
}

export interface GridCell {
  letter: string;
  isBlack: boolean;
  number?: number;
}

export type CWGrid = GridCell[][];

const SIZE = 15;

function makeGrid(): CWGrid {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, (): GridCell => ({ letter: '', isBlack: true }))
  );
}

function canPlace(grid: CWGrid, word: string, row: number, col: number, dir: 'across' | 'down'): boolean {
  const dr = dir === 'down' ? 1 : 0;
  const dc = dir === 'across' ? 1 : 0;
  const len = word.length;

  if (row < 0 || col < 0) return false;
  if (row + dr * (len - 1) >= SIZE || col + dc * (len - 1) >= SIZE) return false;

  // Cell immediately before start must be empty (word boundary)
  const pr = row - dr, pc = col - dc;
  if (pr >= 0 && pc >= 0 && !grid[pr][pc].isBlack) return false;

  // Cell immediately after end must be empty (word boundary)
  const nr = row + dr * len, nc = col + dc * len;
  if (nr >= 0 && nc >= 0 && nr < SIZE && nc < SIZE && !grid[nr][nc].isBlack) return false;

  let intersections = 0;

  for (let i = 0; i < len; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    const cell = grid[r][c];

    if (!cell.isBlack) {
      if (cell.letter !== word[i]) return false;
      intersections++;
    } else {
      // Empty cell: perpendicular neighbors must be black (no unintended adjacency)
      const perp_dr = dc; // across word → check vertically (dc=1 means perp is dr direction)
      const perp_dc = dr;
      const ar = r - perp_dr, ac = c - perp_dc;
      const br = r + perp_dr, bc = c + perp_dc;
      if (ar >= 0 && ac >= 0 && !grid[ar][ac].isBlack) return false;
      if (br < SIZE && bc < SIZE && !grid[br][bc].isBlack) return false;
    }
  }

  return intersections >= 0;
}

function doPlace(grid: CWGrid, word: string, row: number, col: number, dir: 'across' | 'down'): void {
  const dr = dir === 'down' ? 1 : 0;
  const dc = dir === 'across' ? 1 : 0;
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    grid[r][c] = { ...grid[r][c], letter: word[i], isBlack: false };
  }
}

export function generateCrossword(wordClues: WordClue[]): { grid: CWGrid; words: PlacedWord[] } {
  const sorted = [...wordClues].sort((a, b) => b.word.length - a.word.length);
  const grid = makeGrid();
  const raw: Omit<PlacedWord, 'number'>[] = [];

  // Place first word horizontally in center
  const first = sorted[0];
  const startRow = Math.floor(SIZE / 2);
  const startCol = Math.floor((SIZE - first.word.length) / 2);
  doPlace(grid, first.word, startRow, startCol, 'across');
  raw.push({ word: first.word, clue: first.clue, row: startRow, col: startCol, direction: 'across' });

  // Greedy placement
  for (let i = 1; i < sorted.length; i++) {
    const wc = sorted[i];
    let placed = false;

    outerLoop: for (const pw of raw) {
      const newDir: 'across' | 'down' = pw.direction === 'across' ? 'down' : 'across';
      for (let ei = 0; ei < pw.word.length; ei++) {
        for (let wi = 0; wi < wc.word.length; wi++) {
          if (pw.word[ei] !== wc.word[wi]) continue;

          let newRow: number, newCol: number;
          if (pw.direction === 'across') {
            newRow = pw.row - wi;
            newCol = pw.col + ei;
          } else {
            newRow = pw.row + ei;
            newCol = pw.col - wi;
          }

          // Verify at least one intersection (the shared cell must already have the letter)
          const ir = pw.direction === 'across' ? pw.row : pw.row + ei;
          const ic = pw.direction === 'across' ? pw.col + ei : pw.col;
          if (grid[ir] && grid[ir][ic] && grid[ir][ic].letter === pw.word[ei]) {
            if (canPlace(grid, wc.word, newRow, newCol, newDir)) {
              doPlace(grid, wc.word, newRow, newCol, newDir);
              raw.push({ word: wc.word, clue: wc.clue, row: newRow, col: newCol, direction: newDir });
              placed = true;
              break outerLoop;
            }
          }
        }
      }
    }
    if (!placed) {
      // Try same direction too (for longer chains)
      outerLoop2: for (const pw of raw) {
        const newDir = pw.direction;
        for (let ei = 0; ei < pw.word.length; ei++) {
          for (let wi = 0; wi < wc.word.length; wi++) {
            if (pw.word[ei] !== wc.word[wi]) continue;
            let newRow: number, newCol: number;
            if (pw.direction === 'across') {
              newRow = pw.row;
              newCol = pw.col + ei - wi;
            } else {
              newRow = pw.row + ei - wi;
              newCol = pw.col;
            }
            if (newRow === pw.row && newCol === pw.col) continue;
            const ir = pw.direction === 'across' ? pw.row : pw.row + ei;
            const ic = pw.direction === 'across' ? pw.col + ei : pw.col;
            if (grid[ir] && grid[ir][ic] && grid[ir][ic].letter === pw.word[ei]) {
              if (canPlace(grid, wc.word, newRow, newCol, newDir)) {
                doPlace(grid, wc.word, newRow, newCol, newDir);
                raw.push({ word: wc.word, clue: wc.clue, row: newRow, col: newCol, direction: newDir });
                placed = true;
                break outerLoop2;
              }
            }
          }
        }
      }
    }
  }

  // Trim grid to bounding box
  let minR = SIZE, maxR = 0, minC = SIZE, maxC = 0;
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!grid[r][c].isBlack) {
        minR = Math.min(minR, r);
        maxR = Math.max(maxR, r);
        minC = Math.min(minC, c);
        maxC = Math.max(maxC, c);
      }
    }
  }

  const trimmedRows = maxR - minR + 1;
  const trimmedCols = maxC - minC + 1;
  const trimmed: CWGrid = Array.from({ length: trimmedRows }, (_, r) =>
    Array.from({ length: trimmedCols }, (_, c) => ({ ...grid[r + minR][c + minC] }))
  );

  // Adjust word positions
  const adjusted = raw.map(w => ({ ...w, row: w.row - minR, col: w.col - minC }));

  // Number cells (left-to-right, top-to-bottom)
  let num = 1;
  const cellNums: Record<string, number> = {};
  for (let r = 0; r < trimmedRows; r++) {
    for (let c = 0; c < trimmedCols; c++) {
      if (trimmed[r][c].isBlack) continue;
      const startsA = (c === 0 || trimmed[r][c - 1].isBlack) && c + 1 < trimmedCols && !trimmed[r][c + 1].isBlack;
      const startsD = (r === 0 || trimmed[r - 1][c].isBlack) && r + 1 < trimmedRows && !trimmed[r + 1][c].isBlack;
      if (startsA || startsD) {
        trimmed[r][c].number = num;
        cellNums[`${r},${c}`] = num;
        num++;
      }
    }
  }

  const words: PlacedWord[] = adjusted.map((w, idx) => ({
    ...w,
    number: cellNums[`${w.row},${w.col}`] ?? idx + 1,
  }));

  // Sort words by number
  const sortedWords = [...words].sort((a, b) => a.number - b.number);

  return { grid: trimmed, words: sortedWords };
}

// Pre-generate the crossword so it's stable
export const CROSSWORD_WORDS: WordClue[] = [
  { word: 'INTEGRATION', clue: 'Third ML stage: reintroducing clean funds into the economy' },
  { word: 'LAUNDERING', clue: 'Money ___: concealing proceeds of crime' },
  { word: 'COMPLIANCE', clue: 'Adherence to AML laws and regulations' },
  { word: 'SCREENING', clue: 'Checking customer names against sanctions watchlists' },
  { word: 'REPORTING', clue: 'Filing SARs and CTRs (the act of _____)' },
  { word: 'PREDICATE', clue: '_____ offense: crime that generates ML proceeds' },
  { word: 'THRESHOLD', clue: 'Dollar amount that triggers a CTR filing ($10,000)' },
  { word: 'SANCTIONS', clue: 'Restrictions imposed on countries, entities, or persons' },
  { word: 'PLACEMENT', clue: 'First ML stage: introducing illicit cash into the financial system' },
  { word: 'LAYERING', clue: 'Second ML stage: creating complex transaction chains' },
  { word: 'SMURFING', clue: 'Structuring cash into smaller deposits to avoid CTR reporting' },
  { word: 'OFFSHORE', clue: 'Jurisdiction used for bank secrecy and private banking opacity' },
  { word: 'PROCEEDS', clue: '_____ of crime: funds to be laundered' },
  { word: 'NOMINEE', clue: '_____ director: shell company concealment method' },
  { word: 'FINCEN', clue: 'U.S. Financial Intelligence Unit and BSA administrator (abbr.)' },
  { word: 'HAWALA', clue: 'Informal value transfer system based on trust and brokers' },
  { word: 'BEARER', clue: '_____ share: instrument granting anonymous company ownership' },
  { word: 'TERROR', clue: 'Financing of _____: using funds to support attacks' },
  { word: 'CRIME', clue: 'Financial _____: broad category of illicit financial activity' },
  { word: 'ALERT', clue: 'Transaction monitoring system notification requiring review' },
  { word: 'SHELL', clue: '_____ company: entity with no real business operations' },
  { word: 'FATF', clue: 'International AML standard-setter behind the 40 Recommendations (abbr.)' },
  { word: 'MULE', clue: 'Money _____: individual used to transfer illicit funds' },
  { word: 'WIRE', clue: '_____ transfer: primary electronic fund movement method' },
  { word: 'RISK', clue: 'ML/TF exposure level assessed in the enterprise-wide ___ assessment' },
  { word: 'SAR', clue: 'Suspicious Activity Report (abbr.)' },
  { word: 'KYC', clue: 'Know Your Customer (abbr.)' },
  { word: 'PEP', clue: 'Politically Exposed Person (abbr.)' },
  { word: 'CTR', clue: 'Currency Transaction Report (abbr.)' },
  { word: 'EDD', clue: 'Enhanced Due Diligence (abbr.)' },
];

let _cachedResult: ReturnType<typeof generateCrossword> | null = null;

export function getCrossword() {
  if (!_cachedResult) {
    _cachedResult = generateCrossword(CROSSWORD_WORDS);
  }
  return _cachedResult;
}
