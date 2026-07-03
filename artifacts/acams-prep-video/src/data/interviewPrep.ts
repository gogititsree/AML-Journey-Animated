export interface InterviewQuestion {
  id: number;
  category: string; // category key
  question: string;
  answerGuide: string; // model answer / talking points ('\n' separated lines; '•' bullets)
  tip: string; // interviewer-insight tip
}

export interface InterviewCategory {
  key: string;
  title: string;
  color: string;
  icon: string; // emoji
  blurb: string;
}

export const INTERVIEW_CATEGORIES: InterviewCategory[] = [
  { key: 'behavioral', title: 'Behavioral & Fit', color: '#f59e0b', icon: '🤝', blurb: 'Tell-me-about-a-time questions — answer with STAR.' },
  { key: 'fundamentals', title: 'AML Fundamentals', color: '#10b981', icon: '📚', blurb: 'Core technical knowledge every candidate must nail.' },
  { key: 'regulatory', title: 'Regulatory & Frameworks', color: '#3b82f6', icon: '🏛️', blurb: 'FATF, BSA, EU AMLDs, sanctions regimes, and key bodies.' },
  { key: 'monitoring', title: 'Monitoring & Investigations', color: '#8b5cf6', icon: '🔍', blurb: 'Alerts, SAR/STR writing, and investigation craft.' },
  { key: 'judgment', title: 'Scenario & Judgment', color: '#ef4444', icon: '⚖️', blurb: 'What-would-you-do questions that test ethics and escalation instincts.' },
  { key: 'askthem', title: 'Questions to Ask Them', color: '#14b8a6', icon: '💬', blurb: 'Smart questions that signal you think like a compliance professional.' },
];

export const STAR_GUIDE = {
  title: 'The STAR Method',
  intro: 'Every behavioral answer should be a 90-second story with four beats. Interviewers are trained to listen for all four — missing one makes the answer feel incomplete.',
  steps: [
    { letter: 'S', name: 'Situation', desc: 'Set the scene in 1–2 sentences. Where were you, what was the context? Keep it lean — the setup is not the story.' },
    { letter: 'T', name: 'Task', desc: 'What was YOUR responsibility or the problem you owned? Distinguish your role from the team’s.' },
    { letter: 'A', name: 'Action', desc: 'The heart of the answer — 60% of your airtime. What did you specifically do, step by step? Use "I", not "we".' },
    { letter: 'R', name: 'Result', desc: 'Quantify if possible (alerts cleared, backlog reduced, finding remediated). End with what you learned.' },
  ],
  proTips: [
    'Prepare 6–8 stories in advance that can each flex to answer several questions (conflict, deadline, mistake, initiative, difficult stakeholder, process improvement).',
    'For compliance roles, at least two stories should show you holding your ground under business pressure — it is the trait interviewers most want to verify.',
    'Never badmouth a previous employer or reveal confidential case details — anonymize everything. How you handle confidentiality in the interview IS part of the test.',
  ],
};

