import { useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FAQS = [
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
    a: "The advocate office is located beside Kadapa District Court, near Nagarjuna Model School, Kadapa – 516001, Andhra Pradesh.",
  },
  {
    q: "What types of cases are handled at this advocate office?",
    a: "The office handles civil disputes, criminal cases, family and matrimonial matters, property and land disputes, cheque bounce cases under NI Act, revenue matters, bail proceedings, and legal advisory services.",
  },
  {
    q: "How many years of experience does the advocate have?",
    a: "Rajesh Kumar Reddy has over 36 years of legal experience and has been enrolled with the Bar Council of Andhra Pradesh since 22 February 1990 (AP/104/1990).",
  },
  {
    q: "Do you handle property and land disputes in Kadapa?",
    a: "Yes. Property and land dispute resolution including partition suits, injunctions, title disputes, revenue record corrections, and appeals is a core area of practice in Kadapa.",
  },
  {
    q: "Can I consult for cheque bounce cases in Kadapa?",
    a: "Yes. The office regularly handles cheque bounce cases under Section 138 of the Negotiable Instruments Act across Kadapa District courts.",
  },
  {
    q: "Do you provide bail and criminal defence services?",
    a: "Yes. Bail matters, sessions trials, anticipatory bail, and criminal defence representation are handled before Kadapa District Court and High Court of Andhra Pradesh.",
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
          property disputes, and cheque bounce cases.
        </p>
      </div>
    </section>
  );
}
