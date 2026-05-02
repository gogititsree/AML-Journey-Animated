export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // BANK SECRECY ACT (BSA)
  {
    id: 1,
    category: "Bank Secrecy Act",
    question: "The Bank Secrecy Act (BSA) was enacted in which year?",
    options: ["1956", "1970", "1986", "2001"],
    answer: 1,
    explanation: "The BSA was enacted in 1970 and is the primary U.S. anti-money laundering law requiring financial institutions to assist government agencies in detecting and preventing money laundering."
  },
  {
    id: 2,
    category: "Bank Secrecy Act",
    question: "What is the reporting threshold for a Currency Transaction Report (CTR)?",
    options: ["$5,000", "$7,500", "$10,000", "$25,000"],
    answer: 2,
    explanation: "Financial institutions must file a CTR for any cash transaction over $10,000 in a single business day, whether a single transaction or multiple related transactions."
  },
  {
    id: 3,
    category: "Bank Secrecy Act",
    question: "Which government agency administers and enforces the Bank Secrecy Act?",
    options: ["FBI", "FinCEN", "SEC", "FDIC"],
    answer: 1,
    explanation: "The Financial Crimes Enforcement Network (FinCEN), a bureau of the U.S. Department of the Treasury, administers and enforces BSA requirements."
  },
  {
    id: 4,
    category: "Bank Secrecy Act",
    question: "How long must financial institutions retain BSA records?",
    options: ["3 years", "5 years", "7 years", "10 years"],
    answer: 1,
    explanation: "The BSA generally requires financial institutions to retain records for 5 years from the date of the transaction."
  },
  {
    id: 5,
    category: "Bank Secrecy Act",
    question: "Which of the following is NOT one of the four core components of an AML compliance program under the BSA?",
    options: ["Internal controls", "Independent testing", "Designated BSA/AML compliance officer", "Mandatory customer interviews"],
    answer: 3,
    explanation: "The four core components (pillars) are: (1) internal controls, (2) independent testing/audit, (3) a designated BSA/AML compliance officer, and (4) ongoing employee training."
  },
  {
    id: 6,
    category: "Bank Secrecy Act",
    question: "What is 'structuring' in the context of the BSA?",
    options: ["Organizing a bank's compliance program", "Breaking up transactions to avoid the $10,000 CTR threshold", "Reporting suspicious wire transfers", "Establishing shell company ownership structures"],
    answer: 1,
    explanation: "Structuring (also called smurfing) is deliberately breaking up cash transactions to avoid triggering the CTR reporting requirement. It is a federal crime under 31 U.S.C. § 5324."
  },
  {
    id: 7,
    category: "Bank Secrecy Act",
    question: "A CTR must be filed within how many days of the transaction?",
    options: ["15 days", "30 days", "45 days", "60 days"],
    answer: 1,
    explanation: "CTRs must be filed with FinCEN within 15 days after the date of the reportable transaction."
  },
  {
    id: 8,
    category: "Bank Secrecy Act",
    question: "What does the term 'tipping off' refer to in AML compliance?",
    options: ["Reporting suspicious activity to law enforcement", "Informing the subject of a SAR that a report has been filed", "Providing intelligence tips to FinCEN", "Alerting regulators to BSA violations"],
    answer: 1,
    explanation: "Tipping off is illegal. Financial institutions and their employees are prohibited from disclosing to a SAR subject that a report has been or may be filed."
  },
  {
    id: 9,
    category: "Bank Secrecy Act",
    question: "Which of the following is exempt from CTR filing requirements?",
    options: ["Foreign nationals", "Large casinos", "Publicly traded companies listed on major exchanges", "Private equity firms"],
    answer: 2,
    explanation: "The BSA provides CTR exemptions for certain customers including publicly traded companies listed on major U.S. exchanges, banks, and certain government entities."
  },
  {
    id: 10,
    category: "Bank Secrecy Act",
    question: "The USA PATRIOT Act amended the BSA primarily to address which concern?",
    options: ["Tax evasion", "Terrorist financing", "Credit card fraud", "Securities manipulation"],
    answer: 1,
    explanation: "Enacted after 9/11, the USA PATRIOT Act significantly expanded the BSA's anti-money laundering requirements, primarily to address terrorist financing risks."
  },

  // SUSPICIOUS ACTIVITY REPORTS (SARs)
  {
    id: 11,
    category: "Suspicious Activity Reports",
    question: "What is the minimum dollar threshold for filing a SAR for a bank involving a suspect known to the institution?",
    options: ["$2,500", "$5,000", "$10,000", "$25,000"],
    answer: 1,
    explanation: "Banks must file a SAR for transactions of $5,000 or more (or aggregating to $5,000) when a suspect is known to the institution, or $25,000 or more when no suspect is known."
  },
  {
    id: 12,
    category: "Suspicious Activity Reports",
    question: "Within how many days must a SAR be filed after a suspicious activity is initially detected?",
    options: ["15 days", "30 days", "45 days", "60 days"],
    answer: 1,
    explanation: "A SAR must be filed within 30 calendar days of the date of initial detection of facts that may constitute a basis for filing."
  },
  {
    id: 13,
    category: "Suspicious Activity Reports",
    question: "How long must a financial institution retain a SAR and supporting documentation?",
    options: ["3 years", "5 years", "7 years", "10 years"],
    answer: 1,
    explanation: "SAR documentation must be retained for 5 years from the date of filing."
  },
  {
    id: 14,
    category: "Suspicious Activity Reports",
    question: "A SAR provides financial institutions with which legal protection?",
    options: ["Immunity from all civil liability", "Safe harbor from civil liability for reporting in good faith", "Criminal immunity for the reporting employees", "Protection from regulatory examination"],
    answer: 1,
    explanation: "The BSA provides financial institutions and their employees with a safe harbor from civil liability when filing SARs in good faith."
  },
  {
    id: 15,
    category: "Suspicious Activity Reports",
    question: "Which of the following is NOT a category of suspicious activity that would trigger a SAR?",
    options: ["Unusual wire transfer patterns", "A customer depositing exactly $9,999 cash repeatedly", "A customer with multiple accounts at the same institution", "Transactions inconsistent with a customer's business"],
    answer: 2,
    explanation: "Simply having multiple accounts at the same institution is not inherently suspicious and would not independently trigger a SAR requirement."
  },
  {
    id: 16,
    category: "Suspicious Activity Reports",
    question: "SARs filed in the U.S. are submitted to which organization?",
    options: ["The FBI", "FinCEN", "The IRS", "The OCC"],
    answer: 1,
    explanation: "SARs are filed with FinCEN through the BSA E-Filing System."
  },
  {
    id: 17,
    category: "Suspicious Activity Reports",
    question: "If a financial institution files a SAR and the suspicious activity is continuing, how often must a continuing SAR be filed?",
    options: ["Every 30 days", "Every 60 days", "Every 90 days", "Every 120 days"],
    answer: 2,
    explanation: "If suspicious activity continues, a financial institution may (and often should) file a continuing SAR every 90 days to report the continuing activity."
  },
  {
    id: 18,
    category: "Suspicious Activity Reports",
    question: "Which of the following best describes the 'no-action' position regarding SARs?",
    options: ["Law enforcement will not prosecute customers named in SARs", "Financial institutions may continue servicing a customer after filing a SAR", "FinCEN will not take action if a SAR is filed in error", "Regulators will not penalize banks for not filing a SAR if they have a policy"],
    answer: 1,
    explanation: "Financial institutions may continue to provide services to a customer after filing a SAR; they are not required to terminate the relationship."
  },
  {
    id: 19,
    category: "Suspicious Activity Reports",
    question: "What is a 'voluntary SAR'?",
    options: ["A SAR filed at the request of law enforcement", "A SAR filed even though the amount falls below the reporting threshold", "A SAR filed by a non-bank financial institution", "A SAR filed by an individual customer"],
    answer: 1,
    explanation: "A voluntary SAR is one filed at amounts below the mandatory threshold when a financial institution still believes the activity is suspicious enough to report."
  },
  {
    id: 20,
    category: "Suspicious Activity Reports",
    question: "When a bank employee discovers suspicious activity, who within the institution is typically responsible for making the final decision to file a SAR?",
    options: ["The frontline teller", "The branch manager", "The BSA/AML compliance officer", "The CEO"],
    answer: 2,
    explanation: "The BSA/AML Compliance Officer typically has final responsibility and authority for deciding whether to file a SAR after reviewing reports from frontline staff."
  },

  // KNOW YOUR CUSTOMER (KYC) / CDD
  {
    id: 21,
    category: "KYC / CDD",
    question: "What does CDD stand for in AML compliance?",
    options: ["Customer Due Diligence", "Compliance Documentation Directive", "Currency Deposit Declaration", "Customer Data Distribution"],
    answer: 0,
    explanation: "CDD stands for Customer Due Diligence, which refers to the process of identifying and verifying the identity of customers and assessing their risk profile."
  },
  {
    id: 22,
    category: "KYC / CDD",
    question: "What does EDD stand for in AML compliance?",
    options: ["Electronic Data Disclosure", "Enhanced Due Diligence", "Entity Document Directive", "Evidence-based Detection Doctrine"],
    answer: 1,
    explanation: "EDD stands for Enhanced Due Diligence, which is additional scrutiny applied to higher-risk customers such as PEPs, correspondent banks, and customers in high-risk jurisdictions."
  },
  {
    id: 23,
    category: "KYC / CDD",
    question: "Under FinCEN's CDD Rule, financial institutions are required to identify and verify beneficial owners of legal entity customers who own what percentage or more?",
    options: ["10%", "20%", "25%", "33%"],
    answer: 2,
    explanation: "The CDD Rule requires financial institutions to identify and verify beneficial owners who own 25% or more of a legal entity customer."
  },
  {
    id: 24,
    category: "KYC / CDD",
    question: "The CDD Rule requires financial institutions to identify not only 25%+ beneficial owners but also one person who has what role?",
    options: ["A 10%+ shareholder", "A control person (e.g., CEO, managing member)", "The CFO or treasurer", "The registered agent"],
    answer: 1,
    explanation: "In addition to 25%+ ownership, the CDD Rule requires identification of one control person who has significant managerial control over the entity (e.g., CEO, president, managing member)."
  },
  {
    id: 25,
    category: "KYC / CDD",
    question: "What is the primary purpose of a Customer Risk Assessment (CRA)?",
    options: ["To determine creditworthiness", "To assign each customer a ML/TF risk level to determine the level of due diligence required", "To comply with OFAC screening requirements", "To calculate the probability of account fraud"],
    answer: 1,
    explanation: "A CRA evaluates customers based on factors like type of business, geography, products used, and transaction patterns to assign a risk rating that drives the level of due diligence needed."
  },
  {
    id: 26,
    category: "KYC / CDD",
    question: "What does KYC stand for?",
    options: ["Keep Your Customers", "Know Your Customer", "Know Your Currency", "Key Yield Compliance"],
    answer: 1,
    explanation: "KYC stands for Know Your Customer — the process of verifying customer identity and assessing the risks of illegal intentions for a business relationship."
  },
  {
    id: 27,
    category: "KYC / CDD",
    question: "Which of the following customer types generally requires EDD?",
    options: ["A salaried employee with a checking account", "A retired individual with a savings account", "A foreign Politically Exposed Person (PEP)", "A domestic small business owner"],
    answer: 2,
    explanation: "Foreign PEPs are considered high-risk due to their access to public funds and potential for corruption, requiring enhanced due diligence."
  },
  {
    id: 28,
    category: "KYC / CDD",
    question: "What is 'onboarding' in the AML context?",
    options: ["Training new compliance staff", "The process of accepting and verifying a new customer relationship", "Filing a SAR for a new account", "Enrolling in FinCEN's e-filing system"],
    answer: 1,
    explanation: "Onboarding refers to the process of establishing a new customer relationship, including identity verification, risk assessment, and documentation."
  },
  {
    id: 29,
    category: "KYC / CDD",
    question: "What information must be collected as part of a Customer Identification Program (CIP) for individual customers?",
    options: ["Name, address, credit score, and income", "Name, date of birth, address, and identification number", "Name, employer, account purpose, and net worth", "Name, Social Security number, credit history, and phone number"],
    answer: 1,
    explanation: "For individuals, CIP requires name, date of birth, address, and an identification number (e.g., SSN, passport number, or alien ID)."
  },
  {
    id: 30,
    category: "KYC / CDD",
    question: "What is 'ongoing monitoring' in the CDD context?",
    options: ["Continuously recording all customer conversations", "Periodic review of customer information and transaction activity throughout the relationship", "Daily reporting to FinCEN of all transactions", "Annual re-verification of all customer identification documents"],
    answer: 1,
    explanation: "Ongoing monitoring involves continuously reviewing customer transactions against their expected profile and periodically updating customer information to detect suspicious activity."
  },

  // MONEY LAUNDERING — STAGES & TYPOLOGIES
  {
    id: 31,
    category: "Money Laundering",
    question: "What are the three stages of money laundering?",
    options: ["Deposit, Transfer, Withdrawal", "Placement, Layering, Integration", "Detection, Investigation, Prosecution", "Structuring, Smurfing, Commingling"],
    answer: 1,
    explanation: "The three recognized stages of money laundering are: (1) Placement — introducing dirty money into the financial system; (2) Layering — disguising the trail; (3) Integration — reintroducing the funds as clean money."
  },
  {
    id: 32,
    category: "Money Laundering",
    question: "During which stage of money laundering is illegal money MOST vulnerable to detection?",
    options: ["Integration", "Layering", "Placement", "Structuring"],
    answer: 2,
    explanation: "The placement stage is most vulnerable because it involves physically introducing cash into the financial system, when the money is still most closely connected to the criminal activity."
  },
  {
    id: 33,
    category: "Money Laundering",
    question: "Which of the following best describes 'layering'?",
    options: ["Depositing cash in multiple small amounts", "Creating complex financial transactions to obscure the audit trail", "Using proceeds of crime to purchase legitimate assets", "Filing false tax returns to hide income"],
    answer: 1,
    explanation: "Layering involves conducting a series of complex financial transactions — wire transfers, currency conversions, shell companies — to create distance between the money and its criminal source."
  },
  {
    id: 34,
    category: "Money Laundering",
    question: "What is 'integration' in the context of money laundering?",
    options: ["The merger of two criminal organizations", "Merging laundered funds into legitimate commerce", "Integrating compliance systems with transaction monitoring", "The combination of cash and non-cash transactions"],
    answer: 1,
    explanation: "Integration is the final stage where laundered funds re-enter the legitimate economy, appearing as legal income (e.g., from real estate sales, business revenues, or investment returns)."
  },
  {
    id: 35,
    category: "Money Laundering",
    question: "What is 'smurfing'?",
    options: ["Using multiple individuals to conduct transactions below reporting thresholds", "Laundering money through real estate transactions", "Using shell companies to hide beneficial ownership", "Falsifying customs documents for trade-based laundering"],
    answer: 0,
    explanation: "Smurfing (structuring) involves using multiple individuals — 'smurfs' — each making small cash deposits below the $10,000 CTR threshold to avoid detection."
  },
  {
    id: 36,
    category: "Money Laundering",
    question: "What is 'trade-based money laundering' (TBML)?",
    options: ["Laundering through stock market trades", "Using international trade transactions to transfer value and obscure illicit funds", "Using cryptocurrency exchanges to launder money", "Money laundering through real estate purchases"],
    answer: 1,
    explanation: "TBML involves using international trade transactions (e.g., over/under-invoicing, phantom shipments) to move value across borders and legitimize illicit proceeds."
  },
  {
    id: 37,
    category: "Money Laundering",
    question: "Which of the following is a common real estate money laundering red flag?",
    options: ["Purchasing property with a mortgage", "Paying all cash for high-value property with no clear funding source", "Using a licensed real estate agent", "Obtaining a standard home appraisal"],
    answer: 1,
    explanation: "All-cash purchases of high-value real estate with unclear funding sources are a classic money laundering red flag, allowing criminals to integrate large sums into the legitimate economy."
  },
  {
    id: 38,
    category: "Money Laundering",
    question: "What are 'shell companies' typically used for in money laundering?",
    options: ["Legitimate tax planning only", "Hiding the true beneficial owners of assets and funds", "Housing financial institution compliance programs", "Facilitating trade finance transactions"],
    answer: 1,
    explanation: "Shell companies — entities with no real operations — are widely used by money launderers to hide beneficial ownership and obscure the trail of illicit funds."
  },
  {
    id: 39,
    category: "Money Laundering",
    question: "Which of the following best describes 'commingling'?",
    options: ["Filing both SARs and CTRs for the same transaction", "Mixing illegal proceeds with legitimate business revenue", "Conducting transactions in multiple currencies", "Opening accounts at multiple financial institutions simultaneously"],
    answer: 1,
    explanation: "Commingling involves mixing illegal proceeds with legitimate business revenues, making it difficult to distinguish dirty from clean money."
  },
  {
    id: 40,
    category: "Money Laundering",
    question: "What is a 'front company' in the context of AML?",
    options: ["The public-facing subsidiary of a financial institution", "A business that appears legitimate but is primarily used to launder money", "A company that provides AML consulting services", "The first company established by a new entrepreneur"],
    answer: 1,
    explanation: "A front company is a seemingly legitimate business (often cash-intensive like a restaurant or car wash) used to commingle and launder proceeds from criminal activity."
  },

  // PEPs & SANCTIONS / OFAC
  {
    id: 41,
    category: "PEPs & Sanctions",
    question: "What does PEP stand for in AML?",
    options: ["Private Equity Person", "Politically Exposed Person", "Primary Enforcement Priority", "Potential Exposure Profile"],
    answer: 1,
    explanation: "PEP stands for Politically Exposed Person — an individual who holds or has held a prominent public function (e.g., head of state, senior government official, senior executive of a state-owned enterprise)."
  },
  {
    id: 42,
    category: "PEPs & Sanctions",
    question: "Why do PEPs require enhanced due diligence?",
    options: ["Because they are always criminals", "Because they are at higher risk of involvement in bribery and corruption due to their positions", "Because they are exempt from normal BSA requirements", "Because they always have foreign accounts"],
    answer: 1,
    explanation: "PEPs pose higher corruption risks because their public positions give them access to government funds and power, making them potentially susceptible to bribery and corruption."
  },
  {
    id: 43,
    category: "PEPs & Sanctions",
    question: "Which U.S. government agency administers the OFAC sanctions programs?",
    options: ["FinCEN", "FBI", "Office of Foreign Assets Control (OFAC)", "Department of State"],
    answer: 2,
    explanation: "OFAC, a division of the U.S. Treasury Department, administers and enforces economic and trade sanctions programs."
  },
  {
    id: 44,
    category: "PEPs & Sanctions",
    question: "What is the SDN List?",
    options: ["Suspicious Deposits Notification List", "Specially Designated Nationals and Blocked Persons List", "Sanctioned Depositors Notification Registry", "Standard Due Diligence Network"],
    answer: 1,
    explanation: "The SDN List maintained by OFAC identifies individuals, companies, and countries with whom U.S. persons are generally prohibited from doing business."
  },
  {
    id: 45,
    category: "PEPs & Sanctions",
    question: "When a financial institution discovers it holds funds belonging to an OFAC-sanctioned entity, what must it do?",
    options: ["Return the funds immediately", "File a SAR and freeze the funds", "Block the property and report to OFAC", "Notify the FBI within 24 hours"],
    answer: 2,
    explanation: "When blocked property is identified, the institution must freeze/block the assets and report the blocking to OFAC within 10 business days."
  },
  {
    id: 46,
    category: "PEPs & Sanctions",
    question: "What is a 'close associate' in the context of PEP identification?",
    options: ["A PEP's business partner at the institution", "A person known to be closely associated with a PEP personally or professionally", "A compliance officer who manages PEP accounts", "A correspondent bank that serves PEP clients"],
    answer: 1,
    explanation: "Close associates of PEPs — such as business partners, family members, and close personal friends — can pose similar risks and should receive enhanced due diligence."
  },
  {
    id: 47,
    category: "PEPs & Sanctions",
    question: "What does 'de-risking' mean in the AML context?",
    options: ["Reducing a bank's market risk exposure", "Terminating or restricting business relationships with entire categories of high-risk customers", "Removing a customer from the high-risk watchlist", "Lowering sanctions screening frequency"],
    answer: 1,
    explanation: "De-risking is the practice of financial institutions exiting entire customer categories or geographic markets deemed high-risk, rather than managing those risks individually."
  },
  {
    id: 48,
    category: "PEPs & Sanctions",
    question: "Which of the following would be considered a 'domestic PEP' under most AML frameworks?",
    options: ["A foreign diplomat stationed in the U.S.", "A U.S. Senator", "A senior executive at a large private corporation", "A public school principal"],
    answer: 1,
    explanation: "A U.S. Senator holds a prominent public function and would be considered a domestic PEP. The FATF and most national frameworks include senior legislators in the PEP definition."
  },
  {
    id: 49,
    category: "PEPs & Sanctions",
    question: "How long should a person remain on a PEP watchlist after leaving their position?",
    options: ["They are immediately removed when they leave office", "At least 1 year", "Typically 12–18 months, but risk-based judgment may require longer", "Permanently"],
    answer: 2,
    explanation: "FATF recommends applying PEP measures for at least 12–18 months after a person leaves their prominent public function, though a risk-based approach may warrant longer monitoring."
  },
  {
    id: 50,
    category: "PEPs & Sanctions",
    question: "Which of the following transactions should always trigger OFAC screening?",
    options: ["Only wire transfers over $10,000", "All transactions involving potential links to sanctioned countries, entities, or individuals", "Only new account openings", "Only international transactions"],
    answer: 1,
    explanation: "OFAC screening should be applied to all transactions and customers, not just those above a threshold, to identify any nexus with sanctioned parties."
  },

  // FATF & INTERNATIONAL STANDARDS
  {
    id: 51,
    category: "FATF & International Standards",
    question: "What does FATF stand for?",
    options: ["Financial Action Task Force", "Federal Anti-Terrorism Fund", "Foreign Assets Transaction Framework", "Financial Accountability and Transparency Forum"],
    answer: 0,
    explanation: "FATF stands for the Financial Action Task Force, an intergovernmental body that sets international standards for combating money laundering and terrorist financing."
  },
  {
    id: 52,
    category: "FATF & International Standards",
    question: "How many FATF Recommendations form the international AML/CFT standard?",
    options: ["20", "30", "40", "50"],
    answer: 2,
    explanation: "The FATF has 40 Recommendations that set the international standard for anti-money laundering (AML) and counter-financing of terrorism (CFT)."
  },
  {
    id: 53,
    category: "FATF & International Standards",
    question: "Countries on the FATF's 'grey list' are subject to what?",
    options: ["Automatic sanctions", "Enhanced monitoring for AML/CFT deficiencies", "Exclusion from SWIFT", "Mandatory IMF audits"],
    answer: 1,
    explanation: "Countries on FATF's 'grey list' (Increased Monitoring List) have AML/CFT weaknesses and are subject to enhanced monitoring but are actively working to address deficiencies."
  },
  {
    id: 54,
    category: "FATF & International Standards",
    question: "What is a 'Mutual Evaluation' in the FATF framework?",
    options: ["A bilateral trade agreement review", "A peer review of a country's AML/CFT systems by FATF members", "An assessment of a bank's AML program by regulators", "A FinCEN review of financial institution compliance"],
    answer: 1,
    explanation: "Mutual Evaluations are peer reviews where FATF members assess another country's AML/CFT framework against the 40 Recommendations."
  },
  {
    id: 55,
    category: "FATF & International Standards",
    question: "What is the Egmont Group?",
    options: ["A European banking consortium", "An international network of Financial Intelligence Units (FIUs)", "A UN sanctions committee", "A private sector AML standards body"],
    answer: 1,
    explanation: "The Egmont Group is a network of over 160 Financial Intelligence Units (FIUs) that facilitates international cooperation and intelligence sharing to combat money laundering and terrorist financing."
  },
  {
    id: 56,
    category: "FATF & International Standards",
    question: "Which of the following best describes a 'Financial Intelligence Unit' (FIU)?",
    options: ["A financial institution's internal fraud team", "A central agency that receives, analyzes, and disseminates financial disclosures to combat ML/TF", "An INTERPOL division focused on financial crimes", "A FinCEN subunit handling wire transfer analysis"],
    answer: 1,
    explanation: "An FIU is a central national authority that receives and analyzes SARs, CTRs, and other financial disclosures to identify money laundering and terrorist financing, disseminating intelligence to law enforcement."
  },
  {
    id: 57,
    category: "FATF & International Standards",
    question: "What is the Basel AML Index?",
    options: ["A ranking of global banks' capital adequacy", "An annual ranking of countries' money laundering and terrorist financing risks", "A list of compliant AML software vendors", "A European banking supervisory framework"],
    answer: 1,
    explanation: "The Basel AML Index, published by the Basel Institute on Governance, ranks countries based on their money laundering and terrorist financing risk using publicly available data."
  },
  {
    id: 58,
    category: "FATF & International Standards",
    question: "What does 'CFT' stand for in AML/CFT?",
    options: ["Compliance Fraud Tracking", "Counter-Financing of Terrorism", "Currency Flow Transparency", "Corporate Financial Technology"],
    answer: 1,
    explanation: "CFT stands for Counter-Financing of Terrorism, which along with AML (Anti-Money Laundering) forms the twin pillars of international financial crime prevention efforts."
  },
  {
    id: 59,
    category: "FATF & International Standards",
    question: "What is a 'Non-Cooperative Country or Territory' (NCCT) in the FATF context?",
    options: ["A country that refuses to join FATF", "A country that fails to cooperate in the FATF's mutual evaluation process", "A jurisdiction with serious strategic deficiencies in its AML/CFT regime (blacklisted)", "A country with no banking system"],
    answer: 2,
    explanation: "FATF's black list (formerly called NCCT list, now the 'High-Risk Jurisdictions subject to a Call for Action') identifies countries with serious strategic AML/CFT deficiencies."
  },
  {
    id: 60,
    category: "FATF & International Standards",
    question: "The Wolfsberg Group is composed of which type of members?",
    options: ["Central banks", "Major global private banks that publish AML guidelines", "FATF member countries", "International law enforcement agencies"],
    answer: 1,
    explanation: "The Wolfsberg Group is an association of 13 major global banks that develops financial crime risk management standards and guidance, such as the Correspondent Banking Due Diligence Questionnaire."
  },

  // CORRESPONDENT BANKING & WIRE TRANSFERS
  {
    id: 61,
    category: "Correspondent Banking",
    question: "What is 'correspondent banking'?",
    options: ["Email communication between banks", "A relationship where one bank provides services to another bank, often cross-border", "Banks that share the same regulatory structure", "A type of trade finance arrangement"],
    answer: 1,
    explanation: "Correspondent banking involves a bank (the correspondent) providing banking services to another bank (the respondent), typically to facilitate cross-border transactions."
  },
  {
    id: 62,
    category: "Correspondent Banking",
    question: "What is a 'nested correspondent account' and why is it a risk?",
    options: ["An account with multiple signatories", "When a respondent bank allows other banks to use its correspondent account, creating opacity", "A joint account between two correspondent banks", "An account used exclusively for interbank settlements"],
    answer: 1,
    explanation: "Nested accounts occur when a respondent bank allows third-party banks to access the correspondent account, creating layers of opacity and making it difficult to identify the true customer."
  },
  {
    id: 63,
    category: "Correspondent Banking",
    question: "What does 'payable-through account' refer to?",
    options: ["A credit facility that auto-repays from deposits", "An account at a U.S. correspondent bank used by foreign bank customers to conduct transactions directly", "A settlement account between two financial institutions", "An account used for payroll processing"],
    answer: 1,
    explanation: "A payable-through account allows the foreign bank's customers (not just the foreign bank itself) to directly conduct transactions through the U.S. correspondent bank's account, raising significant KYC concerns."
  },
  {
    id: 64,
    category: "Correspondent Banking",
    question: "What is the SWIFT travel rule's requirement for wire transfers?",
    options: ["Wire transfers must be reported to FinCEN if over $10,000", "Originating institutions must pass along information about the sender and recipient with international wire transfers", "All wire transfers must be reviewed by a compliance officer", "Wire transfers to sanctioned countries must be rejected within 1 hour"],
    answer: 1,
    explanation: "The FATF Travel Rule (Rule 16) and FinCEN's Travel Rule (31 CFR § 103.33) require originating financial institutions to pass along sender and recipient information with wire transfers of $3,000 or more."
  },
  {
    id: 65,
    category: "Correspondent Banking",
    question: "What minimum information must accompany a wire transfer under the FinCEN Travel Rule?",
    options: ["Sender name only", "Sender name, account number, and address", "Sender name, amount, and destination country", "Sender and recipient names, account numbers, addresses, and routing numbers"],
    answer: 3,
    explanation: "The Travel Rule requires the originator's name, account number, address, and the beneficiary's name, account number, and financial institution information to accompany the wire transfer."
  },

  // RISK-BASED APPROACH
  {
    id: 66,
    category: "Risk-Based Approach",
    question: "What is the risk-based approach (RBA) to AML compliance?",
    options: ["Focusing compliance resources equally on all customers", "Allocating more compliance resources to higher-risk customers and activities", "Avoiding all high-risk products and services", "Applying one standard level of due diligence to all customers"],
    answer: 1,
    explanation: "The RBA directs financial institutions to identify, assess, and understand their ML/TF risks, then apply appropriate controls proportionate to those risks."
  },
  {
    id: 67,
    category: "Risk-Based Approach",
    question: "Which of the following is generally considered a high-risk product for money laundering?",
    options: ["Personal savings accounts", "Mortgage loans for primary residences", "Private banking for high-net-worth individuals", "Standard retail checking accounts"],
    answer: 2,
    explanation: "Private banking relationships with high-net-worth individuals — especially foreign ones — are considered high-risk due to the large amounts, privacy expectations, and complexity of transactions."
  },
  {
    id: 68,
    category: "Risk-Based Approach",
    question: "Which geographic factor is considered HIGH risk for AML purposes?",
    options: ["Transactions within a home country", "Transfers to FATF-compliant jurisdictions", "Transfers to or from countries on the FATF grey or black list", "Domestic retail banking transactions"],
    answer: 2,
    explanation: "Transactions involving FATF grey- or black-listed jurisdictions with strategic AML/CFT deficiencies represent elevated geographic risk."
  },
  {
    id: 69,
    category: "Risk-Based Approach",
    question: "What does a 'risk matrix' help compliance teams do?",
    options: ["Calculate loan default risk", "Systematically identify, measure, and prioritize AML/CFT risks", "Score customer creditworthiness", "Determine regulatory capital requirements"],
    answer: 1,
    explanation: "A risk matrix (or risk scoring model) helps compliance teams systematically evaluate and prioritize risks across customer types, geographies, products, and delivery channels."
  },
  {
    id: 70,
    category: "Risk-Based Approach",
    question: "What is a 'money service business' (MSB) and why is it considered high-risk?",
    options: ["Any business accepting credit card payments", "Businesses providing services like money transmission, check cashing, or currency exchange — often handling large volumes of cash", "Investment firms offering money market accounts", "Insurance companies offering annuity products"],
    answer: 1,
    explanation: "MSBs are considered high-risk because they handle large cash volumes, may serve anonymous customers, and can be used to move money across borders with limited oversight."
  },

  // TRANSACTION MONITORING
  {
    id: 71,
    category: "Transaction Monitoring",
    question: "What is 'transaction monitoring' in AML compliance?",
    options: ["Auditing each teller's daily transactions", "Using automated systems to review customer transactions for suspicious patterns", "Manually reviewing all wire transfers over $10,000", "Tracking employee transactions for insider trading"],
    answer: 1,
    explanation: "Transaction monitoring involves using rule-based or AI-driven systems to automatically detect unusual patterns in customer transactions that may indicate money laundering or other financial crimes."
  },
  {
    id: 72,
    category: "Transaction Monitoring",
    question: "What does 'alert management' refer to in a transaction monitoring system?",
    options: ["Sending alerts to customers about their account activity", "The process of reviewing, investigating, and dispositioning alerts generated by the monitoring system", "Setting up automated email notifications for regulatory deadlines", "Managing the technology alerts in the compliance software"],
    answer: 1,
    explanation: "Alert management involves reviewing system-generated alerts, conducting investigations, and determining whether a SAR should be filed or the alert closed with no further action."
  },
  {
    id: 73,
    category: "Transaction Monitoring",
    question: "What is a 'false positive' in transaction monitoring?",
    options: ["A transaction that tests positive for fraud", "An alert generated for activity that turns out to be legitimate after investigation", "A SAR that results in no law enforcement action", "A CTR filed for a legitimate cash transaction"],
    answer: 1,
    explanation: "A false positive is a monitoring alert that flagged suspicious activity but, upon investigation, was found to be legitimate. High false positive rates are a major operational challenge in AML."
  },
  {
    id: 74,
    category: "Transaction Monitoring",
    question: "What is 'velocity checking' in transaction monitoring?",
    options: ["Measuring how fast transactions process through the system", "Detecting unusual frequency or speed of transactions that may indicate suspicious activity", "Checking the speed of wire transfers across borders", "Verifying the number of transactions per second a system can handle"],
    answer: 1,
    explanation: "Velocity checking monitors the rate of transactions over a period of time, flagging accounts that show unusually high numbers of transactions in a short period."
  },
  {
    id: 75,
    category: "Transaction Monitoring",
    question: "What is 'customer risk scoring' in transaction monitoring?",
    options: ["Assessing a customer's likelihood of defaulting on a loan", "Assigning a numerical risk level to customers based on AML risk factors to prioritize monitoring", "Calculating the total transaction volume of a customer", "Rating customers by their transaction profitability"],
    answer: 1,
    explanation: "Customer risk scoring assigns a risk level based on factors such as business type, geography, transaction patterns, and KYC information, helping prioritize monitoring resources."
  },

  // REGULATORY FRAMEWORK & EXAM-SPECIFIC
  {
    id: 76,
    category: "Regulatory Framework",
    question: "Which U.S. law extended the BSA's reach after September 11, 2001?",
    options: ["The Sarbanes-Oxley Act", "The Dodd-Frank Act", "The USA PATRIOT Act", "The Graham-Leach-Bliley Act"],
    answer: 2,
    explanation: "The USA PATRIOT Act (Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism) of 2001 significantly expanded AML requirements in response to 9/11."
  },
  {
    id: 77,
    category: "Regulatory Framework",
    question: "Which section of the USA PATRIOT Act requires financial institutions to establish AML programs?",
    options: ["Section 311", "Section 314", "Section 326", "Section 352"],
    answer: 3,
    explanation: "Section 352 of the USA PATRIOT Act requires all financial institutions to establish AML programs with the four core components: internal controls, audit, compliance officer, and training."
  },
  {
    id: 78,
    category: "Regulatory Framework",
    question: "Section 314(a) of the PATRIOT Act allows what?",
    options: ["FinCEN to share SAR data with foreign governments", "Law enforcement to request financial institutions search records for information about specific individuals or organizations", "Banks to share CIP data between institutions", "OFAC to freeze funds without a court order"],
    answer: 1,
    explanation: "Section 314(a) allows federal law enforcement to request that FinCEN send notices to financial institutions asking them to search their records for information on specific individuals or entities."
  },
  {
    id: 79,
    category: "Regulatory Framework",
    question: "Section 314(b) of the PATRIOT Act allows what?",
    options: ["Law enforcement to compel SAR production", "Financial institutions to voluntarily share information with each other about suspected money laundering or terrorist financing", "The IRS to access SAR filings", "FinCEN to publish SAR statistics"],
    answer: 1,
    explanation: "Section 314(b) provides a safe harbor for financial institutions to voluntarily share information with each other about suspected money laundering and terrorist financing."
  },
  {
    id: 80,
    category: "Regulatory Framework",
    question: "Section 311 of the PATRIOT Act authorizes what?",
    options: ["Customer identification requirements", "FinCEN to impose special measures on foreign jurisdictions or institutions of primary money laundering concern", "SAR filing requirements for all financial institutions", "Blocking of assets of SDN-listed entities"],
    answer: 1,
    explanation: "Section 311 allows FinCEN to impose special measures (ranging from recordkeeping to prohibiting accounts) on foreign institutions or jurisdictions determined to be of primary money laundering concern."
  },
  {
    id: 81,
    category: "Regulatory Framework",
    question: "Which U.S. law created the Anti-Money Laundering Act of 2020?",
    options: ["The PATRIOT Act", "The National Defense Authorization Act (NDAA)", "The Dodd-Frank Act", "The Bank Holding Company Act"],
    answer: 1,
    explanation: "The AML Act of 2020 was enacted as part of the National Defense Authorization Act (NDAA) for Fiscal Year 2021. It represents the most significant AML reform since the PATRIOT Act."
  },
  {
    id: 82,
    category: "Regulatory Framework",
    question: "What was the primary purpose of the Corporate Transparency Act (CTA) within the AML Act of 2020?",
    options: ["Requiring public disclosure of executive compensation", "Establishing a federal beneficial ownership registry to combat the use of anonymous shell companies", "Expanding SAR reporting requirements to cryptocurrency", "Requiring financial institutions to disclose AML program details publicly"],
    answer: 1,
    explanation: "The CTA, part of the AML Act of 2020, requires most U.S. corporations and LLCs to report beneficial ownership information to FinCEN, creating a centralized registry to combat shell company abuse."
  },
  {
    id: 83,
    category: "Regulatory Framework",
    question: "Which primary regulator examines national banks for BSA/AML compliance?",
    options: ["FinCEN", "The Federal Reserve", "The Office of the Comptroller of the Currency (OCC)", "The FDIC"],
    answer: 2,
    explanation: "The OCC examines national banks for BSA/AML compliance. The Federal Reserve examines state-chartered banks that are Federal Reserve members; the FDIC examines state non-member banks."
  },
  {
    id: 84,
    category: "Regulatory Framework",
    question: "What is a 'consent order' in the regulatory context?",
    options: ["A court order requiring customer consent for searches", "An agreement between a regulator and a financial institution requiring corrective action for violations", "A FinCEN directive to file SARs on specific customers", "A OFAC-mandated blocking of customer assets"],
    answer: 1,
    explanation: "A consent order (or consent agreement) is a formal enforcement action where a financial institution agrees to take specific corrective actions to address BSA/AML compliance deficiencies."
  },
  {
    id: 85,
    category: "Regulatory Framework",
    question: "What is a 'deferred prosecution agreement' (DPA)?",
    options: ["A plea agreement where charges are permanently dropped", "An agreement allowing a company to avoid prosecution if it meets certain conditions for a defined period", "A regulatory consent order requiring compliance improvements", "An agreement between banks to share SAR information"],
    answer: 1,
    explanation: "A DPA allows prosecutors to defer criminal charges against a company in exchange for meeting certain conditions (e.g., paying a fine, cooperating with investigation, improving compliance) over a defined period."
  },

  // TERRORIST FINANCING
  {
    id: 86,
    category: "Terrorist Financing",
    question: "What is a key difference between money laundering and terrorist financing?",
    options: ["Terrorist financing always involves large amounts while money laundering involves small amounts", "Money laundering involves making dirty money look clean; terrorist financing may use clean funds for illegal purposes", "Terrorist financing is not covered by the BSA", "Money laundering is only a civil violation while terrorist financing is a criminal one"],
    answer: 1,
    explanation: "A critical distinction is that terrorist financing may use legitimately derived funds (e.g., donations, business income) for illegal terrorist purposes, while money laundering focuses on disguising illegally obtained money."
  },
  {
    id: 87,
    category: "Terrorist Financing",
    question: "What are 'hawaladars' and why are they relevant to AML?",
    options: ["Informal money transfer brokers used in hawala networks that operate outside formal financial systems", "FinCEN-designated high-risk financial institutions", "Cryptocurrency mixing service operators", "MSB operators specializing in payroll services"],
    answer: 0,
    explanation: "Hawaladars are brokers in the hawala (or hundi) informal value transfer system, which operates based on trust and a network of brokers, leaving minimal paper trail and posing significant ML/TF risks."
  },
  {
    id: 88,
    category: "Terrorist Financing",
    question: "What are 'charities' and 'NPOs' a risk for in the context of terrorist financing?",
    options: ["Embezzlement by executives", "Being used as conduits for terrorist financing, either knowingly or unknowingly", "Tax fraud relating to non-profit status", "Money laundering through charity auctions"],
    answer: 1,
    explanation: "Non-profit organizations can be misused for terrorist financing because they raise funds from the public, operate internationally, and may receive cash donations — all factors that create ML/TF vulnerabilities."
  },
  {
    id: 89,
    category: "Terrorist Financing",
    question: "What is 'self-radicalization financing' in the context of terrorist threats?",
    options: ["State-sponsored financing of terrorist activities", "Individuals financing their own small-scale attacks using personal funds, making detection harder", "Corporate funding of extremist political movements", "Foreign government financing channeled through charities"],
    answer: 1,
    explanation: "Lone-wolf or self-radicalized individuals may finance their own attacks using small amounts of personal funds, credit cards, or small transactions that are difficult to detect through traditional AML monitoring."
  },
  {
    id: 90,
    category: "Terrorist Financing",
    question: "Which FATF Recommendation specifically addresses terrorist financing?",
    options: ["Recommendation 1", "Recommendation 5", "Recommendation 10", "Recommendation 20"],
    answer: 1,
    explanation: "FATF Recommendation 5 requires countries to criminalize the financing of terrorism in line with the UN Convention for the Suppression of the Financing of Terrorism."
  },

  // CRYPTOCURRENCY & VIRTUAL ASSETS
  {
    id: 91,
    category: "Virtual Assets",
    question: "What does VASP stand for in the crypto AML context?",
    options: ["Virtual Asset Safety Protocol", "Virtual Asset Service Provider", "Verified Account Security Program", "Variable Asset Settlement Platform"],
    answer: 1,
    explanation: "VASP stands for Virtual Asset Service Provider — companies that conduct virtual asset activities such as exchanges, wallet custodians, and token issuers. VASPs are subject to AML requirements."
  },
  {
    id: 92,
    category: "Virtual Assets",
    question: "Which FATF guidance document extended the Travel Rule to virtual asset transfers?",
    options: ["FATF Recommendation 15 and its interpretive note", "FATF Recommendation 7", "FATF Recommendation 16 exclusively", "FATF's 2012 core recommendations"],
    answer: 0,
    explanation: "FATF Recommendation 15 and its updated interpretive note (2019) extended AML/CFT requirements, including the Travel Rule, to virtual assets and VASPs."
  },
  {
    id: 93,
    category: "Virtual Assets",
    question: "What is 'blockchain analytics' and how is it used in AML?",
    options: ["Software for managing blockchain database backends", "Tools that analyze public blockchain transaction data to trace the flow of virtual assets and identify suspicious activity", "A method of encrypting SAR filings", "A cryptocurrency exchange compliance platform"],
    answer: 1,
    explanation: "Blockchain analytics tools (e.g., Chainalysis, Elliptic) allow compliance teams and law enforcement to trace virtual asset transactions on public blockchains and identify links to illicit activity."
  },
  {
    id: 94,
    category: "Virtual Assets",
    question: "What are 'mixers' or 'tumblers' in cryptocurrency?",
    options: ["Hardware wallets for storing multiple cryptocurrencies", "Services that pool and mix crypto transactions to obscure the trail between sending and receiving addresses", "Cryptocurrency exchange platforms with high trading volumes", "AI systems that detect suspicious crypto transactions"],
    answer: 1,
    explanation: "Crypto mixers/tumblers obscure the blockchain trail by pooling multiple transactions, making it difficult to trace the original source of funds — commonly used for money laundering."
  },
  {
    id: 95,
    category: "Virtual Assets",
    question: "FinCEN classified money transmitters to include which type of crypto activity?",
    options: ["Crypto mining", "Holding personal cryptocurrency", "Exchanging virtual currency for real currency or conducting transactions as a business", "Using crypto for personal purchases"],
    answer: 2,
    explanation: "In its 2013 guidance, FinCEN clarified that exchanging virtual currency for real currency (or vice versa) as a business, or transmitting virtual currency as a business, constitutes money transmission subject to BSA requirements."
  },

  // AML PROGRAM COMPONENTS & GOVERNANCE
  {
    id: 96,
    category: "AML Program & Governance",
    question: "What is the 'fifth pillar' added to the BSA AML program requirements by FinCEN's 2016 CDD Rule?",
    options: ["Cryptocurrency monitoring", "Customer due diligence, including beneficial ownership identification", "SAR narrative quality standards", "Real-time transaction monitoring"],
    answer: 1,
    explanation: "FinCEN's 2016 CDD Rule effectively added a fifth pillar to the BSA AML program: Customer Due Diligence (CDD), including the identification and verification of beneficial owners of legal entity customers."
  },
  {
    id: 97,
    category: "AML Program & Governance",
    question: "What is the role of the BSA/AML Compliance Officer?",
    options: ["To handle all customer complaints regarding suspicious activity", "To ensure the institution's BSA/AML program is adequate and current, manage compliance, and coordinate with regulators", "To personally review every SAR filed by the institution", "To serve as a liaison with the FBI on financial crime investigations"],
    answer: 1,
    explanation: "The BSA/AML Compliance Officer is responsible for day-to-day management of the AML program, ensuring its adequacy, managing SAR and CTR processes, and serving as the primary regulatory contact."
  },
  {
    id: 98,
    category: "AML Program & Governance",
    question: "How frequently should AML training be provided to employees?",
    options: ["Once at hire only", "Annually at minimum", "Every 5 years", "Only when regulations change"],
    answer: 1,
    explanation: "BSA/AML regulations require ongoing training at least annually for all employees, with additional role-specific training for those in higher-risk positions."
  },
  {
    id: 99,
    category: "AML Program & Governance",
    question: "What is an 'independent AML audit'?",
    options: ["An internal review conducted by the compliance team", "An objective evaluation of the AML program by personnel not involved in day-to-day compliance", "An OFAC examination of the institution's sanctions program", "A FinCEN-mandated review of SAR filings"],
    answer: 1,
    explanation: "The independent audit (one of the four BSA pillars) must be conducted by individuals not involved in day-to-day BSA/AML compliance to objectively assess the program's effectiveness."
  },
  {
    id: 100,
    category: "AML Program & Governance",
    question: "What is a 'culture of compliance' in an AML context?",
    options: ["A written policy manual distributed to all employees", "An organizational environment where AML compliance is valued at all levels including senior management and the board", "A compliance training certification program", "A FinCEN-approved AML standard"],
    answer: 1,
    explanation: "A culture of compliance means that compliance is not just a box-checking exercise but a genuine organizational priority supported by senior management, the board, and all staff — often described as 'tone from the top.'"
  },

  // INTERVIEW PREP & SCENARIO-BASED
  {
    id: 101,
    category: "Interview Prep",
    question: "An enrolled agent's tax expertise is valuable in AML primarily because:",
    options: ["Tax agents are automatically licensed as AML professionals", "Understanding financial flows, tax structures, and financial documents directly supports transaction analysis and red flag identification", "Enrolled agents can file SARs without a BSA officer", "Tax expertise qualifies as the independent audit component of an AML program"],
    answer: 1,
    explanation: "An enrolled agent's deep knowledge of financial structures, tax filings, entity formations, and financial documentation directly translates to analyzing suspicious transactions and understanding complex financial arrangements."
  },
  {
    id: 102,
    category: "Interview Prep",
    question: "In an AML analyst interview, when asked 'What is your process for investigating a suspicious activity alert?', the best answer includes:",
    options: ["Immediately filing a SAR for every alert", "Reviewing the alert, gathering customer profile information, analyzing transaction history, consulting with colleagues, and making a documented disposition decision", "Closing all alerts that don't involve cash transactions", "Forwarding all alerts directly to law enforcement"],
    answer: 1,
    explanation: "A thorough alert investigation includes: reviewing the alert details, pulling the customer risk profile and KYC information, analyzing historical transactions, checking internal and external databases, documenting findings, and making a reasoned disposition."
  },
  {
    id: 103,
    category: "Interview Prep",
    question: "What is 'Know Your Employee' (KYE)?",
    options: ["An HR performance review process", "An internal control that monitors employees' financial activities and behavior to detect insider threats", "A training certification for AML analysts", "A regulatory requirement for background checks"],
    answer: 1,
    explanation: "KYE refers to monitoring employee financial activities, lifestyle changes, and behavior patterns to detect potential insider threats such as employees accepting bribes or assisting in money laundering."
  },
  {
    id: 104,
    category: "Interview Prep",
    question: "What does 'reasonable basis' for filing a SAR mean?",
    options: ["The institution knows with certainty a crime occurred", "There are facts or circumstances that indicate possible illegal activity, even if not conclusive", "Law enforcement has confirmed criminal activity", "The transaction amount exceeds $25,000"],
    answer: 1,
    explanation: "A SAR should be filed when there is a 'reasonable basis' to suspect illegal activity — not a certainty. The standard is lower than probable cause; compliance staff should 'file and let law enforcement decide.'"
  },
  {
    id: 105,
    category: "Interview Prep",
    question: "What is the difference between AML and fraud investigations at a financial institution?",
    options: ["There is no difference; they are the same function", "AML focuses on regulatory reporting (SARs/CTRs) and suspicious transaction patterns; fraud focuses on direct financial losses to the institution or customers", "Fraud is handled by law enforcement; AML is handled internally", "AML only covers international transactions; fraud covers domestic ones"],
    answer: 1,
    explanation: "AML investigations focus on detecting and reporting suspicious activity that may indicate money laundering or terrorist financing (a regulatory function), while fraud investigations focus on direct financial crime losses to the institution or its customers."
  },
  {
    id: 106,
    category: "Interview Prep",
    question: "As a new AML analyst, you notice your manager consistently closes alerts without adequate investigation. What should you do?",
    options: ["Follow your manager's lead to avoid conflict", "Document your concerns and escalate through appropriate channels (e.g., compliance hotline, Chief Compliance Officer, or regulatory contact)", "Immediately file a personal SAR with FinCEN", "Resign to avoid personal liability"],
    answer: 1,
    explanation: "Compliance professionals have an ethical obligation to escalate compliance concerns through appropriate internal channels, and institutions are required to have escalation mechanisms. Regulators expect employees to raise concerns."
  },
  {
    id: 107,
    category: "Interview Prep",
    question: "What does 'SAR narrative quality' refer to?",
    options: ["The length of the SAR description", "The clarity and completeness of the written explanation of why the activity is suspicious, including the who, what, when, where, why, and how", "Whether the SAR was filed on time", "The SAR's database classification code"],
    answer: 1,
    explanation: "A high-quality SAR narrative clearly articulates the suspicious activity by addressing the 5 Ws and H: who is involved, what occurred, when it happened, where transactions were conducted, why it's suspicious, and how the scheme worked."
  },
  {
    id: 108,
    category: "Interview Prep",
    question: "What is 'AML typology' and why is it important?",
    options: ["A classification system for financial institutions", "A documented pattern or method of money laundering that helps analysts identify similar suspicious activity", "A regulatory reporting category for FinCEN", "A risk scoring methodology for transaction monitoring systems"],
    answer: 1,
    explanation: "AML typologies are documented money laundering methods/patterns (e.g., real estate layering, trade-based ML, crypto mixing) that serve as reference points for training, system calibration, and investigation."
  },
  {
    id: 109,
    category: "Interview Prep",
    question: "In the ACAMS CAMS exam, the passing score is approximately:",
    options: ["65%", "70%", "75%", "80%"],
    answer: 2,
    explanation: "The CAMS exam uses a scaled scoring system. The passing standard is approximately 75% correct answers, though ACAMS reports a scaled score. Candidates should aim for thorough preparation across all ACAMS study guide chapters."
  },
  {
    id: 110,
    category: "Interview Prep",
    question: "What is 'layering through professional services'?",
    options: ["Using lawyers, accountants, and consultants to create complex financial structures that obscure the trail of illicit funds", "Hiring professionals to conduct AML audits", "Using multiple compliance officers to review SAR filings", "Outsourcing transaction monitoring to third-party vendors"],
    answer: 0,
    explanation: "Criminals use professional services (lawyers, accountants, real estate agents, trust companies) to create complex corporate structures, trusts, and transactions that obscure the beneficial ownership and movement of illicit funds."
  },

  // ADDITIONAL TOPICS (111–200)
  {
    id: 111,
    category: "Bank Secrecy Act",
    question: "What is the purpose of FinCEN Form 104 (CTR)?",
    options: ["To report suspicious transactions", "To report currency transactions over $10,000", "To register as a money services business", "To report foreign bank account holdings"],
    answer: 1,
    explanation: "FinCEN Form 104 is the Currency Transaction Report (CTR) used to report cash transactions exceeding $10,000 in a single business day."
  },
  {
    id: 112,
    category: "Bank Secrecy Act",
    question: "What is the FBAR (FinCEN Form 114)?",
    options: ["A SAR for foreign bank activity", "A report filed by U.S. persons with financial interest in or signature authority over foreign bank accounts exceeding $10,000", "An AML program certification filed with FinCEN", "A form used to exempt customers from CTR requirements"],
    answer: 1,
    explanation: "The FBAR (Foreign Bank Account Report) must be filed annually by U.S. persons who have financial interest in or signature authority over foreign financial accounts with an aggregate value exceeding $10,000 at any point during the calendar year."
  },
  {
    id: 113,
    category: "KYC / CDD",
    question: "What is 'perpetual KYC' (pKYC)?",
    options: ["A one-time KYC review completed at account opening", "Continuous, real-time updating of customer information and risk profiles rather than periodic reviews", "A regulatory requirement for annual CIP renewals", "An OFAC screening process"],
    answer: 1,
    explanation: "Perpetual KYC (pKYC) is an emerging approach that uses technology to continuously update customer risk profiles and information rather than conducting periodic static reviews."
  },
  {
    id: 114,
    category: "Money Laundering",
    question: "What is 'loan-back' as a money laundering technique?",
    options: ["Refinancing a mortgage to extract equity", "Using illicit funds as collateral for a legitimate loan, then repaying it with clean money", "Using a home equity line of credit for money laundering", "Fraudulently obtaining business loans"],
    answer: 1,
    explanation: "In a loan-back scheme, criminals place dirty money in an offshore account or with a complicit lender, then borrow that money back as a 'loan' — receiving clean funds while the dirty money provides the collateral."
  },
  {
    id: 115,
    category: "Money Laundering",
    question: "What is 'black market peso exchange' (BMPE)?",
    options: ["Currency exchange through unofficial street vendors", "A trade-based money laundering method where drug proceeds in the U.S. are used to purchase U.S. goods for export to Latin America", "A sanctions evasion method involving Colombian banks", "Cryptocurrency laundering through Latin American exchanges"],
    answer: 1,
    explanation: "BMPE is one of the most common drug money laundering methods in the Western Hemisphere. U.S. drug proceeds are exchanged through peso brokers who use those dollars to purchase U.S. goods exported to Latin America, converting dirty dollars into clean pesos."
  },
  {
    id: 116,
    category: "Regulatory Framework",
    question: "What is 'willful blindness' in the AML context?",
    options: ["An employee who is unaware of AML regulations", "Deliberately ignoring red flags or refusing to investigate suspicious activity to avoid knowledge of a crime", "A medical condition affecting AML analysts", "A legal defense for financial institutions facing AML penalties"],
    answer: 1,
    explanation: "Willful blindness (deliberate ignorance) occurs when someone takes deliberate steps to avoid learning about suspicious activity. Courts have found willful blindness can support criminal knowledge in money laundering cases."
  },
  {
    id: 117,
    category: "Risk-Based Approach",
    question: "Which of the following businesses is typically classified as a 'cash-intensive business' for AML risk purposes?",
    options: ["A law firm", "A car dealership accepting only financed purchases", "A restaurant, bar, or nightclub", "An online software company"],
    answer: 2,
    explanation: "Cash-intensive businesses like restaurants, bars, nightclubs, car washes, and laundromats present higher ML risk because they handle large volumes of cash, making it easier to commingle illicit funds."
  },
  {
    id: 118,
    category: "Risk-Based Approach",
    question: "What is 'geographic risk' in AML?",
    options: ["The physical security risk of a bank branch location", "Risk arising from a customer's connections to high-risk countries or jurisdictions", "The risk of processing international wire transfers", "Exposure to natural disasters affecting financial operations"],
    answer: 1,
    explanation: "Geographic risk considers a customer's country of origin, the countries they transact with, and whether those jurisdictions appear on risk lists (FATF grey/black lists, OFAC, high-corruption indices)."
  },
  {
    id: 119,
    category: "AML Program & Governance",
    question: "What is a 'look-back review' in BSA/AML compliance?",
    options: ["An annual review of historical SAR filings", "A retroactive review of transactions when a new risk is identified or a compliance failure is discovered", "A periodic audit of KYC documentation quality", "A review of prior-year CTR filings for accuracy"],
    answer: 1,
    explanation: "A look-back review is a retroactive analysis of transactions or customer relationships — often required by regulators — when a compliance deficiency is discovered or a new money laundering risk is identified."
  },
  {
    id: 120,
    category: "AML Program & Governance",
    question: "What is the significance of the 'tone at the top' in AML compliance?",
    options: ["Having the compliance officer located on the top floor of the building", "Senior management and board commitment to AML compliance that sets the culture and drives resources throughout the organization", "The requirement that all SAR decisions be approved by the CEO", "Senior management exemption from AML training requirements"],
    answer: 1,
    explanation: "Regulatory guidance consistently emphasizes that effective AML programs require senior management and board-level commitment ('tone at the top') to foster a genuine culture of compliance rather than checkbox compliance."
  },
  {
    id: 121,
    category: "Correspondent Banking",
    question: "What is 'shell bank' prohibition under the USA PATRIOT Act?",
    options: ["Prohibition on correspondent accounts for foreign banks with no physical presence in any country", "A ban on offshore banking in shell company jurisdictions", "Prohibition of accounts for entities with 'shell' in their legal name", "A restriction on accounts for foreign real estate entities"],
    answer: 0,
    explanation: "Section 313 of the PATRIOT Act prohibits U.S. financial institutions from maintaining correspondent accounts for foreign shell banks — banks with no physical presence in any country."
  },
  {
    id: 122,
    category: "Correspondent Banking",
    question: "What is a 'Wolfsberg Correspondent Banking Due Diligence Questionnaire' (CBDDQ)?",
    options: ["An internal KYC form used for retail customers", "A standardized questionnaire used by correspondent banks to gather AML/KYC information from respondent banks", "A FinCEN-mandated form for international wire transfers", "A FATF assessment tool for national AML reviews"],
    answer: 1,
    explanation: "The Wolfsberg CBDDQ is an industry-standard questionnaire used when establishing or maintaining correspondent banking relationships, gathering comprehensive information about the respondent bank's AML program and risk profile."
  },
  {
    id: 123,
    category: "Virtual Assets",
    question: "What is 'DeFi' and why does it pose AML challenges?",
    options: ["Defined Financing — a term for traditional bank products", "Decentralized Finance — peer-to-peer financial services on blockchain that often lack centralized AML controls", "Derivative Financial Instruments — complex investment products", "Default Financial Infrastructure — banking industry terminology"],
    answer: 1,
    explanation: "DeFi (Decentralized Finance) operates without traditional intermediaries on blockchain networks, making it challenging to apply standard AML/KYC controls since there may be no identifiable entity to hold accountable."
  },
  {
    id: 124,
    category: "Virtual Assets",
    question: "What is the purpose of 'travel rule' compliance for VASPs?",
    options: ["Ensuring crypto can be used for travel bookings", "Requiring VASPs to pass sender and beneficiary information with virtual asset transfers above a threshold", "Restricting cross-border crypto transactions for sanctioned countries", "Requiring VASPs to report all transactions to FinCEN"],
    answer: 1,
    explanation: "The FATF Travel Rule for VASPs (extended by Recommendation 15) requires VASPs to obtain and transmit originator and beneficiary information with virtual asset transfers above the threshold (typically $1,000/$3,000 depending on jurisdiction)."
  },
  {
    id: 125,
    category: "Terrorist Financing",
    question: "What is the 'three-stage model' of terrorist financing?",
    options: ["Placement, Layering, Integration — same as money laundering", "Raising funds, Moving funds, Using funds", "Identification, Radicalization, Financing", "Collection, Transfer, Deployment"],
    answer: 1,
    explanation: "Terrorist financing is often described in three stages: (1) Raising funds (donations, crime, state sponsorship), (2) Moving funds (often through informal channels, NGOs, or formal banking), and (3) Using funds (for operations, logistics, recruitment)."
  },
  {
    id: 126,
    category: "PEPs & Sanctions",
    question: "What is 'secondary sanctions' exposure?",
    options: ["Sanctions applied by a foreign country on U.S. entities", "Risk of being sanctioned by the U.S. for doing business with sanctioned countries or parties, even if the underlying transaction is non-U.S.", "State-level sanctions that supplement federal OFAC programs", "Sanctions applying only to secondary market transactions"],
    answer: 1,
    explanation: "Secondary sanctions (e.g., under the Iran and Russia programs) can apply to non-U.S. persons and entities conducting certain transactions with sanctioned countries, expanding OFAC's reach beyond direct U.S. nexus."
  },
  {
    id: 127,
    category: "FATF & International Standards",
    question: "What is the 'risk-based approach' under FATF Recommendation 1?",
    options: ["Eliminating all high-risk customers from banking", "Countries and institutions should identify, assess, and understand their ML/TF risks and take measures commensurate with those risks", "Applying the same due diligence to all customers", "Filing a SAR for every transaction above a set threshold"],
    answer: 1,
    explanation: "FATF Recommendation 1 — the foundation of the FATF framework — requires countries and financial institutions to apply a risk-based approach: identifying and understanding risks and proportionately allocating resources to manage them."
  },
  {
    id: 128,
    category: "Regulatory Framework",
    question: "What is the 'examine for BSA compliance' process that U.S. regulators follow?",
    options: ["A random audit of financial institution employees", "A structured examination reviewing the institution's four BSA pillars, SAR/CTR filings, and transaction monitoring", "A review exclusively focused on OFAC screening", "An automated review of all CTR filings"],
    answer: 1,
    explanation: "BSA examinations assess whether the institution has adequate AML policies, procedures, and controls across its four pillars; reviews SAR and CTR filing quality; evaluates transaction monitoring; and assesses CDD/KYC practices."
  },
  {
    id: 129,
    category: "Transaction Monitoring",
    question: "What is 'scenario-based monitoring' in AML?",
    options: ["Running compliance training simulations", "Using predefined rule-based scenarios (e.g., 'account received 10+ cash deposits in 30 days') to trigger alerts", "Monitoring specific high-risk scenarios identified by FinCEN", "Building case scenarios for SAR narratives"],
    answer: 1,
    explanation: "Scenario-based monitoring uses predefined rules or patterns (e.g., rapid movement of funds, multiple cash deposits just below threshold) that trigger automated alerts when customer activity matches the scenario."
  },
  {
    id: 130,
    category: "Transaction Monitoring",
    question: "What is 'peer group analysis' in transaction monitoring?",
    options: ["Comparing an analyst's performance to their colleagues", "Comparing a customer's transaction patterns to those of similar customers to identify anomalies", "Reviewing transactions of employees who work together", "Benchmarking an institution's SAR filing rate against industry peers"],
    answer: 1,
    explanation: "Peer group analysis compares a customer's transaction behavior to a group of similar customers (by industry, geography, account type) — flagging deviations from the peer group as potentially suspicious."
  },
  {
    id: 131,
    category: "AML Program & Governance",
    question: "What is a 'compliance risk assessment'?",
    options: ["An assessment of a customer's criminal history", "A periodic evaluation of the institution's overall AML/BSA risk exposure and program adequacy", "A review of individual employee compliance violations", "An OFAC screening of the institution's customer base"],
    answer: 1,
    explanation: "An AML Compliance Risk Assessment (also called a BSA Risk Assessment) evaluates the institution's inherent risk from products, customers, geographies, and delivery channels, and assesses the adequacy of controls to mitigate those risks."
  },
  {
    id: 132,
    category: "Bank Secrecy Act",
    question: "What is a 'Designation of Exempt Person' (DEP)?",
    options: ["Identifying customers exempt from CIP requirements", "A formal exemption filed with FinCEN relieving certain customers from CTR requirements", "Designating a compliance officer as the responsible BSA officer", "Identifying transactions exempt from SAR review"],
    answer: 1,
    explanation: "A DEP is a formal filing that exempts eligible customers (e.g., other banks, government agencies, listed companies, established businesses) from CTR filing requirements for routine cash transactions."
  },
  {
    id: 133,
    category: "Money Laundering",
    question: "What is 'invoice fraud' or 'over-invoicing' in trade-based money laundering?",
    options: ["Billing customers more than the agreed price", "Submitting inflated invoices for goods or services to transfer value internationally and disguise illicit funds", "Fraudulent insurance claim submissions", "Overbilling government contracts"],
    answer: 1,
    explanation: "Over-invoicing in TBML involves inflating the stated value of goods/services on trade documents so the excess payment transfers illicit value internationally while appearing to be a legitimate trade transaction."
  },
  {
    id: 134,
    category: "Interview Prep",
    question: "In an AML role interview, what does 'following the money' mean?",
    options: ["Tracking currency exchange rates", "Tracing the flow of funds from source to destination to identify suspicious patterns and links to criminal activity", "Monitoring market interest rates affecting deposits", "Following internal fund transfer procedures"],
    answer: 1,
    explanation: "Following the money is a core AML analytical skill — tracing how funds move through accounts, entities, and jurisdictions to identify the source, beneficiary, and possible criminal purpose of suspicious transactions."
  },
  {
    id: 135,
    category: "Interview Prep",
    question: "What is 'network analysis' in AML investigations?",
    options: ["Analyzing a financial institution's IT network security", "Mapping relationships between individuals, entities, accounts, and transactions to identify suspicious connections", "Reviewing social media networks for customer due diligence", "Analyzing the network of AML compliance officers"],
    answer: 1,
    explanation: "Network analysis (link analysis) maps connections between people, accounts, transactions, and entities to identify previously unknown relationships and patterns that may indicate money laundering schemes."
  },
  {
    id: 136,
    category: "KYC / CDD",
    question: "What is 'beneficial ownership' in the context of the CDD Rule?",
    options: ["The customer who most benefits from financial institution services", "The natural person(s) who ultimately own or control a legal entity or on whose behalf a transaction is being conducted", "The trustee of a charitable trust", "The majority shareholder of a publicly listed company"],
    answer: 1,
    explanation: "Beneficial ownership refers to the natural person(s) who ultimately own or control a legal entity (25%+ ownership) or who exercise significant managerial control, requiring identification and verification under the CDD Rule."
  },
  {
    id: 137,
    category: "PEPs & Sanctions",
    question: "What is an 'ownership or control' test for sanctions screening?",
    options: ["Testing whether a customer controls their own account", "Identifying whether sanctioned persons own 50%+ of an entity — which results in the entity itself being treated as blocked", "An OFAC test for whether an institution controls sanctioned assets", "A compliance test for management control of the AML program"],
    answer: 1,
    explanation: "Under OFAC's 50% Rule, if sanctioned persons own 50% or more of an entity, that entity is also treated as blocked/sanctioned even if not explicitly on the SDN list."
  },
  {
    id: 138,
    category: "FATF & International Standards",
    question: "What is 'correspondent banking de-risking' and what problem does it create?",
    options: ["Reducing fees for correspondent relationships", "Global banks exiting correspondent relationships with banks in high-risk jurisdictions, which can push those transactions to unregulated channels", "Improving the risk management of correspondent banking", "FATF's de-listing process for grey-list countries"],
    answer: 1,
    explanation: "De-risking — global banks cutting off correspondent relationships with high-risk jurisdictions — can push legitimate transactions to less regulated channels, potentially worsening financial exclusion and AML risk."
  },
  {
    id: 139,
    category: "Regulatory Framework",
    question: "What is a 'matter requiring attention' (MRA) in a BSA examination?",
    options: ["A critical examination finding requiring immediate corrective action", "A finding that represents a significant deficiency that requires attention but is not severe enough to be a 'matter requiring immediate attention'", "A routine suggestion from an examiner", "A finding related to a specific customer's suspicious activity"],
    answer: 1,
    explanation: "An MRA is an examiner finding indicating a significant deficiency in a financial institution's BSA/AML program that requires remediation, though it is less severe than a 'matter requiring immediate attention' (MRIA)."
  },
  {
    id: 140,
    category: "AML Program & Governance",
    question: "What is the difference between a 'rule-based' and 'AI/ML-based' transaction monitoring approach?",
    options: ["Rule-based is faster; AI-based is more accurate in all cases", "Rule-based uses predefined thresholds and patterns; AI/ML-based learns from data to detect anomalies without explicitly programmed rules", "AI-based systems are required by FinCEN; rule-based are optional", "They produce the same results but at different costs"],
    answer: 1,
    explanation: "Rule-based systems apply fixed thresholds and scenarios, generating alerts when rules are triggered. AI/ML systems learn from historical data to identify patterns and anomalies that rules might miss, typically producing fewer false positives."
  },
  {
    id: 141,
    category: "Bank Secrecy Act",
    question: "What is the MSB Registration requirement under the BSA?",
    options: ["MSBs must register with FinCEN and renew every 2 years", "MSBs must register with OFAC before operating", "MSBs must file monthly reports with the Federal Reserve", "MSBs are exempt from all BSA requirements"],
    answer: 0,
    explanation: "Most MSBs must register with FinCEN within 180 days of starting business and must renew their registration every 2 years."
  },
  {
    id: 142,
    category: "Money Laundering",
    question: "What is 'gatekeeping' in AML?",
    options: ["Restricting public access to financial records", "The role of professionals (lawyers, accountants, notaries) who control access to financial services and can either prevent or enable money laundering", "Checking customer IDs at bank branches", "Approving SAR filings before submission"],
    answer: 1,
    explanation: "Gatekeepers are professionals who control access to financial systems and services. Their position makes them both critical in preventing ML (by identifying suspicious clients) and potentially risky (if knowingly or unknowingly facilitating ML)."
  },
  {
    id: 143,
    category: "Interview Prep",
    question: "What does 'due diligence on a transaction' mean in AML?",
    options: ["Verifying that a transaction was processed correctly", "Investigating the purpose, parties, and legitimacy of a transaction to determine whether it presents ML/TF risk", "Confirming a transaction's compliance with exchange rates", "Reviewing a transaction for accounting accuracy"],
    answer: 1,
    explanation: "Transaction due diligence involves analyzing a specific transaction to understand its purpose, the parties involved, the source of funds, and whether the activity is consistent with the customer's known profile and business."
  },
  {
    id: 144,
    category: "Regulatory Framework",
    question: "What is 'FINRA Rule 3310'?",
    options: ["A rule requiring broker-dealers to maintain anti-money laundering compliance programs", "A rule prohibiting insider trading at broker-dealers", "A rule requiring all securities trades to be reported to FinCEN", "A customer identification rule for securities firms"],
    answer: 0,
    explanation: "FINRA Rule 3310 requires FINRA member broker-dealers to develop and implement written AML compliance programs reasonably designed to achieve and monitor compliance with the BSA and its implementing regulations."
  },
  {
    id: 145,
    category: "KYC / CDD",
    question: "What is a 'risk-based periodic review' of customers?",
    options: ["Annual review of all customers regardless of risk", "Reviewing customer information and activity at intervals based on the customer's risk rating (more frequent for high-risk)", "A regulatory requirement to review all accounts monthly", "A quarterly review of CTR exemptions"],
    answer: 1,
    explanation: "Risk-based periodic reviews schedule re-review of customer KYC information and activity based on their risk rating — high-risk customers are reviewed more frequently than low-risk customers."
  },
  {
    id: 146,
    category: "Transaction Monitoring",
    question: "What is a 'Case Management System' (CMS) in AML?",
    options: ["A system for managing legal cases against the institution", "A software platform that tracks AML investigation workflow, documents evidence, and records dispositions for alerts and SARs", "A customer relationship management platform", "A regulatory reporting platform for FinCEN submissions"],
    answer: 1,
    explanation: "A CMS (or AML investigation platform) enables compliance teams to track alert investigations from initial review through disposition, document evidence, manage SAR filings, and produce management reports."
  },
  {
    id: 147,
    category: "Money Laundering",
    question: "What is 'mirror trading' and why was it notable in AML?",
    options: ["Copying a competitor bank's investment strategy", "A scheme where matched buy/sell orders in different currencies or markets are used to move funds across borders, as highlighted in Deutsche Bank's case", "Reflecting market conditions in transaction monitoring rules", "Trading securities at artificially equal prices"],
    answer: 1,
    explanation: "Mirror trading involves matching buy and sell orders (e.g., buying securities in rubles in Moscow while selling equivalent securities for dollars in London), effectively transferring value across borders. Deutsche Bank paid $630M in fines for facilitating a $10 billion Russian mirror trading scheme."
  },
  {
    id: 148,
    category: "FATF & International Standards",
    question: "What is the FATF's 'Recommendation 12' focused on?",
    options: ["Shell banks", "Politically Exposed Persons (PEPs)", "Wire transfers", "Cash couriers"],
    answer: 1,
    explanation: "FATF Recommendation 12 requires countries to put in place measures to prevent the misuse of their financial systems by PEPs, requiring enhanced due diligence for domestic PEPs, foreign PEPs, and PEPs of international organizations."
  },
  {
    id: 149,
    category: "Correspondent Banking",
    question: "What is 'due diligence on correspondent banking relationships' required to include?",
    options: ["Credit analysis of the correspondent bank", "Information about the respondent bank's ownership, AML program, regulatory status, and customer base", "A review of the correspondent bank's loan portfolio", "Analysis of the correspondent bank's capital ratios"],
    answer: 1,
    explanation: "Due diligence on correspondent banking relationships must assess the respondent bank's ownership/management, AML/BSA program, regulatory oversight, SAR filings, and the nature of customers it serves."
  },
  {
    id: 150,
    category: "Interview Prep",
    question: "If a customer comes in to deposit $9,500 cash and tells you 'I don't want to fill out any government forms,' what should you do?",
    options: ["Accept the deposit since it is below the $10,000 threshold", "Refuse the deposit and call law enforcement immediately", "Note the customer's statement, file a SAR for structuring indicators, and potentially still file a CTR if threshold is met", "Explain that forms are required and accept the deposit without further action"],
    answer: 2,
    explanation: "A customer explicitly trying to avoid government reporting is a significant red flag. The statement should be documented and a SAR filed. The $9,500 may still be part of a structuring pattern requiring a CTR if threshold is met across transactions."
  },
  {
    id: 151,
    category: "AML Program & Governance",
    question: "What is 'model validation' in transaction monitoring?",
    options: ["Verifying customer identification models", "An independent review of monitoring system rules and models to ensure they are working as intended and detecting ML/TF risks", "Validating SAR narratives against FinCEN standards", "Confirming that transaction monitoring software is properly licensed"],
    answer: 1,
    explanation: "Model validation is an independent assessment of a transaction monitoring system's scenarios, rules, and thresholds to ensure they are properly calibrated to detect the institution's specific ML/TF risks."
  },
  {
    id: 152,
    category: "Regulatory Framework",
    question: "What does 'AML program deficiency' typically mean in an exam finding?",
    options: ["The institution failed to file any SARs", "A weakness or gap in the institution's policies, procedures, controls, or practices that creates compliance risk", "Insufficient staff in the compliance department", "Outdated computer systems for transaction processing"],
    answer: 1,
    explanation: "An AML program deficiency is a finding by examiners that a specific element of the institution's AML program is inadequate — e.g., inadequate policies, insufficient monitoring, poor SAR quality, or gaps in customer due diligence."
  },
  {
    id: 153,
    category: "Money Laundering",
    question: "What is 'cyber laundering'?",
    options: ["Hacking into financial systems to steal money", "Using digital platforms, online gaming, e-commerce, or virtual currencies to layer illicit funds", "Laundering the reputation of cybercrime groups", "Using online banking to conduct structuring"],
    answer: 1,
    explanation: "Cyber laundering refers to using digital channels — online gaming platforms, virtual currencies, e-commerce, and dark web marketplaces — to move and layer illicit funds with relative anonymity."
  },
  {
    id: 154,
    category: "KYC / CDD",
    question: "What is the difference between 'simplified due diligence' and 'standard due diligence'?",
    options: ["There is no difference; all customers receive the same level", "Simplified DD applies to lower-risk customers where fewer verification measures are needed; standard DD is the baseline for all others", "Simplified DD is used for domestic customers; standard for foreign ones", "Simplified DD waives identity verification requirements"],
    answer: 1,
    explanation: "A risk-based approach allows simplified/reduced due diligence for lower-risk customers (e.g., government entities, publicly listed companies) where full verification procedures may be scaled back proportionately."
  },
  {
    id: 155,
    category: "FATF & International Standards",
    question: "What does FATF Recommendation 16 ('Wire Transfers') require?",
    options: ["All wire transfers to be reported to national authorities", "That originator and beneficiary information be included with wire transfers and be available to authorities", "Wire transfers above a threshold require pre-approval", "All wire transfers must go through SWIFT"],
    answer: 1,
    explanation: "FATF Recommendation 16 requires that accurate and meaningful originator and beneficiary information accompany wire transfers, and that this information is available to authorities — forming the international basis for the Travel Rule."
  },
  {
    id: 156,
    category: "PEPs & Sanctions",
    question: "What is 'sectoral sanctions' under OFAC?",
    options: ["Sanctions targeting specific industries in a country rather than specific named individuals", "Sanctions applied to foreign banks by the Federal Reserve", "OFAC sanctions targeting financial institutions specifically", "Sanctions applied to specific sections of a sanctioned country's territory"],
    answer: 0,
    explanation: "Sectoral sanctions (e.g., under OFAC's Russia/Ukraine-related programs) target specific economic sectors (energy, defense, finance) of a country, prohibiting certain transactions with entities in those sectors even if they are not on the SDN list."
  },
  {
    id: 157,
    category: "Interview Prep",
    question: "What is the primary reason why tax experience is valuable for a transition to AML compliance?",
    options: ["Tax professionals are already licensed by FinCEN", "Tax work develops deep skills in analyzing financial documents, tracing funds, understanding business structures, and identifying inconsistencies", "Tax professionals are exempt from AML training requirements", "Tax knowledge is required for SAR narrative writing"],
    answer: 1,
    explanation: "Tax experience builds skills directly applicable to AML: analyzing financial statements, tracing fund flows, understanding business and corporate structures, recognizing inconsistencies in financial reporting, and working with complex financial documents."
  },
  {
    id: 158,
    category: "Regulatory Framework",
    question: "What is 'CAMS'?",
    options: ["Certified Anti-Money Laundering Specialist — the primary ACAMS certification", "Compliance and AML Monitoring System", "Currency and Asset Management Standard", "Central AML Surveillance — a FinCEN database"],
    answer: 0,
    explanation: "CAMS (Certified Anti-Money Laundering Specialist) is the flagship certification of ACAMS (Association of Certified Anti-Money Laundering Specialists) and is widely recognized as the gold standard AML professional credential."
  },
  {
    id: 159,
    category: "AML Program & Governance",
    question: "What is a 'Know Your Transaction' (KYT) approach?",
    options: ["A new term for the Travel Rule", "Applying due diligence to individual transactions, especially in crypto, by understanding the purpose, parties, and risk of each transaction", "A FinCEN requirement for all wire transfers", "A transaction review process used at money service businesses"],
    answer: 1,
    explanation: "KYT (Know Your Transaction) extends KYC principles to the transaction level — particularly relevant in crypto compliance where understanding the nature and risk of individual transactions is as important as knowing the customer."
  },
  {
    id: 160,
    category: "Money Laundering",
    question: "What is 'layering through real estate'?",
    options: ["A mortgage fraud scheme", "Using multiple property purchases and sales to create complexity and distance between illicit funds and their criminal source", "Buying multiple floors of a building for money laundering", "Using real estate agent fees to obscure payments"],
    answer: 1,
    explanation: "Real estate layering involves a series of property transactions — often through shell companies — to create layers of complexity and distance between illegal proceeds and their criminal origin."
  },
  {
    id: 161,
    category: "Bank Secrecy Act",
    question: "Under the BSA, who must file a CTR?",
    options: ["Only commercial banks", "Any financial institution that is subject to the BSA, including banks, credit unions, casinos, and MSBs", "Only institutions with federal charters", "Only institutions with assets over $1 billion"],
    answer: 1,
    explanation: "CTR filing is required by all BSA-covered financial institutions, including banks, credit unions, savings associations, casinos, and MSBs."
  },
  {
    id: 162,
    category: "KYC / CDD",
    question: "What is 'adverse media screening'?",
    options: ["Monitoring news for regulatory changes affecting AML programs", "Searching news sources for negative information about customers that may indicate criminal activity, fraud, or reputational risk", "Reviewing social media for evidence of account fraud", "Screening customers for negative credit history"],
    answer: 1,
    explanation: "Adverse media screening (negative news screening) searches news sources, court records, and databases for information about customers that could indicate criminal activity, fraud, or other reputational risks."
  },
  {
    id: 163,
    category: "Regulatory Framework",
    question: "What is a 'cease and desist order' in BSA enforcement?",
    options: ["An order requiring a bank to stop accepting new deposits", "A formal regulatory action requiring an institution to stop specific illegal or unsafe practices and take corrective action", "A FinCEN directive to stop filing SARs pending review", "An OFAC order to cease correspondent banking relationships"],
    answer: 1,
    explanation: "A cease and desist order is a formal enforcement action by a banking regulator requiring an institution to stop a specific unsafe or unsound practice and take remedial action."
  },
  {
    id: 164,
    category: "Interview Prep",
    question: "When explaining your value as an enrolled agent transitioning to AML, you should emphasize:",
    options: ["That you won't need any additional training", "Your experience with financial analysis, complex entity structures, IRS audit processes, and pattern recognition in financial documents", "That you are exempt from CAMS requirements due to your EA license", "That tax work is identical to AML compliance work"],
    answer: 1,
    explanation: "EA experience directly translates to AML skills: analyzing complex financial documents, understanding business/entity structures, following money through transactions, working under regulatory scrutiny, and identifying financial anomalies."
  },
  {
    id: 165,
    category: "Transaction Monitoring",
    question: "What does 'tuning' a transaction monitoring system mean?",
    options: ["Updating the software to the latest version", "Adjusting monitoring rules and thresholds based on alert data and business knowledge to improve effectiveness and reduce false positives", "Connecting the system to external databases", "Training staff on how to use the monitoring system"],
    answer: 1,
    explanation: "System tuning involves reviewing alert data, adjusting thresholds, modifying rules, and calibrating scenarios to ensure the monitoring system is appropriately calibrated — catching genuine suspicious activity while reducing unnecessary alerts."
  },
  {
    id: 166,
    category: "FATF & International Standards",
    question: "What is the 'Palermo Convention'?",
    options: ["A 2001 European banking agreement", "The UN Convention Against Transnational Organized Crime (2000), which required countries to criminalize money laundering", "The founding treaty of FATF", "An Italian banking regulation on AML compliance"],
    answer: 1,
    explanation: "The UN Convention Against Transnational Organized Crime (Palermo Convention, 2000) required signatory countries to criminalize money laundering and is a cornerstone of international AML law."
  },
  {
    id: 167,
    category: "Correspondent Banking",
    question: "What are 'U-turn transactions' in OFAC compliance?",
    options: ["Transactions that are reversed after compliance review", "Transactions passing through U.S. correspondent banks that originate and end outside the U.S. but involve sanctioned countries", "Wire transfers returned to the originator", "Round-trip transactions used for money laundering"],
    answer: 1,
    explanation: "U-turn transactions pass through U.S. banks (typically as dollar clearings) while originating and terminating in foreign countries. These can create OFAC exposure if sanctioned country entities are involved."
  },
  {
    id: 168,
    category: "AML Program & Governance",
    question: "What is 'AML governance'?",
    options: ["The regulatory oversight of AML programs by government agencies", "The internal structure, accountability, and oversight processes within an institution to ensure its AML program is effective", "FATF's framework for evaluating country-level AML programs", "The board approval process for AML policies"],
    answer: 1,
    explanation: "AML governance encompasses the internal structure through which a financial institution oversees its AML program — including board oversight, management accountability, reporting lines, policy approval, and escalation processes."
  },
  {
    id: 169,
    category: "Money Laundering",
    question: "What is a 'straw man' or 'nominee' in money laundering?",
    options: ["A scarecrow placed in front of a bank to deter criminals", "A person who holds assets or conducts transactions on behalf of another to conceal the true owner's identity", "A term for a false SAR filing", "An employee who monitors suspicious transactions"],
    answer: 1,
    explanation: "A straw man or nominee is used to hold assets, open accounts, or conduct transactions on behalf of the true beneficial owner, concealing the real party behind the activity."
  },
  {
    id: 170,
    category: "Regulatory Framework",
    question: "What is the 'FinCEN Exchange'?",
    options: ["A currency exchange service operated by FinCEN", "A public-private partnership where FinCEN shares financial intelligence with financial institutions to combat priority threats", "The FinCEN BSA E-Filing System", "A database of sanctioned entities maintained by FinCEN"],
    answer: 1,
    explanation: "The FinCEN Exchange is a program enabling FinCEN to share strategic intelligence with financial institutions on specific financial crime threats, enabling them to better identify and report related suspicious activity."
  },
  {
    id: 171,
    category: "KYC / CDD",
    question: "What is 'customer lifecycle management' in AML?",
    options: ["Managing customer relationships from birth to death", "The ongoing AML process covering customer onboarding, periodic review, event-driven review, and offboarding", "A marketing approach to retain customers throughout their financial lifecycle", "The process of archiving closed account records"],
    answer: 1,
    explanation: "Customer lifecycle management in AML covers the entire customer relationship: onboarding (CIP/CDD), ongoing monitoring, event-driven reviews (risk changes, adverse news), periodic re-review, and offboarding when the relationship ends."
  },
  {
    id: 172,
    category: "Transaction Monitoring",
    question: "What is 'typology-based monitoring'?",
    options: ["Monitoring based on customer typography and written communications", "Designing monitoring rules based on known money laundering methods (typologies) identified by FATF, FinCEN, and industry bodies", "Monitoring accounts based on their account type classification", "Using standardized typology templates provided by regulators"],
    answer: 1,
    explanation: "Typology-based monitoring designs detection rules around known money laundering patterns (e.g., structured deposits, rapid fund movement, over/under-invoicing) documented by FATF, FinCEN, and industry research."
  },
  {
    id: 173,
    category: "Interview Prep",
    question: "When asked in an interview 'How do you prioritize competing SAR investigations?', the best answer emphasizes:",
    options: ["Handling cases in chronological order", "Prioritizing based on risk factors such as transaction amounts, customer risk rating, SAR filing deadlines, and potential for ongoing activity", "Handling the easiest cases first to meet quotas", "Waiting for law enforcement guidance before prioritizing"],
    answer: 1,
    explanation: "Effective SAR investigation prioritization considers risk indicators (amount, customer risk, SAR deadline, pattern continuity), ensuring that the highest-risk and most time-sensitive cases receive attention first."
  },
  {
    id: 174,
    category: "Regulatory Framework",
    question: "Which law in 1986 first made money laundering a federal crime in the U.S.?",
    options: ["The Bank Secrecy Act", "The Money Laundering Control Act", "The USA PATRIOT Act", "The Currency and Foreign Transactions Reporting Act"],
    answer: 1,
    explanation: "The Money Laundering Control Act of 1986 (18 U.S.C. §§ 1956-1957) first established money laundering as a federal crime in the United States."
  },
  {
    id: 175,
    category: "AML Program & Governance",
    question: "What is an 'enterprise-wide AML risk assessment'?",
    options: ["An assessment of individual employee compliance risk", "A holistic evaluation of AML/BSA risk across all of an institution's business lines, products, geographies, and customer types", "An annual review of AML training completion rates", "A review of all SAR filings for the prior year"],
    answer: 1,
    explanation: "An enterprise-wide AML risk assessment evaluates the institution's complete risk profile — products, services, customers, geographies, delivery channels — and the adequacy of controls to manage those risks."
  },
  {
    id: 176,
    category: "Money Laundering",
    question: "What is 'digital identity fraud' in the AML context?",
    options: ["Hacking into digital banking systems", "Creating fictitious or stolen digital identities to open accounts and conduct financial transactions, facilitating money laundering", "Phishing attacks targeting compliance officers", "Fraudulent digital marketing by financial institutions"],
    answer: 1,
    explanation: "Digital identity fraud involves using synthetic, stolen, or fictitious digital identities to open accounts and conduct transactions, challenging KYC/CIP verification processes and enabling money laundering."
  },
  {
    id: 177,
    category: "FATF & International Standards",
    question: "What is 'the Vienna Convention' relevant to AML?",
    options: ["A European treaty on AML cooperation", "The 1988 UN Convention Against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, which established early money laundering criminalization requirements", "A FATF founding document", "An Austrian banking regulation"],
    answer: 1,
    explanation: "The 1988 Vienna Convention required signatory countries to criminalize drug money laundering and is considered the foundation of the international AML legal framework."
  },
  {
    id: 178,
    category: "Correspondent Banking",
    question: "What is 'concentration account' risk in correspondent banking?",
    options: ["Risk from having too many accounts with one correspondent", "Commingling of funds from multiple customers in a single correspondent account, obscuring beneficial ownership", "Accounts where correspondent banks concentrate their AML risks", "Accounts exceeding regulatory concentration limits"],
    answer: 1,
    explanation: "Concentration accounts pool funds from multiple sources, making it difficult to identify individual customer transactions and beneficial ownership — a significant AML risk in correspondent and private banking."
  },
  {
    id: 179,
    category: "Interview Prep",
    question: "What does 'open-source intelligence' (OSINT) mean in AML investigations?",
    options: ["Using publicly released government intelligence reports", "Gathering information from publicly available sources (news, social media, business registries, court records) to support AML investigations", "A software tool for open-source transaction monitoring", "Intelligence provided by law enforcement to financial institutions"],
    answer: 1,
    explanation: "OSINT in AML involves gathering information from publicly available sources — news databases, social media, business registries, court records, property records — to supplement internal data in customer due diligence and SAR investigations."
  },
  {
    id: 180,
    category: "Virtual Assets",
    question: "What is a 'non-custodial wallet' and why does it create AML challenges?",
    options: ["A wallet lost by its owner", "A crypto wallet where the user holds their own private keys, with no intermediary — making KYC and transaction monitoring difficult", "A wallet provided by a crypto exchange to its customers", "A government-regulated digital wallet"],
    answer: 1,
    explanation: "Non-custodial (self-hosted) wallets allow users to transact directly on the blockchain without going through a regulated VASP, making it difficult to apply traditional AML/KYC controls."
  },
  {
    id: 181,
    category: "Bank Secrecy Act",
    question: "What is a 'multiple transaction log' (MTL) in BSA compliance?",
    options: ["A log of all transactions over $10,000", "A log used to aggregate multiple cash transactions for the same customer in one business day to determine if CTR thresholds are met", "A record of all wire transfers over $3,000", "A daily report of all account activity"],
    answer: 1,
    explanation: "An MTL (or cash transaction log) tracks all cash transactions by a customer throughout the business day, enabling the institution to aggregate amounts and determine if the $10,000 CTR threshold has been reached."
  },
  {
    id: 182,
    category: "KYC / CDD",
    question: "What is 'risk appetite' in AML governance?",
    options: ["How much risk an institution will accept from individual transactions", "The amount and type of AML/compliance risk an institution's board and management is willing to accept in pursuit of its business objectives", "The maximum SAR filing rate an institution will tolerate", "The board's risk tolerance for regulatory enforcement actions"],
    answer: 1,
    explanation: "Risk appetite is a board-level decision defining the types and amounts of risk the institution is willing to accept. In AML, this translates to decisions about which high-risk customer types, products, or geographies to serve."
  },
  {
    id: 183,
    category: "Regulatory Framework",
    question: "What is the ACAMS Study Guide primarily used for?",
    options: ["Daily reference for BSA filing requirements", "Comprehensive preparation for the CAMS certification examination", "An operational manual for AML program management", "A directory of FinCEN regulations"],
    answer: 1,
    explanation: "The ACAMS CAMS Study Guide is the primary preparation resource for the CAMS examination, covering all examination topics including money laundering methods, AML compliance programs, and international standards."
  },
  {
    id: 184,
    category: "Money Laundering",
    question: "What are 'proceeds of crime'?",
    options: ["Profits from legal business operations", "Any economic benefit derived from criminal activity, which money laundering seeks to legitimize", "Assets that are exempt from AML requirements", "Funds recovered by law enforcement in criminal investigations"],
    answer: 1,
    explanation: "Proceeds of crime (or criminal proceeds) are the financial gains from illegal activity — the money that money laundering seeks to disguise as legitimate. AML regimes are designed to detect and prevent these funds from entering the legitimate financial system."
  },
  {
    id: 185,
    category: "Interview Prep",
    question: "What is a 'SAR decision memo' or 'SAR decision document'?",
    options: ["A memo from law enforcement approving a SAR filing", "An internal document recording the analysis, evidence, and rationale for either filing or not filing a SAR", "A FinCEN directive on SAR filing standards", "A summary of all SARs filed in a given period for board review"],
    answer: 1,
    explanation: "A SAR decision document (or no-SAR memo) records the investigation findings and the compliance team's reasoning for either filing a SAR or closing the case without filing. This documentation is critical for regulatory examination purposes."
  },
  {
    id: 186,
    category: "AML Program & Governance",
    question: "What is 'three lines of defense' in compliance governance?",
    options: ["A military-inspired risk management framework used in banking with three distinct lines: business unit (1st), compliance/risk management (2nd), and internal audit (3rd)", "Three levels of SAR review before filing", "Three BSA compliance officers at different levels of the organization", "Three annual AML audits — internal, external, and regulatory"],
    answer: 0,
    explanation: "The three lines of defense model: 1st line = business units own and manage risk; 2nd line = compliance/risk management functions oversee and advise; 3rd line = internal audit provides independent assurance."
  },
  {
    id: 187,
    category: "PEPs & Sanctions",
    question: "What is 'financial exclusion' and its relationship to AML de-risking?",
    options: ["Excluding AML staff from financial decision-making", "When legitimate individuals and businesses are denied access to financial services due to aggressive de-risking practices", "A term for excluding shell companies from banking services", "The exclusion of MSBs from SAR filing requirements"],
    answer: 1,
    explanation: "Financial exclusion occurs when legitimate customers — often from high-risk countries or industries — are denied banking access due to broad de-risking practices that prioritize avoiding compliance risk over serving legitimate customers."
  },
  {
    id: 188,
    category: "Transaction Monitoring",
    question: "What is 'negative list screening' vs 'positive list screening' in AML?",
    options: ["Negative screening checks against prohibited lists (SDN, PEPs, adverse media); positive screening identifies preferred customers", "Negative screening is for domestic customers; positive for foreign ones", "Negative and positive refer to the credit risk of the customer", "Both terms refer to the same OFAC screening process"],
    answer: 0,
    explanation: "Negative screening checks customers and transactions against lists of prohibited/high-risk parties (SDN list, PEP databases, adverse media). Positive screening refers to identifying desired customer characteristics or verifying against trusted identity databases."
  },
  {
    id: 189,
    category: "FATF & International Standards",
    question: "What does FATF Recommendation 29 address?",
    options: ["Wire transfer requirements", "Financial Intelligence Units (FIUs)", "Shell companies and nominee shareholders", "Customer due diligence"],
    answer: 1,
    explanation: "FATF Recommendation 29 deals with Financial Intelligence Units (FIUs), requiring countries to establish FIUs that serve as central national agencies for receiving, analyzing, and disseminating financial intelligence."
  },
  {
    id: 190,
    category: "Regulatory Framework",
    question: "What is a 'FinCEN Geographic Targeting Order' (GTO)?",
    options: ["An order restricting financial activity in a specific geographic area", "A FinCEN order requiring specific industries in specific geographic areas to collect additional information on certain transactions", "An OFAC order blocking transactions in sanctioned countries", "A law enforcement order freezing assets in specific regions"],
    answer: 1,
    explanation: "GTOs require certain industries (like title insurance companies or car dealers) in specific geographic areas to collect and report additional information about transactions that might involve illicit funds — used to gather intelligence on specific ML risks in those areas."
  },
  {
    id: 191,
    category: "KYC / CDD",
    question: "What is 'source of funds' vs 'source of wealth' in EDD?",
    options: ["Both terms mean the same thing", "Source of funds = where the specific funds in the transaction come from; Source of wealth = the origin of a customer's overall wealth", "Source of funds is for personal accounts; source of wealth is for businesses", "Source of funds refers to initial deposits; source of wealth is for ongoing transactions"],
    answer: 1,
    explanation: "Source of funds refers to the specific origin of the money in a particular transaction (e.g., salary, sale of property). Source of wealth refers to how the customer accumulated their overall net worth (e.g., business ownership, inheritance, career earnings)."
  },
  {
    id: 192,
    category: "Money Laundering",
    question: "What is 'art market money laundering'?",
    options: ["Counterfeiting artworks for profit", "Using high-value art purchases and sales to move money and create opacity due to subjective valuations and lack of regulation", "Money laundering through art supply stores", "Laundering proceeds through art gallery operations"],
    answer: 1,
    explanation: "The art market has been identified as a significant money laundering risk: high-value items with subjective valuations, anonymous transactions, lack of historical regulation, and complex multi-jurisdictional supply chains create significant ML opportunities."
  },
  {
    id: 193,
    category: "Interview Prep",
    question: "How would you describe the relationship between the BSA and SARs to a non-compliance colleague?",
    options: ["The BSA requires SARs, which are simply tax forms filed for large cash transactions", "The BSA is the law requiring financial institutions to help detect and prevent money laundering; SARs are the primary reporting tool used when something looks suspicious enough to alert law enforcement", "SARs replaced the CTR under the BSA in 2001", "The BSA and SARs are separate unrelated programs"],
    answer: 1,
    explanation: "The BSA is the foundational U.S. AML law. SARs are one of the BSA's key compliance tools — reports filed with FinCEN when a financial institution detects potentially suspicious activity that might indicate money laundering or other financial crimes."
  },
  {
    id: 194,
    category: "AML Program & Governance",
    question: "What is 'AML whistleblower protection'?",
    options: ["A policy protecting institutions from regulatory whistleblowers", "Legal protections for employees who report BSA/AML violations internally or to regulators in good faith", "Whistleblower awards paid to employees who identify AML violations", "A FinCEN program protecting SAR filers"],
    answer: 1,
    explanation: "Various laws protect employees who report AML/BSA violations from retaliation, including the AML Act of 2020, which strengthened whistleblower protections and established award programs for those who provide original information leading to enforcement actions."
  },
  {
    id: 195,
    category: "Regulatory Framework",
    question: "What does 'safe harbor' mean in the context of the BSA?",
    options: ["A secure storage area for BSA records", "Protection from civil liability for financial institutions and their employees who file SARs in good faith", "A regulatory exemption for certain low-risk financial institutions", "A FinCEN designation for compliant institutions"],
    answer: 1,
    explanation: "The BSA safe harbor (31 U.S.C. § 5318(g)(3)) protects financial institutions and their employees from civil liability arising from filing SARs in good faith. This is essential for encouraging complete and timely SAR reporting."
  },
  {
    id: 196,
    category: "Transaction Monitoring",
    question: "What is 'entity resolution' in AML data analytics?",
    options: ["Resolving disputes with legal entities", "The process of identifying and linking different records that refer to the same real-world entity across multiple data sources", "Closing cases involving legal entity customers", "Resolving unclear beneficial ownership information"],
    answer: 1,
    explanation: "Entity resolution uses data matching and analytics to identify that multiple records in different systems refer to the same person or entity — critical for getting a complete picture of customer relationships and detecting complex ML schemes."
  },
  {
    id: 197,
    category: "Money Laundering",
    question: "What is 'professional money laundering' (PML)?",
    options: ["Money laundering conducted by financial industry professionals", "Money laundering conducted by professional criminal organizations that offer ML services to multiple criminal clients for a fee", "Money laundering that requires professional certifications", "Legal money management services used for illicit purposes"],
    answer: 1,
    explanation: "Professional money laundering networks (PLMNs) are sophisticated criminal organizations that specialize in laundering proceeds from multiple criminal enterprises — offering ML-as-a-service, often with global reach and connections to legitimate financial channels."
  },
  {
    id: 198,
    category: "Interview Prep",
    question: "What is the most important soft skill for an AML analyst?",
    options: ["Ability to write software code", "Critical thinking and analytical judgment in assessing suspicious activity patterns and making sound SAR decisions", "Speed in closing alerts to meet quotas", "Perfect knowledge of all BSA regulations by memory"],
    answer: 1,
    explanation: "Critical thinking and analytical judgment are paramount in AML — analysts must assess complex, often ambiguous situations, weigh evidence, consult regulations, and make sound, documented decisions about when activity is truly suspicious."
  },
  {
    id: 199,
    category: "FATF & International Standards",
    question: "What are FATF 'Immediate Outcomes'?",
    options: ["Immediate enforcement actions required after FATF evaluations", "The 11 results that FATF's mutual evaluation process assesses to determine if a country's AML/CFT system is effective", "Short-term compliance fixes recommended by FATF", "Emergency measures required when a country is blacklisted"],
    answer: 1,
    explanation: "FATF's mutual evaluation framework includes 11 Immediate Outcomes — the results expected from an effective AML/CFT system, covering areas from risk understanding to confiscation of criminal proceeds and terrorist financing prevention."
  },
  {
    id: 200,
    category: "Interview Prep",
    question: "As an enrolled agent preparing for a CAMS-focused AML career, which area of the ACAMS study guide is MOST directly connected to your existing tax expertise?",
    options: ["Cybersecurity and virtual assets", "Money laundering methods, specifically understanding financial structures, entity types, and tracing funds through complex transactions", "OFAC sanctions screening procedures", "Correspondent banking due diligence"],
    answer: 1,
    explanation: "Your EA background in financial analysis, understanding of entity structures (corporations, LLCs, trusts, partnerships), fund flow tracing, and financial document interpretation directly maps to the ACAMS section on money laundering methods and financial crime investigation."
  }
];

export const categories = [...new Set(quizQuestions.map(q => q.category))];
