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

export default function CivilLawyerKadapaPage() {
  const title = "Civil Lawyer in Kadapa | Advocate Rajesh Kumar Reddy";
  const description =
    "Civil lawyer in Kadapa for injunctions, recovery suits, partition, and contract disputes with 36+ years of courtroom experience and local court expertise.";
  const path = "/services/civil-lawyer-in-kadapa";
  const keywords =
    "civil lawyer Kadapa, civil advocate Kadapa, property civil dispute Kadapa, Kadapa District Court civil litigation, Kadapa civil case";

  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: "Civil Litigation Service",
      description,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema([
      {
        question: "What civil cases do you handle in Kadapa?",
        answer:
          "The office handles injunctions, recovery suits, partition, property disputes, contract issues, and family related civil matters.",
      },
      {
        question: "How long does a civil case take?",
        answer:
          "Timelines depend on evidence, court schedules, and complexity. A realistic estimate is shared after reviewing documents.",
      },
      {
        question: "Do you help with pre litigation notices?",
        answer:
          "Yes. Drafting strong notices can resolve disputes early or strengthen a future case.",
      },
      {
        question: "What documents should I bring for a civil consultation?",
        answer:
          "Bring agreements, notices, title deeds, payment records, and any prior court orders related to the dispute.",
      },
    ]),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Civil Lawyer", href: path },
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
            <h1 className="hero-title">Civil Lawyer in Kadapa</h1>
            <p className="hero-subtitle">
              Clear pleadings, strong evidence, and disciplined courtroom
              preparation for civil disputes. Rajesh Kumar Reddy delivers 36+
              years of litigation experience and practical case strategy.
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
              src="/images/office-kadapa.svg"
              alt="Advocate office"
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
          <h2>Civil litigation with a clear plan</h2>
          <p>
            Civil disputes often involve property, contracts, family rights, and
            recovery of money. In Kadapa, a well structured civil case depends
            on accurate pleadings, timely filings, and strong documentary
            support. Rajesh Kumar Reddy prepares a case file that aligns facts
            with the relief you need.
          </p>
          <p>
            Regular appearances before Kadapa District Court provide a clear
            understanding of local procedure and listing practices. This local
            familiarity helps avoid technical objections and delays, especially
            in injunctions and urgent relief matters.
          </p>
          <h2>Injunctions, recovery suits, and partition matters</h2>
          <p>
            Injunctions require quick, precise drafting supported by documents
            and affidavits. Recovery suits need strong financial records and a
            clear calculation of dues. Partition and property disputes depend
            on title tracing, genealogy, and document verification. Each matter
            is prepared with a focused checklist to keep the case on track.
          </p>
          <p>
            Clients across Kadapa and YSR Kadapa District rely on local court
            familiarity and a clear civil strategy aligned with Kadapa District
            Court procedures.
          </p>
          <p>
            If a dispute involves criminal allegations or cheque bounce issues,
            a coordinated legal strategy helps protect the civil claim. You can
            review the{" "}
            <Link href="/services/criminal-lawyer-in-kadapa">
              criminal defense service
            </Link>{" "}
            or the{" "}
            <Link href="/services/cheque-bounce-lawyer-kadapa">
              cheque bounce service
            </Link>{" "}
            to understand how related matters are managed.
          </p>
          <h2>Notices, mediation, and pre litigation steps</h2>
          <p>
            Many civil disputes begin with a strong legal notice that outlines
            facts, relief, and timelines. The office drafts notices with clear
            demands, supporting documents, and a realistic settlement window.
            When mediation is possible, you receive guidance on negotiation
            strategy and a clear record of any agreed terms, reducing future
            confusion or delay.
          </p>
          <h2>Evidence discipline and document strength</h2>
          <p>
            Civil outcomes often turn on documents. The office reviews title
            deeds, agreements, notices, and communications to build a reliable
            evidentiary trail. Witness preparation, cross examination goals, and
            written arguments are planned early to avoid last minute weakness.
          </p>
          <h2>Settlement options and practical advice</h2>
          <p>
            Many civil disputes can be resolved through negotiation when both
            parties have clear documentation. Clients in Kadapa receive balanced
            advice on settlement versus trial, with realistic timelines and cost
            estimates before taking a final decision.
          </p>
          <h2>Decree execution and enforcement</h2>
          <p>
            A civil case does not always end with a judgment. Execution steps
            such as attachments, compliance monitoring, and recovery processes
            require careful follow up. The office prepares execution petitions
            and tracks timelines to ensure the relief granted by the court is
            implemented in practice.
          </p>
          <h2>Local leadership and trusted representation</h2>
          <p>
            Rajesh Kumar Reddy served as former President of the Kadapa District
            Bar Association and was instrumental in establishing the State Bank
            of India branch inside Kadapa District Court. This leadership and
            long standing service reflect reliability in both courtroom and
            community matters.
          </p>
          <p>
            With 36+ years of practice, his approach emphasizes documentation,
            procedure, and consistent case follow up, giving clients clarity at
            each stage of civil litigation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceLinks currentSlug="civil-lawyer-in-kadapa" />
          <div className="callout">
            <p className="prose">
              <strong>Need civil litigation support?</strong> Call
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
              <h3>What civil cases do you handle in Kadapa?</h3>
              <p className="prose">
                The office handles injunctions, recovery suits, partition,
                property disputes, contract issues, and family related civil
                matters.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does a civil case take?</h3>
              <p className="prose">
                Timelines depend on evidence, court schedules, and complexity.
                A realistic estimate is shared after reviewing documents.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you help with pre litigation notices?</h3>
              <p className="prose">
                Yes. Drafting strong notices can resolve disputes early or
                strengthen a future case.
              </p>
            </div>
            <div className="faq-item">
              <h3>What documents should I bring for a civil consultation?</h3>
              <p className="prose">
                Bring agreements, notices, title deeds, payment records, and any
                prior court orders related to the dispute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
