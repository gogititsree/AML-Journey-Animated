export interface FatfRecommendation {
  number: number;
  title: string;
  group: string; // group letter A–G
  essence: string; // one-line plain-English summary
  detail: string; // exam-relevant detail
  hook: string; // number-peg memory hook
  hookEmoji: string;
}

export interface FatfGroup {
  letter: string;
  name: string;
  range: string;
  color: string;
  mnemonic: string;
  mnemonicExplainer: string;
  story: string; // mini story linking the recs in the group
}

// Master mnemonic for the 7 group themes, in order:
// Policies · ML/Confiscation · TF/Proliferation · Preventive · Transparency · Powers · International
// P M T P T P I → "Purple Monkeys Take Pictures, Then Post Instantly."
export const MASTER_MNEMONIC = {
  phrase: 'Purple Monkeys Take Pictures, Then Post Instantly',
  breakdown: [
    { word: 'Purple', theme: 'Policies & coordination', range: 'R.1–2' },
    { word: 'Monkeys', theme: 'Money laundering & confiscation', range: 'R.3–4' },
    { word: 'Take', theme: 'Terrorist & proliferation financing', range: 'R.5–8' },
    { word: 'Pictures', theme: 'Preventive measures', range: 'R.9–23' },
    { word: 'Then', theme: 'Transparency & beneficial ownership', range: 'R.24–25' },
    { word: 'Post', theme: 'Powers of authorities', range: 'R.26–35' },
    { word: 'Instantly', theme: 'International cooperation', range: 'R.36–40' },
  ],
};

export const FATF_GROUPS: FatfGroup[] = [
  {
    letter: 'A',
    name: 'AML/CFT Policies & Coordination',
    range: 'R.1–2',
    color: '#f59e0b',
    mnemonic: '“ONE risk, TWO to tango.”',
    mnemonicExplainer: 'R.1 is the ONE risk assessment that drives everything (risk-based approach). R.2 — it takes TWO to tango: agencies must coordinate nationally.',
    story: 'Every journey starts with a map. Before anything else, a country maps its risks (1), then gets all its agencies dancing in step (2).',
  },
  {
    letter: 'B',
    name: 'Money Laundering & Confiscation',
    range: 'R.3–4',
    color: '#ef4444',
    mnemonic: '“THREE’s a crime, FOUR takes yours.”',
    mnemonicExplainer: 'R.3 makes money laundering a CRIME (rhymes with three). R.4 lets the state confiscate — at four, the law knocks on your door and takes what’s yours.',
    story: 'The villain launders cash (3 — it becomes a crime) and the police seize the mansion, the yacht, and the gold bars (4 — confiscation).',
  },
  {
    letter: 'C',
    name: 'Terrorist & Proliferation Financing',
    range: 'R.5–8',
    color: '#f97316',
    mnemonic: '“5-6-7-8 — stop the terror dance.”',
    mnemonicExplainer: 'Count it like a dance: 5 criminalize terrorist financing, 6 freeze terrorist assets, 7 freeze proliferation (WMD) assets, 8 protect charities from abuse.',
    story: 'The choreography of counter-terrorism: make TF a crime (5), freeze the terrorists’ money (6), freeze the nuke-builders’ money (7), and guard the charity collection plate (8).',
  },
  {
    letter: 'D',
    name: 'Preventive Measures',
    range: 'R.9–23',
    color: '#10b981',
    mnemonic: '“A Banker’s Day” — 15 rules from opening the vault (9) to keeping quiet (21) and briefing the lawyers (22–23).',
    mnemonicExplainer: 'The biggest group — everything a bank or business must DO. Walk through a banker’s day: secrecy can’t block you (9), know your customer (10), file everything (11), watch the politicians (12) and foreign banks (13), the remitters (14), the new tech (15), the wires (16), your outsourcing (17), your own controls (18), risky countries (19), report suspicion (20), never tip off (21), and lawyers/casinos do it too (22–23).',
    story: 'A compliance officer’s workday, in order: unlock secrecy (9), greet customers properly (10), file the paperwork (11), spot the senator (12), vet the foreign bank (13), check the money transmitter (14), review the crypto app (15), trace the wire (16), call the outsourcer (17), audit yourself (18), flag the risky country (19), report the weird one (20), tell no one (21), then remind the lawyer and the casino they have the same job (22–23).',
  },
  {
    letter: 'E',
    name: 'Transparency & Beneficial Ownership',
    range: 'R.24–25',
    color: '#3b82f6',
    mnemonic: '“TWO DOZEN shell companies, TRUST me at 25.”',
    mnemonicExplainer: 'R.24 = two dozen (24) shell COMPANIES cracked open — beneficial ownership of legal persons. R.25 = “trust me, I’m 25” — beneficial ownership of legal ARRANGEMENTS (trusts).',
    story: 'Crack open the matryoshka dolls: first the companies (24), then the trusts hiding inside them (25).',
  },
  {
    letter: 'F',
    name: 'Powers & Responsibilities of Authorities',
    range: 'R.26–35',
    color: '#8b5cf6',
    mnemonic: '“The Watchers’ Tower” — supervisors (26–28), the FIU at 29, detectives (30–31), the border (32), and the admin floor (33–35).',
    mnemonicExplainer: 'Climb the tower: floor 26–28 the supervisors (banks 26, their powers 27, DNFBPs 28); floor 29 the FIU nerve center; floor 30–31 law enforcement (duties, then powers); floor 32 border control catching cash couriers; floors 33–35 the admin offices (statistics, guidance, sanctions).',
    story: 'A tower of watchers: bank supervisors at the base (26–27), casino supervisors next (28), the intelligence unit at 29 (FIU — the brain), detectives above (30–31), customs on the lookout deck (32), and the record-keepers, advisers, and punishers at the top (33, 34, 35).',
  },
  {
    letter: 'G',
    name: 'International Cooperation',
    range: 'R.36–40',
    color: '#14b8a6',
    mnemonic: '“The Passport Pages” — sign (36), assist (37), seize together (38), extradite at 39 (The 39 Steps!), and everyone cooperates at 40.',
    mnemonicExplainer: 'R.36 ratify the treaties, R.37 mutual legal assistance, R.38 MLA for freezing/confiscation, R.39 extradition (remember the thriller “The 39 Steps” — a man chased across borders!), R.40 all other forms of cooperation.',
    story: 'The finale is global: sign the conventions (36), help each other investigate (37), freeze assets together (38), hand over the fugitive — 39 steps to extradition — and keep every other channel open (40).',
  },
];

