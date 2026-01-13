import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
import { IoCallOutline } from "react-icons/io5";
import { BUSINESS, COURTS, SERVICES, SOCIALS } from "@/lib/site-data";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";
import PracticeMarquee from "@/components/PracticeMarquee";
import HeroStats from "@/components/HeroStats";
import BentoGridLeadership from "@/components/bento-grid-leadership";
import FaqSection from "@/components/FaqSection";
import ClientsReviewSection from "@/components/ClientsReviewSection";
import Heromain from "@/components/Heromain";

export default function HomePage() {
  const title = "Advocate in Kadapa | Rajesh Kumar Reddy Advocate Office";
  const description =
    "Senior advocate in Kadapa with 36+ years of courtroom experience. Civil, criminal, family, property, revenue, bail, appeals, and litigation matters near Kadapa District Court.";
  const path = "/";
  const keywords =
    "advocate in Kadapa, criminal lawyer Kadapa, civil lawyer Kadapa, property dispute lawyer Kadapa, cheque bounce lawyer Kadapa, bail lawyer Kadapa, Kadapa District Court";

  const schema = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([{ name: "Home", href: "/" }]),
  ];

  const courtImageOverrides = {
    "Kadapa District Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080390.jpg",
    "Kadapa (District Headquarters) Court":
      "http://gazeis.in/wp-content/uploads/LawStates/SouthStates/Andhra-Pradesh-Kadapa-District-and-Session-Courts.jpg",
    "Railway Kodur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080599.jpg",
    "Jammalamadugu Junior Civil Judge Court":
      "https://files.yappe.in/place/full/jammalamadugu-civil-court-8974915.webp",
    "Mydukur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080550.jpg",
    "Sidhout Junior Civil Judge Court":
      "http://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080568.jpg",
    "Nandalur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080512.jpg",
    "Rayachoty Court (Annamayya District HQ)":
      "https://media.andhrajyothy.com/media/2023/20231205/9rct27_jpeg_c3a3defcbb.gif",

    "Lakkireddipalli Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091384.jpg",

   "Pulivendula Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091380.jpg",
"Kamalapuram Junior Civil Judge Court":
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyFhefRkT65hz51w3pWW3wFufL38oalJOOlmEQrZST7zKonGC87hkSC85PclCHy0a57GI2bPHbJxOHU2UEgRwFnYhEycqcEQIlv2A9mb6SWcz0oquwFoRPNkX0-JoncyA8fYadVQA=s1360-w1360-h1020-rw",
"Proddatur Court":
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzMgasYMK30ON0DNQy8IFIE8OotHVtgCGI0Eb1EqYPBL-v8ogmq8YNwp2ePVroQa7QSpCmtxLP46GfTJs1A1wLDNbgR6QcIESenXgB4aL0pZm-FtLNzIlONvif7hUUTz8SSXsyRTg=s1360-w1360-h1020-rw",

"Rajampet Court":
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwwK1zH0zH7gqMPftzab4sSIqxU4MXlfJNvfyWvmqD65fRg8GEZPxMFnSu6ILhdwU9oaUndMUh_UXb__oQpNH2_6ZQsn0OcI3lMunzcb4yXsRc2YAX96R0_i7EGJ70Tp76AhWL2=s1360-w1360-h1020-rw",

"Badvel Court":
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz2fVBEWAIAHn99qTStcxDp7ug3dwqf6rrJIkaGxD_66ii2l_q07HpwIoHHkfJJGhNLAwFUrsN6PefzPJqnp-Kppog1B4RHau7ZbXqGLTc4-_RTC20WYLpjoujZ0qslIb6Mb8pO=s1360-w1360-h1020-rw",
"High Court of Andhra Pradesh":
  "https://www.livelaw.in/h-upload/2020/12/10/500x300_385718-andhra-pradesh-high-court.jpg",

  "Family Court":"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxJI4vBjaZZoQAWsN1iyYJS0jAX49DIitERn8XBBjzxfF5SWRTa6QF6r-QYq94tndu9tCXEAnmCulu71V39gxhfPmrGz3pabfegX10QlAUe4-c3COjLQ9co1XsKRu2mIBl2N9nF=s1360-w1360-h1020-rw",
};

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={schema}
        keywords={keywords}
      />
