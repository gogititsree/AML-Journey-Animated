import { useState, useCallback, useEffect, useRef } from 'react';
import { Search, Clock, Trophy, RotateCcw, CheckCircle } from 'lucide-react';

const WORD_LIST = [
  { word: 'COMPLIANCE',   clue: 'Adherence to AML laws and regulations' },
  { word: 'MONITORING',   clue: 'Ongoing surveillance of customer transactions' },
  { word: 'LAYERING',     clue: 'Second stage of money laundering' },
  { word: 'PLACEMENT',    clue: 'First stage of money laundering' },
  { word: 'INTEGRATION',  clue: 'Third stage of money laundering' },
  { word: 'TERRORISM',    clue: 'Financing of violent extremist acts' },
  { word: 'SANCTIONS',    clue: 'Penalties applied to countries or individuals' },
  { word: 'SUSPICIOUS',   clue: 'Unusual activity triggering a SAR filing' },
  { word: 'STRUCTURING',  clue: 'Breaking transactions below the CTR threshold' },
  { word: 'TYPOLOGY',     clue: 'A recognized method or pattern of money laundering' },
  { word: 'PREDICATE',    clue: 'Underlying crime that generates illicit proceeds' },
  { word: 'THRESHOLD',    clue: 'Dollar amount ($10,000) triggering a CTR' },
  { word: 'SMURFING',     clue: 'Using multiple people to break up deposits' },
  { word: 'NOMINEE',      clue: 'Person acting on behalf of the beneficial owner' },
  { word: 'DILIGENCE',    clue: 'Thorough investigation of customer identity' },
  { word: 'HAWALA',       clue: 'Informal value transfer system used globally' },
  { word: 'CURRENCY',     clue: 'Cash that must be reported via a CTR' },
  { word: 'CONDUIT',      clue: 'Channel used to move illicit funds' },
  { word: 'EXPOSURE',     clue: 'Risk level a bank faces from a particular client' },
  { word: 'SHELL',        clue: 'Company with no real operations used for laundering' },
  { word: 'WIRE',         clue: 'Electronic funds transfer method' },
  { word: 'FATF',         clue: 'Financial Action Task Force (global AML body)' },
  { word: 'REPORTING',    clue: 'Filing SARs and CTRs with FinCEN' },
  { word: 'BENEFICIAL',   clue: 'True owner who benefits from an account' },
  { word: 'TRANSACTION',  clue: 'Financial activity recorded in bank records' },
];

const GRID_SIZE = 22;

const DIRECTIONS = [
  { dr: 0,  dc:  1 }, // right
  { dr: 0,  dc: -1 }, // left
  { dr:  1, dc:  0 }, // down
  { dr: -1, dc:  0 }, // up
];

const WORD_COLORS = [
  '#10b981','#3b82f6','#a855f7','#f59e0b','#ef4444',
  '#06b6d4','#f97316','#ec4899','#84cc16','#14b8a6',
  '#6366f1','#0ea5e9','#22c55e','#eab308','#f43f5e',
  '#8b5cf6','#d946ef','#fb923c','#4ade80','#38bdf8',
  '#c084fc','#fbbf24','#fb7185','#34d399','#67e8f9',
];

interface PlacedWord {
  word: string;
  cells: Array<{ r: number; c: number }>;
  colorIndex: number;
}

function buildGrid(): { grid: string[][]; placed: PlacedWord[] } {
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => '')
  );
  const placed: PlacedWord[] = [];
  const sorted = [...WORD_LIST].sort((a, b) => b.word.length - a.word.length);

  for (let wi = 0; wi < sorted.length; wi++) {
    const { word } = sorted[wi];
    let success = false;
    for (let attempt = 0; attempt < 300 && !success; attempt++) {
      const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      const r = Math.floor(Math.random() * GRID_SIZE);
      const c = Math.floor(Math.random() * GRID_SIZE);
      const endR = r + dir.dr * (word.length - 1);
      const endC = c + dir.dc * (word.length - 1);
      if (endR < 0 || endR >= GRID_SIZE || endC < 0 || endC >= GRID_SIZE) continue;
      let ok = true;
      const cells: Array<{ r: number; c: number }> = [];
      for (let i = 0; i < word.length; i++) {
        const cr = r + dir.dr * i;
        const cc = c + dir.dc * i;
        cells.push({ r: cr, c: cc });
        if (grid[cr][cc] !== '' && grid[cr][cc] !== word[i]) { ok = false; break; }
      }
      if (ok) {
        for (let i = 0; i < word.length; i++) {
          grid[r + dir.dr * i][c + dir.dc * i] = word[i];
        }
        placed.push({ word, cells, colorIndex: wi });
        success = true;
      }
    }
  }

  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (grid[r][c] === '') grid[r][c] = alpha[Math.floor(Math.random() * 26)];

  return { grid, placed };
}

