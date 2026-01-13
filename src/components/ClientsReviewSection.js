"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    role: "Civil Litigation Client",
    text:
      "Advocate Rajesh Kumar Reddy handled my civil litigation matter in Kadapa District Court with remarkable clarity and confidence.",
  },
  {
    name: "Lakshmi Devi",
    role: "Family Court Client",
    text:
      "Family court proceedings were handled with sensitivity and professionalism. Every stage was explained clearly.",
  },
  {
    name: "Suresh Reddy",
    role: "Property Dispute Client",
    text:
      "For a long-standing property dispute, his structured approach helped us reach a resolution efficiently.",
  },
  {
    name: "Anil Kumar",
    role: "Cheque Bounce Case Client",
    text:
      "Cheque bounce matter was handled with strong documentation and clear procedural guidance.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((p) => (p + 1) % REVIEWS.length);
  };

  const prev = () => {
    setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  };

  // Fixed positions – only ONE card swaps
  const cards = [
    REVIEWS[active],
    REVIEWS[(active + 1) % REVIEWS.length],
    REVIEWS[(active + 2) % REVIEWS.length],
    REVIEWS[(active + 3) % REVIEWS.length],
  ];

  return (
      <section className="bg-white py-16 md:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Client Testimonials
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Trusted Legal Representation <br />
            Across YSR Kadapa District
          </h2>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-xl">
            Hear directly from clients who have experienced professional,
            ethical, and result-oriented legal services backed by{" "}
            <strong>36+ years of courtroom practice</strong>.
          </p>

          {/* ARROWS */}
          <div className="mt-8 md:mt-10 flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 md:h-11 md:w-11 rounded-full border bg-white shadow hover:bg-slate-100 transition flex items-center justify-center"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 md:h-11 md:w-11 rounded-full border bg-white shadow hover:bg-slate-100 transition flex items-center justify-center"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT — 2 COLUMN GRID (STABLE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {cards.map((review, i) => (
            <AnimatedCard
              key={review.name}
              review={review}
              stagger={i % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* SEO GEO CONTENT */}
      <p className="sr-only">
        Testimonials for Advocate Rajesh Kumar Reddy, senior advocate practicing
        in Kadapa District Court, Family Court, Sessions Court, and High Court of
        Andhra Pradesh. Legal services include civil litigation, criminal
        defense, family court matters, property disputes, cheque bounce cases,
        revenue matters, bail applications, appeals, and revisions across Kadapa,
        Proddatur, Badvel, Pulivendula, Rajampet, and surrounding regions of YSR
        Kadapa District.
      </p>
    </section>
  );
}

/* CARD WITH PROPER ANIMATION */
function AnimatedCard({ review, stagger }) {
  return (
    <div
      className={`transition-all duration-500 ease-out ${
        stagger ? "md:mt-10" : ""
      }`}
    >
      <div className="rounded-2xl md:rounded-3xl bg-white px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] animate-fade-slide">
        {/* STARS */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-base">★</span>
          ))}
        </div>

        {/* TEXT */}
        <p className="text-slate-700 text-[15px] leading-relaxed">
          {review.text}
        </p>

        {/* CLIENT */}
        <div className="mt-5 flex items-center gap-3">
          <div className="h-9 w-9 aspect-square rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-700 text-sm">
            {review.name.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-slate-900 text-sm">
              {review.name}
            </p>
            <p className="text-blue-600 text-sm">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
