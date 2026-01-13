import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/site-data";

export default function PracticeAreaPage({ page, related, faqs }) {
  const quickFacts = [
    {
      title: "Office Location",
      value: "Beside Kadapa District Court, Kadapa 516001",
    },
    {
      title: "Experience",
      value: `${BUSINESS.experience} | Enrollment ${BUSINESS.enrollment}`,
    },
    {
      title: "Service Coverage",
      value: "Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, Sidhout",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">{page.title}</h1>
            <p className="hero-subtitle">{page.heroSubtitle}</p>
            <ul className="mt-4 mb-4 space-y-2 text-sm text-slate-600">
              <li>
                Chambers beside Kadapa District Court for quick filings and
                hearing readiness.
              </li>
              <li>
                Structured document review with clear timelines before each
                hearing stage.
              </li>
              <li>
                Serving clients across Kadapa, Proddatur, Badvel, Pulivendula,
                Rajampet, and nearby YSR Kadapa District towns.
              </li>
            </ul>
            <div className="hero-actions">
              <a className="cta-primary" href={`tel:${BUSINESS.phoneTel}`}>
                Call {BUSINESS.phone}
              </a>
              <Link className="cta-secondary" href="/contact">
                Visit Office
              </Link>
            </div>
            <div className="badge-row">
              <span className="badge">36+ Years Experience</span>
              <span className="badge">Kadapa District Court</span>
              <span className="badge">YSR Kadapa District</span>
            </div>
          </div>

          <div className="hero-card">
            <Image
              src={page.image}
              alt={`${page.service} support in Kadapa`}
              width={1200}
              height={720}
              sizes="(max-width: 860px) 100vw, 520px"
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards three">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="card">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {fact.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          {page.introHeading && page.introSteps?.length ? (
            <div className="max-w-3xl">
              <h2 className="section-title">{page.introHeading}</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {page.introSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="cards three mt-8">
            {page.highlights.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="prose">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="card">
              <h3>Matters handled in Kadapa</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {page.caseTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Process and case strategy</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {page.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Documents to prepare</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {page.documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <h2 className="section-title">Kadapa local court focus</h2>
            <p className="prose">{page.localFocus}</p>
            <p className="prose">
              Clients from Kadapa, Proddatur, Badvel, Pulivendula, Rajampet, and
              nearby YSR Kadapa District towns reach the office beside Kadapa
              District Court for clear guidance and court-ready preparation in
              Andhra Pradesh.
            </p>
            <p className="prose">
              Early consultation helps secure timelines, avoid procedural
              delays, and build a complete record suited for Kadapa courts and
              appellate review when required.
            </p>
            <div className="badge-row">
              <span className="badge">{page.service}</span>
              <span className="badge">Kadapa District Court</span>
              <span className="badge">Andhra Pradesh</span>
              <span className="badge">YSR Kadapa District</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title mb-4">Related Practice Areas</h2>
          <div className="cards three">
            {related.map((item) => (
              <div key={item.slug} className="card">
                <h3>{item.service}</h3>
                <p className="prose">{item.summary}</p>
                <Link className="cta-secondary" href={`/${item.slug}`}>
                  View Practice Area
                </Link>
              </div>
            ))}
          </div>

          <div className="callout mb-4">
            <p className="prose">
              <strong>Need guidance for a legal matter in Kadapa?</strong> Call{" "}
              {BUSINESS.phone} or visit the office beside Kadapa District Court.
            </p>
          </div>

        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="cards">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p className="prose">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
