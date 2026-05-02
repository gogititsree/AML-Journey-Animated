import { type QuizQuestion } from './quizQuestions';

export interface MockTest {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  questions: QuizQuestion[];
}

// ─── MOCK TEST 1: Financial Crime Methods & Typologies ────────────────────────
const test1Questions: QuizQuestion[] = [
  {
    id: 1001,
    category: "Financial Crime Methods",
    question: "According to the ACAMS study guide, which of the following best describes the concept of 'financial crime'?",
    options: [
      "Only money laundering and fraud",
      "Illegal activities that exploit financial systems for personal or organizational gain, including ML, fraud, tax evasion, sanctions evasion, and bribery",
      "Any crime committed using a bank account",
      "Criminal activities exclusively targeting financial institutions"
    ],
    answer: 1,
    explanation: "Financial crime encompasses a variety of illegal activities that exploit financial systems, including money laundering, fraud, tax evasion, sanctions evasion, and bribery/corruption."
  },
  {
    id: 1002,
    category: "Financial Crime Methods",
    question: "The study guide states that the three stages of money laundering are not always followed in exact order. What is the key objective of money laundering regardless of the order?",
    options: [
      "To move funds quickly across borders",
      "To avoid filing SARs and CTRs",
      "To 'clean' or conceal proceeds of criminal activity in order to use them in the legitimate economy",
      "To evade OFAC sanctions programs"
    ],
    answer: 2,
    explanation: "The primary objective of money laundering is to 'clean' or conceal the proceeds of criminal activity so they can be used in the legitimate economy, regardless of the exact sequence of placement, layering, and integration."
  },
  {
    id: 1003,
    category: "Financial Crime Methods",
    question: "FATF has identified how many categories of predicate offenses that financial institutions must acknowledge and monitor?",
    options: ["10", "15", "21", "40"],
    answer: 2,
    explanation: "FATF has identified 21 categories of predicate offenses that financial institutions must acknowledge and monitor under AML compliance programs."
  },
  {
    id: 1004,
    category: "Financial Crime Methods",
    question: "What is 'microstructuring' and how does it differ from traditional structuring?",
    options: [
      "Microstructuring uses smaller transaction amounts and is typically used in digital asset laundering",
      "Microstructuring only applies to wire transfers",
      "Microstructuring uses amounts just below $9,999",
      "There is no difference; the terms are interchangeable"
    ],
    answer: 0,
    explanation: "Microstructuring resembles traditional structuring but is typically used with digital asset laundering, involving even smaller incremental deposits spread across many accounts."
  },
  {
    id: 1005,
    category: "Financial Crime Methods",
    question: "The Tamayo case in the study guide illustrates money muling. What was a key tactic Tamayo used to avoid detection?",
    options: [
      "Filing false CTRs with FinCEN",
      "Using cryptocurrency mixing services exclusively",
      "Making incremental deposits typically under $1,000 spread across many accounts (microstructuring)",
      "Operating through overseas shell banks"
    ],
    answer: 2,
    explanation: "Tamayo used microstructuring — making even smaller incremental deposits, typically under $1,000, spread across many accounts — to make detection increasingly difficult."
  },
  {
    id: 1006,
    category: "Financial Crime Methods",
    question: "In trade-based money laundering (TBML), which of the following is NOT a recognized method?",
    options: [
      "Over-invoicing",
      "Under-invoicing",
      "Phantom shipments",
      "Currency structuring below $10,000"
    ],
    answer: 3,
    explanation: "TBML methods include over-invoicing, under-invoicing, multiple invoicing, and phantom shipments. Currency structuring is a separate ML technique not specific to trade-based laundering."
  },
  {
    id: 1007,
    category: "Financial Crime Methods",
    question: "How does market-based money laundering (MBML) work?",
    options: [
      "By using cash-intensive businesses to commingle funds",
      "By exploiting financial instruments such as stocks, bonds, hedge funds, and derivatives to create complex transaction chains that mask fund origins",
      "By using real estate transactions with inflated valuations",
      "By structuring deposits across multiple banks"
    ],
    answer: 1,
    explanation: "MBML exploits financial instruments including stocks, bonds, hedge funds, derivatives, and private equity investments to create complex transaction chains that mask the origin of illicit funds."
  },
  {
    id: 1008,
    category: "Financial Crime Methods",
    question: "According to the study guide, what makes shell companies useful for money laundering?",
    options: [
      "They are required to file SARs",
      "They facilitate illicit financial flows without conducting real business activities, making tracing difficult",
      "They can hold unlimited cash without reporting requirements",
      "They are exempt from CDD requirements"
    ],
    answer: 1,
    explanation: "Shell companies facilitate illicit financial flows without conducting real business activities, making it difficult to trace the origin of funds."
  },
  {
    id: 1009,
    category: "Sanctions Evasion",
    question: "Which of the following is a recognized method of sanctions evasion related to payments?",
    options: [
      "Filing SARs to alert regulators",
      "Stripping identifying information from payment instructions to avoid detection",
      "Using CTRs to disclose large transactions",
      "Applying for OFAC licenses"
    ],
    answer: 1,
    explanation: "Payment-related sanctions evasion occurs when identifying information is removed ('stripped') from payment instructions to avoid detection, often through nested and payable accounts."
  },
  {
    id: 1010,
    category: "Sanctions Evasion",
    question: "The Komarov case in the study guide illustrates sanctions evasion. What primary method did Komarov use to continue trading despite UN sanctions?",
    options: [
      "He bribed OFAC officials",
      "He created a shell company (RedStar Solutions) in a jurisdiction with limited AML/sanctions expectations and used falsified invoices",
      "He converted all transactions to cryptocurrency",
      "He registered as an exempt financial institution"
    ],
    answer: 1,
    explanation: "Komarov created RedStar Solutions, a shell company incorporated in a jurisdiction with limited regulatory expectations, and used falsified invoices to continue exports to a sanctioned country."
  },
  {
    id: 1011,
    category: "Bribery & Corruption",
    question: "According to the study guide, what is the key distinction between bribery and embezzlement?",
    options: [
      "Bribery involves only government officials while embezzlement involves private sector",
      "Bribery involves giving or receiving something for improper use of power; embezzlement is when someone entrusted with authority directly steals money",
      "They are legally identical in all jurisdictions",
      "Embezzlement is legal in some jurisdictions while bribery is never legal"
    ],
    answer: 1,
    explanation: "Bribery involves giving or receiving money or assets in exchange for improper use of delegated power. Embezzlement is when a person entrusted with authority directly steals money from the organization."
  },
  {
    id: 1012,
    category: "Bribery & Corruption",
    question: "The FullTechGlobal case in the study guide demonstrates which of the following?",
    options: [
      "That cryptocurrency is the primary vehicle for corporate bribery",
      "That the UK Bribery Act 2010 can hold parent companies liable for corrupt activities by subsidiaries regardless of location",
      "That OFAC enforces anti-bribery laws globally",
      "That inflated consultancy fees are always legitimate"
    ],
    answer: 1,
    explanation: "The FullTechGlobal case highlights the UK Bribery Act 2010's extraterritorial provisions, which hold parent firms liable for corrupt activities by subsidiaries regardless of location."
  },
  {
    id: 1013,
    category: "Tax Evasion",
    question: "How does the study guide distinguish between tax avoidance and tax evasion?",
    options: [
      "Tax avoidance is only legal in offshore jurisdictions; tax evasion is legal everywhere",
      "Tax avoidance is legitimate reduction of tax owed through legal means; tax evasion uses illegal practices to avoid tax liability",
      "Both are equally illegal under the BSA",
      "Tax evasion refers only to corporate tax; tax avoidance is for individuals"
    ],
    answer: 1,
    explanation: "Tax avoidance (tax planning) is legal. Tax evasion uses illegal practices such as not declaring taxable income or hiding assets. Tax evasion is illegal and is a predicate offense for money laundering."
  },
  {
    id: 1014,
    category: "Tax Evasion",
    question: "What is the Common Reporting Standard (CRS) and which body developed it?",
    options: [
      "A FinCEN initiative to standardize SAR formats across U.S. financial institutions",
      "A FATF standard requiring countries to share AML typology information annually",
      "An OECD standard requiring jurisdictions to obtain and automatically exchange financial account information with other jurisdictions to combat tax evasion",
      "A Basel Committee standard for capital adequacy reporting"
    ],
    answer: 2,
    explanation: "The CRS was developed in response to G-20 countries' request and approved by the OECD. It calls on jurisdictions to obtain information from financial institutions and automatically exchange it with other jurisdictions annually to combat tax evasion."
  },
  {
    id: 1015,
    category: "Fraud",
    question: "What are the three components of the 'Fraud Triangle' described in the study guide?",
    options: [
      "Intent, Opportunity, and Capability",
      "Pressure, Opportunity, and Rationalization",
      "Motive, Means, and Method",
      "Greed, Access, and Concealment"
    ],
    answer: 1,
    explanation: "The Fraud Triangle consists of: Pressure (or incentive — a financial problem driving fraud), Opportunity (lack of effective internal controls), and Rationalization (convincing oneself the fraud is justified)."
  },
  {
    id: 1016,
    category: "Cyber-Enabled Crime",
    question: "How does the study guide define 'cyber-enabled crime'?",
    options: [
      "Only hacking and data theft crimes",
      "Crimes committed exclusively through cryptocurrency",
      "Illegal activities carried out or facilitated by electronic systems and devices such as networks and computers",
      "Any crime where the perpetrator uses a computer"
    ],
    answer: 2,
    explanation: "FinCEN defines cyber-enabled crime as 'Illegal activities carried out or facilitated by electronic systems and devices, such as networks and computers,' including fraud, identity theft, and other crimes."
  },
  {
    id: 1017,
    category: "Cyber-Enabled Crime",
    question: "According to the study guide, what is the foundation of all cyber-enabled crime?",
    options: [
      "Technical sophistication of the criminal",
      "Trust — gaining the confidence of the target",
      "Access to cryptocurrency mixers",
      "Exploitation of weak AML controls"
    ],
    answer: 1,
    explanation: "The study guide states that the foundation of all cyber-enabled crime is trust — cybercriminals must gain the confidence of the target to succeed."
  },
  {
    id: 1018,
    category: "Predicate Crimes",
    question: "According to FATF's 21 predicate offenses, which of the following is included as a predicate crime for money laundering?",
    options: [
      "Filing a false SAR",
      "Environmental crime (including logging, poaching, and waste disposal)",
      "Failing to register as an MSB",
      "Operating without a banking license"
    ],
    answer: 1,
    explanation: "Environmental crime, including logging, poaching, and waste disposal, is number 12 on FATF's list of 21 predicate offenses."
  },
  {
    id: 1019,
    category: "Predicate Crimes",
    question: "What distinguishes human trafficking from human smuggling according to the study guide?",
    options: [
      "Human trafficking is always international; human smuggling can be domestic",
      "Human smuggling involves crossing a border and can only involve a foreign national; human trafficking can involve domestic citizens or foreign nationals",
      "Human trafficking is legal in some jurisdictions; smuggling never is",
      "There is no legal distinction between the two"
    ],
    answer: 1,
    explanation: "Human trafficking can involve domestic citizens or foreign nationals. Human smuggling involves transportation and, unlike trafficking, can only involve a foreign national since it requires crossing a border."
  },
  {
    id: 1020,
    category: "Predicate Crimes",
    question: "According to the study guide, why are environmental crimes particularly difficult to prosecute?",
    options: [
      "Because they don't generate significant financial proceeds",
      "Because they often involve TCOs, are difficult to detect, and can involve several global criminal and non-criminal regulations",
      "Because there are no international standards for environmental crime prosecution",
      "Because the proceeds are always moved through cryptocurrencies"
    ],
    answer: 1,
    explanation: "Environmental crimes are complex to prosecute because they often involve transnational criminal organizations (TCOs), can be very difficult to detect, and can involve several global criminal and non-criminal regulations."
  },
  {
    id: 1021,
    category: "Drug Trafficking",
    question: "What is the Colombian Black Market Peso Exchange (BMPE) and why is it notable in drug trafficking ML?",
    options: [
      "A formal peso-to-dollar exchange operated by the Colombian government",
      "A system where drug traffickers convert U.S. drug dollars into Colombian pesos through peso brokers, allowing them to settle drug debts while obscuring fund origins",
      "A cryptocurrency exchange used by Colombian drug cartels",
      "A FinCEN-designated MSB operating in South America"
    ],
    answer: 1,
    explanation: "The BMPE allows traffickers to convert U.S. dollar drug proceeds into Colombian pesos through peso brokers, settling drug debts or purchasing future shipments while obscuring the origins of funds — a classic TBML method."
  },
  {
    id: 1022,
    category: "Terrorism Financing",
    question: "According to the study guide, what is a key difference between terrorism financing and money laundering?",
    options: [
      "Terrorism financing is not covered by international AML standards",
      "Money laundering always involves larger amounts than terrorism financing",
      "Terrorism financing can use funds from legitimate sources for illegal purposes, while ML focuses on making illicit funds appear legitimate",
      "Terrorism financing is only conducted through hawala systems"
    ],
    answer: 2,
    explanation: "A critical distinction is that terrorism financing can use funds from both legitimate and illegitimate sources to support terrorist activities, while money laundering focuses on disguising illegally obtained funds."
  },
  {
    id: 1023,
    category: "Terrorism Financing",
    question: "What informal value transfer system do terrorists use that leaves minimal paper trails?",
    options: [
      "SWIFT transfer network",
      "Hawala (or hundi) networks",
      "Automated clearing house (ACH) systems",
      "Central bank digital currencies"
    ],
    answer: 1,
    explanation: "Hawala (or hundi) is an informal value transfer system based on trust and a network of brokers that operates outside formal financial systems, leaving minimal paper trails and posing significant ML/TF risks."
  },
  {
    id: 1024,
    category: "Consequences of Financial Crime",
    question: "According to the study guide, what are the types of risks that financial crime creates for financial institutions beyond direct financial losses?",
    options: [
      "Only reputational risk",
      "Only regulatory and legal risk",
      "Operational, legal, concentration, and reputational risks",
      "Credit risk and market risk only"
    ],
    answer: 2,
    explanation: "The study guide identifies operational, legal, concentration, and reputational risks as the types of risks financial crime creates for financial institutions beyond direct financial losses."
  },
  {
    id: 1025,
    category: "Financial Crime Methods",
    question: "What is 'commodity-based money laundering' as described in the study guide?",
    options: [
      "Money laundering through commodity futures markets",
      "Using high-value commodities such as gold, diamonds, luxury watches, and fine art to transfer value anonymously",
      "Laundering through agricultural commodity exports",
      "Money laundering through oil and gas contracts"
    ],
    answer: 1,
    explanation: "Commodity-based money laundering uses high-value commodities such as gold, diamonds, luxury watches, and fine art. These assets are bought with illicit funds, resold, or smuggled to avoid scrutiny."
  },
  {
    id: 1026,
    category: "Financial Crime Methods",
    question: "What role do 'money mules' play in money laundering operations?",
    options: [
      "They are financial institution employees who process SARs",
      "They act as intermediaries, transferring illicit funds between accounts on behalf of criminals, making fund transfers more difficult to trace",
      "They are law enforcement agents who infiltrate criminal organizations",
      "They are compliance officers who identify suspicious activity"
    ],
    answer: 1,
    explanation: "Money mules act as intermediaries who transfer illicit funds between accounts on behalf of criminals. They are often recruited through job scams, social engineering, or coercion, making fund transfers more difficult to trace."
  },
  {
    id: 1027,
    category: "Financial Crime Methods",
    question: "What is 'digital asset laundering' as described in the study guide?",
    options: [
      "Converting digital banking records to paper to hide transactions",
      "Using cryptocurrencies, NFTs, and DeFi for pseudonymous cross-border fund transfers; launderers use mixing services and privacy coins for anonymity",
      "Hacking into digital asset exchanges to steal funds",
      "Using digital currencies issued by central banks to launder money"
    ],
    answer: 1,
    explanation: "Digital asset laundering uses cryptocurrencies, NFTs, and DeFi to allow pseudonymous cross-border fund transfers. Launderers use mixing services and privacy coins for anonymity, often cashing out in jurisdictions with weak AML regulations."
  },
  {
    id: 1028,
    category: "Financial Crime Methods",
    question: "How do front businesses facilitate money laundering according to the study guide?",
    options: [
      "By filing false CTRs to confuse law enforcement",
      "By mixing illegal proceeds with legitimate revenue, making tracing difficult (e.g., a restaurant that inflates sales to disguise illicit income)",
      "By creating offshore bank accounts",
      "By recruiting money mules from their customer base"
    ],
    answer: 1,
    explanation: "Front businesses mix illegal proceeds with legitimate revenue, making tracing difficult. For example, a restaurant might inflate sales and rely on cash transactions to disguise its illicit income."
  },
  {
    id: 1029,
    category: "Terrorism Financing",
    question: "According to the study guide, where can terrorist financing funds come from?",
    options: [
      "Only from criminal proceeds such as drug trafficking",
      "Only from state sponsors of terrorism",
      "Both legitimate sources (donations, business income) and illegitimate sources (criminal activity)",
      "Exclusively from cryptocurrency transactions"
    ],
    answer: 2,
    explanation: "Terrorists move and store funds from both legitimate sources (donations, legitimate business operations) and illegitimate sources (criminal activity), which is a key difference from money laundering which focuses on illicit proceeds."
  },
  {
    id: 1030,
    category: "Bribery & Corruption",
    question: "According to the study guide, what is 'graft'?",
    options: [
      "A term for large-scale corporate embezzlement",
      "Obtaining a dishonest financial advantage in an indirect way, such as a government official hiring a company she owns and overpaying it",
      "A form of market manipulation using inside information",
      "The illegal use of one's position to accept bribes from foreign companies"
    ],
    answer: 1,
    explanation: "Graft is obtaining a dishonest financial advantage in a less direct way than embezzlement. For example, a government official in charge of appropriations hires a road construction company she owns and overpays it, to her own profit."
  },
  {
    id: 1031,
    category: "Financial Crime Methods",
    question: "According to the study guide, what is the primary risk of 'aggressive tax avoidance'?",
    options: [
      "It is treated as a predicate crime for money laundering in all jurisdictions",
      "It involves aggressive legal interpretation of tax law without adequately considering its intent or spirit",
      "It is equivalent to tax evasion under FATF standards",
      "It triggers mandatory SAR filing requirements"
    ],
    answer: 1,
    explanation: "Aggressive tax avoidance is defined as the aggressive legal interpretation of the law without adequately considering its intent or spirit (e.g., requiring subsidiaries to pay royalties to reduce taxable profits). It is legal but raises concerns."
  },
  {
    id: 1032,
    category: "Consequences of Financial Crime",
    question: "The study guide mentions 'institutional accountability to prevent financial crime.' Which of the following is an example of institutional-level consequence for AML failures?",
    options: [
      "Individual employees receiving training certificates",
      "Regulatory enforcement actions such as consent orders, fines, or deferred prosecution agreements",
      "Automatic exemption from OFAC screening",
      "Reduction in CTR filing requirements"
    ],
    answer: 1,
    explanation: "Institutional consequences for AML failures include regulatory enforcement actions such as consent orders, civil monetary penalties, and deferred prosecution agreements (DPAs)."
  },
  {
    id: 1033,
    category: "Financial Crime Methods",
    question: "In the Linguistix case example in the study guide, what was the initial red flag that triggered the AML investigation?",
    options: [
      "A large cash withdrawal from the company's account",
      "A significant increase in transaction volume beyond KYC projections, with transactions from high-risk jurisdictions",
      "A missed SAR filing by the compliance team",
      "The discovery of a shell company structure"
    ],
    answer: 1,
    explanation: "Joyce noticed that Linguistix had significantly increased its transaction volume over six months beyond initial KYC projections, with many transactions coming from high-risk jurisdictions — the initial red flags triggering investigation."
  },
  {
    id: 1034,
    category: "Predicate Crimes",
    question: "How do transnational criminal organizations (TCOs) use environmental crimes for money laundering, according to the study guide?",
    options: [
      "By investing proceeds from environmental crimes only in legal businesses",
      "By owning waste management front companies to inflate contracts (placing illicit funds), then executing those contracts with complicit accountholders (layering)",
      "By using cryptocurrency to purchase environmental credits",
      "By bribing environmental regulators to reduce their tax burden"
    ],
    answer: 1,
    explanation: "TCOs might be part-owners of waste management front companies, using them to inflate contracts to place illicit funds, then executing those contracts with complicit accountholders to layer the funds."
  },
  {
    id: 1035,
    category: "Sanctions Evasion",
    question: "What does 'ownership-related sanctions evasion' involve?",
    options: [
      "Transferring assets to a sanctioned entity without authorization",
      "Obscuring ownership of an asset by a designated person through complex corporate structures, proxies, bearer shares, or diluted ownership",
      "Owning less than 50% of a sanctioned entity to avoid liability",
      "Transferring ownership through a licensed intermediary"
    ],
    answer: 1,
    explanation: "Ownership-related evasion involves obscuring the ownership of an asset by a designated person using complex corporate structures, proxies, bearer shares, or diluting ownership to below the threshold for designation."
  },
  {
    id: 1036,
    category: "Fraud",
    question: "What common red flag of fraud is described in the study guide?",
    options: [
      "Transactions that match the customer's expected profile",
      "A sense of urgency combined with pressure to act immediately",
      "Payment of taxes ahead of schedule",
      "Large wire transfers to known correspondent banks"
    ],
    answer: 1,
    explanation: "The study guide lists 'sense of urgency' and 'pressure to act now' as key red flags of fraud, along with promises of high returns for low investment and demands for upfront payments."
  },
  {
    id: 1037,
    category: "Financial Crime Methods",
    question: "What is 'transshipment' in the context of trade-based sanctions evasion?",
    options: [
      "Transferring funds through multiple banks to obscure origins",
      "Switching cargo on the open sea to obscure the origin or destination of sanctioned goods",
      "Transferring shipments through SWIFT without identifying information",
      "Using transit countries for currency exchange"
    ],
    answer: 1,
    explanation: "Transshipment in trade-based sanctions evasion involves switching cargo on the open sea, using neutral or opaque jurisdictions for transit to obscure the true origin, destination, or nature of sanctioned goods."
  },
  {
    id: 1038,
    category: "Consequences of Financial Crime",
    question: "According to the study guide, what are the potential penalties for noncompliance with sanctions regulations?",
    options: [
      "Only civil monetary penalties",
      "Only criminal prosecution",
      "Civil monetary penalties, civil and criminal prosecution of individuals, and designation as a sanctions target",
      "Only regulatory warnings and remediation plans"
    ],
    answer: 2,
    explanation: "Penalties for failing to prevent sanctions evasion can include civil monetary penalties against organizations, civil and criminal prosecution of individuals, and even designation as a sanctions target."
  },
  {
    id: 1039,
    category: "Terrorism Financing",
    question: "How does the study guide characterize drug trafficking organizations' structure?",
    options: [
      "As loosely organized individual operators",
      "As highly structured networks analogous to multinational corporations with extensive global supply chains",
      "As primarily domestic operations with limited international reach",
      "As technology companies using cryptocurrency exclusively"
    ],
    answer: 1,
    explanation: "The study guide describes drug trafficking as operating as a highly structured network, analogous to a multinational corporation, with extensive global supply chains involving sourcing, manufacturing, and distribution stages."
  },
  {
    id: 1040,
    category: "Financial Crime Methods",
    question: "The study guide states that victims of human smuggling can also become victims of human trafficking. Which statement about this relationship is accurate?",
    options: [
      "All human trafficking victims have been smuggled",
      "Victims of human smuggling can become victims of human trafficking, but not all trafficking victims have been smuggled",
      "Human smuggling and trafficking always occur together",
      "Once smuggled, a person cannot become a trafficking victim"
    ],
    answer: 1,
    explanation: "Victims of human smuggling can become victims of human trafficking. However, not all trafficked victims have been smuggled — some are trafficked within their own countries."
  },
  {
    id: 1041,
    category: "Financial Crime Methods",
    question: "According to the study guide, what makes 'funnel accounts' associated with human trafficking significant for AML?",
    options: [
      "They are accounts specifically used for import/export transactions",
      "They are accounts used to aggregate and move illicit proceeds from human trafficking, often commingling funds from multiple sources",
      "They are accounts opened by law enforcement to trap criminals",
      "They are high-value accounts used exclusively for PEP transactions"
    ],
    answer: 1,
    explanation: "Funnel accounts aggregate and move illicit proceeds from human trafficking and other crimes. Proceeds from unknown sources are initially fragmented and then consolidated through funnel accounts, TBML schemes, shell companies, and cash-intensive businesses."
  },
  {
    id: 1042,
    category: "Fraud",
    question: "According to the study guide, what creates the 'opportunity' element in the Fraud Triangle?",
    options: [
      "The promise of high financial reward",
      "A lack of effective internal controls within an institution",
      "The perpetrator's technical skills",
      "External pressure from criminal organizations"
    ],
    answer: 1,
    explanation: "Opportunity in the Fraud Triangle is often provided by a lack of effective internal controls within an institution — for example, confidential documents left unattended or weak oversight of financial processes."
  },
  {
    id: 1043,
    category: "Cyber-Enabled Crime",
    question: "What direct link between cyber-enabled crime and money laundering does the study guide describe?",
    options: [
      "Cyber crimes always result in SAR filings",
      "Cyber-enabled criminals gain access to funds rapidly but must still launder their ill-gotten gains; terrorists and launderers use many of the same techniques",
      "Cyber crimes are self-laundering because they leave no financial trace",
      "Cyber-enabled crime only affects the banking sector"
    ],
    answer: 1,
    explanation: "The study guide notes a direct relationship: cyber-enabled criminals must still launder their proceeds, and terrorists and money launderers use many of the same techniques. Both occur rapidly through many accounts."
  },
  {
    id: 1044,
    category: "Predicate Crimes",
    question: "Why does the legal status of some drugs complicate enforcement and regulation efforts, according to the study guide?",
    options: [
      "Because some drugs are only illegal at the federal level but legal at the state level",
      "Because drugs like fentanyl and cannabis have legal medicinal uses and cannabis use is permitted in certain jurisdictions but illegal in others",
      "Because drug trafficking is not a predicate offense in many jurisdictions",
      "Because the UN has not classified drug trafficking as a financial crime"
    ],
    answer: 1,
    explanation: "The legal status of some drugs complicates enforcement. For example, both fentanyl and cannabis have legal medicinal uses, and recreational cannabis is permitted in certain jurisdictions but illegal in others."
  },
  {
    id: 1045,
    category: "Financial Crime Methods",
    question: "What financial instruments are associated with market-based money laundering (MBML)?",
    options: [
      "Only cash and bearer bonds",
      "Only cryptocurrency and NFTs",
      "Stocks, bonds, hedge funds, derivatives, and private equity investments",
      "Only wire transfers and prepaid cards"
    ],
    answer: 2,
    explanation: "MBML exploits financial instruments including stocks, bonds, hedge funds, derivatives, and private equity investments to create complex transaction chains that mask fund origins."
  },
  {
    id: 1046,
    category: "Sanctions Evasion",
    question: "What is 'trade-related sanctions evasion' as described in the study guide?",
    options: [
      "Filing false trade documents to avoid import duties",
      "Illegally importing or exporting goods without proper licensing or despite trade bans, using shell companies, transshipment, and neutral jurisdictions for transit",
      "Using inflated trade invoices for tax evasion purposes",
      "Engaging in trade with countries that have not signed FATF agreements"
    ],
    answer: 1,
    explanation: "Trade-related evasion involves illegally importing or exporting goods without proper licensing or despite trade bans. Common techniques include shell companies, transshipment, and using neutral/opaque jurisdictions for transit."
  },
  {
    id: 1047,
    category: "Consequences of Financial Crime",
    question: "According to the study guide, what social consequences can financial crime cause?",
    options: [
      "Only economic inflation",
      "Undermining the integrity of economies and markets, with broader social impacts including funding criminal enterprises that harm communities",
      "Only damage to individual financial institutions",
      "Only regulatory burden increases"
    ],
    answer: 1,
    explanation: "Financial crime has serious repercussions including undermining the integrity of economies and markets, and broader social consequences such as funding criminal enterprises that harm communities."
  },
  {
    id: 1048,
    category: "Bribery & Corruption",
    question: "What is 'influence peddling' as described in the study guide?",
    options: [
      "Paying for positive media coverage of a financial institution",
      "A form of corruption where one uses their connections or position to exert influence for personal gain",
      "Marketing financial products to government officials",
      "The legal practice of lobbying for regulatory changes"
    ],
    answer: 1,
    explanation: "Influence peddling is one of the types of corruption identified in the study guide — using connections or position to exert influence for personal benefit, similar to bribery but operating through relationships rather than direct payments."
  },
  {
    id: 1049,
    category: "Financial Crime Methods",
    question: "What is the significance of the 21 FATF-designated predicate crimes varying by jurisdiction?",
    options: [
      "It means FATF standards are not truly international",
      "Compliance professionals in cross-border contexts must align risk controls with the laws and regulations of more than one jurisdiction",
      "It has no practical impact on AML operations",
      "Financial institutions only need to comply with the home jurisdiction's list"
    ],
    answer: 1,
    explanation: "Because different jurisdictions might classify predicate offenses differently, compliance professionals operating in cross-border contexts must align risk controls with the laws and regulations of more than one jurisdiction."
  },
  {
    id: 1050,
    category: "Financial Crime Methods",
    question: "According to the study guide, what is a 'front company' and how does it differ from a shell company?",
    options: [
      "They are identical — the terms are interchangeable",
      "A front company has some legitimate operations used as cover for ML activities; a shell company has no real business operations at all",
      "A shell company has legitimate operations while a front company has none",
      "Front companies are always publicly listed while shell companies are private"
    ],
    answer: 1,
    explanation: "A front company appears to have legitimate operations (like a restaurant) but also engages in illicit activities. A shell company has no real business operations at all — it exists only to facilitate financial flows."
  }
];

