const DEFAULT_TOWNS =
  "Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, Sidhout, and nearby towns in YSR Kadapa District";

const defaultIntro = (service) => [
  `${service} matters in Kadapa often require clear documentation, timely filings, and a strategy aligned with Kadapa District Court procedures.`,
  `Rajesh Kumar Reddy provides structured representation for clients across ${DEFAULT_TOWNS} with 36+ years of courtroom experience in Andhra Pradesh.`,
  `Every matter is prepared with careful evidence review, realistic timelines, and disciplined advocacy inside Kadapa District Court and related benches.`,
  `Clients receive practical guidance, transparent next steps, and a courtroom plan tailored to the specific stage of the ${service.toLowerCase()} matter in Kadapa.`,
];

const defaultProcess = [
  "Case intake with timeline review and document checklist",
  "Drafting, filing, and interim relief planning",
  "Evidence preparation, cross-examination, and arguments",
  "Follow-ups, compliance, and appeal strategy if needed",
  "Negotiation or settlement planning when appropriate",
];

const defaultDocuments = [
  "Notices, agreements, and correspondence related to the dispute",
  "Identity and address proof for parties and witnesses",
  "Court orders, FIR, or previous case papers (if any)",
  "Summons, notices, or hearing schedules already received",
];

const defaultLocalFocus =
  "Chambers beside Kadapa District Court ensure quick access to filings, hearings, and court procedures. The office regularly coordinates matters listed before Kadapa District Court, Family Court, Sessions Court, and the High Court of Andhra Pradesh.";

const defaultHighlights = (service) => [
  {
    title: "Kadapa District Court Access",
    description:
      "Chambers beside Kadapa District Court enable quick filings, urgent hearings, and procedural updates.",
  },
  {
    title: "Evidence-First Case Planning",
    description: `Focused ${service.toLowerCase()} preparation with clear documentation, timelines, and structured hearing strategy.`,
  },
  {
    title: "YSR Kadapa District Coverage",
    description:
      "Representation for clients from Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, and surrounding towns in Andhra Pradesh.",
  },
];

const defaultIntroSteps = (service) => [
  `Gather key documents and prepare a clear timeline for the ${service.toLowerCase()} matter`,
  "Identify the correct court or authority in Kadapa for filing",
  "Draft notices, petitions, or responses based on urgency and facts",
  "File and seek interim relief or compliance where required",
  "Prepare for hearings, evidence, and final arguments or settlement",
];

const createPage = ({
  slug,
  category,
  service,
  summary,
  heroSubtitle,
  metaTitle,
  metaDescription,
  keywords,
  intro,
  caseTypes,
  process,
  documents,
  localFocus,
  image,
  faqs,
  highlights,
  introHeading,
  introSteps,
}) => {
  const title = `${service} in Kadapa`;
  const resolvedMetaTitle =
    metaTitle || `${service} Lawyer in Kadapa | Rajesh Kumar Reddy`;
  const resolvedMetaDescription =
    metaDescription ||
    `${service} representation in Kadapa with 36+ years of experience. Local guidance beside Kadapa District Court for clients across YSR Kadapa District.`;
  const resolvedKeywords =
    keywords ||
    `${service} Kadapa, ${service} lawyer Kadapa, Kadapa District Court, YSR Kadapa District, Andhra Pradesh`;

  return {
    slug,
    category,
    service,
    title,
    summary,
    heroSubtitle: heroSubtitle || summary,
    metaTitle: resolvedMetaTitle,
    metaDescription: resolvedMetaDescription,
    keywords: resolvedKeywords,
    intro: intro || defaultIntro(service),
    caseTypes,
    process: process || defaultProcess,
    documents: documents || defaultDocuments,
    localFocus: localFocus || defaultLocalFocus,
    image: image || "/images/hero-kadapa.svg",
    faqs,
    highlights: highlights || defaultHighlights(service),
    introHeading: introHeading || `Process for ${service} matters in Kadapa`,
    introSteps: introSteps || defaultIntroSteps(service),
  };
};

