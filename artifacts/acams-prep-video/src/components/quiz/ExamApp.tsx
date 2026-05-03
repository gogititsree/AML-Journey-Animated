import { useState, useEffect, useRef, useMemo } from 'react';
import { camsExams, type CamsExam, type ExamQuestion } from '@/data/examTests';
import {
  GraduationCap, Clock, ChevronLeft, ChevronRight,
  Flag, Trophy, RotateCcw, CheckCircle, XCircle, AlertTriangle,
} from 'lucide-react';

type Screen = 'menu' | 'exam' | 'results';

const EXAM_DURATION = 12600; // 3.5 hours = 210 min
const PASS_MARK     = 0.75;  // 75%
const DOMAIN_LABELS = [
  'Risks & Methods of ML/TF',
  'AML/CFT Compliance Programs',
  'Financial Investigations',
  'Law Enforcement Support',
];
const DOMAIN_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

/* ── Timer display ────────────────────────────────────────────────────────── */
function TimerDisplay({ seconds }: { seconds: number }) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const p = (n: number) => String(n).padStart(2, '0');
  const col = seconds < 600 ? 'text-red-400' : seconds < 1800 ? 'text-amber-400' : 'text-white';
  return <span className={`font-mono font-black tabular-nums text-xl ${col}`}>{p(h)}:{p(m)}:{p(s)}</span>;
}