export const interviewQuestions: InterviewQuestion[] = [
  // ── Behavioral & Fit ──────────────────────────────────────────────
  {
    id: 1, category: 'behavioral',
    question: 'Tell me about yourself and why you want to work in AML/financial crime compliance.',
    answerGuide: 'Structure: present → past → future, in under 2 minutes.\n• Present: your current role/studies and the compliance-relevant skills you use daily (analysis, attention to detail, writing).\n• Past: the moment financial crime caught your interest — a case in the news, a course, a project. Make it specific and genuine.\n• Future: why THIS role at THIS firm — connect their business (retail bank? fintech? crypto?) to the typologies you find fascinating.\nClose with: "Fighting financial crime has real-world impact — laundered money funds trafficking, corruption, and terrorism. I want my analytical work to matter."',
    tip: 'Interviewers hear "I like investigation" from everyone. Stand out by naming a specific typology or enforcement case that fascinates you (e.g., the Danske Bank Estonia case, 1MDB, TD Bank 2024) and what it taught you.',
  },
  {
    id: 2, category: 'behavioral',
    question: 'Describe a time you had to handle a large volume of work under a tight deadline.',
    answerGuide: 'Perfect STAR territory. Compliance is a volume business — alert queues, month-end reviews, remediation backlogs.\n• Situation: a concrete crunch (period-end, backlog, understaffed team).\n• Task: your specific quota or deliverable.\n• Action: how you triaged by RISK — this is the key word. "I prioritized the highest-risk items first" shows compliance instincts. Mention tools, batching, escalating early when you saw you might miss the deadline.\n• Result: numbers — items completed, accuracy maintained, deadline met (or honestly missed and what you changed).',
    tip: 'The trap: sounding like you sacrificed quality for speed. In AML, a rushed alert review is worse than a late one. Explicitly say how you protected quality.',
  },
  {
    id: 3, category: 'behavioral',
    question: 'Tell me about a time you made a mistake. How did you handle it?',
    answerGuide: 'Pick a real, meaningful mistake (not "I care too much"). Ideal shape:\n• A genuine error with consequences (missed detail, wrong data, incorrect conclusion).\n• You discovered or owned it QUICKLY and self-reported — do not let the interviewer wonder if you hid it.\n• You fixed the immediate issue AND the root cause (checklist, second review, process change).\n• Result: the fix stuck; you were trusted with more, not less.\nIn compliance, self-reporting culture is everything — a candidate who hides mistakes is a liability.',
    tip: 'The interviewer is testing integrity, not competence. The worst answer is "I can\'t think of one." The best answers show fast escalation and a durable process fix.',
  },
  {
    id: 4, category: 'behavioral',
    question: 'Describe a time you disagreed with a manager or senior colleague. What did you do?',
    answerGuide: 'For compliance roles this is a core question — you WILL face pressure to soften findings.\n• Choose a professional disagreement about substance (a conclusion, a risk rating, a process), not personality.\n• Actions to highlight: you gathered evidence first, presented it privately and respectfully, focused on the shared goal (protecting the firm), and listened to their reasoning.\n• Two good endings: (a) your evidence changed the decision, or (b) they had context you lacked and you updated your view gracefully. Both are strong.\n• If risk was involved and you were overruled, mention documenting your position — calmly, not dramatically.',
    tip: 'They are picturing you in a room with a revenue-generating business head who wants a risky client onboarded. Show spine + diplomacy, not stubbornness.',
  },
  {
    id: 5, category: 'behavioral',
    question: 'Why should we hire you over candidates with more direct AML experience?',
    answerGuide: 'Do not apologize for your background — reframe it.\n• Transferable skills: investigation and research, structured writing, data analysis, customer contact (you have seen real customer behavior), regulatory reading.\n• Certification momentum: you are actively studying for CAMS/certification — name the specific domains you have covered.\n• Fresh eyes: you question legacy processes instead of assuming "that is how it is done."\n• Trainability + hunger: cite something concrete you self-taught (this course, FATF papers, following enforcement actions).\nEnd: "Experience teaches typologies; I bring the judgment, ethics, and work rate — and I am acquiring the typologies fast."',
    tip: 'Confidence without arrogance. Interviewers hire attitude and aptitude for junior roles — prove you are already behaving like an AML professional before being paid to be one.',
  },
  {
    id: 6, category: 'behavioral',
    question: 'Where do you see yourself in five years?',
    answerGuide: 'Show a realistic compliance career arc:\n• Years 1–2: master the analyst craft — alert disposition, SAR writing, KYC reviews — and complete certification.\n• Years 3–4: senior analyst / SME depth in a typology (TBML, crypto, sanctions) or move toward advisory/QA.\n• Year 5: team lead or specialist, mentoring juniors.\nAnchor it to THEIR structure if you know it ("I understand your FIU has a typology SME track…").\nAvoid: "In your seat" jokes, or anything implying compliance is a stepping stone to a front-office role.',
    tip: 'The real question is retention: will you stay and grow? Signal that financial crime IS the destination, not a detour.',
  },
  // ── AML Fundamentals ──────────────────────────────────────────────
  {
    id: 10, category: 'fundamentals',
    question: 'Walk me through the three stages of money laundering with an example of each.',
    answerGuide: '• Placement — getting dirty cash into the system. Example: structuring $9,500 deposits across several branches to duck the $10,000 CTR threshold; or funneling cash through a cash-intensive business (car wash, restaurant).\n• Layering — obscuring the trail. Example: rapid wire transfers through shell companies in multiple jurisdictions, converting to crypto and back, over-invoiced trade transactions.\n• Integration — the money re-enters the economy looking legitimate. Example: buying real estate, luxury assets, or a legitimate business with the layered funds.\nBonus point: note that not all schemes need all three stages (e.g., TF often uses clean money — "reverse laundering").',
    tip: 'Everyone can name the stages. You differentiate with crisp, concrete examples and the TF nuance — terrorist financing often inverts the model (clean money, dirty purpose).',
  },
  {
    id: 11, category: 'fundamentals',
    question: 'What is the difference between CDD and EDD, and when is EDD required?',
    answerGuide: 'CDD (customer due diligence) is the baseline for all customers: identify and verify identity, identify beneficial owners, understand the purpose of the relationship, and monitor it ongoing.\nEDD (enhanced due diligence) applies extra measures when risk is higher: senior management approval, establishing source of wealth AND source of funds, more frequent reviews, tighter transaction monitoring.\nClassic EDD triggers: foreign PEPs (always), correspondent banking, customers from FATF high-risk jurisdictions, complex/opaque ownership structures, private banking, unusual account activity, high-risk products (e.g., crypto).\nAlso mention SDD — simplified due diligence may be allowed for demonstrably low-risk customers under a risk-based approach.',
    tip: 'Say "source of wealth vs source of funds" and define both — SoW is how they built their total net worth; SoF is where THIS money came from. Interviewers love that distinction.',
  },
  {
    id: 12, category: 'fundamentals',
    question: 'What is a beneficial owner and why does it matter?',
    answerGuide: 'The beneficial owner is the natural person who ultimately OWNS or CONTROLS a customer or on whose behalf a transaction is conducted — you keep looking through layers of entities until you reach a human.\nCommon threshold: 25% ownership (US CDD Rule, EU AMLDs), though risk-based lower thresholds exist, plus a "control prong" (one person with significant managerial control).\nWhy it matters: shell companies are the #1 laundering vehicle — criminals hide behind corporate layers. If you don\'t know the human, you can\'t screen for sanctions, PEP status, or adverse media.\nBonus: mention FATF R.24/25 and registries (e.g., FinCEN\'s BO registry under the Corporate Transparency Act).',
    tip: 'Use the phrase "look through the structure until you reach a natural person." It is exactly how practitioners talk.',
  },
  {
    id: 13, category: 'fundamentals',
    question: 'What red flags would make you suspicious of a customer or transaction?',
    answerGuide: 'Organize by category — it shows structured thinking:\n• Transaction patterns: structuring below thresholds, rapid in-and-out movement (pass-through), round-dollar amounts, activity inconsistent with stated business/profile, dormant account suddenly active.\n• Customer behavior: reluctance to provide KYC info, unusual knowledge of reporting thresholds, third parties directing activity, urgency without reason.\n• Geography: transfers to/from high-risk or sanctioned jurisdictions with no business rationale.\n• Structure: unnecessarily complex ownership, shell entities, nominee directors, addresses that are mail drops.\n• Trade: invoice values off market price, goods descriptions vague, shipment routes that make no commercial sense.\nAlways add: "A red flag is not proof — it triggers review in the context of the full customer profile."',
    tip: 'The closing sentence matters: junior candidates treat red flags as verdicts. Seniors treat them as questions. Show you know the difference.',
  },
  {
    id: 14, category: 'fundamentals',
    question: 'Explain the difference between money laundering and terrorist financing.',
    answerGuide: 'Direction and purpose differ:\n• ML: money from CRIME being made to look clean. Source is illicit; goal is enjoyment of proceeds. Usually large amounts.\n• TF: money (often from LEGITIMATE sources — donations, salaries, small businesses) directed to a violent purpose. Source may be clean; the destination is dirty. Amounts can be tiny — the 9/11 attacks cost roughly half a million dollars.\nImplications for detection: TF is harder to spot with amount-based rules; behavioral and network indicators (transfers to conflict-adjacent regions, NPO abuse, many-to-one funnel accounts) matter more.\nBoth are covered by the FATF framework; TF must be criminalized under R.5.',
    tip: 'The phrase "reverse money laundering" for TF earns instant credibility.',
  },
  {
    id: 15, category: 'fundamentals',
    question: 'What is trade-based money laundering and how would you detect it?',
    answerGuide: 'TBML disguises criminal proceeds by moving value through trade transactions. Core techniques:\n• Over-invoicing (importer pays too much → value moves to exporter) / under-invoicing (the reverse).\n• Multiple invoicing — same shipment billed twice through different banks.\n• Phantom shipments — paperwork for goods that never ship.\n• Misrepresenting quality or quantity of goods.\nDetection: compare invoice price to market benchmarks, verify shipment documents against vessel/container data, watch for goods inconsistent with the customer\'s business, circuitous shipping routes, letters of credit with repeated amendments, and third-party payments unrelated to the trade parties.\nFATF calls TBML one of the hardest typologies to detect because value moves through goods, not the financial system.',
    tip: 'Name one concrete detection check (price vs. market benchmark) rather than reciting all techniques — depth beats coverage in interviews.',
  },
  {
    id: 16, category: 'fundamentals',
    question: 'What are the key components of an effective AML compliance program?',
    answerGuide: 'The classic "pillars" (US framing — five after CDD was added):\n1. Internal policies, procedures, and controls.\n2. A designated compliance officer (BSA/MLRO) with adequate authority and resources.\n3. Ongoing employee training.\n4. Independent testing/audit.\n5. Risk-based customer due diligence (the "fifth pillar", 2018).\nWrap it in the risk-based approach: an enterprise-wide risk assessment drives where controls concentrate. Mention governance/tone-from-the-top and that FATF R.18 requires group-wide programs covering foreign branches.',
    tip: 'If the role is UK/EU, translate: MLRO instead of BSA Officer, and reference the ML Regulations/AMLD framing. Tailoring to their jurisdiction is a big signal.',
  },
  // ── Regulatory & Frameworks ───────────────────────────────────────
  {
    id: 20, category: 'regulatory',
    question: 'What is the FATF and what role does it play globally?',
    answerGuide: 'The Financial Action Task Force — the inter-governmental standard-setter for AML/CFT/counter-proliferation, created by the G7 in 1989, headquartered at the OECD in Paris.\nKey functions:\n• Sets the 40 Recommendations — the global AML/CFT standard.\n• Conducts mutual evaluations of countries (technical compliance + effectiveness).\n• Maintains the public lists: "black list" (high-risk jurisdictions subject to a call for action — think North Korea, Iran, Myanmar) and "grey list" (jurisdictions under increased monitoring).\n• Publishes typology reports and guidance (virtual assets, TBML, PF).\nIt is not a regulator — it has no direct enforcement power, but listing has severe economic consequences via de-risking and required EDD (R.19).',
    tip: 'Casually knowing 2–3 current grey-list countries (check fatf-gafi.org before the interview — the list changes three times a year) shows you follow the field live, not just from textbooks.',
  },
  {
    id: 21, category: 'regulatory',
    question: 'Can you name the major international AML instruments/conventions?',
    answerGuide: '• Vienna Convention (1988) — first to criminalize drug money laundering.\n• Palermo Convention (2000) — extended ML to organized crime; defines participation in criminal groups.\n• Mérida Convention / UNCAC (2003) — corruption; asset recovery framework.\n• Terrorist Financing Convention (1999) — basis for FATF R.5.\n• UN Security Council Resolutions — 1267/1989/2253 (Al-Qaida/ISIL sanctions lists), 1373 (national designation regimes), plus DPRK/Iran proliferation resolutions.\nRegional layers: EU AML Directives (now the EU AML Regulation + AMLA authority), the Egmont Group for FIU cooperation, Wolfsberg Group for private-sector standards, and the Basel Committee for supervisory guidance.',
    tip: 'A one-word anchor for each: Vienna = drugs, Palermo = organized crime, Mérida = corruption. Interviewers ask this to check certification-level knowledge.',
  },
  {
    id: 22, category: 'regulatory',
    question: 'What are targeted financial sanctions and how do they differ from AML obligations?',
    answerGuide: 'Sanctions are prohibitions — freeze assets of, and provide no funds/services to, designated persons, entities, vessels, or countries — imposed by the UN, and nationally by OFAC (US), OFSI (UK), the EU, etc.\nKey differences from AML:\n• Strict liability (in the US): intent does not matter; processing a sanctioned payment is a violation even if accidental.\n• Real-time obligation: screening must block BEFORE the transaction; AML monitoring is largely after-the-fact.\n• No thresholds: a $1 payment to a designated person is a breach.\nMention 50% rule (OFAC: entities owned ≥50% by designated persons are also blocked), and FATF R.6 (terrorism) / R.7 (proliferation) requiring freezing "without delay."',
    tip: 'The phrase "sanctions is strict liability, AML is risk-based" crisply shows you grasp the fundamental difference in mindset between the two disciplines.',
  },
  {
    id: 23, category: 'regulatory',
    question: 'What recent AML enforcement action or industry development have you been following?',
    answerGuide: 'Have TWO ready — one enforcement action, one regulatory development. Strong examples to research and be able to summarize:\n• TD Bank (2024) — historic ~$3B US resolution; systemic monitoring failures; first bank guilty plea to BSA program failures conspiracy; asset cap imposed.\n• Binance (2023) — $4.3B; willful BSA and sanctions violations at a crypto exchange.\n• Danske Bank Estonia — €200B+ of suspicious non-resident flows; the classic correspondent/branch oversight failure.\nDevelopments: EU AMLA (new EU-level AML authority), the US Corporate Transparency Act BO registry saga, FATF work on virtual assets and payment transparency.\nStructure your answer: what happened → what control failed → what it teaches the industry.',
    tip: 'This question separates candidates who WANT the field from those who APPLY to it. Spend 30 minutes on recent news before every interview; it is the highest-ROI prep you can do.',
  },
  {
    id: 24, category: 'regulatory',
    question: 'What is a Politically Exposed Person, and how should institutions handle them?',
    answerGuide: 'A PEP is an individual entrusted with a prominent public function — heads of state, senior politicians, senior government/judicial/military officials, senior executives of state-owned enterprises, senior party officials — plus their family members and close associates.\nCategories: foreign PEPs (always higher-risk under FATF R.12 → mandatory EDD), domestic and international-organization PEPs (EDD when the relationship is higher-risk).\nRequired measures: risk systems to identify PEPs, senior management approval to onboard (or continue), establish source of wealth and source of funds, enhanced ongoing monitoring.\nCritical nuances: PEP status is NOT a crime and not grounds for automatic refusal — it is a risk factor; and "once a PEP" does not mean "always a PEP" but declassification should be risk-based, not automatic after a fixed period.',
    tip: 'The rationale to articulate: PEPs control public funds and are corruption-vulnerable — the risk is bribery/embezzlement proceeds. Explaining WHY beats reciting rules.',
  },
  // ── Monitoring & Investigations ───────────────────────────────────
  {
    id: 30, category: 'monitoring',
    question: 'Walk me through how you would investigate a transaction monitoring alert.',
    answerGuide: 'Give a repeatable framework:\n1. Understand the alert — what rule fired, what threshold, what period?\n2. Know the customer — KYC profile, stated occupation/business, expected activity, account history, prior alerts/SARs.\n3. Analyze the activity — pull the transactions; look for patterns (structuring, pass-through, velocity), counterparties, geographies; compare against the expected profile.\n4. Expand the lens — related accounts, negative news/adverse media, sanctions/PEP screening refresh, internal intelligence.\n5. Decide — activity explained by profile → document rationale and close; unexplained/suspicious → escalate for SAR consideration.\n6. Document — every step, so a reviewer or regulator can follow your reasoning years later. "If it isn\'t documented, it didn\'t happen."\nEmphasize: the decision standard is suspicion, not proof of crime.',
    tip: 'Interviewers listen for step 2 — weak analysts jump straight to the transactions. Strong analysts ask "what SHOULD this customer\'s activity look like?" first.',
  },
  {
    id: 31, category: 'monitoring',
    question: 'What makes a good SAR/STR narrative?',
    answerGuide: 'The five W\'s + how, written for a reader who knows nothing about the case:\n• WHO — subjects with identifiers; their relationship to the institution.\n• WHAT — the suspicious activity, with total amounts and transaction types.\n• WHEN — the activity window with specific dates.\n• WHERE — accounts, branches, jurisdictions involved.\n• WHY suspicious — the heart of it: contrast the activity against the expected profile ("customer states X, yet activity shows Y").\n• HOW — the mechanism (structuring, funnel account, rapid movement offshore).\nStyle rules: chronological, factual, no speculation about guilt, no jargon or internal codes without explanation, lead with a summary sentence. Never say "customer committed money laundering" — say activity is "consistent with" a typology.\nAnd never, ever reveal the SAR\'s existence to the customer (tipping-off).',
    tip: 'Quote the FinCEN mantra: a good narrative can stand alone as the complete story. Law enforcement reads thousands — clarity is a public service.',
  },
  {
    id: 32, category: 'monitoring',
    question: 'A monitoring rule generates 95% false positives. Is that a problem, and what would you do about it?',
    answerGuide: 'Show balanced thinking — high false-positive rates are normal in AML (industry averages are often 90%+), but they carry real costs: analyst fatigue, backlogs, and true positives buried in noise.\nApproach:\n• Analyze the false positives — what do they share? (e.g., payroll batches tripping a structuring rule).\n• Tune thresholds/segments with data — customer-segment-specific thresholds beat one-size-fits-all.\n• Test before deploying: run proposed changes in parallel (below-the-line testing) to prove you would not have missed true positives.\n• Governance: document every tuning decision — regulators scrutinize threshold changes that reduce alert volume.\n• Longer term: feedback loops from investigators to rule owners; machine-learning risk scoring to prioritize the queue.\nKey caveat: the goal is not fewer alerts — it is better coverage per analyst hour. Effectiveness and efficiency, in that order.',
    tip: 'Mentioning below-the-line testing marks you as someone who understands model governance, which is rare and valuable at the analyst level.',
  },
  {
    id: 33, category: 'monitoring',
    question: 'How would you handle a backlog of 500 overdue alerts?',
    answerGuide: 'Triage + transparency:\n1. Escalate immediately — a backlog is a regulatory risk the MLRO/BSA Officer must know about. Hiding it makes it worse.\n2. Risk-rank the queue — by amount, customer risk rating, alert type severity, and age. Highest-risk first, not oldest-first.\n3. Quick wins — identify alert types that can be batch-reviewed or that a tuned rule spawned erroneously.\n4. Resource plan — overtime, temporary reallocations, or a remediation team with defined quality control.\n5. Root cause — was it a staffing gap, a rule change, a data spike? Fix the inflow, not just the pile.\n6. Track and report — daily metrics to management until cleared.\nThe theme: never trade quality for speed silently; if corners must be cut, that is a management decision made explicitly and documented.',
    tip: 'The first move (escalate) is the test. Candidates who start with "I\'d work faster" fail it; backlogs have sunk banks — TD Bank\'s consent order featured exactly this.',
  },
  // ── Scenario & Judgment ───────────────────────────────────────────
  {
    id: 40, category: 'judgment',
    question: 'A top revenue-generating client refuses to provide source-of-funds documentation. The relationship manager pressures you to approve the review anyway. What do you do?',
    answerGuide: 'The classic independence test. Strong answer arc:\n1. Stay professional with the RM — explain WHY the documentation is required (regulatory obligation, not bureaucracy) and offer to help frame the request to the client.\n2. Hold the line — revenue is never a mitigant for missing CDD. Approving without documentation makes YOU the control failure.\n3. Offer a path — set a clear deadline for the client; consider restrictions in the interim per policy.\n4. Escalate if pressure continues — to your manager/MLRO, factually and without drama; document the interaction.\n5. Know the endgame — if the client ultimately refuses, policy typically requires declining/exiting the relationship and considering an STR for the refusal itself (FATF R.10 explicitly contemplates this).\nTone matters: firm on the standard, constructive with the person.',
    tip: 'Bonus points for noting that unexplained refusal to provide standard KYC is itself a red flag that may warrant a SAR — few junior candidates know that.',
  },
  {
    id: 41, category: 'judgment',
    question: 'You discover that a colleague has been closing alerts without properly investigating them. What do you do?',
    answerGuide: 'Integrity + procedural fairness:\n1. Verify before accusing — could there be an explanation (a batch-closure instruction, a rule change, alerts reassigned)? Check a sample carefully.\n2. Do NOT confront in a way that could enable cover-up or become a personal conflict.\n3. Report through the proper channel — your manager, QA/QC function, or the whistleblower line if the manager is implicated. In compliance, an analyst rubber-stamping alerts is a serious control failure that can bury real crime.\n4. Preserve facts — note the alert IDs and dates you observed; stick to observations, not motives.\n5. Let the process work — do not investigate your colleague yourself.\nAcknowledge the discomfort honestly — "it is an uncomfortable situation" — then be unambiguous that reporting is non-negotiable. Closed-without-review alerts have been central to major enforcement actions.',
    tip: 'They want to see zero hesitation on WHETHER to report, and maturity on HOW. Both halves matter equally.',
  },
  {
    id: 42, category: 'judgment',
    question: 'You file an internal escalation recommending a SAR, but your manager overrules you without explanation. How do you respond?',
    answerGuide: 'Balance respect for hierarchy with personal accountability:\n1. Ask for the reasoning — respectfully. Your manager may have context you lack (an existing SAR, law enforcement contact, information from another business line). Most overrules have explanations.\n2. Present your analysis once more if you still disagree — focused on the facts that drive suspicion.\n3. Document your recommendation and the decision — this protects you, the manager, and the institution. Good escalation frameworks require documented rationale for SAR-decline decisions.\n4. Use the escalation path if you believe the decision is improper — MLRO, compliance committee, or whistleblower channel for serious concerns. Regulators expect a documented disagreement process.\n5. Accept legitimate outcomes — reasonable analysts can disagree on suspicion; if the process was followed and reasoning documented, that is the system working.\nNever: file externally on your own, tip anyone off, or quietly drop it without documentation.',
    tip: 'The keyword interviewers await is "document." A decision log protects everyone and is exactly what examiners ask for when reviewing declined SARs.',
  },
  {
    id: 43, category: 'judgment',
    question: 'During onboarding, a prospective customer asks you directly: "Will my transactions be reported to the government?" How do you answer?',
    answerGuide: 'A subtle tipping-off and ethics test.\n• What you CAN say: institutions are subject to regulatory reporting requirements — that is public knowledge (CTRs/threshold reports are described in law). "Like all banks, we comply with applicable reporting laws" is accurate and appropriate.\n• What you must NEVER do: disclose whether suspicious activity reporting has occurred or would occur for THEM specifically, explain monitoring thresholds or rule logic, or coach them on staying under thresholds — that enables structuring and could itself be a crime.\n• Note the behavior — unusual interest in reporting thresholds is a recognized red flag; document the question in the customer record and consider it in the risk assessment.\nDeliver the answer calmly — customers ask innocent versions of this all the time; the skill is answering honestly without revealing controls.',
    tip: 'This question tests whether you can be simultaneously honest, discreet, and alert. Mentioning that the question itself may be a red flag is the differentiator.',
  },
  {
    id: 44, category: 'judgment',
    question: 'Your institution wants to launch a new product — instant cross-border payments for small businesses. Compliance is asked for input. What risks do you raise?',
    answerGuide: 'Show product-risk thinking (FATF R.15 — assess new products BEFORE launch):\n• Speed: instant settlement means no window to interdict suspicious payments — screening must be real-time pre-execution.\n• Cross-border: sanctions exposure, high-risk corridors, correspondent relationships, travel-rule data (R.16) completeness.\n• Customer segment: small businesses are heterogeneous — shell-company risk, cash-intensive businesses, TBML exposure.\n• Controls to propose: risk-based onboarding with beneficial-ownership verification, real-time sanctions screening, velocity limits and holds for anomalies, segment-specific monitoring rules from day one, staged rollout with volume caps.\n• Governance: document the product risk assessment; define risk appetite and exit criteria.\nFrame it constructively: compliance enables the launch safely rather than blocking it. "Yes, if…" beats "no, because…".',
    tip: 'The "yes, if" framing is what separates business-partner compliance professionals from the "department of no" stereotype — hiring managers actively screen for it.',
  },
  // ── Questions to Ask Them ─────────────────────────────────────────
  {
    id: 50, category: 'askthem',
    question: 'What questions should YOU ask at the end of the interview?',
    answerGuide: 'Pick 3–4; they signal how you think:\nAbout the work:\n• "What does a typical alert queue look like here — volumes, typologies, and how is quality reviewed?"\n• "What case management and screening systems does the team use?"\n• "What typologies are you seeing most this year?"\nAbout growth:\n• "How do analysts progress here — is there a typology-specialist track vs. management?"\n• "Does the firm support certification (CAMS/ICA) — study time or funding?"\nAbout culture (the sharp ones):\n• "How does compliance\'s voice get heard when it conflicts with business goals — can you share an example?"\n• "What distinguishes your best analysts from the average ones?"\nAvoid: salary/leave in round one, anything answerable by 2 minutes on their website.',
    tip: 'The compliance-culture question ("what happens when compliance and business disagree?") doubles as YOUR due diligence — how they answer tells you whether you want the job.',
  },
  {
    id: 51, category: 'askthem',
    question: 'How should you prepare in the 48 hours before an AML interview?',
    answerGuide: 'A concrete checklist:\n1. The firm: business lines, customer base, geographies — their risk profile drives their AML priorities. Read their last annual report\'s risk/compliance section.\n2. Their history: search "<firm name> + fine/consent order/AML" — if they had an enforcement action, know it; you may be part of the remediation, and they WILL appreciate you knowing tactfully.\n3. The news: latest FATF plenary outcomes (grey-list changes), one or two recent enforcement actions, one regulatory development in their jurisdiction.\n4. Your stories: rehearse 6–8 STAR stories out loud — out loud matters.\n5. The basics cold: ML stages, CDD/EDD, red flags, SAR process, PEPs, sanctions vs. AML. These are pass/fail.\n6. Your questions: pick four (see the previous card).\n7. Logistics: names and roles of interviewers; look them up — a shared background is a rapport opener.',
    tip: 'Knowing about a firm\'s past consent order — and framing it respectfully as "I saw the program has been through remediation; I\'d find that rebuild experience valuable" — is a power move very few candidates attempt.',
  },
];
