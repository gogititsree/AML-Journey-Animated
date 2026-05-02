import { useState, useMemo, useCallback } from 'react';
import { mockTests, type MockTest } from '@/data/mockTests';
import { type QuizQuestion } from '@/data/quizQuestions';
import {
  ClipboardList, ChevronRight, ChevronLeft, CheckCircle, XCircle,
  RotateCcw, Trophy, BookOpen, Clock, Target
} from 'lucide-react';

type Screen = 'menu' | 'test' | 'results';

interface AnswerState {
  selected: number | null;
  confirmed: boolean;
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const color = pct >= 80 ? '#4ade80' : pct >= 70 ? '#facc15' : pct >= 60 ? '#fb923c' : '#f87171';
  return (
    <svg width={128} height={128} viewBox="0 0 128 128">
      <circle cx={64} cy={64} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={10} />
      <circle
        cx={64} cy={64} r={r} fill="none"
        stroke={color} strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 64 64)"
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
      <text x={64} y={60} textAnchor="middle" fill="white" fontSize={26} fontWeight="900" fontFamily="inherit">
        {pct}%
      </text>
      <text x={64} y={80} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={11} fontFamily="inherit">
        SCORE
      </text>
    </svg>
  );
}

export default function MockTestApp() {
  const [screen, setScreen] = useState<Screen>('menu');
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const startTest = useCallback((test: MockTest) => {
    setActiveTest(test);
    setCurrentIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setScreen('test');
  }, []);

  const current: QuizQuestion | undefined = activeTest?.questions[currentIndex];
  const answerState = current ? answers[current.id] : null;
  const isConfirmed = answerState?.confirmed ?? false;

  const selectAnswer = (idx: number) => {
    if (isConfirmed || !current) return;
    setAnswers(prev => ({ ...prev, [current.id]: { selected: idx, confirmed: false } }));
  };

  const confirm = () => {
    if (!current || answerState?.selected == null) return;
    setAnswers(prev => ({ ...prev, [current.id]: { ...prev[current.id], confirmed: true } }));
    setShowExplanation(true);
  };

  const next = () => {
    if (!activeTest) return;
    if (currentIndex < activeTest.questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowExplanation(false);
    } else {
      setScreen('results');
    }
  };

  const prev = () => {
    if (!activeTest || currentIndex === 0) return;
    setCurrentIndex(i => i - 1);
    const prevQ = activeTest.questions[currentIndex - 1];
    setShowExplanation(!!answers[prevQ?.id]?.confirmed);
  };

  const score = useMemo(() => {
    if (!activeTest) return 0;
    return activeTest.questions.filter(q => {
      const a = answers[q.id];
      return a?.confirmed && a.selected === q.answer;
    }).length;
  }, [activeTest, answers]);

  const attempted = Object.values(answers).filter(a => a.confirmed).length;
  const progress = activeTest ? ((currentIndex + 1) / activeTest.questions.length) * 100 : 0;
  const scorePct = activeTest ? Math.round((score / activeTest.questions.length) * 100) : 0;

  // ── MENU ────────────────────────────────────────────────────────────────────
  if (screen === 'menu') {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}>
        <div className="px-8 pt-10 pb-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <ClipboardList className="text-amber-400" size={28} />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">ACAMS Study Guide</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>5 Full Mock Tests</h1>
            <p className="text-white/50 text-base">50 questions each — based on the official CAMS Study Guide v7.03</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="max-w-4xl mx-auto space-y-4 pb-8">
            {mockTests.map(test => (
              <div key={test.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-display)' }}>
                        {String(test.id).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-white font-bold text-lg leading-tight">{test.title}: {test.subtitle}</div>
                        <div className="text-white/40 text-xs mt-0.5">{test.topic}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 ml-12">
                      <div className="flex items-center gap-1.5 text-white/50 text-sm">
                        <Target size={14} className="text-amber-400/70" />
                        <span>50 questions</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-sm">
                        <Clock size={14} className="text-amber-400/70" />
                        <span>~60 min</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-sm">
                        <BookOpen size={14} className="text-amber-400/70" />
                        <span>Multiple choice</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => startTest(test)}
                    className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black transition-all text-sm shadow-lg shadow-amber-400/20 active:scale-95"
                  >
                    Start Test <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 bg-amber-400/10 border border-amber-400/20 rounded-xl p-4 flex items-start gap-3">
              <BookOpen size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-white/60 text-sm leading-relaxed">
                Each mock test covers a different section of the ACAMS CAMS Study Guide v7.03. Questions are based directly on content including case studies, definitions, and regulatory frameworks from the guide. Aim for <strong className="text-amber-400">75%+</strong> to simulate passing the CAMS exam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTS ─────────────────────────────────────────────────────────────────
  if (screen === 'results' && activeTest) {
    const grade = scorePct >= 80 ? 'Excellent' : scorePct >= 75 ? 'Passing' : scorePct >= 60 ? 'Needs Review' : 'Keep Studying';
    const gradeColor = scorePct >= 80 ? 'text-green-400' : scorePct >= 75 ? 'text-amber-400' : scorePct >= 60 ? 'text-orange-400' : 'text-red-400';

    // per-category breakdown
    const cats = [...new Set(activeTest.questions.map(q => q.category))];
    const catStats = cats.map(cat => {
      const qs = activeTest.questions.filter(q => q.category === cat);
      const correct = qs.filter(q => answers[q.id]?.confirmed && answers[q.id]?.selected === q.answer).length;
      return { cat, total: qs.length, correct, pct: Math.round((correct / qs.length) * 100) };
    });

    return (
      <div className="min-h-screen px-6 py-10 overflow-y-auto" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-amber-400 text-sm font-semibold tracking-widest uppercase">
              <Trophy size={18} /> Results
            </div>
            <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {activeTest.title}: {activeTest.subtitle}
            </h2>
          </div>

          {/* Score card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
            <ScoreRing pct={scorePct} />
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className={`text-3xl font-black ${gradeColor}`}>{grade}</div>
              <div className="text-white/60">
                {score} correct out of {activeTest.questions.length} questions
              </div>
              <div className="text-white/40 text-sm">
                {scorePct >= 75
                  ? '✓ Above the CAMS exam passing threshold (~75%)'
                  : `You need ${75 - scorePct}% more to reach the ~75% passing threshold`}
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Breakdown by Topic</h3>
            <div className="space-y-3">
              {catStats.map(({ cat, total, correct, pct }) => (
                <div key={cat}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60 text-xs truncate max-w-[70%]">{cat}</span>
                    <span className="text-white/50 text-xs">{correct}/{total}</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${pct >= 75 ? 'bg-green-400' : pct >= 60 ? 'bg-amber-400' : 'bg-red-400'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review wrong answers */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Questions to Review</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {activeTest.questions
                .filter(q => {
                  const a = answers[q.id];
                  return a?.confirmed && a.selected !== q.answer;
                })
                .map((q, i) => (
                  <div key={q.id} className="text-sm border-b border-white/5 pb-3">
                    <div className="text-white/70 font-medium mb-1">
                      <span className="text-red-400 mr-2">✗</span>Q{activeTest.questions.indexOf(q) + 1}: {q.question}
                    </div>
                    <div className="text-green-400 text-xs ml-5">
                      ✓ {q.options[q.answer]}
                    </div>
                  </div>
                ))}
              {activeTest.questions.filter(q => {
                const a = answers[q.id];
                return a?.confirmed && a.selected !== q.answer;
              }).length === 0 && (
                <div className="text-green-400 text-sm text-center py-4">🎉 Perfect score — no incorrect answers!</div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap justify-center pb-8">
            <button
              onClick={() => setScreen('menu')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all text-sm"
            >
              <RotateCcw size={15} /> All Tests
            </button>
            <button
              onClick={() => startTest(activeTest)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black transition-all text-sm"
            >
              Retake Test <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── QUESTION ────────────────────────────────────────────────────────────────
  if (!current || !activeTest) return null;
  const isCorrect = answerState?.selected === current.answer;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' }}>
      {/* Progress bar */}
      <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-sm border-b border-white/10 px-6 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-white/40 text-xs font-semibold truncate">{activeTest.title}: {activeTest.subtitle}</span>
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <span className="text-white/50 text-xs tabular-nums">{currentIndex + 1} / {activeTest.questions.length}</span>
              <span className="text-amber-400 text-sm font-bold tabular-nums">{score}/{attempted}</span>
            </div>
          </div>
          <div className="bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/70 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              {current.category}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((opt, i) => {
              const isSelected = answerState?.selected === i;
              const isCorrectOpt = i === current.answer;
              let cls = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white';
              if (isSelected && !isConfirmed) cls = 'bg-blue-500/20 border-blue-400/50 text-white';
              if (isConfirmed && isCorrectOpt) cls = 'bg-green-500/20 border-green-400/60 text-green-300';
              if (isConfirmed && isSelected && !isCorrectOpt) cls = 'bg-red-500/20 border-red-400/60 text-red-300';
              if (isConfirmed && !isSelected && !isCorrectOpt) cls = 'bg-white/3 border-white/5 text-white/25';

              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  disabled={isConfirmed}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-start gap-4 ${cls} disabled:cursor-default`}
                >
                  <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold mt-0.5
                    ${isConfirmed && isCorrectOpt ? 'border-green-400 text-green-400' :
                      isConfirmed && isSelected && !isCorrectOpt ? 'border-red-400 text-red-400' :
                      isSelected ? 'border-blue-400 text-blue-400' : 'border-white/20 text-white/30'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-sm sm:text-base leading-relaxed">{opt}</span>
                  {isConfirmed && isCorrectOpt && <CheckCircle size={20} className="shrink-0 text-green-400 mt-0.5" />}
                  {isConfirmed && isSelected && !isCorrectOpt && <XCircle size={20} className="shrink-0 text-red-400 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`rounded-xl p-5 border ${isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <div className={`flex items-center gap-2 mb-2 font-bold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? <CheckCircle size={15} /> : <XCircle size={15} />}
                {isCorrect ? 'Correct!' : `Correct answer: ${String.fromCharCode(65 + current.answer)}`}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Nav bar */}
      <div className="sticky bottom-0 bg-black/50 backdrop-blur-sm border-t border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            <ChevronLeft size={16} /> Prev
          </button>

          {!isConfirmed ? (
            <button
              onClick={confirm}
              disabled={answerState?.selected == null}
              className="flex-1 max-w-xs px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-900 font-black transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={next}
              className="flex-1 max-w-xs flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-900 font-black transition-all text-sm"
            >
              {currentIndex < activeTest.questions.length - 1 ? 'Next' : 'See Results'} <ChevronRight size={16} />
            </button>
          )}

          <button
            onClick={() => setScreen('menu')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm font-medium"
          >
            <RotateCcw size={15} /> Quit
          </button>
        </div>
      </div>
    </div>
  );
}
