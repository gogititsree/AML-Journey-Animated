import { useState } from 'react';
import { CASE_SCENARIOS, type CaseScenario } from '@/data/caseScenarios';
import { scenarioQuestions } from '@/data/scenarioQuestions';
import ScenarioApp from '@/components/quiz/ScenarioApp';
import {
  AlertTriangle, Award, CheckCircle2, ChevronLeft, ChevronRight,
  FileSearch, Flag, FolderOpen, Lightbulb, Scale, Target, XCircle, Zap,
} from 'lucide-react';

type Stage = 'briefing' | 'redflags' | 'decisions' | 'debrief';

const BG = { background: 'linear-gradient(135deg,#0a0f1e,#0d1a2e,#0a1628)', fontFamily: 'var(--font-body)' };

const DIFF_COLORS: Record<CaseScenario['difficulty'], string> = {
  Analyst: '#10b981',
  Senior: '#f59e0b',
  Expert: '#ef4444',
};

const QUALITY_POINTS = { best: 2, ok: 1, poor: 0 } as const;

// ─── Case runner ─────────────────────────────────────────────────────

function CaseRunner({ scenario, onExit }: { scenario: CaseScenario; onExit: () => void }) {
  const [stage, setStage] = useState<Stage>('briefing');

  // red flag stage
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [flagsSubmitted, setFlagsSubmitted] = useState(false);

  // decisions stage
  const [decisionIndex, setDecisionIndex] = useState(0);
  const [pickedOption, setPickedOption] = useState<number | null>(null);
  const [decisionPoints, setDecisionPoints] = useState(0);

  const c = scenario.color;

  const toggleClue = (i: number) => {
    if (flagsSubmitted) return;
    setSelected(s => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  };

  const flagScore = scenario.clues.reduce((acc, clue, i) => {
    const pickedIt = selected.has(i);
    return acc + (pickedIt === clue.isRedFlag ? 1 : 0);
  }, 0);

  const decision = scenario.decisions[decisionIndex];
  const answeredDecision = pickedOption !== null;

  const pickOption = (i: number) => {
    if (answeredDecision) return;
    setPickedOption(i);
    setDecisionPoints(p => p + QUALITY_POINTS[decision.options[i].quality]);
  };

  const nextDecision = () => {
    if (decisionIndex + 1 >= scenario.decisions.length) {
      setStage('debrief');
      return;
    }
    setDecisionIndex(i => i + 1);
    setPickedOption(null);
  };

  const maxDecisionPoints = scenario.decisions.length * 2;
  const totalScore = flagScore + decisionPoints;
  const maxScore = scenario.clues.length + maxDecisionPoints;

  // ── Briefing ──
  if (stage === 'briefing') {
    return (
      <div className="min-h-screen" style={BG}>
        <div className="max-w-2xl mx-auto px-6 py-8">
          <button onClick={onExit} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
            <ChevronLeft size={16} /> Case Files
          </button>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{scenario.emoji}</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border" style={{ color: DIFF_COLORS[scenario.difficulty], borderColor: `${DIFF_COLORS[scenario.difficulty]}40`, background: `${DIFF_COLORS[scenario.difficulty]}15` }}>
              {scenario.difficulty}
            </span>
            <span className="text-white/35 text-xs">{scenario.sector}</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{scenario.title}</h1>
          <p className="text-sm mb-7" style={{ color: c }}>{scenario.tagline}</p>

          <div className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4 mb-7">
            <div className="flex items-center gap-1.5">
              <FileSearch size={14} style={{ color: c }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c }}>Case briefing</span>
            </div>
            {scenario.briefing.map((p, i) => (
              <p key={i} className="text-white/75 text-sm leading-relaxed">{p}</p>
            ))}
          </div>

          <button
            onClick={() => setStage('redflags')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all text-gray-950"
            style={{ background: c }}
          >
            <Flag size={16} /> Begin investigation <ChevronRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // ── Red flag spotting ──
  if (stage === 'redflags') {
    return (
      <div className="min-h-screen" style={BG}>
        <div className="max-w-2xl mx-auto px-6 py-8">
          <button onClick={onExit} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
            <ChevronLeft size={16} /> Abandon case
          </button>
          <div className="flex items-center gap-1.5 mb-2">
            <Flag size={14} style={{ color: c }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c }}>Stage 1 · Spot the red flags</span>
          </div>
          <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Which of these facts are red flags?
          </h2>
          <p className="text-white/50 text-sm mb-6">
            Select every fact you consider a red flag — but beware: some facts are neutral, and flagging everything costs points too. {flagsSubmitted ? '' : `Selected: ${selected.size}`}
          </p>

          <div className="space-y-2.5 mb-7">
            {scenario.clues.map((clue, i) => {
              const isSel = selected.has(i);
              const correct = isSel === clue.isRedFlag;
              let border = isSel ? `${c}70` : 'rgba(255,255,255,0.1)';
              let bg = isSel ? `${c}12` : 'rgba(255,255,255,0.03)';
              if (flagsSubmitted) {
                border = correct ? 'rgba(74,222,128,0.5)' : 'rgba(248,113,113,0.55)';
                bg = correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)';
              }
              return (
                <button
                  key={i}
                  onClick={() => toggleClue(i)}
                  disabled={flagsSubmitted}
                  className="w-full text-left rounded-xl border p-4 transition-all"
                  style={{ borderColor: border, background: bg }}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      {flagsSubmitted ? (
                        correct
                          ? <CheckCircle2 size={18} className="text-green-400" />
                          : <XCircle size={18} className="text-red-400" />
                      ) : (
                        <div className={`w-[18px] h-[18px] rounded-md border-2 flex items-center justify-center ${isSel ? '' : 'border-white/25'}`} style={isSel ? { borderColor: c, background: `${c}30` } : {}}>
                          {isSel && <Flag size={10} style={{ color: c }} />}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/85 text-sm font-medium leading-snug">{clue.text}</p>
                      {flagsSubmitted && (
                        <>
                          <p className="text-xs font-bold mt-2" style={{ color: clue.isRedFlag ? '#fb923c' : '#4ade80' }}>
                            {clue.isRedFlag ? '🚩 RED FLAG' : '✓ Neutral fact'}
                            {!correct && (clue.isRedFlag ? ' — you missed this one' : ' — you flagged it, but it proves nothing')}
                          </p>
                          <p className="text-white/55 text-xs leading-relaxed mt-1.5">{clue.explanation}</p>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {flagsSubmitted ? (
            <div className="flex items-center justify-between gap-4 pb-8">
              <p className="text-white/70 text-sm">
                Red flag accuracy: <span className="font-black" style={{ color: c }}>{flagScore} / {scenario.clues.length}</span>
              </p>
              <button
                onClick={() => setStage('decisions')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all text-gray-950"
                style={{ background: c }}
              >
                <Scale size={16} /> Make the calls <ChevronRight size={16} />
              </button>
            </div>
          ) : (
            <div className="pb-8">
              <button
                onClick={() => setFlagsSubmitted(true)}
                disabled={selected.size === 0}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all ${selected.size === 0 ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'text-gray-950'}`}
                style={selected.size > 0 ? { background: c } : {}}
              >
                Submit analysis
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Decisions ──
  if (stage === 'decisions') {
    return (
      <div className="min-h-screen" style={BG}>
        <div className="max-w-2xl mx-auto px-6 py-8">
          <button onClick={onExit} className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm mb-6">
            <ChevronLeft size={16} /> Abandon case
          </button>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Scale size={14} style={{ color: c }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c }}>Stage 2 · Decision point {decisionIndex + 1} of {scenario.decisions.length}</span>
            </div>
            <span className="text-white/40 text-xs font-bold">{decisionPoints} pts</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/4 p-5 mb-6">
            <p className="text-white text-base font-semibold leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
              {decision.situation}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {decision.options.map((opt, i) => {
              const isPicked = pickedOption === i;
              let border = 'rgba(255,255,255,0.12)';
              let bg = 'rgba(255,255,255,0.04)';
              if (answeredDecision) {
                if (opt.quality === 'best') { border = 'rgba(74,222,128,0.55)'; bg = 'rgba(34,197,94,0.09)'; }
                else if (isPicked && opt.quality === 'ok') { border = 'rgba(251,191,36,0.55)'; bg = 'rgba(245,158,11,0.09)'; }
                else if (isPicked && opt.quality === 'poor') { border = 'rgba(248,113,113,0.55)'; bg = 'rgba(239,68,68,0.09)'; }
                else { border = 'rgba(255,255,255,0.06)'; bg = 'rgba(255,255,255,0.02)'; }
              }
              return (
                <button
                  key={i}
                  onClick={() => pickOption(i)}
                  disabled={answeredDecision}
                  className="w-full text-left rounded-xl border p-4 transition-all"
                  style={{ borderColor: border, background: bg }}
                >
                  <p className={`text-sm font-semibold leading-snug ${answeredDecision && !isPicked && opt.quality !== 'best' ? 'text-white/35' : 'text-white/90'}`}>
                    {opt.text}
                  </p>
                  {answeredDecision && (isPicked || opt.quality === 'best') && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs font-bold mb-1" style={{ color: opt.quality === 'best' ? '#4ade80' : opt.quality === 'ok' ? '#fbbf24' : '#f87171' }}>
                        {opt.quality === 'best' ? '★ Best call (+2)' : opt.quality === 'ok' ? '◐ Defensible, not optimal (+1)' : '✗ Poor call (+0)'}
                        {isPicked ? ' — your choice' : ''}
                      </p>
                      <p className="text-white/60 text-xs leading-relaxed">{opt.feedback}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {answeredDecision && (
            <div className="pb-8">
              <button
                onClick={nextDecision}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all text-gray-950"
                style={{ background: c }}
              >
                {decisionIndex + 1 >= scenario.decisions.length ? 'Case debrief' : 'Next decision'} <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Debrief ──
  const pct = Math.round((totalScore / maxScore) * 100);
  const verdict = pct >= 85 ? 'Expert-level judgment' : pct >= 65 ? 'Solid casework' : 'Case reopened — study the debrief';
  return (
    <div className="min-h-screen" style={BG}>
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <Award size={48} className="mx-auto mb-3" style={{ color: c }} />
          <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{verdict}</h2>
          <p className="text-white/55 text-sm">
            {scenario.title} · Score <span className="font-black" style={{ color: c }}>{totalScore} / {maxScore}</span>
            <span className="text-white/35"> (flags {flagScore}/{scenario.clues.length} · decisions {decisionPoints}/{maxDecisionPoints})</span>
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4 mb-6">
          <div className="flex items-center gap-1.5">
            <FileSearch size={14} style={{ color: c }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c }}>Expert debrief</span>
          </div>
          {scenario.debrief.map((p, i) => (
            <p key={i} className="text-white/70 text-sm leading-relaxed">{p}</p>
          ))}
        </div>

        <div className="rounded-2xl border border-amber-400/25 bg-amber-400/6 p-6 mb-8">
          <div className="flex items-center gap-1.5 mb-3">
            <Lightbulb size={14} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Takeaways for the exam & the job</span>
          </div>
          <ul className="space-y-2.5">
            {scenario.learningPoints.map((p, i) => (
              <li key={i} className="text-white/75 text-sm leading-relaxed flex gap-2.5">
                <span className="shrink-0 text-amber-400">✦</span>{p}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center pb-10">
          <button onClick={onExit} className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all border border-white/10">
            <FolderOpen size={16} /> Back to Case Files
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Scenario hub: rapid-fire questions + deep-dive case files ───────

export default function CaseScenariosApp() {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [runKey, setRunKey] = useState(0);
  const [rapidFire, setRapidFire] = useState(false);

  if (rapidFire) {
    return <ScenarioApp onExit={() => setRapidFire(false)} />;
  }

  const scenario = CASE_SCENARIOS.find(s => s.id === activeCase);
  if (scenario) {
    return (
      <CaseRunner
        key={`${scenario.id}-${runKey}`}
        scenario={scenario}
        onExit={() => { setActiveCase(null); setRunKey(k => k + 1); }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={BG}>
      <div className="px-8 pt-10 pb-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Target className="text-red-400" size={26} />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">Scenario Training</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>Scenarios</h1>
          <p className="text-white/50 text-base">
            Two ways to train: rapid-fire questions for exam speed, deep-dive case files for investigator judgment.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-3xl mx-auto space-y-3 pb-8">
          {/* Rapid-fire mode */}
          <button
            onClick={() => setRapidFire(true)}
            className="w-full flex items-start gap-4 p-6 rounded-2xl border border-red-500/30 bg-red-500/8 hover:bg-red-500/12 transition-all text-left group"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/40 flex items-center justify-center">
              <Zap size={22} className="text-red-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-base mb-1">Rapid Fire — {scenarioQuestions.length} Scenario Questions</div>
              <div className="text-white/50 text-sm leading-relaxed">
                Quick-fire multiple choice across 10 topic areas — structuring, SAR decisions, KYC judgment, TBML, sanctions and more. Build exam speed.
              </div>
              <div className="text-red-400 text-xs font-bold mt-2">Start quizzing →</div>
            </div>
            <ChevronRight size={18} className="shrink-0 mt-3 text-white/20 group-hover:text-white/50 transition-colors" />
          </button>

          {/* Case files section */}
          <div className="flex items-center gap-2 pt-4 pb-1">
            <FolderOpen size={16} className="text-red-400" />
            <span className="text-white font-bold text-sm tracking-wide">Deep-Dive Case Files</span>
            <span className="text-white/30 text-xs">· briefing → red flags → decisions → debrief</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/4 px-6 py-4 flex items-start gap-3">
            <AlertTriangle size={17} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-white/60 text-sm leading-relaxed">
              These cases are fictional but built from real-world typologies and enforcement patterns. Not every fact is a red flag — part of the skill is knowing what is <span className="text-white/85 font-semibold">neutral</span>.
            </p>
          </div>

          {CASE_SCENARIOS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveCase(s.id)}
              className="w-full flex items-start gap-4 p-6 rounded-2xl border bg-white/4 hover:bg-white/7 transition-all text-left group"
              style={{ borderColor: `${s.color}30` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-white font-bold text-base">{s.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border" style={{ color: DIFF_COLORS[s.difficulty], borderColor: `${DIFF_COLORS[s.difficulty]}40`, background: `${DIFF_COLORS[s.difficulty]}12` }}>
                    {s.difficulty}
                  </span>
                </div>
                <div className="text-white/50 text-sm">{s.tagline}</div>
                <div className="text-xs mt-1.5" style={{ color: s.color }}>
                  {s.sector} · {s.clues.length} facts to analyze · {s.decisions.length} decisions
                </div>
              </div>
              <ChevronRight size={18} className="shrink-0 mt-3 text-white/20 group-hover:text-white/50 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
