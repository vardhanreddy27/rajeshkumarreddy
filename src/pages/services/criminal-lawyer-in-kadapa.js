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

export default function CriminalLawyerKadapaPage() {
  const title = "Criminal Lawyer in Kadapa | Advocate Rajesh Kumar Reddy";
  const description =
    "Experienced criminal lawyer in Kadapa for bail, trials, and defense strategy with 36+ years of courtroom practice and disciplined case preparation.";
  const path = "/services/criminal-lawyer-in-kadapa";
  const keywords =
    "criminal lawyer Kadapa, criminal advocate Kadapa, bail lawyer Kadapa, Kadapa District Court criminal defense, Kadapa criminal case";

  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: "Criminal Defense Service",
      description,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema([
      {
        question: "How quickly should I contact a criminal lawyer?",
        answer:
          "Contact a lawyer immediately after an FIR, notice, or arrest risk. Early advice protects statements, preserves evidence, and supports bail strategy.",
      },
      {
        question: "Do you handle bail applications in Kadapa?",
        answer:
          "Yes. Bail filings are prepared with detailed affidavits and supporting records to improve the chance of timely relief.",
      },
      {
        question: "What documents should I bring for a criminal case?",
        answer:
          "Bring FIR copies, notices, identity proof, medical reports, and any supporting communications or witness details.",
      },
      {
        question: "Can criminal and civil matters be handled together?",
        answer:
          "Yes. A coordinated strategy is often needed when allegations overlap with property or financial disputes.",
      },
    ]),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Criminal Lawyer", href: path },
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
            <h1 className="hero-title">Criminal Lawyer in Kadapa</h1>
            <p className="hero-subtitle">
              Immediate response, careful evidence review, and disciplined
              courtroom strategy for criminal cases. Rajesh Kumar Reddy offers
              36+ years of trial experience and steady local representation.
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
              alt="Courtroom illustration"
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
          <h2>Focused criminal defense with local court knowledge</h2>
          <p>
            When an FIR or complaint is filed, the first steps are critical. In
            Kadapa, early legal guidance can protect rights and prevent mistakes
            that become difficult to correct later. Rajesh Kumar Reddy works
            closely with clients to understand the facts, review documents, and
            shape a defense plan aligned with the case timeline.
          </p>
          <p>
            His chambers are beside Kadapa District Court, which helps with
            quick coordination, clear filing processes, and courtroom readiness
            for bail hearings, remand matters, and trial schedules.
          </p>
          <h2>Bail strategy and early relief</h2>
          <p>
            A strong bail strategy depends on the factual matrix, medical or
            employment grounds, and consistent documentation. Applications are
            prepared with clear affidavits, supporting records, and tailored
            arguments to reduce risk and delay. For urgent matters in Kadapa,
            immediate preparation can make the difference between custody and
            release.
          </p>
          <p>
            The office supports clients from Kadapa town, YSR Kadapa District,
            and nearby areas such as Badvel and Sidhout with quick access to
            Kadapa District Court for bail hearings and trial listings.
          </p>
          <h2>Trial planning and evidence preparation</h2>
          <p>
            Criminal trials require careful witness preparation, clear cross
            examination objectives, and disciplined record keeping. The office
            prepares a structured case file, timelines, and evidence summaries
            that allow focused arguments at every stage. This approach reduces
            surprises and strengthens the defense narrative.
          </p>
          <p>
            Where cases involve property or financial disputes, criminal
            allegations may overlap with civil claims. In those situations, the
            office coordinates a unified legal strategy to avoid conflicting
            positions and strengthen overall outcomes. You can also review the
            dedicated{" "}
            <Link href="/services/civil-lawyer-in-kadapa">
              civil litigation service
            </Link>{" "}
            for related guidance.
          </p>
          <h2>Document discipline and witness planning</h2>
          <p>
            Strong defense begins with a clean record of facts. The office
            reviews FIR copies, notices, medical records, and correspondence to
            build a clear timeline. Witness preparation focuses on consistency,
            credibility, and practical courtroom questions. This disciplined
            preparation supports cross examination, reduces confusion, and keeps
            the defense aligned from the first hearing to final arguments.
          </p>
          <h2>Client communication and case discipline</h2>
          <p>
            Clear updates matter as much as strong arguments. Clients receive
            realistic timelines, written summaries of key events, and clear
            expectations for each hearing. This client focused process is
            especially important in Kadapa where court schedules can change and
            immediate responses may be needed.
          </p>
          <p>
            After interim orders or bail, the office guides clients through
            compliance steps such as surety documentation, reporting conditions,
            and follow up filings. These details protect the relief obtained and
            prevent avoidable violations that could weaken the defense.
          </p>
          <h2>Local leadership and courtroom credibility</h2>
          <p>
            Rajesh Kumar Reddy served as former President of the Kadapa District
            Bar Association and played a leadership role in the Samaikyandhra
            movement. His experience and courtroom discipline reflect decades of
            trusted advocacy and steady representation.
          </p>
          <p>
            Clients value a calm, strategic approach that protects reputation
            and focuses on long term outcomes. Each case is handled with
            seriousness, from initial inquiry to trial arguments and final
            judgment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceLinks currentSlug="criminal-lawyer-in-kadapa" />
          <div className="callout">
            <p className="prose">
              <strong>Need urgent criminal defense?</strong> Call
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
              <h3>How quickly should I contact a criminal lawyer?</h3>
              <p className="prose">
                Immediately after an FIR, notice, or arrest risk. Early advice
                helps protect statements, preserve evidence, and plan for bail.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you handle bail applications in Kadapa?</h3>
              <p className="prose">
                Yes. Bail strategy is prepared with detailed affidavits and
                supporting records to improve the chance of timely relief.
              </p>
            </div>
            <div className="faq-item">
              <h3>What documents should I bring for a criminal case?</h3>
              <p className="prose">
                Bring FIR copies, notices, identity proof, medical reports, and
                any supporting communications or witness details.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can criminal and civil matters be handled together?</h3>
              <p className="prose">
                Yes. A coordinated approach is often needed when allegations
                overlap with property or financial disputes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