// ─── MOCK TEST 2: Sector-Specific ML Risks ────────────────────────────────────
const test2Questions: QuizQuestion[] = [
  {
    id: 2001,
    category: "Banking Risks",
    question: "According to the study guide, what unique risk does 'remote onboarding' in retail banking introduce?",
    options: [
      "Higher transaction fees that discourage legitimate customers",
      "Additional risks to the verification process, making it easier for criminals to use fake or stolen identities and exploit technology weaknesses",
      "Reduced ability to offer investment products",
      "Increased compliance costs for small banks"
    ],
    answer: 1,
    explanation: "Remote onboarding in retail banking introduces additional risks to the verification process, making it easier for criminals to use fake or stolen identities (including synthetic identities using deepfake technology)."
  },
  {
    id: 2002,
    category: "Banking Risks",
    question: "According to the study guide, why is deepfake technology a specific concern in retail banking?",
    options: [
      "It allows criminals to impersonate bank employees",
      "It enables exploitation of selfie and video verification processes used in remote onboarding to create synthetic identities",
      "It is used to generate fraudulent SARs",
      "It allows unauthorized access to transaction monitoring systems"
    ],
    answer: 1,
    explanation: "Remote onboarding uses selfies and videos for identity verification, which deepfake technology can exploit to create synthetic identities that are difficult to detect during the onboarding process."
  },
  {
    id: 2003,
    category: "Banking Risks",
    question: "What money laundering risk do 'mule accounts' present in retail banking?",
    options: [
      "They are accounts used exclusively for cryptocurrency transactions",
      "Criminals recruit individuals to transfer illicit funds through their personal bank accounts, making it challenging to trace the origin of funds",
      "They are accounts that criminals use to structure cash deposits",
      "They are dormant accounts used for account takeover fraud"
    ],
    answer: 1,
    explanation: "Mule accounts are personal bank accounts used by individuals recruited by criminals to transfer illicit funds. These mule accounts act as intermediaries that make it challenging to trace the origin of funds."
  },
  {
    id: 2004,
    category: "Banking Risks",
    question: "How does early loan repayment constitute a money laundering risk, according to the study guide?",
    options: [
      "It reduces the bank's revenue and triggers AML alerts",
      "Criminals repay loans ahead of schedule with illicit funds, converting illegal proceeds into ostensibly legitimate funds",
      "It is a sign of financial health and not a risk indicator",
      "Early repayment is prohibited by BSA regulations"
    ],
    answer: 1,
    explanation: "Early loan repayment can be used by criminals to disguise the origin of illicit funds. By repaying loans ahead of schedule, criminals can convert illegal proceeds into ostensibly legitimate funds, complicating detection."
  },
  {
    id: 2005,
    category: "Banking Risks",
    question: "Why are prepaid cards considered higher risk for money laundering than other card products?",
    options: [
      "They have higher transaction limits than credit cards",
      "They can be purchased and reloaded anonymously with minimal KYC, making them susceptible to moving illicit funds without detection",
      "They are not regulated by financial authorities",
      "They provide access to offshore accounts"
    ],
    answer: 1,
    explanation: "Prepaid cards can be purchased and reloaded anonymously with minimal KYC, are not linked to a bank account, and function as bearer instruments — characteristics that make them susceptible to exploitation for moving illicit funds."
  },
  {
    id: 2006,
    category: "Banking Risks",
    question: "At which stage of money laundering are credit cards MOST likely to be used?",
    options: [
      "Placement stage",
      "Layering and integration stages",
      "Pre-placement stage only",
      "They are never used in money laundering"
    ],
    answer: 1,
    explanation: "Credit card accounts are not typically used in the initial placement stage of money laundering. They are more likely to be used in the layering and integration stages, particularly through overpayment or quick paydown with illicit funds."
  },
  {
    id: 2007,
    category: "Banking Risks",
    question: "What is the AML risk presented by 'concentration accounts'?",
    options: [
      "They hold too much capital, distorting bank balance sheets",
      "They commingle funds from multiple customers in a single account, obscuring beneficial ownership and making individual transaction tracking difficult",
      "They are held exclusively by sanctioned entities",
      "They are used only for MSB transactions, creating sectoral concentration risk"
    ],
    answer: 1,
    explanation: "Concentration accounts commingle funds from multiple customers in a single account, making it difficult to trace individual transactions and identify beneficial ownership — a significant AML risk."
  },
  {
    id: 2008,
    category: "Banking Risks",
    question: "According to the study guide, why is 'beneficial ownership' particularly challenging in commercial banking?",
    options: [
      "Commercial banking customers are always anonymous",
      "Identifying beneficial owners of corporate accounts is challenging, making it easier to hide SDNs within intricate ownership webs",
      "Beneficial ownership rules don't apply to commercial banking",
      "Commercial banks process too many transactions to conduct beneficial ownership checks"
    ],
    answer: 1,
    explanation: "Complex ownership structures in commercial banking make it challenging to identify the true beneficial owners of corporate accounts, creating opportunities to hide Specially Designated Nationals within intricate ownership webs."
  },
  {
    id: 2009,
    category: "Private Banking Risks",
    question: "What creates an inherent conflict of interest in private banking that can undermine AML compliance?",
    options: [
      "The requirement to file SARs for all high-net-worth clients",
      "Compensation structures based on Assets Under Management (AUM), which create pressure to acquire and retain clients potentially overriding AFC concerns",
      "The requirement to provide EDD for all private banking clients",
      "Investment losses that create pressure on relationship managers"
    ],
    answer: 1,
    explanation: "Private banking relationship managers are often compensated based on AUM they bring to the institution. This creates a conflict of interest where financial pressure to grow AUM may cause relationship managers to overlook AFC red flags."
  },
  {
    id: 2010,
    category: "Private Banking Risks",
    question: "What are 'sovereign wealth funds' (SWFs) and what AML risk do they present?",
    options: [
      "Retail investment funds sold to government employees",
      "State-owned investment funds that can present opacity challenges since the ultimate beneficial ownership and political connections can be difficult to determine",
      "Funds that are automatically exempt from AML requirements",
      "Central bank reserve funds with no AML risk"
    ],
    answer: 1,
    explanation: "Sovereign wealth funds are state-owned investment funds. They can present AML risks due to potential opacity around their ultimate beneficial ownership and political connections, requiring careful due diligence."
  },
  {
    id: 2011,
    category: "Private Banking Risks",
    question: "What risk do 'offshore financial centers' present in private banking?",
    options: [
      "They always have stronger AML regulations than onshore centers",
      "They can facilitate opacity through bank secrecy laws, limited regulatory oversight, and complex cross-border structures that make beneficial ownership difficult to identify",
      "They only serve legitimate tax planning purposes",
      "They are subject to the same regulations as domestic banking"
    ],
    answer: 1,
    explanation: "Offshore financial centers can facilitate opacity through bank secrecy laws, limited regulatory oversight, and complex cross-border structures that make it difficult to identify beneficial ownership and trace the origin of funds."
  },
  {
    id: 2012,
    category: "Private Banking Risks",
    question: "What is a 'special purpose vehicle' (SPV) and what AML risk does it present?",
    options: [
      "A dedicated AML compliance function within a bank",
      "A legal entity created to isolate financial risk; SPVs can be used to obscure beneficial ownership and the origin of funds",
      "A vehicle used only for legitimate securitization of assets",
      "An OFAC-approved structure for managing sanctioned assets"
    ],
    answer: 1,
    explanation: "Special purpose vehicles (SPVs) are legal entities created to isolate financial risk. However, they can be misused to obscure beneficial ownership and the origin of funds, making regulatory oversight more complex."
  },
  {
    id: 2013,
    category: "Corporate & Investment Banking Risks",
    question: "According to the study guide, what are 'capital markets risks' in the context of money laundering?",
    options: [
      "The risk that capital market volatility reduces bank profits",
      "The risk of launderers using securities transactions, derivatives, and other capital market instruments to layer illicit funds",
      "The risk of regulatory non-compliance in bond issuances",
      "The risk of credit rating downgrade due to money laundering exposure"
    ],
    answer: 1,
    explanation: "Capital markets risks in AML refer to the risk that launderers exploit securities transactions, derivatives, and other capital market instruments to create complex transaction chains that layer illicit funds."
  },
  {
    id: 2014,
    category: "MSB Risks",
    question: "What is a 'payment service provider' (PSP) and what AML risk do they present?",
    options: [
      "A bank subsidiary that provides payroll services with no ML risk",
      "A non-bank entity that processes payments on behalf of customers; PSPs can face risks from high transaction volumes, cross-border reach, and diverse customer bases",
      "A government-approved clearing house for interbank settlements",
      "A cryptocurrency exchange exclusively serving institutional clients"
    ],
    answer: 1,
    explanation: "PSPs process payments on behalf of customers and face ML risks from high transaction volumes, cross-border reach, diverse customer bases, and potential gaps in AML controls across jurisdictions they operate in."
  },
  {
    id: 2015,
    category: "MSB Risks",
    question: "What distinguishes e-commerce ML risks from traditional banking ML risks?",
    options: [
      "E-commerce transactions are exempt from AML regulations",
      "E-commerce platforms can facilitate anonymous cross-border transactions with complex payment flows, third-party sellers, and challenging customer identification",
      "E-commerce has lower transaction volumes than traditional banking",
      "E-commerce only operates in low-risk jurisdictions"
    ],
    answer: 1,
    explanation: "E-commerce platforms present unique ML risks including anonymous cross-border transactions, complex payment flows involving multiple intermediaries, third-party sellers, and challenging customer identification processes."
  },
  {
    id: 2016,
    category: "Insurance & Securities Risks",
    question: "What AML risk does the insurance sector face specifically related to early policy surrenders?",
    options: [
      "Early policy surrenders create excess profits for insurers",
      "Criminals purchase high-value insurance policies with illicit funds, then surrender them early and receive 'clean' refund payments from the insurer",
      "Early surrenders trigger mandatory CTR filings",
      "Insurance companies face no AML risk from policy surrenders"
    ],
    answer: 1,
    explanation: "A key insurance ML typology involves purchasing high-value policies with illicit funds, then early surrender — receiving a 'clean' refund check from a legitimate insurance company, effectively laundering the funds."
  },
  {
    id: 2017,
    category: "Insurance & Securities Risks",
    question: "What securities and brokerage risk does the study guide identify?",
    options: [
      "Securities firms have no AML obligations",
      "The complexity of securities transactions, the use of nominee accounts, and the ability to obscure beneficial ownership through multiple layers of transactions",
      "Securities transactions are always transparent and easy to monitor",
      "Securities firms are exempt from SAR filing requirements"
    ],
    answer: 1,
    explanation: "Securities and brokerage risks include the complexity of transactions, use of nominee accounts, and ability to obscure beneficial ownership through multiple transaction layers, making it difficult to identify the true source and destination of funds."
  },
  {
    id: 2018,
    category: "Cryptoasset Risks",
    question: "What makes cryptoasset-to-fiat conversion points particularly vulnerable to money laundering?",
    options: [
      "Fiat currency is unregulated",
      "Without proper controls, the conversion point between cryptoassets and fiat is particularly vulnerable because CDD requirements may be weak or absent",
      "All cryptocurrency transactions are anonymous",
      "Fiat conversions are too small to monitor effectively"
    ],
    answer: 1,
    explanation: "The conversion point between cryptoassets and fiat currency is particularly vulnerable. Without proper CDD checks and monitoring by VASPs, criminals can launder crypto proceeds by converting them to fiat with minimal oversight."
  },
  {
    id: 2019,
    category: "Cryptoasset Risks",
    question: "What are 'privacy coins' and why do they pose heightened AML risk?",
    options: [
      "Coins issued by central banks with privacy protections",
      "Cryptocurrencies that use non-public blockchains to facilitate anonymous fund transfers, further complicating efforts to attribute transactions",
      "Stablecoins that protect user data from being shared with regulators",
      "NFTs that allow anonymous art purchases"
    ],
    answer: 1,
    explanation: "Privacy coins use non-public blockchains to facilitate anonymous fund transfers, making it much harder to trace transactions and attribute them to specific parties — heightening the risk of illicit activity."
  },
  {
    id: 2020,
    category: "Cryptoasset Risks",
    question: "What are crypto mixers/tumblers according to the study guide, and what is their fee range?",
    options: [
      "Hardware wallets; they charge no fees",
      "Services that pool and mix transactions to obscure the trail between sending and receiving addresses; they typically charge 1% to 3%",
      "Cryptocurrency exchanges; they charge 0.1% to 0.5%",
      "DeFi protocols; they charge variable fees based on liquidity"
    ],
    answer: 1,
    explanation: "Mixers and tumblers are services/protocols that mix funds from different entities and return them from new addresses, making tracing nearly impossible. Mixing protocols earn funds by taking a fee, usually 1% to 3%."
  },
  {
    id: 2021,
    category: "Cryptoasset Risks",
    question: "Which was the world's first fully implemented Central Bank Digital Currency (CBDC)?",
    options: [
      "China's Digital Yuan (e-CNY)",
      "Nigeria's eNaira",
      "The Bahamas' Sand Dollar",
      "Jamaica's Jam-Dex"
    ],
    answer: 2,
    explanation: "The Bahamas' Sand Dollar was the first fully implemented CBDC in the world, launched in October 2020, available across the island for use alongside traditional cash."
  },
  {
    id: 2022,
    category: "Cryptoasset Risks",
    question: "What AML red flag involving cryptoassets does the study guide specifically identify?",
    options: [
      "Any use of a cryptocurrency exchange",
      "A customer who purchases cryptoassets with funds that significantly exceed their known wealth or source of funds",
      "Using cryptocurrency for retail purchases",
      "Holding cryptocurrency in a personal wallet"
    ],
    answer: 1,
    explanation: "The study guide identifies as a red flag: 'A customer who purchases cryptoassets with funds that significantly exceed their known wealth or source of funds.' This inconsistency between funds used and known wealth profile warrants investigation."
  },
  {
    id: 2023,
    category: "DNFBP Risks",
    question: "What does DNFBP stand for?",
    options: [
      "Digital Non-Financial Business Platform",
      "Designated Nonfinancial Businesses and Professions",
      "Domestic Non-Federal Banking Practice",
      "Derivatives and Non-Formal Banking Products"
    ],
    answer: 1,
    explanation: "DNFBP stands for Designated Nonfinancial Businesses and Professions — entities that are not primarily financial institutions but engage in activities that are at risk for money laundering and terrorist financing."
  },
  {
    id: 2024,
    category: "DNFBP Risks",
    question: "Why are DNFBPs referred to as 'gatekeepers' in the study guide?",
    options: [
      "Because they control access to international financial markets",
      "Because they act as intermediaries between criminals and the financial system, and if safeguards are absent, can be exploited for illicit purposes",
      "Because they are responsible for monitoring financial institution transactions",
      "Because they hold the 'gate' — the passwords — to financial institution systems"
    ],
    answer: 1,
    explanation: "DNFBPs are called 'gatekeepers' because they act as intermediaries between criminals and the financial system. Without adequate safeguards, they can be exploited to hide the origins of illicit funds, create legal structures, or handle high-value goods."
  },
  {
    id: 2025,
    category: "DNFBP Risks",
    question: "The Hendricks case in the study guide illustrates how money laundering cases can involve multiple DNFBPs. What does this demonstrate about modern ML schemes?",
    options: [
      "That ML schemes always require only one DNFBP type",
      "That many money laundering cases require the involvement of more than one DNFBP to execute the transaction",
      "That DNFBPs are always knowingly complicit in ML",
      "That ML only occurs in jurisdictions with weak DNFBP regulations"
    ],
    answer: 1,
    explanation: "The Hendricks case demonstrated how ML cases can involve multiple DNFBPs — real estate agents, lawyers/TCSPs, and accountants — each presenting unique risks and together enabling a complex ML scheme."
  },
  {
    id: 2026,
    category: "DNFBP Risks",
    question: "What makes dealers in precious metals and stones particularly high-risk among DNFBP types?",
    options: [
      "They handle the highest volume of cash transactions",
      "The portability of valuable goods that can be easily converted into cash or moved across borders without triggering scrutiny, combined with high-value, cross-border transactions",
      "They have the weakest AML regulations of all DNFBP types",
      "They are always anonymous sellers"
    ],
    answer: 1,
    explanation: "Dealers in precious metals and stones are among the higher-risk DNFBP types due to the portability of valuable goods (easily converted to cash or moved across borders), high-value assets, high-volume transactions, and cross-border nature."
  },
  {
    id: 2027,
    category: "Gaming Risks",
    question: "How do physical casinos facilitate money laundering according to the study guide?",
    options: [
      "By accepting only electronic payments that are easier to trace",
      "By allowing criminals to anonymously purchase chips with illicit funds, gamble briefly, and cash out, effectively 'cleaning' their money",
      "By providing complimentary services to high-value criminal customers",
      "By accepting cryptocurrency deposits"
    ],
    answer: 1,
    explanation: "Physical casinos are particularly vulnerable because criminals can anonymously purchase chips with illicit funds, engage in minimal actual gambling, and then cash out — effectively laundering their money through the casino's cash exchange process."
  },
  {
    id: 2028,
    category: "Gaming Risks",
    question: "What are 'junkets' in the casino context and why are they high-risk?",
    options: [
      "Discarded casino chips that can be resold",
      "Tourism arrangements including sponsored or incentive-based trips to casinos; high-risk due to cross-border movement of funds and high-net-worth individuals, with junket operators rarely collecting adequate KYC",
      "Casino loyalty programs that provide cash rewards",
      "High-value gambling tables reserved for VIP customers"
    ],
    answer: 1,
    explanation: "Junkets are forms of tourism including sponsored or incentive-based trips to casinos, particularly involving high-net-worth individuals. They are high-risk because junket operators rarely collect KYC details from customers before referring them to casinos."
  },
  {
    id: 2029,
    category: "Gaming Risks",
    question: "What is 'collusion gaming' (peer-to-peer gaming like poker) and how is it used for money laundering?",
    options: [
      "Two players working together to beat the house",
      "Participants intentionally losing to another player to transfer value and potentially criminal proceeds",
      "A casino operator collaborating with a customer to inflate winnings",
      "Online gaming operators allowing unlicensed jurisdictions to access their platform"
    ],
    answer: 1,
    explanation: "In peer-to-peer or collusion gaming (such as poker), participants may intentionally lose to another player to transfer value — effectively moving criminal proceeds to another party disguised as gambling winnings."
  },
  {
    id: 2030,
    category: "Real Estate Risks",
    question: "According to the study guide, what specific practices in real estate facilitate money laundering?",
    options: [
      "Standard property mortgages with bank financing",
      "Inflating property values or creating complex ownership structures that obscure true ownership, particularly with international buyers and high-value assets",
      "Using licensed real estate agents and standard appraisals",
      "Purchasing property below market value"
    ],
    answer: 1,
    explanation: "Real estate transactions can be used to launder money by inflating property values or creating complex ownership structures that obscure true ownership. The risk increases with international buyers and high-value assets in markets with limited regulatory oversight."
  },
  {
    id: 2031,
    category: "Legal Services Risks",
    question: "What unique protection does 'legal privilege' provide that increases its AML risk?",
    options: [
      "Legal privilege exempts lawyers from all AML reporting requirements",
      "Legal privilege protects client communications from disclosure, which criminals exploit to shield financial crime discussions from regulatory scrutiny",
      "Legal privilege allows lawyers to hold funds for clients without oversight",
      "Legal privilege enables lawyers to create untraceable shell companies"
    ],
    answer: 1,
    explanation: "Legal privilege (attorney-client privilege) protects client communications from disclosure. Criminals exploit this protection to shield financial crime discussions from regulatory scrutiny, making the legal sector particularly attractive for ML schemes."
  },
  {
    id: 2032,
    category: "Banking Risks",
    question: "According to the study guide, what makes the Estonian bank branch case study notable?",
    options: [
      "It involved the largest cryptocurrency ML scheme in history",
      "It illustrated shell and shelf company risks in banking, where opaque corporate structures facilitated significant illicit funds flows",
      "It was the first case where a bank was held criminally liable for ML",
      "It demonstrated the failure of automated transaction monitoring systems"
    ],
    answer: 1,
    explanation: "The Estonian bank branch case study in the study guide illustrated how shell and shelf company risks in banking can lead to significant illicit fund flows, demonstrating the importance of identifying beneficial ownership in corporate accounts."
  },
  {
    id: 2033,
    category: "Banking Risks",
    question: "What is the 'politically exposed person' (PEP) risk associated with private banking specifically mentioned in the study guide?",
    options: [
      "PEPs have lower transaction volumes than standard customers",
      "Customers who are PEPs or have close PEP associates increase bribery and corruption risk for the institution's private banking business",
      "PEPs must be automatically rejected as private banking customers",
      "PEPs are exempt from EDD requirements in private banking"
    ],
    answer: 1,
    explanation: "In private banking, customers who are considered PEPs or have close associates who are PEPs increase the bribery and corruption risk of the business, requiring enhanced due diligence and senior management approval."
  },
  {
    id: 2034,
    category: "DNFBP Risks",
    question: "What AML gap exists for attorneys in the U.S. that the Hendricks case task force identified?",
    options: [
      "Attorneys are required to file SARs for all client funds",
      "Attorneys in the U.S. are self-regulated by state bar associations which provide recommended rules but lack mandatory AML reporting requirements",
      "Attorneys must register with FinCEN as financial institutions",
      "Attorneys have stricter AML obligations than banks in the U.S."
    ],
    answer: 1,
    explanation: "The task force noted that U.S. attorneys are self-regulated by state bar associations, which provide recommended rules but lack mandatory reporting requirements — a significant gap in the AML/CFT framework."
  },
  {
    id: 2035,
    category: "High-Risk Sectors",
    question: "Why are free-trade zones (FTZs) considered high risk for money laundering?",
    options: [
      "FTZs are exempt from all customs requirements",
      "FTZs often have reduced regulatory oversight, making them attractive for trade-based ML through phantom shipments, mislabeled goods, and falsified documentation",
      "FTZs require all transactions in cash",
      "FTZs are managed exclusively by unsupervised private entities"
    ],
    answer: 1,
    explanation: "Free-trade zones are high-risk because they often have reduced regulatory oversight, making them attractive for trade-based money laundering through phantom shipments, mislabeled goods, falsified documentation, and the movement of controlled goods."
  },
  {
    id: 2036,
    category: "High-Risk Sectors",
    question: "What is the AML risk associated with charities and NGOs?",
    options: [
      "They are exempt from AML regulations because of their humanitarian mission",
      "They can be misused as conduits for terrorist financing — knowingly or unknowingly — due to their ability to raise public funds, operate internationally, and receive cash donations",
      "Their transactions are too small to pose significant ML risks",
      "They are subject to OFAC sanctions automatically"
    ],
    answer: 1,
    explanation: "NGOs and charities can be misused for terrorist financing because they raise funds from the public, operate internationally, and may receive cash donations — creating significant ML/TF vulnerabilities even without the organization's knowledge."
  },
  {
    id: 2037,
    category: "Banking Risks",
    question: "What is a 'trade-related' TBML risk involving 'letters of credit'?",
    options: [
      "Letters of credit always guarantee legitimate trade transactions",
      "Letters of credit can be misused to create fictitious trade transactions to move illicit funds across borders",
      "Letters of credit automatically trigger SWIFT reporting",
      "Only banks issue letters of credit, so there is no ML risk"
    ],
    answer: 1,
    explanation: "Letters of credit can be misused to create fictitious trade transactions (phantom shipments) to move illicit funds across borders under the guise of legitimate trade finance."
  },
  {
    id: 2038,
    category: "Credit Union Risks",
    question: "What unique AML challenge do credit unions and building societies face compared to traditional banks?",
    options: [
      "They have more products and services than larger banks",
      "The member-centric model can create challenges: mutual trust and community may lead to less rigorous scrutiny; smaller operations may lack resources for comprehensive AML programs",
      "They are exempt from FATF classification as financial institutions",
      "They cannot file SARs"
    ],
    answer: 1,
    explanation: "Credit unions and building societies face unique challenges: the member-centric model may lead to reduced scrutiny, and smaller-scale operations may lack the resources and expertise to implement comprehensive AML/CFT programs."
  },
  {
    id: 2039,
    category: "Cryptoasset Risks",
    question: "What are 'algorithmic stablecoins' and their specific ML risk?",
    options: [
      "Stablecoins backed by fiat currency with no ML risk",
      "Stablecoins that maintain their peg through algorithms; money launderers may use them to move funds rapidly, leveraging value fluctuations to disguise illicit asset transfers",
      "Government-issued digital currencies with strong AML controls",
      "Stablecoins backed by gold reserves"
    ],
    answer: 1,
    explanation: "Algorithmic stablecoins maintain their peg through algorithms rather than fiat or crypto collateral. Money launderers may use them to move funds rapidly, leveraging value fluctuations to disguise illicit asset transfers and complicate forensic tracking."
  },
  {
    id: 2040,
    category: "High-Risk Sectors",
    question: "What are 'alternative remittance systems' (ARS) and why do they pose AML risks?",
    options: [
      "Regulated remittance businesses like Western Union",
      "Informal value transfer systems (like hawala) that operate outside formal financial systems, leaving minimal paper trails",
      "Central bank-approved cross-border payment systems",
      "Digital payment apps regulated under BSA requirements"
    ],
    answer: 1,
    explanation: "Alternative remittance systems (including hawala/hundi) are informal value transfer systems that operate outside formal financial systems based on trust and broker networks, leaving minimal paper trails and posing significant ML/TF risks."
  },
  {
    id: 2041,
    category: "Corporate Banking Risks",
    question: "What is the money laundering risk associated with 'fundraising' in corporate and investment banking?",
    options: [
      "Fundraising always involves illicit funds",
      "Corporate fundraising can be exploited to introduce illicit funds into legitimate capital structures through complex financial instruments",
      "Fundraising is exempt from AML monitoring",
      "Fundraising risks only apply to private companies"
    ],
    answer: 1,
    explanation: "Fundraising in corporate and investment banking can be exploited by money launderers to introduce illicit funds into legitimate capital structures through complex financial instruments, making the origin of funds difficult to trace."
  },
  {
    id: 2042,
    category: "Insurance & Securities Risks",
    question: "What is a 'custodial services risk' in the securities sector?",
    options: [
      "Risk from storing physical assets in bank vaults",
      "The risk that custodians holding assets on behalf of clients are used to layer illicit funds through complex transfer arrangements that obscure beneficial ownership",
      "Risk from inadequate insurance of held assets",
      "Risk from cybersecurity breaches of custodial databases"
    ],
    answer: 1,
    explanation: "Custodial services risks arise when custodians holding assets on behalf of clients are used to layer illicit funds through complex transfer arrangements, potentially obscuring beneficial ownership and the true source of assets."
  },
  {
    id: 2043,
    category: "DNFBP Risks",
    question: "What AML risk do 'trust and company service providers' (TCSPs) present?",
    options: [
      "They are always subject to the same AML regulations as banks",
      "TCSPs create structures (trusts, companies) that obscure beneficial ownership and origin of funds, making them attractive to individuals seeking to launder money",
      "Their services are too expensive to be used by money launderers",
      "TCSPs are only used by legitimate estate planning clients"
    ],
    answer: 1,
    explanation: "TCSPs create corporate and trust structures that can obscure beneficial ownership and the origin of funds. These structures complicate regulatory oversight and increase the risk of exploitation for money laundering."
  },
  {
    id: 2044,
    category: "Banking Risks",
    question: "What is 'control and ownership' analysis in AML compliance for banking?",
    options: [
      "An audit of who controls the bank's internal systems",
      "The process of identifying who owns and controls customer entities to assess ML risk and determine beneficial ownership",
      "A regulatory review of a bank's board composition",
      "An assessment of which employees have system access"
    ],
    answer: 1,
    explanation: "Control and ownership analysis in AML involves identifying who owns and controls customer entities (businesses, trusts, etc.) to properly assess ML risk, fulfill beneficial ownership requirements, and identify potential SDN exposure."
  },
  {
    id: 2045,
    category: "High-Risk Sectors",
    question: "What is the AML risk associated with military organizations and goods?",
    options: [
      "Military transactions are exempt from AML requirements",
      "Arms trafficking — the illicit trade of military equipment — is a major predicate crime, and legitimate military contractors can be used to mask illegal arms sales",
      "Military banks operate under separate regulatory frameworks with no AML requirements",
      "Military organizations are always government entities with no ML risk"
    ],
    answer: 1,
    explanation: "Military organizations and goods present AML risks because arms trafficking (illicit arms trade) is a major predicate crime, and legitimate military contractors can potentially be used to mask illegal arms sales or sanctioned weapons transfers."
  },
  {
    id: 2046,
    category: "Cryptoasset Risks",
    question: "What are Non-Fungible Tokens (NFTs) and what ML risk do they present?",
    options: [
      "Government-issued digital tokens with strong AML controls",
      "Unique digital assets on blockchain; their high price volatility, speculative nature, and ability to obscure transaction trails make them prone to ML, especially for layering",
      "A type of stablecoin pegged to art market values",
      "NFTs are immune to money laundering because each transaction is publicly recorded"
    ],
    answer: 1,
    explanation: "NFTs are unique digital assets that are highly volatile and speculative. Their capacity to obscure transaction trails, subjective valuations, and cross-border reach make them prone to ML and layering of illicit funds."
  },
  {
    id: 2047,
    category: "Trade Finance Risks",
    question: "What is 'factoring and forfaiting' and what ML risk does it present?",
    options: [
      "Standard bank credit products with no ML risk",
      "Trade finance arrangements that can be exploited to convert illicit receivables into legitimate funds",
      "Government-backed export financing programs",
      "Insurance products for trade finance transactions"
    ],
    answer: 1,
    explanation: "Factoring and forfaiting are trade finance arrangements where receivables are sold to a third party. They can be exploited to convert illicit receivables into legitimate funds, making it difficult to trace the origin of the underlying transactions."
  },
  {
    id: 2048,
    category: "MSB Risks",
    question: "What specific risk does 'banking MSBs' present that the study guide identifies?",
    options: [
      "MSBs always operate in compliance with AML regulations",
      "MSBs can be used to layer illicit funds through multiple transactions across different institutions and jurisdictions, with the volume and speed of transactions complicating oversight",
      "MSBs are exempt from FinCEN registration requirements",
      "MSBs only serve low-risk domestic customers"
    ],
    answer: 1,
    explanation: "Banking MSBs presents risks because MSBs handle high volumes of transactions across different institutions and jurisdictions, with the speed and volume of transactions making effective oversight and ML detection challenging."
  },
  {
    id: 2049,
    category: "Gaming Risks",
    question: "What online gaming-specific risk does the study guide highlight regarding jurisdictional controls?",
    options: [
      "Online gaming is more regulated than physical casinos",
      "Online gaming operators might permit customers outside the jurisdiction to participate if IP spoofing occurs or geolocation safeguards fail, often facilitated by VPNs",
      "Online gaming has no AML obligations",
      "Online gaming platforms always verify customer identity more rigorously than physical casinos"
    ],
    answer: 1,
    explanation: "Online gaming operators might inadvertently permit customers outside their jurisdiction to participate if IP spoofing occurs or geolocation safeguards fail — often facilitated by VPNs — exposing them to customers from restricted or high-risk jurisdictions."
  },
  {
    id: 2050,
    category: "High-Risk Sectors",
    question: "What is the AML risk when providing financial services to embassies, foreign consulates, and missions?",
    options: [
      "These entities are automatically exempt from all AML requirements",
      "Diplomatic immunity can complicate customer due diligence, and the potential involvement of government officials and politically exposed persons creates elevated bribery and corruption risk",
      "These entities always have lower transaction volumes",
      "Diplomatic entities are the safest customers from an AML perspective"
    ],
    answer: 1,
    explanation: "Providing services to embassies, foreign consulates, and missions presents risks because diplomatic immunity can complicate due diligence, and the involvement of government officials and PEPs creates elevated bribery and corruption risk."
  }
];

