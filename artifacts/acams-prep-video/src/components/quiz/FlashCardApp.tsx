import { useState, useCallback, useRef } from 'react';
import { flashCards, CHAPTERS, type FlashCard } from '@/data/flashCards';
import {
  BookOpen, ChevronLeft, ChevronRight, RotateCcw, Shuffle,
  CheckCircle, XCircle, Eye, Layers
} from 'lucide-react';

type View = 'chapters' | 'deck';
type CardFace = 'front' | 'back';

function useCardDeck(cards: FlashCard[]) {
  const [index, setIndex] = useState(0);
  const [face, setFace] = useState<CardFace>('front');
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [unknown, setUnknown] = useState<Set<number>>(new Set());
  const [isFlipping, setIsFlipping] = useState(false);
  const flipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flip = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);
    flipTimeout.current && clearTimeout(flipTimeout.current);
    flipTimeout.current = setTimeout(() => setIsFlipping(false), 350);
    setFace(f => f === 'front' ? 'back' : 'front');
  }, [isFlipping]);

  const go = useCallback((dir: 1 | -1) => {
    setFace('front');
    setIndex(i => {
      const next = i + dir;
      if (next < 0) return cards.length - 1;
      if (next >= cards.length) return 0;
      return next;
    });
  }, [cards.length]);

  const markKnown = useCallback(() => {
    const id = cards[index]?.id;
    if (!id) return;
    setKnown(s => new Set([...s, id]));
    setUnknown(s => { const n = new Set(s); n.delete(id); return n; });
    go(1);
  }, [cards, index, go]);

  const markUnknown = useCallback(() => {
    const id = cards[index]?.id;
    if (!id) return;
    setUnknown(s => new Set([...s, id]));
    setKnown(s => { const n = new Set(s); n.delete(id); return n; });
    go(1);
  }, [cards, index, go]);

  const reset = useCallback(() => {
    setIndex(0);
    setFace('front');
    setKnown(new Set());
    setUnknown(new Set());
  }, []);

  return { index, face, flip, go, known, unknown, markKnown, markUnknown, reset };
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface DeckProps {
  cards: FlashCard[];
  chapterColor: string;
  chapterLabel: string;
  onBack: () => void;
}

