import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

const CLIENTS = [
  "/images/client1.jpg",
  "/images/client2.webp",
  "/images/client3.jpeg",
  "/images/client4.jpeg",
];

export default function HeroStats() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      aria-label="Advocate experience and practice statistics in Kadapa"
    >
      {/* YEARS */}
      <div className="rounded-2xl border bg-white p-6 shadow transition hover:shadow-md">
        <div className="text-5xl md:text-6xl font-extrabold text-gray-900">
          <AnimatedCounter end={36} suffix="+" />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Years of Practice
        </div>

        {/* SEO CONTEXT */}
        <p className="sr-only">
          Senior advocate in Kadapa with over 36 years of continuous legal
          practice before District and High Courts of Andhra Pradesh.
        </p>
      </div>

      {/* CASES */}
      <div className="rounded-2xl border bg-white p-6 shadow transition hover:shadow-md">
        <div className="text-5xl md:text-6xl font-extrabold text-gray-900">
          <AnimatedCounter end={5000} suffix="+" />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Cases Handled
        </div>

        {/* SEO CONTEXT */}
        <p className="sr-only">
          Handled more than five thousand civil, criminal, family, property,
          revenue, bail, appeal, and trial matters in Kadapa courts.
        </p>
      </div>

      {/* CLIENT SATISFACTION */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex flex-col gap-4">
          {/* TEXT */}
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-gray-900">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">
              Client Satisfaction
            </div>

            {/* SEO CONTEXT */}
            <p className="sr-only">
              High client satisfaction for legal services provided in YSR Kadapa
              District through long-term professional legal practice.
            </p>
          </div>

          {/* AVATAR STACK + COUNT */}
          <div className="flex items-center">
            <div className="flex -space-x-4 items-center">
              {CLIENTS.map((src, i) => (
                <div
                  key={i}
                  className={`relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-blue-100 transition-transform duration-200 hover:scale-105 ${
                    i === CLIENTS.length - 1 ? "z-20" : "z-10"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Client represented by advocate in Kadapa District"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* MORE CLIENTS */}
              <div className="relative w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center border-2 border-white shadow z-30">
                <span className="text-lg font-bold">+4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRACTICE JURISDICTION */}
      <div className="rounded-2xl shadow border border-blue-200 bg-blue-50 p-6  transition hover:shadow-md">
        <div className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
          District & High Court
        </div>
        <div className="mt-2 text-sm font-medium ">
          Practice Jurisdiction
        </div>

        {/* SEO CONTEXT */}
        <p className="sr-only">
          Practicing advocate before Kadapa District Court and the High Court of
          Andhra Pradesh, handling litigation, trials, appeals, and advisory
          matters.
        </p>
      </div>
    </div>
  );
}