// ─── MOCK TEST 3: Global Standards & Regulatory Frameworks ───────────────────
const test3Questions: QuizQuestion[] = [
  {
    id: 3001,
    category: "FATF Standards",
    question: "What are FATF's '11 Immediate Outcomes' and what do they measure?",
    options: [
      "The 11 recommended actions FATF requires following a mutual evaluation",
      "The results that a country's AML/CFT system should achieve to be considered effective — assessed during FATF mutual evaluations",
      "The 11 categories of predicate offenses requiring immediate enforcement action",
      "The 11 core components of a compliant AML program"
    ],
    answer: 1,
    explanation: "FATF's 11 Immediate Outcomes are the results that an effective AML/CFT system should achieve. They are assessed during mutual evaluations to determine whether a country's system is technically compliant and effective."
  },
  {
    id: 3002,
    category: "FATF Standards",
    question: "What does a FATF 'mutual evaluation' involve?",
    options: [
      "A financial institution's internal self-assessment of its AML program",
      "A peer review where FATF members assess another country's AML/CFT legal, institutional, and supervisory frameworks against the 40 Recommendations",
      "An annual audit of all financial institutions in a country by FATF",
      "A joint review by FATF and the IMF of a country's economic stability"
    ],
    answer: 1,
    explanation: "FATF mutual evaluations are peer reviews where FATF member countries assess another country's AML/CFT framework — including laws, regulations, supervisory practices, and outcomes — against the 40 Recommendations."
  },
  {
    id: 3003,
    category: "FATF Standards",
    question: "What impact can a FATF mutual evaluation report have on a jurisdiction?",
    options: [
      "No practical impact — it is advisory only",
      "It can result in listing on the grey or black list, affecting international business relationships, correspondent banking, and foreign investment",
      "It automatically triggers IMF sanctions",
      "It results in mandatory compliance with OFAC programs"
    ],
    answer: 1,
    explanation: "FATF mutual evaluation reports can significantly impact jurisdictions — poor results can lead to grey or black listing, affecting correspondent banking relationships, foreign investment flows, and international business."
  },
  {
    id: 3004,
    category: "FATF Standards",
    question: "What are 'FATF-style regional bodies' (FSRBs)?",
    options: [
      "FATF's regional enforcement offices",
      "Regional organizations that associate with FATF and implement FATF standards in their regions through mutual evaluations and capacity building",
      "Central bank coalitions that enforce FATF recommendations",
      "Regional law enforcement organizations coordinating AML actions"
    ],
    answer: 1,
    explanation: "FSRBs are regional organizations that are associate members of FATF and implement FATF standards in their respective regions through mutual evaluations, technical assistance, and capacity building."
  },
  {
    id: 3005,
    category: "FATF Standards",
    question: "What does FATF Recommendation 1 — the risk-based approach — require?",
    options: [
      "Filing a SAR for all transactions above $10,000",
      "Countries and institutions should identify, assess, and understand their ML/TF risks and apply measures commensurate with those risks",
      "Equal application of AML controls to all customers regardless of risk",
      "Annual risk assessments by all financial institutions"
    ],
    answer: 1,
    explanation: "FATF Recommendation 1 requires countries and financial institutions to identify, assess, and understand their ML/TF risks and take measures commensurate with those risks — the foundation of the risk-based approach."
  },
  {
    id: 3006,
    category: "International Organizations",
    question: "What is the Egmont Group and what is its primary function?",
    options: [
      "A European banking regulatory body",
      "An international network of over 160 Financial Intelligence Units (FIUs) that facilitates cooperation and intelligence sharing to combat ML and TF",
      "A private sector AML standards body",
      "A UN body responsible for imposing sanctions"
    ],
    answer: 1,
    explanation: "The Egmont Group is an international network of over 160 Financial Intelligence Units (FIUs) that facilitates international cooperation and intelligence sharing to combat money laundering and terrorist financing."
  },
  {
    id: 3007,
    category: "International Organizations",
    question: "What is the Wolfsberg Group's primary contribution to AML compliance?",
    options: [
      "It sets international standards that have the force of law",
      "An association of major global banks that develops AML guidance including the Correspondent Banking Due Diligence Questionnaire (CBDDQ)",
      "A UN body that enforces FATF recommendations",
      "A law enforcement organization specializing in financial crime"
    ],
    answer: 1,
    explanation: "The Wolfsberg Group is an association of major global banks that develops financial crime risk management standards and guidance. Its CBDDQ is a key industry tool for assessing correspondent banking relationships."
  },
  {
    id: 3008,
    category: "International Organizations",
    question: "What is the Basel Committee on Banking Supervision's role in AML?",
    options: [
      "It directly enforces AML penalties against banks",
      "It issues guidance on sound practices for managing ML risks in banking, including guidance on KYC and customer due diligence",
      "It sets the FATF 40 Recommendations",
      "It manages the SDN list on OFAC's behalf"
    ],
    answer: 1,
    explanation: "The Basel Committee on Banking Supervision issues guidance on sound practices for managing ML risks in banking, including key papers on KYC, customer due diligence, and consolidated AML supervision."
  },
  {
    id: 3009,
    category: "International Organizations",
    question: "What is the Basel AML Index and what does it measure?",
    options: [
      "A ranking of countries' AML enforcement activity levels",
      "An independent risk assessment tool that evaluates a country's vulnerability to money laundering using a composite methodology with 17 indicators in five domains",
      "A list of countries that have implemented all 40 FATF Recommendations",
      "A scoring system for individual financial institutions' AML program quality"
    ],
    answer: 1,
    explanation: "The Basel AML Index is an independent tool that evaluates a country's vulnerability to ML and related financial crimes using 17 indicators in five domains: AML/CFT framework quality, corruption/fraud risks, financial transparency, public transparency, and legal/political risks."
  },
  {
    id: 3010,
    category: "International Organizations",
    question: "What is the Tax Justice Network's Financial Secrecy Index?",
    options: [
      "A ranking of countries that have failed to implement tax treaties",
      "A biennial ranking of 141 jurisdictions based on the amount of financial secrecy associated with each and the volume of financial services provided to non-residents",
      "An OECD tool for identifying tax evasion jurisdictions",
      "A FinCEN database of high-risk financial jurisdictions"
    ],
    answer: 1,
    explanation: "The TJN's Financial Secrecy Index ranks 141 jurisdictions based on financial secrecy levels and financial services provided to non-residents. Higher rankings indicate greater roles in enabling wealthy individuals and criminals to hide and launder money."
  },
  {
    id: 3011,
    category: "US Regulations",
    question: "The U.S. BSA describes an AML program with five pillars. Which of the following is the fifth pillar added by FinCEN's CDD Rule?",
    options: [
      "Mandatory SAR filing for all suspicious activity",
      "An ongoing CDD program using a risk-based approach, including beneficial ownership identification",
      "Annual enterprise-wide risk assessments",
      "Mandatory independent testing by external auditors"
    ],
    answer: 1,
    explanation: "The fifth pillar of the U.S. BSA AML program (added by FinCEN's 2016 CDD Rule) is: 'Develop an ongoing CDD program using a risk-based approach,' including the identification and verification of beneficial owners of legal entity customers."
  },
  {
    id: 3012,
    category: "US Regulations",
    question: "What did Section 311 of the USA PATRIOT Act authorize?",
    options: [
      "CDD requirements for all new customers",
      "FinCEN to impose special measures on foreign jurisdictions or institutions designated as primary money laundering concerns",
      "Prohibition on correspondent accounts with foreign shell banks",
      "Law enforcement information sharing with financial institutions"
    ],
    answer: 1,
    explanation: "Section 311 allows FinCEN/U.S. Treasury to designate foreign jurisdictions, institutions, or transactions as money laundering risks and impose special measures — up to prohibiting correspondent accounts — on the designee."
  },
  {
    id: 3013,
    category: "US Regulations",
    question: "What did the Anti-Money Laundering Act of 2020 (AML Act) accomplish regarding cryptocurrency exchanges?",
    options: [
      "It exempted cryptocurrency exchanges from BSA requirements",
      "It classified cryptocurrency exchanges as money services businesses with the same licensing and reporting requirements as traditional MSBs",
      "It created a separate regulatory framework exclusively for crypto",
      "It prohibited U.S. banks from servicing cryptocurrency exchanges"
    ],
    answer: 1,
    explanation: "The AML Act of 2020 explicitly includes cryptocurrency exchanges as money services businesses, subjecting them to the same licensing and reporting requirements as traditional MSBs under the BSA."
  },
  {
    id: 3014,
    category: "US Regulations",
    question: "What is the primary purpose of the Corporate Transparency Act (CTA), part of the AML Act of 2020?",
    options: [
      "Requiring public disclosure of executive compensation",
      "Creating a federal beneficial ownership registry requiring most U.S. corporations and LLCs to disclose beneficial owners to FinCEN",
      "Expanding SAR reporting requirements to all businesses",
      "Creating criminal penalties for hiring illegal immigrants"
    ],
    answer: 1,
    explanation: "The CTA, part of the AML Act of 2020, requires shell companies and other previously unregulated legal entities to disclose their beneficial owners and register ownership structures with FinCEN, creating a national BO database."
  },
  {
    id: 3015,
    category: "US Regulations",
    question: "According to the study guide, what expanded purpose do SARs serve under the AML Act of 2020?",
    options: [
      "SARs are no longer required under the AML Act",
      "SARs are now expected to provide 'high degree of usefulness' as intelligence tools for law enforcement and national security, going beyond simple regulatory reporting",
      "SARs must now be filed within 15 days instead of 30 days",
      "SARs must now include full biometric data on all involved parties"
    ],
    answer: 1,
    explanation: "The AML Act of 2020 transforms SARs from simple reporting requirements to intelligence tools. SARs are now expected to provide a 'high degree of usefulness' for law enforcement and national security agencies."
  },
  {
    id: 3016,
    category: "EU Regulations",
    question: "What is the EU's 'AML Authority' (AMLA) and what is its purpose?",
    options: [
      "A committee of EU finance ministers that discusses AML policy",
      "A new EU supervisory body established to directly oversee certain high-risk obliged entities and coordinate national AML supervisors across the EU",
      "An EU law enforcement body that investigates money laundering",
      "A body that manages the EU sanctions list"
    ],
    answer: 1,
    explanation: "The EU's AML Authority (AMLA) is a new EU-level supervisory body established to directly supervise certain high-risk obliged entities and to coordinate and support national AML supervisors across EU member states."
  },
  {
    id: 3017,
    category: "EU Regulations",
    question: "What is the EU's 'Markets in Cryptoassets Regulation' (MiCA)?",
    options: [
      "An EU ban on cryptocurrency trading",
      "A comprehensive EU regulatory framework for cryptoasset service providers, establishing AML/CFT and operational requirements across EU member states",
      "A voluntary industry standard for crypto exchanges",
      "A FATF requirement adopted by the EU for virtual asset regulation"
    ],
    answer: 1,
    explanation: "MiCA (Markets in Cryptoassets Regulation) is a comprehensive EU regulatory framework that establishes requirements for cryptoasset service providers, including AML/CFT obligations, across all EU member states."
  },
  {
    id: 3018,
    category: "Other Jurisdictions",
    question: "According to the study guide, what key AML requirement does Singapore's regulatory framework include?",
    options: [
      "Singapore has no AML requirements for financial institutions",
      "Singapore requires financial institutions to implement risk-based AML/CFT programs, conduct customer due diligence, and file suspicious transaction reports (STRs)",
      "Singapore only regulates banks, not other financial institutions",
      "Singapore relies solely on FATF recommendations without domestic legislation"
    ],
    answer: 1,
    explanation: "Singapore's AML regulatory framework requires financial institutions to implement risk-based AML/CFT programs, conduct customer due diligence (including EDD for high-risk customers), and file Suspicious Transaction Reports (STRs) with the Financial Intelligence Unit."
  },
  {
    id: 3019,
    category: "US Regulations",
    question: "What is FinCEN's primary mission?",
    options: [
      "To enforce criminal AML laws through direct prosecution",
      "To protect the financial system from illicit activities, combat financial crimes, and enhance national security by collecting, analyzing, and disseminating financial intelligence",
      "To set global AML standards on behalf of the United States",
      "To manage the Federal Reserve's anti-crime programs"
    ],
    answer: 1,
    explanation: "FinCEN's mission is to protect the financial system from illicit activities, combat financial crimes, and enhance national security. It is the central U.S. authority that collects, analyzes, and disseminates financial intelligence."
  },
  {
    id: 3020,
    category: "International Organizations",
    question: "What UN conventions does the study guide identify as foundational to international AML law?",
    options: [
      "Only the Vienna Convention",
      "The Vienna Convention (1988), the Palermo Convention (2000), and the 1999 Convention for the Suppression of the Financing of Terrorism",
      "Only the Palermo Convention",
      "The UN Charter and the International Covenant on Civil and Political Rights"
    ],
    answer: 1,
    explanation: "The study guide identifies the Vienna Convention (1988 — criminalizing drug ML), the Palermo Convention (2000 — UN Convention Against Transnational Organized Crime), and the 1999 Convention for the Suppression of the Financing of Terrorism as foundational to international AML law."
  },
  {
    id: 3021,
    category: "Other Regulations",
    question: "What is the 'Digital Operational Resilience Act' (DORA) and its relevance to AFC?",
    options: [
      "A U.S. law mandating digital filing of all AML reports",
      "An EU regulation establishing ICT (information and communication technology) risk management requirements for financial entities, impacting how AFC technology is managed",
      "A FATF recommendation on AI governance",
      "A Basel Committee standard for cybersecurity in banking"
    ],
    answer: 1,
    explanation: "DORA is an EU regulation that establishes ICT risk management requirements for financial entities. It is relevant to AFC because it impacts how financial institutions manage the technology underlying their AML/CFT programs and ensures operational resilience."
  },
  {
    id: 3022,
    category: "Other Regulations",
    question: "How does the EU GDPR affect AML/CFT programs?",
    options: [
      "GDPR exempts AML activities from all data protection requirements",
      "GDPR creates a tension between data privacy rights (limiting data collection and retention) and AML transparency requirements (requiring data collection and sharing); organizations must balance both",
      "GDPR requires all AML data to be shared publicly",
      "GDPR only applies to marketing data, not compliance data"
    ],
    answer: 1,
    explanation: "GDPR creates a balance challenge: AML/CFT programs require collecting and retaining customer data, but GDPR protects personal data rights. Organizations must balance privacy compliance with AML transparency requirements."
  },
  {
    id: 3023,
    category: "Private-Public Cooperation",
    question: "What is 'public-private partnership' in AML, as described in the study guide?",
    options: [
      "Private banks funding public law enforcement agencies",
      "Formal collaboration between government authorities (law enforcement, regulators, FIUs) and private sector financial institutions to share intelligence and improve financial crime detection",
      "Public companies partnering with private banks for compliance",
      "Government ownership of private financial institutions"
    ],
    answer: 1,
    explanation: "Public-private partnerships in AML involve formal collaboration between government authorities (law enforcement, regulators, FIUs) and private sector financial institutions to share intelligence and improve the financial system's ability to detect and prevent financial crime."
  },
  {
    id: 3024,
    category: "International Organizations",
    question: "What is Transparency International's Corruption Perceptions Index (CPI)?",
    options: [
      "An index ranking financial institutions by AML compliance",
      "A ranking of countries based on perceived levels of public sector corruption, using data from expert assessments and business surveys",
      "A list of corrupt politicians published by the UN",
      "An OECD index ranking tax havens by risk level"
    ],
    answer: 1,
    explanation: "The CPI ranks countries based on perceived levels of public sector corruption using data from expert assessments and business surveys across up to 13 sources measuring factors such as bribery and misuse of public office."
  },
  {
    id: 3025,
    category: "Private-Public Cooperation",
    question: "What is the AUSTRAC Fintel Alliance mentioned in the study guide?",
    options: [
      "Australia's national sanctions enforcement unit",
      "An Australian public-private partnership between AUSTRAC (Australia's FIU) and major financial institutions to share intelligence and combat financial crime",
      "A technology firm developing AML software for Australian regulators",
      "An APAC regional FATF-style body"
    ],
    answer: 1,
    explanation: "The Fintel Alliance is a collaborative intelligence sharing program between AUSTRAC (Australia's FIU/financial intelligence unit) and major financial institutions, demonstrating effective public-private AML partnership."
  },
  {
    id: 3026,
    category: "US Regulations",
    question: "Under the USA PATRIOT Act, what does Section 312 mandate regarding correspondent banking?",
    options: [
      "It prohibits correspondent accounts with all foreign banks",
      "It mandates EDD for correspondent accounts held by foreign financial institutions and applies EDD requirements to private banking accounts for non-U.S. persons",
      "It requires all correspondent accounts to be reported to FinCEN monthly",
      "It limits correspondent banking to FATF-compliant jurisdictions only"
    ],
    answer: 1,
    explanation: "Section 312 mandates Enhanced Due Diligence (EDD) for correspondent accounts held by foreign financial institutions. It also applies EDD requirements to private banking accounts maintained for non-U.S. persons."
  },
  {
    id: 3027,
    category: "US Regulations",
    question: "What does Section 313 of the USA PATRIOT Act prohibit?",
    options: [
      "Information sharing between financial institutions",
      "U.S. financial institutions from maintaining correspondent accounts for foreign shell banks — banks with no physical presence in any country",
      "All correspondent banking with foreign banks in FATF grey-listed countries",
      "Wire transfers to foreign financial institutions without EDD"
    ],
    answer: 1,
    explanation: "Section 313 prohibits U.S. financial institutions from maintaining correspondent accounts for foreign shell banks — financial institutions that have no physical presence in any country and are not affiliated with a regulated financial group."
  },
  {
    id: 3028,
    category: "EU Regulations",
    question: "What does the EU's AML 'package' include?",
    options: [
      "Only one comprehensive AML regulation",
      "A set of legislative measures including a regulation applying directly to obliged entities, a directive for Member State national frameworks, and the establishment of AMLA",
      "A single directive that all EU member states must implement",
      "The European equivalent of the U.S. PATRIOT Act"
    ],
    answer: 1,
    explanation: "The EU AML package includes multiple legislative measures: a regulation directly applicable to obliged entities (removing implementation variation), a directive for national frameworks, and the establishment of the new AML Authority (AMLA)."
  },
  {
    id: 3029,
    category: "International Organizations",
    question: "According to the study guide, what is the International Centre for Asset Recovery (ICAR)?",
    options: [
      "A UN agency that recovers stolen state assets",
      "A specialized division of the Basel Institute on Governance that works on asset recovery through case advice, capacity building, institutional development, and global policy dialogue",
      "A division of FinCEN managing forfeiture cases",
      "An INTERPOL unit specializing in financial crime asset recovery"
    ],
    answer: 1,
    explanation: "ICAR is a specialized division of the Basel Institute on Governance that works through four interventions: case advice and international cooperation, capacity building and training, institutional development and legal/policy advice, and global policy dialogue and innovation."
  },
  {
    id: 3030,
    category: "Other Regulations",
    question: "What is the relevance of 'ESG regulations' to AFC professionals?",
    options: [
      "ESG regulations replace AML regulations in many jurisdictions",
      "ESG frameworks are increasingly linking environmental, social, and governance factors to financial crime risk — climate-related financial crimes and corruption undermining ESG goals are emerging AFC concerns",
      "ESG is only relevant to investment managers, not AML compliance",
      "ESG regulations have no relevance to financial crime prevention"
    ],
    answer: 1,
    explanation: "ESG regulations are increasingly relevant to AFC professionals as they link environmental, social, and governance factors to financial crime risks. Environmental crimes (like illegal logging) and corruption undermine ESG goals, creating new AFC considerations."
  },
  {
    id: 3031,
    category: "US Regulations",
    question: "What strategic priorities did the AML Act of 2020 require FinCEN to address through further rulemaking?",
    options: [
      "Only technology innovation and cryptocurrency",
      "Corruption, fraud, cybercrime, terrorist financing, transnational crime, drug trafficking, human trafficking, and nuclear proliferation financing",
      "Only domestic financial crime and tax evasion",
      "Only correspondent banking and shell company regulation"
    ],
    answer: 1,
    explanation: "The AML Act requires development of further regulations covering: corruption/fraud, cybercrime, terrorist financing, transnational criminal activity, drug trafficking, human trafficking, and nuclear proliferation financing."
  },
  {
    id: 3032,
    category: "FATF Standards",
    question: "What does FATF Recommendation 15, updated in 2019, extend to?",
    options: [
      "Domestic PEP requirements for all jurisdictions",
      "Virtual assets and Virtual Asset Service Providers (VASPs), including extending the Travel Rule to virtual asset transfers",
      "Central bank digital currency regulations",
      "Cryptocurrency ban in FATF-grey-listed countries"
    ],
    answer: 1,
    explanation: "FATF Recommendation 15, updated in 2019, extends AML/CFT requirements to virtual assets and VASPs, including the Travel Rule requirement for virtual asset transfers above the applicable threshold."
  },
  {
    id: 3033,
    category: "Private-Public Cooperation",
    question: "What is a 'Mutual Legal Assistance Treaty' (MLAT)?",
    options: [
      "A treaty between financial institutions for sharing KYC data",
      "A bilateral or multilateral treaty between countries facilitating the exchange of evidence and legal assistance in criminal investigations across borders",
      "A FATF framework for coordinating AML enforcement",
      "An agreement between regulators and financial institutions on AML program requirements"
    ],
    answer: 1,
    explanation: "MLATs are bilateral or multilateral treaties between countries that facilitate the exchange of evidence, information, and legal assistance in criminal investigations across borders — critical for international AML/CFT cooperation."
  },
  {
    id: 3034,
    category: "International Organizations",
    question: "What is the Tax Justice Network's State of Tax Justice annual report?",
    options: [
      "A ranking of countries by their tax enforcement effectiveness",
      "An annual report sharing the amount of tax jurisdictions lose each year to corporate tax abuse and private tax evasion; according to the 2023 report, jurisdictions will lose $4.8 trillion over 10 years",
      "A list of criminal prosecutions for tax evasion globally",
      "A guide for individuals on legal tax avoidance strategies"
    ],
    answer: 1,
    explanation: "The State of Tax Justice report shares amounts lost to tax havens each year. According to the 2023 report, jurisdictions will lose approximately $4.8 trillion to tax havens over the next 10 years through corporate tax abuse and private tax evasion."
  },
  {
    id: 3035,
    category: "US Regulations",
    question: "What does the USA PATRIOT Act Section 314 information sharing allow?",
    options: [
      "Law enforcement to subpoena financial institution records without court order",
      "314(a): Law enforcement to request institutions search for specific subjects; 314(b): Institutions to voluntarily share information with each other about suspected ML/TF",
      "Financial institutions to share SAR data with foreign governments",
      "FinCEN to publish SAR statistics in annual reports"
    ],
    answer: 1,
    explanation: "Section 314(a) allows law enforcement (via FinCEN) to request institutions search records for specific subjects. Section 314(b) provides safe harbor for institutions to voluntarily share information with each other about suspected money laundering or terrorist financing."
  },
  {
    id: 3036,
    category: "Other Jurisdictions",
    question: "What is notable about the UK Bribery Act 2010 from an extraterritorial perspective?",
    options: [
      "It only applies to UK-based companies and their employees",
      "It is one of the world's strictest anti-corruption laws, applying to any company with a UK connection and holding parent firms liable for subsidiary corruption regardless of location",
      "It applies only to government contractors",
      "It only covers direct bribery, not facilitation payments"
    ],
    answer: 1,
    explanation: "The UK Bribery Act 2010 has broad extraterritorial scope — it applies to any company with a UK connection and holds parent firms liable for corrupt activities by subsidiaries regardless of their location, making it one of the world's strictest anti-corruption laws."
  },
  {
    id: 3037,
    category: "Private-Public Cooperation",
    question: "What is the 'J5' referenced in the study guide and what is its purpose?",
    options: [
      "A group of 5 major financial institution compliance officers",
      "The Joint Chiefs of Global Tax Enforcement — a coalition of 5 English-speaking countries' tax and financial crime agencies collaborating on offshore tax fraud and related ML",
      "FATF's 5-country steering committee",
      "The 5 founding members of the Wolfsberg Group"
    ],
    answer: 1,
    explanation: "The J5 (Joint Chiefs of Global Tax Enforcement) is a coalition of tax and financial crime agencies from five English-speaking countries (U.S., UK, Canada, Australia, Netherlands) that collaborate on cross-border tax fraud and related money laundering investigations."
  },
  {
    id: 3038,
    category: "US Regulations",
    question: "Which U.S. regulatory body examines bank holding companies for BSA/AML compliance?",
    options: [
      "The OCC",
      "The Federal Reserve",
      "FinCEN",
      "The FDIC"
    ],
    answer: 1,
    explanation: "The Federal Reserve Board examines bank holding companies and their subsidiary financial institutions for BSA/AML compliance, in addition to its monetary policy and financial stability roles."
  },
  {
    id: 3039,
    category: "Other Regulations",
    question: "What does the 'AI regulations' discussion in the study guide suggest about AFC and artificial intelligence?",
    options: [
      "AI is prohibited from use in AML compliance systems",
      "Emerging AI regulations are increasingly relevant to AFC because AI is used in transaction monitoring, KYC, and other AML tools, requiring governance, explainability, and bias testing",
      "AI regulations only apply to technology companies, not financial institutions",
      "AI in AML is fully exempt from regulatory oversight"
    ],
    answer: 1,
    explanation: "The study guide identifies emerging AI regulations as increasingly relevant to AFC because AI is widely used in AML compliance tools. These systems must be governed, explainable, transparent, and tested for bias to ensure regulatory compliance."
  },
  {
    id: 3040,
    category: "FATF Standards",
    question: "What is FATF's guidance for a 'national risk assessment' (NRA)?",
    options: [
      "A mandatory annual assessment that replaces FATF mutual evaluations",
      "A process for countries to systematically identify, assess, and understand ML/TF risks at the national level to inform the allocation of resources and development of policies",
      "A bank-level requirement to assess risks for each product line",
      "An IMF requirement for developing countries"
    ],
    answer: 1,
    explanation: "FATF's guidance on national risk assessments describes a process for countries to systematically identify, assess, and understand their ML/TF risks at the national level, informing policy decisions and resource allocation."
  },
  {
    id: 3041,
    category: "International Organizations",
    question: "What is the International Organization of Securities Commissions (IOSCO) guidance on AML?",
    options: [
      "IOSCO has no AML guidance as it only regulates market conduct",
      "IOSCO provides guidance on AML standards for securities regulators and firms, focusing on customer due diligence, suspicious activity reporting, and cooperation across borders",
      "IOSCO guidance supersedes FATF recommendations for securities firms",
      "IOSCO only regulates sovereign wealth funds"
    ],
    answer: 1,
    explanation: "IOSCO provides AML guidance for securities regulators and firms, covering standards for customer due diligence, suspicious activity reporting, and international cooperation in the securities sector."
  },
  {
    id: 3042,
    category: "Private-Public Cooperation",
    question: "What is 'private sector information sharing' in the AML context and what protections enable it?",
    options: [
      "Sharing customer data publicly to warn other institutions",
      "Financial institutions sharing suspicious activity information with each other (enabled by Section 314(b) safe harbor in the U.S.) to improve collective financial crime detection",
      "Sharing SAR data with foreign financial institutions",
      "Publishing AML program details to demonstrate compliance"
    ],
    answer: 1,
    explanation: "Private sector information sharing allows financial institutions to share information about suspected ML/TF with each other. In the U.S., Section 314(b) provides safe harbor protection from civil liability for institutions that voluntarily share such information."
  },
  {
    id: 3043,
    category: "US Regulations",
    question: "What is a 'FinCEN Geographic Targeting Order' (GTO)?",
    options: [
      "An order blocking financial activity in sanctioned geographic regions",
      "A FinCEN order requiring specific industries in specific geographic areas to collect and report additional transaction information to gather intelligence on targeted ML risks",
      "A law enforcement order to freeze assets in specific cities",
      "A FATF designation for high-risk geographic regions within a country"
    ],
    answer: 1,
    explanation: "GTOs require certain industries (e.g., real estate title companies) in specific geographic areas to collect and report additional information on certain transactions, helping FinCEN gather intelligence on location-specific money laundering risks."
  },
  {
    id: 3044,
    category: "FATF Standards",
    question: "Under FATF's framework, what is a 'sectoral risk assessment' (SRA)?",
    options: [
      "A risk assessment of one specific financial institution",
      "An assessment of ML/TF risks within a specific sector of the economy (e.g., real estate, virtual assets) to develop sector-specific AML/CFT controls",
      "FATF's annual risk assessment of member country compliance",
      "A financial institution's assessment of one product category's risk"
    ],
    answer: 1,
    explanation: "A sectoral risk assessment evaluates ML/TF risks within a specific industry sector (e.g., virtual assets, real estate, legal services). The study guide includes a case study on a sectoral risk assessment for decentralized finance."
  },
  {
    id: 3045,
    category: "Other Regulations",
    question: "According to the study guide, what is 'consumer protection and inclusive banking' in the AFC context?",
    options: [
      "A FATF recommendation requiring banks to serve all consumers equally",
      "The principle that AML de-risking should not exclude legitimate customers from financial services, balancing financial crime prevention with maintaining access to banking",
      "An EU regulation requiring banks to provide free accounts to all consumers",
      "A BSA requirement to provide banking services to underserved populations"
    ],
    answer: 1,
    explanation: "The study guide discusses consumer protection and inclusive banking as an AFC balance issue: aggressive de-risking can exclude legitimate customers from financial services. AFC professionals must balance financial crime prevention with financial inclusion."
  },
  {
    id: 3046,
    category: "International Organizations",
    question: "What role does the G-20 Anti-Corruption Working Group play in AML?",
    options: [
      "It enforces AML laws across G-20 member countries",
      "It provides guidance and coordinates G-20 countries' efforts on anti-corruption, including promoting transparency and beneficial ownership, which intersects with AML",
      "It manages a G-20-wide sanctions list",
      "It conducts mutual evaluations of G-20 financial institutions"
    ],
    answer: 1,
    explanation: "The G-20 Anti-Corruption Working Group coordinates anti-corruption efforts among G-20 countries, including promoting transparency, beneficial ownership disclosure, and international cooperation — all directly relevant to AML/CFT."
  },
  {
    id: 3047,
    category: "US Regulations",
    question: "According to the study guide, which U.S. regulators oversee non-bank financial institutions for AML compliance?",
    options: [
      "Only FinCEN",
      "Multiple regulators including FinCEN, FINRA (for broker-dealers), state banking departments, and relevant functional regulators depending on the institution type",
      "Only the Federal Reserve",
      "Only the OCC and FDIC"
    ],
    answer: 1,
    explanation: "Multiple U.S. regulators oversee AML compliance for different types of non-bank financial institutions, including FinCEN (primary BSA administrator), FINRA (broker-dealers), relevant functional regulators, and state banking departments."
  },
  {
    id: 3048,
    category: "FATF Standards",
    question: "How does the study guide describe using FATF typology reports in AML controls?",
    options: [
      "Typology reports are only useful for academic research",
      "Typology reports document emerging ML/TF methods and can be used to calibrate transaction monitoring systems, update policies, train staff, and update risk assessments",
      "Typology reports replace the need for national risk assessments",
      "Typology reports only apply to financial institutions in FATF member countries"
    ],
    answer: 1,
    explanation: "The study guide discusses using AFC reports and guidance notes, including FATF typology reports, to enhance AML controls — calibrating TM systems, updating policies, improving training, and refreshing risk assessments based on documented ML/TF methods."
  },
  {
    id: 3049,
    category: "Private-Public Cooperation",
    question: "What are Financial Intelligence Units' (FIUs) roles in law enforcement cooperation?",
    options: [
      "FIUs directly prosecute money laundering cases",
      "FIUs receive and analyze financial disclosures (SARs, CTRs), produce financial intelligence, and disseminate it to law enforcement to support investigations",
      "FIUs only conduct internal financial institution audits",
      "FIUs issue AML licenses to financial institutions"
    ],
    answer: 1,
    explanation: "FIUs are central national agencies that receive and analyze financial disclosures (SARs, CTRs, etc.), produce financial intelligence, and disseminate it to law enforcement agencies to support criminal investigations and prosecutions."
  },
  {
    id: 3050,
    category: "Other Jurisdictions",
    question: "According to the study guide, what is notable about UAE AML regulations in recent years?",
    options: [
      "The UAE is a FATF black-listed country with no AML framework",
      "The UAE has significantly strengthened its AML/CFT framework in response to FATF scrutiny, implementing new regulations across multiple sectors including virtual assets, real estate, and professional services",
      "The UAE has opted out of FATF membership",
      "The UAE only regulates banking, not other financial sectors"
    ],
    answer: 1,
    explanation: "The UAE has significantly strengthened its AML/CFT framework — having faced grey-listing — by implementing new regulations across multiple sectors including virtual assets, real estate, DNFBPs, and financial institutions to meet FATF standards."
  }
];

