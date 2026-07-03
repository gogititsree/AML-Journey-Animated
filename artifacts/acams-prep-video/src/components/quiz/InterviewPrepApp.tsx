import { useState } from 'react';
import {
  INTERVIEW_CATEGORIES, STAR_GUIDE, interviewQuestions,
  type InterviewQuestion,
} from '@/data/interviewPrep';
import {
  Briefcase, ChevronLeft, ChevronRight, Eye, Lightbulb, Mic,
  Star, ThumbsDown, ThumbsUp, Timer, Trophy,
} from 'lucide-react';

type View = 'home' | 'star' | 'category' | 'mock';

const BG = { background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' };

function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function catOf(q: InterviewQuestion) {
  return INTERVIEW_CATEGORIES.find(c => c.key === q.category)!;
}

// ─── Answer body renderer (handles '\n' lines and '•' bullets) ───────

function AnswerBody({ text }: { text: string }) {
  return (
    <div className="space-y-1.5">
      {text.split('\n').map((line, i) => {
        const isBullet = line.startsWith('•') || /^\d\./.test(line);
        return (
          <p key={i} className={`leading-relaxed ${isBullet ? 'text-white/70 text-sm pl-3' : 'text-white/85 text-sm font-medium'}`}>
            {line}
          </p>
        );
      })}
    </div>
  );
}

// ─── Question card with reveal ───────────────────────────────────────

function QuestionCard({ q, color }: { q: InterviewQuestion; color: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 overflow-hidden">
      <div className="px-5 pt-5 pb-4">
        <p className="text-white font-bold text-base leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
          {q.question}
        </p>
      </div>
      {revealed ? (
        <div className="px-5 pb-5 space-y-4">
          <div className="rounded-xl border p-4" style={{ borderColor: `${color}30`, background: `${color}0c` }}>
            <div className="flex items-center gap-1.5 mb-2.5">
              <Star size={13} style={{ color }} />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color }}>Model answer / talking points</span>
            </div>
            <AnswerBody text={q.answerGuide} />
          </div>
          <div className="rounded-xl border border-amber-400/25 bg-amber-400/8 px-4 py-3">
            <p className="text-sm text-white/80">
              <Lightbulb size={13} className="inline mr-1.5 -mt-0.5 text-amber-400" />
              <span className="text-amber-300 font-bold">Insider tip: </span>{q.tip}
            </p>
          </div>
          <button onClick={() => setRevealed(false)} className="text-white/40 hover:text-white text-xs font-semibold transition-colors">
            Hide answer
          </button>
        </div>
      ) : (
        <div className="px-5 pb-5">
          <p className="text-white/40 text-xs mb-3 italic">Say your answer out loud first — then compare.</p>
          <button
            onClick={() => setRevealed(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border"
            style={{ borderColor: `${color}40`, background: `${color}15`, color }}
          >
            <Eye size={15} /> Reveal model answer
          </button>
        </div>
      )}
    </div>
  );
}

// ─── STAR guide view ─────────────────────────────────────────────────

function StarView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={BG}>
      <div className="max-w-2xl mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
          <ChevronLeft size={16} /> Interview Prep Home
        </button>
        <h1 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{STAR_GUIDE.title}</h1>
        <p className="text-white/55 text-sm leading-relaxed mb-7">{STAR_GUIDE.intro}</p>

        <div className="space-y-3 mb-8">
          {STAR_GUIDE.steps.map(s => (
            <div key={s.letter} className="flex gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/6 p-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-2xl font-black text-amber-400" style={{ fontFamily: 'var(--font-display)' }}>
                {s.letter}
              </div>
              <div>
                <div className="text-white font-bold text-base mb-1">{s.name}</div>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/4 p-5 mb-10">
          <div className="flex items-center gap-1.5 mb-3">
            <Lightbulb size={14} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase">Pro tips for compliance interviews</span>
          </div>
          <ul className="space-y-2.5">
            {STAR_GUIDE.proTips.map((t, i) => (
              <li key={i} className="text-white/70 text-sm leading-relaxed flex gap-2.5">
                <span className="text-amber-400 shrink-0">✦</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Category browse view ────────────────────────────────────────────

function CategoryView({ catKey, onBack }: { catKey: string; onBack: () => void }) {
  const cat = INTERVIEW_CATEGORIES.find(c => c.key === catKey)!;
  const qs = interviewQuestions.filter(q => q.category === catKey);
  return (
    <div className="min-h-screen" style={BG}>
      <div className="max-w-2xl mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
          <ChevronLeft size={16} /> All Categories
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{cat.icon}</span>
          <h1 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{cat.title}</h1>
        </div>
        <p className="text-white/50 text-sm mb-7">{cat.blurb}</p>
        <div className="space-y-4 pb-10">
          {qs.map(q => <QuestionCard key={q.id} q={q} color={cat.color} />)}
        </div>
      </div>
    </div>
  );
}

// ─── Mock interview mode ─────────────────────────────────────────────

type MockPhase = 'question' | 'revealed';

function MockInterview({ onBack }: { onBack: () => void }) {
  const COUNT = 8;
  const [deck, setDeck] = useState(() =>
    shuffleArr(interviewQuestions.filter(q => q.category !== 'askthem')).slice(0, COUNT));
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<MockPhase>('question');
  const [ratings, setRatings] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = deck[index];
  const cat = q ? catOf(q) : undefined;

  const rate = (good: boolean) => {
    const next = [...ratings, good];
    setRatings(next);
    if (index + 1 >= deck.length) { setDone(true); return; }
    setIndex(i => i + 1);
    setPhase('question');
  };

  const restart = () => {
    setDeck(shuffleArr(interviewQuestions.filter(qq => qq.category !== 'askthem')).slice(0, COUNT));
    setIndex(0); setPhase('question'); setRatings([]); setDone(false);
  };

  if (done) {
    const good = ratings.filter(Boolean).length;
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={BG}>
        <div className="max-w-md w-full text-center space-y-5">
          <Trophy size={56} className="mx-auto text-emerald-400" />
          <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>Mock interview complete</h2>
          <p className="text-white/60">You felt strong on <span className="text-emerald-400 font-bold">{good} / {deck.length}</span> answers.</p>
          <p className="text-white/40 text-sm">Revisit the categories where you rated yourself “needs work” — then run another round. Interviewing is a rep sport.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={restart} className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-400 transition-all">New Round</button>
            <button onClick={onBack} className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/15 transition-all border border-white/10">Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="max-w-2xl w-full mx-auto px-6 py-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
            <ChevronLeft size={16} /> End Interview
          </button>
          <span className="text-white/40 text-xs font-bold">Question {index + 1} of {deck.length}</span>
        </div>

        <div className="flex-1 flex flex-col justify-center pb-6">
          {cat && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{cat.icon}</span>
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: cat.color }}>{cat.title}</span>
            </div>
          )}
          <p className="text-white text-2xl font-bold leading-snug mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {q.question}
          </p>

          {phase === 'question' ? (
            <>
              <div className="rounded-xl border border-white/10 bg-white/4 px-4 py-3 mb-6 flex items-center gap-2.5">
                <Timer size={15} className="text-emerald-400 shrink-0" />
                <p className="text-white/55 text-sm">Answer <span className="text-white/85 font-semibold">out loud</span>, as if the interviewer were across the table. Aim for 60–120 seconds.</p>
              </div>
              <button
                onClick={() => setPhase('revealed')}
                className="self-start flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-400 transition-all"
              >
                <Eye size={15} /> I answered — show me the model answer
              </button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border p-4 max-h-72 overflow-y-auto" style={{ borderColor: `${cat!.color}30`, background: `${cat!.color}0c` }}>
                <AnswerBody text={q.answerGuide} />
              </div>
              <div className="rounded-xl border border-amber-400/25 bg-amber-400/8 px-4 py-3">
                <p className="text-sm text-white/80">
                  <span className="text-amber-300 font-bold">Insider tip: </span>{q.tip}
                </p>
              </div>
              <div className="pt-2">
                <p className="text-white/45 text-xs mb-3 tracking-wide uppercase font-bold">Honest self-check — how was your answer?</p>
                <div className="flex gap-3">
                  <button onClick={() => rate(false)} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-red-400/30 text-red-300 font-bold text-sm hover:bg-red-500/15 transition-all">
                    <ThumbsDown size={15} /> Needs work
                  </button>
                  <button onClick={() => rate(true)} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-green-400/30 text-green-300 font-bold text-sm hover:bg-green-500/15 transition-all">
                    <ThumbsUp size={15} /> Nailed it
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Home ────────────────────────────────────────────────────────────

export default function InterviewPrepApp() {
  const [view, setView] = useState<View>('home');
  const [catKey, setCatKey] = useState<string | null>(null);
  const back = () => { setView('home'); setCatKey(null); };

  if (view === 'star') return <StarView onBack={back} />;
  if (view === 'mock') return <MockInterview onBack={back} />;
  if (view === 'category' && catKey) return <CategoryView catKey={catKey} onBack={back} />;

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="px-8 pt-10 pb-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-emerald-400" size={26} />
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Land the Role</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>AML Interview Prep</h1>
          <p className="text-white/50 text-base">{interviewQuestions.length} questions with model answers and insider tips — plus a mock interview simulator.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto space-y-3 pb-8">
          {/* Mock interview CTA */}
          <button
            onClick={() => setView('mock')}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/15 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                <Mic size={18} className="text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base">Mock Interview</div>
                <div className="text-white/40 text-xs">8 random questions · answer out loud · honest self-rating</div>
              </div>
            </div>
            <ChevronRight size={18} className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
          </button>

          {/* STAR guide */}
          <button
            onClick={() => setView('star')}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl border border-amber-400/30 bg-amber-400/8 hover:bg-amber-400/12 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                <Star size={18} className="text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base">The STAR Method</div>
                <div className="text-white/40 text-xs">How to structure every behavioral answer — with compliance-specific pro tips</div>
              </div>
            </div>
            <ChevronRight size={18} className="text-amber-400/60 group-hover:text-amber-400 transition-colors" />
          </button>

          {/* Category grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {INTERVIEW_CATEGORIES.map(cat => {
              const count = interviewQuestions.filter(q => q.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => { setCatKey(cat.key); setView('category'); }}
                  className="flex items-start gap-4 p-5 rounded-2xl border bg-white/4 hover:bg-white/7 transition-all text-left group"
                  style={{ borderColor: `${cat.color}30` }}
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm leading-snug mb-1">{cat.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{cat.blurb}</div>
                    <div className="text-xs font-bold mt-1.5" style={{ color: cat.color }}>{count} question{count > 1 ? 's' : ''}</div>
                  </div>
                  <ChevronRight size={16} className="shrink-0 mt-1 text-white/20 group-hover:text-white/50 transition-colors" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
