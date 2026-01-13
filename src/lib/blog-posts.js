const LOCAL_NOTES = [
  "Chambers beside Kadapa District Court help with filings, listings, and urgent hearings.",
  "Clients from Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, Sidhout, and nearby towns rely on local court familiarity.",
  "Appeals and revisions are coordinated with the High Court of Andhra Pradesh when required.",
];

const DEFAULT_SNAPSHOT = [
  "36+ years of courtroom practice in Kadapa",
  "Clear document checklist and filing strategy",
  "Kadapa District Court focused guidance",
];

const DEFAULT_RELATED_SERVICES = [
  { label: "Criminal Lawyer in Kadapa", href: "/services/criminal-lawyer-in-kadapa" },
  { label: "Civil Lawyer in Kadapa", href: "/services/civil-lawyer-in-kadapa" },
  { label: "Property Dispute Lawyer", href: "/services/property-dispute-lawyer-kadapa" },
  { label: "Cheque Bounce Lawyer", href: "/services/cheque-bounce-lawyer-kadapa" },
];

const defaultTable = (topic) => ({
  heading: "Kadapa filing roadmap",
  headers: ["Stage", "Why it matters", "Kadapa tip"],
  rows: [
    [
      "Initial consultation",
      `Clarifies ${topic} facts and documents`,
      "Bring a clear timeline and originals",
    ],
    [
      "Drafting and notices",
      "Sets legal foundation and relief sought",
      "Use Kadapa court formats and timelines",
    ],
    [
      "Filing and interim relief",
      "Secures early protection or direction",
      "Coordinate with Kadapa District Court registry",
    ],
    [
      "Evidence and arguments",
      "Builds the strongest court record",
      "Prepare witnesses and documents early",
    ],
  ],
});

const createPost = ({
  slug,
  title,
  description,
  excerpt,
  keywords,
  date,
  intro,
  keyPoints,
  steps,
  documents,
  table,
  localNotes,
  snapshot,
  relatedServices,
}) => ({
  slug,
  title,
  description,
  excerpt,
  keywords,
  date,
  intro,
  keyPoints,
  steps,
  documents,
  table: table || defaultTable(title.toLowerCase()),
  localNotes: localNotes || LOCAL_NOTES,
  snapshot: snapshot || DEFAULT_SNAPSHOT,
  relatedServices: relatedServices || DEFAULT_RELATED_SERVICES,
});

