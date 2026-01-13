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

export default function ChequeBounceKadapaPage() {
  const title = "Cheque Bounce Lawyer Kadapa | Advocate Rajesh Kumar Reddy";
  const description =
    "Cheque bounce lawyer in Kadapa for Section 138 notices, complaints, and trial representation with disciplined document preparation.";
  const path = "/services/cheque-bounce-lawyer-kadapa";
  const keywords =
    "cheque bounce lawyer Kadapa, section 138 lawyer Kadapa, Kadapa cheque bounce case, Kadapa District Court cheque bounce, Kadapa lawyer for cheque bounce";

  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: "Cheque Bounce Service",
      description,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema([
      {
        question: "What is the time limit for a cheque bounce notice?",
        answer:
          "A legal notice must be issued within the statutory period from the date of the bank memo. Timely action is essential.",
      },
      {
        question: "What documents are needed for a Section 138 case?",
        answer:
          "Original cheque, return memo, notice copy, postal proof, and written communications related to the payment are required.",
      },
      {
        question: "Do you handle cheque bounce matters in Kadapa?",
        answer:
          "Yes. The office manages notices, complaints, and trial work with structured documentation and clear timelines.",
      },
      {
        question: "Can a cheque bounce case be settled?",
        answer:
          "Many cases are resolved through negotiated settlement when both parties agree on payment terms. Strategy is tailored to your goals.",
      },
    ]),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Cheque Bounce Lawyer", href: path },
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
            <h1 className="hero-title">Cheque Bounce Lawyer Kadapa</h1>
            <p className="hero-subtitle">
              Clear timelines, accurate notices, and strong court representation
              for Section 138 cheque bounce matters. Rajesh Kumar Reddy provides
              36+ years of litigation experience and disciplined case handling.
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
              alt="Cheque bounce guidance"
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
          <h2>Structured Section 138 guidance</h2>
          <p>
            Cheque bounce cases require strict compliance with timelines for
            notice, response, and complaint filing. In Kadapa, these matters move
            quickly when documents are complete and filings are precise. Rajesh
            Kumar Reddy prepares notices and complaints with careful attention
            to dates, bank memos, and proof of service.
          </p>
          <p>
            His chambers are beside Kadapa District Court, enabling quick
            coordination for filings and hearings. This proximity helps maintain
            momentum from notice stage to trial.
          </p>
          <h2>What the process involves</h2>
          <p>
            A cheque bounce case begins with a legal notice within the statutory
            period. If there is no compliant response, a complaint is filed with
            supporting documents such as the cheque, return memo, account
            statement, and notice proof. Each step must be accurate to avoid
            procedural issues.
          </p>
          <p>
            The office supports clients across Kadapa and YSR Kadapa District,
            ensuring filings align with Kadapa District Court procedure and
            timelines for Section 138 matters.
          </p>
          <p>
            The office manages the process end to end, from notice drafting to
            evidence and final arguments. Clients in Kadapa benefit from a clear
            timeline and a structured checklist of required documents.
          </p>
          <p>
            For accused parties, a timely and well crafted reply can resolve the
            matter or narrow disputes. The office reviews bank statements,
            transaction records, and communications to frame a consistent
            response, reducing the risk of procedural errors.
          </p>
          <p>
            Clients also receive guidance on record keeping for future payments,
            including acknowledgment receipts and clear settlement terms. This
            documentation helps avoid repeat disputes and supports enforceable
            agreements.
          </p>
          <h2>Evidence, negotiation, and settlement</h2>
          <p>
            Strong evidence includes the original cheque, bank memo, notice
            records, and any written acknowledgments. The office reviews these
            documents early and plans a strategy that supports settlement or
            trial based on your goals.
          </p>
          <p>
            Court representation includes framing the complaint, preparing
            evidence affidavits, and guiding witness examination. When
            settlement is reached, compounding filings and compliance documents
            are prepared to ensure the matter concludes properly.
          </p>
          <p>
            If the matter overlaps with civil recovery, a coordinated approach
            is essential. You can review the civil litigation service or the
            best lawyer service to understand broader recovery options.
          </p>
          <p>
            Learn more about the{" "}
            <Link href="/services/civil-lawyer-in-kadapa">
              civil litigation service
            </Link>{" "}
            for recovery strategy, or explore the{" "}
            <Link href="/services/best-lawyer-in-kadapa">
              best lawyer service
            </Link>{" "}
            for broader legal planning.
          </p>
          <h2>Local credibility and disciplined preparation</h2>
          <p>
            Rajesh Kumar Reddy served as former President of the Kadapa District
            Bar Association and was instrumental in establishing the State Bank
            of India branch inside Kadapa District Court. His long standing
            leadership adds credibility and courtroom strength for cheque bounce
            matters.
          </p>
          <p>
            Each case is handled with careful documentation and clear client
            updates, ensuring you know the next steps and expected timeframes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceLinks currentSlug="cheque-bounce-lawyer-kadapa" />
          <div className="callout">
            <p className="prose">
              <strong>Need help with a cheque bounce case?</strong> Call
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
              <h3>What is the time limit for a cheque bounce notice?</h3>
              <p className="prose">
                A legal notice must be issued within the statutory period from
                the date of the bank memo. Timely action is essential.
              </p>
            </div>
            <div className="faq-item">
              <h3>What documents are needed for a Section 138 case?</h3>
              <p className="prose">
                Original cheque, return memo, notice copy, postal proof, and any
                written communications related to the payment.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you handle cheque bounce matters in Kadapa?</h3>
              <p className="prose">
                Yes. The office manages notices, complaints, and trial work with
                structured documentation and clear timelines.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can a cheque bounce case be settled?</h3>
              <p className="prose">
                Many cases are resolved through negotiated settlement when both
                parties agree on payment terms. Strategy is tailored to your
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