function Deck({ cards, chapterColor, chapterLabel, onBack }: DeckProps) {
  const [deckCards, setDeckCards] = useState(cards);
  const { index, face, flip, go, known, unknown, markKnown, markUnknown, reset } = useCardDeck(deckCards);
  const card = deckCards[index];
  const total = deckCards.length;
  const progress = ((index + 1) / total) * 100;
  const knownCount = known.size;
  const unknownCount = unknown.size;
  const remaining = total - knownCount;

  const isKnown = card ? known.has(card.id) : false;
  const isUnknown = card ? unknown.has(card.id) : false;

  const handleShuffle = () => {
    setDeckCards(shuffle(cards));
    reset();
  };

  if (!card) return null;

  const lines = (face === 'front' ? card.front : card.back).split('\n');

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <div className="shrink-0 px-6 pt-6 pb-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
              <ChevronLeft size={16} /> All Chapters
            </button>
            <span className="text-white/20">·</span>
            <span className="text-sm font-semibold" style={{ color: chapterColor }}>{chapterLabel}</span>
          </div>
          {/* Progress */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, backgroundColor: chapterColor }} />
            </div>
            <span className="text-white/40 text-xs tabular-nums shrink-0">{index + 1} / {total}</span>
          </div>
          {/* Stats row */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
              <CheckCircle size={12} /> {knownCount} got it
            </div>
            <div className="flex items-center gap-1.5 text-red-400 text-xs font-semibold">
              <XCircle size={12} /> {unknownCount} still learning
            </div>
            <div className="ml-auto flex items-center gap-1.5 text-white/30 text-xs">
              <Eye size={12} /> {remaining} remaining
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
        <div className="w-full max-w-2xl">
          {/* Tap instruction */}
          <p className="text-center text-white/25 text-xs mb-4 tracking-wide">
            {face === 'front' ? 'TAP CARD TO REVEAL ANSWER' : 'TAP CARD TO FLIP BACK'}
          </p>

          {/* Card face — perspective container */}
          <div
            onClick={flip}
            className="cursor-pointer select-none"
            style={{ perspective: '1000px' }}
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: face === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                position: 'relative',
                minHeight: '260px',
              }}
            >
              {/* FRONT */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  position: face === 'back' ? 'absolute' : 'relative',
                  inset: 0,
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))`,
                  border: `1px solid ${chapterColor}40`,
                  boxShadow: `0 0 40px ${chapterColor}15`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  minHeight: '260px',
                }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full border" style={{ color: chapterColor, borderColor: `${chapterColor}40`, backgroundColor: `${chapterColor}15` }}>
                  Question
                </div>
                <p className="text-white text-xl font-bold text-center leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {card.front}
                </p>
              </div>

              {/* BACK */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${chapterColor}18, ${chapterColor}08)`,
                  border: `1px solid ${chapterColor}60`,
                  boxShadow: `0 0 50px ${chapterColor}20`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  minHeight: '260px',
                }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full border" style={{ color: chapterColor, borderColor: `${chapterColor}60`, backgroundColor: `${chapterColor}25` }}>
                  Answer
                </div>
                <div className="space-y-1.5 w-full max-w-lg">
                  {lines.map((line, i) => (
                    <p key={i} className={`text-center leading-relaxed ${line.startsWith('•') || /^\d\./.test(line) ? 'text-white/80 text-sm' : 'text-white font-semibold text-base'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Know it / Still learning buttons */}
          {face === 'back' && (
            <div className="flex gap-3 mt-5 justify-center">
              <button
                onClick={markUnknown}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all border ${isUnknown ? 'bg-red-500/30 border-red-400/60 text-red-300' : 'bg-white/5 border-white/10 text-white/60 hover:bg-red-500/20 hover:border-red-400/40 hover:text-red-300'}`}
              >
                <XCircle size={16} /> Still Learning
              </button>
              <button
                onClick={markKnown}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all border ${isKnown ? 'bg-green-500/30 border-green-400/60 text-green-300' : 'bg-white/5 border-white/10 text-white/60 hover:bg-green-500/20 hover:border-green-400/40 hover:text-green-300'}`}
              >
                <CheckCircle size={16} /> Got It
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Nav bar */}
      <div className="shrink-0 px-6 pb-6 pt-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={() => go(-1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm font-medium border border-white/5"
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all text-xs border border-white/5"
              title="Shuffle cards"
            >
              <Shuffle size={14} /> Shuffle
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all text-xs border border-white/5"
              title="Reset progress"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>
          <button
            onClick={() => go(1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm font-medium border border-white/5"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FlashCardApp() {
  const [view, setView] = useState<View>('chapters');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [studyAll, setStudyAll] = useState(false);

  if (view === 'deck' && selectedChapter !== null) {
    const ch = CHAPTERS.find(c => c.number === selectedChapter)!;
    const cards = flashCards.filter(c => c.chapter === selectedChapter);
    return (
      <Deck
        cards={cards}
        chapterColor={ch.color}
        chapterLabel={`Ch. ${ch.number}: ${ch.title}`}
        onBack={() => { setView('chapters'); setSelectedChapter(null); setStudyAll(false); }}
      />
    );
  }

  if (view === 'deck' && studyAll) {
    return (
      <Deck
        cards={flashCards}
        chapterColor="#f59e0b"
        chapterLabel="All 200 Flashcards"
        onBack={() => { setView('chapters'); setSelectedChapter(null); setStudyAll(false); }}
      />
    );
  }

  // Chapter menu
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <div className="px-8 pt-10 pb-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Layers className="text-amber-400" size={26} />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">ACAMS Study Guide</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>200 Flashcards</h1>
          <p className="text-white/50 text-base">20 cards per chapter — tap any chapter to begin</p>
        </div>
      </div>

      {/* Study All button */}
      <div className="px-8 pt-6 pb-0">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => { setStudyAll(true); setView('deck'); }}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl border border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/15 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                <Shuffle size={18} className="text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base">Study All Chapters</div>
                <div className="text-white/40 text-xs">200 cards · All topics shuffled together</div>
              </div>
            </div>
            <ChevronRight size={18} className="text-amber-400/60 group-hover:text-amber-400 transition-colors" />
          </button>
        </div>
      </div>

      {/* Chapter grid */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pb-8">
          {CHAPTERS.map(ch => {
            const cards = flashCards.filter(c => c.chapter === ch.number);
            return (
              <button
                key={ch.number}
                onClick={() => { setSelectedChapter(ch.number); setView('deck'); }}
                className="flex items-start gap-4 p-5 rounded-2xl border bg-white/4 hover:bg-white/7 transition-all text-left group"
                style={{ borderColor: `${ch.color}30` }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg font-black"
                  style={{ backgroundColor: `${ch.color}20`, color: ch.color, border: `1px solid ${ch.color}40` }}
                >
                  {ch.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm leading-snug mb-1 group-hover:text-white transition-colors">
                    {ch.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${ch.color}40` }} />
                      ))}
                    </div>
                    <span className="text-white/30 text-xs">{cards.length} cards</span>
                  </div>
                </div>
                <ChevronRight size={16} className="shrink-0 mt-1 transition-colors" style={{ color: `${ch.color}60` }} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
