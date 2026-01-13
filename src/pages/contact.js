import Seo from "@/components/Seo";
import Image from "next/image";
import {
  FaWhatsapp,
  FaPhone,
  FaCircleCheck,
  FaLocationDot,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { BUSINESS } from "@/lib/site-data";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";

export default function ContactPage() {
  const title = "Contact Advocate in Kadapa | Rajesh Kumar Reddy";
  const description =
    "Contact Rajesh Kumar Reddy Advocate Office in Kadapa, beside Kadapa District Court. Call or WhatsApp for legal guidance in civil, criminal, property, and cheque bounce matters.";
  const path = "/contact";
  const keywords =
    "contact advocate Kadapa, advocate near Kadapa District Court, Kadapa lawyer phone number, civil criminal lawyer Kadapa";

  const schema = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
    ]),
  ];

  const whatsappLink = "https://wa.me/919346362201";
  const googleBusinessLink = "https://share.google/ukNvjN8l4h7XSaDFQ";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={schema}
        keywords={keywords}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Contact the Rajesh Kumar Reddy Advocate Office
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl">
              For legal guidance in Kadapa, speak directly with the advocate or
              visit the office beside <strong>Kadapa District Court</strong>.
              Clear advice and disciplined representation begin with the right
              discussion.
            </p>

            <p className="mt-4 text-slate-600 max-w-xl">
              Clients contact the office from <strong>Kadapa</strong>,{" "}
              <strong>Proddatur</strong>, <strong>Badvel</strong>,{" "}
              <strong>Pulivendula</strong>, <strong>Rajampet</strong> and across{" "}
              <strong>YSR Kadapa District</strong> for civil, criminal, family,
              property, cheque bounce, bail, appeal and revision matters.
            </p>

            {/* VERIFIED LIST */}
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" />
                Office beside Kadapa District Court
              </li>
              <li className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" />
                Document review + clear next steps
              </li>
              <li className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" />
                District Court & High Court representation
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:9346362201"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition"
              >
                <FaPhone />
                Call 9346362201
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow transition"
                style={{ backgroundColor: "#25D366" }}
              >
                <FaWhatsapp />
                WhatsApp Message
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE — VERY SMALL + NO WHITE SPACE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/rajeshkumarreddyofficefront.jpeg"
                alt="Rajesh Kumar Reddy Advocate Office Kadapa District Court"
                width={900}
                height={650}
                className="w-full h-[240px] md:h-[320px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADDRESS + MAP + SOCIAL (DOWN PART) */}
      <section className="section bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* LEFT – ADDRESS + SOCIAL */}
          <div>
            <h2 className="section-title flex items-center gap-2">
              <FaLocationDot className="text-blue-600" />
              Rajesh Kumar Reddy Advocate Office - Kadapa
            </h2>

            <p className="prose mt-4">{BUSINESS.address}</p>

            <p className="prose mt-3">
              Located near Kadapa District Court. Easy access for clients from
              Kadapa town and nearby areas of YSR Kadapa District including
              Proddatur, Badvel, Pulivendula and Rajampet.
            </p>

            {/* QUICK LINKS */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={googleBusinessLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow text-blue-600 font-medium"
              >
                <FaGoogle /> Google Business Profile
              </a>

        
            </div>

            {/* SOCIAL PRESENCE – COLORFUL BG */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase text-slate-600">
                Social Presence
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="social-btn"
                  style={{ backgroundColor: "#1877F2" }}
                  href="https://www.facebook.com/profile.php?id=61585921914550"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="social-btn"
                  style={{
                    background:
                      "linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)",
                  }}
                  href="https://www.instagram.com/rajeshpalagiri104/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  className="social-btn"
                  style={{ backgroundColor: "#FF0000" }}
                  href="https://www.youtube.com/channel/UCbg5nXNvJTKN33TehtDz7aQ"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

                <a
                  className="social-btn"
                  style={{ backgroundColor: "#0A66C2" }}
                  href="https://www.linkedin.com/in/rajesh-kumar-reddy-p-aa87363a4/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  className="social-btn"
                  style={{ backgroundColor: "#111827" }}
                  href="https://x.com/RajeshPala31233"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – MAP */}
          <div className="rounded-2xl overflow-hidden shadow bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.380849157174!2d78.8251302751496!3d14.462807086007373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3738bb66f8611%3A0xf1b208e46ed810c1!2sRajesh%20kumar%20reddy%20Advocate%20office!5e0!3m2!1sen!2sin!4v1768065191853!5m2!1sen!2sin"
              className="w-full h-[280px] md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajesh Kumar Reddy Advocate Office Location"
            />
          </div>
        </div>
      </section>

      {/* SEO GEO (SILENT BOOST) */}
      <p className="sr-only">
        Advocate Rajesh Kumar Reddy office is located beside Kadapa District
        Court in Andhra Pradesh. Clients from Kadapa, Proddatur, Badvel,
        Pulivendula, Rajampet and surrounding areas of YSR Kadapa District
        contact the advocate office for civil, criminal, family, property,
        cheque bounce, bail, appeal and revision matters.
      </p>

      {/* LOCAL STYLES FOR SOCIAL BUTTONS */}
      <style jsx>{`
        .social-btn {
          height: 46px;
          width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          color: white;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          transition: transform 0.18s ease;
        }
        .social-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
