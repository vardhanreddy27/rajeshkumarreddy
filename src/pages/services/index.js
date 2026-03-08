import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
import { SERVICES } from "@/lib/site-data";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";

export default function ServicesPage() {
  const title = "Legal Services in Kadapa | Rajesh Kumar Reddy Advocate Office";
  const description =
    "Criminal defense, civil litigation, property disputes, and cheque bounce matters handled by a senior advocate in Kadapa with 36+ years of experience.";
  const path = "/services";
  const keywords =
    "Kadapa legal services, Kadapa lawyer services, criminal lawyer Kadapa, civil lawyer Kadapa, property dispute lawyer Kadapa, cheque bounce lawyer Kadapa";

  const schema = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
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
            <h1 className="hero-title">Legal Services in Kadapa</h1>
            <p className="hero-subtitle">
              Practical legal guidance with strong courtroom presence. Each
              service below reflects decades of focused work in criminal, civil,
              property, and cheque bounce matters.
            </p>
            <div className="hero-actions">
              <Link className="cta-primary" href="/contact">
                Schedule a Consultation
              </Link>
              <Link className="cta-secondary" href="/blog">
                Read Local Legal Guides
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <Image
              src="/images/hero-kadapa.svg"
              alt="Kadapa courthouse skyline illustration"
              width={1200}
              height={720}
              sizes="(max-width: 860px) 100vw, 520px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Practice Areas</h2>
          <div className="cards three">
            {SERVICES.map((service) => (
              <div key={service.slug} className="card">
                <h3>{service.title}</h3>
                <p className="prose">{service.description}</p>
                <Link className="cta-secondary" href={service.href}>
                  View Service
                </Link>
              </div>
            ))}
          </div>
          <div className="callout">
            <p className="prose">
              Each matter begins with a focused consultation, clear checklist of
              documents, and a strategy aligned to your goals and timeline.
            </p>
          </div>
          <p className="prose">
            Clients across Kadapa, YSR Kadapa District, and nearby towns such as
            Badvel and Sidhout rely on experienced local representation with
            direct access to Kadapa District Court.
          </p>
        </div>
      </section>
    </>
  );
}
