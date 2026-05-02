import { useState, useEffect, useCallback, useRef } from 'react';
import { getCrossword, type PlacedWord, type CWGrid } from '@/utils/crosswordGenerator';
import { CheckCircle, Eye, RotateCcw, Grid3x3, ChevronRight } from 'lucide-react';

type Direction = 'across' | 'down';

interface CellPos { r: number; c: number; }

function getWordCells(word: PlacedWord): CellPos[] {
  const cells: CellPos[] = [];
  for (let i = 0; i < word.word.length; i++) {
    cells.push(
      word.direction === 'across'
        ? { r: word.row, c: word.col + i }
        : { r: word.row + i, c: word.col }
    );
  }
  return cells;
}

function findWordAt(words: PlacedWord[], r: number, c: number, dir: Direction): PlacedWord | undefined {
  return words.find(w => {
    if (w.direction !== dir) return false;
    const cells = getWordCells(w);
    return cells.some(cell => cell.r === r && cell.c === c);
  });
}

function findWordsAt(words: PlacedWord[], r: number, c: number): PlacedWord[] {
  return words.filter(w => getWordCells(w).some(cell => cell.r === r && cell.c === c));
}

export default function CrosswordApp() {
  const { grid, words } = getCrossword();

  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  const [userGrid, setUserGrid] = useState<string[][]>(
    () => Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (grid[r][c].isBlack ? '#' : ''))
    )
  );
  const [selected, setSelected] = useState<CellPos | null>(null);
  const [dir, setDir] = useState<Direction>('across');
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [completed, setCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Timer
  useEffect(() => {
    if (!timerActive || completed) return;
    const id = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [timerActive, completed]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const activeWord = selected
    ? findWordAt(words, selected.r, selected.c, dir) ??
      findWordsAt(words, selected.r, selected.c)[0]
    : null;

  const isCellInActiveWord = useCallback((r: number, c: number) => {
    if (!activeWord) return false;
    return getWordCells(activeWord).some(cell => cell.r === r && cell.c === c);
  }, [activeWord]);

  const isCellCorrect = (r: number, c: number) => {
    if (!checked) return null;
    if (grid[r][c].isBlack) return null;
    return userGrid[r][c].toUpperCase() === grid[r][c].letter;
  };

  const countCorrect = () => {
    let correct = 0;
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!grid[r][c].isBlack) {
          total++;
          if (userGrid[r][c].toUpperCase() === grid[r][c].letter) correct++;
        }
      }
    }
    return { correct, total };
  };

  const advanceCursor = useCallback((r: number, c: number, d: Direction) => {
    if (d === 'across') {
      if (c + 1 < cols && !grid[r][c + 1].isBlack) setSelected({ r, c: c + 1 });
    } else {
      if (r + 1 < rows && !grid[r + 1][c].isBlack) setSelected({ r: r + 1, c });
    }
  }, [cols, rows, grid]);

  const retreatCursor = useCallback((r: number, c: number, d: Direction) => {
    if (d === 'across') {
      if (c - 1 >= 0 && !grid[r][c - 1].isBlack) setSelected({ r, c: c - 1 });
    } else {
      if (r - 1 >= 0 && !grid[r - 1][c].isBlack) setSelected({ r: r - 1, c });
    }
  }, [grid]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!selected) return;
    const { r, c } = selected;

    if (e.key === 'Tab') {
      e.preventDefault();
      setDir(d => d === 'across' ? 'down' : 'across');
      return;
    }

    if (e.key === 'ArrowRight') { e.preventDefault(); if (c + 1 < cols && !grid[r][c + 1].isBlack) setSelected({ r, c: c + 1 }); setDir('across'); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); if (c - 1 >= 0 && !grid[r][c - 1].isBlack) setSelected({ r, c: c - 1 }); setDir('across'); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); if (r + 1 < rows && !grid[r + 1][c].isBlack) setSelected({ r: r + 1, c }); setDir('down'); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); if (r - 1 >= 0 && !grid[r - 1][c].isBlack) setSelected({ r: r - 1, c }); setDir('down'); return; }

    if (e.key === 'Backspace') {
      e.preventDefault();
      const newGrid = userGrid.map(row => [...row]);
      if (userGrid[r][c] === '') {
        retreatCursor(r, c, dir);
        const prev = dir === 'across' ? { r, c: c - 1 } : { r: r - 1, c };
        if (prev.r >= 0 && prev.c >= 0 && !grid[prev.r][prev.c].isBlack) {
          newGrid[prev.r][prev.c] = '';
        }
      } else {
        newGrid[r][c] = '';
      }
      setUserGrid(newGrid);
      setChecked(false);
      return;
    }

    if (e.key === 'Delete') {
      e.preventDefault();
      const newGrid = userGrid.map(row => [...row]);
      newGrid[r][c] = '';
      setUserGrid(newGrid);
      setChecked(false);
      return;
    }

    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
      const letter = e.key.toUpperCase();
      const newGrid = userGrid.map(row => [...row]);
      newGrid[r][c] = letter;
      setUserGrid(newGrid);
      setChecked(false);
      advanceCursor(r, c, dir);

      // Check completion
      let allFilled = true;
      for (let rr = 0; rr < rows; rr++) {
        for (let cc = 0; cc < cols; cc++) {
          if (!grid[rr][cc].isBlack && (rr === r && cc === c ? letter : newGrid[rr][cc]) === '') {
            allFilled = false;
          }
        }
      }
      if (allFilled) {
        let allCorrect = true;
        for (let rr = 0; rr < rows; rr++) {
          for (let cc = 0; cc < cols; cc++) {
            if (!grid[rr][cc].isBlack) {
              const v = rr === r && cc === c ? letter : newGrid[rr][cc];
              if (v.toUpperCase() !== grid[rr][cc].letter) allCorrect = false;
            }
          }
        }
        if (allCorrect) { setCompleted(true); setTimerActive(false); }
      }
    }
  }, [selected, dir, userGrid, rows, cols, grid, advanceCursor, retreatCursor]);

  const handleCellClick = (r: number, c: number) => {
    if (grid[r][c].isBlack) return;
    if (selected?.r === r && selected?.c === c) {
      // Toggle direction if cell has both across and down words
      const hasAcross = !!findWordAt(words, r, c, 'across');
      const hasDown = !!findWordAt(words, r, c, 'down');
      if (hasAcross && hasDown) setDir(d => d === 'across' ? 'down' : 'across');
    } else {
      setSelected({ r, c });
      // Pick the direction that makes sense
      const hasCurrentDir = !!findWordAt(words, r, c, dir);
      if (!hasCurrentDir) {
        const other: Direction = dir === 'across' ? 'down' : 'across';
        if (findWordAt(words, r, c, other)) setDir(other);
      }
    }
    inputRef.current?.focus();
  };

  const handleClueClick = (word: PlacedWord) => {
    setSelected({ r: word.row, c: word.col });
    setDir(word.direction);
    inputRef.current?.focus();
  };

  const checkAnswers = () => {
    setChecked(true);
    const { correct, total } = countCorrect();
    if (correct === total) { setCompleted(true); setTimerActive(false); }
  };

  const revealLetter = () => {
    if (!selected) return;
    const { r, c } = selected;
    if (grid[r][c].isBlack) return;
    const newGrid = userGrid.map(row => [...row]);
    newGrid[r][c] = grid[r][c].letter;
    setUserGrid(newGrid);
    setRevealed(s => new Set([...s, `${r},${c}`]));
    advanceCursor(r, c, dir);
  };

  const revealWord = () => {
    if (!activeWord) return;
    const newGrid = userGrid.map(row => [...row]);
    const newRevealed = new Set(revealed);
    getWordCells(activeWord).forEach(({ r, c }) => {
      newGrid[r][c] = grid[r][c].letter;
      newRevealed.add(`${r},${c}`);
    });
    setUserGrid(newGrid);
    setRevealed(newRevealed);
  };

  const reset = () => {
    setUserGrid(Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (grid[r][c].isBlack ? '#' : ''))
    ));
    setSelected(null);
    setChecked(false);
    setRevealed(new Set());
    setCompleted(false);
    setTimer(0);
    setTimerActive(true);
  };

  const { correct, total } = countCorrect();
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const acrossWords = words.filter(w => w.direction === 'across').sort((a, b) => a.number - b.number);
  const downWords = words.filter(w => w.direction === 'down').sort((a, b) => a.number - b.number);

  // Cell sizing based on grid dimensions
  const maxCellSize = Math.min(38, Math.floor(360 / Math.max(cols, rows)));
  const cellSize = Math.max(24, maxCellSize);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={el => el?.focus()}
    >
      {/* Hidden input to capture mobile keyboard */}
      <input
        ref={inputRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        onKeyDown={handleKeyDown as unknown as React.KeyboardEventHandler<HTMLInputElement>}
        readOnly
      />

      {/* Header */}
      <div className="shrink-0 px-6 pt-6 pb-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Grid3x3 size={20} className="text-violet-400" />
              <span className="text-violet-400 text-xs font-bold tracking-widest uppercase">ACAMS AML/KYC</span>
            </div>
            <h1 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Crossword Puzzle
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-violet-400 font-black text-lg tabular-nums">{formatTime(timer)}</div>
              <div className="text-white/30 text-xs">Time</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <div className="text-amber-400 font-black text-lg">{pct}%</div>
              <div className="text-white/30 text-xs">{correct}/{total} cells</div>
            </div>
            <button onClick={checkAnswers} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all">
              <CheckCircle size={15} /> Check
            </button>
            <button onClick={revealLetter} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 text-white/70 hover:text-white font-bold text-sm transition-all border border-white/10">
              <Eye size={15} /> Letter
            </button>
            <button onClick={revealWord} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 text-white/70 hover:text-white font-bold text-sm transition-all border border-white/10">
              <Eye size={15} /> Word
            </button>
            <button onClick={reset} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all border border-white/5 text-sm">
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* Completion banner */}
      {completed && (
        <div className="shrink-0 mx-6 mt-4 p-4 rounded-2xl border border-green-400/40 bg-green-400/10 flex items-center gap-3">
          <CheckCircle size={24} className="text-green-400 shrink-0" />
          <div>
            <p className="text-green-300 font-black text-lg">Puzzle Complete! 🎉</p>
            <p className="text-green-400/70 text-sm">Finished in {formatTime(timer)} · {words.length} words solved</p>
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col xl:flex-row gap-6">

          {/* Grid */}
          <div className="shrink-0 flex flex-col items-center">
            {/* Active clue */}
            {activeWord && (
              <div className="w-full mb-3 px-4 py-3 rounded-xl bg-violet-500/15 border border-violet-400/30">
                <span className="text-violet-300 font-bold text-sm mr-2">{activeWord.number} {activeWord.direction.toUpperCase()}</span>
                <span className="text-white/80 text-sm">{activeWord.clue}</span>
              </div>
            )}

            {/* Tab indicator */}
            <p className="text-white/20 text-xs mb-3 self-end">Click cell · Tab toggles direction · Type letters</p>

            {/* Crossword grid */}
            <div
              className="rounded-xl overflow-hidden border border-white/10"
              style={{ display: 'inline-block', background: '#0d1a2e' }}
            >
              {grid.map((row, r) => (
                <div key={r} style={{ display: 'flex' }}>
                  {row.map((cell, c) => {
                    if (cell.isBlack) {
                      return (
                        <div
                          key={c}
                          style={{ width: cellSize, height: cellSize, background: '#060c18', flexShrink: 0 }}
                        />
                      );
                    }

                    const isSelected = selected?.r === r && selected?.c === c;
                    const isActiveWord = isCellInActiveWord(r, c);
                    const isCorrect = isCellCorrect(r, c);
                    const isRevd = revealed.has(`${r},${c}`);
                    const userLetter = userGrid[r]?.[c] ?? '';

                    let bg = 'rgba(255,255,255,0.06)';
                    if (isSelected) bg = '#7c3aed';
                    else if (isActiveWord) bg = 'rgba(124,58,237,0.25)';

                    let border = '1px solid rgba(255,255,255,0.08)';
                    if (isSelected) border = '2px solid #a78bfa';

                    let letterColor = '#e2e8f0';
                    if (isRevd) letterColor = '#f59e0b';
                    else if (checked && isCorrect === true) letterColor = '#4ade80';
                    else if (checked && isCorrect === false && userLetter) letterColor = '#f87171';

                    return (
                      <div
                        key={c}
                        onClick={() => handleCellClick(r, c)}
                        style={{
                          width: cellSize,
                          height: cellSize,
                          background: bg,
                          border,
                          flexShrink: 0,
                          position: 'relative',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          userSelect: 'none',
                          transition: 'background 0.1s',
                          boxSizing: 'border-box',
                        }}
                      >
                        {cell.number != null && (
                          <span style={{
                            position: 'absolute',
                            top: 1,
                            left: 2,
                            fontSize: Math.max(7, cellSize * 0.25),
                            lineHeight: 1,
                            color: isSelected ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                            fontWeight: 700,
                          }}>
                            {cell.number}
                          </span>
                        )}
                        <span style={{
                          fontSize: Math.max(10, cellSize * 0.52),
                          fontWeight: 800,
                          color: letterColor,
                          lineHeight: 1,
                          fontFamily: 'var(--font-display)',
                        }}>
                          {userLetter}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-3 text-xs text-white/30">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-violet-500 inline-block" /> Selected</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-violet-500/25 inline-block" /> Active word</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-400/60 inline-block" /> Revealed</span>
            </div>
          </div>

          {/* Clues panels */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
            {/* Across */}
            <div>
              <h3 className="text-white font-black text-base mb-3 flex items-center gap-2">
                <ChevronRight size={16} className="text-violet-400" /> ACROSS
              </h3>
              <div className="space-y-1">
                {acrossWords.map(w => {
                  const isActive = activeWord?.number === w.number && activeWord?.direction === 'across';
                  const wordCells = getWordCells(w);
                  const allCorrect = wordCells.every(({ r, c }) => userGrid[r]?.[c]?.toUpperCase() === grid[r]?.[c]?.letter);
                  return (
                    <button
                      key={`a-${w.number}`}
                      onClick={() => handleClueClick(w)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all text-xs leading-snug ${
                        isActive
                          ? 'bg-violet-500/25 border border-violet-400/50 text-white'
                          : allCorrect
                          ? 'bg-green-500/10 border border-green-400/20 text-green-300/70'
                          : 'bg-white/3 border border-white/5 text-white/55 hover:bg-white/7 hover:text-white/80'
                      }`}
                    >
                      <span className="font-black mr-1.5" style={{ color: isActive ? '#a78bfa' : allCorrect ? '#4ade80' : '#6366f1' }}>
                        {w.number}.
                      </span>
                      {w.clue}
                      {allCorrect && <span className="ml-1 text-green-400">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Down */}
            <div>
              <h3 className="text-white font-black text-base mb-3 flex items-center gap-2">
                <ChevronRight size={16} className="text-violet-400 rotate-90" style={{ transform: 'rotate(90deg)' }} /> DOWN
              </h3>
              <div className="space-y-1">
                {downWords.map(w => {
                  const isActive = activeWord?.number === w.number && activeWord?.direction === 'down';
                  const wordCells = getWordCells(w);
                  const allCorrect = wordCells.every(({ r, c }) => userGrid[r]?.[c]?.toUpperCase() === grid[r]?.[c]?.letter);
                  return (
                    <button
                      key={`d-${w.number}`}
                      onClick={() => handleClueClick(w)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all text-xs leading-snug ${
                        isActive
                          ? 'bg-violet-500/25 border border-violet-400/50 text-white'
                          : allCorrect
                          ? 'bg-green-500/10 border border-green-400/20 text-green-300/70'
                          : 'bg-white/3 border border-white/5 text-white/55 hover:bg-white/7 hover:text-white/80'
                      }`}
                    >
                      <span className="font-black mr-1.5" style={{ color: isActive ? '#a78bfa' : allCorrect ? '#4ade80' : '#6366f1' }}>
                        {w.number}.
                      </span>
                      {w.clue}
                      {allCorrect && <span className="ml-1 text-green-400">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
