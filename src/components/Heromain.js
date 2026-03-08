import Image from "next/image";
import { BUSINESS } from "@/lib/site-data";

export default function Heromain() {
  return (
    <section className="relative bg-white pt-10 md:pt-16 pb-0 overflow-hidden">
      <div className="container hero-grid gap-8 md:gap-14 items-center md:items-end">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
            Rajesh Kumar Reddy Advocate Office
          </span>

          <h1 className="hero-title text-3xl md:text-4xl">
            Advocate in Kadapa with Courtroom-Ready Guidance
          </h1>

          <p className="hero-subtitle max-w-xl">
            With over <strong>36+ years of courtroom experience</strong>, Rajesh
            Kumar Reddy provides disciplined representation in civil, criminal,
            family, property, and cheque bounce matters across Kadapa District
            Court and Andhra Pradesh.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-actions">
            <a
              href={`https://wa.me/${BUSINESS.phoneTel.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              WhatsApp Now
            </a>

            <a href={`tel:${BUSINESS.phoneTel}`} className="cta-secondary">
              Call Now
            </a>
          </div>

          {/* TRUST STATS */}
          <div className="grid grid-cols-3 gap-3 max-w-md">
            {[
              { value: "36+", label: "Years Experience" },
              { value: "5000+", label: "Cases Handled" },
              { value: "Kadapa", label: "District Court" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-transparent p-3 text-center"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap mb-4 gap-2">
            {[
              "Former Bar Association President",
              "Kadapa District Court Chambers",
              "High Court of Andhra Pradesh Practice",
              "Trusted Civil & Criminal Advocate",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-transparent px-3 py-1 text-xs font-semibold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative max-w-2xl mx-auto w-full mt-6 md:mt-0">
          <div className="pointer-events-none absolute top-4 -left-32 hidden md:block opacity-90">
            <Image
              src="/images/kulla.jpeg"
              alt="Kulla visual"
              width={520}
              height={640}
              className="h-[440px] md:h-[520px] w-80 md:w-[360px] object-contain"
              sizes="(max-width: 860px) 60vw, 520px"
            />
          </div>
          <div className="pointer-events-none absolute top-4 -right-32 hidden md:block opacity-90">
            <Image
              src="/images/kailash.jpeg"
              alt="Kailash visual"
              width={520}
              height={640}
              className="h-[440px] md:h-[520px] w-80 md:w-[360px] object-contain"
              sizes="(max-width: 860px) 60vw, 520px"
            />
          </div>
          <div className="relative z-10 flex justify-center">
            <Image
              src="/images/rajeshkumarreddy.png"
              alt="Rajesh Kumar Reddy Advocate Office Kadapa"
              width={520}
              height={640}
              className="h-72 sm:h-80 md:h-[520px] w-64 sm:w-72 md:w-[360px] object-contain"
              sizes="(max-width: 560px) 70vw, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
