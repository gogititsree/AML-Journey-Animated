export interface FlashCard {
  id: number;
  chapter: number;
  chapterTitle: string;
  front: string;
  back: string;
}

export const CHAPTERS = [
  { number: 1, title: 'Understanding Financial Crime', color: '#f59e0b' },
  { number: 2, title: 'ML Risks in Financial Services', color: '#10b981' },
  { number: 3, title: 'ML Risks in Non-Bank FIs', color: '#6366f1' },
  { number: 4, title: 'ML Risks in DNFBPs & Other Sectors', color: '#ec4899' },
  { number: 5, title: 'Global AFC Frameworks', color: '#3b82f6' },
  { number: 6, title: 'AFC Regulations', color: '#14b8a6' },
  { number: 7, title: 'Building an AFC Program', color: '#f97316' },
  { number: 8, title: 'Transaction Monitoring & Investigation', color: '#8b5cf6' },
  { number: 9, title: 'Technology for AFC Compliance', color: '#ef4444' },
  { number: 10, title: 'Data Collection & Preparation', color: '#84cc16' },
];

export const flashCards: FlashCard[] = [
  // ─── CHAPTER 1: Understanding Financial Crime (20 cards) ─────────────────
  {
    id: 101, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What are the three stages of money laundering?',
    back: '1. Placement — introducing illicit cash into the financial system\n2. Layering — obscuring the trail through complex transactions\n3. Integration — returning "cleaned" funds into the legitimate economy'
  },
  {
    id: 102, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is the definition of "financial crime"?',
    back: 'Illegal activities that exploit financial systems for personal or organizational gain. Includes money laundering, fraud, tax evasion, sanctions evasion, bribery/corruption, and terrorist financing.'
  },
  {
    id: 103, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What are the 3 elements of the Fraud Triangle?',
    back: '1. Pressure (incentive/motive — a financial problem)\n2. Opportunity (lack of internal controls)\n3. Rationalization (convincing oneself the fraud is justified)'
  },
  {
    id: 104, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'How many predicate offense categories does FATF recognize?',
    back: '21 categories — including drug trafficking, fraud, corruption, cybercrime, tax crimes, human trafficking, environmental crime, terrorism financing, and more.'
  },
  {
    id: 105, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is "structuring" (smurfing)?',
    back: 'Breaking large cash amounts into smaller deposits below the reporting threshold (e.g., under $10,000 in the U.S.) to avoid currency transaction reporting requirements. Also called smurfing.'
  },
  {
    id: 106, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is Trade-Based Money Laundering (TBML)?',
    back: 'Exploiting trade transactions to launder illicit funds. Methods include over/under-invoicing, multiple invoicing, and phantom shipments — manipulating the stated price, quality, or quantity of goods.'
  },
  {
    id: 107, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is a "money mule"?',
    back: 'An individual (witting or unwitting) recruited by criminals to transfer illicit funds between accounts on their behalf. They are often recruited via job scams or social engineering and act as intermediaries to obscure the money trail.'
  },
  {
    id: 108, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What distinguishes tax evasion from tax avoidance?',
    back: 'Tax avoidance = legal reduction of tax through planning.\nTax evasion = illegal non-declaration of taxable income or hiding assets to avoid tax liability. Tax evasion is a predicate offense for money laundering.'
  },
  {
    id: 109, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is bribery vs. embezzlement vs. graft?',
    back: 'Bribery = giving/receiving something for improper use of power.\nEmbezzlement = directly stealing money you were entrusted with.\nGraft = obtaining dishonest financial advantage indirectly (e.g., a government official overpaying a company she owns).'
  },
  {
    id: 110, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is "hawala" and why is it a TF/ML risk?',
    back: 'An informal value transfer system based on trust and broker networks. No physical movement of money — a broker in one country pays the recipient while another broker "owes" the initiator. Leaves minimal paper trails, making it hard to trace.'
  },
  {
    id: 111, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is the key difference between terrorism financing and money laundering?',
    back: 'Money laundering: making illicit funds appear legitimate.\nTerrorism financing: using funds (from legitimate OR illegitimate sources) to support terrorist activities. TF can involve small amounts and clean money — funds don\'t have to be "dirty."'
  },
  {
    id: 112, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is "cyber-enabled crime"?',
    back: 'Illegal activities carried out or facilitated by electronic systems and devices (computers, networks). The foundation of all cyber-enabled crime is trust — gaining the confidence of the target. Includes fraud, identity theft, and ransomware.'
  },
  {
    id: 113, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is Market-Based Money Laundering (MBML)?',
    back: 'Exploiting financial market instruments — stocks, bonds, hedge funds, derivatives, private equity — to create complex transaction chains that obscure the origin of illicit funds.'
  },
  {
    id: 114, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is "sanctions evasion" and what are its main types?',
    back: 'Circumventing sanctions programs. Main types:\n• Payment-related (stripping identifying info from wire transfers)\n• Ownership-related (hiding sanctioned person through shell companies/proxies)\n• Trade-related (illegal import/export of sanctioned goods)'
  },
  {
    id: 115, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is the Colombian Black Market Peso Exchange (BMPE)?',
    back: 'A drug trafficking ML method where U.S. drug dollar proceeds are converted to Colombian pesos through peso brokers. Brokers use the dollars to buy U.S. goods exported to Colombia, allowing traffickers to settle drug debts without moving cash.'
  },
  {
    id: 116, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What are "front businesses" and how do they differ from shell companies?',
    back: 'Front business: has legitimate operations but also commingles illicit funds (e.g., a restaurant inflating sales).\nShell company: no real business operations at all — exists only to facilitate financial flows and obscure beneficial ownership.'
  },
  {
    id: 117, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What is the Common Reporting Standard (CRS)?',
    back: 'An OECD standard requiring jurisdictions to automatically exchange financial account information with other jurisdictions annually to combat offshore tax evasion. It is the global equivalent of FATCA (U.S.).'
  },
  {
    id: 118, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What are "commodity-based" laundering methods?',
    back: 'Using high-value physical commodities — gold, diamonds, precious metals, luxury watches, fine art — to transfer value anonymously. Assets are bought with illicit funds, transported/resold to obscure the money trail.'
  },
  {
    id: 119, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What are the institutional risks created by financial crime?',
    back: 'Financial institutions face: Operational risk, Legal risk, Concentration risk, and Reputational risk — plus potential regulatory enforcement actions (consent orders, fines, DPAs) and individual criminal liability.'
  },
  {
    id: 120, chapter: 1, chapterTitle: 'Understanding Financial Crime',
    front: 'What distinguishes human trafficking from human smuggling?',
    back: 'Smuggling: requires crossing a border, involves only foreign nationals, consent is usually present.\nTrafficking: can be domestic, involves domestic or foreign nationals, victims are exploited through force/fraud/coercion — no genuine consent.'
  },

  // ─── CHAPTER 2: ML Risks in Financial Services (20 cards) ────────────────
  {
    id: 201, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is "remote onboarding risk" in retail banking?',
    back: 'Remote onboarding (without in-person verification) makes it easier for criminals to use fake or stolen identities. Key risks include deepfake exploitation of selfie/video verification, synthetic identity fraud, and weak document verification.'
  },
  {
    id: 202, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What are "mule accounts" in retail banking?',
    back: 'Personal bank accounts controlled or used by individuals recruited by criminals to receive and transfer illicit funds. They act as intermediaries, making fund origins difficult to trace. Often victims are unaware they are participating in ML.'
  },
  {
    id: 203, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'Why are prepaid cards higher risk than regular credit/debit cards?',
    back: 'Prepaid cards can be purchased and reloaded anonymously with minimal KYC requirements, are not linked to a bank account, and function as bearer instruments — making them effective tools for moving illicit funds with limited traceability.'
  },
  {
    id: 204, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'How is "early loan repayment" used for money laundering?',
    back: 'A criminal takes out a loan from legitimate funds, then repays it early using illicit cash. The repayment creates a legitimate-looking financial record converting "dirty" money into ostensibly clean funds from a known, regulated institution.'
  },
  {
    id: 205, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What are "concentration accounts" and their AML risk?',
    back: 'Internal bank accounts that commingle funds from multiple customer transactions. The commingling obscures the link between individual transactions and the customers involved, making it difficult to track fund origins or identify beneficial owners.'
  },
  {
    id: 206, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What unique conflict of interest exists in private banking?',
    back: 'Private banking relationship managers are often compensated based on Assets Under Management (AUM). This creates financial pressure to acquire and retain clients, potentially leading to overlooking AML red flags to preserve the relationship.'
  },
  {
    id: 207, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What are "correspondent banking" risks?',
    back: 'A respondent bank can access services through a correspondent without full CDD by the correspondent on the respondent\'s customers. Creates risks: nested accounts, shell banks using the correspondent\'s reputation, and incomplete end-customer due diligence.'
  },
  {
    id: 208, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What are "shell banks" and why are they prohibited for correspondents?',
    back: 'Shell banks have no physical presence in any jurisdiction and are not affiliated with a regulated financial group. Section 313 of the USA PATRIOT Act prohibits U.S. financial institutions from maintaining correspondent accounts for foreign shell banks.'
  },
  {
    id: 209, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is a "nested account" in correspondent banking?',
    back: 'When a respondent bank provides access to its correspondent relationship to third-party banks (sub-respondents), who then conduct transactions through the correspondent. This creates layers obscuring ultimate originators/beneficiaries.'
  },
  {
    id: 210, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What ML risks do commercial banking "trade finance" products present?',
    back: 'Letters of credit, bills of lading, and documentary collections can be used to create fictitious trade transactions, phantom shipments, or falsely documented shipments to transfer value across borders — classic TBML methods.'
  },
  {
    id: 211, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is "beneficial ownership" complexity in commercial banking?',
    back: 'Corporate accounts may have complex multi-layered ownership structures (holding companies, trusts, nominees) that make it difficult to identify the natural persons who ultimately own/control the entity — creating opportunities to hide SDNs.'
  },
  {
    id: 212, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is market-based ML (MBML) in investment banking?',
    back: 'Exploiting capital markets instruments (stocks, bonds, derivatives, hedge funds, private equity) to create complex, multi-jurisdictional transaction chains that layer illicit funds and make the origin of money extremely difficult to trace.'
  },
  {
    id: 213, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'Why do at which ML stage are credit cards most commonly used?',
    back: 'Credit cards are typically used in the layering and integration stages. They are less common at placement since they don\'t accept direct cash deposits. They are exploited through overpayments or rapid paydown with illicit funds.'
  },
  {
    id: 214, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is a "sovereign wealth fund" (SWF) and its AML risk?',
    back: 'State-owned investment funds that present opacity challenges: political connections and ultimate beneficial ownership can be difficult to determine. They may involve PEPs and require EDD to understand the nature of government influence and oversight.'
  },
  {
    id: 215, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What are "offshore financial centers" (OFCs) and their risks?',
    back: 'Financial centers offering favorable conditions for non-residents, often with bank secrecy, low taxes, and limited regulatory oversight. Risks: opacity, complex cross-border structures, obscured beneficial ownership, and ease of fund movement.'
  },
  {
    id: 216, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is the AML risk of "insurance early policy surrender"?',
    back: 'Criminals purchase high-value life insurance policies using illicit funds, pay premiums, then early surrender the policy — receiving a "clean" refund check from a legitimate insurer. Effectively converts dirty cash to legitimate-appearing funds.'
  },
  {
    id: 217, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is the Wolfsberg Correspondent Banking Due Diligence Questionnaire (CBDDQ)?',
    back: 'An industry standard questionnaire developed by the Wolfsberg Group for financial institutions to assess the AML/CFT controls of correspondent banking partners — covering ownership, governance, AML programs, and risk management.'
  },
  {
    id: 218, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is "de-risking" and its social consequence?',
    back: 'De-risking = exiting entire categories of high-risk customers/markets rather than managing individual risk. Consequence: financial exclusion of legitimate customers and businesses, restricting access to banking services (financial inclusion problem).'
  },
  {
    id: 219, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What is a "Special Purpose Vehicle" (SPV) and its AML risk?',
    back: 'An SPV is a legal entity created to isolate financial risk for specific transactions/assets. ML risk: can be used to obscure beneficial ownership and fund origins, complicating regulatory oversight of who truly controls the assets.'
  },
  {
    id: 220, chapter: 2, chapterTitle: 'ML Risks in Financial Services',
    front: 'What specific ML risk do credit unions/building societies have vs. traditional banks?',
    back: 'The member-centric model can reduce scrutiny (trust and community ties may override AML vigilance). Smaller scale may mean fewer resources/expertise for comprehensive AML programs. May have weaker technology and less experienced compliance staff.'
  },

  // ─── CHAPTER 3: ML Risks in Non-Bank FIs (20 cards) ──────────────────────
  {
    id: 301, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are the main Money Services Business (MSB) categories?',
    back: 'Currency dealers/exchangers, check cashers, issuers of traveler\'s checks/money orders/stored value, money transmitters, and the U.S. Postal Service. Under BSA/AML Act 2020, cryptocurrency exchanges are also classified as MSBs.'
  },
  {
    id: 302, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is "microstructuring" in digital asset laundering?',
    back: 'Similar to traditional structuring but using very small cryptocurrency deposits (often under $1,000) spread across many accounts. Designed to avoid automated detection thresholds in crypto exchange monitoring systems.'
  },
  {
    id: 303, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are crypto "mixers/tumblers" and their typical fee?',
    back: 'Services that pool and mix cryptocurrency from different entities, returning funds from new wallet addresses to obscure the trail between sending and receiving addresses. Typical fee: 1–3% of the mixed amount.'
  },
  {
    id: 304, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are "privacy coins" and why are they higher risk?',
    back: 'Cryptocurrencies using non-public blockchains (e.g., Monero, Zcash) that facilitate anonymous fund transfers by hiding sender, receiver, and amounts. They are significantly harder to trace than Bitcoin and pose a heightened AML risk.'
  },
  {
    id: 305, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is a VASP under FATF guidance?',
    back: 'Virtual Asset Service Provider — any entity conducting crypto exchanges (crypto-to-fiat, crypto-to-crypto), transfers, or custody services. Subject to FATF Recommendation 15 (2019 update), including the Travel Rule for transfers above threshold.'
  },
  {
    id: 306, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is the "Travel Rule" and how does it apply to VASPs?',
    back: 'The Travel Rule requires VASPs to pass along originator and beneficiary information for transfers above the applicable threshold (≥$3,000 in U.S., ≥€1,000 in EU). Equivalent to the wire transfer Travel Rule applied to virtual assets.'
  },
  {
    id: 307, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are NFTs (Non-Fungible Tokens) and their ML risk?',
    back: 'Unique digital assets on blockchain. ML risk: high price volatility and subjectivity, ability to obscure transaction trails, cross-border reach. Particularly prone to layering — e.g., self-purchasing NFTs to "clean" crypto proceeds.'
  },
  {
    id: 308, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What was the world\'s first fully implemented CBDC?',
    back: 'The Bahamas\' Sand Dollar, launched in October 2020 — available across the island as a complement to traditional cash. CBDCs present AML considerations around traceability, privacy, and cross-border use.'
  },
  {
    id: 309, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is DeFi (Decentralized Finance) and its AML risk?',
    back: 'DeFi refers to financial services operating through smart contracts on blockchains without traditional intermediaries. ML risk: no central entity to perform CDD/KYC, transactions can be pseudonymous, and protocols can be used for anonymous swaps/layering.'
  },
  {
    id: 310, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are "algorithmic stablecoins" and their ML risk?',
    back: 'Stablecoins that maintain their peg via algorithms rather than fiat/crypto collateral. ML risk: money launderers may use them for rapid fund transfers, exploiting value fluctuations to disguise illicit asset transfers and complicate forensic tracking.'
  },
  {
    id: 311, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are "payment service providers" (PSPs) and their AML risk?',
    back: 'Non-bank entities processing payments on behalf of customers. ML risks: high transaction volumes, cross-border reach, diverse customer bases (including high-risk merchants), potential gaps in KYC/AML controls across multiple jurisdictions.'
  },
  {
    id: 312, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What AML risk do securities/brokerage firms face?',
    back: 'Risks include: complex transactions obscuring beneficial ownership, use of nominee accounts, ability to layer illicit funds through multiple transactions, and market manipulation (wash trading) to create false paper trails showing profits.'
  },
  {
    id: 313, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are "alternative remittance systems" (ARS)?',
    back: 'Informal value transfer systems (like hawala/hundi) operating outside formal financial channels. Key risk: minimal documentation, value transferred through trust and broker debts rather than physical money movement — very difficult to trace.'
  },
  {
    id: 314, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What risk does e-commerce present for AML?',
    back: 'E-commerce enables anonymous cross-border transactions, complex payment flows through multiple intermediaries, difficult customer identification, and potential for third-party sellers to exploit platforms to mix illicit with legitimate revenues.'
  },
  {
    id: 315, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is a key AML risk of "funnel accounts" in human trafficking?',
    back: 'Funnel accounts aggregate illicit proceeds from trafficking networks across multiple accounts. They commingle funds from unknown sources, then consolidate and move them — combining fragmented cash deposits for onward transfer or TBML schemes.'
  },
  {
    id: 316, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What insurance ML typologies exist beyond early surrender?',
    back: 'Third-party premium payments (someone else pays for policy = funds obscured), fraudulent insurance claims (stage accidents/thefts), loan-back schemes (borrow against policy then "repay" with illicit funds), and policy assignment/sale to third parties.'
  },
  {
    id: 317, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is "crypto-to-fiat conversion point" vulnerability?',
    back: 'The conversion point where cryptocurrency is exchanged for fiat currency is particularly vulnerable: without proper CDD controls, criminals use weakly regulated VASPs to convert illicit crypto to clean fiat currency, exiting the crypto environment undetected.'
  },
  {
    id: 318, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What are "custodial services" risks in the securities sector?',
    back: 'Custodians holding assets for clients can be exploited through complex asset transfer arrangements that obscure beneficial ownership. Large volumes of securities may move between custodian accounts, masking true ownership and fund origins.'
  },
  {
    id: 319, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is "MSB banking" risk?',
    back: 'When a bank provides accounts to MSBs, it effectively gains indirect exposure to the MSB\'s customers. The high volume and velocity of MSB transactions make oversight difficult. Banks must apply EDD to MSB customers as they are inherently higher risk.'
  },
  {
    id: 320, chapter: 3, chapterTitle: 'ML Risks in Non-Bank Financial Institutions',
    front: 'What is a "charity/NGO" AML risk?',
    back: 'NGOs can be misused as conduits for terrorist financing (knowingly or unknowingly): they raise public funds, operate internationally, may receive cash donations, and their humanitarian activities can mask illicit fund flows to conflict zones.'
  },

  // ─── CHAPTER 4: DNFBPs (20 cards) ─────────────────────────────────────────
  {
    id: 401, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What does DNFBP stand for and who are they?',
    back: 'Designated Nonfinancial Businesses and Professions. FATF-designated high-risk categories: real estate agents, lawyers/notaries, accountants, TCSPs (trust and company service providers), casinos, and dealers in precious metals/stones.'
  },
  {
    id: 402, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'Why are DNFBPs called "gatekeepers"?',
    back: 'DNFBPs act as intermediaries between criminals and the formal financial system. Without proper safeguards, they can be exploited to hide illicit fund origins, create complex legal structures, or handle high-value assets — controlling access to the financial system.'
  },
  {
    id: 403, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What makes real estate a high-risk sector for ML?',
    back: 'Real estate allows large cash sums to be invested in physical assets, with complex ownership structures obscuring beneficial ownership, high price volatility enabling value manipulation, and international buyers reducing scrutiny.'
  },
  {
    id: 404, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is "legal privilege" and why does it increase ML risk?',
    back: 'Attorney-client privilege protects client communications from disclosure. Criminals exploit this to shield financial crime discussions from regulatory scrutiny and may use attorneys to hold funds and structure transactions with legal cover.'
  },
  {
    id: 405, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What are TCSPs and their specific ML risk?',
    back: 'Trust and Company Service Providers create legal structures (companies, trusts, foundations). They can incorporate entities in multiple jurisdictions, obscure beneficial ownership through nominee directors/shareholders, and manage complex ownership arrangements.'
  },
  {
    id: 406, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'How do physical casinos facilitate ML?',
    back: 'Criminals purchase chips with illicit cash, engage in minimal gambling, then cash out — receiving a casino payout record. The casino effectively converts dirty cash to legitimate-appearing funds. High cash volumes make detection difficult.'
  },
  {
    id: 407, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is "collusion gaming" in casino ML?',
    back: 'In peer-to-peer games (e.g., poker), a participant intentionally loses to another player to transfer value — effectively moving criminal proceeds to another person disguised as legitimate gambling winnings.'
  },
  {
    id: 408, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What are "junkets" in the casino context?',
    back: 'Sponsored/incentive-based trips to casinos for high-net-worth individuals. Junket operators rarely collect adequate KYC from customers. High-net-worth VIP gamblers can move large amounts internationally without standard banking oversight.'
  },
  {
    id: 409, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'Why are dealers in precious metals/stones among the highest-risk DNFBPs?',
    back: 'High value + small size = easy transport across borders. Transactions are often cash-based, international, and high-volume. Goods have portable, universal value. Combined, these features make precious metals/stones highly suitable for ML.'
  },
  {
    id: 410, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is the AML gap for U.S. attorneys identified in the study guide?',
    back: 'U.S. attorneys are self-regulated by state bar associations, which provide recommended rules but lack mandatory AML reporting requirements. This creates a significant gap — attorneys can hold client funds and create structures without being AML-obligated entities.'
  },
  {
    id: 411, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is the ML risk of "free trade zones" (FTZs)?',
    back: 'FTZs have reduced regulatory oversight, making them attractive for TBML: phantom shipments, mislabeled goods, falsified invoices, and movement of controlled goods can occur with minimal scrutiny in these areas.'
  },
  {
    id: 412, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What online gaming ML risk does VPN use present?',
    back: 'Online gaming operators may inadvertently permit customers from restricted/high-risk jurisdictions to access platforms if VPNs are used to circumvent geolocation controls — exposing operators to customers outside their licensed jurisdiction.'
  },
  {
    id: 413, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What makes art and luxury goods ML-vulnerable?',
    back: 'Highly portable and easily transportable value, subjective valuations making over/under-valuation easy, anonymous purchases, private sales with minimal documentation, and ease of cross-border transfer without triggering normal financial monitoring.'
  },
  {
    id: 414, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What AML risk do embassies and diplomatic missions present?',
    back: 'Diplomatic immunity can complicate CDD. Involvement of government officials and PEPs creates elevated bribery/corruption risk. Diplomatic accounts may receive funds from sensitive jurisdictions with limited ability to scrutinize source of funds.'
  },
  {
    id: 415, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is the arms trafficking ML connection?',
    back: 'Arms trafficking is a major predicate offense. Legitimate defense contractors can mask illegal arms sales. Proceeds from arms sales to sanctioned regimes must be laundered, often through complex multi-jurisdiction structures.'
  },
  {
    id: 416, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What does the Hendricks case study demonstrate about multi-DNFBP ML?',
    back: 'The Hendricks case shows how ML schemes can involve multiple DNFBPs working together: real estate agents (property purchase), lawyers/TCSPs (structuring ownership), and accountants (financial documentation) — each presenting unique risks.'
  },
  {
    id: 417, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What environmental crimes create ML concerns?',
    back: 'Illegal logging, poaching, wildlife trafficking, illegal mining, illegal fishing, and improper waste disposal. TCOs use environmental crime proceeds that must be laundered — often through front businesses, trade transactions, or shell companies.'
  },
  {
    id: 418, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'Why are accountants classified as DNFBPs under FATF?',
    back: 'Accountants can create financial records that legitimize illicit funds, provide tax advice that enables evasion, set up corporate structures used for ML, and hold client funds in trust accounts. They have knowledge and access enabling financial crime facilitation.'
  },
  {
    id: 419, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What is "transshipment" in trade-based sanctions evasion?',
    back: 'Switching cargo at sea or in transit ports to obscure the true origin/destination of sanctioned goods. Neutral/opaque jurisdictions are used as transit points to create false documentation showing a non-sanctioned origin.'
  },
  {
    id: 420, chapter: 4, chapterTitle: 'ML Risks in DNFBPs & Other Sectors',
    front: 'What are "bearer shares" and why are they an ML risk?',
    back: 'Bearer shares grant ownership rights to whoever physically holds them — no ownership register exists. They allow completely anonymous company ownership, making beneficial ownership identification impossible without additional controls.'
  },

  // ─── CHAPTER 5: Global AFC Frameworks (20 cards) ─────────────────────────
  {
    id: 501, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is FATF and what is its primary purpose?',
    back: 'Financial Action Task Force — an intergovernmental body founded in 1989. Primary purpose: sets international AML/CFT/CPF standards (40 Recommendations), conducts mutual evaluations, and monitors jurisdictions\' implementation of those standards.'
  },
  {
    id: 502, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What are FATF\'s "40 Recommendations"?',
    back: 'International standards covering: national AML/CFT policies, money laundering/TF/proliferation offenses, preventive measures for financial institutions and DNFBPs, transparency/beneficial ownership, powers of law enforcement, and international cooperation.'
  },
  {
    id: 503, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What are FATF\'s "11 Immediate Outcomes"?',
    back: 'The results that an effective AML/CFT system should achieve — assessed during mutual evaluations. They measure whether a country\'s AML/CFT framework produces real-world outcomes, not just technical legal compliance.'
  },
  {
    id: 504, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is a FATF "mutual evaluation"?',
    back: 'A peer review where FATF member countries assess another jurisdiction\'s AML/CFT framework — technical compliance with the 40 Recommendations and effectiveness (11 Immediate Outcomes). Can result in grey or black listing if deficiencies are found.'
  },
  {
    id: 505, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is FATF\'s "grey list" vs. "black list"?',
    back: 'Grey list: Jurisdictions under increased monitoring — have strategic deficiencies but are committed to reform.\nBlack list (High-Risk): Jurisdictions with serious ML/TF deficiencies not adequately addressed. Enhanced/counter-measures recommended against them.'
  },
  {
    id: 506, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the "risk-based approach" (FATF Recommendation 1)?',
    back: 'Countries and institutions should identify, assess, and understand their ML/TF/PF risks and apply measures commensurate with those risks. Allows more intense controls for high-risk and reduced controls for lower-risk scenarios.'
  },
  {
    id: 507, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What was the UN Vienna Convention (1988)?',
    back: 'UN Convention Against Illicit Traffic in Narcotic Drugs and Psychotropic Substances — the first international treaty to criminalize drug-related money laundering. Required countries to criminalize ML from drug trafficking.'
  },
  {
    id: 508, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the UN Palermo Convention (2000)?',
    back: 'UN Convention Against Transnational Organized Crime — extended AML requirements beyond drugs to all serious crimes committed by transnational organized crime groups. Established cooperation frameworks for cross-border investigations.'
  },
  {
    id: 509, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the Egmont Group?',
    back: 'An international network of 160+ Financial Intelligence Units (FIUs) facilitating cooperation and intelligence sharing. Member FIUs exchange information to combat ML/TF across borders, operating under the Egmont Group\'s principles of information sharing.'
  },
  {
    id: 510, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the Wolfsberg Group?',
    back: 'An association of 13 major global banks that develops AML/CFT guidance and standards, including the Correspondent Banking Due Diligence Questionnaire (CBDDQ), the Trade Finance Principles, and the Wolfsberg AML Principles.'
  },
  {
    id: 511, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the Basel AML Index?',
    back: 'An independent risk assessment tool from the Basel Institute on Governance evaluating a country\'s ML/TF vulnerability. Uses 17 indicators across 5 domains: AML/CFT framework, corruption/fraud risks, financial transparency, public transparency, and legal/political risks.'
  },
  {
    id: 512, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is Transparency International\'s Corruption Perceptions Index (CPI)?',
    back: 'Annual ranking of countries by perceived public sector corruption levels, using data from 13 sources including expert assessments and business surveys. Higher CPI rank = more corrupt perceived. Widely used in AML risk assessments for country risk.'
  },
  {
    id: 513, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What are "FATF-Style Regional Bodies" (FSRBs)?',
    back: 'Regional associate member organizations that implement FATF standards in their regions through mutual evaluations, technical assistance, and capacity building (e.g., MENAFATF, APG, GAFILAT, GIABA). They extend FATF\'s global reach.'
  },
  {
    id: 514, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is a "national risk assessment" (NRA)?',
    back: 'A process where countries systematically identify, assess, and understand ML/TF risks at the national level to inform policy development, resource allocation, and the design of proportionate AML/CFT measures.'
  },
  {
    id: 515, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the Basel Committee on Banking Supervision\'s AML role?',
    back: 'Issues guidance on sound practices for managing ML risks in banking, including key papers on KYC, customer due diligence, and consolidated AML supervision. Its guidance influences how bank regulators worldwide set supervisory expectations.'
  },
  {
    id: 516, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is an MLAT (Mutual Legal Assistance Treaty)?',
    back: 'A bilateral or multilateral treaty facilitating exchange of evidence and legal assistance in criminal investigations across borders. Critical for international AML/CFT investigations where evidence must be gathered in foreign jurisdictions.'
  },
  {
    id: 517, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the Tax Justice Network\'s Financial Secrecy Index?',
    back: 'Biennial ranking of 141 jurisdictions based on financial secrecy levels and the volume of financial services provided to non-residents. Higher ranking = greater role in enabling wealthy individuals/criminals to hide assets. Informs AML country risk.'
  },
  {
    id: 518, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is the FATF Recommendation 15 (2019 update)?',
    back: 'Extended AML/CFT requirements to virtual assets and VASPs. Countries must ensure VASPs are regulated, licensed, and apply AML/CFT measures. Also included the Travel Rule for virtual asset transfers above the applicable threshold.'
  },
  {
    id: 519, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is "public-private partnership" in AML?',
    back: 'Formal collaboration between government authorities (law enforcement, FIUs, regulators) and private sector financial institutions to share intelligence and improve collective financial crime detection. Example: Australia\'s Fintel Alliance (AUSTRAC + major FIs).'
  },
  {
    id: 520, chapter: 5, chapterTitle: 'Global AFC Frameworks',
    front: 'What is INTERPOL\'s role in AML/financial crime?',
    back: 'INTERPOL facilitates police cooperation and shares criminal intelligence across 196 member countries. Issues Red Notices for wanted financial criminals, supports cross-border investigations, and maintains databases on financial crime networks.'
  },

  // ─── CHAPTER 6: AFC Regulations (20 cards) ───────────────────────────────
  {
    id: 601, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What are the 5 pillars of a BSA AML Program?',
    back: '1. Internal controls (policies/procedures)\n2. Designated BSA/AML compliance officer\n3. Employee training\n4. Independent testing/audit\n5. CDD program (added by FinCEN 2016 CDD Rule) — including beneficial ownership identification'
  },
  {
    id: 602, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is FinCEN\'s primary mission?',
    back: 'To protect the financial system from illicit activities, combat financial crimes, and enhance national security by collecting, analyzing, and disseminating financial intelligence as the U.S. Financial Intelligence Unit (FIU).'
  },
  {
    id: 603, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What did the Corporate Transparency Act (CTA) establish?',
    back: 'As part of the AML Act of 2020 — created a federal beneficial ownership registry requiring most U.S. corporations and LLCs (not banks, public companies) to disclose beneficial owners to FinCEN, creating a searchable national database.'
  },
  {
    id: 604, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What did the AML Act of 2020 do for cryptocurrency?',
    back: 'Explicitly classified cryptocurrency exchanges as Money Services Businesses, subjecting them to the same BSA licensing and reporting requirements as traditional MSBs. Also directed FinCEN to update its cryptocurrency regulatory framework.'
  },
  {
    id: 605, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is USA PATRIOT Act Section 311?',
    back: 'Authorizes FinCEN/Treasury to designate foreign jurisdictions, institutions, or transaction classes as primary money laundering concerns and impose "special measures" — up to and including prohibiting U.S. banks from maintaining accounts for the designee.'
  },
  {
    id: 606, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is USA PATRIOT Act Section 312?',
    back: 'Mandates Enhanced Due Diligence (EDD) for: (1) correspondent accounts maintained for foreign financial institutions, and (2) private banking accounts held for non-U.S. persons (especially with $1M+ average balance).'
  },
  {
    id: 607, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is USA PATRIOT Act Section 313?',
    back: 'Prohibits U.S. financial institutions from establishing or maintaining correspondent accounts for foreign shell banks (no physical presence in any country, not affiliated with a regulated financial group).'
  },
  {
    id: 608, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is USA PATRIOT Act Section 314 (a) vs. (b)?',
    back: '314(a): Law enforcement, via FinCEN, can request institutions search records for specific individuals/entities suspected of ML/TF.\n314(b): Safe harbor allowing financial institutions to voluntarily share information with each other about ML/TF suspects.'
  },
  {
    id: 609, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is the EU AML Authority (AMLA)?',
    back: 'A new EU-level supervisory body established to directly supervise certain high-risk obliged entities (particularly large cross-border institutions) and to coordinate/support national AML supervisors across all EU member states.'
  },
  {
    id: 610, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is the EU\'s MiCA regulation?',
    back: 'Markets in Cryptoassets Regulation — a comprehensive EU regulatory framework establishing requirements for cryptoasset service providers across all EU member states, including AML/CFT obligations, consumer protection, and operational standards.'
  },
  {
    id: 611, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What does a FinCEN Geographic Targeting Order (GTO) do?',
    back: 'Requires specific industries in specific geographic areas to collect and report additional transaction information. Example: real estate GTOs requiring title companies to report all-cash purchases above a threshold in certain high-risk markets (e.g., Manhattan, Miami).'
  },
  {
    id: 612, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is the UK Bribery Act 2010\'s extraterritorial scope?',
    back: 'Applies to any company with a UK connection (incorporated, listed, or conducting business in the UK) and holds parent firms liable for corrupt activities by subsidiaries regardless of location. One of the world\'s strictest anti-corruption laws.'
  },
  {
    id: 613, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What did the EU GDPR mean for AML programs?',
    back: 'Creates a tension between GDPR\'s data privacy protections (limiting collection, retention, sharing) and AML requirements (requiring collection, retention, and sharing of customer data). Organizations must balance both frameworks simultaneously.'
  },
  {
    id: 614, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is a "Deferred Prosecution Agreement" (DPA) in AML enforcement?',
    back: 'An agreement between prosecutors and an organization where prosecution is deferred in exchange for the organization meeting certain conditions (remediation, monitors, fines). Allows institutions to resolve AML violations without criminal conviction.'
  },
  {
    id: 615, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is DORA (Digital Operational Resilience Act)?',
    back: 'EU regulation establishing ICT risk management requirements for financial entities. Relevant to AFC as it governs the resilience, security, and management of technology systems underlying AML/CFT programs.'
  },
  {
    id: 616, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What are the strategic AML priorities of the AML Act of 2020?',
    back: 'Directed FinCEN to address: corruption/fraud, cybercrime, terrorist financing, transnational criminal activity, drug trafficking, human trafficking, and nuclear proliferation financing through further rulemaking and enhanced intelligence use.'
  },
  {
    id: 617, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'Which U.S. regulators examine BSA/AML compliance by institution type?',
    back: 'OCC (national banks), Federal Reserve (bank holding companies), FDIC (state non-member banks), NCUA (credit unions), FinCEN (MSBs, overall BSA admin), FINRA (broker-dealers), SEC (investment advisers), state regulators (state-chartered entities).'
  },
  {
    id: 618, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is Singapore\'s equivalent of a SAR?',
    back: 'Singapore uses "Suspicious Transaction Reports" (STRs) filed with the Suspicious Transaction Reporting Office (STRO) — the Singapore FIU. Financial institutions are required to file STRs under the Corruption, Drug Trafficking and Other Serious Crimes Act.'
  },
  {
    id: 619, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What is the J5 (Joint Chiefs of Global Tax Enforcement)?',
    back: 'A coalition of tax and financial crime agencies from 5 English-speaking countries (U.S. IRS-CI, UK HMRC, Canada CRA, Australia ATO, and Netherlands FIOD) collaborating on cross-border offshore tax fraud and related money laundering investigations.'
  },
  {
    id: 620, chapter: 6, chapterTitle: 'AFC Regulations',
    front: 'What do ESG regulations mean for AFC professionals?',
    back: 'ESG frameworks are linking environmental/social/governance factors to financial crime risk: environmental crimes (illegal logging, pollution) and corruption undermine ESG goals. AFC professionals increasingly must address ESG-related financial crime risks.'
  },

  // ─── CHAPTER 7: Building an AFC Program (20 cards) ───────────────────────
  {
    id: 701, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What are the "Three Lines of Defense" in AML?',
    back: '1st line: Business units (own and manage risk day-to-day)\n2nd line: Compliance/risk management (oversight, advisory, monitoring, SAR filing, policies)\n3rd line: Internal audit (independent assessment of program effectiveness)'
  },
  {
    id: 702, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What should the internal audit function report to?',
    back: 'The audit committee or board of directors — ensuring independence from business and compliance functions. Findings must be uninfluenced by other organizational priorities. This reporting line preserves the integrity of the third line of defense.'
  },
  {
    id: 703, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "Customer Risk Assessment" (CRA)?',
    back: 'A risk rating assigned to each customer based on ML/TF risk factors: business type, geographic locations, products used, transaction patterns, and ownership complexity. Determines the level of due diligence (Standard, Enhanced, or Simplified) required.'
  },
  {
    id: 704, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is the difference between "source of funds" vs. "source of wealth"?',
    back: 'Source of Funds: the specific origin of money used in a particular transaction (e.g., property sale, salary payment).\nSource of Wealth: how a customer accumulated their overall net worth (e.g., business ownership, career, inheritance).'
  },
  {
    id: 705, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "perpetual KYC" (pKYC)?',
    back: 'A continuous KYC approach that maintains near-real-time customer data through ongoing monitoring of behavioral and circumstantial changes — as opposed to traditional periodic reviews every 3-5 years that allow data to become dangerously outdated.'
  },
  {
    id: 706, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What triggers an "event-driven KYC review"?',
    back: 'Adverse news, significant transaction pattern changes, changes in beneficial ownership structure, discovery of PEP connections, geographic expansion into high-risk areas, or other material changes in the customer\'s circumstances or risk profile.'
  },
  {
    id: 707, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is an "enterprise-wide AML risk assessment"?',
    back: 'A holistic, periodic evaluation of ML/TF risk across all of an institution\'s products, services, customer types, geographies, and delivery channels — assessing both inherent risk and the effectiveness of existing controls (residual risk).'
  },
  {
    id: 708, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "risk appetite" in AFC governance?',
    back: 'Board-level definition of the types and amounts of ML/TF risk the institution is willing to accept in pursuit of business objectives. Determines which high-risk customer types, products, or geographies the institution will or will not serve.'
  },
  {
    id: 709, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "simplified due diligence" (SDD)?',
    back: 'Reduced-scrutiny KYC approach applied to demonstrably lower-risk customers (e.g., publicly listed companies, government entities, regulated financial institutions) where standard verification can be proportionately scaled back — not eliminated.'
  },
  {
    id: 710, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What are the consequences of failing to file a required SAR?',
    back: 'Regulatory civil monetary penalties, potential individual criminal liability, reputational damage to the institution, and possible implication in the underlying criminal activity. Persistent failures can result in consent orders or deferred prosecution agreements.'
  },
  {
    id: 711, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "defensive SAR" and why do regulators discourage excessive filing?',
    back: 'A SAR filed primarily to protect the institution from regulatory criticism, not because the institution genuinely believes ML is occurring. Regulators discourage "defensive" SARs as they degrade the quality of the financial intelligence system.'
  },
  {
    id: 712, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "look-back review"?',
    back: 'A retroactive review of transactions or customer relationships — typically required by regulators after discovering a compliance deficiency — to determine whether suspicious activity was missed and whether SARs should be retroactively filed.'
  },
  {
    id: 713, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "tone at the top" in AFC compliance?',
    back: 'Board and senior management commitment to AML compliance that sets the organizational culture. When leadership demonstrates genuine commitment (not box-checking), it creates an institution-wide culture where compliance is genuinely valued and resourced.'
  },
  {
    id: 714, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "Customer Identification Program" (CIP)?',
    back: 'BSA requirement to verify customer identity. For individuals: name, date of birth, address, and identification number (SSN, passport). Must verify within a reasonable time of account opening and maintain records for 5 years after account closure.'
  },
  {
    id: 715, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is the MLRO\'s (BSA Officer\'s) role?',
    back: 'Oversees the AML/CFT compliance program, is the primary point of contact for regulators, is responsible for SAR filings, coordinates AML across the organization, reports to senior management/board, and is the first responder to regulatory examinations.'
  },
  {
    id: 716, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "Know Your Employee" (KYE)?',
    back: 'Internal control that monitors employees\' financial activities and behavior patterns to detect potential insider threats — employees who may be bribed, coerced, or otherwise complicit in facilitating financial crime from inside the institution.'
  },
  {
    id: 717, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "compliance monitoring and testing" (QA) function?',
    back: 'Assesses whether policies and procedures are properly executed in the first line of defense. Reviews execution, identifies gaps, tracks backlogs, documents findings, and drives continuous improvement — a checks-and-balances function within the 2nd line.'
  },
  {
    id: 718, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "new business due diligence" in AFC?',
    back: 'A risk assessment conducted BEFORE launching a new product, service, business line, or technology — to identify and mitigate potential AFC risks before they materialize. Ensures that risk is considered at the design stage, not after deployment.'
  },
  {
    id: 719, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is "adverse media screening"?',
    back: 'Searching news sources, court records, and databases for negative information about customers and related parties — indicating criminal activity, fraud, regulatory violations, or reputational risk. A key component of ongoing CDD and EDD.'
  },
  {
    id: 720, chapter: 7, chapterTitle: 'Building an AFC Compliance Program',
    front: 'What is a "Risk and Control Self-Assessment" (RCSA)?',
    back: 'A process where business functions self-identify risk exposures and evaluate the effectiveness of their controls. RCSA data serves as valuable input for internal audit exercises and helps the institution map its residual risk across business units.'
  },

  // ─── CHAPTER 8: Transaction Monitoring & Investigation (20 cards) ─────────
  {
    id: 801, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What are the 4 components of TM system tuning?',
    back: '1. Scenario setting (creating/modifying/removing detection rules)\n2. Customer segmentation (grouping customers with similar behavior)\n3. Threshold setting (minimum activity levels to trigger alerts)\n4. Frequency (how often tuning review occurs)'
  },
  {
    id: 802, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "above-the-line (ATL)" vs. "below-the-line (BTL)" testing?',
    back: 'ATL testing: Checks transactions that SHOULD be flagged — verifies the system catches genuine suspicious activity (tests for false negatives).\nBTL testing: Checks transactions BELOW the threshold — tests the system isn\'t missing suspicious activity at lower levels.'
  },
  {
    id: 803, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What are the 3 levels of alert review in TM?',
    back: 'Level 1: Initial review — analyst examines alert validity, dismisses false positives or escalates.\nLevel 2: Intermediate analysis — broader review of transaction history, entity information.\nLevel 3: Complex analysis — senior analysts for complex cases; decides whether to file SAR.'
  },
  {
    id: 804, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "network analysis" in transaction monitoring?',
    back: 'Technology that maps relationships between individuals, entities, accounts, and transactions to identify hidden connections. Detects patterns among beneficiaries and connected parties that might indicate ML — e.g., shared addresses, phone numbers, or email domains.'
  },
  {
    id: 805, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is OSINT (Open-Source Intelligence) in AML investigations?',
    back: 'Information gathered from publicly available sources — news databases, social media, business registries, court records, regulatory releases — used to supplement internal data when investigating suspicious activity or conducting due diligence.'
  },
  {
    id: 806, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is the "tipping off" prohibition?',
    back: 'Financial institutions are legally prohibited from disclosing to a customer or any related party that a SAR has been filed or is being considered. Tipping off can obstruct investigations, destroy evidence, and result in criminal liability for the individual.'
  },
  {
    id: 807, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What are the most common TM scenarios?',
    back: 'Structured transactions (smurfing), large cash transactions, deposits exceeding peak transaction values, high-velocity remittances, excessive channel use, round-trip transactions (sent and returned), one-to-N or N-to-one party patterns.'
  },
  {
    id: 808, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'When can an institution continue servicing a customer after filing a SAR?',
    back: 'An institution can continue (there is no automatic account closure requirement) but must document the decision to continue the relationship and apply enhanced monitoring. Law enforcement may specifically request continued service to gather intelligence.'
  },
  {
    id: 809, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is a "case management system" (CMS)?',
    back: 'Software platform tracking AML alert investigations from initial generation through final disposition and SAR filing. Documents evidence, records analyst decisions and rationale, manages deadlines, and produces management and regulatory reporting.'
  },
  {
    id: 810, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is a "NatWest-type" TM failure? What was the fine?',
    back: 'NatWest (Fowler Oldfield case) failures: mislabeling cash deposits as checks (bypassing cash rules), having no monitoring for high-risk customers, and disabling alerts due to high volumes. FCA fine: £264.8 million for failure to prevent £264M ML.'
  },
  {
    id: 811, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "contextual analysis" in AI-based TM?',
    back: 'Checks transactions against multiple simultaneous criteria: does the transaction exceed the threshold AND is it unusual for the customer\'s historical behavior AND does it differ from peer group behavior AND does it match sector risk typologies?'
  },
  {
    id: 812, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is a "FinCEN advisory" and how do compliance teams use them?',
    back: 'Notices issued by FinCEN identifying specific financial crime threats, red flags, and typologies. Compliance teams calibrate TM rules, update policies, and enhance training based on FinCEN advisories to address newly identified ML/TF methods.'
  },
  {
    id: 813, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is a "SAR narrative" and what should it contain?',
    back: 'The written description in a SAR explaining the suspicious activity. Should answer: Who? What? When? Where? Why? and How? — explaining the nature of the suspicious activity, the basis for suspicion, and any relevant account/transaction details clearly and factually.'
  },
  {
    id: 814, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is a "systemic BSA failure"?',
    back: 'Pervasive, institution-level failures in AML compliance affecting multiple program components simultaneously. Results in significant regulatory enforcement action including consent orders, DPAs, fines, and enhanced monitoring requirements.'
  },
  {
    id: 815, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "customer segmentation" in transaction monitoring?',
    back: 'Grouping customers with similar expected transaction behaviors (e.g., by industry, customer type, geographic location) so that TM thresholds can be calibrated appropriately for each segment — reducing false positives and improving detection of genuine anomalies.'
  },
  {
    id: 816, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What does "documenting no-SAR decisions" require?',
    back: 'When suspicious activity is investigated but a SAR is not filed, the institution should document: the analysis conducted, the specific rationale for not filing, any additional monitoring or review steps taken — creating a defensible audit trail for regulators.'
  },
  {
    id: 817, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is an "intelligence-led SAR"?',
    back: 'Under the AML Act of 2020, SARs are expected to function as high-quality intelligence tools for law enforcement and national security, not just regulatory checkbox filings. SAR data should be actively useful for investigations and risk analysis.'
  },
  {
    id: 818, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "threshold testing" in TM system management?',
    back: 'Validating that alert thresholds are correctly calibrated — not too high (missing genuine suspicious activity) or too low (generating excessive false positives). Involves statistical analysis of alert rates, SAR conversion rates, and expert judgment.'
  },
  {
    id: 819, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'How do compliance teams respond to law enforcement requests?',
    back: 'Review the legal basis (subpoena, court order, 314(a) notice), consult with legal counsel, produce responsive records in the required format and timeframe, maintain strict confidentiality (no tipping off), and keep records of all law enforcement contacts.'
  },
  {
    id: 820, chapter: 8, chapterTitle: 'Transaction Monitoring & Investigation',
    front: 'What is "Section 314(a)" information sharing?',
    back: 'FinCEN, on behalf of law enforcement agencies, can request financial institutions to search their records for accounts/transactions of specific individuals/entities suspected of ML/TF. Institutions must respond within 2 weeks and keep the request confidential.'
  },

  // ─── CHAPTER 9: Technology for AFC Compliance (20 cards) ─────────────────
  {
    id: 901, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "eKYC" and its advantages over traditional KYC?',
    back: 'Electronic KYC — digital identity verification replacing paper-based processes. Advantages: faster onboarding (hours vs. weeks), increased efficiency, reduced manual errors, real-time data accuracy, clear audit trails, and consistent application of verification standards.'
  },
  {
    id: 902, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is OCR (Optical Character Recognition) in KYC?',
    back: 'Technology converting scanned documents (passports, ID cards) into editable, searchable text. AI-enabled OCR accurately extracts data from complex fonts and layouts, reducing manual data entry errors and accelerating the document verification process.'
  },
  {
    id: 903, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is a "liveness check" in biometric verification?',
    back: 'Technology confirming that a face presented during verification is real and live — not a photo, pre-recorded video, or AI-generated deepfake. Critical for preventing synthetic identity fraud, especially as deepfake technology becomes increasingly sophisticated.'
  },
  {
    id: 904, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What are the 3 categories of Multi-Factor Authentication (MFA)?',
    back: '1. Ownership — something you have (hardware token, phone, smart card)\n2. Knowledge — something you know (password, PIN, security question)\n3. Inherence — something you are (fingerprint, face, voice, behavioral biometrics)'
  },
  {
    id: 905, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "fuzzy logic" in AML screening?',
    back: 'A name matching approach that identifies variations (phonetic similarities, spelling differences, transliteration variants) beyond exact matches. Reduces false negatives (missed matches) while proper calibration controls false positives.'
  },
  {
    id: 906, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "whitelisting" in AML screening systems?',
    back: 'Adding known, previously cleared matches to an internal approved list so the screening system doesn\'t repeatedly generate alerts for the same benign match. Improves operational efficiency without reducing screening coverage or compliance quality.'
  },
  {
    id: 907, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is the difference between payment screening and transaction monitoring?',
    back: 'Payment screening: PRE-transaction — identifies high-risk parties BEFORE transactions complete and STOPS suspicious payments in real time.\nTransaction monitoring: POST-transaction — detects unusual PATTERNS in completed transactions over time.'
  },
  {
    id: 908, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "behavioral biometrics" in AFC technology?',
    back: 'Monitoring distinctive characteristics of how users interact with devices: keystroke patterns, mouse movements, device orientation, typing rhythm, and geolocation patterns. Detects account takeovers and fraud when behavior deviates from the user\'s established profile.'
  },
  {
    id: 909, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "robotic process automation" (RPA) in compliance?',
    back: 'Automating repetitive, rule-based compliance tasks: data gathering for KYC, form completion, routine report generation, alert data population. Frees analysts for higher-value judgment-intensive work like investigation and decision-making.'
  },
  {
    id: 910, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "device intelligence" in AFC?',
    back: 'Analysis of device characteristics (fingerprint, IP address, geolocation, usage patterns) to detect anomalies indicating fraud, account takeover, or unauthorized access. Can identify criminals using spoofed devices or accessing accounts from unusual locations.'
  },
  {
    id: 911, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "blockchain tracing technology" in AFC investigations?',
    back: 'Analytics platforms (e.g., Chainalysis, Elliptic) that trace virtual asset flows on public blockchains, identifying links to illicit activity, sanctioned wallet addresses, mixing services, and criminal entities — enabling investigators to follow the crypto money trail.'
  },
  {
    id: 912, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "entity resolution" in compliance technology?',
    back: 'The process of confirming whether multiple records across different systems refer to the same real-world person or entity. Consolidates information to create a single accurate customer view — critical for detecting complex ownership structures and related party connections.'
  },
  {
    id: 913, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What are the FATF-identified advantages of digital onboarding technology?',
    back: 'Improved risk management, faster data processing, improved efficiency, greater auditability and governance, reduced cost, and versatile data handling (digital data is easier to analyze, share, and maintain than paper records).'
  },
  {
    id: 914, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "privacy-enhancing technology" (PET) in AFC?',
    back: 'Technology enabling institutions to analyze data and share intelligence for AFC purposes while preserving data privacy. Allows compliance with both AML requirements (data collection/sharing) and GDPR-type data protection regulations simultaneously.'
  },
  {
    id: 915, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What risks does the study guide identify with AI-based AFC tools?',
    back: 'Must be tested with diverse datasets to eliminate bias, must be explainable and transparent (regulators require explainability), must be relevant to the institution\'s specific context, and require ongoing governance and validation to maintain accuracy over time.'
  },
  {
    id: 916, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "geolocation technology" in AFC compliance?',
    back: 'Verifies customers\' physical location, detects access from high-risk jurisdictions, identifies VPN/proxy use masking true location, and flags unusual access patterns during onboarding or transactions. Helps enforce geographic restrictions and identify anomalous behavior.'
  },
  {
    id: 917, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "profiling/behavioral monitoring" in AFC technology?',
    back: 'Continuously monitoring how customers interact with systems and conduct transactions. When behavior deviates from the customer\'s established profile or peer group, the system flags the anomaly for analyst review. Enables detection of account takeover and unusual financial activity.'
  },
  {
    id: 918, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is the "honeypot problem" with national identity databases?',
    back: 'Centralized national identity databases curating valuable PII (personally identifiable information) become high-value targets (honeypots) for cyberattacks. A single breach can expose millions of citizens\' identity data, enabling large-scale synthetic identity fraud.'
  },
  {
    id: 919, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is a "coverage and gap assessment" for AFC technology?',
    back: 'An evaluation identifying gaps in the data inputs or scenarios needed for effective AFC detection — ensuring the monitoring system has adequate coverage of all the institution\'s ML/TF risk scenarios, customer types, products, and geographies.'
  },
  {
    id: 920, chapter: 9, chapterTitle: 'Technology for AFC Compliance',
    front: 'What is "governance of compliance technology"?',
    back: 'A structured framework ensuring AFC technology meets regulatory requirements, is properly validated and tested, change management is documented, and ongoing oversight maintains fitness-for-purpose. Includes model risk management and technology vendor oversight.'
  },

  // ─── CHAPTER 10: Data Collection & Preparation (20 cards) ────────────────
  {
    id: 1001, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is the distinction between "internal static data" vs. "internal observed data"?',
    back: 'Static data: Fixed information collected at customer onboarding — name, DOB, address, ID numbers (doesn\'t change unless updated).\nObserved data: Dynamic information generated through ongoing customer activity — transaction history, behavioral patterns, account changes.'
  },
  {
    id: 1002, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is ETL (Extract, Transform, Load) in AFC?',
    back: 'A data integration process that:\n• Extracts data from source systems\n• Transforms it (cleans, standardizes format)\n• Loads it into the compliance solution/data warehouse\nEnsures data quality and usability for AML monitoring tools.'
  },
  {
    id: 1003, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "entity resolution" and why is it critical?',
    back: 'Confirming whether multiple records across different systems refer to the same real-world entity. Critical for: accurate network analysis, proper customer risk scoring, detecting connected parties, and building a single unified customer view for compliance.'
  },
  {
    id: 1004, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "probabilistic matching" vs. "deterministic matching"?',
    back: 'Deterministic: Exact rule-based matches (e.g., same SSN = same person).\nProbabilistic: Assigns similarity scores based on weighted statistical attributes — identifies close matches even with minor discrepancies (e.g., name spelling variations). Both are used in entity resolution.'
  },
  {
    id: 1005, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data quality" and its four key dimensions?',
    back: '1. Accuracy — correct and error-free\n2. Completeness — all required fields populated\n3. Consistency — uniform across different systems\n4. Reliability — data can be trusted for decision-making\nPoor data quality directly undermines TM, entity resolution, and risk scoring.'
  },
  {
    id: 1006, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data lineage" in compliance?',
    back: 'Documentation of data\'s origin, how it flows through systems, how it is transformed, and its ultimate use. Critical for auditability (regulators can trace how decisions were made), data quality assurance, and identifying sources of errors.'
  },
  {
    id: 1007, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data mining" vs. "data matching" in AFC analytics?',
    back: 'Data mining: Extracts patterns and insights from large, complex datasets — anomaly detection, identifying unusual behaviors.\nData matching: Compares data across different sources to identify inconsistencies — e.g., comparing customer-provided address to public records.'
  },
  {
    id: 1008, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "clustering" in cryptocurrency blockchain analytics?',
    back: 'A deanonymizing technique that groups multiple cryptocurrency wallet addresses likely controlled by the same entity based on co-spending patterns. Helps investigators trace crypto flows by attributing pseudonymous addresses to a single real-world entity.'
  },
  {
    id: 1009, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data validation" in AFC systems?',
    back: 'Applying predefined rules and constraints to check that data is complete, in valid formats, within expected ranges, uses permitted values, and meets business requirements. Prevents corrupt or incorrect data from entering compliance systems and degrading alert quality.'
  },
  {
    id: 1010, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is a "data governance committee" and what does it oversee?',
    back: 'A centralized body establishing data handling policies, frameworks, and best practices across the organization. Oversees: data accuracy, security, regulatory compliance, consistency across business units, and formal approval of changes to compliance data systems.'
  },
  {
    id: 1011, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is a "data warehouse" vs. a "data lake"?',
    back: 'Data warehouse: Stores structured data optimized for analysis and reporting.\nData lake: Stores unstructured or semi-structured data at scale.\nAFC tools can access either through APIs or direct feeds; choice depends on the data type and the compliance use case.'
  },
  {
    id: 1012, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data governance administration" and what requires approval?',
    back: 'Manages changes to compliance systems through a formal approval process. Changes requiring governance approval: new data sources, modifications to existing sources, model threshold adjustments, ML parameter changes. All require impact assessment and validation before deployment.'
  },
  {
    id: 1013, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What types of external data sources do AFC systems use?',
    back: 'Sanctions/watchlist data (OFAC, UN, EU), PEP databases, adverse media databases, business registries, credit bureau data, geographic risk indices (Basel AML Index, CPI), law enforcement data (via 314(a)), and commercially available risk intelligence feeds.'
  },
  {
    id: 1014, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "API integration" and why is it important for AFC data?',
    back: 'Application Programming Interface connections enable real-time data exchange between compliance tools and external data sources (watchlists, databases, other internal systems). APIs enable perpetual KYC triggers, real-time screening, and faster data refresh cycles.'
  },
  {
    id: 1015, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "data enrichment" in the KYC/AML context?',
    back: 'Supplementing internally collected customer data with additional information from external sources (business registries, watchlists, adverse media, credit data) to create a more complete and accurate customer profile for risk assessment.'
  },
  {
    id: 1016, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is the "single customer view" (SCV) concept in AFC?',
    back: 'A consolidated, unified view of all data related to a single customer across all systems and product lines. Enables accurate risk assessment, proper beneficial ownership determination, network analysis, and ensures all red flags across products are visible to analysts.'
  },
  {
    id: 1017, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What challenges exist in "integrating data from various sources"?',
    back: 'Different data formats and standards across systems, inconsistent naming conventions, data quality variations, technical integration complexity, regulatory constraints on data sharing across entities, and the need for consistent data governance across all sources.'
  },
  {
    id: 1018, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What does "model risk management" cover for AFC models?',
    back: 'Governance function overseeing validation and oversight of AFC models (including TM systems). Ensures models are: accurate for their intended use, properly tested and documented, free from unintended bias, validated by independent reviewers, and re-validated after changes.'
  },
  {
    id: 1019, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is the risk of "poor data quality" for TM systems specifically?',
    back: 'False positives (normal transactions flagged as suspicious) from inconsistent data. False negatives (genuine suspicious activity missed) from incomplete data. Alert queues flooded with meaningless results, wasting analyst time on non-issues and missing real ML.'
  },
  {
    id: 1020, chapter: 10, chapterTitle: 'Data Collection & Preparation',
    front: 'What is "scenario-based monitoring" and what does scenario development involve?',
    back: 'Using predefined detection rules targeting known ML/TF patterns. Development involves: designing rules based on known typologies, customer risk profiles, regulatory guidance, FATF typology reports, FinCEN advisories, and prior SAR/investigation experience.'
  }
];
