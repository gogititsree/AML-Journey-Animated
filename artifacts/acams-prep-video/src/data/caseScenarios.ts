export interface CaseClue {
  text: string;
  isRedFlag: boolean;
  explanation: string;
}

export interface CaseDecisionOption {
  text: string;
  quality: 'best' | 'ok' | 'poor';
  feedback: string;
}

export interface CaseDecision {
  situation: string;
  options: CaseDecisionOption[];
}

export interface CaseScenario {
  id: number;
  title: string;
  tagline: string;
  sector: string;
  difficulty: 'Analyst' | 'Senior' | 'Expert';
  color: string;
  emoji: string;
  briefing: string[];
  clues: CaseClue[];
  decisions: CaseDecision[];
  debrief: string[];
  learningPoints: string[];
}

export const CASE_SCENARIOS: CaseScenario[] = [
  // ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'The Spotless Car Wash',
    tagline: 'A cash-intensive business with suspiciously perfect revenue',
    sector: 'Retail / Community Banking',
    difficulty: 'Analyst',
    color: '#f59e0b',
    emoji: '🚗',
    briefing: [
      'You are a transaction monitoring analyst at Riverside Community Bank. An alert has fired on the account of SPOTLESS SHINE LLC, a car wash that opened an account 14 months ago. The rule: "cash deposit velocity — 30-day volume exceeds customer segment baseline by 300%."',
      'The KYC file says the business is a single-location, four-bay car wash in a mid-sized suburb. Stated expected activity: $40,000–60,000 monthly revenue, mostly card payments with some cash. The owner, Daniel Reeve, opened the account with a business license and lease agreement, and visits a branch almost daily.',
      'Over the last 90 days, the account has received $310,000 in cash deposits — deposited across three different branches, always in amounts between $8,200 and $9,700. Card settlement revenue for the same period: $9,400. Outgoing activity: weekly wires of $45,000–70,000 to an auto parts wholesaler LLC in another state, which was registered two months before Spotless Shine opened its account.',
    ],
    clues: [
      {
        text: 'Cash deposits consistently between $8,200 and $9,700, always under $10,000',
        isRedFlag: true,
        explanation: 'Classic structuring. Amounts hugging the $10,000 CTR threshold — consistently and repeatedly — suggest deliberate evasion of currency transaction reporting. This is itself a federal crime, independent of the money’s source.',
      },
      {
        text: 'Deposits spread across three different branches',
        isRedFlag: true,
        explanation: 'Branch-hopping ("smurfing" across locations) is a structuring companion technique — it makes each branch see only a fraction of the true cash volume, defeating teller-level suspicion.',
      },
      {
        text: 'Card settlements of only $9,400 against $310,000 of cash in 90 days',
        isRedFlag: true,
        explanation: 'The ratio is the tell. A legitimate modern car wash takes most revenue by card. 97% cash is wildly inconsistent with the business model AND with the customer’s own stated profile — the account is behaving like a cash placement vehicle.',
      },
      {
        text: 'The owner visits a branch almost daily',
        isRedFlag: true,
        explanation: 'Frequent in-person cash deposits are consistent with placement operations. On its own, a chatty daily customer is innocent — combined with the structuring pattern, it completes the picture.',
      },
      {
        text: 'The business provided a valid license and lease at onboarding',
        isRedFlag: false,
        explanation: 'Having proper documentation is normal — and common for laundering fronts too. Valid paperwork is neutral: it neither clears nor implicates. Don’t treat "KYC was complete" as an activity mitigant.',
      },
      {
        text: 'Weekly wires to an auto parts wholesaler registered two months before the account opened',
        isRedFlag: true,
        explanation: 'The outbound leg. A freshly-registered out-of-state LLC receiving large round-amount wires from a cash-rich account looks like layering — moving placed funds onward under a commercial pretext. The registration timing suggests the entities were set up as a pipeline.',
      },
      {
        text: 'Monthly revenue exceeding the KYC-stated expectation',
        isRedFlag: true,
        explanation: 'Actual activity of ~$100k+/month against a stated $40–60k expectation is a material deviation from profile. Businesses do grow — but 2–5x deviations sustained for months require explanation, and here they coincide with structuring patterns.',
      },
    ],
    decisions: [
      {
        situation: 'You’ve reviewed the activity. A colleague suggests: "Just call the customer and ask him to explain the cash — he’s friendly, he’s in the branch every day anyway."',
        options: [
          {
            text: 'Agree — direct contact is the fastest way to resolve the alert',
            quality: 'poor',
            feedback: 'Dangerous. Asking a customer to explain the exact pattern you suspect is laundering borders on tipping off, and coaches him to adjust behavior. Investigations gather information from records first; any customer outreach must be routine-sounding and coordinated with your escalation chain.',
          },
          {
            text: 'Review account records, KYC file, prior alerts, and open-source information first — no customer contact at this stage',
            quality: 'best',
            feedback: 'Correct. Build the picture from what you have: onboarding docs, transaction history, counterparty research, adverse media, corporate registry checks on both LLCs. Customer contact for suspected structuring is almost never appropriate at analyst level.',
          },
          {
            text: 'Close the alert — the customer is well-known to branch staff and clearly runs a real business',
            quality: 'poor',
            feedback: 'Familiarity is not exculpatory — it is how front businesses work. "The branch knows him" has appeared in the narrative of countless enforcement actions. The structuring pattern is objective and unexplained.',
          },
        ],
      },
      {
        situation: 'Corporate registry research shows the auto parts wholesaler shares a registered agent with Spotless Shine LLC, and its listed address is a virtual office. What now?',
        options: [
          {
            text: 'Document the link and escalate with a SAR recommendation covering both the structuring and the outbound wires',
            quality: 'best',
            feedback: 'Right call. You now have placement (structured cash), layering (wires to a connected shell-like entity), and a profile mismatch. The narrative should connect all three and identify both entities and Mr. Reeve.',
          },
          {
            text: 'Recommend filing only on the cash structuring — the wires are speculative',
            quality: 'ok',
            feedback: 'Filing is right, but truncating the story weakens it. The wires are not speculation: shared registered agent + virtual office + timing are documented facts that belong in the narrative. Let law enforcement see the whole pipeline.',
          },
          {
            text: 'Freeze the account immediately yourself to stop further laundering',
            quality: 'poor',
            feedback: 'Analysts don’t unilaterally freeze accounts — and abrupt account action can tip the customer off. Account restriction/exit decisions follow the escalation and SAR process, weighed deliberately by the right decision-makers.',
          },
        ],
      },
      {
        situation: 'Your SAR is filed. Two weeks later, Daniel Reeve asks his branch manager, "Is everything okay with my account? Someone told me banks report people."',
        options: [
          {
            text: 'The manager should reassure him: "Nothing to worry about — no reports have been filed on you"',
            quality: 'poor',
            feedback: 'Two failures in one sentence: it is a lie, and if it WERE true it would be a disclosure. Confirming or denying SAR existence is prohibited (tipping off). Staff must never signal SAR status either way.',
          },
          {
            text: 'The manager gives a neutral, factual answer: banks have regulatory obligations like every institution; his account is open and operating',
            quality: 'best',
            feedback: 'Correct. Neutral, true, reveals nothing about monitoring or reporting status. The interaction itself — a customer probing about reports after a period of structuring — is noteworthy and should be documented and relayed to the AML team as a potential continuation red flag.',
          },
          {
            text: 'The manager should tell him to direct all questions to the compliance department',
            quality: 'ok',
            feedback: 'Not wrong, but clumsy — routing a customer to "compliance" over a casual question can itself signal that he is under review. Front-line staff should be trained to answer neutrally without escalating the customer’s suspicion.',
          },
        ],
      },
    ],
    debrief: [
      'This case is a textbook placement operation: street cash structured into the banking system through a cash-intensive front business, then layered onward through a connected shell entity dressed up as a supplier.',
      'Every element had an innocent cousin — car washes do take cash, businesses do outgrow projections, owners do visit branches. The skill you practiced is aggregation: no single fact convicts, but the combination (threshold-hugging amounts + branch-hopping + card/cash ratio + connected counterparty + profile deviation) is overwhelming.',
      'In real enforcement history, this pattern is everywhere: the classic US "smurfing" prosecutions began with exactly these deposit ledgers. Structuring is often the charge that sticks even when the predicate crime is hard to prove.',
    ],
    learningPoints: [
      'Structuring is a standalone crime — you don’t need to prove where the cash came from.',
      'Compare activity against the customer’s OWN stated profile, not just against generic thresholds.',
      'Never let customer familiarity or branch relationships function as a control.',
      'Tipping-off risk shapes every step: records first, neutral language always, no SAR disclosure ever.',
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'The Minister’s Nephew',
    tagline: 'Private banking, a sudden fortune, and a PEP by association',
    sector: 'Private Banking / Wealth Management',
    difficulty: 'Senior',
    color: '#8b5cf6',
    emoji: '🎩',
    briefing: [
      'You are a senior KYC analyst in the private bank of Meridian Wealth. A relationship manager submits a high-priority onboarding: Kwame A., 34, requesting a private banking relationship with an initial deposit of $6.2 million, wired from a law firm’s client account in a mid-tier offshore center.',
      'Kwame is a citizen of a resource-rich country whose Ministry of Infrastructure is run by his uncle — making Kwame a close associate/family member of a foreign PEP under your policy. His stated occupation: "construction consultant." His stated source of wealth: "proceeds from sale of shareholding in a construction company." The RM notes the client is "well known to two existing customers" and is "time-sensitive due to a property purchase."',
      'Documents provided: passport, utility bill, a share-sale agreement showing he sold 30% of Zenith BuildCo for $6.5M to an entity called Harmattan Holdings Ltd (registered in the same offshore center the wire came from), and a bank reference letter. Public records show Zenith BuildCo won three major government road contracts in the last four years — awarded by the Ministry of Infrastructure.',
    ],
    clues: [
      {
        text: 'Client is the nephew of a serving Minister of Infrastructure',
        isRedFlag: true,
        explanation: 'This makes him a family member/close associate of a foreign PEP — mandatory EDD under FATF R.12: senior management approval, source-of-wealth/funds establishment, enhanced ongoing monitoring. Not disqualifying by itself, but it raises the bar for everything else.',
      },
      {
        text: 'The company whose shares he sold won contracts from his uncle’s ministry',
        isRedFlag: true,
        explanation: 'The heart of the corruption risk. His wealth derives from a company enriched by contracts his uncle awarded — a classic proceeds-of-corruption pattern (nepotistic contract award → equity value → "clean" share sale). The share sale may be a laundering mechanism for a bribe or embezzled funds.',
      },
      {
        text: 'The $6.5M buyer, Harmattan Holdings, is registered in the same offshore center the incoming wire originates from',
        isRedFlag: true,
        explanation: 'Who is Harmattan Holdings? An opaque offshore buyer paying a premium price is exactly how value is transferred deniably. Without knowing its beneficial owner, the share-sale agreement explains nothing — it may be a related-party or fictitious sale.',
      },
      {
        text: 'Funds arrive via a law firm’s client account',
        isRedFlag: true,
        explanation: 'Pooled professional client accounts obscure the true payer — a well-documented gatekeeper typology. It inserts a layer of professional privilege and respectability between the funds and their origin.',
      },
      {
        text: 'The client provided a passport, utility bill, and bank reference',
        isRedFlag: false,
        explanation: 'Standard identity documentation — necessary and present. Identity is not the issue in this case; source of wealth is. Distinguish identity verification (fine here) from wealth verification (not fine).',
      },
      {
        text: 'The RM stresses urgency and vouches that existing customers know the client',
        isRedFlag: true,
        explanation: 'Pressure to shortcut due diligence and reliance on social vouching are process red flags. Urgency is the oldest de-diligence tool there is. An RM’s incentive is revenue; that is exactly why EDD approval sits with senior management and compliance, not the RM.',
      },
      {
        text: 'The client is 34 years old',
        isRedFlag: false,
        explanation: 'Age alone is not a red flag — young wealthy clients exist (founders, inheritors, athletes). The question is never demographics; it is whether the wealth story is coherent and verifiable. Here the problem is the story, not the age.',
      },
    ],
    decisions: [
      {
        situation: 'The RM proposes: "Book the client now under standard CDD — we can upgrade to EDD after the property purchase settles. He’ll take his business elsewhere otherwise."',
        options: [
          {
            text: 'Refuse — EDD requirements apply BEFORE establishing the relationship; no onboarding without senior management approval and source-of-wealth verification',
            quality: 'best',
            feedback: 'Correct. For PEP-associated clients, EDD is a precondition, not a post-condition. "Onboard now, diligence later" is how institutions end up in consent orders — remediating relationships they should never have opened. Losing a prospect is an acceptable cost; the reverse is not.',
          },
          {
            text: 'Compromise: onboard with a hard block on outgoing transfers until EDD completes',
            quality: 'ok',
            feedback: 'Better than unconditional onboarding, but still wrong for this risk level: accepting the $6.2M deposit means accepting potential corruption proceeds into the bank, and frozen-but-booked funds create legal and reputational entanglement. High-risk EDD completes before money moves in.',
          },
          {
            text: 'Onboard — the share-sale agreement documents the source of funds adequately',
            quality: 'poor',
            feedback: 'The agreement documents a transaction, not legitimacy. A share sale to an unidentified offshore buyer, at a price no one has benchmarked, in a corruption-exposed context, verifies nothing. Paper is not proof.',
          },
        ],
      },
      {
        situation: 'You proceed with EDD. Which line of inquiry matters MOST?',
        options: [
          {
            text: 'Establish the beneficial ownership of Harmattan Holdings and whether the share sale was arm’s-length at market value',
            quality: 'best',
            feedback: 'This is the crux. If Harmattan is connected to the uncle, the ministry, or Kwame himself, the "sale" is a value-transfer mechanism, not a source of wealth. Independent valuation of the stake and the buyer’s identity determine whether the entire wealth story stands or falls.',
          },
          {
            text: 'Obtain certified copies of the government road contracts won by Zenith BuildCo',
            quality: 'ok',
            feedback: 'Relevant context — contract awards to a relative’s company are the corruption backdrop — but the contracts themselves will look procedurally normal on paper. The sharper question is who paid Kwame and whether that transaction was real. Prioritize the money’s path.',
          },
          {
            text: 'Request a personal reference letter from the Minister confirming the family’s legitimate standing',
            quality: 'poor',
            feedback: 'Asking the potential source of the corruption risk to vouch for the client is circular — and discloses your inquiry to a foreign government official. This is both useless as evidence and a serious confidentiality failure.',
          },
        ],
      },
      {
        situation: 'EDD findings: Harmattan Holdings’ ownership cannot be established — the offshore registry lists only nominee directors, and the law firm declines to identify its client, citing privilege. The RM asks for a final decision.',
        options: [
          {
            text: 'Decline the relationship, document the rationale, and assess whether the attempted relationship itself warrants a SAR',
            quality: 'best',
            feedback: 'Right. The source of wealth cannot be established for a PEP-associated client with corruption-pattern facts — policy and FATF standards point to refusal. Attempted relationships can be reportable: an STR on an attempted transaction/relationship is explicitly contemplated. Document everything; de-risking decisions get scrutinized later.',
          },
          {
            text: 'Onboard at a reduced initial deposit ($500k) to limit exposure while monitoring',
            quality: 'poor',
            feedback: 'Corruption proceeds at a smaller size are still corruption proceeds. "Limited exposure" reframes an integrity decision as a credit decision — a category error. There is no acceptable quantity of unexplainable PEP-linked wealth.',
          },
          {
            text: 'Escalate to the reputational risk committee and let them decide',
            quality: 'ok',
            feedback: 'Escalation and governance are good instincts, and many banks would route this to committee — but come with a recommendation, not an open question. The analysis is complete and it points one way. Senior analysts recommend; committees ratify.',
          },
        ],
      },
    ],
    debrief: [
      'This scenario mirrors the grand-corruption cases that produced the modern PEP framework — wealth extracted through government contracting, converted into "legitimate" form through a share sale to an opaque offshore buyer, and moved through professional gatekeepers into private banking.',
      'The pivotal skill is source-of-wealth analysis: not collecting documents, but stress-testing the STORY. Every laundering scheme comes with paperwork. The questions that break a false story are: who is the counterparty, was the price real, and can each link in the chain be independently verified?',
      'Note what the case did NOT turn on: the client’s identity documents were fine, his age was irrelevant, and PEP association alone would not have justified refusal. The refusal rests on unverifiable wealth in a corruption-exposed fact pattern — a defensible, documented, risk-based decision.',
    ],
    learningPoints: [
      'PEP status (or association) triggers EDD — it is a risk amplifier, not an automatic bar.',
      'Source of WEALTH asks how the whole fortune was built; source of FUNDS asks about this specific money. High-risk cases demand both.',
      'A transaction document only proves a transaction happened — not that it was real, arm’s-length, or legitimate.',
      'EDD completes BEFORE onboarding for high-risk clients. Urgency pressure is itself a red flag.',
      'Declined and attempted relationships can still be reportable. Document refusal rationale meticulously.',
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Cotton at Triple Price',
    tagline: 'A trade finance deal where the numbers refuse to add up',
    sector: 'Trade Finance / Correspondent Banking',
    difficulty: 'Expert',
    color: '#3b82f6',
    emoji: '🚢',
    briefing: [
      'You are a trade finance compliance officer at Atlantic Commerce Bank. A letter of credit application crosses your desk: your customer, Meridian Textile Trading FZE (a free-zone company), is importing 40 containers of "cotton fabric, industrial grade" from an exporter in a South Asian country, for $4.8 million. Your bank is asked to issue the LC; the beneficiary’s bank is a small private bank you have no prior relationship with.',
      'Meridian Textile Trading was incorporated 18 months ago in a free zone known for minimal disclosure requirements. Its account shows moderate activity: several inbound payments from an electronics distributor and a used-car exporter — neither obviously related to textiles. This is its third LC this year; the previous two, for similar amounts, settled without incident. The unit price on the invoice works out to roughly $12.30/kg.',
      'A quick market check shows comparable industrial cotton fabric trading at $3.80–4.60/kg. The shipping route on the draft bill of lading is unusual: the goods will transship through two intermediate ports, adding roughly 3,000 nautical miles versus the direct route. The LC application requests that documents be presented "third party documents acceptable."',
    ],
    clues: [
      {
        text: 'Invoice unit price of ~$12.30/kg against a market range of $3.80–4.60/kg',
        isRedFlag: true,
        explanation: 'Over-invoicing — the core TBML technique. Paying roughly triple market price moves ~$3M of excess value from importer to exporter under trade cover. Price-to-market benchmarking is the single most powerful TBML detection control.',
      },
      {
        text: 'Free-zone incorporation, 18 months old, in a low-disclosure jurisdiction',
        isRedFlag: true,
        explanation: 'Free zones are repeatedly flagged by FATF as TBML-vulnerable: light company formation requirements, minimal customs scrutiny, and opacity of ownership. Not damning alone — thousands of legitimate FZEs exist — but it lowers your ability to verify anything else.',
      },
      {
        text: 'Inbound payments from an electronics distributor and a used-car exporter',
        isRedFlag: true,
        explanation: 'Counterparties inconsistent with the stated line of business. Funds funding textile LCs originating from unrelated sectors suggests the account is a value-transfer node, not a textile business. Cross-sector incoherence is a hallmark of third-party payment abuse.',
      },
      {
        text: 'Two previous LCs settled without incident',
        isRedFlag: false,
        explanation: 'Careful — prior settled transactions are NOT evidence of legitimacy. TBML schemes settle "without incident" by design; smooth settlement is the point. But as stated, past clean settlement is neutral history, not a current red flag. Do not count history as either mitigant or flag without re-examining those transactions.',
      },
      {
        text: 'Transshipment through two intermediate ports, adding ~3,000 nautical miles',
        isRedFlag: true,
        explanation: 'Economically irrational routing raises two possibilities: obscuring the goods’ true origin/destination (sanctions evasion risk) or facilitating document swaps mid-route. Legitimate trade minimizes freight cost; laundering minimizes scrutiny.',
      },
      {
        text: '"Third party documents acceptable" clause requested in the LC',
        isRedFlag: true,
        explanation: 'This clause lets entities other than the named exporter present shipping documents — weakening the audit trail of who actually shipped what. Combined with other flags, it is a document-control red flag recognized in Wolfsberg/ICC trade finance principles.',
      },
      {
        text: 'The beneficiary’s bank is small and unfamiliar to your institution',
        isRedFlag: true,
        explanation: 'A correspondent-risk issue rather than proof of wrongdoing: an unfamiliar private bank means you cannot rely on the other side’s controls. It obliges you to do your own respondent-institution due diligence before taking on the exposure (FATF R.13 logic applied to trade).',
      },
    ],
    decisions: [
      {
        situation: 'Your first analytical move?',
        options: [
          {
            text: 'Benchmark the full trade: verify the price against independent market data, check the vessel and container numbers against tracking databases, and screen all parties including the transshipment ports',
            quality: 'best',
            feedback: 'Correct sequence. TBML analysis is triangulation: price vs. market, documents vs. physical shipping reality, parties vs. sanctions/adverse media. Vessel-tracking checks catch phantom shipments; unit-price analysis catches value transfer; screening catches the sanctions dimension of odd routing.',
          },
          {
            text: 'Ask the customer to explain the price premium before doing further analysis',
            quality: 'ok',
            feedback: 'Customer explanation will eventually be needed (specialty fabric? urgent delivery premium?), but asking first hands them the framing and tips your focus. Establish the objective facts first so you can evaluate their explanation against evidence rather than accept it into a vacuum.',
          },
          {
            text: 'Approve — the LC is documentary; banks deal in documents, not goods, so price is the customer’s commercial decision',
            quality: 'poor',
            feedback: 'The "banks deal in documents" doctrine (UCP 600) governs payment obligations between banks — it has never been a defense to AML obligations. Regulators expect trade finance banks to detect obviously anomalous pricing. This answer is how institutions end up cited for TBML control failures.',
          },
        ],
      },
      {
        situation: 'Vessel tracking shows the named vessel called at the first transshipment port — but the second leg is serviced by a different vessel whose recent port history includes a sanctioned jurisdiction. The customer, when asked generally about the route, says the freight forwarder "handles all that."',
        options: [
          {
            text: 'Treat this as a potential sanctions-evasion overlay: escalate to the sanctions team immediately, hold the LC issuance, and expand screening to the vessels, owners, and forwarder',
            quality: 'best',
            feedback: 'Right. TBML and sanctions evasion frequently co-occur — circuitous routing plus a vessel touching a sanctioned jurisdiction shifts this from "suspicious pricing" to "potential prohibited transaction," which is strict-liability territory. The hold is justified; sanctions risk cannot be managed after issuance.',
          },
          {
            text: 'Note it in the file but proceed — the sanctioned-port call was the vessel’s history, not this shipment',
            quality: 'poor',
            feedback: 'Vessel history is precisely how ship-to-ship transfer and origin-disguise schemes are detected. A vessel’s pattern of calls at sanctioned ports is a recognized evasion indicator (see OFAC shipping advisories). "Not this specific voyage" is not a clearance.',
          },
          {
            text: 'Decline the LC quietly and exit the customer to avoid the whole problem',
            quality: 'ok',
            feedback: 'Refusing the transaction may well be the endpoint — but "quietly exiting" without escalation, investigation, and SAR consideration exports the risk to the next bank and may breach your own reporting obligations. De-risking is not a substitute for reporting.',
          },
        ],
      },
      {
        situation: 'Full review confirms: price ~3x market, unexplained third-party funding, irrational routing, sanctions-adjacent vessel. Management asks you to summarize what this scheme most likely IS.',
        options: [
          {
            text: 'Likely TBML moving value out of the importer’s jurisdiction via over-invoicing, possibly serving as a settlement mechanism for unrelated underlying flows — with a sanctions-evasion overlay on the logistics',
            quality: 'best',
            feedback: 'That is the expert synthesis. Over-invoicing exports value; the cross-sector third-party payments suggest the trade settles obligations from other business (a hallmark of informal value transfer / black-market exchange structures); the routing suggests origin disguise. Your SAR narrative should present the full architecture.',
          },
          {
            text: 'Probably just aggressive transfer pricing for tax purposes — refer it to the tax authorities and move on',
            quality: 'poor',
            feedback: 'Mispricing for tax and TBML can look similar, but the third-party funding, routing anomalies, and vessel history do not fit a tax story. And either way — tax crimes are FATF predicate offences; "it’s only tax" has not been a safe harbor since 2012.',
          },
          {
            text: 'A single over-priced shipment — recommend enhanced monitoring of future LCs',
            quality: 'ok',
            feedback: 'Under-scoped. The two "clean" prior LCs now need retrospective review — smooth settlement is how the earlier legs evaded attention. When you find a scheme, you re-open its history, not just watch its future.',
          },
        ],
      },
    ],
    debrief: [
      'This case assembles the TBML triad — price manipulation, document control games, and irrational logistics — on top of the modern complication: sanctions-evasion overlays in shipping. FATF and the Egmont Group consistently rank TBML among the least-detected major laundering channels precisely because each document, in isolation, looks routine.',
      'The decisive control was the simplest: comparing the unit price to open-market data. Institutions with sophisticated screening still miss TBML when nobody asks "is this price real?" The second-line lesson: prior smooth settlements protect nothing — schemes are DESIGNED to settle smoothly.',
      'The vessel dimension reflects post-2020 reality: OFAC and OFSI shipping advisories put AIS gaps, ship-to-ship transfers, and port-call history squarely inside trade compliance expectations. Trade finance now sits at the intersection of AML and sanctions — analyses that stop at one discipline miss half the scheme.',
    ],
    learningPoints: [
      'Unit-price benchmarking against market data is the highest-value TBML control — use it early.',
      'Third-party payments inconsistent with the customer’s sector suggest the trade is settling something else.',
      'Economically irrational shipping routes signal origin disguise — check vessels, not just parties.',
      'Past clean settlement is not a mitigant; discovering a scheme reopens its history.',
      '"Banks deal in documents" governs payment law, not AML responsibility.',
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'The Funnel at NovaPay',
    tagline: 'A fintech, forty student accounts, and money that never rests',
    sector: 'Fintech / Payments',
    difficulty: 'Analyst',
    color: '#10b981',
    emoji: '📱',
    briefing: [
      'You are a financial crime analyst at NovaPay, a fast-growing payments app offering instant P2P transfers, debit cards, and crypto purchases. A network analytics alert has flagged a cluster: 43 accounts, mostly opened in the past four months, showing a shared behavioral fingerprint.',
      'The pattern: each account receives multiple incoming P2P transfers of $150–450 from many unrelated senders (15–60 unique senders per account per week), then rapidly forwards 90–95% of the balance — either to one of three "hub" accounts, or converted to crypto and withdrawn to external wallets. Typical dwell time of funds: under 40 minutes.',
      'KYC on the 43 accounts shows: predominantly account holders aged 18–23, IDs from three universities’ cities, several accounts accessed from the same device fingerprints and IP ranges, and selfie-verification photos that pass liveness checks. Two of the hub accounts belong to holders with thin digital footprints; the third belongs to a registered sole-proprietor "marketing consultancy." Customer service notes show one account holder recently called asking why her account was limited, explaining she was "hired for a payment processing job — processing donations for a charity — and gets to keep 5%."',
    ],
    clues: [
      {
        text: 'Many unrelated senders funneling small amounts into each account, forwarded within minutes',
        isRedFlag: true,
        explanation: 'The funnel/mule pattern: many-to-one collection, rapid onward movement, minimal dwell time. Legitimate P2P activity (splitting rent, dinner) does not produce 15–60 unique unrelated senders weekly with 90%+ pass-through. This is the signature of fraud-proceeds consolidation.',
      },
      {
        text: 'Account holders aged 18–23, concentrated around universities',
        isRedFlag: true,
        explanation: 'Students are the most-recruited money mule demographic worldwide — targeted through job ads, social media, and campus networks. Demographics alone never flag anyone; demographics + funnel behavior + recruitment narrative do.',
      },
      {
        text: 'Multiple accounts sharing device fingerprints and IP ranges',
        isRedFlag: true,
        explanation: 'Different "customers" operated from the same devices indicates central control — a herder managing the mule network directly, or accounts opened en masse with rented/purchased identities. Device intelligence is among the strongest network-level signals.',
      },
      {
        text: 'Selfie verification passed liveness checks on all accounts',
        isRedFlag: false,
        explanation: 'Passing IDV is neutral — real people (witting or unwitting mules) pass liveness easily because they ARE real people. Identity verification confirms who opened the account, not why. Don’t treat strong IDV as an activity mitigant.',
      },
      {
        text: 'A customer explains she was hired for a "payment processing job, keeping 5%"',
        isRedFlag: true,
        explanation: 'A near-verbatim recitation of the money mule recruitment script ("process payments from home, keep a percentage"). This is direct evidence the cluster is a recruited network — and that at least some participants are unwitting victims as well as conduits.',
      },
      {
        text: 'Hub account registered as a sole-proprietor marketing consultancy',
        isRedFlag: true,
        explanation: 'A business wrapper on a consolidation account adds a veneer of commercial legitimacy to volume that would look absurd on a personal account. A "consultancy" receiving pass-through P2P volume from dozens of students is not consulting.',
      },
      {
        text: 'Funds exit via crypto purchases to external wallets',
        isRedFlag: true,
        explanation: 'The cash-out leg. Converting to crypto and withdrawing to self-hosted wallets moves proceeds beyond the app’s visibility and freeze capability — speed matters because recovery windows for fraud proceeds are measured in hours.',
      },
    ],
    decisions: [
      {
        situation: 'Your first operational move on the 43-account cluster?',
        options: [
          {
            text: 'Apply risk-based restrictions on the cluster (holds/limits) to stop outflows while you investigate — prioritizing the three hub accounts',
            quality: 'best',
            feedback: 'In a live pass-through network, speed is the control: every hour of open outflow is proceeds lost. Fintechs typically have policy authority for immediate risk-based limiting. Hubs first — cutting consolidation points disrupts the whole network. Then investigate and report.',
          },
          {
            text: 'Fully investigate all 43 accounts first, then act on all of them simultaneously',
            quality: 'ok',
            feedback: 'Thorough, but the network keeps draining money for days while you write it up. In fast-movement typologies, interdiction and investigation run in parallel — restrict first on network evidence, refine the analysis after. Perfect sequencing loses real victims real money.',
          },
          {
            text: 'Close all 43 accounts immediately and offboard the customers',
            quality: 'poor',
            feedback: 'Abrupt mass closure destroys the intelligence picture, tips the network’s operators to re-form elsewhere, and treats likely victims (unwitting mules) identically to organizers. Restrict, investigate, report, and coordinate — closure comes later and selectively.',
          },
        ],
      },
      {
        situation: 'The account holder who mentioned the "payment processing job" calls again, upset that her account is limited. She clearly does not understand what she is involved in. What is the right posture?',
        options: [
          {
            text: 'Handle her as a potential victim AND a conduit: neutral scripted responses about the limitation, no disclosure of the investigation, and include her account in the SAR — noting indications she is an unwitting participant',
            quality: 'best',
            feedback: 'Correct on both axes. Unwitting mules are victims of recruitment fraud, but their accounts still moved proceeds — they belong in the report with the context noted. Front-line staff must not disclose the investigation or accuse her; tipping-off rules apply even to sympathetic subjects.',
          },
          {
            text: 'Explain to her that she has been recruited as a money mule and advise her to report it to the police',
            quality: 'poor',
            feedback: 'Compassionate instinct, catastrophic execution: this discloses the investigation, will reach the network within hours, and constitutes tipping off. Public mule-awareness education happens through general campaigns, not case-specific disclosures to subjects of active reports.',
          },
          {
            text: 'Restore her account since she is clearly an innocent victim',
            quality: 'poor',
            feedback: 'Her sincerity does not change what the account does: it funnels fraud proceeds. Restoring it re-opens a laundering channel. Victim status affects tone and downstream referrals — not the control decision.',
          },
        ],
      },
      {
        situation: 'You draft the SAR. Your manager asks: file one network SAR or 43 individual SARs?',
        options: [
          {
            text: 'A consolidated network filing — one narrative mapping the full topology (collection accounts → hubs → crypto exit), with all subjects identified and the device/IP linkage explained',
            quality: 'best',
            feedback: 'Network crime deserves a network narrative. 43 disconnected filings would bury the single most valuable insight — that these accounts are one organism with central control. Law enforcement can action a mapped network; they cannot reassemble one from fragments. Include transaction data and wallet addresses.',
          },
          {
            text: '43 individual SARs so each account is independently documented',
            quality: 'ok',
            feedback: 'Defensible administratively, but analytically weaker: the connective tissue (shared devices, hub convergence, synchronized timing) IS the suspicion. If your jurisdiction’s filing mechanics force separate reports, cross-reference them explicitly so the network is reconstructable.',
          },
          {
            text: 'File only on the three hub accounts, since that is where the money concentrates',
            quality: 'poor',
            feedback: 'Under-inclusive. The collection accounts are integral to the scheme and their holders may be identifiable recruitment victims — both facts law enforcement needs. Reporting only hubs also understates scale, which drives prioritization.',
          },
        ],
      },
    ],
    debrief: [
      'This is the dominant retail typology of the instant-payments era: fraud proceeds (romance scams, purchase scams, BEC) consolidated through recruited mule networks and cashed out via crypto — all faster than traditional recall mechanisms can react.',
      'The detection lesson: individual accounts looked almost normal; the NETWORK was the anomaly. Device fingerprints, IP overlap, timing correlation, and flow topology — signals invisible at single-account level — carried the case. Modern AML at fintechs is graph analysis as much as rule thresholds.',
      'The human lesson: mule networks run on deceived participants. The 5%-commission "payment processing job" script has recruited hundreds of thousands of young people globally (Europol’s EMMA operations arrest thousands yearly). Compliance must hold two truths at once: these users are victims, and their accounts are crime infrastructure.',
    ],
    learningPoints: [
      'Funnel behavior = many unrelated senders + rapid near-total pass-through + short dwell time.',
      'Network signals (device, IP, timing, topology) catch what account-level rules miss.',
      'In fast-movement typologies, restrict first and investigate in parallel — hours matter.',
      'Unwitting mules are simultaneously victims and conduits; report the account, mind the tone, never tip off.',
      'One network narrative beats dozens of fragmented filings.',
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Fourteen Companies, One Address',
    tagline: 'Real estate, layered shell companies, and the search for a human being',
    sector: 'Corporate Banking / Real Estate',
    difficulty: 'Senior',
    color: '#ef4444',
    emoji: '🏢',
    briefing: [
      'You are a KYC review analyst at Continental Bank performing the periodic review of GOLDCREST PROPERTY VENTURES SPV-7 LLC, a corporate client that banks with you and has just requested a $9M outbound transfer to close on a luxury apartment tower unit purchase — its fourth such purchase in 20 months, all in the same coastal city, all paid in full with no financing.',
      'The ownership chain in the file: SPV-7 is owned by Goldcrest Property Ventures Holding (domestic), which is owned by Aurelia International Ltd (registered in Territory A, a secrecy jurisdiction), which is owned by the Blue Meridian Trust (established in Territory B), whose trustee is a professional trust company. The declared beneficial owner, per a form signed at onboarding three years ago, is "Elena V., investor, Territory C national" — supported by a passport copy. No source-of-wealth documentation is on file beyond a one-line "family investments" description.',
      'Your registry checks find: the domestic holding company shares its registered address with 13 other property SPVs, all formed by the same corporate services provider within a two-year window. Property records show the four purchased units have never been listed for rent. A media search on "Elena V." returns almost nothing — but a photo agency archive shows a person of the same name at a 2019 event, captioned as the partner of a businessman later sanctioned (2023) in connection with state-asset embezzlement in Territory C.',
    ],
    clues: [
      {
        text: 'Four-layer ownership chain crossing two secrecy jurisdictions, ending in a trust with a professional trustee',
        isRedFlag: true,
        explanation: 'Each layer is legal; the STACK is the design. Multi-jurisdictional layering with a trust cap is the canonical structure for separating an asset from its true owner — FATF R.24/25 exist precisely because of this pattern. Complexity without commercial purpose is itself the flag.',
      },
      {
        text: 'All-cash property purchases with no financing, four in 20 months',
        isRedFlag: true,
        explanation: 'Real estate absorbs large value in single transactions, and full-cash purchases skip lender due diligence entirely. Serial all-cash luxury acquisitions are the integration stage in progress — this is why regulators created targeted real-estate reporting regimes (e.g., US Geographic Targeting Orders → the 2024+ Residential Real Estate Rule).',
      },
      {
        text: 'Purchased units never listed for rent',
        isRedFlag: true,
        explanation: 'No rental income means no commercial logic — the units are value warehouses, not investments. Laundered wealth parked in empty luxury property is a documented global pattern (London, Vancouver, Miami, Dubai studies all found it).',
      },
      {
        text: '13 sibling SPVs at the same registered address, same formation agent, same window',
        isRedFlag: true,
        explanation: 'A production line of vehicles. One-property-per-SPV maximizes compartmentalization: each purchase looks modest, no single entity accumulates a visible portfolio, and any investigation hits a fresh corporate wall each time. The formation agent is a thread worth pulling — and possibly a reporting subject itself.',
      },
      {
        text: 'Beneficial ownership declared via a signed form with a passport copy',
        isRedFlag: false,
        explanation: 'A signed BO declaration is the baseline requirement, not evidence of truth — but as a document present in the file, it is what SHOULD be there. The failure here is elsewhere: no verification, no source of wealth, and no refresh in three years. The form is neutral; the reliance on it alone is the problem.',
      },
      {
        text: 'Declared BO publicly associated (2019) with a businessman sanctioned in 2023 for state-asset embezzlement',
        isRedFlag: true,
        explanation: 'The strongest fact in the case. If Elena V. is a nominee or proxy holding wealth for a sanctioned person, this is not just ML risk — the entire structure may be a sanctions-evasion vehicle, and the bank may be holding/moving blocked property. Family members and associates as asset-holders is the dominant post-2022 evasion typology.',
      },
      {
        text: 'The client has banked with you for three years',
        isRedFlag: false,
        explanation: 'Relationship tenure is neutral. Three years of history means three years of activity to re-examine, not three years of accumulated trust. Long-standing relationships are where periodic review matters most — risk changes; the 2023 sanctioning of the associate happened DURING this relationship.',
      },
    ],
    decisions: [
      {
        situation: 'The $9M transfer request is pending with a closing date in five days. The relationship manager notes the client has "always been low-maintenance." Your move on the pending payment?',
        options: [
          {
            text: 'Hold the payment pending expedited review — the potential sanctions nexus makes execution before resolution untenable, closing date or not',
            quality: 'best',
            feedback: 'Correct. A plausible nominee-for-sanctioned-person scenario means the funds may be blocked property; processing the transfer could be a strict-liability sanctions violation no closing deadline justifies. Commercial inconvenience is recoverable; a prohibited transaction is not. Escalate to sanctions counsel immediately.',
          },
          {
            text: 'Process the payment — it is consistent with the client’s three-year pattern — while opening the review in parallel',
            quality: 'poor',
            feedback: '"Consistent with pattern" fails when the pattern itself is under re-evaluation. If the structure is an evasion vehicle, this transfer is the integration event you exist to stop, and it happens in five days with your approval stamp on it.',
          },
          {
            text: 'Ask the client to provide updated source-of-funds documentation for this purchase before deciding',
            quality: 'ok',
            feedback: 'Reasonable in an ordinary profile-deviation case — but under-calibrated here. The open question is a sanctions nexus, which client-provided paperwork cannot resolve (a proxy will have paperwork). Documentation requests also start the clock on tipping the client. Hold first, verify independently.',
          },
        ],
      },
      {
        situation: 'How do you attack the central question — who really stands behind Blue Meridian Trust?',
        options: [
          {
            text: 'Layered verification: compel trust documentation via the trustee (letter of wishes, settlor identity), commission registry and litigation searches across all three territories, engage specialist screening on the sanctioned businessman’s known proxies, and check whether Elena V.’s profile (age, career, footprint) can plausibly support the wealth',
            quality: 'best',
            feedback: 'The full toolkit. Trustees hold the answers (FATF R.25 obliges them to know settlor/beneficiaries); independent registry and litigation records don’t depend on client cooperation; proxy-network screening addresses the real hypothesis directly. Wealth-plausibility analysis closes the loop — a nominee’s biography rarely supports the assets.',
          },
          {
            text: 'Request an updated, notarized beneficial ownership declaration from Elena V.',
            quality: 'poor',
            feedback: 'A nominee will sign anything — notarization certifies the signature, not the truth. Re-papering the file with a fresh version of the same unverified claim is remediation theater. Independent verification or nothing.',
          },
          {
            text: 'Interview Elena V. by video call to assess her knowledge of the portfolio and its funding',
            quality: 'ok',
            feedback: 'A genuine technique — nominees often cannot discuss "their" assets convincingly — but premature as a first move and disclosure-heavy: it reveals your focus while your information position is weak. Do it, if at all, after independent evidence is assembled, with questions designed against known facts.',
          },
        ],
      },
      {
        situation: 'Trustee correspondence stalls. Registry searches confirm the formation agent has been named in a journalism consortium leak as a bulk provider of nominee structures for Territory C elites. Time to synthesize: what does the institution face, and what do you recommend?',
        options: [
          {
            text: 'Probable proxy-held structure warehousing embezzlement proceeds, with post-2023 sanctions-evasion exposure. Recommend: maintain the hold, file a SAR covering the full structure and the formation agent, formal sanctions-blocking analysis, and exit planning coordinated with legal — with lookback review of all four prior purchases',
            quality: 'best',
            feedback: 'Complete synthesis. All four workstreams matter and run in the right order: the hold protects against ongoing violation, the SAR captures the network including the professional enabler, blocking analysis addresses the strict-liability dimension, and the lookback confronts the uncomfortable truth that three purchases already cleared. This is what "the system working late but working" looks like.',
          },
          {
            text: 'Exit the relationship now and return the funds to their source — clean break, no further exposure',
            quality: 'poor',
            feedback: 'Returning $9M of potentially blocked property is itself a transfer — possibly a violation, certainly a destruction of the recovery opportunity. Sanctions-nexus exits require blocking analysis FIRST; some money you cannot lawfully give back. And exiting without reporting hands the structure intact to the next bank.',
          },
          {
            text: 'File the SAR but keep the relationship under enhanced monitoring — exit only if authorities confirm the sanctions link',
            quality: 'ok',
            feedback: 'Filing is right, but "await confirmation" misreads the burden: sanctions compliance decisions rest on your own risk assessment, not on authorities pre-clearing your exposure (FIUs rarely respond to filers at all). With this fact pattern, continuing to service the structure is a risk appetite decision few institutions would defend.',
          },
        ],
      },
    ],
    debrief: [
      'This case compresses the beneficial-ownership problem into one file: a real human deliberately separated from real assets by four legal layers, three jurisdictions, a professional trustee, and a probable nominee — with a sanctions overlay that turned a KYC weakness into potential strict-liability exposure.',
      'The structural insight: every layer was individually lawful. SPVs, holding companies, offshore entities, trusts — all legitimate tools with legitimate uses. Detection therefore cannot rely on any component being illegal; it relies on asking why THIS structure, for THIS activity — and complexity with no commercial answer is the answer.',
      'The temporal insight: the client was onboarded clean in year one; the associate was sanctioned in year three. Risk is not static, and periodic review is not paperwork — it is the control that catches yesterday’s acceptable client becoming today’s evasion vehicle. The three purchases that sailed through are the cost of treating reviews as renewals.',
    ],
    learningPoints: [
      'Beneficial ownership means reaching a verified natural person — a signed form is a claim, not a fact.',
      'Complexity without commercial purpose is itself the red flag; assess the structure, not just its parts.',
      'All-cash serial real estate purchases with no rental economics = integration-stage warehousing.',
      'Sanctions nexus changes everything: holds precede deadlines, blocking analysis precedes exits, and "give the money back" can itself be a violation.',
      'Periodic reviews exist because risk changes after onboarding — treat them as re-underwriting, not renewal.',
      'Professional enablers (formation agents, trustees) are part of the network — include them in the reporting picture.',
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'The Orphanage Fund',
    tagline: 'A beloved charity, a war-adjacent corridor, and the hardest judgment call in AML',
    sector: 'Non-Profit / Cross-Border Payments',
    difficulty: 'Expert',
    color: '#f97316',
    emoji: '🕊️',
    briefing: [
      'You are the deputy MLRO at Harborstone Bank. Under review: BRIGHT FUTURES RELIEF FOUNDATION, a registered charity and 9-year customer that funds orphanages and medical clinics. It has a real board, published accounts, thousands of small domestic donors, and genuine media coverage of its work. Historically it sent ~$80k/quarter to two vetted partner NGOs abroad.',
      'In the past year, the operating environment changed: an armed conflict now affects the region where the charity works. Its donation volume has tripled (a normal post-crisis pattern), but its disbursement pattern has changed more: payments now flow to a new in-country "logistics partner" — a general trading company, not an NGO — in a border town, and to three individuals described as "field coordinators" receiving personal transfers of $9,000–14,000 monthly. One prior partner NGO stopped receiving funds without explanation.',
      'The trigger for your review: a request to wire $240,000 to the trading company, described as "emergency medical supplies + transport." Your screening finds no designations on any party. However, the border region is documented by UN reporting as an area where an armed group levies "taxes" on aid convoys and controls checkpoint access. The charity’s program director, when the RM asked informally, said: "Everyone working there pays facilitation costs. It’s that or the medicine doesn’t arrive. We don’t ask questions we can’t afford answers to."',
    ],
    clues: [
      {
        text: 'Disbursements shifted from vetted NGO partners to a general trading company in a border town',
        isRedFlag: true,
        explanation: 'The counterparty change is the core anomaly. Trading companies in conflict-border towns are the classic interface for converting funds into goods, cash, or access — with far weaker accountability than NGO partners. The QUESTION is why the vetted channel was abandoned.',
      },
      {
        text: 'Personal transfers of $9,000–14,000/month to individual "field coordinators"',
        isRedFlag: true,
        explanation: 'Salaries flow through payroll with documentation; irregular five-figure personal transfers into a conflict zone do not. Amounts in this band also hover around common reporting thresholds. Individuals as payment endpoints in armed-group-controlled territory is a recognized TF-risk pattern.',
      },
      {
        text: 'Donation volume tripled after the crisis',
        isRedFlag: false,
        explanation: 'Crisis-driven donation surges are normal and well-documented — generosity spikes with headlines. Inflow growth from thousands of small domestic donors is the healthy part of this picture. The risk in this case lives entirely on the OUTFLOW side.',
      },
      {
        text: 'UN reporting documents armed-group "taxation" of aid convoys in the corridor',
        isRedFlag: true,
        explanation: 'This is the environmental fact that reframes everything: money moving through this corridor foreseeably leaks to an armed group via checkpoint fees. Even without designations, knowingly funding a party to a conflict can trigger TF exposure. Corridor risk is counterparty risk.',
      },
      {
        text: 'The program director’s statement: "We don’t ask questions we can’t afford answers to"',
        isRedFlag: true,
        explanation: 'An almost explicit admission of willful blindness at the organization’s leadership level. It converts the analysis from "could diversion be happening?" to "the customer suspects diversion and has chosen not to know." Willful blindness is a culpability standard, not a defense.',
      },
      {
        text: 'The charity has a real board, published accounts, and genuine media-covered programs',
        isRedFlag: false,
        explanation: 'Bright Futures is almost certainly a REAL charity doing REAL work — this is what makes the case hard. FATF R.8 explicitly warns against treating NPOs as inherently suspect. Legitimacy of the organization and diversion of a funding stream can both be true; the analysis must hold both.',
      },
      {
        text: 'A long-standing vetted partner NGO stopped receiving funds without explanation',
        isRedFlag: true,
        explanation: 'The displaced counterparty is evidence about the new one. If the legitimate channel was available but abandoned for an opaque one, the plausible explanations narrow: the new channel offers something the old one refused — likely checkpoint access purchased through the armed group.',
      },
    ],
    decisions: [
      {
        situation: 'The $240,000 wire is queued. Screening is clean — no party is designated. Your call on execution?',
        options: [
          {
            text: 'Hold it. Clean screening answers the sanctions question, not the TF question — the corridor facts and the willful-blindness statement create suspicion that survives a negative list check',
            quality: 'best',
            feedback: 'Correct distinction. List screening catches designated parties; TF risk here flows from undesignated armed-group leakage documented by the UN. "Not on a list" is the beginning of analysis, not the end. The known facts make executing this specific payment indefensible pending review.',
          },
          {
            text: 'Execute it — no designations, a 9-year relationship, and delaying emergency medical aid has humanitarian costs too',
            quality: 'poor',
            feedback: 'Each element is real, and the humanitarian cost of delay is genuine — but the bank has specific, documented knowledge suggesting diversion to an armed group. Executing with that knowledge is not neutrality; it is participation. The humanitarian argument belongs in the "how do we enable safe aid" conversation, not the "should we ignore TF indicators" one.',
          },
          {
            text: 'Execute a reduced amount ($80k, the historical quarterly norm) and hold the rest',
            quality: 'poor',
            feedback: 'Splitting the difference launders the decision, not the money — if the channel leaks to an armed group, $80k leaks proportionally. Risk decisions on TF exposure are yes/no with controls, not volume dials. This also creates the worst documentation: a file showing you suspected diversion and partially proceeded.',
          },
        ],
      },
      {
        situation: 'You engage the charity formally. They are cooperative but candid: end-to-end delivery verification in the corridor is impossible; the trading company is "how everyone operates there"; they can provide procurement invoices but cannot account for checkpoint payments. What does this cooperation change?',
        options: [
          {
            text: 'It confirms the control gap honestly — which clarifies rather than resolves the problem. Assess whether ANY control structure (escrowed procurement, third-party monitoring, humanitarian carve-out channels) can reduce diversion risk to something the bank can accept; if not, the corridor payments cannot continue through you',
            quality: 'best',
            feedback: 'The mature reading. Cooperation and good faith are real mitigants of INTENT but not of LEAKAGE — the armed group taxes convoys regardless of the charity’s sincerity. The right frame is control engineering: some banks and NGO consortia have built verified-delivery channels for exactly these corridors. If no such structure is achievable, the answer is a documented no on this channel — not on the charity as a customer.',
          },
          {
            text: 'Their transparency resolves the suspicion — willing cooperation is inconsistent with TF, so processing can resume with quarterly reviews',
            quality: 'poor',
            feedback: 'It resolves the question of the charity’s intent, which was never the main issue. Unwitting funding of an armed group is still funding of an armed group — TF exposure does not require the sender’s bad faith. The program director’s own framing ("everyone pays") tells you the leakage is structural, not hypothetical.',
          },
          {
            text: 'Require the charity to switch back to the previous vetted NGO partner as a condition of any further corridor payments',
            quality: 'ok',
            feedback: 'Directionally sound — restoring the accountable channel is the right instinct — but likely naive operationally: the vetted partner probably lost corridor access precisely because it would not pay. Imposing the condition without understanding why the channel died may just produce paperwork compliance over the same underlying flows. Ask why first; then condition.',
          },
        ],
      },
      {
        situation: 'Final determination time. The board asks for your recommendation on the relationship, the reporting question, and how to handle the reputational dimension of restricting a beloved local charity.',
        options: [
          {
            text: 'File the STR on the corridor payments (the suspicion standard is met), maintain the customer relationship for domestic operations, decline the specific high-risk channel pending workable controls, and prepare a factual communication line — while warning the board that neither the STR nor its reasoning can ever be part of any public explanation',
            quality: 'best',
            feedback: 'The complete answer. Reporting and relationship decisions are separable: the suspicion attaches to specific flows, not the charity’s existence — this is exactly the proportionate, non-disruptive approach FATF R.8 demands for NPOs. And the tipping-off discipline matters doubly here: public sympathy will pressure the bank to explain itself, and it never can. The board must own a "we cannot discuss customer matters" line under criticism.',
          },
          {
            text: 'Exit the relationship entirely — TF risk is zero-tolerance, and partial measures leave the bank exposed',
            quality: 'ok',
            feedback: 'Defensible on pure risk appetite, but it is the blunt instrument FATF R.8 explicitly cautions against: wholesale de-risking of NPOs pushes humanitarian finance into informal channels (hawala, cash couriers) with LESS oversight — a worse outcome for both aid and intelligence. The regulator-preferred posture is targeted restriction with reporting. Exit if controls fail, not instead of trying them.',
          },
          {
            text: 'Neither file nor restrict — document the review thoroughly and rely on the absence of designations, revisiting if the UN designates the armed group',
            quality: 'poor',
            feedback: 'This mistakes documentation for action. The suspicion threshold for reporting is met on the facts you hold today; waiting for designations outsources your legal obligation to the UN sanctions committee’s timeline. A well-documented decision not to act on met suspicion is not protection — it is Exhibit A.',
          },
        ],
      },
    ],
    debrief: [
      'This is the hardest genre of case in financial crime: no villain at the customer level, a genuinely good organization, real humanitarian stakes — and a funding stream that structurally leaks to an armed group. It resists the clean narratives that make other cases easy, which is precisely why it appears (in various forms) in real MLRO decision files wherever conflict zones meet donation flows.',
      'The analytical key is separating three questions that beginners merge: Is the charity legitimate? (Yes.) Is the charity’s intent clean? (Mostly — with willful blindness at the edges.) Does money moving through this channel foreseeably finance an armed group? (Yes.) TF exposure follows from the third question alone. Lists and intent are neither necessary nor sufficient.',
      'The policy dimension is FATF R.8’s balancing act: NPOs must be protected from both abuse AND from over-broad de-risking. The strongest institutions respond with precision — restrict the channel, report the flows, preserve the relationship, engineer safer corridors where possible. The weakest respond with either blanket trust or blanket exit. Precision is harder. It is also the job.',
    ],
    learningPoints: [
      'TF analysis has three separable layers: organizational legitimacy, sender intent, and structural leakage. Exposure can arise from the third alone.',
      '"Not on a sanctions list" ends the screening question, not the suspicion question.',
      'Willful blindness ("we don’t ask questions") is an aggravator, not a mitigant — note it verbatim in the file.',
      'FATF R.8: NPO measures must be focused and proportionate — restrict flows, not the sector.',
      'Reporting decisions and relationship decisions are independent: you can file an STR and keep the customer, or exit and still file.',
      'Tipping-off discipline extends to public relations: a bank can never explain a restriction by reference to its suspicions.',
    ],
  },
];
