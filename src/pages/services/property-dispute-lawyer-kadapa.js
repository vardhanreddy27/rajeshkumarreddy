import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
import ServiceLinks from "@/components/ServiceLinks";
import { BUSINESS, SITE_URL } from "@/lib/site-data";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLegalServiceSchema,
  getServiceSchema,
} from "@/lib/schema";

export default function PropertyDisputeKadapaPage() {
  const title = "Property Dispute Lawyer Kadapa | Advocate Rajesh Kumar Reddy";
  const description =
    "Property dispute lawyer in Kadapa for title verification, injunctions, partition suits, and possession matters with 36+ years of courtroom experience.";
  const path = "/services/property-dispute-lawyer-kadapa";
  const keywords =
    "property dispute lawyer Kadapa, land dispute Kadapa, partition suit Kadapa, Kadapa District Court property case, Kadapa property lawyer";

  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: "Property Dispute Service",
      description,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema([
      {
        question: "What property disputes do you handle in Kadapa?",
        answer:
          "The office handles partition suits, title declaration, boundary disputes, possession recovery, and injunction matters.",
      },
      {
        question: "Which documents are important for a property case?",
        answer:
          "Sale deeds, encumbrance certificates, revenue records, tax receipts, and family settlement documents are essential.",
      },
      {
        question: "Can I get an injunction quickly?",
        answer:
          "Interim relief depends on urgency and document strength. A clear filing plan improves the chance of quick orders.",
      },
      {
        question: "Do you also handle related civil matters?",
        answer:
          "Yes. Property disputes often overlap with civil suits, and a coordinated strategy is provided when needed.",
      },
    ]),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Property Dispute Lawyer", href: path },
    ]),
  ];

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={schema}
        keywords={keywords}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">Property Dispute Lawyer Kadapa</h1>
            <p className="hero-subtitle">
              Detailed title review, injunction planning, and strong courtroom
              preparation for land and property disputes. Rajesh Kumar Reddy
              offers 36+ years of litigation experience and disciplined case
              strategy.
            </p>
            <div className="hero-actions">
              <a className="cta-primary" href={`tel:${BUSINESS.phoneTel}`}>
                Call {BUSINESS.phone}
              </a>
              <Link className="cta-secondary" href="/contact">
                Visit Office
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <Image
              src="/images/hero-kadapa.svg"
              alt="Property dispute help"
              width={1200}
              height={720}
              sizes="(max-width: 860px) 100vw, 520px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container prose">
          <h2>Structured guidance for property disputes</h2>
          <p>
            Property disputes can involve boundaries, ownership claims, partition
            rights, or possession issues. In Kadapa, these cases succeed when the
            title history is clear, documents are organized, and filings are
            aligned with the relief sought. Rajesh Kumar Reddy builds a case
            plan around title verification, factual timelines, and witness
            preparation.
          </p>
          <p>
            His chambers are beside Kadapa District Court, providing direct
            insight into local filing practices and the pace of interim relief
            matters. This helps prevent technical delays and strengthens early
            hearings where injunctions or status quo orders are requested.
          </p>
          <h2>Key property matters handled</h2>
          <p>
            The office manages partition suits, declaration of title, recovery
            of possession, boundary issues, and injunction matters. Each case is
            prepared with a document checklist that includes sale deeds, encumbrance
            certificates, revenue records, and family settlement documents.
          </p>
          <p>
            Clients in Kadapa town and YSR Kadapa District depend on local court
            knowledge and careful title review to resolve property disputes with
            confidence.
          </p>
          <p>
            When property disputes overlap with civil recovery or family matters,
            a coordinated approach is essential. You may also review the civil
            litigation service or the best lawyer service for broader guidance.
          </p>
          <p>
            Learn more about the{" "}
            <Link href="/services/civil-lawyer-in-kadapa">
              civil litigation service
            </Link>{" "}
            for injunction focused strategy, or explore the{" "}
            <Link href="/services/best-lawyer-in-kadapa">
              best lawyer service
            </Link>{" "}
            for a broader view of legal planning across dispute types.
          </p>
          <h2>Document verification and evidence discipline</h2>
          <p>
            Property cases turn on documentation. The office verifies title
            chains, checks registration records, reviews tax receipts, and
            prepares affidavits for key witnesses. These steps reduce factual
            confusion and help the court see a clear narrative.
          </p>
          <p>
            Survey records, mutation entries, and revenue extracts are reviewed
            for accuracy before filing. This document discipline helps frame
            interim relief requests and supports a consistent case narrative
            during trial.
          </p>
          <p>
            In partition matters, genealogy charts, family settlements, and
            commissioner processes are prepared with detailed property schedules.
            This clarity reduces disputes over measurements and boundaries and
            supports fair division when the court issues directions.
          </p>
          <p>
            Preventive steps such as cautionary notices, boundary demarcation,
            and safe preservation of original deeds are also explained. These
            measures reduce escalation and protect your position while the case
            is pending and hearings progress.
          </p>
          <p>
            Clients in Kadapa benefit from a structured approach that avoids
            missing documents and delays in interim applications.
          </p>
          <h2>Local credibility and leadership</h2>
          <p>
            Rajesh Kumar Reddy served as former President of the Kadapa District
            Bar Association and was instrumental in establishing the State Bank
            of India branch inside Kadapa District Court. His long standing
            leadership reflects trusted courtroom presence and community service.
          </p>
          <p>
            Every property dispute is handled with careful preparation and clear
            communication. The goal is to secure relief that protects ownership
            rights while keeping the process transparent for clients.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceLinks currentSlug="property-dispute-lawyer-kadapa" />
          <div className="callout">
            <p className="prose">
              <strong>Need urgent property relief?</strong> Call
              {" "}{BUSINESS.phone} or visit the office at {BUSINESS.address}.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="cards">
            <div className="faq-item">
              <h3>What property disputes do you handle in Kadapa?</h3>
              <p className="prose">
                The office handles partition suits, title declaration, boundary
                disputes, possession recovery, and injunction matters.
              </p>
            </div>
            <div className="faq-item">
              <h3>Which documents are important for a property case?</h3>
              <p className="prose">
                Sale deeds, encumbrance certificates, revenue records, tax
                receipts, and any family settlement documents are essential.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I get an injunction quickly?</h3>
              <p className="prose">
                Interim relief depends on the urgency and document strength. A
                clear filing and evidence plan improves the chance of quick
                orders.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you also handle related civil matters?</h3>
              <p className="prose">
                Yes. Property disputes often overlap with civil suits, and a
                coordinated strategy is provided when needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
