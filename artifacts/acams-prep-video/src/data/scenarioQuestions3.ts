import type { QuizQuestion } from './quizQuestions';

export const scenarioQuestions3: QuizQuestion[] = [

  // --- GROUP 16: FRAUD–ML NEXUS ---
  {
    id: 351,
    category: "Scenario Based",
    question: "A victim of a romance scam transfers $120,000 to a 'partner' she met online. The money is quickly forwarded to multiple accounts and ultimately wired offshore. The victim contacts the bank after realizing she was defrauded. What should the bank do?",
    options: [
      "Attempt to recall the wire and file a SAR documenting the fraud and ML pattern",
      "Tell the victim to contact police — the bank has no obligation once a wire is sent",
      "Reverse the wire transfer — all fraud-related wires can be recalled by the originating bank",
      "File a CTR because the amount exceeds $10,000"
    ],
    answer: 0,
    explanation: "Romance scam proceeds are both a fraud and an ML matter. The bank should: (1) immediately attempt a wire recall through its correspondent bank (success depends on timing and whether funds have moved); (2) file a SAR noting both the fraud and the ML pattern (rapid fund movement and offshore wire); and (3) assist the victim in filing a report with the FBI's IC3. Once funds are forwarded and wired offshore, recall is often impossible — but the attempt must be made. CTRs are for cash transactions, not wires. The bank cannot simply disclaim responsibility — it has affirmative SAR filing obligations and a duty to attempt recall."
  },
  {
    id: 352,
    category: "Scenario Based",
    question: "A business email compromise (BEC) scheme causes a corporate customer to wire $2.3 million to a fraudster's account at another bank. The receiving bank notices the money is rapidly forwarded to 15 accounts within hours. What obligation does the RECEIVING bank have?",
    options: [
      "No obligation — the receiving bank was not party to the fraud",
      "File a SAR for the suspicious rapid distribution pattern; BEC proceeds are ML predicate crime proceeds and the fragmented forwarding pattern is itself a suspicious activity indicator",
      "Freeze all 15 downstream accounts immediately without further analysis",
      "Contact the sending bank directly and return all funds"
    ],
    answer: 1,
    explanation: "The receiving bank is not complicit in the fraud, but it has independent AML obligations. The rapid fragmentation of a large incoming wire into 15 downstream accounts within hours is a textbook money mule network pattern — a recognized suspicious activity indicator for fraud-based ML. The bank must file a SAR on the suspicious distribution pattern. FinCEN has issued multiple advisories on BEC and money mule typologies. The bank should also consider whether it can interrupt the outbound transfers if they haven't settled. Returning funds to the sending bank requires coordination and may be complicated by money mule account holders' rights."
  },
  {
    id: 353,
    category: "Scenario Based",
    question: "A customer deposits $600,000 in checks from multiple individuals, all from the same state, into a new account and immediately attempts to wire the total offshore. An investigation reveals the checks are from elderly victims of an advance fee fraud. What ML stage is the wiring, and what should the bank do?",
    options: [
      "The wiring is placement; the bank should file a SAR and freeze the outgoing wire pending review",
      "The wiring is layering or integration; the bank should file a SAR, place a hold on the wire, and contact law enforcement given the elder fraud and ML combination",
      "The wiring is integration; the bank should process it and file a SAR after the fact",
      "The wiring is pre-placement; no reporting is required until the funds leave the country"
    ],
    answer: 1,
    explanation: "The check deposits constitute placement (introducing proceeds of the advance fee fraud into the banking system). The offshore wire is layering — moving the funds to make them harder to trace. The bank should: (1) place an immediate hold on the outgoing wire; (2) file a SAR with both elder fraud and ML notations; and (3) given the potential criminal activity, proactively contact law enforcement (the SAR process, while confidential, may also be supplemented by a direct law enforcement referral in urgent cases). Elder fraud combined with ML is a priority area for FinCEN and FBI. Allowing the wire to process first and filing a SAR after allows the proceeds to leave the country permanently."
  },
  {
    id: 354,
    category: "Scenario Based",
    question: "A Ponzi scheme operator opens accounts at six different banks, collecting investor funds into each, then moving all funds to a single account before paying early investors. The scheme eventually collapses. Which bank bears AML responsibility?",
    options: [
      "Only the final consolidation bank, since it holds the master account",
      "All six banks — each has an independent obligation to detect suspicious activity (unusual inflows, rapid internal movement) and file SARs regardless of whether the scheme uses their accounts as intermediary steps",
      "The bank where the operator has a personal account",
      "No bank bears AML responsibility for fraud schemes they were not aware of"
    ],
    answer: 1,
    explanation: "Each bank in a fraud-ML chain has independent AML obligations. The signature Ponzi account patterns — large investor inflows, rapid consolidation, periodic large outflows to 'investors' — are detectable at each institution. All six banks should have been conducting transaction monitoring and customer due diligence. Each had an obligation to investigate and file SARs if activity was suspicious. Distributing accounts across multiple banks is itself a ML technique to reduce the visibility of the full scheme at any one institution. Multiple simultaneous SAR filings from different institutions can actually help law enforcement identify the full scope of a scheme."
  },
  {
    id: 355,
    category: "Scenario Based",
    question: "A healthcare professional submits $4 million in fraudulent Medicare billing and receives reimbursements into a practice account. He then pays 'employee salaries' to family members who do not work at the practice and purchases property in the name of a family trust. What predicate offenses and ML stages are present?",
    options: [
      "Only Medicare fraud — the subsequent transfers are civil in nature",
      "Medicare fraud (predicate offense), with the salary payments constituting layering and the property purchase constituting integration of the fraud proceeds",
      "Tax fraud and civil wire fraud — AML does not apply to healthcare sector crimes",
      "Only money laundering — the billing fraud is a separate matter handled by HHS-OIG"
    ],
    answer: 1,
    explanation: "Healthcare fraud is a predicate offense for money laundering under 18 U.S.C. § 1956. The structure: Medicare fraud generates $4M in illicit reimbursements (placement — into the practice's legitimate bank account). 'Salary' payments to non-employees disperse the funds while creating a paper trail of apparent payroll (layering). Property purchased through a family trust creates an asset that appears to have a legitimate origin (integration). This scenario involves joint jurisdiction between HHS-OIG (healthcare fraud) and DOJ (ML). Banks holding the practice accounts had SAR obligations for the unusual salary payment patterns and should have identified beneficial owner concerns with the family trust property purchase."
  },
  {
    id: 356,
    category: "Scenario Based",
    question: "A customer receives consistent monthly deposits of exactly $4,800 from 30 different individuals, which he claims is 'peer-to-peer lending repayments.' The total is $144,000 monthly. He has no loan documentation and the 30 payers are in different states. What is the MOST likely ML concern?",
    options: [
      "No concern — P2P lending is a legitimate financial activity",
      "The account is likely a money mule account — 30 payers of identical amounts with no documentation suggests organized collection activity, possibly for fraud proceeds, not genuine loan repayments",
      "The consistency of the $4,800 amount suggests these are structured deposits that individually avoid reporting",
      "The customer may be operating an unlicensed money service business"
    ],
    answer: 1,
    explanation: "Thirty geographically dispersed individuals paying identical amounts monthly with no loan documentation is not a P2P lending pattern — it is a money mule collection pattern. In P2P lending, repayment amounts would vary based on interest rates, principal amounts, and schedules. Identical $4,800 payments are implausible as organic loan repayments. This pattern is consistent with a fraud ring using the account to collect payments (e.g., online scam victims, drug payment collection) and consolidate them for forwarding. The bank should file a SAR and conduct EDD. The 'P2P lending' explanation should be tested against documentation — which is absent."
  },
  {
    id: 357,
    category: "Scenario Based",
    question: "A tax professional discovers that his client's business returns show $2 million in annual income from 'investment returns' that cannot be documented with any brokerage statements. The client tells the accountant to 'just put it in as consulting.' What crime is the accountant being asked to facilitate?",
    options: [
      "Only tax evasion — accountants are not AML professionals",
      "Both tax fraud (submitting false tax returns) and potentially ML (creating false documentation that provides a legitimate-appearing origin for unexplained income), making the accountant a potential ML co-conspirator",
      "Civil tax code violations only, not criminal conduct",
      "This is a gray area — accountants can classify income based on client instructions"
    ],
    answer: 1,
    explanation: "Reclassifying undocumented income as 'consulting' on a tax return is tax fraud (26 U.S.C. § 7206). More critically, if the $2M represents proceeds of crime, creating a false paper trail designating it 'consulting income' facilitates money laundering by creating a seemingly legitimate explanation for illicit funds — this is a concealment ML offense under 18 U.S.C. § 1956(a)(1)(B). The accountant who knowingly complies becomes a co-conspirator. Professional accounting standards (AICPA) require withdrawal from the engagement when clients ask professionals to certify or prepare materially false documents. This is also why tax preparers file Form 8300 and have their own AML-adjacent obligations."
  },
  {
    id: 358,
    category: "Scenario Based",
    question: "An insurance company pays a $1.5 million life insurance claim on a policy taken out 14 months ago. The insured — who died in a single-car accident — had no prior life insurance and paid the premium with a large cash deposit. The beneficiary is an offshore company. What concerns arise?",
    options: [
      "None — life insurance death benefits are legitimate financial products and are exempt from ML scrutiny",
      "Multiple red flags: recent policy initiation with cash premium, suspicious death circumstances, and offshore company beneficiary — together suggesting potential insurance fraud and/or ML integration via insurance proceeds",
      "Only the offshore beneficiary is suspicious — the other factors are within normal insurance parameters",
      "The insurer should pay the claim and file a SAR — but the claim payment obligation is unconditional"
    ],
    answer: 1,
    explanation: "Life insurance policies can be ML vehicles. The specific red flags: (1) policy taken out only 14 months before death — newly purchased life insurance with suspicious death is a classic insurance fraud indicator; (2) cash premium payment — unusual for legitimate insurance planning; (3) offshore company beneficiary — designed to anonymize who receives the integration proceeds. Insurance companies have SAR filing obligations under the BSA (31 CFR Part 1025). Before paying the claim, the insurer should conduct a fraud and AML review. The payout, if made, creates integration proceeds that appear as legitimate death benefit disbursements. A SAR should be filed given the combination of red flags."
  },
  {
    id: 359,
    category: "Scenario Based",
    question: "A mortgage lender discovers that a loan applicant's down payment of $150,000 came from an anonymous wire from a country with high ML risk — not from the applicant's documented savings as stated in the application. What is this technique called, and what are the lender's obligations?",
    options: [
      "A gift fund — mortgage applicants commonly receive down payment assistance; the lender has no obligation beyond obtaining a gift letter",
      "Third-party down payment funding with concealed source — a mortgage fraud and ML red flag; the lender must verify the source of funds and file a SAR if the source is unknown or inconsistent with the application",
      "A legitimate international wire transfer that requires OFAC screening only",
      "The lender has no obligation since the wire already arrived and cleared"
    ],
    answer: 1,
    explanation: "Misrepresenting the source of a down payment is mortgage fraud. An anonymous wire from a high-ML-risk country — claimed as personal savings — is both a factual misrepresentation on the loan application (bank fraud) and a potential ML red flag (real estate placement). Mortgage lenders are subject to BSA requirements (31 CFR Part 1029) and must file SARs for suspicious mortgage loan activity. 'Source of funds' verification is a critical component of mortgage CDD. The lender must verify where the $150,000 actually originated and cannot close the loan on a foundation of misrepresented funds. A SAR is required for the misrepresentation."
  },
  {
    id: 360,
    category: "Scenario Based",
    question: "Law enforcement informs a bank that one of its business customers is operating an unlicensed money transmitter business — collecting funds from hundreds of individuals and sending them internationally for a fee. The bank has no prior knowledge. What must the bank do?",
    options: [
      "Wait for formal legal process before taking any action",
      "Review the customer's account immediately for SAR-worthy activity; operating an unlicensed MSB is a federal crime, and the bank may have been providing banking services to an illegal enterprise — a SAR and enhanced review are required",
      "Close the account immediately as a precautionary measure",
      "Cooperate informally with law enforcement without filing a SAR since the bank is a victim"
    ],
    answer: 1,
    explanation: "Receiving law enforcement notification that a customer is operating an unlicensed MSB is a material risk event that requires immediate action. Operating an unlicensed MSB is a federal crime (18 U.S.C. § 1960) and makes the account a vehicle for criminal proceeds. The bank must: (1) immediately review the account for suspicious patterns; (2) file a SAR documenting the unlicensed MSB activity and the law enforcement notification; and (3) make a risk-based decision about continuing the relationship. The bank being unaware does not eliminate its obligations once it gains knowledge. Account closure may be warranted but should follow compliance review, not precede it."
  },

  // --- GROUP 17: CUSTOMER BEHAVIOR RED FLAGS ---
  {
    id: 361,
    category: "Scenario Based",
    question: "A new business customer asks detailed questions during onboarding about exactly which transaction amounts trigger CTR filings, how long the bank keeps records, and whether SARs can be accessed by customers. How should the compliance officer interpret this?",
    options: [
      "The customer is diligently learning how to comply with banking regulations",
      "Excessive knowledge of or interest in reporting thresholds and confidential reporting mechanisms is a red flag — legitimate businesses do not typically need to understand AML reporting specifics to conduct normal banking",
      "The customer is a compliance professional and their curiosity is professional due diligence",
      "No concern — customers have the right to understand the banking system they use"
    ],
    answer: 1,
    explanation: "Excessive curiosity about reporting thresholds, record retention periods, and the confidentiality of SARs is a recognized AML red flag listed in the FFIEC BSA/AML Examination Manual. Legitimate businesses simply conduct their banking without needing to understand the mechanics of suspicious activity reporting. This customer is apparently trying to understand how to structure activity or avoid detection. The compliance officer should document this behavior and open a review. This behavioral indicator, combined with other factors (new customer, unusual transaction pattern), would support a SAR. The question about SAR accessibility also suggests the customer knows what SARs are — suggesting prior exposure to AML investigations."
  },
  {
    id: 362,
    category: "Scenario Based",
    question: "A customer insists on conducting all banking transactions in cash, refuses to use electronic transfers even when they would be more efficient, and declines account features that would provide electronic records of transactions. What does this behavior suggest?",
    options: [
      "A legitimate preference for cash — many customers prefer traditional banking methods",
      "Deliberate avoidance of the electronic record trail — customers who structure their activity to minimize documentation are a recognized AML red flag",
      "Possible technophobia, which is a social accommodation issue, not an AML concern",
      "No concern if the individual's cash usage is below CTR thresholds"
    ],
    answer: 1,
    explanation: "Deliberately avoiding electronic transactions to prevent audit trails is a recognized red flag in the FFIEC examination manual and FinCEN guidance. While some customers genuinely prefer cash, the specific pattern of declining services that create records — electronic transfers, account statements, online banking — combined with insisting on cash suggests intentional record avoidance. This is especially significant when the customer has no credible explanation for the preference. The institution should document the behavior and factor it into the customer's risk rating. Combined with any unusual transaction activity, it would support a SAR."
  },
  {
    id: 363,
    category: "Scenario Based",
    question: "A customer who has maintained a stable $5,000 average balance for three years suddenly receives a $450,000 wire from an overseas source, keeps the funds for 11 days, then wires the entire amount to a third party. He claims it is a 'business deal' but provides no documentation. What does this suggest?",
    options: [
      "A legitimate business transaction — customers engage in sporadic large transactions",
      "Classic money mule activity — the customer's account is being used to briefly hold and forward funds, with the 11-day period providing an appearance of normal account usage before the funds move on",
      "Normal activity for an individual experiencing a one-time inheritance or windfall",
      "The customer should be asked to explain the transaction only if it recurs"
    ],
    answer: 1,
    explanation: "The pattern — dormant account suddenly receiving a large overseas wire, brief holding period, then full forwarding — is a textbook money mule indicator. The 11-day hold is designed to create a brief transactional history so the ultimate wire does not appear to be a same-day pass-through. The customer's inability or unwillingness to document the 'business deal' eliminates the innocent explanation. This is particularly concerning because the customer's established account history (small balance, regular pattern) was 'clean' — making the account attractive as a mule. A SAR is required, and the bank should consider whether this customer has been recruited as a money mule (potentially also a victim of fraud)."
  },
  {
    id: 364,
    category: "Scenario Based",
    question: "A customer frequently visits different branches of the same bank to conduct transactions, sometimes traveling significant distances to avoid using their home branch. Why is this behavior suspicious?",
    options: [
      "It is not suspicious — customers use different branches for convenience",
      "Branch-hopping suggests the customer is deliberately spreading transactions across locations to prevent any single teller from seeing the full pattern — a structuring and detection-avoidance indicator",
      "It may indicate the customer has poor relationships with local branch staff",
      "Only suspicious if the amounts involved exceed reporting thresholds at each branch"
    ],
    answer: 1,
    explanation: "Deliberately using different branches — especially when a closer branch is available — is a recognized AML red flag. This technique is used to spread transactions across tellers who do not have visibility into the customer's full pattern, making structuring harder to detect at the point of service. BSA/AML systems that aggregate transactions across branches are designed to counteract this. When combined with other indicators (below-threshold amounts, cash activity inconsistent with the account type), branch-hopping is a significant behavioral red flag. The FFIEC BSA/AML Examination Manual specifically lists 'customer travels unusual distances to conduct transactions' as a suspicious behavior indicator."
  },
  {
    id: 365,
    category: "Scenario Based",
    question: "A customer has had accounts at five different banks over three years, all closed for 'compliance reasons.' He is now opening a sixth account and has not disclosed the prior closures. What should the new bank's onboarding process reveal, and what does the undisclosed closure history suggest?",
    options: [
      "Nothing — prior account closures are private information that customers are not required to disclose",
      "The undisclosed history of compliance-related closures is a significant red flag — customers who have been exited by multiple institutions for compliance reasons are high-risk; the new bank should verify the history and apply EDD",
      "Only a concern if the closures were for SAR-related reasons",
      "The bank should simply ask the customer to explain and accept the explanation"
    ],
    answer: 1,
    explanation: "Multiple prior compliance-related account closures are a major red flag. Customers do not typically accumulate this history through legitimate behavior. The failure to disclose is itself concerning — a customer who omits material information during onboarding has demonstrated a willingness to deceive. Banks can discover closure history through: reference calls under 314(b), information shared by prior banks, and credit bureau or specialized database checks. EDD at minimum, and potentially declining the application, is appropriate. This is precisely the scenario that Section 314(b) voluntary sharing between institutions is designed to address."
  },
  {
    id: 366,
    category: "Scenario Based",
    question: "A business customer deposits identical amounts of cash — $7,400 — every Tuesday for 24 consecutive weeks with no variation. The business claims it is weekly revenue from a farmers market stall. What additional investigation is MOST important?",
    options: [
      "No investigation needed — farmers markets are cash businesses",
      "Verify the farmers market stall's existence, operating history, and whether $7,400 weekly in cash is consistent with stall revenues for that type of vendor; the unwavering consistency is itself unusual for a cash business",
      "File a CTR because the pattern likely represents structured cash",
      "Ask the customer to provide one month's sales receipts and close the matter"
    ],
    answer: 1,
    explanation: "While $7,400 per week from a farmers market is plausible, the absolute consistency — not $6,900 one week and $8,100 the next, but precisely $7,400 for 24 straight weeks — is unusual for any genuine retail operation where sales fluctuate with weather, seasons, and foot traffic. Real cash businesses produce irregular revenue. The consistency is a red flag for: (1) structured deposits from another source, with $7,400 chosen to stay below $10,000; or (2) amounts that have been pre-determined by a laundering operation. The bank should verify the market stall's existence, vendor registration, and obtain sales documentation. Implausibly consistent amounts are a recognized BSA examination finding indicator."
  },
  {
    id: 367,
    category: "Scenario Based",
    question: "A customer opens three corporate accounts in one week for three different LLCs, each with the customer listed as sole officer and owner. Each LLC has a different stated business purpose but the same registered address (a residential home). Within days, all three accounts receive large wire transfers and immediately forward them to the same overseas account. What does this indicate?",
    options: [
      "A legitimate multi-entity business structure commonly used by small business owners",
      "A shell company network designed to add corporate legitimacy to fund flows — three newly formed LLCs with the same address, simultaneous onboarding, and immediate parallel wire activity to one destination is a classic ML layering setup",
      "No concern if each LLC's activities remain separate",
      "A potential BSA concern only if the total wires exceed $10,000"
    ],
    answer: 1,
    explanation: "Multiple simultaneous LLC account openings by the same individual, with the same residential address, different stated purposes (but no genuine distinguishable business), and immediate parallel wire activity to the same offshore account — is a classic shell company layering network. The LLCs are not operating businesses; they are corporate wrappers designed to make what is essentially one transaction appear to be multiple legitimate business payments. Each account passes through one layer of corporate complexity. The bank should: decline or apply extreme EDD at onboarding; file a SAR given the pattern; and cross-reference all three accounts in transaction monitoring."
  },
  {
    id: 368,
    category: "Scenario Based",
    question: "A long-standing customer who is a retired teacher with a $45,000 annual pension begins receiving $30,000 monthly wires from an overseas source and wiring the same amount to 10 different individuals weekly. The customer says she is 'helping friends internationally.' What concern does this raise?",
    options: [
      "No concern — retirees frequently have international family financial obligations",
      "The customer appears to have been recruited as a money mule — her legitimate account is being used to receive and forward illicit funds, and she may herself be a victim of a scam that recruited her with false promises",
      "A tax concern only — the wires may represent unreported foreign income",
      "No concern if the customer can provide names for the 10 individuals receiving funds"
    ],
    answer: 1,
    explanation: "Elderly or retired individuals with modest, stable income who suddenly receive large overseas wires and immediately forward to multiple parties are frequently unwitting money mules — recruited through romance scams, job offer frauds, or other schemes. The pattern here: pension income only for years, sudden $30,000 monthly inflows and immediate multi-distribution, 'helping friends' explanation — is a textbook mule profile. The bank should: conduct a careful CDD conversation (without tipping off any criminal coordinator); assess whether the customer understands what she is doing; file a SAR; and consider whether she needs to be protected as a victim of elder financial exploitation."
  },
  {
    id: 369,
    category: "Scenario Based",
    question: "A customer who is a day trader frequently deposits large checks from brokerage accounts, holds the funds for less than 24 hours, then wires offshore. When asked about investment strategies, the customer provides vague answers and no brokerage statements. What is the MOST significant concern?",
    options: [
      "Traders frequently move funds rapidly — this is normal day trading behavior",
      "The lack of supporting documentation combined with the rapid in-and-out pattern may indicate the 'brokerage checks' are not from legitimate trading accounts but are being used to introduce funds with an appearance of legitimacy before offshore transfer",
      "Day traders are sophisticated investors and their explanations should be accepted at face value",
      "The concern is limited to whether the brokerage accounts are at registered U.S. broker-dealers"
    ],
    answer: 1,
    explanation: "A pattern of large check deposits followed by immediate offshore wiring, with no supporting documentation and vague explanations, is suspicious regardless of the claimed source. Legitimate day traders have detailed, verifiable brokerage records. The inability or unwillingness to provide statements is a major red flag. The 'brokerage check' narrative may be cover for other fund sources — check fraud, investment fund misappropriation, or laundered proceeds from another source. The bank should request brokerage statements, verify the brokerage accounts, and file a SAR if documentation is unavailable. The sub-24-hour hold before offshore transfer is designed to create just enough transactional history to appear legitimate."
  },
  {
    id: 370,
    category: "Scenario Based",
    question: "A bank notices that a customer's social media shows a lavish lifestyle — luxury cars, international travel, designer goods — but the customer's declared income is $35,000 annually and their account shows no large income sources. The bank's compliance team learns of this through open-source research. Can this information be used in AML risk assessment?",
    options: [
      "No — social media monitoring violates customer privacy and cannot inform AML decisions",
      "Yes — open-source information including social media is a legitimate and recommended tool in AML due diligence, particularly for identifying unexplained wealth inconsistent with declared income",
      "Only if the customer has consented to social media monitoring in the account agreement",
      "No — only information from verified third-party data providers can be used in AML assessments"
    ],
    answer: 1,
    explanation: "Open-source intelligence (OSINT) — including social media, news sources, court records, and public databases — is a well-established component of AML due diligence. FATF, FinCEN, and the Wolfsberg Principles all recognize that public information can reveal risk factors that formal documentation does not. A customer displaying a lifestyle grossly inconsistent with declared income is a significant unexplained wealth indicator. This information can lawfully inform a risk rating upgrade, EDD trigger, or SAR consideration. Privacy concerns apply to non-public account information; publicly available social media does not carry the same protection. Documenting the OSINT source and methodology is important for the compliance file."
  },

  // --- GROUP 18: DIGITAL BANKING & FINTECH AML ---
  {
    id: 371,
    category: "Scenario Based",
    question: "A neobank (digital-only bank) conducts all customer onboarding through a mobile app with selfie verification and automated document scanning. Its CIP relies solely on these tools with no manual review. A regulator conducts an examination. What is the PRIMARY concern?",
    options: [
      "No concern — automated CIP is state-of-the-art and superior to manual review",
      "The neobank must ensure its automated CIP meets BSA/AML requirements, including validation that the technology reliably verifies identity; automated tools that have not been validated for accuracy create a compliance gap",
      "Digital onboarding is inherently compliant since it creates better records than in-person review",
      "The concern is only whether the app is cybersecure, not AML-specific"
    ],
    answer: 1,
    explanation: "Digital/automated CIP is permissible under BSA rules, but the institution must validate that its technology reliably achieves the same identity verification standards as traditional methods. FinCEN's CIP rules require institutions to verify identity through a risk-based approach — digital tools must be tested, validated, and periodically reviewed for accuracy rates, deepfake detection, and document forgery recognition. An unvalidated selfie + document scan system may have high error rates or be vulnerable to spoofing. Regulators expect documentation of the technology's validation, false positive/negative rates, and periodic testing. 'Automated' does not mean 'compliant' without validation."
  },
  {
    id: 372,
    category: "Scenario Based",
    question: "A peer-to-peer payment app notices that one user account receives $1,000 from 50 different users daily, then the accumulated amount is immediately sent to a single external bank account. The P2P app has an AML program. Must it file a SAR?",
    options: [
      "No — P2P apps are not financial institutions and have no SAR filing obligations",
      "Yes — if the P2P app operates as a money transmitter, it is an MSB under the BSA with SAR filing obligations; the aggregation and forwarding pattern is a suspicious funnel account indicator",
      "Only if the total daily amount exceeds $10,000",
      "No — SAR obligations only apply when the app charges fees for transactions"
    ],
    answer: 1,
    explanation: "P2P payment apps that facilitate money transmission are MSBs under the BSA and have the same AML obligations as traditional money transmitters — including CIP, transaction monitoring, and SAR filing. FinCEN's 2019 guidance and ongoing enforcement actions have made clear that the digital format does not change BSA applicability. The pattern — 50 inflows aggregated and immediately forwarded to one external account — is a funnel account pattern consistent with ML or fraud. A SAR must be filed. Several P2P platforms have faced enforcement actions for AML program failures. Operating as a 'technology company' rather than a 'financial institution' is not a valid exemption from BSA obligations."
  },
  {
    id: 373,
    category: "Scenario Based",
    question: "A buy-now-pay-later (BNPL) company offers unsecured consumer credit with no credit check and same-day approval for purchases up to $2,000. A criminal uses 20 different BNPL accounts with stolen identities to purchase electronics, which are then resold for cash. What AML risk category is this?",
    options: [
      "Identity theft only — BNPL companies have no AML obligations",
      "Fraud-enabled ML — the BNPL product's low identity verification creates a vector for converting fraudulent credit into cash through goods resale; BNPL companies that are financial institutions have AML obligations",
      "A consumer protection issue, not an AML matter",
      "Only relevant if the BNPL company's total fraud losses exceed $10,000"
    ],
    answer: 1,
    explanation: "BNPL products are an evolving AML risk area. The specific risk here: criminals use stolen identities to obtain goods on BNPL credit, resell goods for cash (placement), and the BNPL company ultimately bears the fraud loss. Depending on its structure, a BNPL company may be a credit provider (regulated under consumer lending laws) or a money service/transmitter (regulated under the BSA). FinCEN has been examining the AML obligations of BNPL and embedded finance companies. The pattern — multiple accounts, minimal KYC, immediate goods resale — is a recognized fraud-to-ML pathway. BNPL firms should implement velocity monitoring, device fingerprinting, and fraud-AML crossover controls."
  },
  {
    id: 374,
    category: "Scenario Based",
    question: "An AI-powered transaction monitoring system at a bank is generating 60% fewer alerts than the previous rule-based system after being deployed six months ago. Management is pleased with the reduced workload. What should the compliance team do?",
    options: [
      "Continue with the AI system — fewer alerts mean fewer false positives and higher efficiency",
      "Conduct a validation review of the AI model to confirm it is detecting true suspicious activity at the same or better rate — a dramatic alert reduction could indicate the model is missing genuine suspicious activity, not just eliminating false positives",
      "File a report with the OCC disclosing the alert reduction",
      "No action needed — AI models are inherently more accurate than rule-based systems"
    ],
    answer: 1,
    explanation: "A 60% reduction in alerts from an AI system should prompt validation, not celebration. The reduction could reflect: (1) genuine elimination of false positives (good); or (2) the model failing to detect suspicious activity that the rule-based system caught (very bad). Without validation, the institution cannot distinguish between these explanations. Model Risk Management (SR 11-7) and FinCEN's expectations require institutions to validate AI/ML models used for AML monitoring — particularly after deployment and periodically thereafter. Management's relief at reduced workload is a warning sign: compliance efficiency should never be achieved by reducing detection sensitivity without validating that detection quality is maintained."
  },
  {
    id: 375,
    category: "Scenario Based",
    question: "A fintech company partners with a bank to offer its customers deposit accounts — a 'banking as a service' (BaaS) arrangement. The fintech conducts customer onboarding, and the bank holds the deposits. A regulator examines the bank and finds the fintech's KYC procedures are inadequate. Who bears regulatory responsibility?",
    options: [
      "The fintech — it is responsible for all customer-facing processes",
      "The bank — it remains the regulated entity and bears full BSA responsibility for all customers in its name, including those onboarded by the fintech partner; inadequate fintech KYC is the bank's compliance failure",
      "Shared equally between the bank and fintech",
      "Neither — BaaS arrangements transfer regulatory responsibility to the technology provider"
    ],
    answer: 1,
    explanation: "In a BaaS arrangement, the bank is the regulated depository institution and holds the BSA liability regardless of which entity conducts customer-facing processes. Several significant enforcement actions have resulted from banks failing to adequately oversee their fintech BaaS partners' AML programs. The bank cannot delegate its BSA obligations — it can only outsource the execution while retaining full accountability. FinCEN, OCC, and Federal Reserve guidance all confirm that a bank must maintain effective oversight of any third party acting on its behalf and must ensure the partner's AML procedures meet the bank's own BSA standards. Inadequate fintech KYC = the bank's BSA failure."
  },
  {
    id: 376,
    category: "Scenario Based",
    question: "A digital bank's automated transaction monitoring system sends 500 alerts daily to a three-person compliance team. The team cannot meaningfully review all alerts within the required timeframe. What is the CORRECT response from compliance leadership?",
    options: [
      "Prioritize the highest-dollar alerts and close the rest to maintain throughput",
      "Escalate to senior management and the board — the bank's monitoring capacity is insufficient to fulfill its BSA obligations; this requires additional resources, improved model calibration, or both",
      "Extend the SAR filing timeframe by using the 60-day rule for all alerts regardless of whether suspects are identified",
      "Outsource all remaining alerts to a third-party review firm immediately"
    ],
    answer: 1,
    explanation: "When alert volume exceeds the team's capacity for meaningful review, the institution's AML program is functionally non-compliant. The compliance officer has a duty to escalate this to senior management and the board — not to manage the symptom by closing alerts summarily. The proper response is to: immediately assess whether SARs are being missed; remediate immediately (additional staff, model tuning, or both); document the capacity issue and remediation plan; and notify regulators if material filing failures are identified. Closing alerts without review is not a solution — it is a compliance failure. The 60-day SAR rule applies to identifying suspects, not to managing alert backlogs."
  },
  {
    id: 377,
    category: "Scenario Based",
    question: "A mobile banking app allows customers to deposit checks by photo. A fraudster deposits the same check at five different banks using photos, attempting to cash it at each before the check clears and fraud is detected. What is the AML relevance of this fraud?",
    options: [
      "No AML relevance — check fraud is purely a fraud risk managed by retail banking, not AML",
      "Mobile deposit fraud enables placement of fraudulent proceeds into the banking system; the proceeds, once converted to good funds, can be laundered, and the fraud-ML nexus requires banks to monitor for patterns across mobile deposit activity",
      "AML is only concerned with the subsequent layering and integration of the proceeds, not the fraud itself",
      "The AML concern is limited to whether the fraudster is on the OFAC SDN list"
    ],
    answer: 1,
    explanation: "The fraud-ML nexus is a critical AML concept: check fraud creates proceeds that criminals then seek to launder. Mobile check deposit fraud enables rapid, geographically distributed placement across multiple institutions simultaneously. FinCEN advisories on check fraud highlight the AML dimensions. Each institution receiving a fraudulent deposit has potential SAR obligations if they detect the suspicious pattern. The 'mobile check fraud' pattern — same check deposited at multiple institutions — is detected through check clearing networks, and the pattern itself is a suspicious activity indicator. AML programs must include fraud-ML linkages in their monitoring logic."
  },
  {
    id: 378,
    category: "Scenario Based",
    question: "An open banking API allows third-party fintechs to access a customer's bank account and initiate payments. A fraudulent fintech uses the API to initiate hundreds of small unauthorized payments from customer accounts to a money mule network. What AML obligation does the bank have?",
    options: [
      "No AML obligation — the bank is a victim of fraud through its API",
      "The bank must investigate the pattern of unauthorized payments as potential suspicious activity, file a SAR for the systematic ML through its platform, and assess whether its API security controls are adequate to fulfill BSA obligations",
      "Only a cybersecurity obligation — AML does not apply to API-enabled fraud",
      "The fintech bears all AML responsibility since it initiated the transactions"
    ],
    answer: 1,
    explanation: "Open banking creates new AML vectors. The bank remains the financial institution of record and cannot transfer its BSA obligations to an API partner — particularly a fraudulent one. Systematic unauthorized payments through the bank's infrastructure constitute suspicious activity that the bank must detect, report, and address. Even as a victim, the bank has AML obligations: SARs must be filed for the suspicious transaction patterns; the bank must assess whether its monitoring systems detected the pattern; and API access controls are an AML/BSA control, not just a cybersecurity measure. FinCEN expects institutions to extend their AML monitoring to cover new payment channels, including API-initiated transactions."
  },
  {
    id: 379,
    category: "Scenario Based",
    question: "A crypto exchange receives a FinCEN subpoena for all transaction records on a specific wallet address. The exchange maintains records but argues its customers have a privacy right that prevents disclosure. Is the exchange correct?",
    options: [
      "Yes — cryptocurrency users have a constitutional expectation of privacy in blockchain transactions",
      "No — financial institutions, including registered crypto exchanges/MSBs, must comply with lawful legal process; customer privacy interests yield to valid subpoenas, and exchanges have no right to assert customers' privacy rights against valid legal process",
      "Yes — the Fourth Amendment protects all digital financial records",
      "Partially — the exchange can disclose aggregate data but not individual transaction records"
    ],
    answer: 1,
    explanation: "The Supreme Court's third-party doctrine (United States v. Miller, 1976) holds that individuals have no Fourth Amendment expectation of privacy in records voluntarily shared with third parties — including banks and financial institutions. The same principle applies to crypto exchange records shared with the exchange as part of the customer relationship. A registered MSB/crypto exchange must comply with valid legal process (subpoenas, court orders, NSLs). The exchange cannot assert a customer's privacy rights on their behalf against valid legal process. This principle has been repeatedly applied in cryptocurrency cases. Exchanges with BSA registration have both the obligation to maintain records and to produce them when lawfully requested."
  },
  {
    id: 380,
    category: "Scenario Based",
    question: "A decentralized finance (DeFi) protocol automatically executes financial transactions through smart contracts with no human intermediary and no company behind it. A user routes $5 million through the protocol to obscure transaction history. Who has AML liability in this scenario?",
    options: [
      "No one — fully decentralized protocols are outside the scope of any AML framework",
      "This is a rapidly evolving area; FinCEN's 2019 guidance and FATF's 2021 DeFi guidance suggest that developers, governance token holders, or others who maintain a degree of control over the protocol may be subject to AML obligations; true 'decentralization' remains legally untested",
      "The user who initiated the transaction bears all AML liability",
      "The blockchain network itself is the regulated entity"
    ],
    answer: 1,
    explanation: "DeFi AML liability is genuinely unsettled but rapidly evolving. FinCEN's 2019 guidance on virtual currency and FATF's 2021 Updated Guidance take the position that if a person or entity has meaningful control or profit interest in a DeFi protocol — even if technically 'decentralized' — they may qualify as a VASP with AML obligations. The SEC has applied similar logic in securities enforcement. The claim of 'pure decentralization' is often exaggerated — most DeFi protocols have admin keys, governance structures, or developer foundations with meaningful control. This area will be definitively addressed by future regulation and case law. CAMS candidates should understand that 'decentralized' does not automatically mean 'unregulated.'"
  },

  // --- GROUP 19: ASSET RECOVERY & LAW ENFORCEMENT ---
  {
    id: 381,
    category: "Scenario Based",
    question: "Law enforcement seizes $800,000 from a bank account under a civil asset forfeiture order. The account owner was not charged with a crime. Can the owner challenge the forfeiture?",
    options: [
      "No — civil forfeiture does not require a criminal conviction and cannot be appealed",
      "Yes — the owner can contest civil forfeiture through the court process; civil forfeiture is a proceeding against the property, not the owner, but due process protections allow innocent owners to challenge seizures",
      "No — once funds are seized by law enforcement, they cannot be recovered without a congressional waiver",
      "Yes — but only if the owner can prove they were never investigated for any crime"
    ],
    answer: 1,
    explanation: "Civil asset forfeiture (in rem proceeding) does not require a criminal conviction — the government claims the property itself is the instrumentality or proceeds of crime. However, due process requires that property owners be given notice and an opportunity to contest the forfeiture. The innocent owner defense allows a claimant to demonstrate they did not know about, or did not consent to, the criminal use of their property. Reform legislation (like the Civil Asset Forfeiture Reform Act) and numerous court decisions have strengthened these protections. This area is directly relevant to AML professionals who work with law enforcement partners on asset recovery cases."
  },
  {
    id: 382,
    category: "Scenario Based",
    question: "A defendant convicted of wire fraud and ML is ordered to forfeit $5 million as proceeds of crime. The defendant has only $2 million in identifiable assets. Can the government recover the remaining $3 million?",
    options: [
      "No — forfeiture is limited to traceable proceeds; if the assets are gone, the government has no further claim",
      "Yes — the government can obtain a money judgment for the full $5 million forfeiture amount and pursue it against any of the defendant's substitute assets, including future assets",
      "No — criminal forfeiture requires specific identification of tainted assets",
      "Yes — but only from assets the defendant acquires within 10 years of conviction"
    ],
    answer: 1,
    explanation: "Criminal forfeiture provisions include substitute asset provisions (21 U.S.C. § 853(p)) that allow the government to pursue untainted assets of equivalent value when proceeds have been spent, hidden, or transferred. The government obtains a personal money judgment against the defendant for the full forfeiture amount. This judgment can be enforced against any assets the defendant currently or subsequently owns — effectively creating a debt to the government. This prevents defendants from spending down proceeds before conviction. AML investigations should document asset dissipation to support substitute asset claims. No 10-year limitation applies to the substitute asset provision itself."
  },
  {
    id: 383,
    category: "Scenario Based",
    question: "A bank receives a court-issued restraining order to freeze all assets in a customer's account pending a criminal ML investigation. The customer calls and demands the bank release funds for 'living expenses.' What should the bank do?",
    options: [
      "Release a reasonable amount for living expenses — humanitarian considerations allow partial release",
      "Maintain the full freeze per the court order — the bank has no authority to modify a court order unilaterally; the customer must seek relief from the court itself",
      "Release up to $1,000 per week for basic living expenses as a matter of banking policy",
      "Contact law enforcement for permission before releasing any funds"
    ],
    answer: 1,
    explanation: "A court-issued restraining order is a binding legal instrument. The bank has no authority to deviate from it regardless of the customer's personal circumstances or arguments. Releasing funds in violation of a court order would expose the bank to contempt of court. If the customer needs funds for living expenses, the proper legal process is for their attorney to petition the issuing court for a carve-out — not to pressure the bank. The bank should document the customer's request and maintain strict compliance with the order. The bank should also inform the court or law enforcement of the contact from the customer if appropriate."
  },
  {
    id: 384,
    category: "Scenario Based",
    question: "AML investigators trace $3 million in laundered funds through six countries before the trail ends at an account in a country with no MLAT with the U.S. and strict bank secrecy laws. What options remain for U.S. law enforcement?",
    options: [
      "The investigation ends — no further recovery is possible without an MLAT",
      "Options include: diplomatic pressure, informal police-to-police cooperation through Interpol or bilateral law enforcement relationships, U.S. sanctions against the institution, Section 319 PATRIOT Act subpoena of U.S. correspondent accounts, and working through the Egmont Group FIU-to-FIU channel",
      "The U.S. can directly subpoena the foreign bank using FinCEN authority",
      "No further action is available without congressional authorization for each specific country"
    ],
    answer: 1,
    explanation: "While MLATs are the primary formal mechanism for obtaining foreign evidence, U.S. law enforcement has multiple tools when no MLAT exists: (1) Section 319 of the PATRIOT Act allows subpoenas of correspondent accounts in U.S. banks used by the foreign bank, compelling the U.S. bank to produce records; (2) Egmont Group facilitates FIU-to-FIU intelligence (not evidence) sharing; (3) Interpol enables informal police cooperation; (4) diplomatic channels may produce cooperation even without formal treaties; and (5) OFAC sanctions can be applied as leverage. The absence of an MLAT significantly complicates — but does not end — the investigation. This is why FATF membership and MLAT networks are critical AML infrastructure."
  },
  {
    id: 385,
    category: "Scenario Based",
    question: "A financial intelligence analyst identifies a pattern suggesting $50 million was laundered through a real estate investment trust (REIT) over five years. The REIT's records are needed for prosecution. The statute of limitations for the underlying predicate offense is 5 years. Is prosecution still possible?",
    options: [
      "No — if the 5-year statute of limitations for the predicate offense has passed, no prosecution is possible",
      "Possibly — money laundering has its own statute of limitations (10 years under 18 U.S.C. § 1956(g)); if the ML acts occurred within 10 years, prosecution may still proceed even if the predicate offense is time-barred",
      "No — ML prosecution requires the predicate offense to be within the statute of limitations",
      "Yes — financial crime prosecutions have no statute of limitations"
    ],
    answer: 1,
    explanation: "Money laundering under 18 U.S.C. § 1956 has a 10-year statute of limitations (18 U.S.C. § 1956(g)) — significantly longer than most predicate offenses (typically 5 years). Critically, the predicate offense need not be separately charged within its own limitations period for ML prosecution to proceed — prosecutors need only prove the funds were proceeds of specified unlawful activity, not obtain a separate predicate conviction. This is a major investigative advantage: a fraud that concluded 6 years ago can still support a ML prosecution if laundering acts occurred within the past 10 years. Financial investigators must track when each laundering transaction occurred, not just when the predicate crime ended."
  },
  {
    id: 386,
    category: "Scenario Based",
    question: "During an AML investigation, an analyst discovers that a criminal transferred ML proceeds to a relative who purchased a home with the funds, genuinely unaware of their origin. Can the home be forfeited?",
    options: [
      "Yes — ML proceeds are always subject to forfeiture regardless of who holds them",
      "The relative may assert an 'innocent owner' defense; if they can prove they received the property in good faith without knowledge of the ML, they may be protected from forfeiture — though the burden of proof varies by jurisdiction",
      "No — property transferred to innocent third parties is immune from forfeiture",
      "Yes — but only if the transfer was made within one year of the criminal activity"
    ],
    answer: 1,
    explanation: "U.S. forfeiture law (18 U.S.C. § 983(d)) provides an innocent owner defense for third parties who acquired property without knowledge of its criminal taint. A relative who genuinely did not know the funds were ML proceeds may successfully assert this defense. However, the claimant must demonstrate: (1) they were a bona fide purchaser for value OR (2) they were an innocent owner without knowledge. The burden is on the claimant. If the transfer was a 'gift' (no value paid), the innocent owner defense is more difficult. AML investigators should document all third-party transfers to assess whether innocent owner defenses are likely to succeed in forfeiture proceedings."
  },
  {
    id: 387,
    category: "Scenario Based",
    question: "An AML investigator's file reveals that a suspect maintained accounts at 12 different banks. Only 3 of the 12 banks filed SARs on the activity. What does this suggest about the AML programs at the 9 banks that did not file?",
    options: [
      "The 9 banks made legitimate professional judgments that the activity was not suspicious",
      "The 9 banks may have had compliance failures — when a pattern is suspicious enough for 3 institutions to independently file SARs, the absence of filings from 9 other banks with the same customer suggests potential monitoring or investigation gaps",
      "No inference can be drawn — SAR filing decisions are institution-specific and cannot be compared",
      "The 3 filing banks may have been over-reporting rather than the 9 being under-reporters"
    ],
    answer: 1,
    explanation: "When 3 out of 12 banks independently identify suspicious activity from the same customer, it creates a strong inference that the activity was detectable. The 9 non-filing banks warrant scrutiny: Did their transaction monitoring systems detect alerts? Were alerts closed without adequate review? Did CDD fail to identify the risk level? Regulators have used exactly this analysis — comparing filing rates across institutions serving the same suspect — to assess program effectiveness. This scenario is used in CAMS education to illustrate the importance of robust monitoring and the real investigative cost of missed SARs. Every undetected suspicious transaction helps a criminal maintain access to the financial system."
  },
  {
    id: 388,
    category: "Scenario Based",
    question: "A bank receives a voluntary disclosure from a customer stating that their account has been used without their knowledge by a third party for suspicious transactions. The customer requests the bank investigate and clear their name. What is the bank's FIRST priority?",
    options: [
      "Accept the customer's account of events and close the investigation",
      "Conduct an independent review of the account activity — the customer's voluntary disclosure is a positive indicator but does not substitute for the bank's own investigation; the account must be assessed for SAR obligations regardless of the customer's explanation",
      "File a SAR immediately naming the customer as the subject",
      "Contact law enforcement before reviewing the account"
    ],
    answer: 1,
    explanation: "A customer's voluntary disclosure is valuable information but not determinative. The bank must independently review the account activity, assess whether it meets SAR filing criteria, and make its own determination. Scenarios where customers 'helpfully' disclose are not always genuine — some involve reverse social engineering where a criminal explains away suspicious activity proactively. The bank must: review all transactions; assess whether third-party access is supported by the evidence; consult with cyber/fraud teams if unauthorized access is claimed; and file a SAR if the activity is suspicious regardless of the customer's explanation. The customer's narrative is one data point — not a conclusion."
  },
  {
    id: 389,
    category: "Scenario Based",
    question: "A country's financial intelligence unit publishes a typology report identifying a new ML method used to launder proceeds from cybercrime through online gaming platforms. A bank's AML team reads the report. What action is MOST appropriate?",
    options: [
      "File the report for reference — typology reports are educational only and do not require action",
      "Assess whether the bank has customers who could be exposed to this typology and update transaction monitoring scenarios, customer risk ratings, and staff training accordingly",
      "Immediately file SARs on all customers who use online gaming platforms",
      "Report the typology to FinCEN for inclusion in the next national ML risk assessment"
    ],
    answer: 1,
    explanation: "Typology reports from FIUs, FATF, FinCEN, and other bodies are actionable intelligence, not passive reference material. An effective AML program incorporates new typologies by: (1) assessing whether current monitoring scenarios would detect the described activity; (2) reviewing the customer base for exposure to the typology; (3) updating or adding transaction monitoring rules/scenarios; (4) incorporating the typology into staff training; and (5) considering whether any existing customers show patterns consistent with the typology. Using FinCEN advisories and FIU typology reports to update monitoring is a core BSA program expectation and is explicitly addressed in examination guidance."
  },
  {
    id: 390,
    category: "Scenario Based",
    question: "A bank's AML team is preparing testimony for a congressional hearing on financial crime. A senator asks: 'How many criminals did your SARs actually result in arrests?' How should the compliance officer respond?",
    options: [
      "Provide specific arrest numbers — the bank tracks SAR outcomes as a program KPI",
      "Explain that SAR outcome data is not available to financial institutions due to the confidential law enforcement use of SARs; the bank measures program effectiveness through internal quality metrics, not downstream enforcement outcomes",
      "Refuse to testify on the grounds that SAR information is confidential",
      "Provide an estimate based on news reports of arrests in the bank's geographic market"
    ],
    answer: 1,
    explanation: "SAR confidentiality means financial institutions do not receive feedback on how their SARs are used by law enforcement. Institutions cannot lawfully know which SARs led to arrests, convictions, or investigations. This is by design — SAR feedback to filers could compromise investigations and create tipping-off risks. Program effectiveness is measured through internal metrics: SAR quality scores, alert-to-SAR conversion rates, independent audit findings, and examiner feedback. The compliance officer should explain this limitation clearly to the senator, who may not understand that the one-way confidentiality design prevents institutions from tracking downstream outcomes. This is a genuine limitation of the SAR system."
  },

  // --- GROUP 20: ADVANCED JUDGMENT CALLS ---
  {
    id: 391,
    category: "Scenario Based",
    question: "A bank's compliance officer simultaneously receives: (1) an OFAC SDN designation on a current customer; (2) a FinCEN 314(a) request on the same customer; and (3) a grand jury subpoena for all records on the customer. In what ORDER should these be prioritized?",
    options: [
      "314(a) first, then OFAC, then the subpoena — chronological order of receipt",
      "OFAC action first (block accounts immediately), then comply with the subpoena, then respond to 314(a) — sanctions blocking is the most time-critical legal obligation",
      "Grand jury subpoena first — court orders supersede all other obligations",
      "All three simultaneously — each has equal priority under the BSA"
    ],
    answer: 1,
    explanation: "OFAC blocking is immediate upon designation — there is no grace period. The moment an SDN designation is received, all transactions must be blocked. This is the highest time-urgency obligation: allowing a transaction to process after a designation creates sanctions liability. After blocking, the grand jury subpoena requires compliance within its specified timeframe — court process must be respected. The 314(a) response is due within 14 days of receipt — it can proceed concurrently. A SAR should also be filed given the triple law enforcement interest. The sequencing reflects legal urgency: OFAC (immediate), court order (within deadline), 314(a) (14 days)."
  },
  {
    id: 392,
    category: "Scenario Based",
    question: "A bank's largest corporate customer — representing 15% of total deposits — threatens to move its business if the bank requires EDD documentation for a new large international transaction. Senior management pressures the compliance officer to 'find a way to make this work.' What is the correct response?",
    options: [
      "Accommodate the customer — a 15% deposit concentration creates systemic risk that outweighs EDD requirements",
      "Maintain EDD requirements — no customer concentration justifies circumventing BSA obligations; the compliance officer should document the pressure from management and escalate to the board if necessary",
      "Apply reduced EDD as a compromise — request some documentation but waive the most burdensome requirements",
      "Approve the transaction and file a SAR disclosing the management pressure"
    ],
    answer: 1,
    explanation: "Customer concentration — regardless of how large — never justifies waiving BSA/AML requirements. This is precisely the scenario where compliance officers must demonstrate independence from business pressure. The compliance officer must: (1) maintain the EDD requirement; (2) document management's pressure in writing; (3) escalate to the board or audit committee if management continues to pressure; and (4) consider whether the pressure itself should be disclosed to regulators. 'Too big to refuse EDD' is not a defensible position — regulators have specifically penalized institutions for exactly this failure. The documentation of management pressure protects the compliance officer personally."
  },
  {
    id: 393,
    category: "Scenario Based",
    question: "Two countries where your bank operates have conflicting AML laws: Country A requires sharing all suspicious transaction data with its FIU, while Country B's privacy laws prohibit sharing this information cross-border. Your global AML policy requires consolidated reporting. How should you approach this conflict?",
    options: [
      "Follow Country A's law — AML requirements always supersede privacy laws",
      "Follow Country B's law — privacy protections take precedence over AML in cross-border contexts",
      "Seek legal counsel in both jurisdictions, comply with each country's law in its own territory, and structure information flows to avoid triggering either conflict; escalate unresolvable conflicts to senior management and relevant regulators",
      "Follow your global AML policy — it supersedes conflicting local laws"
    ],
    answer: 2,
    explanation: "Conflicting legal obligations across jurisdictions are a genuine challenge in global AML compliance. The correct approach: (1) obtain local legal advice in each jurisdiction; (2) comply with each country's law within its territory; (3) structure data flows to avoid triggering the conflict (e.g., aggregate rather than individual data for FIU reporting where permitted); (4) if the conflict is genuinely irresolvable, escalate to senior management and potentially engage both regulators for guidance. A global policy cannot override a host country's binding law. This scenario is increasingly common as GDPR and similar privacy laws intersect with AML reporting requirements. Most jurisdictions provide AML exceptions to privacy laws, but the specifics vary."
  },
  {
    id: 394,
    category: "Scenario Based",
    question: "An AML analyst identifies suspicious activity but believes filing a SAR will alert law enforcement and disrupt an ongoing sting operation the analyst learned about through personal contacts. Should the analyst delay the SAR?",
    options: [
      "Yes — the analyst should coordinate with law enforcement to avoid disrupting the sting",
      "No — SAR filing timelines are legal requirements; if law enforcement wants to delay a SAR, they must make a formal request through proper channels; an analyst cannot unilaterally delay a legally required filing based on informal information",
      "Yes — law enforcement coordination is a recognized SAR filing exception under the BSA",
      "No — the analyst should file the SAR and simultaneously notify law enforcement of the potential conflict"
    ],
    answer: 1,
    explanation: "SAR filing timelines are legal requirements. The only basis for delaying a SAR beyond the standard timeframe is a formal law enforcement request through proper channels — typically through FinCEN's law enforcement liaison process. An analyst cannot unilaterally delay based on informal personal knowledge of a sting operation. The proper procedure: file the SAR on time, and if the analyst has legitimate concerns about a law enforcement conflict, notify their compliance leadership who can engage FinCEN and law enforcement through official channels. Informal knowledge is not a lawful basis for non-compliance. Self-help delays to 'protect' law enforcement operations create BSA liability for the institution."
  },
  {
    id: 395,
    category: "Scenario Based",
    question: "A bank's new product — an instant cryptocurrency-to-cash ATM — is being launched in two weeks. The product team has not consulted compliance. What is the MINIMUM the compliance officer must accomplish before launch?",
    options: [
      "Review the product for reputational risk only — AML compliance can be addressed post-launch",
      "Conduct a pre-launch AML/BSA risk assessment of the new product; identify the product's ML/TF risks; establish monitoring scenarios, CIP procedures, and CTR/SAR protocols; train relevant staff; and either delay launch until compliant or obtain board approval of any residual risk",
      "File a new product notification with FinCEN 30 days before launch",
      "Ensure the product is OFAC-screened at launch — other AML measures can follow within 90 days"
    ],
    answer: 1,
    explanation: "A new product must undergo AML/BSA risk assessment before launch — not after. Crypto-to-cash ATMs have specific BSA characteristics: they are money transmitters; they require CIP for transactions above thresholds; they must file CTRs for cash dispensed above $10,000; they must monitor for structuring; and they need OFAC screening. FinCEN's expectation (and regulatory guidance) is that new products are assessed before they generate transactions. Launching without AML controls creates immediate compliance exposure. A pre-launch risk assessment, control design, training, and monitoring setup are non-negotiable minimum steps. Delaying launch until controls are in place is the correct choice if two weeks is insufficient."
  },
  {
    id: 396,
    category: "Scenario Based",
    question: "An AML officer at a small community bank receives an informal request from a U.S. senator's office asking for account information on a constituent 'as a personal favor to assist with a constituent services inquiry.' What is the correct response?",
    options: [
      "Comply — elected officials' offices have implied authority to request financial information",
      "Decline — congressional offices have no legal authority to obtain customer financial records informally; the request must come through proper legal channels (subpoena, court order), and informal requests must be refused regardless of political standing",
      "Provide general account status information without specifics as a compromise",
      "Contact the OCC for guidance before responding to the senator's office"
    ],
    answer: 1,
    explanation: "No informal request — regardless of the requester's political status — can override customer privacy protections under the Right to Financial Privacy Act (RFPA). Congressional offices have no inherent authority to access bank records informally. The RFPA requires legal process (subpoena or court order) with customer notice rights before financial records can be produced to any government entity. A 'personal favor' request from a senator's office must be declined. The compliance officer should document the request, decline politely, and inform senior management. Attempting to accommodate the request informally — even partially — creates RFPA liability and may constitute improper disclosure."
  },
  {
    id: 397,
    category: "Scenario Based",
    question: "A bank's AML program successfully detects and files SARs on a pattern that later results in a major drug trafficking conviction. Federal prosecutors contact the bank to testify about the SAR filings in court. What must the bank ensure before any testimony?",
    options: [
      "The bank can testify freely — SAR confidentiality does not apply to court proceedings",
      "The bank must receive a court order compelling testimony before disclosing SAR-related information in court — the SAR confidentiality provisions persist even in judicial proceedings unless a court order removes the restriction",
      "The bank should decline to testify to preserve customer confidentiality",
      "The bank can testify about underlying transactions but not about the SAR filings themselves"
    ],
    answer: 1,
    explanation: "SAR confidentiality under 31 U.S.C. § 5318(g) persists in judicial proceedings. A financial institution (and its employees) may not disclose a SAR or its existence in court without a court order specifically compelling the disclosure. The Department of Justice has a process for obtaining such orders when SAR disclosure is necessary for prosecution. Before testifying about SAR contents in any proceeding, the bank must ensure a valid court order is in place. Testifying about underlying transaction records (which exist independently of the SAR) is different from testifying about the SAR filing itself — the former can be compelled by subpoena; the latter requires a court order overriding SAR confidentiality."
  },
  {
    id: 398,
    category: "Scenario Based",
    question: "A compliance officer discovers that her institution's transaction monitoring system has been systematically excluding transactions from five specific high-revenue customer accounts from all monitoring for the past two years, due to a technical configuration error. No SARs were filed on these accounts. What is the CORRECT sequence of actions?",
    options: [
      "Fix the error and monitor going forward — past omissions are covered by the statute of limitations",
      "Immediately fix the monitoring gap, conduct a two-year look-back review on all excluded accounts, file any SARs identified through the look-back, document the root cause, implement corrective controls, and consider proactive regulator disclosure",
      "Fix the error and file a single SAR documenting the monitoring failure",
      "Escalate to legal counsel only — the statute of limitations may shield the institution from liability for the missed period"
    ],
    answer: 1,
    explanation: "A systematic monitoring exclusion for two years is a serious BSA program failure. The response must be comprehensive: (1) immediately correct the configuration; (2) conduct a full look-back review for all five accounts over the two-year period; (3) file late SARs on any identified suspicious activity; (4) conduct root cause analysis and implement controls to prevent recurrence; (5) proactively disclose to regulators — self-disclosure is a significant mitigating factor and demonstrates good faith. The statute of limitations does not eliminate the SAR obligation for past transactions, and relying on it without disclosure is a high-risk strategy that assumes regulators will never discover the gap independently."
  },
  {
    id: 399,
    category: "Scenario Based",
    question: "A correspondent bank notifies a U.S. bank that it has exited its relationship with the U.S. bank, citing 'compliance concerns' without further explanation. What should the U.S. bank do?",
    options: [
      "Accept the exit — correspondent banks are not required to explain their business decisions",
      "Conduct an internal review to understand what compliance concerns may have driven the exit; this may signal that the U.S. bank's own AML posture, customer base, or jurisdiction exposure was deemed unacceptable — a signal worth investigating proactively",
      "Immediately notify FinCEN of the correspondent's exit",
      "File a SAR on the correspondent bank for unexplained account termination"
    ],
    answer: 1,
    explanation: "When a correspondent bank — particularly a well-regarded one — exits citing 'compliance concerns,' it is a significant signal that the U.S. bank's own risk profile may be elevated. Correspondent banks conduct due diligence on their respondents and exit when they perceive unacceptable AML risk. The U.S. bank should: review what activities, customers, or jurisdictions may have triggered the concern; assess whether its own AML program has gaps that would concern a sophisticated correspondent; and proactively remediate identified issues. This is a 'canary in the coal mine' moment. While FinCEN notification is not required for a correspondent exit, if the review reveals compliance failures, SAR or regulatory disclosure obligations may arise."
  },
  {
    id: 400,
    category: "Scenario Based",
    question: "A CAMS candidate is asked in a job interview: 'Describe a situation where you would NOT file a SAR even though your manager told you to.' What is the BEST answer, demonstrating genuine AML expertise?",
    options: [
      "'I would always follow my manager's instruction to file a SAR — it is always better to over-report than under-report.'",
      "'I would not file a SAR if there is genuinely no suspicious activity — filing SARs on known clean customers to satisfy management pressure, meet filing quotas, or avoid difficult conversations would misuse the BSA reporting system and waste law enforcement resources. SAR filing requires a good-faith basis for suspicion.'",
      "'I would escalate to senior management before deciding — the SAR filing decision is never mine alone.'",
      "'I would file the SAR but note in the narrative that I had reservations about filing.'"
    ],
    answer: 1,
    explanation: "This question tests whether a candidate understands that SAR quality matters as much as SAR quantity. Filing SARs without a good-faith basis for suspicion — to satisfy quotas, please managers, or avoid conflict — is a misuse of the BSA reporting system. Law enforcement invests resources investigating every SAR; 'defensive filing' wastes those resources and adds noise to the system. FinCEN guidance acknowledges that institutions should not file SARs on activity that has a clear, reasonable innocent explanation. A candidate who demonstrates this nuanced understanding — balancing the low threshold for suspicion against the obligation to make good-faith professional judgments — demonstrates genuine AML expertise, not just rule-following."
  }
];
