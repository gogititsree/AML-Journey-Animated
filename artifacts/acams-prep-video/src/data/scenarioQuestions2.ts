import type { QuizQuestion } from './quizQuestions';

export const scenarioQuestions2: QuizQuestion[] = [

  // --- GROUP 11: REAL ESTATE & PROFESSIONAL SERVICES ---
  {
    id: 301,
    category: "Scenario Based",
    question: "A luxury Manhattan condo sells for $4.2 million — all cash, through an LLC with no identifiable individual owner, and the buyer's attorney handles all communication. The real estate agent never meets the buyer. Under FinCEN's Geographic Targeting Orders (GTOs), what is the TITLE COMPANY required to do?",
    options: [
      "Nothing — cash real estate transactions are private and exempt from BSA reporting",
      "Identify and report the beneficial owners of the purchasing LLC to FinCEN via a Currency Transaction Report",
      "File a FinCEN GTO report identifying the beneficial owner of the purchasing LLC when the transaction falls in a covered jurisdiction and exceeds the GTO threshold",
      "Notify the seller's bank of the all-cash nature of the transaction"
    ],
    answer: 2,
    explanation: "FinCEN's GTOs require title insurance companies in designated metropolitan areas (including Manhattan) to identify the beneficial owner of any legal entity purchasing residential real estate for cash above the threshold (which has been as low as $300,000 in some zones). The title company must file a report with FinCEN disclosing who ultimately owns the purchasing entity. GTOs were introduced precisely because all-cash real estate through anonymous LLCs is a primary ML channel for high-end property — the real estate agent's non-meeting and LLC structure are exactly the red flags GTOs target."
  },
  {
    id: 302,
    category: "Scenario Based",
    question: "A real estate attorney holds client funds in an IOLTA (Interest on Lawyers' Trust Account) account. A client deposits $800,000 in cash into the IOLTA, claiming it is for a pending property purchase. The purchase never closes, and the client requests the funds returned. What AML obligation does the attorney have?",
    options: [
      "None — attorney-client privilege fully shields IOLTA transactions from AML reporting",
      "The attorney should consider whether the funds represent suspicious activity; while attorney-client privilege may limit some disclosures, complicity in laundering through an IOLTA account is a crime, and the attorney may have reporting obligations under state bar rules or federal law",
      "File a SAR with FinCEN — attorneys are covered financial institutions under the BSA",
      "Attorneys are fully exempt from all BSA and AML obligations without exception"
    ],
    answer: 1,
    explanation: "U.S. attorneys are not currently 'covered financial institutions' under the BSA and are not required to file SARs. However, using an IOLTA as a conduit for ML is a federal crime for the attorney under 18 U.S.C. § 1956. Attorney-client privilege does not protect communications in furtherance of crime (the crime-fraud exception). An attorney who knowingly allows a client to launder funds through their trust account faces criminal exposure. Many state bar associations also impose professional conduct obligations to avoid facilitating client fraud. The attorney should refuse to return funds that appear to be proceeds of crime and consult ethics counsel."
  },
  {
    id: 303,
    category: "Scenario Based",
    question: "A real estate agent notices that a buyer asks to list a property at $1.5 million but pay for it with a $2 million wire, requesting the extra $500,000 be returned in cash at closing. What should the agent do?",
    options: [
      "Comply — inflating the purchase price is a standard negotiation tactic",
      "Refuse and report — this is a classic ML scheme using over-invoiced real estate to extract laundered cash; the agent should refuse the transaction and consider reporting to law enforcement",
      "Comply but notify the title company",
      "Request a letter from the buyer's bank confirming the wire is from legitimate sources"
    ],
    answer: 1,
    explanation: "Requesting an inflated purchase price with cash-back at closing is a textbook real estate money laundering scheme. The buyer overpays on record (creating a paper trail of 'investment'), then receives the difference in untraceable cash. The property record shows a $2M purchase — laundering $500K. In many states, real estate agents have voluntary (and sometimes mandatory) suspicious activity reporting obligations. The agent should refuse to participate in this scheme. While U.S. real estate agents are currently not mandated SAR filers under the BSA (unlike FinCEN's proposed rule), facilitating the transaction could make the agent criminally liable under ML statutes."
  },
  {
    id: 304,
    category: "Scenario Based",
    question: "A property management company deposits $45,000 in cash rental income monthly into its bank account. The properties it manages have a combined monthly rental value of approximately $12,000. What red flag does this present?",
    options: [
      "No red flag — property management companies frequently collect advance deposits",
      "The cash deposits significantly exceed the legitimate rental income, suggesting the company may be commingling illicit cash with rental receipts to launder funds",
      "The company may have received security deposits, which explains the excess",
      "Property management is a cash-intensive business exempt from AML scrutiny"
    ],
    answer: 1,
    explanation: "When a business's cash deposits materially exceed its capacity to generate that revenue legitimately, it is a hallmark of a front business — commingling illicit cash with legitimate income. $45,000 cash monthly from properties worth $12,000/month leaves $33,000 unexplained. This pattern is especially common in real estate-adjacent businesses. The bank should conduct EDD to understand the business model, request property records, and file a SAR if the discrepancy cannot be explained. Real estate is consistently identified as a high-risk sector for ML in FinCEN advisories."
  },
  {
    id: 305,
    category: "Scenario Based",
    question: "A public accountant prepares financial statements for a client and discovers the client's books reflect large 'consulting income' with no supporting contracts, invoices, or counterparty information. The client asks the accountant to certify the financials for a bank loan application. What ethical and legal issues arise?",
    options: [
      "None — accountants are not required to verify the source of income, only its accurate recording",
      "The accountant risks facilitating loan fraud and potentially ML by certifying financials they have reason to believe are fabricated; professional standards and potentially federal law require refusal",
      "The accountant should certify the financials and file a SAR separately",
      "The accountant should request an explanation but can certify if the client provides any written explanation"
    ],
    answer: 1,
    explanation: "An accountant who certifies materially false financials for a loan application faces liability under: (1) AICPA professional standards (failure of professional skepticism); (2) fraud statutes (bank fraud, 18 U.S.C. § 1344); and (3) potentially AML statutes if the fabricated income represents ML proceeds. Unverifiable 'consulting income' with no supporting documentation is a major red flag. The accountant must not certify the financials without adequate documentation. While U.S. accountants are not currently mandatory SAR filers under the BSA, voluntary referral to law enforcement may be appropriate if a crime is being facilitated."
  },
  {
    id: 306,
    category: "Scenario Based",
    question: "A law firm receives a $2 million retainer from a new client for anticipated litigation. The payment comes from a third party — a company the client says 'owes them money.' The litigation never materializes, and the client requests the retainer returned. What is the attorney's PRIMARY concern?",
    options: [
      "No concern — retainers returned to clients are standard legal practice",
      "The firm may be facilitating a placement and layering scheme — dirty funds enter via a third party, gain legitimacy as 'legal retainer,' and are returned as apparently clean attorney disbursements",
      "The concern is only whether the third party company owes a legitimate debt",
      "The firm should file a SAR before returning the retainer"
    ],
    answer: 1,
    explanation: "The 'lawyer's trust account' ML scheme is well-documented: illicit funds enter via a third-party payer as a legal retainer, are held briefly (lending legitimacy), then returned to the client as an attorney disbursement — appearing clean. The third-party payment is the first red flag (who pays a retainer owed by someone else?). The non-materializing litigation and rapid refund request are second and third. Law firms are frequent ML targets because of the perceived legitimacy of attorney-client funds flows. The firm should conduct due diligence on the third party, investigate the payment's source, and refuse to return funds it cannot verify are legitimate."
  },
  {
    id: 307,
    category: "Scenario Based",
    question: "An investment adviser manages a $50 million portfolio for a client who has never met the adviser in person, communicates only through an intermediary, and insists that all investment gains be reinvested into bearer bond instruments. What AML concerns does this raise?",
    options: [
      "Minimal concern — many wealthy clients prefer to communicate through advisers",
      "High concern — the anonymizing intermediary, avoidance of direct contact, and preference for bearer instruments (which provide anonymous ownership) are classic ML red flags",
      "No concern — bearer bonds are legal instruments regulated by FINRA",
      "Only a concern if the client is a foreign national"
    ],
    answer: 1,
    explanation: "Bearer instruments — bonds or certificates where ownership is determined by physical possession, not registration — are a high-risk ML tool because they transfer value anonymously. Combined with an intermediary who shields the beneficial owner and refusal of direct contact, this profile is consistent with concealing the identity of a criminal who wants to hold untraceable wealth. FinCEN and FATF have flagged bearer instruments as a significant ML risk. Investment advisers registered with the SEC have AML program obligations and SAR filing requirements. This customer requires rigorous EDD and likely a SAR."
  },
  {
    id: 308,
    category: "Scenario Based",
    question: "A property developer sells 40 luxury condominiums in a newly completed tower. Thirty are purchased by foreign shell companies within 30 days of completion, all cash. The developer's sales agent collected only passport copies of signatories — not beneficial owners. What is the PRIMARY AML risk?",
    options: [
      "The developer may have undersold the units and should adjust pricing",
      "Bulk all-cash purchases by foreign shell companies without beneficial owner identification create a major AML risk — the property could be used to place illicit funds in the U.S. real estate market at scale",
      "The risk is limited to OFAC screening of the entity names provided",
      "No AML risk — commercial real estate developers are not financial institutions"
    ],
    answer: 1,
    explanation: "Bulk all-cash condo purchases by foreign shell companies is one of the most well-documented real estate ML patterns, highlighted in multiple FinCEN advisories and academic studies. The absence of beneficial owner identification means the true owners — potentially sanctions targets, corrupt officials, or organized crime — are completely hidden. Thirty simultaneous purchases suggests coordinated placement, not independent buyers. While developers are not yet mandatory FinCEN filers under the BSA (pending proposed rulemaking), facilitating mass anonymous purchases exposes them to significant reputational and legal risk, and the title companies involved in these closings have GTO and SAR obligations."
  },
  {
    id: 309,
    category: "Scenario Based",
    question: "A property is purchased for $300,000, renovated minimally, and sold 90 days later for $2.1 million to a buyer who uses the property as collateral for a $1.8 million loan. The loan is immediately defaulted on, and the lender takes the property back. What ML scheme is this?",
    options: [
      "A legitimate real estate flip that went wrong",
      "A real estate loan-back ML scheme — the property is artificially over-valued to obtain a secured loan, the loan is defaulted to extract the funds, and the proceeds appear to be loan disbursements",
      "Mortgage fraud, which is distinct from money laundering",
      "A short sale scheme involving collusion between buyer and lender"
    ],
    answer: 1,
    explanation: "This is a loan-back ML scheme using inflated real estate as collateral. The criminal: (1) places dirty money by purchasing the property; (2) artificially inflates its value through collusive appraisal; (3) borrows against the inflated value — receiving apparently clean loan proceeds; (4) defaults intentionally, forfeiting the original 'dirty' investment. The result: $1.8M in seemingly clean loan proceeds. This combines real estate ML with mortgage fraud and bank fraud. The 7x price increase in 90 days and the immediate default are the key red flags. The bank that issued the loan has both ML and fraud exposure."
  },
  {
    id: 310,
    category: "Scenario Based",
    question: "A trust company manages a discretionary trust whose assets include five offshore properties. The beneficial owner of the trust is a foreign national under investigation in their home country for corruption. The trust was established before the investigation. What should the trust company do?",
    options: [
      "Nothing — trusts are legal instruments and the trustee's obligations are to the beneficiaries, not to foreign law enforcement",
      "Conduct immediate EDD review; the corruption investigation materially elevates risk and may require filing a SAR, obtaining senior management approval to continue, or terminating the trust",
      "Wait for official notification from the foreign government before acting",
      "Transfer the trust assets to a new jurisdiction to protect the beneficiary"
    ],
    answer: 1,
    explanation: "A corruption investigation of a trust's beneficial owner is a material change in risk profile that demands immediate action — regardless of when the trust was established. The trust company should: (1) update its EDD file with the new information; (2) assess whether the trust assets could be proceeds of corruption; (3) obtain senior management or board approval to continue the relationship; and (4) file a SAR if the facts support it. Transferring assets to protect the beneficiary from foreign law enforcement could constitute obstruction of justice or aiding ML. Trust companies in many jurisdictions now have explicit AML obligations for exactly this scenario."
  },

  // --- GROUP 12: LAYERING TECHNIQUES & COMPLEX SCHEMES ---
  {
    id: 311,
    category: "Scenario Based",
    question: "A criminal uses drug trafficking proceeds to purchase a failing restaurant for $200,000 cash. Over two years, he reports $800,000 in annual restaurant revenue and pays taxes on it. He then sells the restaurant for $1.2 million. What stage of ML and what technique is this?",
    options: [
      "Placement — using the restaurant to place cash into the banking system",
      "Integration — the restaurant serves as both a commingling vehicle (layering) and ultimately produces apparently legitimate business sale proceeds (integration) that are clean enough to spend openly",
      "Layering only — the sale of the restaurant is the final layering step",
      "Placement and layering — but integration requires offshore accounts"
    ],
    answer: 1,
    explanation: "This scheme spans all three stages: Placement — cash from drug sales enters the banking system as 'restaurant revenue.' Layering — commingling illicit cash with legitimate income obscures the drug proceeds' origin. Integration — the business is sold for $1.2M, and the criminal receives legitimate-appearing proceeds from a documented business sale. This is a classic front business ML scheme. The key integration mechanism is establishing a paper trail of legitimate tax-paid income before extracting the funds through a sale. The taxes paid act as a 'laundering fee' that buys legitimacy. FATF's 40 Recommendations and FinCEN guidance specifically address front business ML."
  },
  {
    id: 312,
    category: "Scenario Based",
    question: "A criminal deposits $500,000 in proceeds into an offshore account, then uses that account as collateral for a 'back-to-back loan' from the same offshore bank, borrowing $450,000. He uses the loan to purchase assets in the U.S. and repays the loan from the offshore account. What is this technique called?",
    options: [
      "Round-tripping — moving funds in a circle between accounts",
      "The loan-back or collateral substitution scheme — illicit funds become loan collateral, and the 'legitimate' loan proceeds can be spent or invested openly with no apparent criminal nexus",
      "Layering via trade finance instruments",
      "Integration through real estate mortgages"
    ],
    answer: 1,
    explanation: "The loan-back scheme is a sophisticated integration technique: the criminal's offshore illicit deposit becomes collateral. The bank issues a loan against it — the criminal receives apparently clean loan proceeds, which they spend openly. As the loan is 'repaid' from the collateral, the offshore illicit funds are consumed — but the U.S. assets purchased with the loan appear to be the fruit of a legitimate credit transaction. This scheme is difficult to detect because the loan relationship with an offshore bank appears normal. FinCEN, FATF, and the UK's NCA all document this as a high-priority ML typology. Key red flag: loans fully secured by offshore deposits from the same institution."
  },
  {
    id: 313,
    category: "Scenario Based",
    question: "Funds move through the following sequence: (1) Cash deposited in Mexico, (2) Converted to gold coins, (3) Gold coins physically transported to Colombia, (4) Sold for pesos, (5) Pesos wired to a shell company, (6) Shell company pays 'consulting fees' to a U.S. LLC. What phase is Step 6?",
    options: [
      "Placement — the final introduction of funds into the financial system",
      "Layering — an additional step to obscure the funds' origin",
      "Integration — the consulting fee payment creates a legitimate-seeming business payment, completing the laundering cycle",
      "Pre-placement — bulk cash collection before formal laundering begins"
    ],
    answer: 2,
    explanation: "This six-step scheme illustrates all three phases. Steps 1-2 (cash deposit, conversion): Placement. Steps 3-5 (physical transport, currency conversion, shell company): Layering — creating distance and complexity between the dirty cash and the destination. Step 6 (consulting fee to U.S. LLC): Integration — the funds now appear to be legitimate business income in the U.S. financial system. 'Consulting fees' are a classic integration vehicle because they are difficult to disprove and create legitimate-looking accounts receivable. The U.S. LLC can now use the funds openly. Recognizing each stage is a core CAMS exam competency."
  },
  {
    id: 314,
    category: "Scenario Based",
    question: "An art dealer sells a $3 million painting to a buyer who pays through five sequential wire transfers from five different shell companies in three countries. Each wire is for exactly $600,000. What technique is being used?",
    options: [
      "Factoring — breaking up large receivables across multiple payers",
      "Wire transfer smurfing through shell companies — splitting a single large payment to avoid detection thresholds and obscure the true source of funds through multiple entities",
      "A standard art market payment arrangement using payment agents",
      "Legitimate multi-party investment in a fractional art purchase"
    ],
    answer: 1,
    explanation: "The art market is a well-documented ML channel with traditionally minimal due diligence requirements. This pattern — five equal payments from five different shells totaling the exact purchase price — is wire transfer structuring through shell companies, a layering technique designed to obscure who is actually paying. The AML Act of 2020 brought high-value art dealers under BSA requirements for transactions over $10,000, specifically addressing this vulnerability. The anti-structuring prohibition extends to wire transfers. A SAR is warranted, and the dealer should conduct EDD on all five entities to attempt to identify the actual buyer."
  },
  {
    id: 315,
    category: "Scenario Based",
    question: "A compliance analyst tracks a customer's funds and observes they pass through 12 different corporate accounts across 7 jurisdictions over 6 days before arriving at a final destination account. What is this layering behavior designed to accomplish?",
    options: [
      "Achieve the best currency exchange rates across multiple markets",
      "Exhaust the investigative resources of any single jurisdiction and obscure the money trail — each transfer in a different country requires a separate legal process to trace",
      "Diversify currency risk across multiple financial systems",
      "Standard multinational treasury management for cash pooling"
    ],
    answer: 1,
    explanation: "Rapid movement through multiple jurisdictions over days — sometimes called 'velocity layering' or 'wire stripping' — is designed to exhaust the legal capacity to trace funds. Each cross-border transfer requires international legal assistance (MLATs, letters rogatory) in a different country, often taking months. By the time investigators follow the trail to country 3, funds may have moved to country 7. The 6-day timeframe across 12 accounts/7 jurisdictions leaves investigators perpetually behind the money. This is why real-time monitoring and international cooperation (Egmont Group, FATF) are critical. This scenario warrants an immediate SAR and potential law enforcement referral."
  },
  {
    id: 316,
    category: "Scenario Based",
    question: "A customer purchases a $500,000 whole life insurance policy with a lump-sum cash premium, names an offshore company as beneficiary, then surrenders the policy for cash value two months later, accepting a 15% surrender penalty. What does willingness to absorb the penalty suggest?",
    options: [
      "The customer has a legitimate financial emergency requiring immediate liquidity",
      "The surrender penalty is the 'cost' of laundering — the customer is willing to lose 15% to convert illicit funds into clean insurance surrender proceeds, a recognized ML typology",
      "This is normal insurance policy management for tax planning purposes",
      "The offshore beneficiary nomination is a legal tax efficiency structure"
    ],
    answer: 1,
    explanation: "Using insurance products as ML vehicles — paying large cash premiums and immediately surrendering for clean proceeds — is a documented typology. The willingness to pay a significant surrender penalty is itself evidence that the primary goal is laundering, not investment (no rational investor absorbs a 15% immediate loss). The offshore beneficiary further obscures who ultimately receives the funds. The AML Act of 2020 strengthened oversight of insurance companies' AML obligations. The insurance company should have flagged: (1) single large cash premium; (2) offshore beneficiary; (3) immediate surrender request — all recognized insurance ML indicators."
  },
  {
    id: 317,
    category: "Scenario Based",
    question: "A securities broker notices a customer who consistently purchases penny stocks on obscure exchanges, holds them for 2-3 weeks while generating almost no trading gain, then sells and wires proceeds offshore. What ML technique does this suggest?",
    options: [
      "Normal speculative trading in volatile micro-cap stocks",
      "Potential securities-based ML — using stock transactions as a layering mechanism to transform cash into investment proceeds with a paper trail of securities trading",
      "A pump-and-dump scheme targeting the penny stocks",
      "Tax-loss harvesting through micro-cap investments"
    ],
    answer: 1,
    explanation: "Securities transactions can serve as layering vehicles: illicit cash purchases securities, which are then sold, generating 'investment proceeds' that can be legitimately wired offshore. The customer's pattern — consistent purchases with no profit motive, followed by immediate offshore wire — suggests the securities transactions are not investment-driven but laundering-driven. The financial gain is irrelevant; the paper trail of brokerage transactions is the goal. FINRA AML rules and SEC guidance specifically address securities-based ML. Brokers must file SARs for suspicious patterns even when no securities laws are visibly violated."
  },
  {
    id: 318,
    category: "Scenario Based",
    question: "A gambling syndicate uses winnings from one casino to buy chips at a second casino, plays minimal games, and cashes out at the second casino. The entire process is repeated across 12 casinos over six months. What purpose does the multi-casino movement serve?",
    options: [
      "Arbitraging promotional chip offers between casinos",
      "Each casino leg introduces another layer of transaction distance and documentation — making it progressively harder to trace the original illicit funds back to their source",
      "Qualifying for multiple casinos' high-roller benefits simultaneously",
      "Spreading risk across multiple gaming operations"
    ],
    answer: 1,
    explanation: "Multi-casino layering uses the gaming sector's cash-handling nature and the perceived legitimacy of gambling proceeds to launder funds through sequential transactions. Each casino represents a new documented 'origin' of funds — a cash-out check from Casino A becomes the 'legitimate winnings' used to purchase chips at Casino B, and so on. After 12 iterations, tracing back to the original illicit source requires simultaneous legal process against 12 institutions. This is why casinos are required to maintain detailed records of chip purchases and cash-outs (31 CFR Part 103 / 31 CFR 1021) and file SARs for suspicious patterns."
  },
  {
    id: 319,
    category: "Scenario Based",
    question: "A hedge fund's largest investor — who contributed $30 million — requests full redemption six months after investing, despite a 2-year lock-up period, and is willing to pay all applicable early redemption penalties. The fund manager accepts the redemption. What concern does this raise?",
    options: [
      "None — investors can redeem at any time if penalties are paid",
      "Willingness to absorb significant penalties to exit quickly suggests the investment's purpose was laundering, not returns — the fund may have been used as a layering vehicle",
      "Only a concern if the investor is a foreign national",
      "The fund manager should renegotiate the penalty rather than accept early redemption"
    ],
    answer: 1,
    explanation: "Investing in a high-value vehicle with lock-up provisions and then immediately exiting despite penalties is a documented ML pattern — the investment provides a paper trail of 'legitimate' fund participation, and the redemption produces apparently clean proceeds. The 'penalty' is the laundering cost. Hedge funds are subject to AML program requirements under the Investment Advisers Act and FinCEN rules. Red flags: (1) large initial investment; (2) immediate exit request despite lock-up; (3) acceptance of heavy penalties. The fund manager should conduct EDD before processing the redemption and may need to file a SAR."
  },
  {
    id: 320,
    category: "Scenario Based",
    question: "A criminal deposits $1 million in illicit funds into a Swiss bank account, then instructs the bank to lend him $900,000 against it as collateral, wire the loan to a UAE company, which then pays 'licensing fees' to a U.S. company the criminal controls. The U.S. company pays taxes on the $900,000 as business income. What has the criminal accomplished?",
    options: [
      "Tax evasion by understating foreign income",
      "Full three-stage laundering: placement (Swiss deposit), layering (loan → UAE entity → licensing fee), integration (U.S. tax-paid business income that can be spent openly)",
      "Only layering — integration requires the funds to enter the physical economy",
      "Wire fraud — the licensing fee arrangement is inherently fraudulent"
    ],
    answer: 1,
    explanation: "This is a textbook complete ML cycle demonstrating sophistication: Placement: the $1M enters the Swiss banking system. Layering: the loan creates distance (the funds are now 'borrowed money,' not criminal proceeds), the UAE company adds a corporate layer, and the licensing fee creates a commercial paper trail. Integration: the U.S. company receives and pays taxes on the income — it is now spendable as legitimate business earnings. Each step adds a layer of apparent legitimacy and creates a new 'explanation' for the funds. This level of scheme is exactly what CAMS candidates must understand and what AML professionals encounter in major investigations."
  },

  // --- GROUP 13: INTERNAL CONTROLS & PROGRAM FAILURES ---
  {
    id: 321,
    category: "Scenario Based",
    question: "A bank's compliance team conducts its own quality assurance reviews and routinely finds no deficiencies. An external auditor later discovers systemic SAR filing failures. What does this situation MOST likely indicate?",
    options: [
      "The external auditor is applying incorrect standards",
      "The internal QA function lacks independence — reviewing one's own work creates objectivity bias and misses the systemic failures that an independent reviewer would catch",
      "The compliance team is highly competent; the external auditor found different (not previously unknown) issues",
      "Internal QA and external audit are expected to produce different findings"
    ],
    answer: 1,
    explanation: "One of the four mandatory BSA program pillars is independent testing/audit — specifically intended to detect failures that internal teams miss. When internal QA consistently finds no deficiencies but external review finds systemic failures, it indicates the internal QA is not independent or objective enough. This is a structural problem: a compliance team reviewing its own work is analogous to an entity auditing itself. Regulators require independent testing by parties who report to the board, audit committee, or an independent function — not to the compliance manager whose work they are reviewing. This is a board-level governance finding."
  },
  {
    id: 322,
    category: "Scenario Based",
    question: "A bank's AML model that scores customer transactions for risk has not been validated since its initial deployment four years ago. Regulatory guidance requires periodic model validation. What risk does non-validation present?",
    options: [
      "None — if the model was validated at deployment, ongoing validation is a best practice but not required",
      "The model may have drifted from actual risk patterns over time — without validation, the institution cannot confirm it is detecting the suspicious activity it was designed to flag, and it may be generating false positives or missing real threats",
      "Only a technology risk — model validation is an IT governance issue, not an AML issue",
      "The model is valid as long as the number of SARs filed remains consistent year over year"
    ],
    answer: 1,
    explanation: "AML transaction monitoring models require periodic validation because: (1) customer behavior changes; (2) criminal typologies evolve; (3) the bank's product mix shifts; (4) underlying data may change. A model calibrated to 2021 data may be poorly suited to 2025 risk patterns. The SR 11-7 Model Risk Management guidance (Federal Reserve/OCC) and FinCEN examination expectations require institutions to maintain model governance programs including validation. Validating only at deployment is a significant gap. Regulatory examiners routinely ask for model validation documentation — its absence is a common Matters Requiring Attention (MRA) finding."
  },
  {
    id: 323,
    category: "Scenario Based",
    question: "A mid-sized bank outsources its entire transaction monitoring function to a third-party vendor. The vendor experiences a technical failure for 72 hours, generating no alerts. The bank's compliance team is unaware of the outage for 48 of those hours. What compliance failure has occurred?",
    options: [
      "Only a technology failure — the vendor bears all compliance responsibility",
      "The bank retains full BSA compliance responsibility regardless of outsourcing; the monitoring outage and delayed detection represent a failure of oversight and potentially a gap in SAR filing obligations",
      "No failure — a 72-hour outage is within acceptable service level tolerances",
      "The bank's regulator must be notified of the outage within 24 hours"
    ],
    answer: 1,
    explanation: "Outsourcing AML functions does not transfer regulatory responsibility. The bank remains the regulated entity and is fully accountable for BSA compliance. A 72-hour monitoring outage means suspicious activity during that window may have gone undetected. The bank's failure to know about the outage for 48 hours represents inadequate vendor oversight. Regulators and the FFIEC BSA/AML examination manual are clear: institutions must maintain robust oversight of outsourced BSA/AML functions, including service level monitoring and contingency procedures. The bank must conduct a look-back review of transactions during the outage period."
  },
  {
    id: 324,
    category: "Scenario Based",
    question: "During an AML examination, regulators find that 40% of the bank's SAR narratives were copied verbatim from prior SARs on different customers, with only the names changed. What does this indicate?",
    options: [
      "Efficient compliance operations using approved template language",
      "Poor SAR quality — boilerplate narratives suggest analysts are not conducting genuine case-by-case analysis; inadequate SAR narrative quality can render reports useless to law enforcement",
      "A violation only if the copied narratives contain factual inaccuracies",
      "An acceptable practice when the suspicious activity type is the same across customers"
    ],
    answer: 1,
    explanation: "SAR narrative quality is a top regulatory concern. FinCEN guidance emphasizes that a SAR narrative must be specific, fact-based, and tailored to the individual transaction — it is the primary document used by law enforcement to assess the SAR's value. Copy-paste narratives with only names changed suggest analysts are not meaningfully analyzing each case. A poor narrative can render an otherwise valid SAR useless to investigators. Examiners review SAR quality as part of BSA examinations. Systemic boilerplate narratives indicate a compliance culture that files SARs for regulatory credit rather than law enforcement utility — a fundamental program failure."
  },
  {
    id: 325,
    category: "Scenario Based",
    question: "A compliance officer discovers that the bank's BSA/AML policy has not been updated since 2018 and references FinCEN's proposed CDD rule rather than the final rule that became effective in 2018. Examiners arrive next month. What is the PRIORITY action?",
    options: [
      "Do nothing — examiners look at actual practices, not policy documents",
      "Update the policy immediately to reflect current law and practice before the examination; outdated policies citing proposed rules are a significant examination finding",
      "Request an extension from the examiners to update the policy post-examination",
      "Only update the policy if practices have also not kept pace with the regulation"
    ],
    answer: 1,
    explanation: "AML policies must reflect current law and practice. A policy referencing a proposed rule that was finalized in 2018 — seven years later — demonstrates inadequate policy governance. Examiners review policies as evidence of institutional understanding and commitment to compliance. Citing a proposed (not final) rule suggests the institution may not have implemented the actual requirements. Policies should be updated annually at minimum and when material regulatory changes occur. Updating before the examination is both honest governance and necessary — falsely representing that 'practices are fine even if the policy isn't' invites deeper scrutiny. Update the document and attest that practices are already aligned."
  },
  {
    id: 326,
    category: "Scenario Based",
    question: "A bank's AML training program includes mandatory annual training. 30% of front-line staff did not complete training this year and received no consequence. A teller from this group fails to recognize a structuring attempt and processes the transaction. What is the PRIMARY compliance failure?",
    options: [
      "The teller's individual failure to recognize the pattern",
      "The institution's failure to enforce training completion and the resulting gap in front-line competency — BSA requires ongoing employee training as a program pillar",
      "The training program content for not making structuring recognition clear enough",
      "FinCEN's failure to provide branch-level guidance on structuring recognition"
    ],
    answer: 1,
    explanation: "A mandatory training program that isn't actually enforced provides no compliance protection. The 30% non-completion rate — with no consequence — demonstrates the institution does not take the training pillar seriously. This is exactly the type of finding that leads to consent orders: training is required on paper but not implemented in practice. The teller's failure is a direct result of institutional non-enforcement, not individual failing. Examiners will ask for training completion records and ask what happened to non-completers. The institution must enforce training and document completion. The BSA's training pillar requirement means 'offered' training is insufficient — completion is required."
  },
  {
    id: 327,
    category: "Scenario Based",
    question: "A bank's compliance department operates under the CFO's direct supervision. The CFO is responsible for business growth targets and has previously pressured compliance to expedite customer onboarding. What governance concern does this structure create?",
    options: [
      "No concern — the CFO has financial expertise relevant to compliance",
      "A structural independence conflict — a compliance function reporting to a business executive with revenue targets may face pressure to subordinate compliance obligations to business goals; best practice is independent reporting to the CEO or board",
      "Only a concern if the CFO has personally instructed staff to violate BSA rules",
      "No concern if the compliance officer has a direct line to the audit committee"
    ],
    answer: 1,
    explanation: "Compliance independence is a foundational principle of effective AML programs. When compliance reports to a business line executive with P&L responsibility, there is an inherent tension: the executive's success metrics (revenue, onboarding speed) conflict with compliance's mandate (risk gating, due diligence). Historical enforcement actions — including several major bank consent orders — have cited exactly this reporting structure as a governance failure that allowed business pressure to override compliance requirements. Best practice (and regulatory expectation) is for the BSA Officer and compliance function to report directly to the CEO or board, independent of revenue-generating business lines."
  },
  {
    id: 328,
    category: "Scenario Based",
    question: "A bank's consent order requires remediating its AML program within 18 months. At month 14, progress is 40% complete. The bank requests a 12-month extension from its regulator. What is the MOST likely regulatory response and consequence?",
    options: [
      "Regulators typically grant extensions as long as the bank is making progress",
      "Regulators may deny the extension or impose additional conditions — failure to meet consent order deadlines can result in increased supervisory action, civil money penalties, or escalated enforcement",
      "A 12-month extension is standard for complex remediation programs",
      "Regulators are precluded from adding penalties during an active consent order"
    ],
    answer: 1,
    explanation: "Consent orders are binding regulatory agreements with enforceable deadlines. Being 40% complete at month 14 of an 18-month remediation is a significant failure of pace. Regulators view consent order non-compliance as evidence that the institution does not prioritize AML compliance. Possible consequences include: (1) denial of expansion applications; (2) additional civil money penalties; (3) escalation to a formal enforcement action (cease and desist); (4) in extreme cases, referral for criminal prosecution. Extensions may be granted but are not routine and typically come with enhanced supervisory conditions. Regulators monitor consent order progress closely and 40% completion at 78% elapsed time raises serious concerns."
  },
  {
    id: 329,
    category: "Scenario Based",
    question: "During an AML look-back review ordered by regulators, the bank discovers $180 million in transactions that should have triggered SARs but did not. The look-back covers a three-year period. What are the bank's obligations?",
    options: [
      "File SARs on the identified transactions immediately — late SARs are better than no SARs",
      "File late SARs on identified transactions, remediate the root cause of the filing failures, conduct root cause analysis, and self-report the extent of the failure to regulators if not already known to them",
      "Since the three-year period falls outside the SAR statute of limitations, no filing is required",
      "File a single consolidated SAR covering all identified transactions"
    ],
    answer: 1,
    explanation: "When a look-back reveals prior SAR filing failures, the institution must: (1) file late SARs on each identified transaction (FinCEN accepts late SARs with notation of the look-back context); (2) document the root cause of each failure (system gap, training gap, human error); (3) implement corrective actions to prevent recurrence; and (4) if the full extent was not previously disclosed to regulators, proactively report findings. Late SARs retain law enforcement value and demonstrate good faith. There is no statute of limitations that eliminates the SAR filing obligation for past transactions. Individual SARs should be filed — not consolidated — to preserve the quality of law enforcement intelligence."
  },
  {
    id: 330,
    category: "Scenario Based",
    question: "A bank's largest revenue-generating business line is international private banking. An examination reveals the private banking team has been approving high-risk PEP clients without obtaining required senior management sign-off, claiming sign-offs 'slow down the sales process.' What is this scenario an example of?",
    options: [
      "A reasonable business efficiency measure that regulators should accommodate",
      "A tone-at-the-top failure — when business units circumvent compliance controls for revenue reasons, it indicates leadership has not established a culture of compliance throughout the organization",
      "A training issue that can be resolved with additional education for the private banking team",
      "An isolated operational issue that does not reflect on overall compliance culture"
    ],
    answer: 1,
    explanation: "Bypassing mandatory senior management approval for PEP onboarding — at the behest of a revenue-generating team — is a compliance culture failure, not merely an operational mistake. 'It slows sales' is precisely the argument that effective compliance culture must override. This is a 'tone at the top' issue because it reflects the values the organization has operationally (if not formally) endorsed: revenue over risk. Regulators assess whether a bank's compliance culture is genuine or performative. When the highest-revenue team systematically bypasses controls, it indicates that stated compliance commitments are not embedded in behavior. Consent orders frequently cite this exact dynamic."
  },

  // --- GROUP 14: HIGH-RISK INDUSTRIES & BUSINESS TYPES ---
  {
    id: 331,
    category: "Scenario Based",
    question: "A pawn shop owner deposits $8,000 in cash proceeds each Friday from the week's merchandise sales. The shop's inventory rarely exceeds $20,000 in total value, yet it reports $400,000 in monthly cash sales. What is the bank's MOST appropriate response?",
    options: [
      "Accept the deposits — pawn shops are inherently cash-intensive businesses",
      "Conduct enhanced due diligence to reconcile the sales volume with inventory capacity; the $400,000 monthly cash throughput is vastly inconsistent with a shop holding $20,000 in inventory, suggesting the business may be a front",
      "File a CTR for each week's $8,000 deposit since it may be structured",
      "Request monthly sales records and close the account if the shop cannot explain the volume"
    ],
    answer: 1,
    explanation: "A pawn shop with $20,000 in inventory generating $400,000 in monthly cash sales is mathematically inconsistent — it would require turning over its entire inventory 20 times per month, an absurd velocity. This is a classic front business red flag. The bank must reconcile reported revenues with the business's actual capacity. Pawn shops are also federally regulated under the BSA as dealers in precious metals in certain contexts, and are high-risk cash businesses. The bank should request documentation (sales records, inventory logs, licenses) and file a SAR if the volume cannot be credibly explained. The $8,000 weekly deposits alone are not suspicious, but the aggregate revenue claim is."
  },
  {
    id: 332,
    category: "Scenario Based",
    question: "A money services business (MSB) offers remittance services to high-risk countries and processes $10 million monthly in wire transfers. The owner's AML program consists of a one-page policy and no transaction monitoring system. What is the PRIMARY enforcement risk?",
    options: [
      "Low risk — small MSBs are exempt from full BSA program requirements",
      "Extremely high risk — MSBs are covered financial institutions under the BSA and must have AML programs commensurate with their risk profile; $10M monthly in high-risk remittances demands robust controls",
      "The risk is limited to FinCEN registration — operational AML programs are optional for MSBs",
      "Only relevant if the MSB has been previously cited for violations"
    ],
    answer: 1,
    explanation: "MSBs — including money transmitters, currency exchangers, and remittance companies — are covered under 31 CFR Part 1022 with full BSA AML program obligations: written policies, a designated compliance officer, training, and independent testing. A one-page policy with no transaction monitoring for $10M/month in high-risk country transfers is a fundamental program failure. FinCEN has imposed multi-million dollar civil money penalties on MSBs with exactly this profile. High-volume remittances to high-risk jurisdictions demand enhanced monitoring precisely because this channel is frequently exploited for ML and TF. The owner faces personal liability in addition to business liability."
  },
  {
    id: 333,
    category: "Scenario Based",
    question: "A bank customer is a licensed cannabis dispensary in a state where recreational cannabis is legal. The dispensary wants to deposit $200,000 in weekly cash proceeds. The bank has no existing cannabis banking policy. What should the bank do BEFORE onboarding this customer?",
    options: [
      "Accept the customer — the dispensary is licensed and operating legally",
      "Develop a cannabis banking policy aligned with FinCEN's 2014 Marijuana Banking Guidance before onboarding; this includes EDD, license verification, state compliance monitoring, and specific SAR filing procedures for MRBs",
      "Decline the customer — federal law prohibits banking cannabis businesses",
      "Accept the customer with enhanced monitoring but no specific policy"
    ],
    answer: 1,
    explanation: "While banks are not legally prohibited from banking cannabis businesses (the 2014 DOJ Cole Memo and FinCEN guidance created a framework), proceeding without a documented cannabis banking policy is imprudent and invites regulatory criticism. The bank must first: establish a formal MRB banking policy; develop EDD procedures for verifying state licenses and compliance; design transaction monitoring specific to MRBs; train relevant staff; and understand the specific SAR categories for marijuana businesses (Marijuana Limited, Marijuana Priority, Marijuana Termination). Onboarding without this infrastructure creates a situation where suspicious activity cannot be properly assessed or reported."
  },
  {
    id: 334,
    category: "Scenario Based",
    question: "A check cashing business cashes a $25,000 U.S. Treasury check for a customer who does not have an account and provides only a driver's license. No CTR is filed. What BSA violation has MOST likely occurred?",
    options: [
      "No violation — check cashing is not a cash transaction requiring a CTR",
      "Failure to file a CTR — check cashing businesses that cash checks over $10,000 must file CTRs, as this constitutes a 'cash in' transaction above the threshold",
      "Failure to obtain two forms of identification for transactions over $10,000",
      "No violation since Treasury checks are exempt from CTR reporting requirements"
    ],
    answer: 1,
    explanation: "Check cashing businesses are MSBs subject to BSA CTR requirements. Cashing a check is a 'cash in' transaction — the customer receives currency exceeding $10,000. A CTR must be filed. Treasury checks are not exempt. The $25,000 amount clearly exceeds the threshold. This is a straightforward BSA violation. Additionally, the customer identification procedures should be assessed against the check casher's CIP requirements. Check cashers have been a frequent target of BSA enforcement precisely because of failures in CTR filing for large check cashing transactions. This would be a clear examination finding and potential civil money penalty."
  },
  {
    id: 335,
    category: "Scenario Based",
    question: "A precious metals dealer sells $50,000 worth of gold coins to an individual who pays in cash. The dealer does not file an IRS Form 8300 or a SAR. What reporting obligation has the dealer missed?",
    options: [
      "No obligation — precious metals dealers are not required to report cash sales",
      "Form 8300 — dealers in precious metals, stones, and jewels must file Form 8300 with the IRS for cash transactions over $10,000; a SAR may also be required for structuring or suspicious patterns",
      "A CTR must be filed because the transaction exceeds $10,000",
      "Only OFAC screening is required for precious metals transactions"
    ],
    answer: 1,
    explanation: "Dealers in precious metals, precious stones, and jewels (DMPSJs) must file IRS Form 8300 for cash transactions exceeding $10,000 under 26 U.S.C. § 6050I and the BSA. This is analogous to, but separate from, CTR requirements for financial institutions. Precious metals have historically been used as ML vehicles due to their portability and value density. The AML Act of 2020 also brought art dealers and antiquities dealers into the BSA framework for certain transactions. The dealer must also have an AML program if it is a covered business under the relevant rules. Failure to file Form 8300 is a federal reporting violation."
  },
  {
    id: 336,
    category: "Scenario Based",
    question: "A private equity fund's new limited partner contributes $15 million as a capital call. The LP is a Delaware LLC with a Cayman Islands manager, the beneficial ownership paperwork lists 'multiple private investors,' and the LP was formed 60 days before the capital call. What EDD is MOST critical?",
    options: [
      "Verify the Delaware LLC's registered agent and formation documents, then proceed",
      "Identify the actual natural persons who own and control the LP — the vague 'multiple private investors' description with Cayman management and rapid formation are red flags for concealed beneficial ownership",
      "Request the Cayman manager's financial statements and proceed if they are audited",
      "Private equity fund LP contributions are exempt from beneficial ownership requirements"
    ],
    answer: 1,
    explanation: "A $15M LP contribution from an entity that: was formed 60 days ago; has anonymous 'multiple private investors'; and has Cayman management — presents a high-risk beneficial ownership profile. The combination suggests the entity may have been created specifically to obscure who is actually investing. Private equity funds registered as investment advisers have AML program obligations and must conduct CDD on limited partners. The fund must drill through the LLC and Cayman manager to identify the natural persons ultimately contributing funds. Accepting 'multiple private investors' as a beneficial owner disclosure is inadequate and would fail FinCEN CDD Rule requirements."
  },
  {
    id: 337,
    category: "Scenario Based",
    question: "A cryptocurrency ATM operator processes thousands of daily transactions. Its AML program requires customer ID for transactions over $10,000 only. A series of $9,500 transactions by the same users are not flagged. What BSA problem exists?",
    options: [
      "The AML program is correctly calibrated to the reporting threshold",
      "The program fails to detect structuring — customers splitting transactions to stay below the $10,000 threshold is a classic pattern requiring detection regardless of individual transaction size",
      "Crypto ATMs are exempt from anti-structuring rules since they are technology platforms",
      "The obligation to detect structuring begins only above $5,000"
    ],
    answer: 1,
    explanation: "Crypto ATM operators functioning as money transmitters are MSBs subject to BSA requirements, including anti-structuring detection. A program that only flags transactions over $10,000 without monitoring for patterns below the threshold is a fundamental AML failure — it provides criminals with a roadmap for how to avoid detection. The same users making $9,500 transactions repeatedly is classic structuring. The BSA requires institutions to detect and report structuring regardless of whether any single transaction crosses a reporting threshold. FinCEN has taken enforcement action against crypto ATM operators for exactly this failure mode."
  },
  {
    id: 338,
    category: "Scenario Based",
    question: "A non-profit organization (NPO) raises $5 million in domestic donations but wires 95% of its operating budget to subsidiaries in three countries on FATF's high-risk list. The NPO's leadership cannot explain how the funds are used after transfer. What risk does this present?",
    options: [
      "A tax compliance risk only — NPOs with foreign operations must file Form 990 disclosures",
      "A significant terrorist financing risk — NPOs are a known TF channel, and the combination of domestic fundraising, high-risk jurisdiction wiring, and inability to account for fund usage are major red flags",
      "A regulatory risk for FBAR non-compliance but not an AML concern",
      "An operational risk if the subsidiaries fail — but not a financial crime risk"
    ],
    answer: 1,
    explanation: "Non-profit abuse is one of FATF's identified TF channels (Recommendation 8). This NPO exhibits multiple TF red flags: (1) large domestic fundraising; (2) near-total fund transfer abroad; (3) concentration in FATF high-risk jurisdictions; and (4) inability to account for fund usage. Legitimate NPOs maintain records of how every dollar is deployed. This combination is consistent with a 'charitable' front used to move funds to terrorist or extremist groups. The bank maintaining the NPO's accounts should file a SAR with TF notation. Law enforcement may also warrant voluntary notification given the terrorism nexus."
  },
  {
    id: 339,
    category: "Scenario Based",
    question: "A luxury watch dealer sells $300,000 in timepieces to a customer who pays with multiple bank drafts from different banks, all issued on the same day. Why are bank drafts from multiple institutions particularly suspicious here?",
    options: [
      "They are not suspicious — bank drafts are secure and commonly used for high-value purchases",
      "Multiple same-day bank drafts from different institutions suggest the buyer structured a large cash withdrawal across multiple banks to obtain drafts below individual reporting thresholds — using bank drafts as a structured cash substitute",
      "The concern is only OFAC screening — bank drafts from multiple banks represent multiple potential sanctions exposures",
      "Bank drafts are fully traceable and therefore present no ML risk"
    ],
    answer: 1,
    explanation: "Bank drafts obtained with cash at multiple institutions are a known ML vehicle for circumventing CTR reporting. By making cash payments at several banks — each below $10,000 — and obtaining bank drafts, the buyer converts untracked cash into seemingly legitimate negotiable instruments. Using multiple drafts from different institutions on the same day strongly suggests coordinated structuring. The AML Act of 2020 and FinCEN advisories have specifically flagged high-value goods dealers. The watch dealer should be wary, request identification, and if the pattern is suspicious, consider reporting. The banks that issued the individual drafts may also have SAR obligations."
  },
  {
    id: 340,
    category: "Scenario Based",
    question: "A lawyer operating as a trustee of several family trusts receives large deposits from overseas entities into the trust accounts, then distributes to various beneficiaries across multiple jurisdictions monthly. The lawyer is reluctant to disclose who the overseas entities are. What is the PRIMARY AML concern?",
    options: [
      "Attorney-client privilege prevents any inquiry into trust account sources",
      "The lawyer may be using professional trust accounts as a laundering conduit — the combination of opaque overseas sources, professional account protection, and multi-jurisdiction distributions is a high-risk typology",
      "Trusts are private instruments and the bank has no right to inquire about their operations",
      "The concern is limited to whether the trusts are properly registered under state law"
    ],
    answer: 1,
    explanation: "Professional intermediary abuse — lawyers, accountants, and trustees using their professional accounts and client relationships to layer funds — is a well-documented ML typology. Trust accounts receive a degree of inherent legitimacy that criminals exploit. The specific red flags here: opaque overseas entity sources, refusal to identify them, and multi-jurisdictional distributions through a pattern that looks designed to obscure. While attorney-client privilege is real, it does not protect communications in furtherance of crime (crime-fraud exception), and the bank has an independent right — and obligation — to understand the source of funds in accounts it holds. EDD and likely a SAR are required."
  },

  // --- GROUP 15: INTERNATIONAL STANDARDS & CROSS-BORDER ---
  {
    id: 341,
    category: "Scenario Based",
    question: "Country X is placed on FATF's 'increased monitoring' (grey) list. A U.S. bank has significant correspondent banking relationships with five banks in Country X. What is the U.S. bank's MOST appropriate immediate action?",
    options: [
      "Immediately terminate all correspondent relationships with Country X banks",
      "Conduct enhanced due diligence reviews on all Country X correspondent relationships to assess whether existing controls are adequate given the elevated jurisdiction risk",
      "Notify FinCEN of all Country X correspondent relationships within 30 days",
      "No action required until FinCEN or the OCC issues specific guidance on Country X"
    ],
    answer: 1,
    explanation: "FATF's grey list designation signals strategic AML/CFT deficiencies in a jurisdiction. U.S. regulators expect institutions with exposure to grey-listed countries to proactively reassess their risk exposure. The appropriate response is EDD review — not automatic termination (which would be wholesale de-risking), but a genuine assessment of whether existing controls are sufficient given the elevated country risk. This may result in enhanced monitoring, revised due diligence procedures, or, for some relationships, termination. Proactive action demonstrates the institution is responsive to evolving country risk — a positive signal to regulators."
  },
  {
    id: 342,
    category: "Scenario Based",
    question: "A U.S. bank receives a request from a foreign financial intelligence unit (FIU) via the Egmont Group's secure network asking for transaction information on a mutual customer being investigated for ML. How should the bank respond?",
    options: [
      "Provide the information directly to the foreign FIU since Egmont Group requests are legally binding",
      "Route the request through FinCEN — foreign FIU requests should go to the U.S. FIU (FinCEN), which will then relay information to the institution; direct responses to foreign FIUs may violate U.S. privacy law",
      "Refuse the request — international AML cooperation does not require U.S. bank participation",
      "Provide the information after obtaining the customer's consent"
    ],
    answer: 1,
    explanation: "The Egmont Group facilitates intelligence sharing between national FIUs, not directly with foreign banks. A foreign FIU request comes to FinCEN (the U.S. FIU), which assesses it and may task a financial institution accordingly. U.S. banks should not provide information directly to foreign FIUs — this would bypass the legal framework and potentially violate the Right to Financial Privacy Act. If the bank receives a request appearing to be from a foreign FIU, it should immediately notify FinCEN and seek guidance. The correct channel is FIU-to-FIU (foreign FIU → Egmont → FinCEN → U.S. institution)."
  },
  {
    id: 343,
    category: "Scenario Based",
    question: "A FATF mutual evaluation rates Country Y as having 'low effectiveness' in recovering proceeds of crime (Immediate Outcome 8). A U.S. bank considers opening a correspondent relationship with a bank in Country Y. What does this rating specifically suggest?",
    options: [
      "The country has adequate AML laws but poor technical compliance with FATF recommendations",
      "Country Y's justice system rarely or never confiscates criminal proceeds, meaning criminals who are caught face minimal financial consequence — a signal that ML risk in that jurisdiction is higher than jurisdictions where asset recovery is robust",
      "The rating applies only to non-financial businesses and does not affect bank-to-bank relationships",
      "An IO8 rating reflects only on law enforcement capacity, not the banking sector's ML risk"
    ],
    answer: 1,
    explanation: "FATF's Immediate Outcome 8 assesses whether proceeds of crime are confiscated in practice. Low effectiveness means: (1) criminals are not losing their laundered assets; (2) there is little deterrence; and (3) the jurisdiction is likely perceived as a safe haven for laundered proceeds. This signals elevated ML risk for all financial relationships in that country. A U.S. correspondent banking relationship with a Country Y bank should reflect this in the risk assessment — heightened scrutiny, detailed EDD, and potentially enhanced monitoring. Mutual evaluation results are publicly available and are a key input for country risk assessments."
  },
  {
    id: 344,
    category: "Scenario Based",
    question: "A U.S. bank needs to obtain records from a bank in Switzerland as part of an internal ML investigation. The Swiss bank cites local bank secrecy laws and refuses to share. What is the CORRECT approach for U.S. law enforcement to obtain these records?",
    options: [
      "Directly subpoena the Swiss bank's U.S. correspondent account for any records",
      "Use the Mutual Legal Assistance Treaty (MLAT) process between the U.S. and Switzerland to request the records through official government-to-government legal channels",
      "Sanction the Swiss bank under the USA PATRIOT Act Section 319 for non-cooperation",
      "The records are unattainable — Swiss bank secrecy permanently shields all customer information"
    ],
    answer: 1,
    explanation: "MLATs are bilateral treaties that create formal government-to-government processes for exchanging legal assistance, including obtaining foreign bank records. The U.S. Department of Justice submits the request to its Swiss counterpart, which processes it through Swiss legal channels. Switzerland has an MLAT with the U.S. and has cooperated in many significant investigations. Section 319 of the PATRIOT Act (correspondent account seizure) is a different tool — available when foreign banks refuse to comply with U.S. grand jury subpoenas — but MLAT is the standard first step. Swiss secrecy has significant exceptions for serious crimes including ML."
  },
  {
    id: 345,
    category: "Scenario Based",
    question: "An institution's global risk assessment rates its Latin American operations as 'medium risk' but does not account for FATF's identification of three Latin American countries as jurisdictions with strategic deficiencies. What is the gap in the risk assessment?",
    options: [
      "No gap — overall regional ratings are sufficient for risk assessment purposes",
      "The assessment fails to incorporate publicly available FATF country-level risk signals — a risk-based assessment must reflect specific country-level AML/CFT deficiencies, not just regional generalizations",
      "The gap is technical — the assessment should reference FATF's 40 Recommendations rather than country evaluations",
      "FATF evaluations apply only to regulators, not to financial institutions' internal risk assessments"
    ],
    answer: 1,
    explanation: "Enterprise risk assessments must incorporate country-specific risk factors, not just broad regional assessments. FATF's public statements identifying countries with strategic deficiencies are exactly the type of material, public information that compliance teams must incorporate. A regional 'medium risk' rating that ignores three FATF-flagged countries within the region would significantly understate actual risk exposure. The FFIEC BSA/AML Examination Manual and FinCEN guidance both expect institutions to maintain current, granular country risk assessments that reflect public AML/CFT intelligence. An outdated or overly broad assessment is a compliance gap."
  },
  {
    id: 346,
    category: "Scenario Based",
    question: "A bank's customer conducts substantial business in a country sanctioned by the EU and UN but not by the U.S. The customer asks the bank to process a payment connected to that country. What framework should guide the bank's decision?",
    options: [
      "Only U.S. OFAC sanctions apply — EU and UN sanctions are irrelevant to U.S. banks",
      "U.S. OFAC sanctions are the binding legal requirement; EU and UN sanctions should be assessed as risk factors, and the bank should also consider reputational risk and correspondent bank policies even if U.S. sanctions don't prohibit the transaction",
      "The UN sanctions are automatically binding on all U.S. institutions",
      "The bank should refuse the transaction because EU sanctions create secondary sanctions risk for U.S. banks"
    ],
    answer: 1,
    explanation: "U.S. banks are legally bound by U.S. OFAC sanctions. EU and UN sanctions are not automatically binding under U.S. law, but they are critical risk factors: (1) reputational risk from being associated with a sanctions target in allied jurisdictions; (2) correspondent banks in EU countries may refuse to process related transactions; (3) UN Security Council-mandated sanctions create international obligations the U.S. government has typically incorporated into U.S. law. A risk-based decision must weigh all these factors even if the transaction is technically permissible under U.S. OFAC rules. Secondary sanctions (like those under CAATSA for Russia) can also create indirect exposure."
  },
  {
    id: 347,
    category: "Scenario Based",
    question: "A Wolfsberg Group Correspondent Banking Due Diligence Questionnaire (CBDDQ) completed by a foreign respondent bank lists it as having 'no de-risking policies.' What does this disclosure MOST warrant?",
    options: [
      "No follow-up — not having de-risking policies is a neutral fact",
      "Further inquiry into how the bank manages high-risk customers and jurisdictions; a bank without de-risking policies may be accepting customers that other institutions have declined, concentrating unacceptable ML risk",
      "Immediate termination — the absence of de-risking policies violates FATF standards",
      "No concern — de-risking is controversial and banks should not be penalized for avoiding it"
    ],
    answer: 1,
    explanation: "A correspondent bank that has no de-risking policies may be serving as the 'bank of last resort' for customers and businesses that have been rejected by other institutions due to ML risk. This concentration of declined-customer risk is itself a major red flag. The CBDDQ is designed to identify exactly these situations. The U.S. bank should conduct further due diligence: What customer types does the respondent serve? Are they serving jurisdictions or business types that others have exited? What are their SAR filing rates? 'No de-risking' is not inherently wrong, but it warrants understanding why and what risks are consequently being accepted."
  },
  {
    id: 348,
    category: "Scenario Based",
    question: "A transaction is denominated in Iranian Rials, routed through a Turkish intermediary, and ultimately credited to a U.S. account. The Turkish bank has stripped the Iran-related payment information from the SWIFT message. What has occurred, and what should the U.S. bank do?",
    options: [
      "Process normally — the Turkish bank has handled the Iran-related compliance obligations",
      "Reject the transaction and file a SAR — payment stripping (removing Iran-related information from SWIFT messages) is a deceptive practice used to evade U.S. sanctions and is itself a federal crime",
      "Return the payment to the Turkish bank with a request for more information",
      "File a CTR because the payment originated in a foreign currency"
    ],
    answer: 1,
    explanation: "Payment stripping — deliberately removing or altering originator information (particularly sanctioned-jurisdiction details) in SWIFT messages to avoid sanctions screening — is a major sanctions evasion technique and a federal crime. Several major international banks (including BNP Paribas, Standard Chartered, and HSBC) have been fined billions of dollars for facilitating payment stripping for Iranian transactions. The U.S. bank must: (1) reject and reverse the transaction; (2) file a SAR; (3) report to OFAC; and (4) review the relationship with the Turkish intermediary. This is one of the most serious AML/sanctions scenarios in global finance."
  },
  {
    id: 349,
    category: "Scenario Based",
    question: "A compliance officer at a global bank discovers that the bank's Singapore branch has been processing transactions for a Myanmar entity that would be prohibited by U.S. sanctions if processed by the U.S. parent. The Singapore branch is not directly subject to U.S. OFAC jurisdiction. What is the compliance officer's concern?",
    options: [
      "No concern — foreign branches are subject only to host country regulations",
      "The U.S. parent may be facilitating sanctions evasion through its non-U.S. branch — global banks must apply consistent sanctions standards across branches to prevent regulatory arbitrage and potential U.S. jurisdiction implications",
      "The concern is limited to reputational risk, not legal exposure for the U.S. entity",
      "The Singapore branch should simply stop reporting to U.S. compliance to avoid creating documentation of the issue"
    ],
    answer: 1,
    explanation: "While a Singapore branch is primarily subject to MAS (Singapore) regulations, a U.S. parent bank can face legal consequences if its foreign branches are used to circumvent U.S. sanctions — particularly if U.S. persons, systems, or correspondent accounts are involved in any part of the transaction chain. OFAC's jurisdiction extends to U.S. persons' facilitation of prohibited transactions globally. Global banks are expected to apply U.S. sanctions standards enterprise-wide, not just in U.S. entities. Regulatory arbitrage — routing prohibited transactions through less-regulated subsidiaries — is exactly the behavior that landed numerous banks in deferred prosecution agreements."
  },
  {
    id: 350,
    category: "Scenario Based",
    question: "A customer remits money to family members in a country where the local hawala network is the primary financial infrastructure. The customer uses the bank for large outbound wire transfers and a local hawala operator for smaller amounts. Is the hawala use a red flag?",
    options: [
      "Yes — all hawala usage is per se suspicious and requires a SAR",
      "Not necessarily — in jurisdictions where formal banking is inaccessible, hawala is a legitimate cultural and economic necessity; the red flag would be if amounts sent through hawala are disproportionate or inconsistent with the customer's stated profile",
      "Yes — hawala networks are unregulated and therefore always indicate ML intent",
      "No concern — hawala is legal in the U.S. and therefore requires no AML consideration"
    ],
    answer: 1,
    explanation: "Hawala (informal value transfer systems) is a legitimate financial mechanism widely used in South Asia, the Middle East, and Africa — particularly where banking infrastructure is limited. FinCEN and FATF acknowledge that hawala serves genuine economic needs. Using hawala alone is not a SAR trigger. The risk assessment question is whether the hawala usage is consistent with the customer's profile, purpose, and remittance pattern. Red flags would include: amounts inconsistent with the customer's income; hawala used to obscure the destination or recipient; or a pattern suggesting hawala is used specifically to evade reporting while the bank handles amounts just below thresholds."
  },
];