/* ── Circular score ring ──────────────────────────────────────────────────── */
function ScoreRing({ correct, total }: { correct: number; total: number }) {
  const pct  = Math.round((correct / total) * 100);
  const r    = 58;
  const circ = 2 * Math.PI * r;
  const off  = circ - (pct / 100) * circ;
  const col  = pct >= 75 ? '#4ade80' : '#f87171';
  return (
    <svg width={144} height={144} viewBox="0 0 144 144">
      <circle cx={72} cy={72} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={12} />
      <circle cx={72} cy={72} r={r} fill="none" stroke={col} strokeWidth={12}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off}
        transform="rotate(-90 72 72)" style={{ transition: 'stroke-dashoffset 1.2s ease' }} />
      <text x={72} y={65}  textAnchor="middle" fill="white" fontSize={28} fontWeight="900" fontFamily="inherit">{pct}%</text>
      <text x={72} y={82}  textAnchor="middle" fill={col}   fontSize={12} fontWeight="700" fontFamily="inherit">{correct}/{total}</text>
      <text x={72} y={96}  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={10} fontFamily="inherit">SCORE</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function ExamApp() {
  const [screen,      setScreen]      = useState<Screen>('menu');
  const [exam,        setExam]        = useState<CamsExam | null>(null);
  const [answers,     setAnswers]     = useState<Record<number, number>>({});
  const [flagged,     setFlagged]     = useState<Set<number>>(new Set());
  const [current,     setCurrent]     = useState(0);
  const [timeLeft,    setTimeLeft]    = useState(EXAM_DURATION);
  const [timeUsed,    setTimeUsed]    = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNav,     setShowNav]     = useState(true);
  const startedAt = useRef<number>(0);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  /* timer */
  useEffect(() => {
    if (screen !== 'exam') { timerRef.current && clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current!); doSubmit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { timerRef.current && clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const startExam = (e: CamsExam) => {
    setExam(e); setAnswers({}); setFlagged(new Set());
    setCurrent(0); setTimeLeft(EXAM_DURATION); setShowConfirm(false);
    startedAt.current = Date.now();
    setScreen('exam');
  };

  const doSubmit = () => {
    setTimeUsed(Math.round((Date.now() - startedAt.current) / 1000));
    timerRef.current && clearInterval(timerRef.current);
    setShowConfirm(false);
    setScreen('results');
  };

  /* derived */
  const answeredCount = Object.keys(answers).length;
  const flaggedCount  = flagged.size;
  const q: ExamQuestion | undefined = exam?.questions[current];

  const results = useMemo(() => {
    if (!exam) return null;
    const d: Record<number, { c: number; t: number }> = { 1:{c:0,t:0}, 2:{c:0,t:0}, 3:{c:0,t:0}, 4:{c:0,t:0} };
    let correct = 0;
    exam.questions.forEach(eq => {
      d[eq.domain].t++;
      if (answers[eq.id] === eq.answer) { correct++; d[eq.domain].c++; }
    });
    return { correct, total: exam.questions.length, d };
  }, [exam, answers]);

  /* ── MENU ──────────────────────────────────────────────────────────────── */
  if (screen === 'menu') return (
    <div className="min-h-screen flex flex-col" style={{ background:'linear-gradient(135deg,#050d1a,#0a1628,#08192e)', fontFamily:'var(--font-body)' }}>
      <div className="px-8 pt-10 pb-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <GraduationCap className="text-emerald-400" size={22} />
            </div>
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">CAMS Exam Simulator</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily:'var(--font-display)' }}>5 Full Exam Simulations</h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
            Each exam mirrors the actual CAMS certification exam format —
            <strong className="text-white/70"> 120 questions</strong> · 4 domains ·
            <strong className="text-white/70"> 3 hours 30 minutes</strong> · 
            <strong className="text-emerald-400"> 75% (90/120) required to pass</strong>.
            No feedback during the exam. Review results only after submission.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {[
              ['120 Questions','Multiple choice, 4 options each'],
              ['3.5 Hours','210 minute countdown timer'],
              ['75% Pass Mark','90 correct answers required'],
              ['4 Domains','Risks · Compliance · Investigations · LE'],
            ].map(([t,s]) => (
              <div key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold text-sm">{t}</div>
                <div className="text-white/35 text-xs">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-4xl mx-auto space-y-4 pb-10">
          {camsExams.map((e, i) => (
            <div key={e.id} className="bg-white/4 border border-white/10 rounded-2xl p-6 hover:bg-white/7 hover:border-white/15 transition-all">
              <div className="flex items-start gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-black text-emerald-400/50 shrink-0" style={{ fontFamily:'var(--font-display)', lineHeight:1 }}>
                      {String(i+1).padStart(2,'0')}
                    </span>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-lg leading-tight">{e.title}</div>
                      <div className="text-white/40 text-xs mt-0.5">{e.description}</div>
                    </div>
                  </div>
                  <div className="ml-14 flex flex-wrap gap-1.5">
                    {DOMAIN_LABELS.map((dl, di) => {
                      const cnt = e.questions.filter(q => q.domain === di+1).length;
                      return (
                        <span key={dl} className="text-xs px-2 py-0.5 rounded-lg font-medium" style={{ color: DOMAIN_COLORS[di], background:`${DOMAIN_COLORS[di]}18`, border:`1px solid ${DOMAIN_COLORS[di]}30` }}>
                          {dl} ({cnt})
                        </span>
                      );
                    })}
                  </div>
                </div>
                <button onClick={() => startExam(e)} className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                  Begin <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 flex gap-3">
            <AlertTriangle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm leading-relaxed">
              Timer starts when you click Begin and cannot be paused. You can freely navigate all 120 questions, flag for review, and change answers at any time before submitting. Correct answers are revealed only on the results screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── RESULTS ────────────────────────────────────────────────────────────── */
  if (screen === 'results' && exam && results) {
    const passed = results.correct / results.total >= PASS_MARK;
    const pct    = Math.round((results.correct / results.total) * 100);
    const missed = exam.questions.filter(eq => answers[eq.id] !== eq.answer);
    const th = Math.floor(timeUsed/3600), tm = Math.floor((timeUsed%3600)/60), ts = timeUsed%60;
    const p  = (n:number) => String(n).padStart(2,'0');
    return (
      <div className="min-h-screen overflow-y-auto px-6 py-10" style={{ background:'linear-gradient(135deg,#050d1a,#0a1628,#08192e)', fontFamily:'var(--font-body)' }}>
        <div className="max-w-3xl mx-auto space-y-6 pb-16">

          {/* Banner */}
          <div className={`rounded-2xl p-8 text-center border ${passed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
            {passed ? <Trophy size={56} className="mx-auto text-emerald-400 mb-3" /> : <XCircle size={56} className="mx-auto text-red-400 mb-3" />}
            <h2 className={`text-6xl font-black mb-2 ${passed ? 'text-emerald-400' : 'text-red-400'}`} style={{ fontFamily:'var(--font-display)' }}>
              {passed ? 'PASS' : 'NOT PASS'}
            </h2>
            <p className="text-white/55 text-sm">{exam.title} · Time: <span className="text-white font-bold">{p(th)}:{p(tm)}:{p(ts)}</span></p>
          </div>

          {/* Score card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
            <ScoreRing correct={results.correct} total={results.total} />
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[
                ['Score',     `${pct}%`,             passed ? 'text-emerald-400' : 'text-red-400'],
                ['Correct',   `${results.correct}/120`, passed ? 'text-emerald-400' : 'text-red-400'],
                ['Pass Mark', '75%  (90/120)',        'text-white/50'],
                ['Result',    passed ? '✓ PASS' : '✗ FAIL', passed ? 'text-emerald-400' : 'text-red-400'],
              ].map(([l,v,c]) => (
                <div key={l} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/35 text-xs mb-0.5">{l}</div>
                  <div className={`font-bold ${c}`}>{v}</div>
                </div>
              ))}
              {!passed && (
                <div className="col-span-2 text-red-400/80 text-xs">
                  You need <strong>{90 - results.correct}</strong> more correct answer{90-results.correct!==1?'s':''} to reach the 75% passing mark.
                </div>
              )}
            </div>
          </div>

          {/* Domain breakdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-5">Domain Performance</h3>
            <div className="space-y-5">
              {[1,2,3,4].map(d => {
                const { c, t } = results.d[d];
                const dp = t > 0 ? Math.round((c/t)*100) : 0;
                const col = DOMAIN_COLORS[d-1];
                return (
                  <div key={d}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white/70 text-sm">{DOMAIN_LABELS[d-1]}</span>
                      <span className="text-white/50 text-sm tabular-nums">{c}/{t} · {dp}%</span>
                    </div>
                    <div className="bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width:`${dp}%`, background:col }} />
                    </div>
                    {dp < 75 && <p className="text-xs mt-1" style={{ color:col }}>⚠ Below passing threshold — review this domain</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Missed questions */}
          {missed.length > 0 && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">Questions to Review ({missed.length})</h3>
              <div className="space-y-5 max-h-[480px] overflow-y-auto pr-2">
                {missed.map(eq => {
                  const qi = exam.questions.indexOf(eq) + 1;
                  const chosen = answers[eq.id];
                  return (
                    <div key={eq.id} className="border-b border-white/6 pb-5 last:border-0 last:pb-0">
                      <div className="text-white/35 text-xs mb-1">Q{qi} · {eq.domainName}</div>
                      <div className="text-white/80 text-sm font-semibold mb-2 leading-snug">{eq.question}</div>
                      {chosen !== undefined
                        ? <div className="text-red-400 text-xs mb-1">✗ Your answer: {String.fromCharCode(65+chosen)}. {eq.options[chosen]}</div>
                        : <div className="text-white/30 text-xs mb-1">✗ Not answered</div>}
                      <div className="text-emerald-400 text-xs mb-1">✓ Correct: {String.fromCharCode(65+eq.answer)}. {eq.options[eq.answer]}</div>
                      <div className="text-white/35 text-xs leading-relaxed">{eq.explanation}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => setScreen('menu')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all">
              <RotateCcw size={14} /> All Exams
            </button>
            <button onClick={() => startExam(exam)} className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm transition-all">
              Retake Exam <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── ACTIVE EXAM ────────────────────────────────────────────────────────── */
  if (!exam || !q) return null;

  const isFlagged  = flagged.has(q.id);
  const isAnswered = answers[q.id] !== undefined;
  const domCol     = DOMAIN_COLORS[(q.domain-1) % 4];

  const toggleFlag = () => setFlagged(prev => {
    const n = new Set(prev); n.has(q.id) ? n.delete(q.id) : n.add(q.id); return n;
  });

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background:'linear-gradient(135deg,#050d1a,#0a1628,#08192e)', fontFamily:'var(--font-body)' }}>

      {/* Top bar */}
      <div className="shrink-0 flex items-center gap-3 px-4 py-2.5 bg-black/60 backdrop-blur-sm border-b border-white/10 z-30">
        <GraduationCap size={16} className="text-emerald-400 shrink-0" />
        <span className="text-white/40 text-xs truncate hidden sm:block flex-1 min-w-0">{exam.title}</span>
        {/* Timer */}
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shrink-0 ${timeLeft<600?'bg-red-500/15 border-red-500/30':timeLeft<1800?'bg-amber-500/15 border-amber-500/30':'bg-white/5 border-white/10'}`}>
          <Clock size={12} className={timeLeft<600?'text-red-400':timeLeft<1800?'text-amber-400':'text-white/40'} />
          <TimerDisplay seconds={timeLeft} />
        </div>
        <div className="flex items-center gap-3 text-xs shrink-0">
          <span><span className="text-emerald-400 font-bold">{answeredCount}</span><span className="text-white/35">/120 answered</span></span>
          {flaggedCount > 0 && <span className="text-amber-400 font-medium">{flaggedCount} flagged</span>}
        </div>
        <button onClick={() => setShowNav(n => !n)} className="shrink-0 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white text-xs border border-white/10 transition-all">
          {showNav ? '◂ Hide' : '▸ Nav'}
        </button>
        <button onClick={() => setShowConfirm(true)} className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-all">
          Submit Exam
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* Question navigator */}
        {showNav && (
          <div className="w-[168px] shrink-0 border-r border-white/10 bg-black/25 overflow-y-auto p-3 flex flex-col gap-3">
            <div className="text-white/25 text-[10px] font-bold uppercase tracking-widest">Navigator</div>
            <div className="grid grid-cols-5 gap-1">
              {exam.questions.map((eq, i) => {
                const ans  = answers[eq.id] !== undefined;
                const fl   = flagged.has(eq.id);
                const act  = i === current;
                return (
                  <button key={eq.id} onClick={() => setCurrent(i)}
                    className={`relative w-full aspect-square flex items-center justify-center rounded text-[10px] font-bold transition-all ${
                      act ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/40'
                          : ans ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/30'
                               : 'bg-white/5 text-white/25 border border-white/5 hover:bg-white/10 hover:text-white/50'
                    }`}>
                    {i+1}
                    {fl && <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 border border-black/30" />}
                  </button>
                );
              })}
            </div>
            <div className="space-y-1.5 mt-1">
              {[['bg-emerald-500/20 border border-emerald-500/25','Answered'],['bg-white/5 border border-white/5','Unanswered']].map(([cls,lbl]) => (
                <div key={lbl} className="flex items-center gap-1.5 text-[10px] text-white/30">
                  <div className={`w-3 h-3 rounded ${cls}`} />{lbl}
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-[10px] text-white/30">
                <div className="w-3 h-3 rounded bg-white/5 border border-white/5 relative"><div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" /></div>Flagged
              </div>
            </div>
          </div>
        )}

        {/* Main question area */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-3xl mx-auto">

            {/* Q header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl font-black text-white/10 shrink-0" style={{ fontFamily:'var(--font-display)', lineHeight:1 }}>
                {String(current+1).padStart(3,'0')}
              </span>
              <div className="flex flex-wrap gap-2 flex-1">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full border" style={{ color:domCol, borderColor:`${domCol}40`, background:`${domCol}15` }}>
                  {q.domainName}
                </span>
                {isFlagged && (
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-1 rounded-full">
                    ★ Flagged
                  </span>
                )}
              </div>
              <button onClick={toggleFlag}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${isFlagged ? 'bg-amber-400/20 border-amber-400/40 text-amber-400' : 'bg-white/5 border-white/10 text-white/35 hover:text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/30'}`}>
                <Flag size={11} />{isFlagged ? 'Unflag' : 'Flag'}
              </button>
            </div>

            {/* Question text */}
            <h2 className="text-xl font-bold text-white leading-relaxed mb-6" style={{ fontFamily:'var(--font-display)' }}>
              {q.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                const sel = answers[q.id] === i;
                return (
                  <button key={i} onClick={() => setAnswers(prev => ({ ...prev, [q.id]: i }))}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-start gap-4 ${
                      sel ? 'bg-emerald-500/15 border-emerald-400/50 text-white'
                          : 'bg-white/4 border-white/10 text-white/70 hover:bg-white/8 hover:border-white/20 hover:text-white'
                    }`}>
                    <span className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-black mt-0.5 ${sel ? 'border-emerald-400 text-emerald-400 bg-emerald-400/15' : 'border-white/20 text-white/30'}`}>
                      {String.fromCharCode(65+i)}
                    </span>
                    <span className="flex-1 text-sm sm:text-base leading-relaxed">{opt}</span>
                    {sel && <CheckCircle size={17} className="shrink-0 text-emerald-400 mt-0.5" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <button onClick={() => setAnswers(prev => { const n={...prev}; delete n[q.id]; return n; })}
                className="text-white/25 hover:text-white/50 text-xs underline underline-offset-2 transition-all">
                Clear answer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="shrink-0 flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <button onClick={() => setCurrent(i => Math.max(0, i-1))} disabled={current===0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all text-sm font-medium border border-white/8">
          <ChevronLeft size={15} /> Prev
        </button>
        <div className="flex-1 bg-white/8 rounded-full h-1.5 overflow-hidden">
          <div className="h-full rounded-full bg-emerald-500/50 transition-all duration-300" style={{ width:`${((current+1)/120)*100}%` }} />
        </div>
        <div className="text-white/30 text-xs tabular-nums">{current+1}/120</div>
        <button onClick={() => setCurrent(i => Math.min(exam.questions.length-1, i+1))} disabled={current===exam.questions.length-1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all text-sm font-medium border border-white/8">
          Next <ChevronRight size={15} />
        </button>
      </div>

      {/* Submit confirmation overlay */}
      {showConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-6">
          <div className="bg-[#0d1a2e] border border-white/20 rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <AlertTriangle size={38} className="text-amber-400 mb-4" />
            <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily:'var(--font-display)' }}>Submit Exam?</h3>
            <p className="text-white/60 text-sm mb-3">
              Answered: <strong className="text-emerald-400">{answeredCount}</strong> / <strong className="text-white">120</strong>
            </p>
            {answeredCount < 120 && (
              <p className="text-amber-400 text-sm mb-2">
                ⚠ {120 - answeredCount} question{120-answeredCount!==1?'s are':' is'} unanswered — each counts as incorrect.
              </p>
            )}
            {flaggedCount > 0 && (
              <p className="text-amber-400 text-sm mb-2">
                ★ {flaggedCount} question{flaggedCount!==1?'s are':' is'} still flagged for review.
              </p>
            )}
            <p className="text-white/30 text-xs mb-6 mt-2">This cannot be undone. Results appear immediately.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all">
                Continue
              </button>
              <button onClick={doSubmit} className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm transition-all">
                Submit Final
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
