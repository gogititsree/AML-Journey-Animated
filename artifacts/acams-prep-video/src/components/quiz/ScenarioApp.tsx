import { useState, useCallback, useMemo } from 'react';
import { scenarioQuestions } from '@/data/scenarioQuestions';
import type { QuizQuestion } from '@/data/quizQuestions';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, RotateCcw, Trophy, Shuffle, AlertTriangle, Target } from 'lucide-react';

type Mode = 'menu' | 'quiz' | 'results';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface AnswerState {
  selected: number | null;
  confirmed: boolean;
}

const ACCENT = '#ef4444';
const ACCENT_DIM = 'rgba(239,68,68,0.15)';
const ACCENT_BORDER = 'rgba(239,68,68,0.35)';

interface ScenarioAppProps {
  onExit?: () => void;
}

export default function ScenarioApp({ onExit }: ScenarioAppProps = {}) {
  const [mode, setMode] = useState<Mode>('menu');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffled, setShuffled] = useState(true);

  const startQuiz = useCallback(() => {
    const pool = shuffled ? shuffleArray(scenarioQuestions) : [...scenarioQuestions];
    setQuestions(pool);
    setCurrentIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setMode('quiz');
  }, [shuffled]);

  const current = questions[currentIndex];
  const answerState = current ? answers[current.id] : null;
  const isConfirmed = answerState?.confirmed ?? false;

  const selectAnswer = (idx: number) => {
    if (isConfirmed) return;
    setAnswers(prev => ({ ...prev, [current.id]: { selected: idx, confirmed: false } }));
  };

  const confirm = () => {
    if (!current || answerState?.selected == null) return;
    setAnswers(prev => ({ ...prev, [current.id]: { ...prev[current.id], confirmed: true } }));
    setShowExplanation(true);
  };

  const next = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowExplanation(false);
    } else {
      setMode('results');
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setShowExplanation(!!answers[questions[currentIndex - 1]?.id]?.confirmed);
    }
  };

  const score = useMemo(() => {
    return questions.filter(q => {
      const a = answers[q.id];
      return a?.confirmed && a.selected === q.answer;
    }).length;
  }, [questions, answers]);

  const attempted = Object.values(answers).filter(a => a.confirmed).length;

  // --- MENU ---
  if (mode === 'menu') {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0f0a0a 0%, #1a0d0d 50%, #160a0a 100%)', fontFamily: 'var(--font-body)' }}>
        <div className="px-8 pt-10 pb-6 border-b border-red-900/30">
          <div className="max-w-4xl mx-auto">
            {onExit && (
              <button onClick={onExit} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-5">
                <ChevronLeft size={16} /> Scenario Hub
              </button>
            )}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}` }}>
                <Target size={16} style={{ color: ACCENT }} />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>ACAMS Exam Prep · Job Interview Ready</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Scenario-Based Questions
            </h1>
            <p className="text-white/50 text-base mb-6">
              100 challenging real-world AML scenarios — the kind you'll face in CAMS exams and job interviews. No memorisation shortcuts. Think critically.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'Structuring & Cash Red Flags',
                'SAR Filing Decisions',
                'KYC / CDD Judgment',
                'EDD & PEPs',
                'Trade-Based ML',
                'Correspondent Banking',
                'Virtual Assets',
                'Terrorist Financing & Sanctions',
                'Investigations & Compliance',
              ].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium text-white/50 border border-white/10 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl p-4 border" style={{ background: ACCENT_DIM, borderColor: ACCENT_BORDER }}>
                <div className="text-3xl font-black mb-1" style={{ color: ACCENT }}>100</div>
                <div className="text-white/50 text-xs">Scenario Questions</div>
              </div>
              <div className="rounded-xl p-4 border border-white/10 bg-white/5">
                <div className="text-3xl font-black text-white mb-1">10</div>
                <div className="text-white/50 text-xs">Topic Areas</div>
              </div>
              <div className="rounded-xl p-4 border border-white/10 bg-white/5">
                <div className="text-3xl font-black text-amber-400 mb-1">Hard</div>
                <div className="text-white/50 text-xs">Difficulty Level</div>
              </div>
            </div>

            <div className="rounded-xl p-4 border border-amber-500/20 bg-amber-500/5 mb-8 flex items-start gap-3">
              <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-300/80 text-sm leading-relaxed">
                These scenarios require applying AML knowledge to ambiguous real-world situations — just like the CAMS exam and compliance interviews. Read each scenario carefully before selecting an answer.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Shuffle size={14} className="text-white/40" />
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Question Order</span>
              </div>
              <div className="flex gap-3">
                {[true, false].map(s => (
                  <button
                    key={String(s)}
                    onClick={() => setShuffled(s)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all border ${
                      shuffled === s
                        ? 'text-white font-bold'
                        : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                    style={shuffled === s ? { background: ACCENT_DIM, borderColor: ACCENT_BORDER, color: ACCENT } : {}}
                  >
                    {s ? 'Randomized' : 'In Order'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="px-14 py-4 rounded-xl font-black text-lg text-white transition-all shadow-lg active:scale-95"
              style={{ background: ACCENT, boxShadow: '0 8px 30px rgba(239,68,68,0.3)' }}
            >
              Start 100 Scenarios
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTS ---
  if (mode === 'results') {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 80 ? 'Exam Ready' : pct >= 70 ? 'Almost There' : pct >= 60 ? 'Keep Reviewing' : 'Needs More Study';
    const gradeColor = pct >= 80 ? '#22c55e' : pct >= 70 ? '#f59e0b' : pct >= 60 ? '#f97316' : ACCENT;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: 'linear-gradient(135deg, #0f0a0a 0%, #1a0d0d 50%, #160a0a 100%)', fontFamily: 'var(--font-body)' }}>
        <div className="max-w-xl w-full text-center space-y-6">
          <Trophy size={52} style={{ color: ACCENT, margin: '0 auto' }} />
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>Scenario Results</h2>

          <div className="rounded-2xl p-8 space-y-4 border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="text-7xl font-black text-white">{pct}<span className="text-3xl text-white/30">%</span></div>
            <div className="text-2xl font-bold" style={{ color: gradeColor }}>{grade}</div>
            <div className="text-white/40 text-sm">{score} correct out of {questions.length} scenarios</div>
            <div className="text-white/40 text-xs">{attempted} attempted · {questions.length - attempted} skipped</div>

            <div className="pt-4">
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: gradeColor }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>0%</span>
                <span className="text-amber-400/60">Pass: 75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setMode('menu')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/8 hover:bg-white/12 text-white/70 hover:text-white font-semibold transition-all border border-white/10"
            >
              <RotateCcw size={15} /> Menu
            </button>
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-white transition-all"
              style={{ background: ACCENT, boxShadow: '0 4px 20px rgba(239,68,68,0.3)' }}
            >
              Retry <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- QUIZ ---
  if (!current) return null;

  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isCorrect = answerState?.selected === current.answer;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0f0a0a 0%, #1a0d0d 50%, #160a0a 100%)', fontFamily: 'var(--font-body)' }}>
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b px-6 py-3" style={{ background: 'rgba(15,10,10,0.85)', backdropFilter: 'blur(12px)', borderColor: 'rgba(239,68,68,0.15)' }}>
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <span className="text-white/40 text-sm font-mono tabular-nums shrink-0">{currentIndex + 1} / {questions.length}</span>
          <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: ACCENT }} />
          </div>
          <span className="text-sm font-bold tabular-nums shrink-0" style={{ color: ACCENT }}>
            {score}/{attempted || '—'}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: ACCENT, background: ACCENT_DIM, borderColor: ACCENT_BORDER }}>
              Scenario Based
            </span>
            <span className="text-xs text-white/25 font-mono">#{current.id}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((opt, i) => {
              const isSelected = answerState?.selected === i;
              const isCorrectOpt = i === current.answer;

              let cls = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white';
              if (isSelected && !isConfirmed) cls = 'bg-blue-500/15 border-blue-400/40 text-white';
              if (isConfirmed && isCorrectOpt) cls = 'bg-green-500/15 border-green-400/50 text-green-300';
              if (isConfirmed && isSelected && !isCorrectOpt) cls = 'bg-red-500/15 border-red-400/50 text-red-300';
              if (isConfirmed && !isSelected && !isCorrectOpt) cls = 'border-white/5 text-white/20';

              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  disabled={isConfirmed}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-start gap-4 ${cls} disabled:cursor-default`}
                >
                  <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold mt-0.5 ${
                    isConfirmed && isCorrectOpt ? 'border-green-400 text-green-400' :
                    isConfirmed && isSelected && !isCorrectOpt ? 'border-red-400 text-red-400' :
                    isSelected ? 'border-blue-400 text-blue-400' :
                    'border-white/20 text-white/30'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-sm sm:text-base leading-relaxed">{opt}</span>
                  {isConfirmed && isCorrectOpt && <CheckCircle size={19} className="shrink-0 text-green-400 mt-0.5" />}
                  {isConfirmed && isSelected && !isCorrectOpt && <XCircle size={19} className="shrink-0 text-red-400 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`rounded-xl p-5 border ${isCorrect ? 'bg-green-500/8 border-green-500/25' : 'bg-red-500/8 border-red-500/25'}`}>
              <div className={`flex items-center gap-2 mb-2 font-bold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? <CheckCircle size={15} /> : <XCircle size={15} />}
                {isCorrect ? 'Correct!' : `Correct answer: ${String.fromCharCode(65 + current.answer)}`}
              </div>
              <p className="text-white/65 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="sticky bottom-0 border-t px-6 py-4" style={{ background: 'rgba(15,10,10,0.9)', backdropFilter: 'blur(12px)', borderColor: 'rgba(239,68,68,0.12)' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            <ChevronLeft size={15} /> Prev
          </button>

          {!isConfirmed ? (
            <button
              onClick={confirm}
              disabled={answerState?.selected == null}
              className="flex-1 max-w-xs px-6 py-2.5 rounded-lg font-black text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm"
              style={{ background: ACCENT, boxShadow: '0 4px 16px rgba(239,68,68,0.25)' }}
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={next}
              className="flex-1 max-w-xs flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-black text-white transition-all text-sm"
              style={{ background: ACCENT, boxShadow: '0 4px 16px rgba(239,68,68,0.25)' }}
            >
              {currentIndex < questions.length - 1 ? 'Next Scenario' : 'See Results'} <ChevronRight size={15} />
            </button>
          )}

          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all text-sm font-medium"
          >
            <RotateCcw size={15} /> Quit
          </button>
        </div>
      </div>
    </div>
  );
}
