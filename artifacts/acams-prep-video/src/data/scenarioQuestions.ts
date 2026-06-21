import type { QuizQuestion } from './quizQuestions';

export const scenarioQuestions: QuizQuestion[] = [
  // --- GROUP 1: STRUCTURING & CASH TRANSACTION RED FLAGS ---
  {
    id: 201,
    category: "Scenario Based",
    question: "A nail salon owner deposits $9,800 in cash every Monday morning for 12 consecutive weeks. No single deposit exceeds $10,000. What is the MOST appropriate action?",
    options: [
      "File a CTR because the cumulative deposits exceed $10,000 over time",
      "File a SAR because the consistent sub-threshold amounts indicate structuring",
      "Call the customer to request an explanation before taking any action",
      "Close the account and report the closure to FinCEN"
    ],
    answer: 1,
    explanation: "The weekly $9,800 deposits — consistently just below the $10,000 CTR threshold — are a classic structuring pattern, a federal crime under 31 U.S.C. § 5324. A SAR must be filed. CTRs are triggered by single-day cash transactions exceeding $10,000 (or aggregated same-day transactions by the same person), not cumulative weekly totals. Calling the customer first would constitute illegal 'tipping off.' Filing a SAR is the correct and legally required response."
  },
  {
    id: 202,
    category: "Scenario Based",
    question: "Three individuals — later identified as coworkers — each deposit $4,000 cash into the same business account at different branches on the same day. The total is $12,000. What best describes this activity?",
    options: [
      "Legitimate business activity requiring only a CTR",
      "Smurfing — a structuring variant where multiple people conduct transactions to avoid reporting; requires both a CTR and a SAR",
      "An exempt transaction because each individual deposit is under $10,000",
      "A suspicious wire transfer requiring immediate account freezing"
    ],
    answer: 1,
    explanation: "This is 'smurfing,' where multiple people (smurfs) deposit funds on behalf of one party to avoid triggering a single large cash report. The bank must aggregate the transactions because they benefit the same account — a CTR is required for the $12,000 total. A SAR is also required because the coordinated structuring behavior is suspicious. Neither exemption nor simple CTR filing alone is sufficient."
  },
  {
    id: 203,
    category: "Scenario Based",
    question: "A used car dealership consistently reports monthly cash sales of $800,000, but its lot rarely has more than 20 cars, each priced under $15,000. What AML concern does this MOST suggest?",
    options: [
      "The dealership is over-reporting sales to inflate its tax basis",
      "The dealership may be a front business commingling illicit cash with legitimate sales revenue",
      "The dealership qualifies for a CTR exemption as a cash-intensive business",
      "No concern — auto dealers are exempt from BSA reporting requirements"
    ],
    answer: 1,
    explanation: "When reported revenues are wildly inconsistent with the visible business activity (20 cars × $15,000 = $300,000 max possible), it strongly suggests the business is a front used to commingle illicit funds with legitimate revenue — the 'integration' stage of money laundering. Auto dealers ARE subject to BSA requirements, including filing SARs and, under certain rules, Form 8300 for large cash purchases. This scenario warrants enhanced due diligence and likely a SAR."
  },
  {
    id: 204,
    category: "Scenario Based",
    question: "An analyst notices that a personal checking account receives hundreds of small ACH credits from individuals nationwide, then wires the entire balance to a single offshore account within 48 hours — repeatedly over six months. What typology does this MOST resemble?",
    options: [
      "Payroll processing for a legitimate staffing agency",
      "A funnel account used to aggregate and transfer illicit funds",
      "A peer-to-peer lending platform's standard operating pattern",
      "Round-tripping of funds between related business entities"
    ],
    answer: 1,
    explanation: "A funnel account receives funds from many sources (often victims of fraud, drug proceeds, or human trafficking payments) and rapidly consolidates and moves them offshore before detection. The hallmarks here — many small inflows, rapid complete outflow, consistent offshore wire — are textbook funnel account indicators. This requires an immediate SAR and possibly a law enforcement referral. The 48-hour cycle is designed to stay ahead of transaction monitoring systems."
  },
  {
    id: 205,
    category: "Scenario Based",
    question: "A casino reports that a patron exchanged $9,500 in cash for chips, played minimally, and then cashed out the chips as a casino check. The next day, the same person repeated the process. What is this technique called, and what should the casino do?",
    options: [
      "Chip washing — the casino should file a CTR for each day since amounts are just under $10,000",
      "Chip washing — the casino should file a SAR for suspicious structuring and possible money laundering through the casino",
      "Legitimate casino activity — no reporting required unless amounts exceed $10,000",
      "Round-tripping — the casino should freeze the patron's gaming account"
    ],
    answer: 1,
    explanation: "'Chip washing' involves exchanging dirty cash for chips, doing minimal gambling, then cashing out a casino check — effectively laundering cash through the casino's books. The patron is deliberately keeping amounts under $10,000 to avoid CTR filing (structuring). Casinos are covered financial institutions under the BSA and must file SARs for suspicious activity. The pattern across two days also shows deliberate structuring, compounding the SAR obligation."
  },
  {
    id: 206,
    category: "Scenario Based",
    question: "A bank customer makes $9,500 cash withdrawals on consecutive days from multiple teller stations. The tellers notice but do not file reports because each single transaction is below $10,000. What has MOST likely occurred?",
    options: [
      "No violation — cash withdrawals are not subject to CTR or SAR requirements",
      "A compliance failure — same-day transactions at the same institution for the same customer should be aggregated; a CTR and SAR may be required",
      "A SAR is required only if the withdrawals fund criminal activity",
      "The tellers should have placed a currency hold but no reports are necessary"
    ],
    answer: 1,
    explanation: "CTR aggregation rules require financial institutions to combine same-day cash transactions by the same customer. If a customer makes multiple cash withdrawals totaling more than $10,000 in a single business day, a CTR is required regardless of branch location. The pattern of just-below-threshold withdrawals also indicates structuring, requiring a SAR. Failure by tellers to aggregate is a BSA compliance failure with potential civil money penalties for the institution."
  },
  {
    id: 207,
    category: "Scenario Based",
    question: "A money services business (MSB) reports processing $2 million in currency exchange transactions in one month for a customer who claims to be a small restaurant owner. The customer provides no explanation for such large volumes. Which action is MOST appropriate?",
    options: [
      "Exempt the customer because restaurant businesses are cash-intensive",
      "Request source of funds documentation and file a SAR if the explanation is unsatisfactory or unavailable",
      "File only a CTR for transactions exceeding $10,000",
      "Refer the matter to the IRS without filing a SAR"
    ],
    answer: 1,
    explanation: "The transaction volume is grossly inconsistent with the customer's stated business profile — a significant red flag. The MSB must apply a risk-based approach: request source of funds documentation, assess the explanation, and file a SAR if the activity cannot be reasonably explained. Simply filing CTRs is insufficient; the incongruity between volume and business type is itself suspicious activity. MSBs are covered financial institutions with full SAR obligations under the BSA."
  },
  {
    id: 208,
    category: "Scenario Based",
    question: "Branch staff notice that an elderly customer's account suddenly receives large wire transfers from an unfamiliar individual, after which the elderly customer withdraws cash and hands it to someone waiting outside the branch. What does this MOST likely indicate?",
    options: [
      "Normal intergenerational wealth transfer between family members",
      "Elder financial abuse and possible money mule activity — requires a SAR",
      "Legitimate caregiving payments that should be exempted from reporting",
      "Reverse mortgage disbursements that are exempt from BSA requirements"
    ],
    answer: 1,
    explanation: "This scenario shows classic elder financial exploitation: an outside party controls an elderly person's funds and uses them as a money mule to move and extract cash. The combination of unexplained large incoming wires, immediate cash withdrawals, and a third party waiting outside are all major red flags. A SAR must be filed under the BSA, and many states require reporting to Adult Protective Services as well. The institution should also review whether the customer has capacity to consent."
  },
  {
    id: 209,
    category: "Scenario Based",
    question: "A compliance analyst reviewing wire transfer activity notices that a corporate customer consistently sends wires in round numbers — $50,000, $100,000, $250,000 — to the same offshore account, without any corresponding invoices on file. Why are round-dollar amounts a red flag?",
    options: [
      "They are not a red flag — round numbers suggest careful budgeting by the business",
      "Round-dollar wire transfers with no supporting documentation suggest funds are not tied to legitimate commercial transactions, which is a common ML indicator",
      "They trigger automatic OFAC sanctions screening but are otherwise normal",
      "Round numbers indicate the business is paying dividends, which are excluded from AML scrutiny"
    ],
    answer: 1,
    explanation: "Legitimate business transactions — invoices, payroll, vendor payments — almost never come in perfectly round numbers. Round-dollar amounts to offshore accounts with no supporting documentation strongly suggest the transfers are not tied to real commercial activity. This is a well-recognized AML typology indicator. Combined with the offshore destination and absence of invoices, this pattern warrants enhanced scrutiny, request for documentation, and likely a SAR filing."
  },
  {
    id: 210,
    category: "Scenario Based",
    question: "A transaction monitoring alert flags a customer who receives $500 in Zelle transfers from 30 different individuals every week, then immediately transfers the accumulated amount via wire to Mexico. The customer claims to be collecting rent from tenants. What is the analyst's BEST next step?",
    options: [
      "Accept the customer's explanation — collecting rent from multiple tenants is common",
      "Verify the explanation by requesting lease agreements; file a SAR if documentation is unavailable or inconsistent with the volume and pattern",
      "Close the case because $500 per sender is below any reporting threshold",
      "File a CTR because the aggregate weekly transfer exceeds $10,000"
    ],
    answer: 1,
    explanation: "The analyst must verify the customer's explanation. Thirty individuals paying $500/week each = $15,000/week — far more than typical rent collections for most residential landlords. Lease agreements should be requested. If unavailable or if the story doesn't hold up under scrutiny, a SAR is required. CTRs apply to cash transactions over $10,000, not electronic transfers. The rapid aggregation and immediate offshore wire is a classic funnel account/money mule pattern that cannot simply be accepted at face value."
  },

  // --- GROUP 2: SAR FILING DECISIONS ---
  {
    id: 211,
    category: "Scenario Based",
    question: "A loan officer discovers that an applicant submitted falsified income documents to obtain a $500,000 mortgage. The application is denied. Is a SAR required?",
    options: [
      "No — the loan was denied so no financial transaction occurred",
      "Yes — attempted mortgage fraud is suspicious activity regardless of whether a transaction was completed",
      "No — SAR requirements only apply after funds have been disbursed",
      "Yes — but only if the loan amount exceeded $1 million"
    ],
    answer: 1,
    explanation: "SARs must be filed for suspicious activity whether or not a transaction was completed. Mortgage application fraud — submitting falsified income documents — is a federal crime and a recognized predicate offense for money laundering. The BSA requires institutions to file a SAR whenever they 'know, suspect, or have reason to suspect' that a transaction involves illicit funds or violates a law. The denial of the application does not eliminate the reporting obligation."
  },
  {
    id: 212,
    category: "Scenario Based",
    question: "An institution identifies suspicious activity on June 1. After internal review, it is confirmed as reportable on June 20. By what date must the SAR be filed with FinCEN?",
    options: [
      "June 16 — within 15 days of detection",
      "July 1 — within 30 days of initial detection",
      "July 20 — within 30 days of the determination that a SAR is required",
      "August 1 — within 60 days of the initial detection date"
    ],
    answer: 2,
    explanation: "Under 31 CFR 1020.320, a SAR must be filed within 30 days after the date of the initial detection of facts that may constitute a basis for filing. If the activity is identified June 1, the 30-day clock starts then, making the deadline July 1. However, if no suspect is identified on the date of initial detection, the institution has up to 60 days. The key date is the initial detection (June 1), not the internal confirmation date (June 20) — making July 1 the correct answer here."
  },
  {
    id: 213,
    category: "Scenario Based",
    question: "After filing a SAR, a bank compliance officer mentions to the subject's relationship manager that 'we had to file some paperwork on that account.' What has the compliance officer done?",
    options: [
      "Properly informed internal staff as required by policy",
      "Committed a criminal act by tipping off the SAR subject, in violation of 31 U.S.C. § 5318(g)(2)",
      "Violated GDPR but not BSA requirements",
      "Properly followed internal SAR escalation procedures"
    ],
    answer: 1,
    explanation: "Federal law (31 U.S.C. § 5318(g)(2)) strictly prohibits disclosing to any person involved in a transaction that a SAR has been filed — this is known as 'tipping off.' The prohibition covers both direct and indirect disclosure. Even telling the relationship manager constitutes tipping off if the information could reasonably reach the subject. Violations can result in criminal penalties. The relationship manager should only know to maintain the account relationship normally without alerting the customer."
  },
  {
    id: 214,
    category: "Scenario Based",
    question: "Law enforcement contacts a bank with a formal request asking whether a named customer has a SAR filed against them. How should the bank respond?",
    options: [
      "Confirm or deny SAR existence because law enforcement has legal authority to request this information",
      "Neither confirm nor deny the existence of any SAR — direct law enforcement to FinCEN, which can share SAR data with authorized agencies",
      "Provide a copy of the SAR immediately to assist the investigation",
      "Refuse all contact with law enforcement without a court order"
    ],
    answer: 1,
    explanation: "Financial institutions cannot confirm or deny the existence of a SAR to any outside party, including law enforcement, without a court order or FinCEN authorization. SARs are protected under strict confidentiality provisions. Law enforcement agencies access SAR data through FinCEN's BSA database using their own access credentials. The bank should direct the request to FinCEN and may, separately, respond to a legally proper subpoena for underlying transaction records — but not SAR existence."
  },
  {
    id: 215,
    category: "Scenario Based",
    question: "A SAR was filed on a customer 60 days ago. The suspicious activity is continuing — the customer is still making the same unusual transactions. What should the institution do?",
    options: [
      "No further action is needed — the original SAR covers all subsequent activity",
      "File a continuing activity SAR within 120 days of the prior SAR filing for as long as the activity continues",
      "Wait until the activity stops before filing a new SAR",
      "Immediately close the account to stop the suspicious activity"
    ],
    answer: 1,
    explanation: "FinCEN guidance requires institutions to file continuing activity SARs every 90-120 days (depending on institution type) when suspicious activity continues after an initial SAR has been filed. Each subsequent filing should reference the prior SAR's filing date and document any new suspicious activity in the period. The original SAR does not cover future activity. Account closure is a business decision separate from the SAR obligation — closing an account does not eliminate the duty to report continuing suspicious activity observed up to that point."
  },
  {
    id: 216,
    category: "Scenario Based",
    question: "A long-standing corporate customer wires $2 million to a supplier in Germany. The customer has a documented history of European supplier payments and the wire matches its established business pattern. Should a SAR be filed?",
    options: [
      "Yes — all international wires over $1 million require a SAR",
      "No — the transaction is consistent with the customer's known business profile and established patterns",
      "Yes — wires to Germany require OFAC clearance and a SAR",
      "No — but a CTR must be filed for the wire transfer amount"
    ],
    answer: 1,
    explanation: "A SAR is only required when activity is suspicious — i.e., when it cannot be reasonably explained given the customer's known business, transaction history, and risk profile. A $2 million wire to a European supplier that matches the customer's documented business pattern and transaction history is NOT suspicious. Filing a SAR on every large transaction wastes law enforcement resources and is not required. CTRs apply only to cash transactions, not wire transfers. The key principle is risk-based analysis relative to the customer's baseline."
  },
  {
    id: 217,
    category: "Scenario Based",
    question: "A credit union compliance officer learns that a member is under federal investigation for tax fraud. The credit union has NOT independently identified any suspicious activity in the member's accounts. Must a SAR be filed?",
    options: [
      "Yes — knowledge of an ongoing federal investigation automatically triggers SAR filing",
      "No — the SAR obligation arises from the institution's own detection of suspicious activity, not from external news about a customer",
      "Yes — but only if the investigation involves more than $25,000",
      "No — credit unions are exempt from SAR filing requirements"
    ],
    answer: 1,
    explanation: "A SAR obligation is triggered by the institution's own independent detection of suspicious activity, not merely by learning that a customer is under external investigation. However, learning of the investigation should prompt the institution to conduct a thorough account review. If that review reveals suspicious activity the institution had not previously identified, then a SAR must be filed. Credit unions are fully subject to SAR requirements. Simply filing a SAR because of news of an investigation — without independent suspicion — would be an overreach."
  },
  {
    id: 218,
    category: "Scenario Based",
    question: "Bank A suspects a customer may be involved in fraud and wants to ask Bank B — where the same customer also has an account — whether Bank B has seen similar activity. Under what provision can the banks share this information?",
    options: [
      "Section 314(a) — mandatory information sharing with law enforcement",
      "Section 314(b) — voluntary information sharing between financial institutions with FinCEN registration",
      "GLBA Section 502 — financial privacy provisions permit inter-bank sharing",
      "Banks cannot share customer information under any circumstances without a court order"
    ],
    answer: 1,
    explanation: "Section 314(b) of the USA PATRIOT Act allows financial institutions that have registered with FinCEN to voluntarily share information about individuals, entities, and transactions that they suspect may involve money laundering or terrorist financing. Both institutions must be registered. This sharing is protected by a safe harbor from liability. Section 314(a) is different — it's the mandatory process where FinCEN sends law enforcement requests to institutions asking them to search their records for specified accounts."
  },
  {
    id: 219,
    category: "Scenario Based",
    question: "A front-line teller observes a customer acting nervously, asking how much cash can be deposited 'without it being reported.' The teller files an internal suspicious activity report but the supervisor dismisses it without escalating. The suspicious transaction proceeds. What is the PRIMARY compliance failure?",
    options: [
      "The teller for not filing a SAR directly with FinCEN",
      "The supervisor for failing to escalate the SAR referral, potentially resulting in a failure to file a required SAR with FinCEN",
      "The institution's board for not providing sufficient training",
      "FinCEN for not providing clear guidance on teller-level reporting obligations"
    ],
    answer: 1,
    explanation: "The teller acted correctly by filing an internal referral. The critical failure is the supervisor's dismissal without proper review and escalation. The customer's direct question about reporting thresholds is itself a major red flag for structuring. The institution's compliance function must properly evaluate all internal referrals. A supervisor who dismisses a legitimate SAR referral — preventing a required SAR from being filed — exposes the institution to BSA penalties and potentially personal liability. Robust escalation procedures are a required element of an effective AML program."
  },
  {
    id: 220,
    category: "Scenario Based",
    question: "A financial institution files a SAR jointly with another institution regarding a customer relationship they share. Which statement about joint SAR filing is CORRECT?",
    options: [
      "Joint filing is prohibited — each institution must file its own SAR independently",
      "Joint filing is permitted; one institution files the SAR and provides a copy to the other institution, which retains documentation of the filing",
      "Joint filing requires prior FinCEN approval before submission",
      "Joint SARs are only permitted for terrorism financing cases"
    ],
    answer: 1,
    explanation: "FinCEN permits joint SAR filing where two or more financial institutions are involved in the same suspicious activity. The designated lead filer submits the SAR to FinCEN, and the other institution(s) maintain documentation showing they participated in the filing. This is especially useful in correspondent banking relationships. No prior FinCEN approval is required. Each institution retains joint filing records for their own BSA record-keeping obligations."
  },

  // --- GROUP 3: KYC / CDD JUDGMENT CALLS ---
  {
    id: 221,
    category: "Scenario Based",
    question: "A new corporate customer's stated business is 'international consulting,' but it has no public presence, no employees on LinkedIn, and its registered agent is a law firm in a high-secrecy jurisdiction. How should the institution risk-rate this customer?",
    options: [
      "Low risk — consulting is a legitimate business type",
      "High risk — the combination of a vague business description, no verifiable presence, and a secrecy-jurisdiction registration are significant red flags",
      "Medium risk — only escalate if transaction volume exceeds $1 million",
      "Low risk — law firms routinely act as registered agents for legitimate businesses"
    ],
    answer: 1,
    explanation: "Each factor individually warrants attention; combined, they produce a clearly high-risk profile: (1) 'international consulting' is a vague, unverifiable business type frequently used in ML schemes; (2) no verifiable public presence makes the business opaque; (3) registration via a law firm in a high-secrecy jurisdiction raises beneficial ownership concerns. The institution should apply Enhanced Due Diligence (EDD), verify the ultimate beneficial owners, understand the source of funds, and obtain senior management approval before onboarding."
  },
  {
    id: 222,
    category: "Scenario Based",
    question: "Under FinCEN's Customer Due Diligence rule, a bank must identify the beneficial owners of a legal entity customer. A customer presents a corporate structure with six layers of holding companies. The bank cannot identify any individual owning 25% or more. What should the bank do?",
    options: [
      "Accept the customer — the 25% threshold was not met so no beneficial owner needs to be identified",
      "Identify the individual(s) who control the entity through the 'control prong' — the senior managing official — even if no one meets the 25% ownership threshold",
      "Refuse the customer because beneficial ownership cannot be determined",
      "File a SAR immediately because the structure is inherently suspicious"
    ],
    answer: 1,
    explanation: "FinCEN's CDD Rule has two prongs: (1) the ownership prong — anyone owning 25% or more; and (2) the control prong — at least one individual with significant management control (e.g., CEO, Managing Director). If no individual meets the 25% ownership threshold (common in dispersed or complex structures), the control prong still applies and must be satisfied. The institution must identify the controlling person. If even that cannot be determined, the institution should escalate and potentially decline the relationship. A SAR is not automatically required but may be appropriate if the opacity seems designed to conceal ownership."
  },
  {
    id: 223,
    category: "Scenario Based",
    question: "A retail bank customer opened an account two years ago as a low-risk individual with consistent salary deposits. She recently began receiving $30,000 monthly wire transfers from offshore accounts and is making large cash withdrawals. What CDD action is REQUIRED?",
    options: [
      "No action — the account was already verified at onboarding",
      "Refresh the customer's risk rating and conduct enhanced due diligence to understand the change in transaction behavior",
      "Immediately close the account without further review",
      "File a SAR before conducting any customer review"
    ],
    answer: 1,
    explanation: "CDD requires ongoing monitoring, not just onboarding verification. A material change in transaction behavior — especially a dramatic shift from salary deposits to large offshore wires and cash withdrawals — triggers a requirement to update the customer's risk profile and conduct further due diligence. This may escalate the customer to high-risk, requiring EDD. A SAR may ultimately be filed if the change cannot be explained, but EDD review comes first. Closing the account without investigation would be premature and could destroy evidence of criminal activity."
  },
  {
    id: 224,
    category: "Scenario Based",
    question: "During periodic customer review, a bank discovers its corporate customer changed its registered address to a jurisdiction newly added to the FATF 'increased monitoring' list. No other changes are noted. What is the BEST response?",
    options: [
      "No action needed — address changes alone are not suspicious",
      "Trigger an EDD refresh to assess the impact of the higher-risk jurisdiction on the customer's overall risk rating",
      "File a SAR because the customer moved to a high-risk jurisdiction",
      "Immediately exit the customer relationship"
    ],
    answer: 1,
    explanation: "A change in jurisdiction — particularly to one under FATF's increased monitoring — is a material risk factor that should trigger a customer risk rating reassessment. This does not automatically require a SAR (the activity may still be explainable), nor does it automatically require account closure. The proper response is to conduct an EDD refresh: verify the reason for the address change, assess whether it changes the business rationale, and update the risk rating. Only if new information reveals suspicious activity would a SAR be appropriate."
  },
  {
    id: 225,
    category: "Scenario Based",
    question: "A bank's CDD policy requires identifying beneficial owners of all legal entity customers. A customer presents a certificate showing the entity is a wholly-owned subsidiary of a U.S. publicly traded company listed on NYSE. Must the bank collect beneficial ownership information for this entity?",
    options: [
      "Yes — all legal entities require full beneficial ownership collection regardless of parent company status",
      "No — FinCEN's CDD Rule exempts subsidiaries of U.S. publicly traded companies from the beneficial ownership requirement",
      "Yes — but only if the entity processes more than $1 million in annual transactions",
      "No — NYSE-listed companies are always classified as low-risk and exempt from all CDD requirements"
    ],
    answer: 1,
    explanation: "FinCEN's CDD Rule (31 CFR 1010.230) explicitly exempts legal entities that are subsidiaries of companies whose common stock (or similar equity interests) are listed on the NYSE, NASDAQ, or NYSE American from the beneficial ownership collection requirement. This is because publicly traded companies are subject to SEC disclosure requirements that provide adequate transparency. However, institutions may apply additional due diligence based on risk, and this exemption does not eliminate other CDD obligations like understanding the nature of the business relationship."
  },
  {
    id: 226,
    category: "Scenario Based",
    question: "A bank's business customer states its purpose is 'real estate investment.' The customer receives large wire transfers, makes no obvious real estate-related payments, and cannot provide property purchase records when requested. What is the MOST concerning implication?",
    options: [
      "The customer may be in the early stages of a real estate investment, which can take time to deploy capital",
      "The stated business purpose is inconsistent with observed transactions — a significant red flag suggesting the business description may be a cover for illicit activity",
      "The customer may be classified as a Designated Non-Financial Business or Professional (DNFBP) and subject to lighter AML standards",
      "The lack of real estate payments confirms the customer is not yet active and presents low risk"
    ],
    answer: 1,
    explanation: "When observable transactions are fundamentally inconsistent with a customer's stated business purpose, it is a major red flag. A real estate investor that never makes real estate payments but receives large unexplained wire transfers does not match the stated profile. This misalignment is a red flag for a shell or front company. The institution should request documentation (property records, investment agreements), escalate for EDD, and file a SAR if the inconsistency cannot be resolved. Real estate is also a high-risk sector for money laundering noted in both FinCEN advisories and FATF guidance."
  },
  {
    id: 227,
    category: "Scenario Based",
    question: "A new customer is a publicly traded U.S. bank regulated by the OCC. Your bank's CDD policy requires verifying the identity of all new entity customers. Can simplified due diligence apply here?",
    options: [
      "No — all customers must receive identical due diligence regardless of their regulatory status",
      "Yes — federally regulated U.S. banks present lower ML risk and may qualify for simplified CDD under a risk-based approach",
      "No — simplified CDD is only available for individual retail customers, not institutions",
      "Yes — but only if the OCC provides written confirmation of the bank's compliance status"
    ],
    answer: 1,
    explanation: "A risk-based CDD approach allows institutions to apply simplified due diligence to customers that pose lower ML/TF risk. A publicly traded U.S. bank regulated by the OCC is already subject to rigorous federal AML oversight, SEC disclosure requirements, and CRA examination — making it lower risk. Simplified CDD does not mean zero CDD; basic verification is still required. However, intensive EDD steps can be omitted or reduced. The risk-based approach is a cornerstone of both FinCEN guidance and FATF Recommendation 10."
  },
  {
    id: 228,
    category: "Scenario Based",
    question: "A bank customer from a country with no formal identification document system presents a sworn affidavit from a village elder as identification. The bank cannot verify this document. What should the bank do?",
    options: [
      "Accept the affidavit — all forms of self-attestation are valid under the BSA",
      "Apply alternative verification methods (e.g., reference from another verified customer, utility records, biometric verification) consistent with the Customer Identification Program; decline if identity cannot be reasonably established",
      "Open the account and flag it for future monitoring",
      "Refer the customer to FinCEN for official identification processing"
    ],
    answer: 1,
    explanation: "The BSA's Customer Identification Program (CIP) requires verifying identity using 'documents, non-documentary methods, or a combination.' When standard documents are unavailable (e.g., for refugees or customers from countries with limited ID infrastructure), alternative methods are permissible. However, if identity cannot be reasonably verified through any available means, the institution must decline the relationship. An unverifiable affidavit alone is insufficient. The institution should document its verification attempts and risk-based reasoning in the customer file."
  },
  {
    id: 229,
    category: "Scenario Based",
    question: "During EDD, a high-risk customer states their wealth comes from 'family inheritance' but cannot name the deceased relative, provide a probate document, or offer any verifiable documentation. What is the BEST course of action?",
    options: [
      "Accept the explanation — oral declarations about inheritance are customarily accepted in AML practice",
      "Request alternative documentation (estate records, legal correspondence); if none is provided and source of wealth cannot be established, file a SAR and consider exiting the relationship",
      "Accept it provisionally and schedule a follow-up review in 12 months",
      "The source of wealth claim is immaterial — focus only on transaction monitoring"
    ],
    answer: 1,
    explanation: "Source of wealth verification is a core component of EDD for high-risk customers. An unverifiable 'inheritance' claim — with no names, dates, or documents — is a red flag, not a sufficient explanation. Best practice is to request documentary evidence (death certificate, probate records, estate attorney correspondence). If the customer cannot or will not provide documentation and the source of wealth cannot be otherwise established, the institution cannot fully assess ML risk, supporting both a SAR filing and potential account closure. EDD exists precisely for situations where standard verification is insufficient."
  },
  {
    id: 230,
    category: "Scenario Based",
    question: "A private banking client discloses that her brother is a cabinet minister in a foreign government. The client herself holds no government position. What category does she fall into, and what due diligence applies?",
    options: [
      "She is not a PEP — only the officeholder qualifies, not family members",
      "She is a Politically Exposed Person (PEP) under most frameworks as a close family member of a PEP, requiring enhanced due diligence",
      "She qualifies as a PEP only if she manages funds on her brother's behalf",
      "She requires simplified due diligence because she personally holds no government position"
    ],
    answer: 1,
    explanation: "FATF Recommendation 12 and most national AML frameworks extend PEP status to 'close associates' and 'family members' of foreign PEPs. A sibling of a cabinet minister is a family member PEP. This classification triggers enhanced due diligence: senior management approval for the relationship, enhanced source of funds/wealth verification, and ongoing enhanced monitoring. The rationale is that family members may be conduits for corrupt proceeds even if they hold no office themselves. The EDD obligation persists as long as the brother remains in office and often for a period afterward."
  },

  // --- GROUP 4: EDD & PEPs ---
  {
    id: 231,
    category: "Scenario Based",
    question: "A foreign politician's wife approaches a U.S. private bank to open a $5 million account funded with a wire from a Cayman Islands holding company. The politician is on the OFAC SDN list. What is the CORRECT action?",
    options: [
      "Open the account and file a SAR within 30 days",
      "Block the transaction, reject the account opening, and report to OFAC within 10 business days",
      "Obtain senior management approval and proceed with enhanced monitoring",
      "Apply EDD and open the account if no other red flags are found"
    ],
    answer: 1,
    explanation: "If the politician is on OFAC's SDN list, his wife is very likely a 'blocked person' under OFAC's 50% rule (if he owns 50% or more of the Cayman entity) or is at minimum a close family member of a sanctioned individual. The wire must be blocked, the account opening rejected, and the blocked property reported to OFAC. OFAC regulations require filing a blocked property report within 10 business days of the blocking action. This is a sanctions compliance issue separate from — and more urgent than — AML EDD."
  },
  {
    id: 232,
    category: "Scenario Based",
    question: "A bank has completed EDD on a high-risk PEP and finds no adverse information. The compliance officer approves the relationship without senior management sign-off. Is this sufficient?",
    options: [
      "Yes — if EDD finds no adverse information, senior management approval is not required",
      "No — most regulatory frameworks and best practices require senior management or board-level approval before establishing or continuing PEP relationships, regardless of EDD findings",
      "Yes — senior management approval is only needed for SARs, not EDD",
      "No — EDD must be repeated quarterly before approval is even considered"
    ],
    answer: 1,
    explanation: "Senior management approval is a mandatory component of PEP EDD under FATF Recommendations and most national frameworks (including FinCEN guidance on private banking and the Wolfsberg Principles). This requirement exists regardless of whether adverse information was found — the purpose is institutional governance and accountability for high-risk relationships. Compliance officer approval alone is insufficient. The approval must come from sufficiently senior management with authority over risk acceptance, typically at the C-suite or business line head level."
  },
  {
    id: 233,
    category: "Scenario Based",
    question: "A state governor from Iowa opens a personal checking account at a community bank. Under U.S. AML standards, how should the bank classify this individual?",
    options: [
      "As a foreign PEP requiring full EDD",
      "As a domestic PEP — U.S. frameworks require enhanced scrutiny for domestic senior officials, though requirements are less prescriptive than for foreign PEPs",
      "As a standard retail customer — U.S. politicians do not qualify as PEPs under FinCEN rules",
      "As exempt from AML screening because state officials are publicly accountable"
    ],
    answer: 1,
    explanation: "FinCEN's guidance and the FFIEC BSA/AML Examination Manual address domestic politically exposed persons (DPEPs). While FATF's PEP requirements are mandatory only for foreign PEPs, FinCEN and U.S. regulators expect institutions to apply a risk-based approach to domestic senior officials as well. A state governor with significant public authority over contracts, licensing, and public funds warrants enhanced scrutiny. The institution should assess corruption risk and apply appropriate due diligence — though the specific EDD requirements are less prescriptive than for foreign PEPs."
  },
  {
    id: 234,
    category: "Scenario Based",
    question: "A former president of a small nation left office three years ago and now approaches a bank to open a wealth management account. Does PEP status still apply?",
    options: [
      "No — PEP status automatically ends when a person leaves public office",
      "Yes — PEP status typically persists for a minimum of 12 months, and leading AML frameworks recommend continued EDD for several years (often 5+) after leaving office",
      "No — only currently serving officials qualify as PEPs",
      "Yes — but only if the individual is currently under criminal investigation"
    ],
    answer: 1,
    explanation: "PEP status does not simply end when an individual leaves office. FATF Recommendation 12 requires institutions to apply EDD to former PEPs for a risk-based period after they leave office. The Wolfsberg Principles and many national frameworks suggest maintaining enhanced monitoring for at least 12-24 months, with many practitioners recommending 5+ years for senior officials like presidents. The rationale: corrupt officials may move proceeds years after leaving office. A former president of any nation should be treated as a PEP with ongoing EDD."
  },
  {
    id: 235,
    category: "Scenario Based",
    question: "During an EDD review, a compliance analyst discovers adverse media reporting that a business customer's CEO was named in a foreign bribery investigation three years ago but was never charged. How should this information be treated?",
    options: [
      "Disregard it — only convictions are relevant to AML risk assessments",
      "Consider it a meaningful risk indicator that should be factored into the customer's overall risk rating, even without a conviction",
      "File a SAR immediately because the adverse media constitutes knowledge of a crime",
      "Ignore it because the event occurred three years ago and is therefore time-barred"
    ],
    answer: 1,
    explanation: "Adverse media — including allegations, investigations, and civil suits — is a key input in AML risk assessments even without a conviction. A bribery investigation naming a CEO is a significant red flag for corruption risk, even if charges were not filed. The absence of a conviction does not resolve the risk. The institution should document the adverse media, assess its relevance, and incorporate it into the risk rating decision. Depending on the severity and other factors, it may warrant elevated monitoring, relationship review, or EDD escalation. Automatic SAR filing is not required — risk assessment is."
  },
  {
    id: 236,
    category: "Scenario Based",
    question: "A private bank's high-net-worth client has historically kept $10 million on deposit. He suddenly requests a $9.8 million wire to a bank in a jurisdiction the FATF has identified as having strategic AML/CFT deficiencies. What should the relationship manager do FIRST?",
    options: [
      "Execute the wire immediately to preserve the client relationship",
      "Place the wire on hold and escalate to compliance for review before proceeding",
      "Execute the wire but file a SAR after the fact",
      "Refuse the wire and close the account"
    ],
    answer: 1,
    explanation: "The combination of an unusually large, atypical wire to a FATF-identified high-risk jurisdiction warrants a compliance hold before execution. Compliance must review the transaction, conduct EDD on the destination, verify the business purpose, and assess whether the wire is consistent with the client's known activity. Executing first and filing a SAR later ('pay and pursue') allows the funds to leave and may permanently frustrate law enforcement. The relationship manager should never override compliance concerns for client relationship reasons. Refusal without review is also premature — the transaction may be legitimate."
  },
  {
    id: 237,
    category: "Scenario Based",
    question: "An EDD review on a new corporate customer reveals that the company's ultimate beneficial owner is the same individual as the customer's stated third-party 'business introducer.' The customer denies any relationship between the two. What does this discrepancy suggest?",
    options: [
      "A minor documentation error that can be corrected with updated forms",
      "Potential deception about beneficial ownership and control — a significant red flag indicating possible concealment of the true ownership structure",
      "The customer is using a legitimate intermediary arrangement, common in international business",
      "No concern — introducers commonly have business interests in the clients they refer"
    ],
    answer: 1,
    explanation: "When a customer actively denies a relationship that documentary evidence contradicts, it strongly suggests deliberate concealment. A beneficial owner who is simultaneously acting as an undisclosed business introducer may be attempting to obscure their control of the entity to evade KYC scrutiny. This is a major red flag for potential fraud, sanctions evasion, or money laundering. The institution should not accept the denial without investigation, must document the discrepancy, escalate to senior compliance, and consider both filing a SAR and declining the relationship."
  },
  {
    id: 238,
    category: "Scenario Based",
    question: "A correspondent bank asks its U.S. respondent bank to process a payment on behalf of a nested institution — a bank within a bank that the U.S. institution has never heard of. The correspondent provides no information about the nested bank. What is the HIGHEST risk concern?",
    options: [
      "Currency exchange rate exposure from the nested bank's home jurisdiction",
      "The U.S. institution is providing banking services to an institution it cannot perform CDD on, creating a black hole for AML controls",
      "Concentration risk from processing too many transactions for one correspondent",
      "The correspondent's credit risk profile"
    ],
    answer: 1,
    explanation: "Nested correspondent banking occurs when a correspondent bank provides access to its U.S. dollar clearing to third-party institutions ('nested' or 'downstream' respondents) without disclosing this to the U.S. bank. This means the U.S. bank is effectively banking unknown institutions with unknown customers and unknown risk profiles. FinCEN and U.S. bank examiners consider undisclosed nested accounts a high-risk red flag. The U.S. bank must apply due diligence to understand who is actually using its services and may need to terminate the relationship if the correspondent cannot provide adequate information."
  },
  {
    id: 239,
    category: "Scenario Based",
    question: "A private banking relationship manager discovers that a client transferred $3 million to a non-profit organization in a country with active terrorist groups, claiming it is a charitable donation. What EDD step is MOST critical?",
    options: [
      "Accept the explanation — charitable donations are protected under the First Amendment",
      "Verify the non-profit's registration, mission, and whether it appears on any terrorist financing watch lists; assess whether the payment is consistent with known client activity",
      "File a SAR immediately without further investigation",
      "Contact the non-profit directly to verify the donation"
    ],
    answer: 1,
    explanation: "Charitable donations to non-profits in high-risk jurisdictions are a known terrorist financing typology. The EDD review must include: verifying the non-profit's legal registration and charitable status; screening it against OFAC, UN sanctions, and terrorist designation lists; assessing whether the donation is consistent with the client's known philanthropic history; and reviewing the jurisdiction's terrorism risk profile. A SAR may ultimately be required if these checks raise unresolved concerns. Contacting the non-profit directly could tip off potential bad actors and is not the right step."
  },
  {
    id: 240,
    category: "Scenario Based",
    question: "A compliance officer discovers that a legal entity customer's ownership structure involves five layers of holding companies, each in a different jurisdiction, with the ultimate beneficial owner being a bearer share company in a jurisdiction that does not record share ownership. What is the MOST appropriate conclusion?",
    options: [
      "This structure is acceptable — complex ownership structures are common in multinational business",
      "The structure presents an unacceptable level of beneficial ownership opacity; the institution should decline or exit unless ownership can be adequately established through other means",
      "The structure is suspicious only if the customer is from a FATF blacklisted country",
      "File a SAR and continue the relationship with enhanced monitoring"
    ],
    answer: 1,
    explanation: "Bearer share companies with no ownership records represent the apex of beneficial ownership opacity — by design, nobody can trace who owns them. Combined with five jurisdictional layers, this structure makes meaningful beneficial ownership verification impossible. The institution cannot satisfy its CDD Rule obligations if it cannot identify the ultimate beneficial owner. FinCEN, the FFIEC, and international standards support declining or exiting such relationships when adequate transparency cannot be achieved. A SAR alone is insufficient if the relationship continues without adequate CDD — the institution must resolve the opacity or exit."
  },

  // --- GROUP 5: TRADE-BASED MONEY LAUNDERING ---
  {
    id: 241,
    category: "Scenario Based",
    question: "A trade finance department receives a letter of credit application for 10,000 laptops at $15 each. The current market price for comparable laptops is approximately $350 each. What TBML technique does this suggest?",
    options: [
      "Over-invoicing — to transfer value from the importing country to the exporting country",
      "Under-invoicing — to transfer value from the exporting country to the importing country, allowing the importer to receive goods worth more than paid for",
      "Multiple invoicing — submitting the same invoice multiple times to multiple financial institutions",
      "Phantom shipment — billing for goods that were never shipped"
    ],
    answer: 1,
    explanation: "Under-invoicing means billing for goods at below-market prices. The importer pays less than the goods are worth, effectively receiving a value transfer from the exporter. The difference between the real value ($3.5M) and the invoiced amount ($150K) represents funds moved from the exporter's country to the importer's country — a classic trade-based money laundering (TBML) technique. Trade finance staff must compare invoiced prices against market benchmarks and flag significant discrepancies. FATF's 2006 TBML typology report details this technique."
  },
  {
    id: 242,
    category: "Scenario Based",
    question: "An exporter bills $500,000 for a shipment of electronics to a buyer in Colombia. Independent trade data shows identical goods are typically priced at $180,000. The exporter is a new customer with no prior history at the bank. What does this pattern suggest?",
    options: [
      "Normal trade finance variability — prices fluctuate based on contract terms",
      "Over-invoicing — the exporter inflates the price to move excess value (illicit funds) out of Colombia into the exporting country under the guise of payment for goods",
      "Under-invoicing of a luxury goods shipment",
      "A legitimate premium for expedited delivery, which is common in electronics"
    ],
    answer: 1,
    explanation: "Over-invoicing involves billing at inflated prices so the buyer (in Colombia) pays more than the goods are worth. The excess payment — $320,000 — moves value from Colombia to the exporting country disguised as a trade payment. This is a classic TBML technique used to repatriate drug trafficking proceeds or evade capital controls. The new customer status amplifies the concern. The bank should refuse to process the letter of credit without an explanation for the pricing discrepancy and should consider filing a SAR."
  },
  {
    id: 243,
    category: "Scenario Based",
    question: "A jewelry exporter submits three separate letters of credit to three different banks, each for the same $400,000 shipment of diamonds to Dubai. What TBML technique is being used?",
    options: [
      "Over-invoicing through multiple bank channels",
      "Multiple invoicing — billing multiple financial institutions for the same single shipment to fraudulently obtain multiple payments",
      "Trade layering through correspondent networks",
      "Phantom shipment — the diamonds were never shipped"
    ],
    answer: 1,
    explanation: "Multiple invoicing involves billing multiple financial institutions or buyers for the same single transaction. Here, the exporter submits three LCs to three banks for the same shipment, potentially receiving three payments for one delivery — fraudulently multiplying proceeds. This TBML technique is particularly effective when buyers and financing institutions are in different countries and do not coordinate. Indicators include identical shipping documentation presented to multiple institutions and inconsistencies between shipping records and financial records."
  },
  {
    id: 244,
    category: "Scenario Based",
    question: "A Colombian garment importer pays for U.S. goods with Colombian pesos through a network of money brokers, who then arrange for the equivalent dollar value to be paid to the U.S. exporter from U.S. drug trafficking proceeds. What typology is this?",
    options: [
      "Black Market Peso Exchange (BMPE) — a complex TBML scheme that converts drug dollars into pesos through trade transactions",
      "Hawala — an informal value transfer system",
      "Trade-based layering through a professional money laundering network",
      "Correspondent banking abuse through dollar substitution"
    ],
    answer: 0,
    explanation: "The Black Market Peso Exchange is a sophisticated TBML typology first documented in Colombia. Drug traffickers sell U.S. drug dollars to peso brokers at a discount. Brokers use those dollars to purchase goods for Colombian importers, who pay the brokers in pesos in Colombia. The result: drug dollars are converted into legitimate-seeming U.S. export payments, and Colombian importers get goods at below-market prices. FinCEN has issued multiple advisories on BMPE, and it remains one of the most widely used TBML methods for laundering drug trafficking proceeds."
  },
  {
    id: 245,
    category: "Scenario Based",
    question: "A trade finance analyst notices that a customer's import/export documentation shows a shipment of 'miscellaneous goods' with no description, quantity, or weight listed. The associated LC payment is $2.8 million. What is the significance of vague trade documentation?",
    options: [
      "It is standard practice in bulk commodity trade and requires no additional review",
      "Vague or incomplete documentation is a major TBML red flag suggesting the 'goods' may not exist or that the transaction is designed to obscure the true nature of the transfer",
      "It indicates a customs classification dispute that should be referred to customs authorities only",
      "Miscellaneous goods categories are exempt from AML documentation requirements"
    ],
    answer: 1,
    explanation: "Accurate, specific trade documentation is essential to verify that a transaction represents genuine commerce. Vague descriptions like 'miscellaneous goods' without specifics make it impossible to verify the shipment, assess pricing reasonableness, or confirm that goods actually changed hands. This is a red flag for phantom shipments (billing for non-existent goods) or TBML. The institution should request complete documentation including commodity descriptions, quantities, weights, and trade data consistent with the invoiced price before processing payment."
  },
  {
    id: 246,
    category: "Scenario Based",
    question: "A compliance officer reviewing letters of credit notices that a customer's shipments to and from the same country have been increasing consistently, but the customer's stated business rationale shifts from 'import of raw materials' to 'export of finished goods' within six months with no explanation. What concern does this raise?",
    options: [
      "No concern — businesses evolve their trade activities over time",
      "The unexplained shift in trade direction may indicate the entity is fabricating transactions in both directions to move value, consistent with round-tripping or circular TBML",
      "The customer may have expanded to a vertically integrated model, which should be encouraged",
      "Exporting finished goods to the same country you import raw materials from is a standard supply chain model"
    ],
    answer: 1,
    explanation: "Round-tripping involves moving funds in both directions through trade transactions to make illicit value transfers appear to be legitimate business activity. When a customer rapidly shifts from importer to exporter with the same counterparty country and no credible business explanation, it warrants scrutiny for circular TBML. The institution should request updated business documentation, understand the business rationale for the shift, and assess whether the transactions are consistent with genuine trade. Unexplained reversals of trade direction are listed as TBML red flags in FinCEN advisories and the Wolfsberg Trade Finance Principles."
  },
  {
    id: 247,
    category: "Scenario Based",
    question: "A trade finance customer consistently uses third-party intermediaries to make payments on its behalf, and the names on shipping documents differ from the names on payment orders. This mismatch is MOST indicative of what TBML risk?",
    options: [
      "Standard trade financing through factoring arrangements",
      "Third-party payment arrangements that obscure the true identity of parties, a recognized TBML red flag for concealing beneficial ownership of trade transactions",
      "Legitimate supply chain financing where payment agents are common",
      "A customs documentation error requiring correction but not AML concern"
    ],
    answer: 1,
    explanation: "When the parties named in shipping documentation (who actually send/receive goods) differ from those making/receiving payments, it creates opacity about who truly benefits from the transaction. This is a recognized TBML red flag. FinCEN's 2010 Advisory on TBML and the Wolfsberg Trade Finance Principles both highlight third-party payment arrangements as suspicious indicators. While factoring and supply chain finance legitimately involve third parties, unexplained mismatches across documentation warrant investigation and possibly a SAR."
  },
  {
    id: 248,
    category: "Scenario Based",
    question: "An analyst reviews an import transaction where a U.S. company paid $1.2 million for a shipment of steel from a trading company in a free trade zone. Due diligence reveals the trading company was incorporated six weeks ago, has no employees, and has no prior trade history. What risk does this present?",
    options: [
      "Low risk — free trade zones are carefully regulated and monitored",
      "High risk — free trade zones often have lax oversight, and a newly formed company with no trade history acting as a trade intermediary is a classic TBML red flag",
      "Medium risk — the trading company should simply be asked to provide its registration certificate",
      "No risk — new companies routinely participate in large trade transactions during their launch period"
    ],
    answer: 1,
    explanation: "Free trade zones present heightened TBML risk because they often have reduced customs oversight, easier incorporation, and less transparency than standard jurisdictions. A shell-like trading company — six weeks old, no employees, no trade history — acting as an intermediary for a $1.2M steel transaction is a textbook TBML red flag. Criminals use FTZ-incorporated companies to create a paper trail of 'trade' that obscures the true origins of funds. The institution should conduct EDD on the counterparty, verify the goods' existence, and potentially file a SAR."
  },
  {
    id: 249,
    category: "Scenario Based",
    question: "A pharmaceutical company customer submits a $5 million letter of credit for chemicals that can be used as precursors for drug manufacturing. The destination country has been linked to drug production. What additional step is MOST critical?",
    options: [
      "Process the LC — pharmaceutical companies are licensed and inherently low-risk",
      "Verify that the chemicals are not on controlled substance precursor lists and confirm the buyer has appropriate import permits; escalate for sanctions and export control screening",
      "File a SAR immediately and refuse to process the LC",
      "Contact the DEA before processing any pharmaceutical-related trade finance"
    ],
    answer: 1,
    explanation: "Chemical precursors for drug manufacturing are subject to export control regulations (DEA, Commerce Department) as well as AML scrutiny. The bank must verify: (1) the chemicals are not controlled precursors or are properly licensed; (2) the buyer has valid import permits; (3) neither the buyer nor the destination triggers sanctions or export control violations; (4) the transaction makes sense commercially. This is a dual-use goods concern — legitimate pharmaceutical companies exist, but drug traffickers also use legitimate-looking trade channels. Automatic refusal is too blunt; thorough verification is required."
  },
  {
    id: 250,
    category: "Scenario Based",
    question: "A bank's trade finance customer requests payment under a letter of credit but presents a bill of lading showing the goods were delivered to a port in Crimea. What is the bank's PRIMARY obligation before processing payment?",
    options: [
      "Process payment — bills of lading are self-authenticating legal documents",
      "Conduct OFAC sanctions screening — Crimea is subject to U.S. sanctions; processing payment may constitute a violation of Ukraine-related sanctions programs",
      "Request a certificate of origin and then process payment if it shows Ukraine",
      "Escalate to the correspondent bank in Ukraine for clearance"
    ],
    answer: 1,
    explanation: "Crimea is subject to comprehensive U.S. sanctions under OFAC's Ukraine-Related Sanctions Regulations. Any financial transaction involving Crimea — including processing payment under a letter of credit — may constitute a violation. Before processing, the bank must conduct OFAC screening and assess whether a specific license is required. Proceeding based solely on a bill of lading without sanctions analysis could expose the bank to severe OFAC civil and criminal penalties. This takes priority over any trade documentation analysis."
  },

  // --- GROUP 6: CORRESPONDENT BANKING & WIRE TRANSFERS ---
  {
    id: 251,
    category: "Scenario Based",
    question: "A U.S. bank receives wire transfers on behalf of a foreign correspondent bank's customers, but the wire messages contain only 'Customer of ABC Bank' with no customer name or account number. What regulation is likely being violated?",
    options: [
      "The Currency Transaction Report requirement under the BSA",
      "The Funds Transfer Rule (Travel Rule) under 31 CFR 1010.410, which requires full originator and beneficiary information in wire transfers",
      "OFAC regulations requiring screening of all wire transfer details",
      "The Patriot Act section 326 Customer Identification Program rule"
    ],
    answer: 1,
    explanation: "The Funds Transfer Rule (often called the Travel Rule) requires that financial institutions include complete originator and beneficiary information with wire transfers of $3,000 or more. Receiving a wire with only 'Customer of ABC Bank' — no name, no account number — is a clear Travel Rule violation. The U.S. bank must have procedures to handle such incomplete messages, which may include requesting the missing information from the correspondent, rejecting the transfer, or filing a SAR. This is a common examination finding in correspondent banking."
  },
  {
    id: 252,
    category: "Scenario Based",
    question: "During due diligence on a foreign respondent bank, a U.S. correspondent discovers that the respondent operates in a jurisdiction with no AML regulations and offers 'no questions asked' correspondent services to local businesses. What must the U.S. bank do?",
    options: [
      "Accept the relationship with enhanced monitoring since no specific violations have occurred",
      "Terminate or decline the relationship — U.S. banks are prohibited from maintaining correspondent accounts for foreign shell banks, and this respondent's model presents extreme ML risk",
      "File a SAR and continue the relationship provisionally",
      "Obtain annual certifications from the respondent bank and proceed"
    ],
    answer: 1,
    explanation: "Section 313 of the USA PATRIOT Act prohibits U.S. banks from maintaining correspondent accounts for foreign shell banks. While this respondent may not technically be a shell bank, its 'no questions asked' model in a jurisdiction with no AML regulation effectively means the U.S. bank would be providing dollar clearing to completely unknown customers with no AML controls. This is an unacceptable risk level. Section 312 also requires specific due diligence on foreign correspondent accounts, including AML program assessment. The U.S. bank should exit this relationship."
  },
  {
    id: 253,
    category: "Scenario Based",
    question: "A transaction monitoring system flags a pattern where incoming wires from Country A are immediately passed through as outgoing wires to Country B, with no time for the correspondent bank's customers to be conducting business in the U.S. What does this pattern MOST suggest?",
    options: [
      "Normal correspondent banking dollar-clearing operations",
      "The correspondent bank may be facilitating nested correspondent banking — allowing unknown downstream institutions to access U.S. dollar clearing through the respondent",
      "Currency arbitrage activity that is regulated by the CFTC",
      "Standard payroll processing for a multinational corporation"
    ],
    answer: 1,
    explanation: "Wires flowing in from one jurisdiction and immediately flowing out to another through a correspondent account — especially with no business rationale apparent in the U.S. — is a classic indicator of nested correspondent banking or transit account abuse. The correspondent bank may be providing access to unknown downstream institutions or customers. FinCEN advisories on correspondent banking highlight 'pass-through' wire activity as a high-risk pattern requiring investigation. The U.S. bank should request information about the underlying customers and may need to file a SAR."
  },
  {
    id: 254,
    category: "Scenario Based",
    question: "A customer requests a wire transfer to a counterparty in North Korea. The customer claims it is payment for legitimate software development services. What is the bank's CORRECT response?",
    options: [
      "Process the wire after obtaining senior management approval",
      "Block the wire, reject the transaction, file a report with OFAC, and do not inform the customer of the reason for the rejection",
      "File a SAR and proceed with the wire since software services are not specifically prohibited",
      "Request a FinCEN ruling before deciding how to proceed"
    ],
    answer: 1,
    explanation: "North Korea is subject to comprehensive U.S. sanctions under OFAC's DPRK Sanctions Regulations. Virtually all financial transactions with North Korea — including payments for services — are prohibited without an OFAC license. The wire must be blocked (not merely rejected), the blocked property reported to OFAC, and the customer must NOT be told the real reason for the block in terms that disclose the OFAC concern (tipping off risk). Processing this wire would expose the bank to massive OFAC penalties regardless of whether it appears to be for legitimate services."
  },
  {
    id: 255,
    category: "Scenario Based",
    question: "A compliance analyst identifies a foreign bank correspondent that consistently fails to provide complete beneficiary information in wires but, when asked, sends 'amended' messages within hours. The pattern has occurred dozens of times over a year. What is the MOST significant concern?",
    options: [
      "Administrative inefficiency that can be resolved through a correspondent agreement",
      "The pattern suggests the correspondent may be systematically omitting information to avoid detection, then providing it on request to create a paper trail — a red flag for deceptive practices",
      "The correspondent bank is simply using an older wire format that should be upgraded",
      "This is a low-risk issue since the information is ultimately provided"
    ],
    answer: 1,
    explanation: "Systematic omission of required wire information, followed by rapid 'correction' only when challenged, suggests deliberate evasion rather than technical error. Legitimate technical issues are resolved systemically, not transaction by transaction on request. This pattern is a red flag for a correspondent bank that is knowingly allowing customers to avoid scrutiny during transit and only providing information when caught. The U.S. bank should seriously consider filing a SAR on the correspondent, escalating the relationship review, and potentially terminating the relationship."
  },
  {
    id: 256,
    category: "Scenario Based",
    question: "A bank's OFAC screening system returns a 'potential match' (not a confirmed hit) on a wire beneficiary's name against an SDN list entry. What is the CORRECT procedure?",
    options: [
      "Process the wire — unconfirmed matches should not delay legitimate transactions",
      "Place the wire on hold, conduct a thorough review to determine if the match is a true hit or a false positive, and proceed or block accordingly",
      "File a SAR and process the wire provisionally pending investigation",
      "Forward the wire to the correspondent bank for OFAC clearance"
    ],
    answer: 1,
    explanation: "OFAC screening generates both true hits and false positives (especially with common names). The bank must not process any wire with a potential SDN match without completing a thorough review. The wire must be placed on hold while compliance staff compare all available identifying information (date of birth, nationality, address, account numbers) against the SDN list entry. If it is a true hit, the wire must be blocked and reported to OFAC. If it is a false positive, it must be documented and the wire can proceed. Bypassing this process creates enormous OFAC liability."
  },
  {
    id: 257,
    category: "Scenario Based",
    question: "A global bank's U.S. affiliate processes a wire transfer as a straight-through payment without OFAC screening because it originated from a 'trusted correspondent.' The wire ultimately benefits a sanctioned entity. What is the likely regulatory outcome?",
    options: [
      "No liability — the correspondent bank bears sole responsibility for OFAC screening",
      "The U.S. affiliate faces potential OFAC civil money penalties because all U.S. persons must screen all transactions, regardless of the payment's origin",
      "Reduced liability because the wire was processed in good faith based on the correspondent relationship",
      "No liability if the bank self-discloses to OFAC within 10 business days"
    ],
    answer: 1,
    explanation: "Every U.S. person — including U.S. bank branches and affiliates — has an independent obligation to screen transactions against OFAC sanctions lists. The fact that a wire originates from a 'trusted' correspondent does not transfer or eliminate the U.S. institution's OFAC obligation. OFAC has assessed civil money penalties against U.S. banks that exempted correspondent-originated transactions from screening. While self-disclosure is a mitigating factor, it does not eliminate liability. Many of OFAC's largest enforcement actions have involved exactly this failure."
  },
  {
    id: 258,
    category: "Scenario Based",
    question: "During a correspondent banking review, a U.S. bank discovers its foreign respondent has recently been acquired by a state-owned entity of a sanctioned country. The acquisition occurred six months ago without notification to the U.S. bank. What is the MOST urgent action?",
    options: [
      "Continue the relationship while requesting updated documentation from the correspondent",
      "Immediately suspend the correspondent account pending OFAC review and legal counsel assessment of whether continued banking constitutes a prohibited transaction",
      "File a SAR and continue processing transactions with heightened monitoring",
      "Request a meeting with the correspondent's new management before making any decision"
    ],
    answer: 1,
    explanation: "If a foreign bank is now owned by a sanctioned state entity, continuing to process transactions through the correspondent account could constitute providing banking services to a blocked person — a potential OFAC violation. The U.S. bank must immediately suspend activity, engage legal counsel and OFAC compliance staff, and determine whether the acquisition triggers sanctions exposure. An OFAC specific license may be required to wind down the relationship. Filing a SAR may also be appropriate. The non-disclosure of the acquisition for six months is itself a due diligence failure by the correspondent."
  },
  {
    id: 259,
    category: "Scenario Based",
    question: "A bank receives a certified check from a customer who wants to wire the funds internationally. The customer refuses to explain the source of funds and becomes agitated when asked. A teller processes the wire anyway. What is the MOST significant compliance failure?",
    options: [
      "The teller for not requesting two forms of ID",
      "The bank for failing to conduct adequate due diligence and potentially processing a suspicious transaction without appropriate review",
      "The customer for not voluntarily disclosing the source of funds",
      "FinCEN for not issuing clearer guidance on international wire verification"
    ],
    answer: 1,
    explanation: "Customer refusal to explain the source of funds, combined with agitated behavior when asked, are classic SAR indicators listed in FinCEN guidance. The teller should have flagged the interaction for compliance review rather than processing the wire. The bank's failure to review and potentially file a SAR represents a compliance breakdown. While customers are not legally required to explain sources of funds, a customer's refusal — especially for an international wire — warrants escalation under any risk-based AML program. The compliance failure is institutional."
  },
  {
    id: 260,
    category: "Scenario Based",
    question: "A U.S. bank's correspondent banking team is considering onboarding a new respondent bank in a jurisdiction recently added to the FATF 'call for action' (blacklist). Senior management wants to proceed because the contract is profitable. What should the compliance officer do?",
    options: [
      "Approve the relationship with enhanced monitoring provisions in the correspondent agreement",
      "Decline the relationship — FATF blacklisted jurisdictions present extreme AML/CFT risk, and U.S. regulatory guidance strongly discourages correspondent banking with entities from such jurisdictions",
      "Escalate to the board and proceed only with board-level approval",
      "Accept the relationship for 90 days pending the jurisdiction's FATF remediation efforts"
    ],
    answer: 1,
    explanation: "FATF 'call for action' (blacklist) jurisdictions have been identified as having serious and unremediated deficiencies in their AML/CFT frameworks. U.S. regulators — including FinCEN and the OCC — expect institutions to apply heightened scrutiny and may issue guidance specifically warning against correspondent banking with such jurisdictions. Profitability does not override compliance risk. The compliance officer must not approve the relationship and should present the regulatory risk clearly to management. This is one of those situations where 'the right answer costs business' — and compliance must hold the line."
  },

  // --- GROUP 7: VIRTUAL ASSETS & CRYPTO ---
  {
    id: 261,
    category: "Scenario Based",
    question: "A cryptocurrency exchange customer deposits $200,000 equivalent in Bitcoin, converts it to Monero (a privacy coin), then converts back to Bitcoin and withdraws to an external wallet. What AML concern does this raise?",
    options: [
      "None — converting between cryptocurrencies is a normal investment activity",
      "The customer may be using privacy coins to break the blockchain transaction trail — a technique called 'chain hopping' used to obscure the origin of funds",
      "The customer is committing tax evasion, which is not an AML concern",
      "The concern is speculative trading, not money laundering"
    ],
    answer: 1,
    explanation: "'Chain hopping' — moving funds through one or more privacy-enhancing coins (Monero, Zcash) between blockchain transactions — is used to break the transparent transaction trail on public blockchains like Bitcoin. Monero uses ring signatures and stealth addresses to make transactions unlinkable. The pattern of converting to a privacy coin and back is a recognized AML typology in FinCEN's 2019 Guidance on Virtual Currency and the FATF's 2021 Virtual Assets guidance. This warrants a SAR and enhanced scrutiny of the customer's activity."
  },
  {
    id: 262,
    category: "Scenario Based",
    question: "A virtual asset service provider (VASP) receives a transfer of $15,000 in Ethereum. The originating VASP provides no information about the sender. Under the VASP Travel Rule, what must the receiving VASP do?",
    options: [
      "Process the transfer and file a SAR for the missing information",
      "Request the originator information from the sending VASP; if it cannot be obtained, consider refusing or reversing the transfer and filing a SAR",
      "Process the transfer — Travel Rule requirements apply only to traditional wire transfers, not crypto",
      "Report directly to OFAC because missing originator information indicates sanctions risk"
    ],
    answer: 1,
    explanation: "FinCEN's 2019 Virtual Currency Guidance clarified that the Travel Rule applies to VASPs, requiring them to pass originator and beneficiary information on transfers of $3,000 or more. If originator information is missing, the receiving VASP must attempt to obtain it from the sender. If it cannot be obtained and the transfer cannot be adequately risk-assessed, the VASP should consider returning funds and filing a SAR. FATF's Updated Guidance on Virtual Assets (2021) further reinforces these requirements globally. The Travel Rule is one of the top AML compliance areas for crypto firms."
  },
  {
    id: 263,
    category: "Scenario Based",
    question: "A blockchain analytics tool shows that funds deposited at a crypto exchange were previously processed through a Bitcoin mixer/tumbler. What action should the exchange's compliance team take?",
    options: [
      "No action needed — blockchain analytics is a supplementary tool, not a SAR trigger",
      "Flag the account for immediate review; the use of a mixer to obscure transaction history is a significant AML red flag that may require EDD and a SAR filing",
      "Freeze the account immediately and report to the FBI without conducting internal review",
      "Accept the deposit — tumbler services are legal in most jurisdictions"
    ],
    answer: 1,
    explanation: "Bitcoin mixers/tumblers are specifically designed to break the blockchain transaction trail, complicating AML due diligence and potentially facilitating ML. FinCEN has designated mixer usage as a red flag in its virtual currency guidance, and the Treasury Department has sanctioned specific mixers. Detection of prior mixing is a major AML indicator that warrants enhanced review of the account, customer interaction, and potentially a SAR. Immediate account freezing without internal review may be premature, but the concern cannot be dismissed. A risk-based, documented response is required."
  },
  {
    id: 264,
    category: "Scenario Based",
    question: "A new customer at a crypto exchange provides only a name and email address as identification. The customer immediately purchases $50,000 in Bitcoin for cash. What is the MOST significant compliance violation?",
    options: [
      "The transaction is fine — cryptocurrency exchanges are not regulated financial institutions",
      "The exchange violated its Customer Identification Program (CIP) obligations under the BSA — VASPs are money services businesses subject to CIP, AML, and CTR requirements",
      "The exchange violated OFAC regulations by not screening the customer",
      "The transaction requires a 48-hour waiting period before Bitcoin delivery"
    ],
    answer: 1,
    explanation: "FinCEN's 2019 Guidance confirmed that cryptocurrency exchanges operating as money transmitters are money services businesses (MSBs) subject to full BSA requirements, including CIP (31 CFR 1022.210), suspicious activity reporting, and CTRs for cash transactions over $10,000. Accepting only a name and email for a $50,000 cash transaction is a clear CIP violation — the exchange must verify identity using government-issued ID, and the cash amount requires a CTR. This is one of the most common BSA examination findings at crypto exchanges."
  },
  {
    id: 265,
    category: "Scenario Based",
    question: "An AML analyst at a crypto exchange identifies a customer who receives large crypto deposits from dozens of unrelated wallets and immediately sends the consolidated amount to a single wallet. The customer claims to be a 'crypto investment club' collecting member contributions. What does this pattern most resemble?",
    options: [
      "Legitimate pooled investment activity — investment clubs are common",
      "A crypto funnel account aggregating potentially illicit funds from multiple sources before transmission — requires verification and likely a SAR",
      "Standard dollar-cost averaging behavior across multiple wallets",
      "Arbitrage activity between crypto exchanges, which is low-risk"
    ],
    answer: 1,
    explanation: "The pattern — many small inflows from diverse unrelated sources consolidated and immediately forwarded to one wallet — mirrors a classic funnel account typology now appearing in crypto. While investment clubs exist legitimately, the analyst must verify: Are there actually club members? Can the customer provide member agreements, contribution records, and identity information for the contributors? The failure to have this documentation readily available, combined with the volume and pattern, warrants EDD and a SAR. FinCEN has issued guidance on crypto-specific funnel account typologies."
  },
  {
    id: 266,
    category: "Scenario Based",
    question: "A bank customer receives a wire from an overseas source, then purchases significant amounts of cryptocurrency from multiple exchanges, which is then transferred to wallets with no discernible destination. Over 90 days, this totals $800,000. What is this activity MOST consistent with?",
    options: [
      "Legitimate crypto investment — many investors diversify across multiple exchanges",
      "A money laundering scheme using cryptocurrency to layer funds — converting bank-transferred funds into crypto and then obscuring the trail through multiple wallets is a known ML typology",
      "Normal exchange arbitrage benefiting from price differences across platforms",
      "A tax-efficient investment strategy for high-net-worth individuals"
    ],
    answer: 1,
    explanation: "This pattern — wire in, rapid crypto purchase, dispersion to unknown wallets — is a layering technique using cryptocurrency to break the audit trail. The regularity, volume, and lack of discernible end destination across three months signals a structured laundering operation rather than legitimate investment. This is a recognized typology in FinCEN SAR filings and FATF guidance on virtual asset ML. The bank should file a SAR, and depending on the total amount and pattern, law enforcement liaison may also be appropriate."
  },
  {
    id: 267,
    category: "Scenario Based",
    question: "A compliance officer at a VASP receives a subpoena from a federal prosecutor requesting all transaction records for a specific customer. The officer asks whether they must comply. What is the correct answer?",
    options: [
      "No — VASPs are not required to maintain records and cannot respond to subpoenas",
      "Yes — VASPs that are MSBs under the BSA must maintain records and comply with lawful legal process, including federal subpoenas",
      "Only if the VASP is licensed in the state where the subpoena was issued",
      "Only if the customer consents to the disclosure"
    ],
    answer: 1,
    explanation: "VASPs operating as money transmitters under the BSA are required to maintain transaction records and comply with lawful legal process including federal subpoenas, court orders, and law enforcement requests under appropriate legal authority. The BSA requires record retention for five years. Customer consent is not required for law enforcement disclosure under a valid legal order. This is one of the key distinctions regulators make between legitimate, compliant VASPs and those that claim to operate outside the regulatory framework."
  },
  {
    id: 268,
    category: "Scenario Based",
    question: "A blockchain tracing firm's report shows that $300,000 worth of crypto flowing into a business customer's wallet was previously associated with a ransomware attack. The customer is unaware of this history. What should the VASP do?",
    options: [
      "Nothing — the customer is innocent and the VASP cannot control the history of prior transactions",
      "Flag the incoming funds for review; if the customer cannot explain the source and the blockchain connection is strong, file a SAR and consider restricting account activity",
      "Immediately freeze all customer funds and report to the FBI",
      "Return the funds to the ransomware wallet to avoid receiving tainted funds"
    ],
    answer: 1,
    explanation: "Blockchain tracing revealing ransomware proceeds is a significant AML concern even if the receiving customer is unaware of the funds' history. The VASP must conduct a risk-based review: assess the strength of the blockchain connection, request the customer's explanation of the fund source, and evaluate whether the customer could reasonably be connected to ransomware activity. A SAR is likely required given the ransomware nexus. Immediate freezing without review may be premature; returning funds to a ransomware wallet could itself be a problem. A documented, proportionate response is required."
  },
  {
    id: 269,
    category: "Scenario Based",
    question: "A NFT marketplace observes a pattern where the same individual repeatedly buys and sells NFTs to themselves using different wallets, generating artificial transaction volume and inflating apparent NFT values. What financial crime does this MOST resemble?",
    options: [
      "Legitimate NFT speculation — prices are subjective and market-driven",
      "Wash trading used to artificially inflate NFT values, potentially constituting market manipulation and a money laundering technique to create the appearance of legitimate gains",
      "Tax-loss harvesting through digital asset transactions",
      "Dollar-cost averaging in illiquid NFT markets"
    ],
    answer: 1,
    explanation: "NFT wash trading — buying and selling assets to oneself to generate artificial volume, price, and transaction history — is a recognized ML typology. The 'laundered' funds become attributable to 'NFT sales gains,' providing a seemingly legitimate explanation for otherwise illicit income. FinCEN, the SEC, and FATF have all highlighted NFT misuse for ML. Marketplaces with AML obligations should detect self-trading patterns through network analysis and file SARs where this activity is identified. This is an evolving area of AML risk."
  },
  {
    id: 270,
    category: "Scenario Based",
    question: "A jurisdiction requires all VASPs to register with the financial intelligence unit before operating. A crypto exchange in that jurisdiction is processing transactions without registration. What is the PRIMARY AML risk this creates?",
    options: [
      "The exchange may charge higher fees without regulatory oversight",
      "The unregistered exchange operates outside the AML/CFT framework, has no SAR filing obligations, and cannot be monitored by authorities — creating a gap that criminals can exploit",
      "The exchange is at risk of losing customer assets due to lack of deposit insurance",
      "Only a business licensing risk — unregistered VASPs do not create AML risks"
    ],
    answer: 1,
    explanation: "Unregistered VASPs are a major AML/CFT risk because they operate outside the regulatory perimeter. They have no CIP requirements, no SAR obligations, no transaction monitoring, and no supervision — making them ideal channels for money laundering and terrorist financing. FATF Recommendation 15 requires countries to license or register VASPs and ensure they are supervised for AML/CFT compliance. FinCEN has pursued enforcement actions against unregistered MSBs/VASPs. Other financial institutions should treat business from unregistered VASPs with extreme caution."
  },

  // --- GROUP 8: TERRORIST FINANCING & SANCTIONS ---
  {
    id: 271,
    category: "Scenario Based",
    question: "A transaction monitoring alert flags a series of small wire transfers ($200-$500) to a new payee in Syria. The sender is a student with no prior international transfers. What distinguishes this as a potential terrorist financing concern rather than simple ML?",
    options: [
      "The small amounts — money laundering always involves large transactions",
      "Terrorist financing often involves small amounts for operational expenses; the destination country with active terrorist groups and the sender's unusual profile warrant scrutiny",
      "The student's occupation — students are automatically exempt from AML scrutiny",
      "This is indistinguishable from ML and should be treated identically"
    ],
    answer: 1,
    explanation: "A key distinction between ML and TF is transaction size: TF often involves very small amounts used for operational expenses (travel, communication, materials). ML typically involves larger amounts being 'cleaned.' A student with no international transfer history sending small amounts to Syria — an area with active terrorist organizations — is a TF red flag. FATF's guidance on TF distinguishes the typologies. The institution should file a SAR and, given the terrorism nexus, may consider a voluntary referral to law enforcement."
  },
  {
    id: 272,
    category: "Scenario Based",
    question: "During a SAR review, an analyst discovers that a customer made online donations to an overseas charity in a country where a UN-designated terrorist organization is known to operate. The charity is not itself designated. Must a SAR be filed?",
    options: [
      "No — charitable donations are protected and the organization is not designated",
      "Yes — if there is reason to suspect the charity may be a front for or conduit to a designated terrorist organization, a SAR should be filed even if the charity itself is not listed",
      "No — only donations to specifically designated organizations trigger reporting",
      "Yes — all international donations to countries with terrorist organizations require SARs"
    ],
    answer: 1,
    explanation: "A SAR is required when the institution suspects involvement in illicit activity, not only when a direct connection to a designated entity is confirmed. Non-profit misuse for TF is a well-documented typology — charities in conflict zones may be genuine, or may be fronts. The institution must assess: the charity's transparency, country of operation, known links to terrorist groups, and whether the donation pattern is consistent with genuine charitable intent. If unresolved suspicion remains, a SAR is required. Law enforcement can then investigate the actual nexus. Not all charities in high-risk areas are fronts — but suspicion must be investigated, not assumed away."
  },
  {
    id: 273,
    category: "Scenario Based",
    question: "An OFAC analyst discovers that a customer's funds transfer was processed yesterday and the beneficiary was added to the OFAC SDN list this morning. Does the bank have any obligation?",
    options: [
      "No — the transaction was lawful when processed; retroactive obligations do not exist",
      "Yes — the bank must immediately investigate whether the SDN designation relates to the beneficiary of yesterday's transfer and report to OFAC if necessary; 'knowledge after the fact' can still create reporting obligations",
      "Yes — the bank must reverse the wire transfer even though it has already settled",
      "No — OFAC obligations apply only to prospective transactions"
    ],
    answer: 1,
    explanation: "When a beneficiary is added to the SDN list after a transaction has been processed, the institution does not face automatic liability for that transaction if it was processed in good faith before the listing. However, the institution must conduct a review, document the timeline, and assess whether any information it previously had should have identified the risk. Additionally, any future transactions with that party must be blocked. If the institution has ongoing obligations to or relationships with the newly designated person, those must be addressed. Reporting obligations may arise depending on the specifics."
  },
  {
    id: 274,
    category: "Scenario Based",
    question: "A bank customer's account receives funds from an overseas source. Blockchain analysis (for an associated crypto wallet) shows the funds originated from wallets linked to a designated terrorist organization. The customer claims ignorance. What is the CORRECT sequence of actions?",
    options: [
      "Accept the customer's claim of ignorance and close the case",
      "Block any additional associated transactions, conduct EDD, file a SAR, and consider a voluntary referral to law enforcement — the customer's claimed ignorance does not eliminate the institution's obligations",
      "Return the funds to the sender immediately",
      "Wait for law enforcement to contact the bank before taking action"
    ],
    answer: 1,
    explanation: "Discovery of funds linked to a designated terrorist organization is among the most serious AML scenarios. Regardless of the customer's claimed ignorance, the institution must: (1) block any further transfers from the same source; (2) conduct immediate EDD on the customer; (3) file a SAR with clear notation of the terrorism nexus (FinCEN routes TF-related SARs to law enforcement immediately); and (4) consider voluntary law enforcement notification. Returning funds to a terrorist-linked source could itself violate OFAC. Waiting for law enforcement contact is inappropriate when the institution holds material information."
  },
  {
    id: 275,
    category: "Scenario Based",
    question: "A compliance officer learns that an employee conducted an OFAC name search on a customer before processing a transaction but used only the customer's first name as the search parameter. The transaction was processed and the customer was later found to be on the SDN list. What MOST likely occurred?",
    options: [
      "A reasonable good-faith effort was made and the institution has no liability",
      "A deficient OFAC screening procedure — using only a first name creates an unacceptably high false-negative rate; the institution may face OFAC penalties for inadequate compliance controls",
      "The employee should be terminated but the institution has no systemic liability",
      "The institution is fully protected by the good-faith standard"
    ],
    answer: 1,
    explanation: "OFAC expects institutions to conduct reasonable, comprehensive sanctions screening. Searching only by first name is patently deficient and would be characterized as an inadequate compliance program rather than a good-faith effort. OFAC's enforcement guidelines penalize institutions based on the adequacy of their compliance programs — not just whether they knew about the designation. A screening failure of this nature — using an incomplete identifier — is exactly the type of 'institutional failure' that OFAC treats as an aggravating factor in enforcement actions."
  },
  {
    id: 276,
    category: "Scenario Based",
    question: "A financial institution's customer is a U.S.-based food company that wants to export humanitarian food aid to a sanctioned country under an OFAC general license. What steps must the company take?",
    options: [
      "No steps required — food exports are always exempt from sanctions under international humanitarian law",
      "Verify the specific terms of the applicable general license (e.g., the relevant country's sanctions program), ensure the shipment qualifies, maintain records, and confirm no SDN-listed entities are involved in the transaction",
      "Obtain a specific license from OFAC before proceeding with any food export to a sanctioned country",
      "File a SAR before proceeding because any transaction with a sanctioned country is suspicious"
    ],
    answer: 1,
    explanation: "OFAC general licenses authorize certain categories of transactions without requiring individual specific licenses. Food exports are often permitted under general licenses in humanitarian contexts. However, the company must: (1) identify the exact applicable general license; (2) confirm the shipment meets all conditions; (3) verify no SDN-listed entities are involved (e.g., the receiving party, shipper, or financing bank); and (4) maintain detailed records. General licenses are not blanket exemptions — their conditions must be carefully read and documented. A specific license is not automatically required, but general license conditions must be met."
  },
  {
    id: 277,
    category: "Scenario Based",
    question: "A domestic wire transfer of $150,000 is sent by a U.S. company to a U.S. bank. The sending company's registered address is a UPS Store mailbox. OFAC screening returns no hits. Should the bank proceed?",
    options: [
      "Yes — OFAC clearance means the transaction can proceed",
      "Yes — but the mailbox address should be flagged for AML review; a UPS Store address for a $150,000 sender is a red flag for a shell entity and may warrant a SAR",
      "No — all companies with mailbox addresses must be declined under BSA rules",
      "Yes — OFAC clearance is the only required check for domestic wire transfers"
    ],
    answer: 1,
    explanation: "OFAC clearance answers only the sanctions question — it does not resolve AML concerns. A company sending $150,000 wires with a UPS Store address as its registered address is a red flag for a shell company or fraudulent entity. Legitimate businesses of this size typically have verifiable physical addresses. The AML team should review: What is this company's business? Who are its beneficial owners? Is this transaction consistent with its stated activity? A SAR may be warranted even if OFAC screening returns no hits. AML and OFAC compliance are complementary but separate obligations."
  },
  {
    id: 278,
    category: "Scenario Based",
    question: "A bank's corporate customer receives a ransom demand and notifies the bank that it intends to pay the ransom to obtain a decryption key for its encrypted systems. The ransom demand is denominated in Bitcoin. What should the bank advise?",
    options: [
      "Process the Bitcoin purchase immediately — ransomware payment is a victim's right",
      "Advise the customer to check OFAC's advisory on ransomware payments; if the threat actor is a sanctioned entity, payment may violate OFAC regulations and require a specific license",
      "Refuse to assist with any crypto purchase — all ransomware payments are illegal",
      "Report the ransomware attack to FinCEN and refuse to assist with payment"
    ],
    answer: 1,
    explanation: "OFAC issued an advisory in 2020 warning that ransomware payments to SDN-listed entities or jurisdictions subject to U.S. sanctions may violate OFAC regulations. This includes payments to groups like Evil Corp (sanctioned) and ransomware actors in sanctioned jurisdictions. The bank should advise the customer to screen the threat actor against OFAC lists before paying, and to consult with legal counsel and potentially OFAC directly. If the actor is sanctioned, payment is prohibited without a specific license. The bank should also advise reporting the attack to the FBI and CISA."
  },
  {
    id: 279,
    category: "Scenario Based",
    question: "A correspondent banking customer requests that the U.S. bank process a payment described as 'consulting fees' to a company in Iran. The foreign correspondent assures the U.S. bank that the transaction is legal under the foreign country's laws. Must the U.S. bank comply?",
    options: [
      "Yes — if the transaction is legal under the foreign correspondent's domestic law, the U.S. bank must comply",
      "No — U.S. sanctions law applies to all transactions processed by U.S. institutions regardless of foreign law; Iran is subject to comprehensive U.S. sanctions",
      "Yes — consulting fees are exempt from Iran sanctions",
      "No — but the bank can process the payment after receiving foreign correspondent indemnification"
    ],
    answer: 1,
    explanation: "U.S. sanctions law applies to all U.S. persons and U.S.-dollar transactions, regardless of whether the transaction is legal in the foreign jurisdiction. Iran is subject to comprehensive U.S. sanctions — virtually all transactions are prohibited without an OFAC specific license. A foreign correspondent's assurance that its domestic law permits the transaction is legally irrelevant to the U.S. bank's OFAC obligations. The U.S. bank must refuse. Indemnification from the correspondent does not eliminate the U.S. bank's liability for an OFAC violation."
  },
  {
    id: 280,
    category: "Scenario Based",
    question: "An AML investigator learns that a customer's account was used to receive payments from individuals in a foreign country who were recruited online with false job promises and then forced to work in a scam call center. What financial crime is MOST present?",
    options: [
      "Tax evasion — the customer is receiving unreported income",
      "Human trafficking and forced labor — the account is receiving proceeds of a serious human rights crime, requiring a SAR with notation of the trafficking nexus",
      "Wire fraud — the victims were deceived by false job offers",
      "Money laundering through a professional services network"
    ],
    answer: 1,
    explanation: "The described scenario is human trafficking / cyber-enabled forced labor — a growing crime where victims are trafficked to foreign scam operations under false pretenses. The proceeds flowing to the customer's account are proceeds of a serious crime. Institutions must file a SAR with a specific notation indicating human trafficking (a FinCEN financial institution advisory for human trafficking provides specific guidance). Law enforcement liaison may also be appropriate. The account should be reviewed for other indicators and the relationship with the receiving customer should be scrutinized. This is both an AML and a modern slavery/human rights issue."
  },

  // --- GROUP 9: INVESTIGATIONS & COMPLIANCE JUDGMENT ---
  {
    id: 281,
    category: "Scenario Based",
    question: "FinCEN issues a 314(a) request asking the bank to search its records for an individual named in a criminal investigation. The bank's search confirms the individual has three accounts. What must the bank do?",
    options: [
      "Notify the individual that their accounts are under investigation",
      "Respond to FinCEN within 14 days confirming the account existence, while maintaining strict confidentiality — do not disclose the search to the customer",
      "File a SAR immediately upon finding the accounts",
      "Contact law enforcement directly rather than responding to FinCEN"
    ],
    answer: 1,
    explanation: "Under Section 314(a) of the USA PATRIOT Act, financial institutions receiving a FinCEN 314(a) request must search their records and respond to FinCEN within 14 days if they find a match. Critically, the institution must NOT disclose the search or the match to the named individual — this would constitute tipping off and obstruct the investigation. A positive match does not automatically require a SAR, though the institution should use the match as a basis to review account activity. The response goes to FinCEN, not directly to law enforcement."
  },
  {
    id: 282,
    category: "Scenario Based",
    question: "A law enforcement agent informally contacts a bank investigator and asks for transaction records on a specific customer 'as a favor' without presenting any legal process. What should the investigator do?",
    options: [
      "Provide the records since law enforcement cooperation is a BSA obligation",
      "Decline — producing records without legal process (subpoena, court order, or NSL) violates customer privacy laws; advise the officer to submit a proper legal request",
      "Provide summary information but not actual records",
      "Contact FinCEN for permission before responding"
    ],
    answer: 1,
    explanation: "Customer records are protected under the Right to Financial Privacy Act (RFPA) and cannot be produced to law enforcement without proper legal process — subpoena, court order, national security letter, or customer consent. Informal 'favor' requests from officers, no matter how trusted, do not meet legal requirements. Producing records without legal process exposes the bank to liability under RFPA. The correct response is to decline and advise the officer to submit formal legal process through appropriate channels. This protects both the customer's rights and the institution."
  },
  {
    id: 283,
    category: "Scenario Based",
    question: "A bank's external auditor discovers that the AML compliance team has been closing transaction monitoring alerts within one hour of opening, without adequate investigation. What is the MOST serious implication of this finding?",
    options: [
      "The compliance team is highly efficient and should be commended",
      "The institution may be systematically failing to detect and report suspicious activity — a fundamental BSA compliance failure that could result in regulatory sanctions and consent orders",
      "External auditors lack authority to evaluate AML process quality",
      "Alert closure times are a performance metric, not a compliance issue"
    ],
    answer: 1,
    explanation: "Systematic closure of alerts within one hour — without adequate investigation documentation — is a major BSA compliance red flag. Regulators (OCC, FinCEN, Federal Reserve) consistently cite inadequate transaction monitoring investigations as a top AML exam finding. An alert process where dispositions are made too quickly likely means suspicious activity is being missed and SARs are not being filed. This type of finding has led to significant enforcement actions, consent orders, and civil money penalties against major institutions. The finding must be escalated to senior management and the board immediately."
  },
  {
    id: 284,
    category: "Scenario Based",
    question: "During an AML investigation, an analyst discovers that a customer's account has funded political campaigns in multiple countries, received payments from government contractors, and wired funds to a private account of a foreign official. What financial crime pattern does this MOST resemble?",
    options: [
      "Legitimate political fundraising activity that is protected speech",
      "Bribery and corruption — a classic proceeds of corruption money laundering pattern involving public officials, government contracts, and offshore transfers",
      "Legitimate lobbying activities that are exempt from AML scrutiny",
      "Legal campaign finance activity that falls within normal CDD parameters"
    ],
    answer: 1,
    explanation: "The described pattern — government contractor payments flowing through a customer account, funding political campaigns, and wiring to foreign official private accounts — is textbook corruption and bribery. This is a proceeds-of-corruption money laundering scheme. The account is likely being used to distribute and launder bribes: contractors pay 'consulting fees,' some go to campaigns for influence, some go directly to the official. This warrants a SAR with appropriate corruption/bribery notation, enhanced investigation, and potentially voluntary law enforcement referral. The FCPA may also be implicated if U.S. persons or issuers are involved."
  },
  {
    id: 285,
    category: "Scenario Based",
    question: "A bank receives a grand jury subpoena for records on a customer. The bank's counsel advises it should produce records. The customer's relationship manager wants to warn the customer so they can 'prepare.' What is the CORRECT action?",
    options: [
      "Allow the relationship manager to warn the customer as a courtesy",
      "Prohibit any disclosure to the customer — grand jury subpoenas carry a non-disclosure obligation; warning the customer would constitute obstruction of justice",
      "Allow the warning only if the relationship manager has the customer's power of attorney",
      "Contact FinCEN before deciding whether to produce records or warn the customer"
    ],
    answer: 1,
    explanation: "Grand jury subpoenas carry strict confidentiality requirements — disclosing their existence to the target or subject is a federal crime (obstruction of justice, 18 U.S.C. § 1512). A relationship manager 'warning' the customer would expose both the manager and the institution to criminal liability. The institution must produce responsive records in compliance with the subpoena and strictly limit knowledge of the subpoena to those who need to know. This is one of the most important principles of law enforcement cooperation in financial crime cases."
  },
  {
    id: 286,
    category: "Scenario Based",
    question: "A bank's risk assessment has not been updated in four years. During this time, the bank expanded into cryptocurrency services, onboarded several cannabis-related businesses, and opened its first international branch. What is the MOST significant AML program gap?",
    options: [
      "The risk assessment is outdated and no longer reflects the institution's current risk profile — new products, customers, and geographies require a full enterprise-wide risk assessment update",
      "The bank needs to hire more compliance staff before updating the risk assessment",
      "The risk assessment only needs updating when required by an examiner",
      "Only the cryptocurrency service requires a risk assessment update; other expansions are covered by existing policies"
    ],
    answer: 0,
    explanation: "An enterprise-wide AML/CFT risk assessment must be current and reflect the institution's actual risk profile. Three major risk dimension changes — cryptocurrency services (new product), cannabis-related businesses (new high-risk customer type), and international branching (new geography) — each independently require risk assessment updates. After four years without updates, the risk assessment is a compliance gap that examiners will cite. The risk assessment drives the institution's entire AML program design. An outdated assessment means controls may be mismatched to actual risks — both over-controlling low-risk activities and under-controlling high-risk ones."
  },
  {
    id: 287,
    category: "Scenario Based",
    question: "A compliance officer receives a request from the bank's CEO to delay filing a SAR on a high-value client for '30 days to give us time to manage the relationship.' What should the compliance officer do?",
    options: [
      "Agree to delay the SAR — the CEO has authority over the compliance function",
      "Decline — SAR filing deadlines are legal requirements; delaying a required SAR at the CEO's request constitutes a BSA violation and the compliance officer should document the request and escalate to the board",
      "File the SAR but note the CEO's objection in the filing",
      "Agree to 15 days as a compromise"
    ],
    answer: 1,
    explanation: "SAR filing timelines are mandatory legal requirements under the BSA — 30 days from detection, or 60 days if no suspect is initially identified. No internal authority, including the CEO, can override a legal reporting obligation. A compliance officer who delays a required SAR at executive request faces personal liability alongside the institution. The compliance officer must file the SAR on time, document the CEO's interference request in writing, and escalate to the board or audit committee. This is a textbook 'tone at the top' and compliance independence scenario. Many BSA consent orders have resulted from exactly this type of executive interference."
  },
  {
    id: 288,
    category: "Scenario Based",
    question: "After reviewing 12 months of transaction data, an AML analyst believes a customer's account shows a pattern of layering, but the pattern is complex and the analyst is unsure whether to file a SAR. What is the BSA's standard for SAR filing?",
    options: [
      "'Beyond a reasonable doubt' — the same standard as a criminal conviction",
      "'Knows, suspects, or has reason to suspect' — a lower threshold that does not require certainty; if a reasonable person in the analyst's position would suspect the activity, a SAR should be filed",
      "'Clear and convincing evidence' — the civil litigation standard",
      "'Probable cause' — the same standard required for law enforcement search warrants"
    ],
    answer: 1,
    explanation: "The BSA SAR standard — 'knows, suspects, or has reason to suspect' — is intentionally lower than legal standards of proof. Financial institutions are not investigators; they are reporters. When a trained analyst reviews 12 months of data and believes it shows layering patterns, they almost certainly meet the 'reason to suspect' threshold. The purpose of SARs is to provide law enforcement with information to investigate — not to prove guilt. Filing a SAR is not an accusation; it is a report of suspicious activity. When in doubt, file. Failure to file when there is reason to suspect is a greater compliance risk than filing on ambiguous activity."
  },
  {
    id: 289,
    category: "Scenario Based",
    question: "A bank terminates a customer relationship due to AML concerns. The customer, now at a new bank, uses the former bank as a reference. The new bank calls to inquire. What should the former bank say about the reason for account closure?",
    options: [
      "Fully disclose all SAR details and AML concerns to assist the new bank's due diligence",
      "Decline to disclose SAR-related reasons; state that you cannot discuss the nature of the closure; the new bank may share information with you under 314(b) if both are registered",
      "Confirm the account was closed 'for cause' without specifics",
      "Ignore the inquiry — former customers have no rights to disclosure of closure reasons"
    ],
    answer: 1,
    explanation: "SAR confidentiality prohibits disclosing that a SAR was filed or the reasons for closure if they relate to suspicious activity. However, under 314(b), if both banks are registered with FinCEN, they may voluntarily share information about ML/TF concerns. The former bank should not confirm SAR-related reasons directly. It should decline to comment on the nature of the closure while informing the new bank of the 314(b) sharing option. The new bank can then register (if not already) and conduct an authorized information exchange. This is the proper channel for AML information sharing between institutions."
  },
  {
    id: 290,
    category: "Scenario Based",
    question: "A bank's BSA Officer resigns abruptly, and the role is vacant for 45 days. During this time, the compliance department continues normal operations without a designated officer. What is the PRIMARY regulatory concern?",
    options: [
      "No concern — the compliance department can operate without a BSA Officer temporarily",
      "A fundamental BSA compliance gap — having a designated BSA/AML compliance officer is a mandatory program requirement; a 45-day vacancy may be cited as a BSA program deficiency during examination",
      "Only a concern if a SAR deadline is missed during the vacancy",
      "The concern is limited to internal governance and does not affect regulatory standing"
    ],
    answer: 1,
    explanation: "One of the four mandatory pillars of a BSA/AML compliance program (under 31 CFR 1020.210) is the designation of a BSA/AML Compliance Officer responsible for day-to-day compliance operations. A 45-day vacancy without interim designation is a program deficiency. Examiners will cite this as evidence of inadequate AML program infrastructure. The institution should immediately designate an interim BSA Officer, begin recruiting a replacement, and document the transition plan. Extended vacancies in the BSA Officer role have been cited in formal enforcement actions as evidence of inadequate compliance programs."
  },
  {
    id: 291,
    category: "Scenario Based",
    question: "An AML examination reveals that a bank's transaction monitoring system has not been tuned in three years and generates 95% false positives. Most alerts are closed in under 30 minutes. What should regulators MOST likely conclude?",
    options: [
      "The bank has an efficient compliance program that quickly disposes of low-risk alerts",
      "The bank's transaction monitoring system is poorly calibrated, leading to a high false positive rate that overwhelms analysts — a condition that likely causes genuine suspicious activity to be missed",
      "A 95% false positive rate is industry standard and not a compliance concern",
      "The 30-minute closure time demonstrates analyst competency"
    ],
    answer: 1,
    explanation: "A 95% false positive rate without tuning over three years is a strong indicator of a miscalibrated monitoring system. When analysts are buried in irrelevant alerts, they inevitably miss genuine suspicious activity — a condition regulators call 'alert fatigue.' The 30-minute closure time reinforces that genuine investigation is not occurring. FinCEN guidance, OCC examination procedures, and FFIEC AML examination manuals all emphasize the need for periodic system tuning and validation. This finding would likely result in a Matters Requiring Attention (MRA) or Matters Requiring Immediate Attention (MRIA) citation."
  },
  {
    id: 292,
    category: "Scenario Based",
    question: "A bank's new AML policy requires front-line staff to collect source of funds documentation for all cash deposits over $5,000. Three months after implementation, branch managers report that customers are complaining and leaving for competitors. What is the MOST appropriate response from the compliance team?",
    options: [
      "Withdraw the policy — customer retention takes priority over AML compliance",
      "Review the policy to ensure it is calibrated to actual risk — applying blanket requirements to all $5,000 deposits regardless of risk may be disproportionate; refine the policy using a risk-based approach",
      "Increase the threshold to $25,000 to reduce customer friction while maintaining some oversight",
      "Mandate more compliance training for front-line staff to improve customer communication"
    ],
    answer: 1,
    explanation: "A blanket source-of-funds requirement for all cash deposits over $5,000 — without risk-based tailoring — may over-burden low-risk customers (e.g., established retail clients with consistent patterns) while not proportionally improving AML detection. The FATF risk-based approach principle supports calibrating CDD requirements to actual risk levels, not applying maximum controls uniformly. The compliance team should review: Which customer segments are being affected? What risk rationale supports $5,000 as the threshold? Can risk criteria (e.g., new customers, high-risk geographies, cash-intensive businesses) better target the policy? Compliance and business impact must be balanced through proper risk-based design."
  },
  {
    id: 293,
    category: "Scenario Based",
    question: "A bank employee anonymously reports to the compliance hotline that a senior manager has been instructing staff to approve high-risk customer applications without proper EDD documentation. What is the compliance department's FIRST obligation?",
    options: [
      "Dismiss the report because it is anonymous and cannot be verified",
      "Investigate the report independently and confidentially, document findings, and escalate to senior compliance leadership or the board if the allegation is substantiated",
      "Notify the accused manager so they can respond before any investigation begins",
      "Report directly to FinCEN because the manager's actions may constitute a BSA violation"
    ],
    answer: 1,
    explanation: "Compliance departments must investigate all credible whistleblower reports, including anonymous ones. Anonymity alone is not grounds for dismissal — anonymous tips are often made precisely because reporters fear retaliation. The investigation must be conducted independently, confidentially, and documented thoroughly. Notifying the accused manager before investigation would compromise the inquiry and potentially expose the bank to retaliation liability. If the allegation is substantiated — approving applications without EDD represents a serious BSA violation — the board or audit committee must be notified. Whistleblower protections under AML Act of 2020 reinforce the importance of protecting reporters."
  },
  {
    id: 294,
    category: "Scenario Based",
    question: "A bank discovers it failed to file SARs on 45 transactions over 18 months due to a system configuration error. The total value of unreported suspicious transactions is $12 million. What is the MOST advisable course of action?",
    options: [
      "Do not file the late SARs — filing now would draw regulatory attention to the error",
      "File the late SARs immediately, assess and remediate the system error, conduct a look-back review, and consider self-reporting the BSA violation to regulators to demonstrate a commitment to compliance",
      "File a single consolidated SAR covering all 45 transactions",
      "Notify affected customers that SARs should have been filed on their accounts"
    ],
    answer: 1,
    explanation: "When a systemic SAR filing failure is discovered, immediate remediation is essential. Late SARs should be filed promptly (FinCEN accepts late SARs with explanation). The system error must be fixed and validated. A look-back review should assess whether additional transactions were missed. Voluntary self-disclosure to regulators is strongly advisable — it is a significant mitigating factor in enforcement actions. OFAC's and FinCEN's enforcement frameworks both recognize voluntary self-disclosure as a reason to reduce penalties. Attempting to hide the error increases liability dramatically. Notifying customers would violate SAR confidentiality."
  },
  {
    id: 295,
    category: "Scenario Based",
    question: "A financial institution is merging with another bank. During due diligence, the acquiring bank discovers the target has open AML examination findings and unresolved SAR gaps. What is the acquiring bank's PRIMARY risk if it completes the acquisition?",
    options: [
      "No risk — BSA violations are extinguished upon completion of a merger",
      "The acquiring bank assumes liability for the target's BSA compliance failures; unresolved violations carry forward, and the acquirer may face regulatory action for pre-merger conduct",
      "Risk is limited to reputational damage, not regulatory liability",
      "The acquiring bank has 90 days after closing to remediate the target's AML program without regulatory consequence"
    ],
    answer: 1,
    explanation: "In a bank acquisition, the acquiring institution assumes liability for the target's compliance failures, including BSA violations. This is why AML due diligence is essential in M&A. Regulators do not extinguish pre-merger violations upon closing — they expect the acquirer to remediate them and may impose conditions on merger approval. If the acquirer knew of the violations and closed anyway, it may face enforcement action for the pre-merger conduct. The acquiring bank should negotiate representations and warranties, escrow provisions, and a remediation plan as conditions of the merger before closing."
  },
  {
    id: 296,
    category: "Scenario Based",
    question: "A de-risking decision is made to terminate all accounts from a specific country because the compliance team has determined that individual customer due diligence on residents of that country is too resource-intensive. Is this approach defensible?",
    options: [
      "Yes — institutions have the right to choose which customers to serve",
      "No — blanket de-risking by nationality without individual risk assessment may constitute illegal discrimination and conflicts with the risk-based approach; regulators have issued guidance against wholesale de-risking",
      "Yes — if FinCEN has issued a Geographic Targeting Order for that country",
      "No — all country de-risking decisions require OFAC approval"
    ],
    answer: 1,
    explanation: "Blanket de-risking — terminating all customers of a specific nationality without individual assessment — is criticized by U.S. regulators, FinCEN, and international bodies (FATF, World Bank) because it: (1) may constitute illegal discrimination under the Equal Credit Opportunity Act or Fair Housing Act; (2) conflicts with the risk-based approach (some customers from high-risk countries may be low-risk); and (3) drives financial exclusion that can push populations to unregulated channels. FinCEN has specifically issued guidance warning against wholesale de-risking. Institutions should instead apply risk-based CDD proportionate to individual customer risk."
  },
  {
    id: 297,
    category: "Scenario Based",
    question: "An examiner finds that a bank's AML training program was last updated in 2019 and does not cover virtual assets, beneficial ownership requirements, or the AML Act of 2020. What is the examiner MOST likely to conclude?",
    options: [
      "The training program is acceptable as long as it covers the four BSA pillars",
      "The training program is materially deficient — it fails to address significant regulatory developments and new risk areas that employees must understand to fulfill their BSA obligations",
      "Training only needs to be updated when the FFIEC issues new examination manual guidance",
      "The training gap is a minor finding requiring only a management response"
    ],
    answer: 1,
    explanation: "Ongoing, current employee training is one of the four mandatory pillars of a BSA/AML compliance program. Training that is five years out of date and omits significant developments — FinCEN's CDD Rule beneficial ownership requirements (2018), virtual asset guidance (2019), and the AML Act of 2020 (which overhauled significant BSA provisions) — is materially deficient. Examiners expect training to reflect current regulations, typologies, and institution-specific risks. A stale training program is a common exam finding that leads to Matters Requiring Attention (MRA) citations and potential monetary penalties if linked to missed SARs."
  },
  {
    id: 298,
    category: "Scenario Based",
    question: "A financial institution's board of directors has not received an AML program update in two years. The BSA Officer presents a monthly report to the CFO only. What BSA program requirement is MOST likely being violated?",
    options: [
      "No violation — board reporting is a best practice, not a regulatory requirement",
      "The institution may be violating the board oversight requirement — regulators expect the board (or a board-level committee) to receive regular AML program updates sufficient to fulfill their oversight responsibilities",
      "The violation is the CFO's — they should escalate reports to the board voluntarily",
      "Board reporting is only required after a SAR filing or regulatory examination"
    ],
    answer: 1,
    explanation: "Board oversight is a fundamental expectation of AML regulatory frameworks, reinforced by the FFIEC BSA/AML Examination Manual and FinCEN guidance. The board bears ultimate responsibility for the institution's compliance culture and must be informed of AML program status, risks, examination findings, and significant SAR activity. Routing reports only to the CFO — without board-level visibility — means the board cannot fulfill its oversight duty. This is a common finding in consent orders, where regulators require boards to receive regular, substantive AML briefings. BSA Officer reporting should go to the board or a board-level risk/audit committee."
  },
  {
    id: 299,
    category: "Scenario Based",
    question: "A compliance analyst reviews a high-risk customer's account and concludes there is no suspicious activity. The analyst closes the case but does not document the reasoning, evidence reviewed, or conclusion. Two years later, an examiner reviews the same account and finds suspicious patterns. What is the PRIMARY compliance concern with the analyst's original case closure?",
    options: [
      "No concern — the analyst made a good-faith determination at the time",
      "The lack of documentation means the institution cannot demonstrate the adequacy of its review; undocumented decisions are as problematic as wrong decisions in regulatory examinations",
      "The analyst should have filed a SAR out of caution",
      "The concern is with the examiner's retrospective review, not the original closure"
    ],
    answer: 1,
    explanation: "In AML compliance, if it isn't documented, it didn't happen — from a regulatory perspective. An undocumented case closure provides no evidence of the analytical process, information reviewed, or rationale applied. When an examiner later finds suspicious patterns in the same account, an undocumented prior review cannot defend the institution's decision. Regulators expect case files to include: what information was reviewed, what questions were asked, what the customer or business rationale was, and why the conclusion was reached. Documentation is as critical as the decision itself in demonstrating a functioning AML program."
  },
  {
    id: 300,
    category: "Scenario Based",
    question: "A bank operates in a state where cannabis is legal. A cannabis dispensary requests a business banking account. Federal law still classifies cannabis as a Schedule I controlled substance. What is the CORRECT compliance approach?",
    options: [
      "Automatically decline — all cannabis businesses are illegal under federal law and cannot be banked",
      "The bank may choose to serve cannabis businesses but must apply enhanced due diligence consistent with FinCEN's 2014 guidance on marijuana-related businesses, including heightened monitoring and specific SAR filing requirements",
      "Cannabis businesses require an OFAC license before they can be banked",
      "Banks in legal cannabis states are exempt from BSA obligations for cannabis customers"
    ],
    answer: 1,
    explanation: "FinCEN issued guidance in 2014 (updated since) on how financial institutions may serve marijuana-related businesses (MRBs) in states where cannabis is legal, while acknowledging the federal Schedule I conflict. The guidance requires: thorough CDD on the MRB; verification of state licensing; ongoing enhanced monitoring; and specific SAR filings (including 'Marijuana Limited' SARs for compliant MRBs and 'Marijuana Priority' SARs for non-compliant ones). Banks are not required to serve MRBs — this is a business decision — but if they do, they must follow FinCEN's guidance. BSA obligations are not suspended for cannabis customers."
  }
];