<Heromain />
      {/* PRACTICE AREAS MARQUEE */}
      <PracticeMarquee />

      {/* HERO SECTION */}
      <section className="hero py-16 md:py-24">
        <div className="container hero-grid gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="hero-title leading-tight">
              Advocate in Kadapa
            </h1>

            <p className="hero-subtitle ">
              Rajesh Kumar Reddy is a senior advocate with over{" "}
              <strong>36 years of courtroom experience</strong>, enrolled as{" "}
              {BUSINESS.enrollment}. Practicing extensively before the Kadapa
              District Court, he handles a wide spectrum of matters including
              civil litigation, criminal defence, family court disputes,
              property and land issues, cheque bounce cases, revenue matters,
              appeals, revisions, bail proceedings, and advisory work across
              YSR Kadapa District.
            </p>

            {/* ACTIONS */}
            <div className="hero-actions flex flex-wrap gap-4 pt-2">
                <a
                             href={`tel:${BUSINESS.phoneTel}`}
                             className="px-4 py-1.5 cta-primary bg-gray-900 text-white text-sm flex items-center"
                           >
                             <IoCallOutline className="mx-1 text-lg" />
                             {BUSINESS.phone}
                           </a>

              <Link className="cta-secondary px-6 py-3" href="/contact">
                Visit Office
              </Link>

              <Link className="cta-secondary px-6 py-3" href="/services">
                View Services
              </Link>
            </div>

            {/* BADGES */}
            <div className="badge-row flex flex-wrap gap-3 pt-4">
              <span className="badge">36+ Years Experience</span>
              <span className="badge">Former Bar Association President</span>
              <span className="badge">Kadapa District Court</span>
            </div>
          </div>

          {/* RIGHT – STATS */}
          <div className=" w-full max-w-xl mx-auto">
            <HeroStats />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section alt pb-12">
  <div className="container">
    <h2 className="section-title">
      Legal Support & Practice Areas – Rajesh Kumar Reddy Advocate Office
    </h2>

    <p className="prose max-w-4xl">
      Rajesh Kumar Reddy Advocate Office provides comprehensive legal support to
      individuals, families, and businesses across YSR Kadapa District. Each
      service is delivered with strong local court knowledge, disciplined case
      preparation, and clear legal guidance before the Kadapa District Court
      and the High Court of Andhra Pradesh.
    </p>

          <div className="mt-8">
            {/* HORIZONTAL SCROLL – SCROLLBAR HIDDEN */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide overscroll-x-contain">
        {SERVICES.map((service) => (
          <article
            key={service.slug}
            className="snap-start min-w-[280px] sm:min-w-[360px] md:min-w-[440px] rounded-3xl border border-slate-200 bg-white transition overflow-hidden"
          >
            <div className="h-56 md:h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src={service.image || "/images/hero-kadapa.svg"}
                alt={`${service.title} in Kadapa`}
                width={1200}
                height={720}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 90vw, 420px"
                unoptimized
              />
            </div>

            <div className="p-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Advocate Rajesh Kumar Reddy · Kadapa
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed text-slate-600"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {service.description}
              </p>

              <Link
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900"
                href={service.href}
              >
                Read More
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* SEO CONTEXT (INVISIBLE BUT INDEXABLE) */}
            <p className="sr-only">
              Legal service provided by Rajesh Kumar Reddy, senior advocate
              practicing in Kadapa District Court and High Court of Andhra
              Pradesh.
            </p>
          </article>
        ))}
            </div>
          </div>
  </div>
</section>


      {/* LEADERSHIP */}
      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-4xl">
            <h2 className="section-title">Local Leadership and Trust</h2>
            <p className="prose">
              Rajesh Kumar Reddy served as former President of the Kadapa
              District Bar Association and played a leadership role in the
              Samaikyandhra movement. He was instrumental in establishing the
              State Bank of India branch inside Kadapa District Court,
              reflecting a long-standing commitment to the legal community.
            </p>
            <p className="prose">
              Every matter receives careful attention, with clear options,
              realistic timelines, and disciplined courtroom preparation.
            </p>
          </div>

          <BentoGridLeadership />
        </div>
      </section>

      {/* COURTS */}
      <section className="section alt pb-12">
        <div className="container">
          <h2 className="section-title">Courts Practiced</h2>

          <div className="cards cards-four">
            {COURTS.map((court) => (
              <div key={court} className="card">
                <div className="mb-3 h-40 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={courtImageOverrides[court] || "/images/court-placeholder.svg"}
                    alt={`${court} in Kadapa`}
                    width={1200}
                    height={720}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 90vw, 420px"
                    unoptimized
                  />
                </div>
                <h3>{court}</h3>
                <p className="prose">
                  Regular practice in {court} with Kadapa District Court
                  coordination and strong local procedure awareness across YSR
                  Kadapa District and Andhra Pradesh.
                </p>
              </div>
            ))}
          </div>

          <div className="callout">
            <p className="prose">
              <strong>Need urgent legal guidance?</strong> Call{" "}
              {BUSINESS.phone} or visit the office at {BUSINESS.address}.
            </p>
          </div>
        </div>
      </section>
      {/* QUICK CONTACT */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Quick Contact</h2>

          <p className="prose max-w-2xl">
            Connect instantly for consultations near Kadapa District Court.
            Call, WhatsApp, email, or visit the office beside Nagarjuna Model
            School, Kadapa – 516001.
          </p>

          <div className="action-grid">
            <a className="action-card" href={`tel:${BUSINESS.phoneTel}`}>
              <span className="action-title">Call Office</span>
              <span className="action-sub">{BUSINESS.phone}</span>
            </a>

            <a
              className="action-card"
              href={`https://wa.me/${BUSINESS.phoneTel.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="action-title">WhatsApp</span>
              <span className="action-sub">Quick message support</span>
            </a>

            <a className="action-card" href={`mailto:${BUSINESS.email}`}>
              <span className="action-title">Email</span>
              <span className="action-sub">{BUSINESS.email}</span>
            </a>

            <a className="action-card" href="/contact">
              <span className="action-title">Visit Office</span>
              <span className="action-sub">Kadapa 516001</span>
            </a>
          </div>

          <div className="social-grid">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                className="social-pill"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Kadapa Service Area</h2>

          <p className="prose max-w-3xl">
            The office serves clients across YSR Kadapa District including
            Kadapa, Badvel, Sidhout, and surrounding towns in Andhra Pradesh.
            Chambers are located beside Kadapa District Court for quick access
            to filings, hearings, and consultations.
          </p>

          <div className="badge-row">
            <span className="badge">YSR Kadapa District</span>
            <span className="badge">Kadapa 516001</span>
            <span className="badge">Andhra Pradesh</span>
          </div>
        </div>
      </section>
      <FaqSection />
<ClientsReviewSection />
    </>
  );
}
