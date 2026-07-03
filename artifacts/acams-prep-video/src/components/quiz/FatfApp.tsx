import { useState } from 'react';
import {
  FATF_GROUPS, FATF_RECOMMENDATIONS, MASTER_MNEMONIC, GROUP_BY_LETTER,
  type FatfRecommendation,
} from '@/data/fatfRecommendations';
import {
  Brain, ChevronDown, ChevronLeft, ChevronRight, Dices, Hash,
  Lightbulb, ListOrdered, Sparkles, Target, Trophy, Zap,
} from 'lucide-react';

type View = 'home' | 'learn' | 'numberMatch' | 'groupSort';

const BG = { background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' };

function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Learn view ──────────────────────────────────────────────────────

function LearnView({ onBack }: { onBack: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>('A');
  const [openRec, setOpenRec] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={BG}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
          <ChevronLeft size={16} /> FATF 40 Home
        </button>

        {/* Master mnemonic */}
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">The Master Mnemonic — 7 groups in order</span>
          </div>
          <p className="text-white text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            “{MASTER_MNEMONIC.phrase}.”
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {MASTER_MNEMONIC.breakdown.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-amber-300 font-black w-20 shrink-0">{b.word}</span>
                <span className="text-white/60">= {b.theme}</span>
                <span className="text-white/30 text-xs ml-auto">{b.range}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Groups */}
        <div className="space-y-3 pb-10">
          {FATF_GROUPS.map(g => {
            const recs = FATF_RECOMMENDATIONS.filter(r => r.group === g.letter);
            const open = openGroup === g.letter;
            return (
              <div key={g.letter} className="rounded-2xl border overflow-hidden" style={{ borderColor: `${g.color}35`, background: open ? `${g.color}0c` : 'rgba(255,255,255,0.03)' }}>
                <button
                  onClick={() => setOpenGroup(open ? null : g.letter)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg font-black" style={{ backgroundColor: `${g.color}20`, color: g.color, border: `1px solid ${g.color}40` }}>
                    {g.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">{g.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: g.color }}>{g.range} · {recs.length} recommendation{recs.length > 1 ? 's' : ''}</div>
                  </div>
                  <ChevronDown size={18} className={`text-white/40 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>

                {open && (
                  <div className="px-5 pb-5 space-y-4">
                    {/* Group mnemonic */}
                    <div className="rounded-xl p-4 border" style={{ borderColor: `${g.color}30`, background: `${g.color}12` }}>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Lightbulb size={13} style={{ color: g.color }} />
                        <span className="text-xs font-bold tracking-wider uppercase" style={{ color: g.color }}>Mnemonic</span>
                      </div>
                      <p className="text-white font-bold text-base mb-1.5">{g.mnemonic}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{g.mnemonicExplainer}</p>
                      <p className="text-white/40 text-sm leading-relaxed mt-2 italic">📖 {g.story}</p>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-2">
                      {recs.map(r => {
                        const recOpen = openRec === r.number;
                        return (
                          <div key={r.number} className="rounded-xl border border-white/10 bg-white/4 overflow-hidden">
                            <button
                              onClick={() => setOpenRec(recOpen ? null : r.number)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors"
                            >
                              <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm" style={{ backgroundColor: `${g.color}18`, color: g.color }}>
                                {r.number}
                              </span>
                              <span className="flex-1 text-white/90 text-sm font-semibold">{r.title}</span>
                              <span className="text-lg shrink-0">{r.hookEmoji}</span>
                            </button>
                            {recOpen && (
                              <div className="px-4 pb-4 pt-1 space-y-3">
                                <div className="rounded-lg px-3 py-2.5 text-sm border" style={{ borderColor: `${g.color}30`, background: `${g.color}10` }}>
                                  <span className="font-bold" style={{ color: g.color }}>{r.hookEmoji} Memory hook: </span>
                                  <span className="text-white/85">{r.hook}</span>
                                </div>
                                <p className="text-white/80 text-sm leading-relaxed">{r.essence}</p>
                                <p className="text-white/50 text-sm leading-relaxed">{r.detail}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Number Match game ───────────────────────────────────────────────
// Round: show a recommendation number → pick the right title (or reverse).

interface MatchQuestion {
  rec: FatfRecommendation;
  options: FatfRecommendation[]; // 4 options incl. the answer
  mode: 'numberToTitle' | 'titleToNumber';
}

function makeMatchQuestions(count: number): MatchQuestion[] {
  const picks = shuffleArr(FATF_RECOMMENDATIONS).slice(0, count);
  return picks.map((rec, i) => {
    // Prefer distractors from the same group / nearby numbers — that's what makes it hard
    const near = FATF_RECOMMENDATIONS.filter(r => r.number !== rec.number && (r.group === rec.group || Math.abs(r.number - rec.number) <= 4));
    const pool = near.length >= 3 ? near : FATF_RECOMMENDATIONS.filter(r => r.number !== rec.number);
    const distractors = shuffleArr(pool).slice(0, 3);
    return {
      rec,
      options: shuffleArr([rec, ...distractors]),
      mode: i % 2 === 0 ? 'numberToTitle' : 'titleToNumber',
    };
  });
}

function NumberMatchGame({ onBack }: { onBack: () => void }) {
  const ROUNDS = 10;
  const [questions, setQuestions] = useState(() => makeMatchQuestions(ROUNDS));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null); // rec.number picked
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[index];
  const answered = picked !== null;

  const pick = (n: number) => {
    if (answered) return;
    setPicked(n);
    if (n === q.rec.number) {
      setScore(s => s + 1);
      setStreak(s => {
        const ns = s + 1;
        setBestStreak(b => Math.max(b, ns));
        return ns;
      });
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (index + 1 >= questions.length) { setDone(true); return; }
    setIndex(i => i + 1);
    setPicked(null);
  };

  const restart = () => {
    setQuestions(makeMatchQuestions(ROUNDS));
    setIndex(0); setPicked(null); setScore(0); setStreak(0); setBestStreak(0); setDone(false);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={BG}>
        <div className="max-w-md w-full text-center space-y-5">
          <Trophy size={56} className="mx-auto text-amber-400" />
          <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {pct === 100 ? 'Perfect 10 — like R.10!' : pct >= 70 ? 'Strong recall!' : 'Keep drilling those pegs!'}
          </h2>
          <p className="text-white/60">You matched <span className="text-amber-400 font-bold">{score} / {questions.length}</span> · best streak <span className="text-amber-400 font-bold">{bestStreak}</span></p>
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="px-6 py-3 rounded-xl bg-amber-400 text-gray-900 font-bold text-sm hover:bg-amber-300 transition-all">Play Again</button>
            <button onClick={onBack} className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/15 transition-all border border-white/10">Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="max-w-2xl w-full mx-auto px-6 py-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
            <ChevronLeft size={16} /> Quit
          </button>
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="text-white/40">{index + 1} / {questions.length}</span>
            <span className="text-amber-400 flex items-center gap-1"><Target size={12} /> {score}</span>
            <span className={`flex items-center gap-1 ${streak >= 3 ? 'text-orange-400' : 'text-white/40'}`}><Zap size={12} /> {streak} streak</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {q.mode === 'numberToTitle' ? (
            <>
              <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-4">What is Recommendation…</p>
              <div className="mx-auto w-24 h-24 rounded-3xl bg-amber-400/15 border-2 border-amber-400/50 flex items-center justify-center mb-8">
                <span className="text-5xl font-black text-amber-400" style={{ fontFamily: 'var(--font-display)' }}>{q.rec.number}</span>
              </div>
              <div className="space-y-2.5">
                {q.options.map(opt => {
                  const isAnswer = opt.number === q.rec.number;
                  const isPicked = picked === opt.number;
                  let cls = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10';
                  if (answered && isAnswer) cls = 'bg-green-500/20 border-green-400/60 text-green-200';
                  else if (answered && isPicked) cls = 'bg-red-500/20 border-red-400/60 text-red-200';
                  else if (answered) cls = 'bg-white/3 border-white/5 text-white/30';
                  return (
                    <button key={opt.number} onClick={() => pick(opt.number)} disabled={answered}
                      className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all ${cls}`}>
                      {opt.title}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-4">Which number is…</p>
              <p className="text-center text-white text-xl font-bold mb-8 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                “{q.rec.title}”
              </p>
              <div className="grid grid-cols-4 gap-3">
                {q.options.map(opt => {
                  const isAnswer = opt.number === q.rec.number;
                  const isPicked = picked === opt.number;
                  let cls = 'bg-white/5 border-white/10 text-white hover:bg-white/10';
                  if (answered && isAnswer) cls = 'bg-green-500/20 border-green-400/60 text-green-200';
                  else if (answered && isPicked) cls = 'bg-red-500/20 border-red-400/60 text-red-200';
                  else if (answered) cls = 'bg-white/3 border-white/5 text-white/30';
                  return (
                    <button key={opt.number} onClick={() => pick(opt.number)} disabled={answered}
                      className={`py-5 rounded-xl border text-2xl font-black transition-all ${cls}`} style={{ fontFamily: 'var(--font-display)' }}>
                      {opt.number}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Feedback + hook reinforcement */}
          {answered && (
            <div className="mt-6 rounded-xl border border-amber-400/25 bg-amber-400/8 px-4 py-3">
              <p className="text-sm text-white/85">
                <span className="mr-1.5">{q.rec.hookEmoji}</span>
                <span className="text-amber-300 font-bold">R.{q.rec.number} — {q.rec.title}. </span>
                <span className="text-white/60">{q.rec.hook}</span>
              </p>
            </div>
          )}
        </div>

        <div className="pt-5 pb-2 flex justify-center">
          {answered && (
            <button onClick={next} className="flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-400 text-gray-900 font-bold text-sm hover:bg-amber-300 transition-all">
              {index + 1 >= questions.length ? 'See Results' : 'Next'} <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Group Sort game ─────────────────────────────────────────────────
// Show a recommendation → player assigns it to group A–G.

function GroupSortGame({ onBack }: { onBack: () => void }) {
  const ROUNDS = 12;
  const [deck, setDeck] = useState(() => shuffleArr(FATF_RECOMMENDATIONS).slice(0, ROUNDS));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const rec = deck[index];
  const answered = picked !== null;
  const correctGroup = rec ? GROUP_BY_LETTER.get(rec.group) : undefined;

  const pick = (letter: string) => {
    if (answered) return;
    setPicked(letter);
    if (letter === rec.group) setScore(s => s + 1);
  };

  const next = () => {
    if (index + 1 >= deck.length) { setDone(true); return; }
    setIndex(i => i + 1);
    setPicked(null);
  };

  const restart = () => {
    setDeck(shuffleArr(FATF_RECOMMENDATIONS).slice(0, ROUNDS));
    setIndex(0); setPicked(null); setScore(0); setDone(false);
  };

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={BG}>
        <div className="max-w-md w-full text-center space-y-5">
          <Trophy size={56} className="mx-auto text-violet-400" />
          <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {score === deck.length ? 'Purple Monkeys are proud!' : 'Round complete!'}
          </h2>
          <p className="text-white/60">You sorted <span className="text-violet-400 font-bold">{score} / {deck.length}</span> correctly.</p>
          <p className="text-white/40 text-sm italic">Remember: “{MASTER_MNEMONIC.phrase}.”</p>
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="px-6 py-3 rounded-xl bg-violet-500 text-white font-bold text-sm hover:bg-violet-400 transition-all">Play Again</button>
            <button onClick={onBack} className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/15 transition-all border border-white/10">Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="max-w-2xl w-full mx-auto px-6 py-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
            <ChevronLeft size={16} /> Quit
          </button>
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="text-white/40">{index + 1} / {deck.length}</span>
            <span className="text-violet-400 flex items-center gap-1"><Target size={12} /> {score}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-4">Which group does this belong to?</p>
          <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-7 mb-7 text-center">
            <div className="text-4xl mb-2">{rec.hookEmoji}</div>
            <p className="text-white text-lg font-bold leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
              R.? — {rec.title}
            </p>
            <p className="text-white/50 text-sm mt-2">{rec.essence}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {FATF_GROUPS.map(g => {
              const isAnswer = g.letter === rec.group;
              const isPicked = picked === g.letter;
              let style: React.CSSProperties = { borderColor: `${g.color}30` };
              let cls = 'bg-white/4 text-white/75 hover:bg-white/8';
              if (answered && isAnswer) { cls = 'text-green-200'; style = { borderColor: 'rgba(74,222,128,0.6)', background: 'rgba(34,197,94,0.15)' }; }
              else if (answered && isPicked) { cls = 'text-red-200'; style = { borderColor: 'rgba(248,113,113,0.6)', background: 'rgba(239,68,68,0.15)' }; }
              else if (answered) { cls = 'text-white/25 bg-white/2'; }
              return (
                <button key={g.letter} onClick={() => pick(g.letter)} disabled={answered}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-sm font-semibold transition-all ${cls}`} style={style}>
                  <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs" style={{ backgroundColor: `${g.color}20`, color: g.color }}>
                    {g.letter}
                  </span>
                  <span className="flex-1">{g.name}</span>
                  <span className="text-white/30 text-xs">{g.range}</span>
                </button>
              );
            })}
          </div>

          {answered && correctGroup && (
            <div className="mt-5 rounded-xl border px-4 py-3" style={{ borderColor: `${correctGroup.color}35`, background: `${correctGroup.color}10` }}>
              <p className="text-sm text-white/85">
                <span className="font-bold" style={{ color: correctGroup.color }}>R.{rec.number} is in Group {correctGroup.letter} ({correctGroup.range}). </span>
                <span className="text-white/60">{correctGroup.mnemonic}</span>
              </p>
            </div>
          )}
        </div>

        <div className="pt-5 pb-2 flex justify-center">
          {answered && (
            <button onClick={next} className="flex items-center gap-2 px-8 py-3 rounded-xl bg-violet-500 text-white font-bold text-sm hover:bg-violet-400 transition-all">
              {index + 1 >= deck.length ? 'See Results' : 'Next'} <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Home / menu ─────────────────────────────────────────────────────

export default function FatfApp() {
  const [view, setView] = useState<View>('home');
  const back = () => setView('home');

  if (view === 'learn') return <LearnView onBack={back} />;
  if (view === 'numberMatch') return <NumberMatchGame onBack={back} />;
  if (view === 'groupSort') return <GroupSortGame onBack={back} />;

  const totalRecs = FATF_RECOMMENDATIONS.length;
  const modes = [
    {
      key: 'learn' as View, icon: Brain, color: '#f59e0b',
      title: 'Learn with Mnemonics',
      desc: `All ${totalRecs} recommendations organized into 7 groups — each with a mnemonic, a story, and a number-peg memory hook.`,
      cta: 'Start learning',
    },
    {
      key: 'numberMatch' as View, icon: Hash, color: '#f97316',
      title: 'Number Match',
      desc: 'Rapid-fire rounds: see a number, pick the recommendation — or the reverse. Build streaks; distractors come from neighboring numbers.',
      cta: '10 rounds',
    },
    {
      key: 'groupSort' as View, icon: ListOrdered, color: '#8b5cf6',
      title: 'Group Sort',
      desc: 'Sort recommendations into the 7 official groups (A–G). Trains the structure the exam loves to test.',
      cta: '12 rounds',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="px-8 pt-10 pb-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Dices className="text-amber-400" size={26} />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Certification Power-Up</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>The FATF 40, Memorized</h1>
          <p className="text-white/50 text-base">Mnemonics, stories, and games to lock all 40 Recommendations into long-term memory.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto space-y-3 pb-8">
          {/* Master mnemonic teaser */}
          <div className="rounded-2xl border border-white/10 bg-white/4 px-6 py-4 flex items-center gap-3">
            <Sparkles size={18} className="text-amber-400 shrink-0" />
            <p className="text-white/70 text-sm">
              The 7 groups, in order: <span className="text-amber-300 font-bold italic">“{MASTER_MNEMONIC.phrase}.”</span>
            </p>
          </div>

          {modes.map(m => (
            <button
              key={m.key}
              onClick={() => setView(m.key)}
              className="w-full flex items-start gap-4 p-6 rounded-2xl border bg-white/4 hover:bg-white/7 transition-all text-left group"
              style={{ borderColor: `${m.color}30` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${m.color}20`, border: `1px solid ${m.color}40` }}>
                <m.icon size={22} style={{ color: m.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-base mb-1">{m.title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{m.desc}</div>
                <div className="text-xs font-bold mt-2" style={{ color: m.color }}>{m.cta} →</div>
              </div>
              <ChevronRight size={18} className="shrink-0 mt-3 text-white/20 group-hover:text-white/50 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