const SEED = buildGrid();

export default function WordSearchApp() {
  const [grid,        setGrid]        = useState(SEED.grid);
  const [placed,      setPlaced]      = useState(SEED.placed);
  const [foundWords,  setFoundWords]  = useState<Set<string>>(new Set());
  const [selecting,   setSelecting]   = useState(false);
  const [selStart,    setSelStart]    = useState<{ r: number; c: number } | null>(null);
  const [selEnd,      setSelEnd]      = useState<{ r: number; c: number } | null>(null);
  const [flashGreen,  setFlashGreen]  = useState<Set<string>>(new Set());
  const [flashRed,    setFlashRed]    = useState<Set<string>>(new Set());
  const [elapsed,     setElapsed]     = useState(0);
  const [finished,    setFinished]    = useState(false);
  const [gameKey,     setGameKey]     = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (finished) { timerRef.current && clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => { timerRef.current && clearInterval(timerRef.current); };
  }, [finished, gameKey]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const getLineCells = useCallback(
    (start: { r: number; c: number }, end: { r: number; c: number }) => {
      const dr = end.r - start.r;
      const dc = end.c - start.c;
      if (dr !== 0 && dc !== 0) return null;
      const len = Math.max(Math.abs(dr), Math.abs(dc)) + 1;
      const sr = dr === 0 ? 0 : dr > 0 ? 1 : -1;
      const sc = dc === 0 ? 0 : dc > 0 ? 1 : -1;
      return Array.from({ length: len }, (_, i) => ({ r: start.r + sr * i, c: start.c + sc * i }));
    },
    []
  );

  const selectedCells = selStart && selEnd ? (getLineCells(selStart, selEnd) ?? []) : [];
  const selectedKeys  = new Set(selectedCells.map(c => `${c.r},${c.c}`));

  const commit = useCallback(() => {
    if (!selStart || !selEnd) { setSelecting(false); return; }
    const cells = getLineCells(selStart, selEnd);
    if (!cells || cells.length < 2) { setSelStart(null); setSelEnd(null); setSelecting(false); return; }
    const word = cells.map(c => grid[c.r][c.c]).join('');
    const match = placed.find(
      pw => pw.word === word || pw.word === word.split('').reverse().join('')
    );
    if (match && !foundWords.has(match.word)) {
      const next = new Set([...foundWords, match.word]);
      setFoundWords(next);
      const keys = new Set(cells.map(c => `${c.r},${c.c}`));
      setFlashGreen(keys);
      setTimeout(() => setFlashGreen(new Set()), 700);
      if (next.size === placed.length) setFinished(true);
    } else {
      const keys = new Set(cells.map(c => `${c.r},${c.c}`));
      setFlashRed(keys);
      setTimeout(() => setFlashRed(new Set()), 400);
    }
    setSelStart(null); setSelEnd(null); setSelecting(false);
  }, [selStart, selEnd, grid, placed, foundWords, getLineCells]);

  const handleDown  = (r: number, c: number) => { setSelecting(true); setSelStart({ r, c }); setSelEnd({ r, c }); };
  const handleEnter = (r: number, c: number) => {
    if (!selecting || !selStart) return;
    const dr = r - selStart.r, dc = c - selStart.c;
    if (dr === 0 || dc === 0) setSelEnd({ r, c });
  };
  const handleUp = () => commit();

  const reset = () => {
    const fresh = buildGrid();
    setGrid(fresh.grid); setPlaced(fresh.placed);
    setFoundWords(new Set()); setSelStart(null); setSelEnd(null);
    setSelecting(false); setFlashGreen(new Set()); setFlashRed(new Set());
    setElapsed(0); setFinished(false); setGameKey(k => k + 1);
  };

  const cellStyle = (r: number, c: number): React.CSSProperties => {
    const key = `${r},${c}`;
    if (flashGreen.has(key)) return { background: '#10b981', color: '#fff', borderRadius: 6, boxShadow: '0 0 12px #10b98180' };
    if (flashRed.has(key))   return { background: '#ef4444', color: '#fff', borderRadius: 6 };
    if (selectedKeys.has(key)) return { background: '#3b82f6', color: '#fff', borderRadius: 6, boxShadow: '0 0 10px #3b82f680' };
    for (const pw of placed) {
      if (foundWords.has(pw.word) && pw.cells.some(cell => cell.r === r && cell.c === c)) {
        const col = WORD_COLORS[pw.colorIndex % WORD_COLORS.length];
        return { background: col + '38', color: col, borderRadius: 6, border: `1px solid ${col}60`, fontWeight: 800 };
      }
    }
    return { color: 'rgba(255,255,255,0.55)' };
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)', userSelect: 'none' }}
      onMouseUp={handleUp}
      onMouseLeave={() => { if (selecting) commit(); }}
    >
      {/* ── Header ── */}
      <div className="shrink-0 px-6 pt-6 pb-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Search className="text-cyan-400" size={20} />
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">AML Word Search</span>
            </div>
            <h1 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Find the Hidden Terms
            </h1>
            <p className="text-white/35 text-xs mt-0.5">Words are hidden horizontally, vertically and backwards — click &amp; drag to select</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Clock size={13} className="text-cyan-400" />
              <span className="text-white font-mono font-bold text-base">{fmt(elapsed)}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Trophy size={13} className="text-amber-400" />
              <span className="text-white font-bold text-base">{foundWords.size}<span className="text-white/40 font-normal"> / {placed.length}</span></span>
            </div>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all text-sm font-medium"
            >
              <RotateCcw size={13} /> New Game
            </button>
          </div>
        </div>
      </div>

      {/* ── Finished banner ── */}
      {finished && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-5 px-8">
            <Trophy size={72} className="mx-auto text-amber-400 drop-shadow-lg" />
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>All Found!</h2>
            <p className="text-white/60 text-xl">
              You found all <span className="text-amber-400 font-bold">{placed.length}</span> words in{' '}
              <span className="text-cyan-400 font-bold">{fmt(elapsed)}</span>
            </p>
            <button
              onClick={reset}
              className="mx-auto flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg transition-all shadow-lg"
            >
              <RotateCcw size={18} /> Play Again
            </button>
          </div>
        </div>
      )}

      {/* ── Game area ── */}
      {!finished && (
        <div className="flex-1 flex gap-4 px-6 py-5 overflow-hidden min-h-0">

          {/* Grid */}
          <div className="flex-1 flex items-start justify-center overflow-auto">
            <div className="inline-block">
              {grid.map((row, r) => (
                <div key={r} className="flex">
                  {row.map((letter, c) => (
                    <div
                      key={c}
                      onMouseDown={() => handleDown(r, c)}
                      onMouseEnter={() => handleEnter(r, c)}
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold cursor-pointer transition-all"
                      style={{ fontFamily: 'monospace', fontSize: '0.75rem', ...cellStyle(r, c) }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Word list */}
          <div className="w-64 shrink-0 flex flex-col min-h-0">
            <p className="text-white/35 text-xs font-bold tracking-widest uppercase mb-2 shrink-0">
              {foundWords.size === placed.length ? '✓ All found!' : `${placed.length - foundWords.size} remaining`}
            </p>
            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {WORD_LIST.map(item => {
                const pw = placed.find(p => p.word === item.word);
                const found = foundWords.has(item.word);
                const col = pw ? WORD_COLORS[pw.colorIndex % WORD_COLORS.length] : '#64748b';
                return (
                  <div
                    key={item.word}
                    className="flex items-start gap-2.5 px-3 py-2 rounded-xl transition-all"
                    style={{
                      background: found ? `${col}14` : 'rgba(255,255,255,0.03)',
                      border:     `1px solid ${found ? col + '45' : 'rgba(255,255,255,0.06)'}`,
                    }}
                  >
                    {found
                      ? <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: col }} />
                      : <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }} />
                    }
                    <div className="min-w-0">
                      <div
                        className="text-xs font-bold tracking-widest"
                        style={{ color: found ? col : 'rgba(255,255,255,0.55)', textDecoration: found ? 'line-through' : 'none' }}
                      >
                        {item.word}
                      </div>
                      <div className="text-white/25 text-xs leading-tight mt-0.5">{item.clue}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