// ─── MOCK TEST 4: AFC Program & CDD/KYC ──────────────────────────────────────
const test4Questions: QuizQuestion[] = [
  {
    id: 4001,
    category: "AFC Program",
    question: "What are the 'four pillars' of a BSA AML compliance program described in the study guide?",
    options: [
      "Policies, Training, Reporting, and Technology",
      "Internal controls, a designated AML compliance officer, employee training, and independent audit/testing",
      "CDD, EDD, Transaction Monitoring, and SAR Filing",
      "Risk Assessment, Due Diligence, Monitoring, and Reporting"
    ],
    answer: 1,
    explanation: "The four pillars of a BSA AML program are: (1) Internal controls (policies, procedures), (2) A designated BSA/AML compliance officer, (3) Employee training, and (4) Independent audit/testing. CDD was added as a fifth pillar by the CDD Rule."
  },
  {
    id: 4002,
    category: "Three Lines of Defense",
    question: "In the three lines of defense model, what is the first line of defense?",
    options: [
      "The internal audit function",
      "Business units that own and manage risk in their day-to-day operations, including frontline operational management and initial quality controls",
      "The compliance and risk management function",
      "Law enforcement agencies that detect financial crime"
    ],
    answer: 1,
    explanation: "The first line of defense consists of business units that own and manage risk in their day-to-day operations, including frontline operational management, quality control checks, and initial alert reviews."
  },
  {
    id: 4003,
    category: "Three Lines of Defense",
    question: "What does the second line of defense's compliance function do in an AFC context?",
    options: [
      "Directly manages customer relationships and transactions",
      "Provides oversight, advisory services, policy development, transaction monitoring review, investigation, regulatory reporting, and compliance testing",
      "Conducts independent audits of the AML program",
      "Files all SARs and CTRs on behalf of the institution"
    ],
    answer: 1,
    explanation: "The second line of defense compliance function includes: AML advisory, sanctions advisory, transaction monitoring review, investigation, policies management, regulatory reporting and liaison, compliance testing, and the MLRO/BSA officer role."
  },
  {
    id: 4004,
    category: "Three Lines of Defense",
    question: "What is the unique characteristic of the third line of defense (internal audit)?",
    options: [
      "It is the only line that interacts with customers",
      "It operates independently of the first two lines, objectively assessing the effectiveness of AFC risk management, governance, and control processes",
      "It is responsible for filing SARs with regulators",
      "It manages the transaction monitoring system directly"
    ],
    answer: 1,
    explanation: "The third line of defense (internal audit) operates independently of the first two lines. The independent audit function must report directly to the audit committee or board of directors to ensure findings are uninfluenced by other priorities."
  },
  {
    id: 4005,
    category: "Three Lines of Defense",
    question: "According to the study guide, what should the independent audit function report to in order to maintain independence?",
    options: [
      "The Chief Compliance Officer",
      "The audit committee or board of directors",
      "The CEO and Senior Management Committee",
      "FinCEN or the primary regulator"
    ],
    answer: 1,
    explanation: "In a robust AML program, the independent audit function reports directly to the audit committee or board of directors. This ensures findings are independent and not influenced by any other organizational priorities."
  },
  {
    id: 4006,
    category: "CDD/KYC",
    question: "What is the purpose of a 'Customer Risk Assessment' (CRA) in AML compliance?",
    options: [
      "To determine whether to extend credit to a customer",
      "To assign each customer a ML/TF risk rating based on factors like business type, geography, products used, and transaction patterns to determine the appropriate level of due diligence",
      "To assess the customer's creditworthiness for loan purposes",
      "To determine whether a customer is a PEP"
    ],
    answer: 1,
    explanation: "A CRA evaluates customers based on ML/TF risk factors (business type, geography, products, transaction patterns) to assign a risk rating that determines the level of due diligence required — standard, enhanced, or simplified."
  },
  {
    id: 4007,
    category: "CDD/KYC",
    question: "According to the study guide, what are the typical risk categories used in customer classification?",
    options: [
      "Critical, Severe, Moderate",
      "High, Medium, and Low risk categories (or numerical risk scores)",
      "Red, Amber, Green risk categories only",
      "Standard, Priority, and Watch list"
    ],
    answer: 1,
    explanation: "The study guide describes organizations classifying customers according to risk categories such as high, medium, or low (or risk scores), which then determine the frequency of periodic reviews and the level of due diligence applied."
  },
  {
    id: 4008,
    category: "CDD/KYC",
    question: "What does 'perpetual KYC' (pKYC) address that traditional periodic review cycles fail to?",
    options: [
      "pKYC eliminates the need for any customer reviews",
      "Periodic review cycles (every 3-5 years) can allow customer data to become outdated; pKYC maintains accurate data through near-real-time updates based on behavioral and circumstantial changes",
      "pKYC only applies to high-risk customers",
      "pKYC requires daily manual reviews of all customer files"
    ],
    answer: 1,
    explanation: "Traditional periodic KYC reviews (every 3-5 years) allow data to become dangerously outdated. Perpetual KYC (pKYC) maintains accurate, near-real-time customer data through continuous monitoring of behavioral changes and triggers."
  },
  {
    id: 4009,
    category: "CDD/KYC",
    question: "What types of data triggers does perpetual KYC monitor, according to the study guide?",
    options: [
      "Only changes in customer contact information",
      "Anomalies in transaction patterns, adverse media reports, changes to company structures, expansion to new markets, growth into diverse sectors, and static data changes like address changes",
      "Only significant financial transactions above $10,000",
      "Only PEP database changes"
    ],
    answer: 1,
    explanation: "Perpetual KYC monitors various triggers: anomalies in transaction patterns, adverse media reports, changes to company structures, market expansion, sector diversification, and static data changes (e.g., address changes, headquarters relocation)."
  },
  {
    id: 4010,
    category: "CDD/KYC",
    question: "What are 'event-driven reviews' in KYC?",
    options: [
      "Reviews conducted at fixed annual intervals",
      "KYC reviews triggered by specific events such as adverse news, significant transaction changes, changes in beneficial ownership, or regulatory requirements — separate from periodic reviews",
      "Reviews conducted only when a customer files a complaint",
      "Reviews triggered only by SAR filings"
    ],
    answer: 1,
    explanation: "Event-driven reviews are KYC reviews triggered by specific events — adverse news, significant transaction pattern changes, beneficial ownership changes, PEP connections discovered, or other triggers — supplementing standard periodic reviews."
  },
  {
    id: 4011,
    category: "AFC Program",
    question: "What is an 'enterprise-wide AML risk assessment'?",
    options: [
      "An individual customer risk assessment",
      "A holistic, periodic evaluation of ML/TF risk across all of an institution's business lines, products, customers, delivery channels, and geographies",
      "An annual regulatory self-assessment submitted to regulators",
      "A risk assessment conducted by external auditors"
    ],
    answer: 1,
    explanation: "An enterprise-wide AML risk assessment is a holistic evaluation of ML/TF risk across all of the institution's products, services, customers, geographies, and delivery channels, assessing both inherent risk and the effectiveness of controls."
  },
  {
    id: 4012,
    category: "AFC Program",
    question: "What is a 'risk appetite' in the AFC governance context?",
    options: [
      "The number of SARs a compliance team is willing to file in a year",
      "The types and amount of ML/TF risk the board and senior management are willing to accept in pursuit of business objectives — defining which customers, products, and geographies the institution will serve",
      "The maximum transaction monitoring alert backlog acceptable",
      "The percentage of transactions subject to manual review"
    ],
    answer: 1,
    explanation: "Risk appetite is a board-level decision defining the types and amounts of risk the institution is willing to accept. In AML, this determines which high-risk customer types, products, or geographies the institution will or will not serve."
  },
  {
    id: 4013,
    category: "AFC Program",
    question: "What does 'compliance monitoring and testing' (QA) do in an AML program?",
    options: [
      "Conducts the independent third-line audit",
      "Assesses the effectiveness of organizational processes — reviewing execution of policies and procedures, identifying gaps, and ensuring controls are operating as intended",
      "Files SARs for all identified compliance gaps",
      "Trains frontline staff on AML regulations"
    ],
    answer: 1,
    explanation: "Compliance monitoring and testing (QA) assesses whether policies and procedures are properly executed, identifies gaps, tracks backlogs, documents findings, and drives continuous improvement — serving as a checks-and-balances function."
  },
  {
    id: 4014,
    category: "CDD/KYC",
    question: "What is the difference between 'source of funds' and 'source of wealth' in EDD?",
    options: [
      "Both terms mean the same thing",
      "Source of funds = the specific origin of money in a particular transaction; Source of wealth = how the customer accumulated their overall net worth",
      "Source of funds applies to corporate customers; source of wealth applies to individuals",
      "Source of wealth refers to future income; source of funds to existing deposits"
    ],
    answer: 1,
    explanation: "Source of funds refers to the specific origin of money in a particular transaction (e.g., salary, property sale). Source of wealth refers to how the customer accumulated their overall net worth (e.g., business ownership, inheritance, career)."
  },
  {
    id: 4015,
    category: "CDD/KYC",
    question: "What is 'simplified due diligence' and when does it apply?",
    options: [
      "A streamlined KYC process for all new customers",
      "A reduced-scrutiny approach applied to demonstrably lower-risk customers (e.g., government entities, publicly listed companies) where full verification procedures can be proportionately scaled back",
      "A process that eliminates the need for customer identity verification",
      "A one-time CIP check without ongoing monitoring"
    ],
    answer: 1,
    explanation: "Simplified due diligence applies to demonstrably lower-risk customers where fewer verification measures are needed. It is proportionate to the lower risk, not an elimination of AML obligations."
  },
  {
    id: 4016,
    category: "SAR Process",
    question: "According to the study guide, what are the consequences of NOT filing a SAR when one should have been filed?",
    options: [
      "There are no regulatory consequences for not filing",
      "Regulatory penalties, potential criminal liability, reputational damage, and being complicit in the continuation of criminal activity",
      "Only an informal warning from the regulator",
      "A mandatory look-back review of 90 days of transactions"
    ],
    answer: 1,
    explanation: "Failing to file a required SAR can result in significant regulatory penalties, potential individual criminal liability, reputational damage to the institution, and the risk of being viewed as facilitating the underlying criminal activity."
  },
  {
    id: 4017,
    category: "SAR Process",
    question: "What is the concept of 'maintaining an account after unusual activity' and why is it a key SAR consideration?",
    options: [
      "Financial institutions must always close accounts when suspicious activity is detected",
      "Institutions can continue servicing a customer after filing a SAR, but must document the decision and conduct enhanced monitoring going forward",
      "Maintaining any account after suspicious activity automatically triggers a mandatory SAR",
      "Suspicious activity always requires law enforcement approval before maintaining the account"
    ],
    answer: 1,
    explanation: "Institutions can continue servicing a customer after filing a SAR (there is no automatic account closure requirement). The decision must be documented, and enhanced monitoring is typically applied — balancing compliance with law enforcement intelligence value."
  },
  {
    id: 4018,
    category: "SAR Process",
    question: "What is a 'defensive SAR'?",
    options: [
      "A SAR filed to protect the institution from customer lawsuits",
      "A SAR filed on a technically suspicious activity primarily to document the institution's awareness and protect against regulatory criticism, not because the institution believes ML is occurring",
      "A SAR that is immediately classified as confidential by law enforcement",
      "A SAR that names multiple suspects simultaneously"
    ],
    answer: 1,
    explanation: "A defensive SAR is filed primarily to protect the institution from regulatory criticism when activity is technically suspicious but the institution does not necessarily believe ML is occurring. Regulators generally discourage excessive defensive SAR filing."
  },
  {
    id: 4019,
    category: "SAR Process",
    question: "According to the study guide, when is an institution permitted to share information about a SAR?",
    options: [
      "With any party directly involved in the reported transaction",
      "Generally, SARs must remain confidential. They may be shared with law enforcement, regulators, affiliated entities for SAR filing decisions, or within the institution on a need-to-know basis only",
      "With the customer upon request",
      "Publicly in the institution's annual report"
    ],
    answer: 1,
    explanation: "SARs must remain strictly confidential. They cannot be tipped off to the subject. They may be shared with law enforcement (via the filing process), relevant regulators, and within the institution or affiliated entities on a need-to-know basis."
  },
  {
    id: 4020,
    category: "CDD/KYC",
    question: "What is 'customer lifecycle management' in AML?",
    options: [
      "Managing customer demographics and aging profiles for marketing",
      "The end-to-end AML process covering customer onboarding (CIP/CDD), ongoing monitoring, event-driven reviews, periodic re-reviews, and eventual offboarding",
      "A tool for predicting customer financial needs throughout their lives",
      "A regulatory reporting requirement for all customer account changes"
    ],
    answer: 1,
    explanation: "Customer lifecycle management in AML covers the complete AML journey: onboarding (CIP/CDD/EDD), ongoing transaction monitoring, event-driven reviews, periodic risk-based re-reviews, and customer offboarding when the relationship ends."
  },
  {
    id: 4021,
    category: "AFC Program",
    question: "What is a 'risk and control self-assessment' (RCSA) in the AML context?",
    options: [
      "A customer-completed questionnaire about their financial activities",
      "A process by which business functions self-identify risk exposures and assess the effectiveness of their controls, often feeding into internal audit exercises",
      "A regulator-led assessment of an institution's AML program",
      "An annual review of all SAR filings for accuracy"
    ],
    answer: 1,
    explanation: "An RCSA is a process by which business functions self-identify their risk exposures and evaluate the effectiveness of their controls. The study guide notes that RCSA data serves as valuable input for internal audit exercises."
  },
  {
    id: 4022,
    category: "AFC Program",
    question: "According to the study guide, what is the 'tone at the top' concept in AFC governance?",
    options: [
      "The compliance officer's authority to override business decisions",
      "Senior management and board-level commitment to AML compliance that sets the organizational culture and ensures adequate resources are allocated to AFC programs",
      "The requirement that the CEO personally review all SAR filings",
      "The placement of the compliance function at the top of the organizational chart"
    ],
    answer: 1,
    explanation: "Tone at the top refers to senior management and board-level commitment to AML compliance that permeates the organization, fostering a culture where compliance is genuinely valued rather than treated as a box-checking exercise."
  },
  {
    id: 4023,
    category: "Customer Offboarding",
    question: "What is 'de-risking' in the customer relationship context?",
    options: [
      "Applying lower risk ratings to high-risk customers to simplify compliance",
      "Terminating or restricting business relationships with entire categories of high-risk customers rather than managing individual customer risk — often resulting in financial exclusion",
      "Reducing the frequency of SAR filings to lower compliance costs",
      "Removing customers from the high-risk watchlist after periodic review"
    ],
    answer: 1,
    explanation: "De-risking is the practice of financial institutions exiting relationships with entire categories of customers or geographic markets deemed high-risk, rather than managing individual risks. It can result in financial exclusion of legitimate customers."
  },
  {
    id: 4024,
    category: "Customer Offboarding",
    question: "What does 'financial inclusion' mean in the context of AFC de-risking?",
    options: [
      "Including financial crime proceeds in legitimate financial flows",
      "Ensuring that legitimate individuals and businesses maintain access to financial services, which aggressive de-risking can undermine",
      "Including AML costs in the institution's financial reporting",
      "A regulatory requirement to serve all customers equally"
    ],
    answer: 1,
    explanation: "Financial inclusion in the AFC context means ensuring legitimate individuals and businesses maintain access to financial services. Over-aggressive de-risking can exclude legitimate customers — a concern for regulators and international bodies."
  },
  {
    id: 4025,
    category: "AFC Program",
    question: "What is the 'balanced scorecard' approach mentioned in the study guide for private banking compliance?",
    options: [
      "A financial reporting tool for private banks",
      "A performance evaluation approach that includes risk management metrics alongside revenue metrics, ensuring that managing AML risk remains part of the relationship manager's role",
      "A compliance scoring system developed by FATF",
      "A tool for comparing an institution's AML performance to industry peers"
    ],
    answer: 1,
    explanation: "A balanced scorecard for performance evaluation ensures that managing risk (not just generating AUM/revenue) remains a fundamental part of the private banker's role, counterbalancing the compensation incentive to overlook risk."
  },
  {
    id: 4026,
    category: "AFC Program",
    question: "What is the 'AML advisory function' in a financial institution's second line of defense?",
    options: [
      "The function that directly investigates SAR subjects",
      "A function that guides AML policies, procedures, and best practices, interpreting regulatory requirements and supporting business units in implementing compliant AML frameworks",
      "A function that trains frontline staff on AML regulations",
      "The function that files SARs and CTRs with regulators"
    ],
    answer: 1,
    explanation: "The AML advisory function guides AML policies, procedures, and best practices. It interprets regulatory requirements and supports business units in implementing compliant AML frameworks, often sitting within the second line of defense."
  },
  {
    id: 4027,
    category: "SAR Process",
    question: "According to the study guide, what is the purpose of collaborating with law enforcement during a SAR investigation?",
    options: [
      "Law enforcement approval is required before filing a SAR",
      "To share information that may assist law enforcement investigations while coordinating on how to manage the customer relationship (e.g., continuing to service to gather intelligence)",
      "Law enforcement must review all SARs before they are filed",
      "To receive immunity from prosecution for related ML offenses"
    ],
    answer: 1,
    explanation: "Collaboration with law enforcement in SAR investigations can help share information that assists investigations, and law enforcement may request that an institution continue to service a customer to gather intelligence on ongoing criminal activity."
  },
  {
    id: 4028,
    category: "AFC Program",
    question: "What is the 'MLRO' function and what are their responsibilities?",
    options: [
      "Money Laundering Reporting Officer — responsible for filing all SARs, overseeing the AML program, and reporting suspicious activities to authorities",
      "Market Liquidity Risk Officer — responsible for managing financial market risks",
      "Multi-Level Regulatory Officer — responsible for cross-jurisdiction compliance",
      "Merchant Loan Reporting Officer — responsible for commercial loan documentation"
    ],
    answer: 0,
    explanation: "The MLRO (Money Laundering Reporting Officer) — or BSA Officer in the U.S. — oversees the AML program, is responsible for SAR filings, coordinates with various functions to maintain organizational compliance, and reports directly to senior management/the board."
  },
  {
    id: 4029,
    category: "CDD/KYC",
    question: "What is 'Know Your Employee' (KYE) and why does it matter for AFC?",
    options: [
      "A HR recruitment screening tool",
      "An internal control that monitors employees' financial activities and behavior to detect potential insider threats — employees who may be bribed or complicit in financial crime",
      "A training certification program for AML staff",
      "A background check required only for senior management"
    ],
    answer: 1,
    explanation: "KYE is an internal control monitoring employee financial activities and behavior patterns to detect potential insider threats — employees accepting bribes, facilitating ML transactions, or otherwise being complicit in financial crime."
  },
  {
    id: 4030,
    category: "AFC Program",
    question: "What does 'liaising with internal audit' help AFC compliance teams achieve?",
    options: [
      "It helps compliance teams avoid regulatory examinations",
      "Confirming review scope, preparing for audits, planning post-review actions, identifying areas for improvement, and ensuring effective control programs",
      "It provides compliance teams with authority to override audit findings",
      "It eliminates the need for external regulatory audits"
    ],
    answer: 1,
    explanation: "Liaising with internal audit helps AFC teams: confirm/align review scope, prepare for audits (gathering documentation), plan corrective actions after reviews, identify improvement areas, and ensure controls operate effectively."
  },
  {
    id: 4031,
    category: "Third-Party Management",
    question: "According to the study guide, what should organizations include in third-party/vendor due diligence for AFC?",
    options: [
      "Only credit checks on vendor companies",
      "Screening vendor directors and key persons against sanctions, PEP, and adverse media lists; for IT vendors, conducting cybersecurity checks",
      "Simply verifying that vendors have insurance coverage",
      "Only reviewing vendor financial statements"
    ],
    answer: 1,
    explanation: "Third-party due diligence should screen vendor directors and persons acting on their behalf against sanctions, PEP, and adverse media lists using OSINT. IT vendors should also undergo cybersecurity checks to confirm compliance with organizational policies."
  },
  {
    id: 4032,
    category: "AFC Program",
    question: "What is the purpose of AML 'model risk management' in the second line of defense?",
    options: [
      "Managing financial model risks for investment decisions",
      "Overseeing the validation and governance of AFC models (including transaction monitoring systems) to ensure accuracy, effectiveness, and regulatory compliance",
      "Managing the technology infrastructure underlying AML systems",
      "Validating customer risk model outputs for individual high-risk customers"
    ],
    answer: 1,
    explanation: "The model risk management function is responsible for overseeing the validation and governance of AFC models, including transaction monitoring systems. It evaluates the effectiveness of models to ensure accuracy and compliance with regulatory standards."
  },
  {
    id: 4033,
    category: "AFC Program",
    question: "How should the three lines of defense collaborate to maximize effectiveness?",
    options: [
      "Each line should operate completely independently to avoid bias",
      "Through joint planning sessions, sharing insights and findings, and leveraging each line's unique expertise to provide comprehensive coverage without redundancy",
      "The third line should manage the work of the first and second lines",
      "All three lines should conduct the same tests simultaneously"
    ],
    answer: 1,
    explanation: "The three lines of defense should collaborate through joint planning sessions (to align audit schedules and avoid redundancy), sharing insights and findings, and leveraging each line's unique expertise for comprehensive control coverage."
  },
  {
    id: 4034,
    category: "SAR Process",
    question: "According to the study guide, what does a 'Level 3 review' in SAR investigations involve?",
    options: [
      "The third attempt to close a previously reviewed alert",
      "Complex analysis stage handled by senior analysts or compliance officers for highly suspicious cases involving numerous transactions or sensitive situations",
      "A regulatory examination of SAR quality",
      "An automated AI review of SAR narratives"
    ],
    answer: 1,
    explanation: "Level 3 review (complex analysis stage) is conducted by senior analysts or compliance officers for highly suspicious cases or those involving numerous transactions or sensitive situations that require more expert analysis."
  },
  {
    id: 4035,
    category: "AFC Program",
    question: "What is the 'policies management function' in a financial institution's AFC second line?",
    options: [
      "Managing customer account policies and fee structures",
      "Developing, maintaining, and updating AFC policies and procedures to ensure compliance with evolving regulations, managing document control and change management",
      "Managing regulatory examination preparation documents",
      "A legal function that reviews contracts for AML compliance"
    ],
    answer: 1,
    explanation: "The policies management function develops, maintains, and updates AFC policies and procedures to ensure compliance with evolving regulations. It collaborates with departments to implement policies and manages document control and change management."
  },
  {
    id: 4036,
    category: "CDD/KYC",
    question: "What does 'adverse media screening' involve in the CDD process?",
    options: [
      "Monitoring news for negative stories about the financial institution",
      "Searching news sources, court records, and databases for negative information about customers — indicating criminal activity, fraud, regulatory violations, or reputational risk",
      "Blocking negative customer reviews on social media",
      "Screening customer correspondence for negative language"
    ],
    answer: 1,
    explanation: "Adverse media screening (negative news screening) searches news databases, court records, and other sources for negative information about customers (and related parties) that could indicate criminal activity, fraud, regulatory violations, or reputational risk."
  },
  {
    id: 4037,
    category: "AFC Program",
    question: "According to the study guide, what are the components of 'TM system tuning'?",
    options: [
      "Software updates, hardware maintenance, and vendor contracts",
      "Scenario setting, customer segmentation, threshold setting, and frequency of tuning",
      "Alert volume management, SAR filing, and backlog reduction",
      "Data quality checks, regulatory reporting, and model validation"
    ],
    answer: 1,
    explanation: "TM system tuning involves four key components: scenario setting (creating/modifying/removing detection rules), customer segmentation, threshold setting (defining minimum activity levels for alerts), and frequency (how often tuning occurs)."
  },
  {
    id: 4038,
    category: "SAR Process",
    question: "What is 'above-the-line (ATL)' and 'below-the-line (BTL)' testing in transaction monitoring?",
    options: [
      "Testing for transactions above and below the CTR filing threshold",
      "ATL testing examines transactions that should be flagged by the TM system; BTL testing examines transactions below the threshold that would not be flagged — both identify false positives and negatives",
      "Testing for customer accounts above and below average balances",
      "Testing for transactions in high-risk vs. low-risk jurisdictions"
    ],
    answer: 1,
    explanation: "ATL testing examines transactions that should be flagged (testing the system catches what it should), while BTL testing examines transactions below the threshold that would not be flagged (testing the system isn't missing things). Both identify optimization opportunities."
  },
  {
    id: 4039,
    category: "AFC Program",
    question: "According to the study guide, what is a 'systemic BSA failure' at a financial institution?",
    options: [
      "A single missed SAR filing",
      "Pervasive, institutional-level failures in AML compliance affecting multiple components of the BSA program — often resulting in significant regulatory actions",
      "Technology system failures causing delayed CTR filings",
      "Any AML violation committed by a frontline employee"
    ],
    answer: 1,
    explanation: "The study guide discusses systemic BSA failures in the context of a Canadian bank case study — pervasive, institutional-level failures across multiple AML program components that attract significant regulatory enforcement action."
  },
  {
    id: 4040,
    category: "CDD/KYC",
    question: "What is 'network analysis' in the context of CDD/investigations?",
    options: [
      "Analyzing a financial institution's computer network for cybersecurity risks",
      "Mapping relationships between individuals, entities, accounts, and transactions to identify suspicious connections and previously unknown relationships",
      "Reviewing customer social networks for identity verification",
      "Analyzing network traffic for unauthorized data transfers"
    ],
    answer: 1,
    explanation: "Network analysis (link analysis) maps connections between people, accounts, transactions, and entities to identify previously unknown relationships and suspicious patterns — a critical tool for understanding complex ML schemes."
  },
  {
    id: 4041,
    category: "AFC Program",
    question: "What is the 'data analytics function' in a financial institution's second line AFC structure?",
    options: [
      "The IT function responsible for maintaining compliance databases",
      "A function that identifies financial crime risk patterns and trends, developing analytical models to detect anomalies and flag fraudulent or suspicious transactions",
      "A reporting function that generates regulatory statistics",
      "A marketing analytics function applied to compliance data"
    ],
    answer: 1,
    explanation: "The data analytics function (often within the transaction monitoring function) identifies financial crime risk patterns and trends, developing analytical models to detect anomalies and flag suspicious transactions."
  },
  {
    id: 4042,
    category: "SAR Process",
    question: "What is 'open-source intelligence' (OSINT) in AML investigations?",
    options: [
      "Intelligence published by FATF and regulators only",
      "Information gathered from publicly available sources — news, social media, business registries, court records, public notices — used to supplement internal data in investigations",
      "Software code that is freely available for AML systems",
      "Intelligence shared through Section 314(b) information sharing"
    ],
    answer: 1,
    explanation: "OSINT in AML involves gathering from publicly available sources — news databases, social media, business registries, court records, regulatory releases — to supplement internal data in customer due diligence and SAR investigations."
  },
  {
    id: 4043,
    category: "AFC Program",
    question: "What is a 'look-back review' in BSA/AML compliance?",
    options: [
      "An annual review of prior-year CTR filings for accuracy",
      "A retroactive review of transactions or customer relationships — often required by regulators — when a compliance deficiency is discovered or a new risk is identified",
      "A monthly review of transaction monitoring alert backlogs",
      "A historical analysis of SAR conversion rates"
    ],
    answer: 1,
    explanation: "A look-back review is a retroactive analysis of transactions or customer relationships — typically required by regulators when a compliance deficiency is discovered — to determine whether suspicious activity may have been missed and whether SARs should be filed."
  },
  {
    id: 4044,
    category: "CDD/KYC",
    question: "According to the study guide, what is a 'Customer Identification Program' (CIP) and what information does it require for individuals?",
    options: [
      "An internal bank document; it requires only name and account type",
      "The BSA/KYC requirement for financial institutions to verify customer identity; for individuals: name, date of birth, address, and an identification number",
      "A voluntary FATF standard; it requires only name and government-issued ID",
      "An OFAC screening program; it requires full financial history"
    ],
    answer: 1,
    explanation: "A CIP is the BSA requirement for financial institutions to identify and verify customers. For individuals, required information includes: name, date of birth, address, and an identification number (e.g., SSN, passport number)."
  },
  {
    id: 4045,
    category: "AFC Program",
    question: "What does the NatWest (Fowler Oldfield) case study in the study guide illustrate about transaction monitoring failures?",
    options: [
      "That automated TM systems always work correctly",
      "That mislabeling transactions (cash as checks), having no monitoring rules for high-risk customers, and turning off alerts due to high volumes can enable significant ML to go undetected",
      "That only large cash transactions need monitoring",
      "That external auditors always catch TM system failures"
    ],
    answer: 1,
    explanation: "The NatWest case showed how TM failures — mislabeling cash as checks (bypassing cash-specific rules), no monitoring rules for high-risk customers, and disabling alerts — allowed £264M in deposits including £264M cash to go unmonitored, resulting in a £264.8M FCA fine."
  },
  {
    id: 4046,
    category: "AFC Program",
    question: "What is a 'FinCEN advisory' and how do compliance teams use them?",
    options: [
      "Mandatory enforcement actions issued by FinCEN against institutions",
      "Notices issued by FinCEN identifying specific financial crime threats and red flags to help financial institutions identify and report related suspicious activity",
      "Quarterly regulatory reports summarizing SAR filing statistics",
      "Annual licensing requirements for MSBs"
    ],
    answer: 1,
    explanation: "FinCEN advisories are notices identifying specific financial crime threats, red flags, and trends. Compliance teams use them to calibrate transaction monitoring rules, update policies, and enhance training."
  },
  {
    id: 4047,
    category: "SAR Process",
    question: "What does 'responding to law enforcement requests' typically involve for AFC professionals?",
    options: [
      "Automatically sharing all customer information requested",
      "Reviewing legal process (subpoenas, court orders, Section 314(a) requests), consulting legal counsel, and producing responsive records in the required format and timeframe",
      "Filing a SAR immediately upon receiving any law enforcement inquiry",
      "Notifying the customer that law enforcement has made an inquiry"
    ],
    answer: 1,
    explanation: "Responding to law enforcement requests involves reviewing the legal basis (subpoena, court order, 314(a) notice), consulting with legal counsel, and producing responsive records in the required format and timeframe — without tipping off the customer."
  },
  {
    id: 4048,
    category: "AFC Program",
    question: "Why might smaller organizations lack a three-line internal audit structure?",
    options: [
      "Smaller organizations are exempt from AML requirements",
      "Resource and skill limitations may mean smaller organizations use external auditors for the third-line independent audit function",
      "Smaller organizations file fewer SARs and require less oversight",
      "Regulatory requirements for three lines of defense only apply to large banks"
    ],
    answer: 1,
    explanation: "In smaller organizations lacking resources for an internal audit team, or when there are skill or resource limitations, external auditors may perform the independent audit function — providing an unbiased external assessment of the AFC program."
  },
  {
    id: 4049,
    category: "SAR Process",
    question: "What does 'follow-up action when no SAR is filed' typically require?",
    options: [
      "No action is needed if a SAR is not filed",
      "Documentation of the analysis conducted, the rationale for not filing, and any additional monitoring or review steps taken — creating a clear audit trail",
      "Notification to the customer that their activity was reviewed",
      "An automatic closure of the customer's account"
    ],
    answer: 1,
    explanation: "When a SAR is not filed after investigation, the institution should document the analysis, the rationale for not filing, and any additional monitoring or actions taken. This documentation creates an audit trail demonstrating a thorough, good-faith review."
  },
  {
    id: 4050,
    category: "AFC Program",
    question: "According to the study guide, what is the purpose of 'new business due diligence' in an AFC program?",
    options: [
      "Due diligence conducted only on new customer onboarding",
      "Risk assessment conducted before launching a new product, service, business line, or technology to identify and mitigate potential AFC risks before they materialize",
      "A review of new employees' financial backgrounds",
      "Due diligence on potential acquisition targets"
    ],
    answer: 1,
    explanation: "New business due diligence involves thorough risk assessment before launching new products, services, business lines, or technology. The goal is to identify and mitigate potential AFC risks before they materialize through proper risk assessment."
  }
];

