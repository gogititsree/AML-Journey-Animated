import { useState, useCallback, useMemo } from 'react';
import { quizQuestions, categories, type QuizQuestion } from '@/data/quizQuestions';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, RotateCcw, BookOpen, Trophy, Filter, Shuffle } from 'lucide-react';

type QuizMode = 'menu' | 'quiz' | 'results';

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

export default function QuizApp() {
  const [mode, setMode] = useState<QuizMode>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffled, setShuffled] = useState(true);

  const filteredPool = useMemo(() => {
    return selectedCategory === 'All'
      ? quizQuestions
      : quizQuestions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const startQuiz = useCallback(() => {
    const pool = shuffled ? shuffleArray(filteredPool) : filteredPool;
    setQuestions(pool);
    setCurrentIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setMode('quiz');
  }, [filteredPool, shuffled]);

  const current = questions[currentIndex];
  const answerState = current ? answers[current.id] : null;
  const isConfirmed = answerState?.confirmed ?? false;

  const selectAnswer = (idx: number) => {
    if (isConfirmed) return;
    setAnswers(prev => ({
      ...prev,
      [current.id]: { selected: idx, confirmed: false }
    }));
  };

  const confirm = () => {
    if (!current || answerState?.selected == null) return;
    setAnswers(prev => ({
      ...prev,
      [current.id]: { ...prev[current.id], confirmed: true }
    }));
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
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 50%, #0a1628 100%)', fontFamily: 'var(--font-body)' }}>
        {/* Header */}
        <div className="px-8 pt-10 pb-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-amber-400" size={28} />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">ACAMS Certification Prep</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              200 Practice Questions
            </h1>
            <p className="text-white/50 text-base">AML / KYC / BSA — Master the material. Ace the CAMS exam.</p>
          </div>
        </div>

        {/* Config */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Category filter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter size={16} className="text-amber-400" />
                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['All', ...categories].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      selectedCategory === cat
                        ? 'bg-amber-400 text-gray-900 border-amber-400'
                        : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                    {cat === 'All' ? ` (${quizQuestions.length})` : ` (${quizQuestions.filter(q => q.category === cat).length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Shuffle toggle */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shuffle size={16} className="text-amber-400" />
                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">Question Order</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShuffled(true)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                    shuffled
                      ? 'bg-amber-400 text-gray-900 border-amber-400'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Randomized
                </button>
                <button
                  onClick={() => setShuffled(false)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                    !shuffled
                      ? 'bg-amber-400 text-gray-900 border-amber-400'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  In Order
                </button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map(cat => (
                <div key={cat} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-black text-amber-400 mb-1">
                    {quizQuestions.filter(q => q.category === cat).length}
                  </div>
                  <div className="text-white/50 text-xs leading-tight">{cat}</div>
                </div>
              ))}
            </div>

            {/* Start button */}
            <div className="flex justify-center pt-4 pb-8">
              <button
                onClick={startQuiz}
                className="px-12 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black text-lg transition-all shadow-lg shadow-amber-400/20 active:scale-95"
              >
                Start {selectedCategory === 'All' ? '200' : filteredPool.length} Question{filteredPool.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTS ---
  if (mode === 'results') {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 80 ? 'Excellent' : pct >= 70 ? 'Good' : pct >= 60 ? 'Needs Review' : 'Keep Studying';
    const gradeColor = pct >= 80 ? 'text-green-400' : pct >= 70 ? 'text-amber-400' : pct >= 60 ? 'text-orange-400' : 'text-red-400';

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 50%, #0a1628 100%)', fontFamily: 'var(--font-body)' }}>
        <div className="max-w-xl w-full text-center space-y-6">
          <Trophy className="mx-auto text-amber-400" size={56} />
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>Results</h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="text-7xl font-black text-white">{pct}<span className="text-3xl text-white/40">%</span></div>
            <div className={`text-2xl font-bold ${gradeColor}`}>{grade}</div>
            <div className="text-white/50 text-sm">
              {score} correct out of {questions.length} questions
            </div>

            {/* Category breakdown */}
            <div className="pt-4 space-y-2 text-left">
              {categories.filter(cat => questions.some(q => q.category === cat)).map(cat => {
                const catQs = questions.filter(q => q.category === cat);
                const catCorrect = catQs.filter(q => answers[q.id]?.confirmed && answers[q.id]?.selected === q.answer).length;
                const catPct = catQs.length > 0 ? Math.round((catCorrect / catQs.length) * 100) : 0;
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <span className="text-white/50 text-xs w-36 truncate">{cat}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${catPct >= 75 ? 'bg-green-400' : catPct >= 60 ? 'bg-amber-400' : 'bg-red-400'}`}
                        style={{ width: `${catPct}%` }}
                      />
                    </div>
                    <span className="text-white/60 text-xs w-14 text-right">{catCorrect}/{catQs.length}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => { setMode('menu'); setSelectedCategory('All'); }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-all"
            >
              <RotateCcw size={16} /> Menu
            </button>
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black transition-all"
            >
              Retake <ChevronRight size={16} />
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
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 50%, #0a1628 100%)', fontFamily: 'var(--font-body)' }}>
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-black/40 backdrop-blur-sm border-b border-white/10 px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <span className="text-white/50 text-sm font-mono tabular-nums shrink-0">{currentIndex + 1} / {questions.length}</span>
          <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-amber-400 text-sm font-bold tabular-nums shrink-0">
            {score}/{attempted}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Category badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/70 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              {current.category}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            {current.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {current.options.map((opt, i) => {
              const isSelected = answerState?.selected === i;
              const isCorrectOpt = i === current.answer;

              let optStyle = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white';
              if (isSelected && !isConfirmed) optStyle = 'bg-blue-500/20 border-blue-400/50 text-white';
              if (isConfirmed && isCorrectOpt) optStyle = 'bg-green-500/20 border-green-400/60 text-green-300';
              if (isConfirmed && isSelected && !isCorrectOpt) optStyle = 'bg-red-500/20 border-red-400/60 text-red-300';
              if (isConfirmed && !isSelected && !isCorrectOpt) optStyle = 'bg-white/3 border-white/5 text-white/30';

              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  disabled={isConfirmed}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-start gap-4 ${optStyle} disabled:cursor-default`}
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
                  {isConfirmed && isCorrectOpt && <CheckCircle size={20} className="shrink-0 text-green-400 mt-0.5" />}
                  {isConfirmed && isSelected && !isCorrectOpt && <XCircle size={20} className="shrink-0 text-red-400 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`rounded-xl p-5 border ${isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <div className={`flex items-center gap-2 mb-2 font-bold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
                {isCorrect ? 'Correct!' : `Correct answer: ${String.fromCharCode(65 + current.answer)}`}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
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
              {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'} <ChevronRight size={16} />
            </button>
          )}

          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm font-medium"
          >
            <RotateCcw size={16} /> Quit
          </button>
        </div>
      </div>
    </div>
  );
}
