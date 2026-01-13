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

export default function BestLawyerKadapaPage() {
  const title = "Best Lawyer in Kadapa | Advocate Rajesh Kumar Reddy";
  const description =
    "Senior advocate for criminal, civil, property, and cheque bounce matters in Kadapa with 36+ years of courtroom experience and trusted local representation.";
  const path = "/services/best-lawyer-in-kadapa";
  const keywords =
    "best lawyer in Kadapa, advocate in Kadapa, senior lawyer Kadapa, Kadapa District Court advocate, Kadapa legal services";

  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: "Senior Advocate Service",
      description,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema([
      {
        question: "How do I choose the best lawyer for my case?",
        answer:
          "Choose an advocate with experience in your specific case type, clear advice on evidence, and realistic timelines. A strong lawyer explains the process and prepares documents carefully from the start.",
      },
      {
        question: "Do you handle both criminal and civil matters?",
        answer:
          "Yes. The office handles criminal defense, civil litigation, property disputes, cheque bounce cases, and family matters with focused preparation for each stage.",
      },
      {
        question: "How soon can I get a consultation?",
        answer:
          "Consultations are scheduled promptly based on urgency. Bring key documents and a clear timeline so the next steps can be planned accurately.",
      },
      {
        question: "What documents should I bring for the first meeting?",
        answer:
          "Bring notices, agreements, identity proof, previous case papers, and any supporting evidence. A checklist is provided based on your matter.",
      },
    ]),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Best Lawyer", href: path },
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
            <h1 className="hero-title">Best Lawyer in Kadapa</h1>
            <p className="hero-subtitle">
              Choosing the right advocate is about trust, clarity, and courtroom
              discipline. Rajesh Kumar Reddy offers 36+ years of practice with
              focused guidance for criminal, civil, property, and cheque bounce
              matters.
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
          <h2>Trusted legal guidance with local court strength</h2>
          <p>
            Finding the best lawyer is about more than reputation. In Kadapa,
            clients look for a steady advocate who listens to the facts,
            organizes evidence, and argues with confidence in every hearing.
            Rajesh Kumar Reddy has chambers beside Kadapa District Court, which
            keeps him close to daily listings, registry requirements, and the
            pace of local litigation.
          </p>
          <p>
            A senior advocate builds value through preparation and clear
            strategy. You receive realistic timelines, practical options, and
            updates that explain what the next step means for your case. This
            approach helps families and businesses in Kadapa make informed
            decisions and avoid unnecessary delay.
          </p>
          <h2>Practice areas handled with a focused plan</h2>
          <p>
            Criminal matters need quick, well documented action at the earliest
            stage. Civil disputes require precise pleadings, well organized
            documents, and strong interim relief planning. Rajesh Kumar Reddy
            handles both streams with disciplined case management and a focus on
            outcomes.
          </p>
          <p>
            Clients across Kadapa town and YSR Kadapa District rely on clear
            timelines, local court access, and a practical strategy that aligns
            with Kadapa District Court procedures.
          </p>
          <p>
            Explore the dedicated
            {" "}
            <Link href="/services/criminal-lawyer-in-kadapa">
              criminal defense service
            </Link>
            {" "}
            and the
            {" "}
            <Link href="/services/civil-lawyer-in-kadapa">
              civil litigation service
            </Link>
            to understand how each type of matter is prepared, argued, and
            resolved.
          </p>
          <h2>Property disputes and cheque bounce matters</h2>
          <p>
            Property disputes demand careful title review, document scrutiny, and
            a clear strategy for injunctions or partition. Cheque bounce cases
            require strict timing under legal notice and complaint stages. With
            strong document control and courtroom readiness, clients in Kadapa
            benefit from a methodical, reliable process.
          </p>
          <ul>
            <li>Case intake focused on facts, documents, and immediate steps.</li>
            <li>Clear checklists for evidence, notices, and procedural filings.</li>
            <li>Hearing preparation that anticipates objections and defenses.</li>
          </ul>
          <h2>Courtroom preparation and professional leadership</h2>
          <p>
            Regular appearances before Kadapa District Court provide insight
            into local procedure and listing practices. This helps align filings
            with court standards and reduces avoidable delays.
          </p>
          <p>
            Rajesh Kumar Reddy served as former President of the Kadapa District
            Bar Association and was instrumental in establishing the State Bank
            of India branch inside Kadapa District Court. These roles reflect a
            long standing commitment to the legal community and client service.
          </p>
          <h2>What to expect during your consultation</h2>
          <p>
            A focused consultation clarifies the factual timeline, the strength
            of documents, and the most effective legal path. You receive a plan
            for immediate actions, realistic timelines, and a checklist that
            keeps your matter on track. If you need urgent help in Kadapa, the
            office can arrange prompt appointments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceLinks currentSlug="best-lawyer-in-kadapa" />
          <div className="callout">
            <p className="prose">
              <strong>Ready to speak with a senior advocate?</strong> Call
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
              <h3>How do I choose the best lawyer for my case?</h3>
              <p className="prose">
                Look for experience in your specific case type, clear advice on
                evidence, and transparent timelines. A strong advocate explains
                the legal process and prepares documents carefully from the
                start.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you handle both criminal and civil matters?</h3>
              <p className="prose">
                Yes. The office manages criminal defense, civil litigation,
                property disputes, cheque bounce cases, and family matters with
                focused preparation for each stage of the case.
              </p>
            </div>
            <div className="faq-item">
              <h3>How soon can I get a consultation?</h3>
              <p className="prose">
                Consultations are scheduled promptly based on urgency. Bring key
                documents and a clear timeline so the next steps can be planned
                with accuracy.
              </p>
            </div>
            <div className="faq-item">
              <h3>What documents should I bring for the first meeting?</h3>
              <p className="prose">
                Bring notices, agreements, identity proof, previous case papers,
                and any supporting evidence. A document checklist will be
                provided for your specific matter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