export const BLOG_POSTS = [
  createPost({
    slug: "how-to-choose-lawyer-kadapa",
    title: "How to Choose the Right Lawyer in Kadapa",
    description:
      "A practical Kadapa guide to selecting an advocate based on experience, court familiarity, and case strategy.",
    excerpt:
      "Learn how Kadapa clients can evaluate experience, court knowledge, and communication before appointing an advocate.",
    keywords:
      "how to choose lawyer Kadapa, Kadapa advocate guide, best lawyer in Kadapa, Kadapa District Court lawyer",
    date: "2025-01-20",
    intro: [
      "When you need legal help in Kadapa, the first step is to understand the nature of your matter. Criminal, civil, property, and cheque bounce cases each follow different procedures and timelines.",
      "A local advocate who appears regularly in Kadapa District Court can explain what to expect, set realistic milestones, and build a disciplined case plan.",
    ],
    keyPoints: [
      "Match the lawyer's experience to your case type",
      "Confirm local court familiarity in Kadapa",
      "Ask for a document checklist and timeline",
      "Prioritize clear communication and updates",
      "Check proximity to Kadapa District Court",
    ],
    steps: [
      "Shortlist advocates with relevant case experience",
      "Review prior court exposure in Kadapa District Court",
      "Share your documents for early assessment",
      "Discuss the filing strategy and timeline",
      "Confirm how updates will be shared",
    ],
    documents: [
      "Notices, agreements, and correspondence",
      "Identity and address proof",
      "Previous case papers or court orders",
      "Property or financial records where relevant",
    ],
  }),
  createPost({
    slug: "kadapa-legal-document-checklist",
    title: "Kadapa Legal Consultation Checklist: Documents to Keep Ready",
    description:
      "Kadapa-focused checklist of documents to bring for civil, criminal, property, and family law consultations.",
    excerpt:
      "Prepare the right documents before visiting a Kadapa advocate office to speed up case assessment and next steps.",
    keywords:
      "Kadapa legal document checklist, Kadapa advocate consultation, Kadapa District Court documents",
    date: "2025-01-18",
    intro: [
      "Legal consultations in Kadapa move faster when key documents are ready. Clear records help the advocate assess strengths, risks, and the best immediate actions.",
      "This checklist focuses on common Kadapa District Court matters and helps clients from YSR Kadapa District prepare effectively.",
    ],
    keyPoints: [
      "Prepare a clear timeline of events",
      "Bring notices, replies, and delivery proof",
      "Keep originals and photocopies ready",
      "Carry identity and address proof",
      "Organize records by date and topic",
    ],
    steps: [
      "Write a timeline of events in order",
      "Collect notices, agreements, and case papers",
      "Separate originals and photocopies",
      "Note any court dates or hearing schedules",
      "Arrange files for quick review in Kadapa",
    ],
    documents: [
      "FIR or remand papers for criminal matters",
      "Sale deed, EC, tax receipts for property",
      "Marriage certificate and income proof for family cases",
      "Invoices and payment records for civil disputes",
    ],
  }),
  createPost({
    slug: "kadapa-bail-anticipatory-bail-guide",
    title: "Bail and Anticipatory Bail in Kadapa: What to Prepare",
    description:
      "Kadapa bail guidance with documents, timelines, and court readiness for Kadapa District Court and High Court of Andhra Pradesh.",
    excerpt:
      "Understand how bail and anticipatory bail are prepared in Kadapa with the right documents and timeline planning.",
    keywords:
      "bail lawyer Kadapa, anticipatory bail Kadapa, criminal lawyer Kadapa, Kadapa District Court bail",
    date: "2025-01-17",
    intro: [
      "Bail matters in Kadapa require quick documentation, clear facts, and procedural accuracy before Kadapa District Court.",
      "Early preparation improves the chance of timely relief and clear compliance with court conditions.",
    ],
    keyPoints: [
      "Act fast after FIR or notice",
      "Prepare surety and residence proof",
      "Document medical or urgent grounds",
      "Plan compliance with bail conditions",
      "Coordinate with Kadapa court listings",
    ],
    steps: [
      "Collect FIR and remand documents",
      "Draft bail petition with facts and grounds",
      "Arrange surety and address verification",
      "File in Kadapa District Court or High Court",
      "Prepare for conditions and follow-up",
    ],
    documents: [
      "FIR copy and remand report",
      "Identity proof and address proof",
      "Surety documents and property proof",
      "Medical records if urgent grounds exist",
    ],
  }),
  createPost({
    slug: "kadapa-sessions-trial-preparation",
    title: "Sessions Trial Preparation in Kadapa District Court",
    description:
      "Focused guidance for sessions trials in Kadapa with evidence review, cross-examination planning, and courtroom strategy.",
    excerpt:
      "Learn how sessions trials are prepared in Kadapa and what documents matter most for a strong defense.",
    keywords:
      "sessions trial Kadapa, criminal defense Kadapa, Kadapa District Court trial",
    date: "2025-01-16",
    intro: [
      "Sessions trials in Kadapa require a disciplined approach to evidence, witness preparation, and courtroom strategy.",
      "Early case review helps identify key issues and build a defense that aligns with Kadapa District Court procedures.",
    ],
    keyPoints: [
      "Review charge sheet and witness list",
      "Plan cross-examination and evidence",
      "Maintain timeline and compliance",
      "Prepare for interim applications",
      "Coordinate hearings with Kadapa listings",
    ],
    steps: [
      "Analyze FIR and charge sheet carefully",
      "Identify key witnesses and exhibits",
      "Prepare cross-examination outlines",
      "File necessary interim applications",
      "Present final arguments with clarity",
    ],
    documents: [
      "Charge sheet and witness statements",
      "Medical and forensic reports",
      "Previous bail orders or court directions",
      "Defense documents and alibi records",
    ],
  }),
  createPost({
    slug: "kadapa-civil-suit-filing-steps",
    title: "How to File a Civil Suit in Kadapa: Process and Timeline",
    description:
      "Kadapa civil suit filing guide with drafting, interim relief, and court process aligned to Kadapa District Court.",
    excerpt:
      "A step-by-step overview of civil suit filing in Kadapa for recovery, injunctions, and civil disputes.",
    keywords:
      "civil suit Kadapa, civil lawyer Kadapa, Kadapa District Court civil case",
    date: "2025-01-15",
    intro: [
      "Civil suits in Kadapa require clear pleadings, proper documentation, and a timeline aligned with Kadapa District Court procedure.",
      "Early planning helps secure interim relief and keeps the case on track.",
    ],
    keyPoints: [
      "Define the relief clearly",
      "Prepare documents and evidence",
      "Consider interim relief early",
      "Follow Kadapa court filing rules",
      "Maintain a hearing calendar",
    ],
    steps: [
      "Draft the plaint with facts and relief",
      "Attach supporting documents and notices",
      "File in Kadapa District Court",
      "Seek interim relief if urgent",
      "Prepare evidence and arguments",
    ],
    documents: [
      "Agreements, invoices, and payment proof",
      "Legal notices and delivery proof",
      "Identity proof and address proof",
      "Previous orders or correspondence",
    ],
  }),
  createPost({
    slug: "kadapa-injunction-order-guide",
    title: "Injunction Orders in Kadapa: When and How to Seek Relief",
    description:
      "Kadapa injunction guidance for temporary and permanent orders with strong document control and court readiness.",
    excerpt:
      "Understand how injunctions are sought in Kadapa and which documents support early relief.",
    keywords:
      "injunction cases Kadapa, civil lawyer Kadapa, Kadapa District Court injunction",
    date: "2025-01-14",
    intro: [
      "Injunctions in Kadapa are time-sensitive and depend on clear facts, documents, and urgency before Kadapa District Court.",
      "A focused plan improves the chance of interim protection and stable orders.",
    ],
    keyPoints: [
      "Show urgency and prima facie case",
      "Maintain possession and status quo proof",
      "Draft precise relief and boundaries",
      "Present clean title records",
      "Prepare for objections quickly",
    ],
    steps: [
      "Collect title documents and site proof",
      "Issue notice where appropriate",
      "Draft the plaint with interim relief",
      "File and argue for temporary injunction",
      "Prepare evidence for final order",
    ],
    documents: [
      "Sale deed and encumbrance certificate",
      "Survey sketch and property tax receipts",
      "Photographs and possession proof",
      "Prior court orders or notices",
    ],
  }),
  createPost({
    slug: "kadapa-partition-suit-guide",
    title: "Partition Suit Guide for Kadapa Families",
    description:
      "Kadapa partition suit guidance with steps, documents, and local court focus for family property matters.",
    excerpt:
      "A Kadapa-specific partition suit guide covering documents, steps, and court process for family properties.",
    keywords:
      "partition suit Kadapa, property disputes Kadapa, civil lawyer Kadapa",
    date: "2025-01-13",
    intro: [
      "Partition suits in Kadapa require clear family records, title documents, and disciplined filings before Kadapa District Court.",
      "A structured approach helps protect shares and avoid procedural delays.",
    ],
    keyPoints: [
      "Prepare a family tree and share claims",
      "Gather title and revenue records",
      "Draft a clear property schedule",
      "Seek interim relief for protection",
      "Plan evidence for final decree",
    ],
    steps: [
      "Compile title documents and family records",
      "Prepare a detailed property schedule",
      "Issue legal notice and record responses",
      "Draft plaint with share details",
      "File and prepare evidence",
    ],
    documents: [
      "Family tree and relationship proofs",
      "Sale deeds and revenue records",
      "Prior partition deeds or settlements",
      "Survey sketches and property maps",
    ],
  }),
  createPost({
    slug: "kadapa-property-title-verification",
    title: "Property Title Verification in Kadapa: Due Diligence Checklist",
    description:
      "Kadapa title verification checklist for safe property purchase, encumbrance checks, and litigation search.",
    excerpt:
      "Before buying property in Kadapa, verify title, encumbrances, and local records with a clear checklist.",
    keywords:
      "title verification Kadapa, property lawyer Kadapa, Kadapa land due diligence",
    date: "2025-01-12",
    intro: [
      "Property purchases in Kadapa require careful title verification and revenue record checks to avoid disputes later.",
      "A clear due diligence process protects buyers and supports clean registration in Kadapa.",
    ],
    keyPoints: [
      "Verify chain of title",
      "Check encumbrance certificate",
      "Review revenue records and survey maps",
      "Search for pending litigation",
      "Confirm taxes and approvals",
    ],
    steps: [
      "Collect sale deeds and prior title documents",
      "Obtain EC and verify transactions",
      "Review pahani and adangal records",
      "Check court records for disputes",
      "Prepare legal opinion before purchase",
    ],
    documents: [
      "Sale deeds and link documents",
      "Encumbrance certificate (EC)",
      "Tax receipts and approvals",
      "Survey maps and location plan",
    ],
  }),
  createPost({
    slug: "kadapa-cheque-bounce-case-process",
    title: "Cheque Bounce Case Process in Kadapa (Section 138)",
    description:
      "Kadapa cheque bounce process guide with notice timelines, filing steps, and court preparation.",
    excerpt:
      "Learn the Section 138 timeline and documents needed for cheque bounce cases in Kadapa District Court.",
    keywords:
      "cheque bounce lawyer Kadapa, Section 138 Kadapa, Kadapa District Court cheque case",
    date: "2025-01-11",
    intro: [
      "Cheque bounce cases in Kadapa follow strict timelines under Section 138 of the Negotiable Instruments Act.",
      "Timely notice and proper documentation are critical for filing in Kadapa District Court.",
    ],
    keyPoints: [
      "Act within statutory notice period",
      "Maintain bank return memo",
      "Track delivery proof of notice",
      "Prepare complaint with evidence",
      "Plan settlement where possible",
    ],
    steps: [
      "Collect cheque and return memo",
      "Issue legal notice within time",
      "Maintain delivery confirmation",
      "File complaint in Kadapa court",
      "Prepare evidence and witnesses",
    ],
    documents: [
      "Original cheque and return memo",
      "Legal notice and postal proof",
      "Invoices and account statements",
      "Identity proof and transaction records",
    ],
  }),
  createPost({
    slug: "kadapa-family-court-divorce-maintenance",
    title: "Family Court in Kadapa: Divorce and Maintenance Basics",
    description:
      "Kadapa family court guidance for divorce, maintenance, and interim relief with clear document planning.",
    excerpt:
      "Understand divorce and maintenance steps in Kadapa Family Court with practical document tips.",
    keywords:
      "family court Kadapa, divorce lawyer Kadapa, maintenance Kadapa",
    date: "2025-01-10",
    intro: [
      "Family Court matters in Kadapa require sensitive handling, clear records, and disciplined filings.",
      "A structured plan helps secure interim orders and stable outcomes.",
    ],
    keyPoints: [
      "Identify appropriate legal grounds",
      "Prepare income and expense records",
      "Consider mediation where possible",
      "Plan custody and visitation needs",
      "Maintain communication records",
    ],
    steps: [
      "Gather marriage and identity documents",
      "Prepare a factual timeline",
      "File petition in Kadapa Family Court",
      "Seek interim maintenance if required",
      "Prepare evidence and arguments",
    ],
    documents: [
      "Marriage certificate and ID proof",
      "Income statements and bank records",
      "Communication records and notices",
      "Child records where applicable",
    ],
  }),
  createPost({
    slug: "kadapa-child-custody-visitation",
    title: "Child Custody and Visitation in Kadapa: Practical Steps",
    description:
      "Kadapa child custody guidance with welfare focus, documentation, and Family Court process.",
    excerpt:
      "A Kadapa-focused guide on custody and visitation steps with welfare-first planning.",
    keywords:
      "child custody Kadapa, family court Kadapa, child visitation Kadapa",
    date: "2025-01-09",
    intro: [
      "Child custody matters in Kadapa require a welfare-first approach supported by reliable documents and clear plans.",
      "Family Court decisions rely on stability, schooling, and the child's best interests.",
    ],
    keyPoints: [
      "Prepare school and medical records",
      "Show stable residence and care plan",
      "Plan practical visitation schedule",
      "Avoid conflict and document timelines",
      "Follow Kadapa Family Court directions",
    ],
    steps: [
      "Collect child documents and records",
      "Draft custody and visitation proposal",
      "File in Kadapa Family Court",
      "Present welfare and stability proof",
      "Comply with interim orders",
    ],
    documents: [
      "Child birth certificate and school records",
      "Medical records and vaccination info",
      "Residence proof and caregiving details",
      "Previous court orders if any",
    ],
  }),
  createPost({
    slug: "kadapa-domestic-violence-protection",
    title: "Domestic Violence Case Support in Kadapa: Protection and Relief",
    description:
      "Kadapa domestic violence guidance for protection orders, residence relief, and court process.",
    excerpt:
      "Learn how DV protection and relief are approached in Kadapa with clear documents and timelines.",
    keywords:
      "domestic violence Kadapa, protection order Kadapa, family court Kadapa",
    date: "2025-01-08",
    intro: [
      "Domestic violence cases in Kadapa need timely action, clear evidence, and safe planning.",
      "Relief may include protection, residence, and monetary orders through Kadapa courts.",
    ],
    keyPoints: [
      "Document incidents and communication",
      "Seek protection and residence relief",
      "Prepare medical and police records",
      "Ensure safe interim arrangements",
      "Follow Kadapa court directions",
    ],
    steps: [
      "Collect evidence and incident records",
      "Prepare complaint and relief details",
      "File in Kadapa court as applicable",
      "Seek interim protection order",
      "Prepare for hearings and compliance",
    ],
    documents: [
      "Medical records and photographs",
      "Police complaints or DD entries",
      "Messages and communication records",
      "Identity proof and residence details",
    ],
  }),
  createPost({
    slug: "kadapa-revenue-record-corrections",
    title: "Revenue Record Corrections in Kadapa: Patta and Mutation",
    description:
      "Kadapa revenue correction guide for mutation, patta updates, and appeals in revenue matters.",
    excerpt:
      "Learn how to correct land records and mutation entries in Kadapa with proper documentation.",
    keywords:
      "revenue cases Kadapa, mutation Kadapa, patta correction Kadapa",
    date: "2025-01-07",
    intro: [
      "Revenue record corrections in Kadapa require accurate documents, clear title proof, and proper applications to revenue authorities.",
      "Timely filings help avoid future property disputes and litigation.",
    ],
    keyPoints: [
      "Verify patta and passbook entries",
      "Prepare title and survey documents",
      "File mutation application correctly",
      "Respond to notices on time",
      "Maintain copies of all orders",
    ],
    steps: [
      "Collect pahani, adangal, and tax records",
      "Prepare mutation request with proof",
      "File before Tahsildar or RDO",
      "Attend hearings and submit responses",
      "Secure corrected entries and copies",
    ],
    documents: [
      "Sale deed and EC",
      "Pahani, adangal, and survey maps",
      "Tax receipts and prior orders",
      "Identity proof and address proof",
    ],
  }),
  createPost({
    slug: "kadapa-sale-deed-registration",
    title: "Sale Deed Registration in Kadapa: Key Checks Before Signing",
    description:
      "Kadapa sale deed guidance with title checks, approvals, and registration planning.",
    excerpt:
      "A Kadapa checklist for sale deed registration and document verification before purchase.",
    keywords:
      "sale deed Kadapa, property registration Kadapa, title verification Kadapa",
    date: "2025-01-06",
    intro: [
      "Sale deed registration in Kadapa should follow thorough title verification and compliance checks.",
      "Proper due diligence reduces risk and supports clean registration in Kadapa.",
    ],
    keyPoints: [
      "Verify title and EC",
      "Check property tax and approvals",
      "Confirm encumbrances and litigation",
      "Review boundaries and survey maps",
      "Plan stamp duty and registration",
    ],
    steps: [
      "Collect title chain documents",
      "Obtain encumbrance certificate",
      "Verify property tax and approvals",
      "Draft sale deed with clear clauses",
      "Complete registration in Kadapa",
    ],
    documents: [
      "Sale deed and link documents",
      "Encumbrance certificate",
      "Property tax receipts",
      "Survey map and identification",
    ],
  }),
  createPost({
    slug: "kadapa-succession-certificate-guide",
    title: "Succession Certificate in Kadapa: When You Need It",
    description:
      "Kadapa succession certificate guide with steps, documents, and court process.",
    excerpt:
      "Understand when a succession certificate is required in Kadapa and how to prepare documents.",
    keywords:
      "succession certificate Kadapa, legal heir Kadapa, Kadapa District Court succession",
    date: "2025-01-05",
    intro: [
      "Succession certificate matters in Kadapa require clear family records and court documentation.",
      "A structured filing plan reduces delays in Kadapa District Court.",
    ],
    keyPoints: [
      "Confirm legal heirs and relationships",
      "Prepare asset and account details",
      "Collect death certificate and ID proof",
      "Draft petition with clear schedule",
      "Comply with court notices",
    ],
    steps: [
      "Collect death certificate and family tree",
      "Prepare asset list and account details",
      "Draft petition for Kadapa District Court",
      "Publish and respond to notices",
      "Secure final certificate and copies",
    ],
    documents: [
      "Death certificate",
      "Family tree and identity proofs",
      "Bank and asset statements",
      "Residence proof of applicants",
    ],
  }),
  createPost({
    slug: "kadapa-execution-petition-process",
    title: "Execution Petition Process in Kadapa: Enforcing a Decree",
    description:
      "Kadapa execution petition guide for enforcing decrees, recovering amounts, and securing possession.",
    excerpt:
      "Learn the steps and documents required to file an execution petition in Kadapa District Court.",
    keywords:
      "execution petition Kadapa, decree enforcement Kadapa, civil lawyer Kadapa",
    date: "2025-01-04",
    intro: [
      "Execution petitions in Kadapa require clear documentation, timely filings, and a strategy aligned with Kadapa District Court procedures.",
      "A disciplined approach helps recover amounts or secure possession lawfully.",
    ],
    keyPoints: [
      "Collect certified decree copies",
      "Identify judgment debtor assets",
      "Plan attachment or possession relief",
      "Follow Order XXI compliance",
      "Maintain execution records",
    ],
    steps: [
      "Collect decree and judgment copies",
      "Prepare execution petition with relief",
      "File in Kadapa District Court",
      "Proceed with attachment or sale",
      "Complete satisfaction and close",
    ],
    documents: [
      "Certified decree and judgment",
      "Property or asset details",
      "Decree schedule and maps",
      "Previous execution orders",
    ],
  }),
  createPost({
    slug: "kadapa-rent-control-eviction",
    title: "Rent Control and Eviction in Kadapa: Tenant and Landlord Checklist",
    description:
      "Kadapa rent control guidance for eviction, arrears, and fair rent petitions.",
    excerpt:
      "A practical Kadapa checklist for rent control matters and eviction procedures.",
    keywords:
      "rent control Kadapa, eviction lawyer Kadapa, landlord tenant Kadapa",
    date: "2025-01-03",
    intro: [
      "Rent control matters in Kadapa require clear tenancy records and proper notice procedures.",
      "Documented timelines improve outcomes before Kadapa courts.",
    ],
    keyPoints: [
      "Maintain rent receipts and agreements",
      "Issue proper legal notice",
      "Document default or bona fide need",
      "Prepare for evidence hearings",
      "Follow Kadapa court procedures",
    ],
    steps: [
      "Collect rent agreement and receipts",
      "Issue eviction notice if required",
      "File petition in Kadapa court",
      "Present evidence and witnesses",
      "Obtain and enforce orders",
    ],
    documents: [
      "Rent agreement and receipts",
      "Notice and delivery proof",
      "Property ownership records",
      "Tax receipts and utility records",
    ],
  }),
  createPost({
    slug: "kadapa-appeals-revisions-high-court",
    title: "Appeals and Revisions from Kadapa to High Court of Andhra Pradesh",
    description:
      "Guidance for Kadapa appeals and revisions with drafting, limitation, and High Court coordination.",
    excerpt:
      "Learn when to file appeals or revisions from Kadapa District Court and what documents matter.",
    keywords:
      "appeals lawyer Kadapa, revision petition Kadapa, High Court Andhra Pradesh",
    date: "2025-01-02",
    intro: [
      "Appeals and revisions from Kadapa require certified copies, strong grounds, and strict limitation compliance.",
      "A clear strategy helps protect rights in Kadapa District Court and the High Court of Andhra Pradesh.",
    ],
    keyPoints: [
      "Check limitation timelines",
      "Prepare certified copies early",
      "Draft strong grounds of appeal",
      "Seek stay or interim relief",
      "Coordinate High Court filings",
    ],
    steps: [
      "Collect judgment and decree copies",
      "Draft grounds and relief sought",
      "File appeal or revision on time",
      "Seek interim stay if needed",
      "Prepare for High Court hearings",
    ],
    documents: [
      "Certified judgment and decree",
      "Trial court records and exhibits",
      "Limitation and filing details",
      "Proof of service and notices",
    ],
  }),
  createPost({
    slug: "kadapa-legal-advisory-before-filing",
    title: "Legal Advisory in Kadapa: Before You File a Case",
    description:
      "Kadapa legal advisory guide for document review, case assessment, and pre-litigation strategy.",
    excerpt:
      "A Kadapa-focused advisory checklist before you file a civil or criminal case.",
    keywords:
      "legal advisory Kadapa, advocate consultation Kadapa, case assessment Kadapa",
    date: "2025-01-01",
    intro: [
      "Pre-litigation advice in Kadapa helps clients avoid mistakes and build a strong court record.",
      "A structured consultation clarifies the legal path before filing in Kadapa District Court.",
    ],
    keyPoints: [
      "Clarify facts and timeline",
      "Identify the correct legal remedy",
      "Check evidence strength",
      "Estimate costs and timelines",
      "Plan notices and drafting",
    ],
    steps: [
      "Collect documents and draft timeline",
      "Discuss legal remedies and risks",
      "Plan notices or replies",
      "Decide filing strategy",
      "Prepare for Kadapa court process",
    ],
    documents: [
      "Notices, agreements, or FIR copies",
      "Identity proof and address proof",
      "Any prior case papers",
      "Property or financial records",
    ],
  }),
  createPost({
    slug: "kadapa-court-timeline-expectations",
    title: "Kadapa Court Timelines: What to Expect at Each Stage",
    description:
      "Kadapa court timeline guide for filing, hearings, evidence, and final orders across common case types.",
    excerpt:
      "Understand Kadapa District Court timelines from filing to final orders with practical planning tips.",
    keywords:
      "Kadapa court timeline, Kadapa District Court process, lawyer Kadapa guidance",
    date: "2024-12-30",
    intro: [
      "Kadapa court timelines depend on case type, document readiness, and hearing schedules.",
      "Knowing the stages helps clients plan documentation and reduce delays.",
    ],
    keyPoints: [
      "Filing and admission stage",
      "Notice and response timelines",
      "Evidence and witness preparation",
      "Argument stage and final order",
      "Appeal timelines if required",
    ],
    steps: [
      "File and receive case number",
      "Serve notices and await responses",
      "Prepare evidence and witness list",
      "Argue and submit written notes",
      "Await judgment and compliance",
    ],
    documents: [
      "Complete pleading set",
      "Notice and service records",
      "Evidence documents and affidavits",
      "Court order copies",
    ],
  }),
];

export const BLOG_POSTS_PER_PAGE = 5;

export const getBlogPost = (slug) =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const getBlogPage = (page) => {
  const totalPages = Math.ceil(BLOG_POSTS.length / BLOG_POSTS_PER_PAGE);
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const start = (safePage - 1) * BLOG_POSTS_PER_PAGE;
  return {
    posts: sorted.slice(start, start + BLOG_POSTS_PER_PAGE),
    page: safePage,
    totalPages,
  };
};