export const PRACTICE_PAGES = [
  createPage({
    slug: "civil-suits-kadapa",
    category: "Civil Law",
    service: "Civil Suits and Appeals",
    summary:
      "Structured civil litigation support in Kadapa for recovery, injunctions, declaratory suits, and appellate matters with disciplined courtroom preparation.",
    caseTypes: [
      "Money recovery and contract enforcement suits",
      "Temporary and permanent injunctions",
      "Declaratory relief and title declarations",
      "Specific performance and possession matters",
      "Civil appeals, revisions, and execution follow-ups",
    ],
    documents: [
      "Agreements, notices, and correspondence showing the dispute",
      "Title deeds, tax receipts, and encumbrance certificates",
      "Certified copies of orders, decrees, or previous case papers",
      "Identity and address proof for all parties",
    ],
    image: "/images/civilkadapa.webp",
    faqs: [
      {
        question: "Which civil suits are commonly filed in Kadapa District Court?",
        answer:
          "Common matters include recovery suits, injunctions, declaratory suits, specific performance, partition, and appeals from civil decrees in Kadapa District Court.",
      },
      {
        question: "Can interim relief be sought early in a civil case?",
        answer:
          "Yes. Temporary injunctions or status quo orders can be requested at the initial stage when documents and urgency are shown clearly.",
      },
      {
        question: "Do you handle civil appeals from Kadapa courts?",
        answer:
          "Yes. Civil appeals and revisions from Kadapa District Court can be prepared with detailed records, grounds, and procedural compliance.",
      },
    ],
  }),
  createPage({
    slug: "injunction-cases-kadapa",
    category: "Civil Law",
    service: "Injunction and Declaratory Suits",
    summary:
      "Focused representation in Kadapa for temporary injunctions, status quo orders, and declaratory reliefs with strong document control.",
    caseTypes: [
      "Temporary and interim injunctions",
      "Status quo and possession protection orders",
      "Declaratory suits for title and rights",
      "Cancellation of disputed documents",
      "Permanent injunctions after trial",
    ],
    documents: [
      "Title documents, EC, and revenue records",
      "Site photographs, survey sketches, and boundaries",
      "Legal notices, replies, and prior orders",
    ],
    image: "/images/civilkadapa.webp",
  }),
  createPage({
    slug: "partition-suits-kadapa",
    category: "Civil Law",
    service: "Partition Suits",
    summary:
      "Partition suit guidance in Kadapa for ancestral and joint family properties with clear pleadings and evidence planning.",
    intro: [
      "Partition suits in Kadapa require clear family records, title documents, and a disciplined filing strategy aligned with Kadapa District Court procedures.",
      "Rajesh Kumar Reddy provides structured guidance for clients across Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, Sidhout, and nearby YSR Kadapa District towns with 36+ years of courtroom experience in Andhra Pradesh.",
    ],
    introHeading: "Steps to file a partition suit in Kadapa",
    introSteps: [
      "Gather title documents, family tree details, and prior partition records",
      "Prepare a clear property schedule with boundaries and survey references",
      "Issue legal notice and record responses to show the dispute timeline",
      "Draft the plaint with share claims and interim relief if required",
      "File in Kadapa District Court and prepare evidence for hearings",
    ],
    caseTypes: [
      "Partition of ancestral and joint family properties",
      "Division of agricultural lands and house sites",
      "Mesne profits and accounts claims",
      "Boundary disputes within family properties",
      "Appeals from partition decrees",
    ],
    documents: [
      "Family tree, genealogy, and relationship proofs",
      "Sale deeds, pattas, and revenue records",
      "Prior partitions, agreements, or settlements",
    ],
    image: "/images/propertycase.webp",
  }),
  createPage({
    slug: "property-disputes-kadapa",
    category: "Civil Law",
    service: "Property Disputes",
    summary:
      "Property dispute resolution in Kadapa with title verification, injunction strategy, and strong local court familiarity.",
    caseTypes: [
      "Title disputes and ownership claims",
      "Encroachment and boundary issues",
      "Possession and eviction matters",
      "Partition and joint ownership conflicts",
      "Mutation and revenue record corrections",
    ],
    documents: [
      "Sale deeds, gift deeds, and ECs",
      "Pahani, RTC, and survey records",
      "Court notices, orders, or police complaints",
    ],
    image: "/images/propertycase.webp",
  }),
  createPage({
    slug: "rent-control-kadapa",
    category: "Civil Law",
    service: "Rent Control Matters",
    summary:
      "Rent control and tenancy disputes in Kadapa handled with clear notices, compliance, and court-ready petitions.",
    caseTypes: [
      "Eviction petitions for default or bona fide need",
      "Arrears of rent recovery",
      "Fair rent fixation petitions",
      "Tenant disputes and compliance hearings",
      "Negotiated settlements and exit terms",
    ],
    documents: [
      "Rental agreement and rent receipts",
      "Notices issued and delivery proof",
      "Property ownership documents",
    ],
    image: "/images/legaladvice.webp",
  }),
  createPage({
    slug: "execution-petitions-kadapa",
    category: "Civil Law",
    service: "Execution Petitions",
    summary:
      "Execution petition support in Kadapa to enforce decrees, recover amounts, and secure possession through lawful process.",
    intro: [
      "Execution petitions in Kadapa require clear documentation, timely filings, and a strategy aligned with Kadapa District Court procedures.",
      "Rajesh Kumar Reddy provides structured representation for clients across Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, Sidhout, and nearby YSR Kadapa District towns with 36+ years of courtroom experience in Andhra Pradesh.",
      "Every matter is prepared with careful evidence review, realistic timelines, and disciplined advocacy inside Kadapa District Court and related benches.",
    ],
    introHeading: "Steps to file an execution petition in Kadapa",
    introSteps: [
      "Collect certified copies of the decree, judgment, and decree schedule",
      "Identify judgment debtor assets or property for execution planning",
      "Prepare execution petition with relief sought and compliance details",
      "File before Kadapa District Court and secure notice/service updates",
      "Proceed with attachment, sale, or possession based on court directions",
    ],
    caseTypes: [
      "Execution of money decrees",
      "Attachment and sale of property",
      "Delivery of possession",
      "Order XXI objections and compliance issues",
      "Third-party claim petitions in execution",
      "Arrest and detention of judgment debtors",
      "Compliance and decree satisfaction",
    ],
    documents: [
      "Certified copy of decree and judgment",
      "Details of assets or properties",
      "Decree schedule and property descriptions",
      "Previous execution orders or receipts",
    ],
    image: "/images/civilkadapa.webp",
  }),
  createPage({
    slug: "sessions-trials-kadapa",
    category: "Criminal Law",
    service: "Sessions Trials",
    summary:
      "Strong criminal defence in Kadapa Sessions Court with thorough evidence review and disciplined trial preparation.",
    caseTypes: [
      "Sessions trials for serious offences",
      "Discharge and framing of charges",
      "Cross-examination of key witnesses",
      "Final arguments and trial strategy",
      "Bail and suspension applications during trial",
    ],
    documents: [
      "FIR, charge sheet, and remand papers",
      "Witness statements and medical records",
      "Previous bail orders or case history",
    ],
    image: "/images/CriminalDefencekadapa.jpg",
  }),
  createPage({
    slug: "bail-lawyer-kadapa",
    category: "Criminal Law",
    service: "Bail and Anticipatory Bail",
    summary:
      "Bail and anticipatory bail guidance in Kadapa with clear timelines, documentation, and court compliance planning.",
    caseTypes: [
      "Regular bail applications",
      "Anticipatory bail petitions",
      "Interim bail on medical or urgent grounds",
      "Bail condition compliance and surety support",
      "Suspension of sentence applications",
    ],
    documents: [
      "FIR copy and remand report (if available)",
      "Medical records or urgency documents",
      "Surety identity and address proofs",
    ],
    image: "/images/CriminalDefencekadapa.jpg",
  }),
  createPage({
    slug: "criminal-appeals-kadapa",
    category: "Criminal Law",
    service: "Criminal Appeals",
    summary:
      "Criminal appeals in Kadapa and Andhra Pradesh High Court with precise drafting and record-based arguments.",
    caseTypes: [
      "Appeals against conviction or sentence",
      "Appeals against acquittal",
      "Suspension of sentence and bail during appeal",
      "Revision petitions for procedural errors",
      "High Court appeals from Kadapa sessions courts",
    ],
    documents: [
      "Certified copy of judgment and order",
      "Trial court evidence and exhibits",
      "Grounds of appeal and timeline details",
    ],
    image: "/images/highcourt.webp",
  }),
  createPage({
    slug: "ndps-lawyer-kadapa",
    category: "Criminal Law",
    service: "NDPS Cases",
    summary:
      "NDPS case defence in Kadapa with strict focus on procedure, seizure compliance, and bail strategy.",
    caseTypes: [
      "NDPS bail applications",
      "Search and seizure compliance review",
      "Quantity classification and custody issues",
      "Trial defence and cross-examination",
      "Appeals and revisions in NDPS matters",
    ],
    documents: [
      "Seizure memo and panchanama",
      "FSL report and chain of custody records",
      "FIR and remand documents",
    ],
    image: "/images/CriminalDefencekadapa.jpg",
  }),
  createPage({
    slug: "ipc-offences-kadapa",
    category: "Criminal Law",
    service: "IPC Offences Defence",
    summary:
      "Defence for IPC offences in Kadapa with focused strategy for evidence, bail, and trial stages.",
    caseTypes: [
      "IPC 498A, 307, 376, 420, and 506 matters",
      "Domestic and financial offence defence",
      "Charge framing and discharge applications",
      "Trial representation and final arguments",
      "Appeals and revisions in IPC matters",
    ],
    documents: [
      "FIR and charge sheet copies",
      "Medical reports and witness statements",
      "Prior orders and bail papers",
    ],
    image: "/images/CriminalDefencekadapa.jpg",
  }),
  createPage({
    slug: "criminal-revisions-kadapa",
    category: "Criminal Law",
    service: "Criminal Revisions",
    summary:
      "Criminal revision petitions in Kadapa with focused analysis of errors, jurisdiction, and procedure.",
    caseTypes: [
      "Revision against interim or final orders",
      "Procedural irregularity challenges",
      "Jurisdiction and legality objections",
      "Relief in charge framing or discharge orders",
      "High Court revisions from Kadapa courts",
    ],
    documents: [
      "Impugned order copies and case record",
      "Petition grounds and supporting evidence",
      "Timeline of hearings and filings",
    ],
    image: "/images/highcourt.webp",
  }),
  createPage({
    slug: "divorce-lawyer-kadapa",
    category: "Family Law",
    service: "Divorce Proceedings",
    summary:
      "Divorce and matrimonial representation in Kadapa with structured filings, mediation support, and family court guidance.",
    caseTypes: [
      "Mutual consent divorce petitions",
      "Contested divorce on cruelty or desertion",
      "Interim maintenance and residence orders",
      "Settlement drafting and consent terms",
      "Appeals from family court decisions",
    ],
    documents: [
      "Marriage certificate and identity proof",
      "Income documents and expense details",
      "Communication records and relevant evidence",
    ],
    image: "/images/familydisputekadapa.webp",
  }),
  createPage({
    slug: "maintenance-kadapa",
    category: "Family Law",
    service: "Maintenance and Alimony",
    summary:
      "Maintenance and alimony matters in Kadapa with clear income analysis and family court representation.",
    caseTypes: [
      "Interim maintenance applications",
      "Section 125 CrPC maintenance petitions",
      "Permanent alimony claims",
      "Modification of maintenance orders",
      "Recovery of arrears",
    ],
    documents: [
      "Marriage proof and residence details",
      "Income proof, salary slips, or business records",
      "Expense statements and dependents details",
    ],
    image: "/images/familydisputekadapa.webp",
  }),
  createPage({
    slug: "child-custody-kadapa",
    category: "Family Law",
    service: "Child Custody and Visitation",
    summary:
      "Child custody guidance in Kadapa with focus on welfare, stable arrangements, and court-approved visitation plans.",
    caseTypes: [
      "Custody and guardianship petitions",
      "Visitation and access schedules",
      "Interim custody orders",
      "Relocation and schooling issues",
      "Modification of custody orders",
    ],
    documents: [
      "Child birth certificate and school records",
      "Proof of caregiving and residence",
      "Prior custody orders or agreements",
    ],
    image: "/images/familycourtclient.webp",
  }),
  createPage({
    slug: "domestic-violence-kadapa",
    category: "Family Law",
    service: "Domestic Violence Cases",
    summary:
      "Domestic violence case support in Kadapa with protection orders, residence relief, and court compliance planning.",
    caseTypes: [
      "Protection and residence orders",
      "Monetary relief and compensation claims",
      "Interim protection and urgent filings",
      "Enforcement of DV orders",
      "Counseling and mediated settlements",
    ],
    documents: [
      "Complaint copy and medical records",
      "Photos, messages, or supporting evidence",
      "Residence and income details",
    ],
    image: "/images/familydisputekadapa.webp",
  }),
  createPage({
    slug: "rcr-kadapa",
    category: "Family Law",
    service: "Restitution of Conjugal Rights",
    summary:
      "RCR petitions in Kadapa with legal counseling, factual review, and family court representation.",
    caseTypes: [
      "RCR petitions and responses",
      "Counseling and mediation proceedings",
      "Interim maintenance or residence relief",
      "Compliance and enforcement issues",
      "Appeals from family court orders",
    ],
    documents: [
      "Marriage certificate and communication records",
      "Residence proof and identity documents",
      "Prior family court proceedings (if any)",
    ],
    image: "/images/familycourtclient.webp",
  }),
  createPage({
    slug: "land-disputes-kadapa",
    category: "Property and Revenue",
    service: "Land Disputes",
    summary:
      "Land dispute resolution in Kadapa with revenue record analysis, injunction strategy, and civil court advocacy.",
    caseTypes: [
      "Boundary disputes and encroachment claims",
      "Survey and demarcation disputes",
      "Patta and land record conflicts",
      "Possession and title issues",
      "Appeals before revenue authorities",
    ],
    documents: [
      "Pahani, adangal, and survey maps",
      "Title deeds and ECs",
      "Village revenue records and notices",
    ],
    image: "/images/propertycase.webp",
  }),
  createPage({
    slug: "title-verification-kadapa",
    category: "Property and Revenue",
    service: "Title Verification and Due Diligence",
    summary:
      "Title verification in Kadapa for safe property transactions with document scrutiny and legal opinion.",
    caseTypes: [
      "Chain of title review and legal opinion",
      "Encumbrance certificate checks",
      "Pending litigation verification",
      "Property tax and revenue record review",
      "Sale or purchase documentation guidance",
    ],
    documents: [
      "Sale deeds and prior title documents",
      "Encumbrance certificates and tax receipts",
      "Mutation and patta records",
    ],
    image: "/images/propertycase.webp",
  }),
  createPage({
    slug: "sale-deed-kadapa",
    category: "Property and Revenue",
    service: "Sale Deed Drafting and Registration",
    summary:
      "Sale deed drafting in Kadapa with clear clauses, compliance checks, and registration support.",
    caseTypes: [
      "Drafting sale deed and agreement of sale",
      "Gift deed and release deed drafting",
      "Stamp duty and registration planning",
      "Property handover and possession clauses",
      "Indexing and record verification",
    ],
    documents: [
      "Title documents and ECs",
      "Identity proof of buyer and seller",
      "Property tax receipts and survey details",
    ],
    image: "/images/legaladvice.webp",
  }),
  createPage({
    slug: "succession-kadapa",
    category: "Property and Revenue",
    service: "Succession and Inheritance",
    summary:
      "Succession guidance in Kadapa for legal heir matters, inheritance disputes, and succession certificates.",
    caseTypes: [
      "Succession certificate petitions",
      "Legal heir certificate guidance",
      "Inheritance disputes and partition advice",
      "Will interpretation and family settlements",
      "Property transfer and mutation follow-up",
    ],
    documents: [
      "Death certificate and family tree",
      "Property papers and account statements",
      "Identity proofs and residence details",
    ],
    image: "/images/legaladvice.webp",
  }),
  createPage({
    slug: "revenue-cases-kadapa",
    category: "Property and Revenue",
    service: "Revenue Court Matters",
    summary:
      "Revenue case handling in Kadapa with record corrections, mutation support, and appeals before authorities.",
    caseTypes: [
      "Mutation and patta corrections",
      "Pattadar passbook issues",
      "RDO and Tahsildar proceedings",
      "Revenue appeals and revisions",
      "Land record rectification",
    ],
    documents: [
      "Pahani and adangal records",
      "Revenue notices and previous orders",
      "Title deeds and survey sketches",
    ],
    image: "/images/revenuekadapa.webp",
  }),
  createPage({
    slug: "family-court-kadapa",
    category: "Family Law",
    service: "Family Court Matters",
    summary:
      "Family court representation in Kadapa for divorce, custody, maintenance, and domestic violence matters.",
    caseTypes: [
      "Divorce, maintenance, and alimony petitions",
      "Child custody and visitation disputes",
      "Domestic violence proceedings",
      "Restitution of conjugal rights",
      "Settlement drafting and mediation",
    ],
    documents: [
      "Marriage proof and identity documents",
      "Income details and expense records",
      "Child documents and prior court orders",
    ],
    image: "/images/familycourtclient.webp",
  }),
  createPage({
    slug: "appeals-lawyer-kadapa",
    category: "Appeals and High Court",
    service: "Appeals and Revisions",
    summary:
      "Civil and criminal appeals in Kadapa with structured grounds, record review, and High Court coordination.",
    caseTypes: [
      "Civil appeals from Kadapa District Court",
      "Criminal appeals and sentence suspension",
      "Revisions against procedural errors",
      "Interim relief and stay petitions",
      "High Court litigation from Kadapa matters",
    ],
    documents: [
      "Certified judgment and decree copies",
      "Trial court records and exhibits",
      "Grounds of appeal and limitation details",
    ],
    image: "/images/highcourt.webp",
  }),
  createPage({
    slug: "legal-advisory-kadapa",
    category: "Advisory",
    service: "Legal Advisory and Case Strategy",
    summary:
      "Pre-litigation legal advice in Kadapa with document review, risk assessment, and practical next steps.",
    caseTypes: [
      "Legal notice drafting and replies",
      "Contract and agreement review",
      "Property document due diligence",
      "Settlement strategy and negotiation",
      "Pre-litigation case assessment",
    ],
    documents: [
      "Agreements, notices, or dispute letters",
      "Supporting records and receipts",
      "Identity proof and factual timeline",
    ],
    image: "/images/legaladvice.webp",
  }),
  createPage({
    slug: "cheque-bounce-lawyer-kadapa",
    category: "Financial Disputes",
    service: "Cheque Bounce Matters",
    summary:
      "Cheque bounce case handling in Kadapa with compliant notices, strong documentation, and trial representation.",
    caseTypes: [
      "Section 138 NI Act complaints",
      "Statutory notice and reply drafting",
      "Evidence preparation and witness support",
      "Settlement and compounding guidance",
      "Appeals from cheque bounce judgments",
    ],
    documents: [
      "Original cheque and bank return memo",
      "Legal notice copy and delivery proof",
      "Account statements and invoices",
    ],
    image: "/images/checkbounce.webp",
  }),
];

export const PRACTICE_PAGE_MAP = PRACTICE_PAGES.reduce((acc, page) => {
  acc[page.slug] = page;
  return acc;
}, {});

export const PRACTICE_CATEGORIES = PRACTICE_PAGES.reduce((acc, page) => {
  acc[page.category] = acc[page.category] || [];
  acc[page.category].push(page);
  return acc;
}, {});

export const getDefaultFaqs = (page) => [
  {
    question: `Which courts handle ${page.service} matters in Kadapa?`,
    answer:
      `Most ${page.service} matters are handled at Kadapa District Court or the Family Court, with High Court of Andhra Pradesh oversight for appeals when required.`,
  },
  {
    question: `What documents should I bring for a ${page.service} consultation?`,
    answer:
      `Bring notices, agreements, identity proof, and any prior orders or records so the Kadapa advocate can prepare a clear legal strategy.`,
  },
  {
    question: `How soon can I get guidance in Kadapa?`,
    answer:
      `Appointments can be arranged promptly based on urgency, with clear timelines and next steps explained at the first meeting.`,
  },
];