// ─── MOCK TEST 5: Technology, Transaction Monitoring & Investigations ─────────
const test5Questions: QuizQuestion[] = [
  {
    id: 5001,
    category: "AFC Technology",
    question: "According to the study guide, what is the overall purpose of AFC technology in compliance programs?",
    options: [
      "To replace human compliance officers with automated systems",
      "To enhance the ability to detect and prevent financial crime while improving efficiency, reducing costs, and improving customer experience",
      "To ensure perfect detection of all ML/TF with zero false positives",
      "To automate SAR filing without human review"
    ],
    answer: 1,
    explanation: "AFC technology enhances the ability to detect and prevent financial crime while improving efficiency, reducing manual workloads, lowering costs, and improving customer experience through faster, more accurate processes."
  },
  {
    id: 5002,
    category: "AFC Technology",
    question: "What does 'robotic process automation' (RPA) do in AFC compliance?",
    options: [
      "Uses physical robots to process paper documents",
      "Automates repetitive, rule-based tasks in compliance processes — such as data gathering, form completion, and report generation — freeing analysts for higher-value work",
      "Uses AI robots to conduct customer due diligence interviews",
      "Automates the physical movement of funds between accounts"
    ],
    answer: 1,
    explanation: "RPA automates repetitive, rule-based compliance tasks such as data gathering, form completion, and routine report generation, freeing human analysts to focus on higher-value activities requiring judgment."
  },
  {
    id: 5003,
    category: "AFC Technology",
    question: "What is 'device intelligence' in AFC technology?",
    options: [
      "Using AI to read documents for KYC purposes",
      "Technology that analyzes device characteristics (device fingerprint, IP address, location, behavior patterns) to detect anomalies that might indicate fraud or account takeover",
      "Technology for monitoring employee devices for insider threats",
      "Smart devices used by compliance officers for remote work"
    ],
    answer: 1,
    explanation: "Device intelligence analyzes characteristics of the device used by a customer (device fingerprint, IP address, geolocation, usage patterns) to detect anomalies suggesting fraud, account takeover, or access by unauthorized parties."
  },
  {
    id: 5004,
    category: "AFC Technology",
    question: "What is 'geolocation technology' used for in AFC compliance?",
    options: [
      "Tracking customer locations for marketing purposes",
      "Verifying that customers are physically located where they claim to be, detecting access from high-risk jurisdictions, and identifying VPN use or unusual location patterns",
      "Mapping the geographic spread of financial institution branches",
      "Determining the physical location of suspicious transactions"
    ],
    answer: 1,
    explanation: "Geolocation technology in AFC verifies customers' claimed physical location, detects access from high-risk jurisdictions (or through VPNs masking true location), and identifies unusual location patterns during customer onboarding or transactions."
  },
  {
    id: 5005,
    category: "AFC Technology",
    question: "What is 'behavioral and profile monitoring' in AFC technology?",
    options: [
      "Monitoring customer behavioral biometrics for identity verification only",
      "Technology that continuously monitors how a customer interacts with systems and conducts transactions, comparing against established behavioral profiles to detect anomalous activity",
      "Monitoring employee behavior for performance management",
      "Tracking customer social media behavior for CDD"
    ],
    answer: 1,
    explanation: "Behavioral and profile monitoring technology continuously observes how customers interact with systems and conduct transactions. When behavior deviates from the established customer profile, it flags potential suspicious activity for review."
  },
  {
    id: 5006,
    category: "KYC Technology",
    question: "What is 'optical character recognition' (OCR) and how does it benefit KYC?",
    options: [
      "A facial recognition technology for identity verification",
      "Technology that converts scanned documents into editable and searchable data, ensuring accurate extraction of data from identity documents and reducing manual errors in onboarding",
      "A cryptographic technique for securing customer data",
      "A SWIFT messaging protocol for KYC information exchange"
    ],
    answer: 1,
    explanation: "OCR technology converts scanned documents (passports, ID cards) into editable, searchable data. Often AI-enabled, it accurately extracts data from complex fonts and layouts, reducing manual errors in the KYC onboarding process."
  },
  {
    id: 5007,
    category: "KYC Technology",
    question: "What is a 'liveness check' in biometric KYC verification?",
    options: [
      "Verifying that a customer is still alive by checking obituary records",
      "A technology that confirms that a face presented during verification is a real, live person rather than a photo, video replay, or deepfake — preventing identity fraud",
      "A real-time check against the sanctions list during onboarding",
      "Verifying that a customer's mobile device is currently active"
    ],
    answer: 1,
    explanation: "Liveness checks confirm that the face being verified is a real, live person — not a photo, video, or deepfake. The study guide notes that liveness checks are important for preventing identity fraud, especially with AI-generated deepfakes."
  },
  {
    id: 5008,
    category: "KYC Technology",
    question: "What is a 'honeypot' problem associated with national identity databases?",
    options: [
      "Fake customer profiles used to test KYC systems",
      "National identity databases that centralize valuable PII become targets for cyberattacks, creating high-value targets (honeypots) for criminals seeking to steal identity data at scale",
      "Fraudulent KYC databases sold to financial institutions",
      "A government trap set to catch identity fraudsters"
    ],
    answer: 1,
    explanation: "National identity databases create 'honeypot' problems — centralized databases curating valuable PII become attractive, high-value targets (honeypots) for cyberattacks, potentially exposing millions of citizens' identity information."
  },
  {
    id: 5009,
    category: "Screening Technology",
    question: "What is 'fuzzy logic' in AML screening systems?",
    options: [
      "An imprecise and unreliable screening method to be avoided",
      "A matching approach that allows for variations in names (spelling differences, phonetic similarities, transliteration variants) beyond exact matches to reduce both false positives and false negatives",
      "A randomized screening process applied to lower-risk customers",
      "AI-generated uncertain probability scores for sanction matches"
    ],
    answer: 1,
    explanation: "Fuzzy logic allows screening systems to identify name variations (phonetic similarities, spelling variants, transliteration differences) beyond exact matches — reducing false negatives (missed matches) while proper calibration also reduces false positives."
  },
  {
    id: 5010,
    category: "Screening Technology",
    question: "What is 'whitelisting' in AML screening?",
    options: [
      "Automatically approving all transactions from low-risk customers",
      "Adding known legitimate matches to an internal approved list so the screening system doesn't repeatedly generate alerts for the same non-threatening match",
      "Removing names from sanctions lists after regulatory approval",
      "Creating a list of customers exempt from all AML screening"
    ],
    answer: 1,
    explanation: "Whitelisting in screening adds known legitimate (previously investigated and cleared) matches to an internal approved list so the system doesn't repeatedly generate alerts for the same benign match — improving efficiency without reducing coverage."
  },
  {
    id: 5011,
    category: "Screening Technology",
    question: "What are the types of ongoing screening described in the study guide?",
    options: [
      "Only batch screening — daily review of all customers",
      "Name screening (against watchlists), payment/transaction screening (real-time), adverse media screening, and PEP screening",
      "Only real-time payment screening",
      "Only sanctions screening at account opening"
    ],
    answer: 1,
    explanation: "The study guide describes multiple ongoing screening types: name screening (against watchlists including sanctions lists), payment/transaction screening (real-time, stops payments to sanctioned parties), adverse media screening, and PEP screening."
  },
  {
    id: 5012,
    category: "Screening Technology",
    question: "What is the key difference between payment screening and transaction monitoring?",
    options: [
      "Payment screening is done manually; transaction monitoring is automated",
      "Payment screening identifies high-risk parties before transactions are completed and stops payments; transaction monitoring detects suspicious patterns during or after transactions occur",
      "Payment screening only applies to wire transfers; transaction monitoring to all transactions",
      "There is no difference — the terms are interchangeable"
    ],
    answer: 1,
    explanation: "Payment screening operates pre-transaction — identifying high-risk individuals and entities before transactions are completed and stopping suspicious payments. Transaction monitoring operates post-transaction — detecting unusual patterns in completed transactions."
  },
  {
    id: 5013,
    category: "Transaction Monitoring Technology",
    question: "What are 'rules-based transaction monitoring' systems and what is their limitation?",
    options: [
      "Systems that apply machine learning rules that continuously update",
      "Systems using predefined rules and thresholds to generate alerts; their limitation is that they can miss complex or evolving typologies not captured in predefined rules",
      "Systems that require manual human rules to be created daily",
      "Systems that only monitor transactions above $10,000"
    ],
    answer: 1,
    explanation: "Rules-based TM systems apply predefined rules and thresholds to generate alerts. Their limitation is that they can miss emerging or complex typologies not captured in the predefined rules and may generate many false positives."
  },
  {
    id: 5014,
    category: "Transaction Monitoring Technology",
    question: "How do AI-powered transaction monitoring systems improve on rules-based systems?",
    options: [
      "AI systems eliminate all false positives",
      "AI/ML systems learn from historical data to detect complex patterns and anomalies that may not be captured in predefined rules, generally producing more useful alerts",
      "AI systems don't require any calibration or tuning",
      "AI systems can automatically file SARs without human review"
    ],
    answer: 1,
    explanation: "AI-powered TM systems leverage advanced algorithms and machine learning to analyze vast transaction data in real time, identifying complex patterns and anomalies that rules-based systems might miss, producing more meaningful alerts."
  },
  {
    id: 5015,
    category: "Transaction Monitoring Technology",
    question: "What is 'network analysis' in the context of transaction monitoring?",
    options: [
      "Analysis of a financial institution's IT network performance",
      "Technology that detects patterns among beneficiaries and others in a customer's network, uncovering hidden connections between accounts that might indicate ML",
      "Analysis of the coverage gaps in an institution's monitoring network",
      "A manual review process for complex transaction chains"
    ],
    answer: 1,
    explanation: "Network analysis in TM detects patterns among beneficiaries and others in a customer's network. These tools automatically analyze transactions and identify hidden links between customers — such as shared email domains, phone numbers, or addresses."
  },
  {
    id: 5016,
    category: "Data Collection",
    question: "What is the distinction between 'internal static data' and 'internal observed data' in AFC?",
    options: [
      "Static data is archived; observed data is current",
      "Static data is fixed information collected at onboarding (name, address, ID); observed data is dynamic information generated through customer activity and transactions",
      "Both types refer to the same customer information",
      "Static data is for high-risk customers; observed data is for low-risk ones"
    ],
    answer: 1,
    explanation: "Internal static data is fixed information collected at onboarding (name, DOB, address, ID). Internal observed data is dynamic — generated through ongoing customer activity, transactions, and behaviors that the institution monitors."
  },
  {
    id: 5017,
    category: "Data Collection",
    question: "What is 'data lineage' in the AFC technology context?",
    options: [
      "The family connections of customers identified through data analysis",
      "The documentation of data's origin, how it moves through systems, how it is transformed, and its ultimate use — critical for ensuring data quality and auditability in compliance systems",
      "The historical record of SAR filings for a particular customer",
      "The regulatory history of a compliance technology vendor"
    ],
    answer: 1,
    explanation: "Data lineage documents where data originates, how it flows through systems, how it is transformed, and its ultimate use in compliance decisions. It is critical for auditability, regulatory examinations, and ensuring data quality."
  },
  {
    id: 5018,
    category: "Data Collection",
    question: "What is 'entity resolution' in compliance technology?",
    options: [
      "Resolving disputes about customer data accuracy",
      "The process of confirming whether multiple records across different datasets refer to the same real-world entity — creating a single, accurate view of a customer or entity",
      "The process of removing duplicate entities from sanctions lists",
      "Technology for resolving legal disputes involving financial entities"
    ],
    answer: 1,
    explanation: "Entity resolution confirms whether multiple records in different systems refer to the same person or entity. It consolidates and links information to create a single view of the customer, improving AML detection accuracy."
  },
  {
    id: 5019,
    category: "Data Collection",
    question: "What is 'ETL' (Extract, Transform, Load) and why is it important for AFC?",
    options: [
      "A European Trade Law framework affecting AML regulations",
      "A data integration process that extracts data from source systems, transforms it for consistency, and loads it into the compliance technology solution — ensuring data quality and usability",
      "The process of extracting SAR data for regulatory reporting",
      "A method for loading transaction monitoring scenarios into systems"
    ],
    answer: 1,
    explanation: "ETL bridges the gap between how systems store data and how compliance tools need it. Extract (pull from sources), Transform (clean and standardize), Load (into data warehouse/compliance system) ensures data quality and usability for AFC tools."
  },
  {
    id: 5020,
    category: "Data Collection",
    question: "What is 'data mining' versus 'data matching' in AFC analytics?",
    options: [
      "They are identical techniques applied to different transaction types",
      "Data mining extracts patterns and insights from large datasets (anomaly detection); data matching compares data from different sources to identify inconsistencies and verify authenticity",
      "Data mining is manual; data matching is automated",
      "Data mining applies to customer data; data matching to transaction data"
    ],
    answer: 1,
    explanation: "Data mining extracts useful patterns, relationships, and anomalies from large complex datasets. Data matching compares data from different sources to identify inconsistencies — e.g., comparing a customer address to public records. Together they enhance AFC detection."
  },
  {
    id: 5021,
    category: "Data Collection",
    question: "What is 'clustering' in the context of cryptocurrency blockchain analytics?",
    options: [
      "Grouping similar AML alerts for batch processing",
      "A deanonymizing technique that groups multiple cryptocurrency addresses likely controlled by the same entity based on co-spending patterns, helping investigators analyze blockchain activity",
      "A method of sorting transactions by size for review",
      "A technique for identifying geographic clusters of suspicious activity"
    ],
    answer: 1,
    explanation: "Clustering is a blockchain analytic technique that groups multiple cryptocurrency addresses into a single wallet when usage patterns indicate they are controlled by the same entity — helping investigators trace funds despite pseudonymous addresses."
  },
  {
    id: 5022,
    category: "Data Governance",
    question: "What is the purpose of a 'data governance committee' in a financial institution?",
    options: [
      "Managing customer data for marketing purposes",
      "A centralized body that establishes policies, frameworks, and best practices for data handling — ensuring accuracy, security, regulatory compliance, and consistency across business units",
      "A committee that reviews all customer data requests",
      "A regulatory body overseeing financial institution data practices"
    ],
    answer: 1,
    explanation: "Data governance committees are centralized bodies that establish data handling policies, frameworks, and best practices across an organization — ensuring data accuracy, security, regulatory compliance, and consistency to support AFC decision-making."
  },
  {
    id: 5023,
    category: "KYC Technology",
    question: "According to the study guide, what are the three categories of multi-factor authentication (MFA)?",
    options: [
      "Password, PIN, and security question",
      "Ownership (something you have), Knowledge (something you know), and Inherence (something you are)",
      "Biometric, behavioral, and documentary",
      "Level 1, Level 2, and Level 3 verification"
    ],
    answer: 1,
    explanation: "MFA combines three authentication categories: Ownership (something you have — e.g., security token), Knowledge (something you know — e.g., password), and Inherence (something you are — e.g., fingerprint or facial recognition)."
  },
  {
    id: 5024,
    category: "AFC Technology",
    question: "What risks does the study guide identify with implementing AI solutions in AFC?",
    options: [
      "AI solutions are always more accurate than human analysts",
      "AI solutions must be tested with diverse data sets to eliminate bias; they must be explainable, transparent, and relevant to the organization's specific context",
      "AI solutions are too expensive for most financial institutions",
      "AI solutions cannot comply with AML regulatory requirements"
    ],
    answer: 1,
    explanation: "The study guide notes that AI solutions must be tested with diverse data sets to help eliminate bias, be explainable and transparent, and be relevant to the institution's specific context. Proper care and diligence are required for effective implementation."
  },
  {
    id: 5025,
    category: "Transaction Monitoring Technology",
    question: "What is 'technology for blockchain tracing' in AML investigations?",
    options: [
      "Technology that creates new blockchains for regulatory reporting",
      "Tools (like blockchain analytics platforms) that trace the flow of virtual assets on public blockchains to identify illicit activity, sanctioned wallet addresses, and fund movements",
      "Software that blocks suspicious blockchain transactions in real time",
      "Technology for converting cryptocurrency to fiat for regulatory reporting"
    ],
    answer: 1,
    explanation: "Blockchain tracing technology (e.g., Chainalysis, Elliptic) allows investigators to trace virtual asset flows on public blockchains, identifying links to illicit activity, sanctioned wallet addresses, mixers/tumblers, and criminal entities."
  },
  {
    id: 5026,
    category: "Data Collection",
    question: "What is 'probabilistic matching' in entity resolution?",
    options: [
      "A method of randomly sampling data for quality checks",
      "An entity resolution technique that assigns similarity scores based on weighted statistical attributes — identifying close matches even with minor discrepancies, unlike exact deterministic matching",
      "A probabilistic risk assessment of customer entities",
      "A statistical model for predicting future suspicious transactions"
    ],
    answer: 1,
    explanation: "Probabilistic matching assigns similarity scores based on weighted, statistical attributes to identify close matches even with minor discrepancies (e.g., name spelling variations). It complements deterministic matching (exact rule-based matches)."
  },
  {
    id: 5027,
    category: "AFC Technology",
    question: "What is 'privacy-enhancing technology' (PET) in the AFC context?",
    options: [
      "Software that hides customer identities from compliance systems",
      "Technology that allows institutions to analyze data and share intelligence for AFC purposes while preserving data privacy — enabling compliance with both AML and data protection regulations",
      "Encryption tools for protecting internal SAR filing systems",
      "Technology that anonymizes customer data in regulatory reports"
    ],
    answer: 1,
    explanation: "PETs allow institutions to conduct AFC analysis and share intelligence while preserving data privacy — enabling institutions to balance AML compliance requirements with data protection regulations like GDPR."
  },
  {
    id: 5028,
    category: "Transaction Monitoring Technology",
    question: "What is a 'case management system' (CMS) in AML investigations?",
    options: [
      "A legal case management system for regulatory prosecutions",
      "A software platform that tracks AML alert investigations from generation through SAR filing, documents evidence, records dispositions, and supports management reporting",
      "A customer relationship management tool adapted for compliance",
      "An automated system that makes SAR filing decisions"
    ],
    answer: 1,
    explanation: "A CMS (or AML investigation platform) tracks alert investigations from initial review through disposition, documents evidence, manages SAR filings, records analyst decisions and rationale, and produces management and regulatory reports."
  },
  {
    id: 5029,
    category: "Screening Technology",
    question: "According to the study guide's OneFrance case, what was wrong with the facial recognition system?",
    options: [
      "It used too many nodal points, causing false positives",
      "It didn't incorporate strong liveness checks and wasn't properly integrated with the document processing system, failing to reliably match selfies to ID pictures — only verifying 80% of customers",
      "It was too expensive for the digital bank to operate",
      "It was prohibited by EU GDPR regulations"
    ],
    answer: 1,
    explanation: "The OneFrance facial recognition system didn't incorporate strong liveness checks and wasn't properly integrated with the document processing system. It could only reliably verify 80% of customers, requiring manual analyst intervention for the rest."
  },
  {
    id: 5030,
    category: "Screening Technology",
    question: "What improvements did the study guide's OneFrance consultant recommend for the screening system?",
    options: [
      "Eliminating all automated screening and switching to manual review",
      "Implementing more sophisticated facial recognition with 80+ nodal points and liveness checks; improving screening by tuning fuzzy logic to handle name variations from regional spelling differences",
      "Switching to a competitor's screening system",
      "Reducing screening frequency to improve customer experience"
    ],
    answer: 1,
    explanation: "The consultant recommended: (1) Implementing sophisticated facial recognition models with 80+ nodal points and liveness checks; (2) Improving screening by tuning fuzzy logic algorithms to handle name deviations from regional spelling variations."
  },
  {
    id: 5031,
    category: "Transaction Monitoring Technology",
    question: "What is 'scenario-based monitoring' in TM systems and what does 'scenario development' involve?",
    options: [
      "Running simulations of potential ML scenarios for training",
      "Using predefined detection rules (scenarios) to identify suspicious patterns; development involves designing rules based on known typologies, customer risk profiles, and regulatory guidance",
      "Monitoring scenarios from a single customer's transaction history",
      "Creating hypothetical ML cases for compliance training exercises"
    ],
    answer: 1,
    explanation: "Scenario-based TM uses predefined detection rules targeting known ML/TF patterns. Scenario development designs these rules based on known typologies, customer risk profiles, regulatory advisories, and previous suspicious activity experiences."
  },
  {
    id: 5032,
    category: "Data Collection",
    question: "What is 'data validation' in AFC technology and what does it involve?",
    options: [
      "Verifying that customer-provided data matches government records only",
      "Applying predefined rules and constraints to ensure data is complete, accurate, consistent, and meets business requirements before use in compliance systems",
      "Validating data by comparing it to industry benchmarks",
      "Confirming that SAR data is formatted correctly for FinCEN submission"
    ],
    answer: 1,
    explanation: "Data validation applies predefined rules and constraints to check for valid formats, expected ranges, permitted values, completeness, and accuracy — ensuring data meets business requirements before use in compliance systems."
  },
  {
    id: 5033,
    category: "AFC Technology",
    question: "According to the study guide, what are the advantages of using technology for customer onboarding identified by FATF?",
    options: [
      "Only cost savings",
      "Improved risk management, faster data processing, improved efficiency, greater auditability and governance, reduced cost, and versatile data handling",
      "Only fraud reduction and identity verification improvements",
      "Only improved customer satisfaction scores"
    ],
    answer: 1,
    explanation: "FATF identifies these advantages of digital onboarding technology: improved risk management, faster data processing, improved efficiency, greater auditability/accountability/governance, reduced cost, and versatile data handling."
  },
  {
    id: 5034,
    category: "KYC Technology",
    question: "What is 'electronic KYC' (eKYC) and how does it improve traditional KYC?",
    options: [
      "Sending KYC documents electronically to regulators",
      "A digital process for verifying customer identity electronically, replacing paper-based methods; it provides faster onboarding, increased efficiency, reduced errors, and clear audit trails",
      "An electronic system for managing paper KYC documents",
      "A FinCEN-mandated electronic filing system for KYC forms"
    ],
    answer: 1,
    explanation: "eKYC replaces paper-based verification with digital processes — completing identity verification in hours/minutes (vs. weeks for manual). It increases efficiency, reduces manual errors, ensures up-to-date data, and provides clear audit trails for regulatory inspections."
  },
  {
    id: 5035,
    category: "AFC Technology",
    question: "What is 'global AFC innovation' in the context of the study guide?",
    options: [
      "FATF's innovation lab for developing new AML recommendations",
      "The emerging use of advanced technologies globally — AI, machine learning, biometrics, blockchain analytics, RegTech — to improve AFC effectiveness and efficiency",
      "A FinCEN innovation program for financial institutions",
      "A private sector initiative to create a global AML database"
    ],
    answer: 1,
    explanation: "Global AFC innovation refers to the emerging use of advanced technologies worldwide — AI, machine learning, biometrics, blockchain analytics, and RegTech solutions — to improve the effectiveness and efficiency of AFC compliance programs."
  },
  {
    id: 5036,
    category: "Transaction Monitoring Technology",
    question: "What is 'contextual analysis' in AI-based transaction monitoring?",
    options: [
      "Reading customer emails to understand the context of transactions",
      "Operating on rules that check transactions against multiple criteria simultaneously — including changes from past customer behavior, peer comparisons, and industry sector risk",
      "Analyzing the social context of a customer's transactions",
      "A manual review process for flagged transactions"
    ],
    answer: 1,
    explanation: "Contextual analysis in AI-based TM checks transactions against multiple simultaneous criteria — whether a transaction exceeds a threshold AND how it compares to the customer's historical behavior AND their peer group AND their industry sector risk."
  },
  {
    id: 5037,
    category: "Data Collection",
    question: "What is the distinction between a 'data warehouse' and a 'data lake' in AFC technology?",
    options: [
      "Data warehouses are for regulatory data; data lakes for customer data",
      "Data warehouses store structured data optimized for analysis and reporting; data lakes store unstructured or semi-structured data at scale",
      "Data warehouses are manual; data lakes are automated",
      "Data warehouses are internal; data lakes are external sources"
    ],
    answer: 1,
    explanation: "Data warehouses store structured data optimized for analysis and reporting. Data lakes store unstructured or semi-structured data at scale. Compliance solutions can access either through APIs or direct feeds depending on the data type and use case."
  },
  {
    id: 5038,
    category: "KYC Technology",
    question: "What are 'behavioral biometrics' and how are they used in AFC?",
    options: [
      "Behavioral analysis of criminal suspects by law enforcement",
      "Monitoring distinctive characteristics of movements, gestures, and motor skills — such as unique keystroke patterns, device usage motions, and geolocation patterns — to detect anomalous behavior",
      "Biometric screening of employee behavior for insider threats",
      "Analysis of customer behavioral patterns for marketing"
    ],
    answer: 1,
    explanation: "Behavioral biometrics monitors distinctive characteristics of how users interact with devices — unique keystroke patterns, specific motions, geolocation patterns, buying behaviors — to detect account takeovers, fraud, and identity anomalies."
  },
  {
    id: 5039,
    category: "AFC Technology",
    question: "What does 'governance of compliance technology' require, according to the study guide?",
    options: [
      "Only senior management approval for technology purchases",
      "A structured approach including regulatory requirements for technology use, model validation, testing, change management, and ongoing oversight to ensure technology remains fit-for-purpose and compliant",
      "Annual external audits of all compliance technology systems",
      "FinCEN pre-approval of transaction monitoring systems"
    ],
    answer: 1,
    explanation: "Governance of compliance technology requires regulatory compliance, model validation, comprehensive testing, structured change management, and ongoing oversight — ensuring AFC technology remains fit-for-purpose, accurate, and compliant with evolving regulations."
  },
  {
    id: 5040,
    category: "Transaction Monitoring Technology",
    question: "What is a 'coverage and gap assessment' in AFC data and technology?",
    options: [
      "An assessment of how much of a transaction is covered by insurance",
      "An evaluation identifying gaps in the data inputs or scenarios needed for effective AFC detection — ensuring the monitoring system has adequate coverage of the institution's ML/TF risks",
      "A review of compliance staffing gaps in the AFC program",
      "An assessment of geographic coverage of the institution's branch network"
    ],
    answer: 1,
    explanation: "A coverage and gap assessment evaluates whether AFC technology has adequate data inputs and scenario coverage to detect the institution's ML/TF risks — identifying gaps where additional data sources, scenarios, or monitoring rules are needed."
  },
  {
    id: 5041,
    category: "Data Collection",
    question: "What is 'data quality' and why is it critical for AFC technology?",
    options: [
      "Ensuring data is stored in a secure location",
      "The accuracy, completeness, consistency, and reliability of data — poor data quality undermines the effectiveness of transaction monitoring, entity resolution, and all AFC technology dependent on that data",
      "Regulatory standards for data formatting in SAR filings",
      "The speed at which data is processed by compliance systems"
    ],
    answer: 1,
    explanation: "Data quality encompasses accuracy, completeness, consistency, and reliability. Poor data quality directly undermines AFC technology effectiveness — false positives/negatives in TM, incorrect entity resolution, and poor risk scoring all stem from data quality issues."
  },
  {
    id: 5042,
    category: "KYC Technology",
    question: "What challenge do deepfake technologies pose for digital onboarding according to the study guide?",
    options: [
      "They slow down the onboarding process for legitimate customers",
      "They are now used by criminals at scale to create synthetic identities that can defeat facial recognition and identity verification, making it almost impossible to detect fraud with the naked eye",
      "They are only used by nation-state actors, not financial criminals",
      "They are easily detectable by standard OCR technology"
    ],
    answer: 1,
    explanation: "The study guide notes that the sophistication of AI-generated deepfakes and synthetic identities makes it almost impossible to verify identity documents with the naked eye — requiring additional verification checks (liveness checks, advanced biometric models) to reliably authenticate customers."
  },
  {
    id: 5043,
    category: "Transaction Monitoring Technology",
    question: "What is 'above-the-line' and 'below-the-line' testing used to evaluate in TM scenarios?",
    options: [
      "Testing transactions above and below the OFAC screening threshold",
      "ATL tests transactions that should trigger alerts (testing the system catches genuine suspicious activity); BTL tests transactions below the threshold (testing the system isn't missing suspicious activity)",
      "Testing transactions for customers above and below average risk ratings",
      "Testing for transactions above and below the CTR filing threshold"
    ],
    answer: 1,
    explanation: "ATL (above-the-line) testing examines transactions that should be flagged by the system, while BTL (below-the-line) testing looks at transactions falling below the threshold. Both methods identify potential false positives and false negatives to optimize rule parameters."
  },
  {
    id: 5044,
    category: "AFC Technology",
    question: "According to the study guide, what is the benefit of 'transitioning from traditional systems to AI-based tools' in AFC?",
    options: [
      "AI tools eliminate the need for human compliance oversight",
      "AI-based tools can analyze vast amounts of data, detect complex patterns rules-based systems miss, reduce false positives, and adapt to evolving ML/TF typologies without requiring explicit rule updates",
      "AI tools automatically generate SAR narratives without human review",
      "AI tools reduce regulatory requirements for transaction monitoring"
    ],
    answer: 1,
    explanation: "Transitioning to AI-based AFC tools provides benefits including: detecting complex patterns that rules-based systems miss, analyzing larger data volumes, reducing false positives by considering more context, and adapting to evolving ML/TF methods."
  },
  {
    id: 5045,
    category: "Data Collection",
    question: "What is 'data governance administration' and what changes require governance approval?",
    options: [
      "Only changes to customer data require governance approval",
      "A structured process ensuring data quality and proper management of changes to compliance systems — including new data sources, changes to active model data, threshold adjustments, and ML parameter changes",
      "Annual board approval of the AFC data strategy",
      "FinCEN approval of changes to transaction monitoring thresholds"
    ],
    answer: 1,
    explanation: "Data governance administration manages changes to compliance systems, requiring formal approval for: new data sources, modifications to existing ones, and changes to model thresholds, rules, or ML parameters — with impact assessments and validation before deployment."
  },
  {
    id: 5046,
    category: "Transaction Monitoring Technology",
    question: "What is a 'Level 1 review' in the transaction monitoring alert review process?",
    options: [
      "The most complex level of SAR investigation",
      "The initial review stage where an analyst examines an alert's validity by evaluating the nature, transaction type, customer profile, and account history — dismissing false positives or escalating to Level 2",
      "The review conducted by the MLRO before SAR filing",
      "The regulatory examination of SAR quality by the examiner"
    ],
    answer: 1,
    explanation: "Level 1 review is the initial alert review stage where analysts examine alert validity by evaluating the alert's nature, transaction type, customer profile, account history, and previous alert history — dismissing false positives or escalating genuine concerns to Level 2."
  },
  {
    id: 5047,
    category: "AFC Technology",
    question: "What is 'technology implementation consideration' when adopting new AFC tools?",
    options: [
      "Only the cost of the new technology system",
      "Multiple factors including: regulatory requirements, integration with existing systems, data quality, staff training, governance, change management, and ongoing testing and validation",
      "Only the vendor's reputation and market position",
      "Only the technical specifications of the system"
    ],
    answer: 1,
    explanation: "Adopting new AFC technology requires considering: regulatory requirements for the technology, integration challenges with existing systems, data quality requirements, staff training needs, governance structures, change management, and ongoing validation."
  },
  {
    id: 5048,
    category: "Data Collection",
    question: "What is 'integrating data from various sources' a challenge for in AFC?",
    options: [
      "It only affects the cost of compliance technology",
      "Combining internal data (static and observed) with external data (watchlists, public records, third-party databases) in a consistent, accurate, and usable format for AFC systems",
      "It is only a challenge for small financial institutions",
      "Integration only affects the speed of transaction processing"
    ],
    answer: 1,
    explanation: "Integrating data from various sources — combining internal static and observed data with external watchlists, public records, and third-party databases — requires consistent formatting, quality checks, and technical integration to ensure AFC systems have accurate, complete data."
  },
  {
    id: 5049,
    category: "Transaction Monitoring Technology",
    question: "What transaction monitoring scenarios does the study guide list as 'frequently used'?",
    options: [
      "Only cash transactions above $10,000 and wire transfers",
      "Structured transactions, large cash transactions, large deposits exceeding peak transaction value, high-turnover/high-velocity remittances, excessive channel use, round-trip transactions, and one-to-N / N-to-one parties patterns",
      "Only transactions to high-risk jurisdictions",
      "Only transactions involving PEPs and sanctioned entities"
    ],
    answer: 1,
    explanation: "Frequently used TM scenarios include: structured transactions, large cash transactions exceeding thresholds, deposits exceeding peak transaction values, high-velocity remittances, excessive channel use, round-trip transactions (sent and returned), and one-to-N or N-to-one party patterns."
  },
  {
    id: 5050,
    category: "AFC Technology",
    question: "What is 'prioritizing resources' in AFC technology selection?",
    options: [
      "Investing only in the most expensive technology available",
      "A risk-based approach to technology investment — allocating resources to higher-risk areas and technologies that provide the greatest reduction in ML/TF risk per dollar invested",
      "Prioritizing human resources over technology investment",
      "Focusing technology investment only on transaction monitoring"
    ],
    answer: 1,
    explanation: "Prioritizing AFC technology resources means applying a risk-based approach — investing in technologies and capabilities that address the highest-priority risks, providing the greatest risk reduction per dollar invested and the most efficient use of compliance budgets."
  }
];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const mockTests: MockTest[] = [
  {
    id: 1,
    title: "Mock Test 1",
    subtitle: "Financial Crime Methods & Typologies",
    topic: "Chapters 1–2: Money Laundering, Financial Crime Types, Terrorism Financing",
    questions: test1Questions
  },
  {
    id: 2,
    title: "Mock Test 2",
    subtitle: "Sector-Specific ML Risks",
    topic: "Chapters 2–4: Banking, Non-Bank FIs, DNFBPs, High-Risk Sectors",
    questions: test2Questions
  },
  {
    id: 3,
    title: "Mock Test 3",
    subtitle: "Global Standards & Regulatory Frameworks",
    topic: "Chapters 5–6: FATF, International Bodies, US/EU Regulations",
    questions: test3Questions
  },
  {
    id: 4,
    title: "Mock Test 4",
    subtitle: "Building an AFC Compliance Program",
    topic: "Chapters 7–8: Program Components, Three Lines, CDD/KYC, SAR Process",
    questions: test4Questions
  },
  {
    id: 5,
    title: "Mock Test 5",
    subtitle: "Technology, Monitoring & Investigations",
    topic: "Chapters 9–10: AFC Technology, Transaction Monitoring, Data",
    questions: test5Questions
  }
];