export const FATF_RECOMMENDATIONS: FatfRecommendation[] = [
  // ── Group A: Policies & Coordination ──────────────────────────────
  {
    number: 1, group: 'A',
    title: 'Assessing risks & applying a risk-based approach',
    essence: 'Countries and institutions must identify, assess, and understand their ML/TF risks — and apply resources where risk is highest.',
    detail: 'The foundation of the entire framework. Higher risk → enhanced measures; lower risk → simplified measures may be permitted. The risk-based approach (RBA) drives everything else.',
    hook: 'ONE ring to rule them all — ONE risk assessment rules the whole framework.',
    hookEmoji: '💍',
  },
  {
    number: 2, group: 'A',
    title: 'National cooperation & coordination',
    essence: 'Domestic agencies (policy makers, FIU, law enforcement, supervisors) must cooperate and coordinate on AML/CFT policy.',
    detail: 'Requires national AML/CFT policies informed by identified risks, and mechanisms for inter-agency cooperation — including on combating financing of proliferation.',
    hook: 'It takes TWO to tango — agencies must dance in step.',
    hookEmoji: '💃',
  },
  // ── Group B: ML & Confiscation ────────────────────────────────────
  {
    number: 3, group: 'B',
    title: 'Money laundering offence',
    essence: 'Criminalize money laundering based on the Vienna and Palermo Conventions, covering the widest range of predicate offences.',
    detail: 'ML should apply to all serious offences. Countries may use an all-crimes approach, a threshold approach, a list approach, or a combination. FATF designates 21 categories of predicate offences.',
    hook: 'THREE rhymes with “decree” — the decree that laundering is a CRIME (three ≈ crime).',
    hookEmoji: '⚖️',
  },
  {
    number: 4, group: 'B',
    title: 'Confiscation & provisional measures',
    essence: 'Authorities must be able to freeze, seize, and confiscate laundered property, proceeds, and instrumentalities.',
    detail: 'Includes provisional measures (freezing/seizing) without prior notice, and countries should consider non-conviction-based confiscation.',
    hook: 'At FOUR, the law knocks on your door — and takes what’s yours.',
    hookEmoji: '🚪',
  },
  // ── Group C: TF & Proliferation ───────────────────────────────────
  {
    number: 5, group: 'C',
    title: 'Terrorist financing offence',
    essence: 'Criminalize terrorist financing — including financing terrorist organizations and individual terrorists, even without a link to a specific act.',
    detail: 'Based on the Terrorist Financing Convention. TF must be a predicate offence for money laundering.',
    hook: 'FIVE = high five denied — no funds for terrorists.',
    hookEmoji: '🖐️',
  },
  {
    number: 6, group: 'C',
    title: 'Targeted financial sanctions — terrorism & TF',
    essence: 'Freeze without delay the funds of persons designated under UN Security Council resolutions on terrorism (e.g., 1267, 1373).',
    detail: '“Without delay” means within hours, not days. No funds may be made available to designated persons or entities.',
    hook: 'SIX = freeze the terrorist’s bricks (of cash) — ice at six.',
    hookEmoji: '🧊',
  },
  {
    number: 7, group: 'C',
    title: 'Targeted financial sanctions — proliferation',
    essence: 'Freeze without delay the assets of persons designated by the UN for financing proliferation of weapons of mass destruction.',
    detail: 'Covers UNSCRs on North Korea and Iran. Same “without delay” standard as R.6, but for WMD proliferation financing.',
    hook: 'SEVEN = no nukes to heaven — freeze the proliferators.',
    hookEmoji: '🚀',
  },
  {
    number: 8, group: 'C',
    title: 'Non-profit organisations',
    essence: 'Protect NPOs from terrorist-financing abuse using focused, proportionate, risk-based measures — without disrupting legitimate charity.',
    detail: 'Countries should identify which NPOs are at risk and apply targeted oversight. A frequently-tested nuance: measures must not discourage legitimate charitable activity.',
    hook: 'EIGHT = guard the charity plate.',
    hookEmoji: '🍽️',
  },
  // ── Group D: Preventive Measures ──────────────────────────────────
  {
    number: 9, group: 'D',
    title: 'Financial institution secrecy laws',
    essence: 'Bank secrecy laws must never inhibit implementation of the FATF Recommendations.',
    detail: 'Secrecy cannot be used to refuse information sharing with competent authorities or between institutions where required (e.g., R.13, 16, 17).',
    hook: 'NINE = no hiding behind the vine — secrecy is no shield.',
    hookEmoji: '🌿',
  },
  {
    number: 10, group: 'D',
    title: 'Customer due diligence (CDD)',
    essence: 'Identify and verify customers and beneficial owners; understand the purpose of the relationship; monitor it ongoing. Anonymous accounts are prohibited.',
    detail: 'The four CDD pillars: (1) identify & verify the customer, (2) identify & verify the beneficial owner, (3) understand purpose and intended nature, (4) ongoing monitoring. Triggered when establishing relations, occasional transactions above USD/EUR 15,000, wire transfers above USD/EUR 1,000, ML/TF suspicion, or doubts about prior data.',
    hook: 'A PERFECT 10 — know your customer perfectly. The most famous number in AML.',
    hookEmoji: '🔟',
  },
  {
    number: 11, group: 'D',
    title: 'Record keeping',
    essence: 'Keep all transaction and CDD records for at least FIVE years, available swiftly to authorities.',
    detail: 'Records must be sufficient to reconstruct individual transactions and provide evidence for prosecution. Five years from the transaction or from the end of the business relationship.',
    hook: 'ELEVEN looks like two filing cabinets standing side by side (11) — keep the files 5 years.',
    hookEmoji: '🗄️',
  },
  {
    number: 12, group: 'D',
    title: 'Politically exposed persons (PEPs)',
    essence: 'Apply extra measures to PEPs: senior-management approval, establish source of wealth/funds, enhanced ongoing monitoring.',
    detail: 'Foreign PEPs always get enhanced measures; domestic and international-organization PEPs get them when higher-risk. Applies to family members and close associates. PEP status is not itself grounds to refuse — it triggers EDD.',
    hook: 'A DOZEN politicians at a fundraiser — twelve PEPs to watch.',
    hookEmoji: '🎩',
  },
  {
    number: 13, group: 'D',
    title: 'Correspondent banking',
    essence: 'Before banking a foreign respondent bank: understand its business, assess its controls, get senior-management approval — and never bank shell banks.',
    detail: 'Prohibits relationships with shell banks and requires satisfaction that respondents don’t permit shell-bank use. Document each institution’s responsibilities.',
    hook: 'UNLUCKY 13 — a risky pen-pal abroad. Vet your foreign banking pen-pals.',
    hookEmoji: '✉️',
  },
  {
    number: 14, group: 'D',
    title: 'Money or value transfer services (MVTS)',
    essence: 'Money remitters must be licensed or registered, subject to monitoring, and their agents identified.',
    detail: 'Targets hawala and remittance networks. Countries must sanction unlicensed MVTS operators.',
    hook: '14th Street money transfer shop — the remitter on the corner needs a license.',
    hookEmoji: '🏪',
  },
  {
    number: 15, group: 'D',
    title: 'New technologies',
    essence: 'Assess ML/TF risks of new products, practices, and technologies BEFORE launch — includes virtual assets and VASPs.',
    detail: 'The 2019 update brought virtual assets and virtual asset service providers into scope: VASPs must be licensed/registered and supervised, and apply the full preventive suite.',
    hook: 'FIFTEEN-year-olds love new tech — the teenager glued to the crypto app.',
    hookEmoji: '📱',
  },
  {
    number: 16, group: 'D',
    title: 'Wire transfers',
    essence: 'Wire transfers must carry accurate originator AND beneficiary information all along the payment chain — the “travel rule.”',
    detail: 'Required originator info: name, account number, and address (or ID number / date & place of birth). Institutions must monitor for missing info and apply freezing measures per R.6/7.',
    hook: 'SWEET 16 — wiring birthday money to your sweetheart; the card must say who it’s from and to.',
    hookEmoji: '💸',
  },
  {
    number: 17, group: 'D',
    title: 'Reliance on third parties',
    essence: 'You may rely on third parties for CDD — but ultimate responsibility ALWAYS stays with you.',
    detail: 'The relying institution must immediately obtain CDD information and be satisfied copies are available on request. Consider country risk of where the third party is based.',
    hook: 'At 17 you can borrow the car — but your parents are still responsible. Borrow the CDD, keep the liability.',
    hookEmoji: '🚗',
  },
  {
    number: 18, group: 'D',
    title: 'Internal controls, foreign branches & subsidiaries',
    essence: 'Institutions need group-wide AML programs: policies, compliance officer, screening, training, independent audit — applied to foreign branches too.',
    detail: 'Where host-country rules are weaker, the group standard applies; if the host country prevents it, inform the home supervisor. Includes group-wide information sharing.',
    hook: 'At 18 you’re an adult — time for self-control (internal controls), even when you move abroad.',
    hookEmoji: '🎓',
  },
  {
    number: 19, group: 'D',
    title: 'Higher-risk countries',
    essence: 'Apply enhanced due diligence — proportionate to risk — to relationships and transactions involving countries FATF calls out.',
    detail: 'Countries must be able to apply countermeasures when FATF calls for them (think black list / grey list). EDD must be effective and proportionate.',
    hook: '19 = danger zone. Remember COVID-19: some places require extra precautions.',
    hookEmoji: '☣️',
  },
  {
    number: 20, group: 'D',
    title: 'Reporting of suspicious transactions',
    essence: 'If an institution suspects funds are criminal proceeds or linked to TF, it MUST report promptly to the FIU.',
    detail: 'A legal obligation, not discretion. “Suspects or has reasonable grounds to suspect” — the threshold is suspicion, not proof. Applies to attempted transactions too.',
    hook: '20/20 vision — you SEE something suspicious, you SAY something. Report it.',
    hookEmoji: '👀',
  },
  {
    number: 21, group: 'D',
    title: 'Tipping-off & confidentiality',
    essence: 'Never reveal that an STR has been filed. Good-faith reporters are protected from liability.',
    detail: 'Two sides: safe harbor for those who report in good faith, and prohibition of tipping off the customer. A classic exam pairing with R.20.',
    hook: '21 = old enough to drink, old enough to keep a secret. What happens in the FIU stays in the FIU.',
    hookEmoji: '🤫',
  },
  {
    number: 22, group: 'D',
    title: 'DNFBPs: customer due diligence',
    essence: 'Casinos, real estate agents, dealers in precious metals/stones, lawyers, notaries, accountants, and TCSPs must apply CDD in specified situations.',
    detail: 'Casinos: transactions ≥ USD/EUR 3,000. Dealers in precious metals/stones: cash ≥ USD/EUR 15,000. Lawyers/accountants: when preparing or carrying out specified transactions (buying property, managing assets, creating companies…).',
    hook: '22 — “two twos”: the OTHER twos (non-bank pros) must do CDD TOO. The lawyer and the casino join the club.',
    hookEmoji: '🎰',
  },
  {
    number: 23, group: 'D',
    title: 'DNFBPs: other measures',
    essence: 'DNFBPs must also file STRs, implement internal controls, and follow the higher-risk country rules (R.18–21 applied to them).',
    detail: 'Lawyers need not report where information is subject to legal professional privilege — a frequently tested nuance.',
    hook: '23 — Michael Jordan finishes the job: the pros complete the full program (reporting and all).',
    hookEmoji: '🏀',
  },
  // ── Group E: Transparency & Beneficial Ownership ──────────────────
  {
    number: 24, group: 'E',
    title: 'Transparency & beneficial ownership of legal persons',
    essence: 'Authorities must have timely access to adequate, accurate, up-to-date beneficial ownership information on companies. Bearer shares must be controlled.',
    detail: 'Prevents misuse of companies for ML/TF. Countries should assess risks of legal persons and pick mechanisms (registries, company-held info) to ensure BO transparency.',
    hook: 'TWO DOZEN shell companies stacked like eggs — crack them open to find the real owner.',
    hookEmoji: '🥚',
  },
  {
    number: 25, group: 'E',
    title: 'Transparency & beneficial ownership of legal arrangements',
    essence: 'Same idea for trusts and similar arrangements: trustees must hold and disclose beneficial ownership information.',
    detail: 'Trustees must know settlors, trustees, protectors, beneficiaries. Express trusts are the classic vehicle here.',
    hook: '“TRUST me, I’m 25” — the trust-fund kid. 25 = trusts.',
    hookEmoji: '🎁',
  },
  // ── Group F: Powers of Authorities ────────────────────────────────
  {
    number: 26, group: 'F',
    title: 'Regulation & supervision of financial institutions',
    essence: 'Financial institutions must be licensed/registered and supervised for AML/CFT — with fit-and-proper tests to keep criminals out of ownership.',
    detail: 'Core Principles institutions (banks, insurance, securities) get prudential-style supervision; supervision must be risk-based.',
    hook: '26 letters in the alphabet — the supervisor knows the whole book of banks A to Z.',
    hookEmoji: '🔤',
  },
  {
    number: 27, group: 'F',
    title: 'Powers of supervisors',
    essence: 'Supervisors need real teeth: conduct inspections, compel information, and impose sanctions.',
    detail: 'Includes power to impose disciplinary and financial sanctions and to withdraw, restrict or suspend licenses.',
    hook: '27 — one more than 26: the supervisor plus their toolbox of powers.',
    hookEmoji: '🧰',
  },
  {
    number: 28, group: 'F',
    title: 'Regulation & supervision of DNFBPs',
    essence: 'Casinos must be licensed and comprehensively supervised; other DNFBPs monitored by a supervisor or self-regulatory body.',
    detail: 'Casino operators face fit-and-proper requirements. Other DNFBPs may be overseen risk-based by an SRB (e.g., a bar association).',
    hook: '28 = casino roulette wheel spinning — someone must watch the house.',
    hookEmoji: '🛞',
  },
  {
    number: 29, group: 'F',
    title: 'Financial intelligence units (FIU)',
    essence: 'Every country needs an FIU: the national center for receiving and analyzing STRs and disseminating financial intelligence.',
    detail: 'The FIU should be operationally independent and should apply for Egmont Group membership. Three functions: receive, analyze, disseminate.',
    hook: '29 — the nerve center on floor 29 of the watchers’ tower. All suspicious reports flow here.',
    hookEmoji: '🧠',
  },
  {
    number: 30, group: 'F',
    title: 'Responsibilities of law enforcement & investigative authorities',
    essence: 'Designated authorities must proactively investigate ML/TF alongside predicate offences — including parallel financial investigations.',
    detail: '“Follow the money” is a duty, not an option. Includes pursuing ML investigations even when the predicate occurred abroad.',
    hook: '30 — the detective’s badge number. At 30, you carry the responsibility.',
    hookEmoji: '🕵️',
  },
  {
    number: 31, group: 'F',
    title: 'Powers of law enforcement & investigative authorities',
    essence: 'Investigators need powers: compel documents, search persons and premises, take witness statements, undercover ops, intercept communications.',
    detail: 'Also mechanisms to identify whether persons hold accounts (e.g., account registries) without tipping the owner.',
    hook: '31 flavors of investigative powers — the full Baskin-Robbins menu for detectives.',
    hookEmoji: '🍨',
  },
  {
    number: 32, group: 'F',
    title: 'Cash couriers',
    essence: 'Detect physical cross-border movement of cash and bearer instruments via a declaration or disclosure system; stop and confiscate suspect funds.',
    detail: 'The threshold is USD/EUR 15,000 for declarations. False declaration → sanctions and possible confiscation.',
    hook: '32 teeth in a nervous smile at customs — the courier with a suitcase full of cash.',
    hookEmoji: '🧳',
  },
  {
    number: 33, group: 'F',
    title: 'Statistics',
    essence: 'Keep comprehensive statistics: STRs received, ML/TF investigations, prosecutions, convictions, property frozen, MLA requests.',
    detail: 'Statistics prove effectiveness — the backbone of FATF mutual evaluations.',
    hook: '33 — a pair of 3s side by side like a bar chart. Count everything.',
    hookEmoji: '📊',
  },
  {
    number: 34, group: 'F',
    title: 'Guidance & feedback',
    essence: 'Authorities and supervisors must give institutions guidelines and feedback to help them apply AML/CFT measures and detect suspicious transactions.',
    detail: 'Feedback loops (e.g., FIU feedback on STR quality) improve the whole system.',
    hook: '34 — the mentor one step ahead of the detective (33+1), handing back advice.',
    hookEmoji: '🗣️',
  },
  {
    number: 35, group: 'F',
    title: 'Sanctions',
    essence: 'Effective, proportionate, and dissuasive sanctions — criminal, civil, or administrative — for failures to comply, applicable to institutions AND their directors/senior management.',
    detail: 'The magic three words for the exam: effective, proportionate, dissuasive.',
    hook: '35 — the speed-limit sign: break it and pay the fine.',
    hookEmoji: '🚸',
  },
  // ── Group G: International Cooperation ────────────────────────────
  {
    number: 36, group: 'G',
    title: 'International instruments',
    essence: 'Ratify and implement the key conventions: Vienna (1988), Palermo (2000), Mérida/UNCAC (2003), and the Terrorist Financing Convention (1999).',
    detail: 'Vienna = drugs, Palermo = organized crime, Mérida = corruption, TF Convention = terrorist financing. Know which is which.',
    hook: '36 — sign here, here, here, and here: four signatures on four treaties.',
    hookEmoji: '🖊️',
  },
  {
    number: 37, group: 'G',
    title: 'Mutual legal assistance (MLA)',
    essence: 'Rapidly provide the widest range of legal assistance in ML/TF investigations — no unreasonable conditions, no refusal on secrecy or fiscal grounds alone.',
    detail: 'Dual criminality, where required, should be satisfied if both countries criminalize the underlying conduct regardless of offence label.',
    hook: '37 — pick up the international hotline and help your neighbor’s investigation.',
    hookEmoji: '📞',
  },
  {
    number: 38, group: 'G',
    title: 'MLA: freezing & confiscation',
    essence: 'Be able to freeze, seize, and confiscate assets at another country’s request — and consider sharing confiscated assets.',
    detail: 'Includes non-conviction-based confiscation cooperation where possible, and coordinated seizing actions.',
    hook: '38 — freeze together: two countries gripping the same suitcase (3 and 8 handcuffed together).',
    hookEmoji: '🤝',
  },
  {
    number: 39, group: 'G',
    title: 'Extradition',
    essence: 'ML and TF must be extraditable offences. Execute requests without undue delay; never shelter your own nationals from justice.',
    detail: 'If a country won’t extradite its own nationals, it must prosecute them domestically instead (“extradite or prosecute”).',
    hook: '“The 39 Steps” — the classic thriller about a fugitive chased across borders. 39 = extradition.',
    hookEmoji: '🎬',
  },
  {
    number: 40, group: 'G',
    title: 'Other forms of international cooperation',
    essence: 'FIU-to-FIU, supervisor-to-supervisor, cop-to-cop: exchange information internationally, spontaneously and on request.',
    detail: 'The catch-all cooperation channel — including diagonal cooperation (with non-counterparts) via appropriate gateways.',
    hook: '40 — Ali Baba’s forty thieves need forty countries working together to catch them all.',
    hookEmoji: '🌍',
  },
];

export const REC_BY_NUMBER = new Map(FATF_RECOMMENDATIONS.map(r => [r.number, r]));
export const GROUP_BY_LETTER = new Map(FATF_GROUPS.map(g => [g.letter, g]));
