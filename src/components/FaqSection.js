import { useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FAQS = [
  // Existing Core FAQs (Keep these)
  {
    q: "Who is the best advocate in Kadapa for civil and criminal cases?",
    a: "Rajesh Kumar Reddy is a senior advocate in Kadapa with over 36 years of courtroom experience. He handles civil litigation, criminal defence, family court disputes, property matters, cheque bounce cases, and appeals before Kadapa District Court and the High Court of Andhra Pradesh.",
  },
  {
    q: "Does Rajesh Kumar Reddy handle High Court cases?",
    a: "Yes. He regularly appears before the High Court of Andhra Pradesh for appeals, revisions, writ petitions, and High Court litigation matters originating from Kadapa and surrounding districts.",
  },
  {
    q: "Where is the advocate office located in Kadapa?",
    a: "The advocate office is located beside Kadapa District Court, near Nagarjuna Model School, Sarajupeta, Kadapa – 516001, Andhra Pradesh. The office is easily accessible for clients attending hearings at Kadapa District Court.",
  },
  {
    q: "What types of cases are handled at this advocate office?",
    a: "The office handles civil disputes, criminal cases, family and matrimonial matters, property and land disputes, cheque bounce cases under NI Act, revenue matters, bail proceedings, and legal advisory services.",
  },
  {
    q: "How many years of experience does the advocate have?",
    a: "Rajesh Kumar Reddy has over 36 years of legal experience and has been enrolled with the Bar Council of Andhra Pradesh since 22 February 1990 (AP/104/1990). He is a prominent senior advocate practicing in Kadapa.",
  },
  {
    q: "Do you handle property and land disputes in Kadapa?",
    a: "Yes. Property and land dispute resolution including partition suits, injunctions, title disputes, revenue record corrections, and appeals is a core area of practice in Kadapa District Court and Siddavatam Court.",
  },
  {
    q: "Can I consult for cheque bounce cases in Kadapa?",
    a: "Yes. The office regularly handles cheque bounce cases under Section 138 of the Negotiable Instruments Act across Kadapa District courts, including legal notices and trial representation.",
  },
  {
    q: "Do you provide bail and criminal defence services?",
    a: "Yes. Bail matters, sessions trials, anticipatory bail, and criminal defence representation are handled before Kadapa District Court and High Court of Andhra Pradesh. Emergency bail services available.",
  },
  {
    q: "Do you handle family court and matrimonial cases in Kadapa?",
    a: "Yes. Divorce, maintenance, custody, and domestic violence matters are handled with Family Court guidance in Kadapa District Court premises.",
  },
  {
    q: "Do you draft legal notices and replies?",
    a: "Yes. Notices and responses for civil, property, and cheque bounce matters are drafted to document facts and protect rights under Indian law.",
  },
  {
    q: "What should I bring for the first consultation?",
    a: "Bring notices, agreements, identity proof, previous case papers, and a clear timeline of events. For property matters, bring title deeds and survey records.",
  },
  {
    q: "How are professional fees decided?",
    a: "Fees depend on the case type, stage, and expected work. After reviewing documents at our Sarajupeta office, a clear scope and estimate are shared.",
  },
  
  // NEW SEO-GEO FAQs (Add these)
  {
    q: "Has Rajesh Kumar Reddy served as Kadapa District Bar Association President?",
    a: "Yes. Rajesh Kumar Reddy is a former President of the Kadapa District Bar Association, demonstrating leadership and deep roots in the Kadapa legal community. His tenure contributed to judicial infrastructure development including the establishment of SBI banking facilities within Kadapa District Court premises.",
  },
  {
    q: "Do you handle cases at Siddavatam Court near Kadapa?",
    a: "Yes. We provide legal representation at Siddavatam Court for civil suits, criminal matters, and revenue disputes. Our chambers offer comprehensive coverage from lower courts like Siddavatam to the High Court of Andhra Pradesh.",
  },
  {
    q: "How do I get anticipatory bail in Kadapa District Court?",
    a: "For anticipatory bail in Kadapa, immediately contact our office beside Kadapa District Court. We prepare and file anticipatory bail applications under Section 438 CrPC, represent you before the Sessions Judge Kadapa, and handle subsequent proceedings at the High Court of Andhra Pradesh if required.",
  },
  {
    q: "What is the process for filing a civil suit in Kadapa District Court?",
    a: "Civil suits in Kadapa District Court require drafting a plaint, payment of court fees, and submission to the appropriate court section. Our Sarajupeta office assists with document preparation, valuation, filing, and representation in suits related to property, money recovery, and injunctions.",
  },
  {
    q: "Do you mentor junior advocates in Kadapa?",
    a: "Yes. Our chambers at Nagarjuna Model School Road actively mentor the next generation of advocates joining the Kadapa Bar. We provide training in criminal trials, civil procedure, and High Court practice to junior lawyers enrolled with the Bar Council of Andhra Pradesh.",
  },
  {
    q: "Can you help with SBI banking issues related to court matters?",
    a: "Rajesh Kumar Reddy facilitated the establishment of the SBI branch inside Kadapa District Court for advocates' and litigants' convenience. We assist clients with court-related banking procedures, including court fee payments and surety bonds at the District Court SBI branch.",
  },
  {
    q: "How do I appeal from Kadapa District Court to High Court?",
    a: "Appeals from Kadapa District Court to the High Court of Andhra Pradesh must be filed within statutory limitation periods. We handle civil appeals under CPC, criminal appeals under CrPC, and writ jurisdiction matters, managing the complete documentation and admission process at the High Court.",
  },
  {
    q: "What are the court timings for Kadapa District Court?",
    a: "Kadapa District Court typically operates from 10:30 AM to 5:00 PM on working days. Our advocate office opens at 9:00 AM to accommodate client consultations before court proceedings begin. We recommend scheduling appointments early for bail matters and urgent hearings.",
  },
  {
    q: "Do you handle revenue matters and land records in Kadapa?",
    a: "Yes. We specialize in revenue matters including mutation of land records, partition deeds, ROR corrections, and disputes before Revenue Divisional Officers (RDO) in Kadapa district. Expertise includes survey number disputes and agricultural land litigation.",
  },
  {
    q: "Is Rajesh Kumar Reddy involved in the Samaikyandhra Movement?",
    a: "Rajesh Kumar Reddy was a prominent figure in the Samaikyandhra Movement, advocating for unified development and judicial infrastructure in Andhra Pradesh. His community leadership complements his legal practice serving Kadapa residents.",
  },
  {
    q: "What is the fee structure for bail matters in Kadapa?",
    a: "Bail matter fees in Kadapa vary based on case complexity, urgency, and court level (District Court vs High Court). Regular bail, anticipatory bail, and quashing petitions have different fee structures. Contact our office near Kadapa District Court for a consultation and transparent fee estimate.",
  },
  {
    q: "Do you provide emergency legal services on weekends in Kadapa?",
    a: "Yes. Understanding the urgency of criminal matters and bail applications, our Kadapa office provides emergency legal consultation on weekends for urgent matters requiring immediate attention at Kadapa District Court or police stations in Kadapa district.",
  },
  {
    q: "How can I verify land titles before purchase in Kadapa?",
    a: "Before purchasing property in Kadapa, conduct title verification through our legal due diligence service. We examine 30+ years of title deeds, encumbrance certificates (EC), survey records, and revenue extracts at Kadapa Sub-Registrar Office and District Court records.",
  },
  {
    q: "What documents are needed for cheque bounce cases in Kadapa?",
    a: "For NI Act Section 138 cases in Kadapa District Court, required documents include: bounced cheque, bank memo, legal notice copy, postal receipt, and delivery proof. Our Sarajupeta office assists with drafting 138 notices and filing complaints within the 30-day limitation period.",
  },
  {
    q: "Who is the most senior advocate near Kadapa District Court?",
    a: "With 36+ years of practice since 1990, Rajesh Kumar Reddy is among the most senior advocates practicing near Kadapa District Court. Located walking distance from the court at Sarajupeta, he offers expertise in criminal defense, civil litigation, and High Court appeals.",
  },
];

const PAGE_SIZE = 4;

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(FAQS.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visibleFaqs = FAQS.slice(start, start + PAGE_SIZE);

  return (
    <section className="section alt">
      <div className="container max-w-4xl">
        {/* HEADER */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <p className="text-xs tracking-widest font-semibold text-slate-500 uppercase mb-2">
              Trusted by clients across Kadapa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* ARROWS */}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-lg text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition"
              aria-label="Previous FAQs"
            >
              <FiChevronLeft />
            </button>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
              className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-lg text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition"
              aria-label="Next FAQs"
            >
              <FiChevronRight />
            </button>

            {/* ASK QUESTION */}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Ask a Question
            </Link>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {visibleFaqs.map((item, i) => {
            const index = start + i;
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`rounded-xl md:rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-md"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-slate-900">
                    {item.q}
                  </span>

                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-700 text-lg shadow-sm">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO TEXT */}
        <p className="sr-only">
          Frequently asked questions about advocate in Kadapa, Rajesh Kumar
          Reddy, Kadapa District Court practice, High Court of Andhra Pradesh
          cases, civil litigation, criminal defence, family court matters,
          property disputes, cheque bounce cases, anticipatory bail Kadapa, 
          Bar Association President Kadapa, Siddavatam Court, senior advocate 
          Kadapa 516001, Sarajupeta legal services, Samaikyandhra Movement lawyer,
          land disputes Kadapa, revenue matters Andhra Pradesh, NI Act 138 Kadapa,
          legal consultation near Nagarjuna Model School, bail lawyer Kadapa District Court.
        </p>
      </div>
    </section>
  );
}