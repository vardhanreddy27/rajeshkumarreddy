import Seo from "@/components/Seo";
import Image from "next/image";
import { BUSINESS, COURTS } from "@/lib/site-data";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";
import {

  FaCircleCheck,

} from "react-icons/fa6";
export default function AboutPage() {
  const title = "About Advocate Rajesh Kumar Reddy | Kadapa Senior Lawyer";
  const description =
    "Learn about Rajesh Kumar Reddy, a senior advocate enrolled in 1990 (AP/104/1990) with 36+ years of practice in Kadapa District Court and across Andhra Pradesh.";
  const path = "/about";
  const keywords =
    "Kadapa advocate, senior lawyer Kadapa, Rajesh Kumar Reddy advocate, Kadapa District Court lawyer, YSR Kadapa District legal services";

  const schema = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
    ]),
  ];

  const courtImageOverrides = {
    "Kadapa District Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080390.jpg",
    "Kadapa (District Headquarters) Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080390.jpg",
    "Railway Kodur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080599.jpg",
    "Jammalamadugu Junior Civil Judge Court":
      "https://files.yappe.in/place/full/jammalamadugu-civil-court-8974915.webp",
    "Mydukur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080550.jpg",
    "Sidhout Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080568.jpg",
    "Nandalur Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2023/08/2023080512.jpg",
    "Rayachoty Court (Annamayya District HQ)":
      "https://media.andhrajyothy.com/media/2023/20231205/9rct27_jpeg_c3a3defcbb.gif",
    "Lakkireddipalli Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091384.jpg",
    "Pulivendula Junior Civil Judge Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091380.jpg",
    "Kamalapuram Junior Civil Judge Court":
      "https://imagesvs.oneindia.com/te/img/2024/02/kamalapuram-06-1709194412.jpg",
    "Proddatur Court":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Prdt_railway_station_sign_board.jpg/1920px-Prdt_railway_station_sign_board.jpg",
    "Rajampet Court":
      "https://imagesvs.oneindia.com/webp/te/img/2024/04/rajampet-1713871607.jpg",
    "Badvel Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091380.jpg",
    "High Court of Andhra Pradesh":
      "https://www.livelaw.in/h-upload/2020/12/10/500x300_385718-andhra-pradesh-high-court.jpg",
    "Family Court":
      "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2025/09/2025091389.jpg",
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

          <section className="hero py-12 md:py-20">
        <div className="container hero-grid gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="hero-title">About Rajesh Kumar Reddy</h1>

            <p className="hero-subtitle mt-4 max-w-2xl">
              Rajesh Kumar Reddy is a <strong>verified senior advocate</strong>{" "}
              with over <strong>36 years of courtroom practice</strong>. Known
              for disciplined preparation, practical legal advice, and steady
              courtroom representation, he serves individuals, families, and
              businesses across Kadapa and YSR Kadapa District.
            </p>

            {/* VERIFIED / AUTHORITY POINTS */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6">
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                <FaCircleCheck className="text-blue-600" />
                  <span>
                    <strong>Verified Senior Advocate</strong> · Bar Council of
                    Andhra Pradesh
                  </span>
                </li>

                <li className="flex items-start gap-3">
                <FaCircleCheck className="text-blue-600" />
                  <span>
                    <strong>36+ years of continuous practice</strong> before
                    Kadapa District Court
                  </span>
                </li>

                <li className="flex items-start gap-3">
                <FaCircleCheck className="text-blue-600" />
                  <span>
                    Former President,{" "}
                    <strong>Kadapa District Bar Association</strong>
                  </span>
                </li>

                <li className="flex items-start gap-3">
                <FaCircleCheck className="text-blue-600" />
                  <span>
                    Representation before{" "}
                    <strong>
                      District Courts & High Court of Andhra Pradesh
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE – CENTERED */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/images/rajeshkumarreddyofficefront.jpeg"
                alt="Rajesh Kumar Reddy Advocate Office near Kadapa District Court"
                width={1200}
                height={720}
                sizes="(max-width: 860px) 100vw, 420px"
                className="rounded-2xl object-cover h-[220px] md:h-[280px] w-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Experience and Authority</h2>
          <div className="prose">
            <p>
              With chambers beside Kadapa District Court, he has served clients
              in criminal defense, civil litigation, property disputes, cheque
              bounce matters, and family law. His approach blends practical
              strategy with deep knowledge of local procedure and court
              practice.
            </p>
            <p>
              Rajesh Kumar Reddy served as former President of the Kadapa
              District Bar Association and played a leadership role in the
              Samaikyandhra movement. He was instrumental in establishing the
              State Bank of India branch inside Kadapa District Court, improving
              access for advocates and litigants.
            </p>
            <p>
              Clients value clear guidance, realistic timelines, and a steady
              courtroom presence. Every case is handled with a strong focus on
              evidence, documentation, and the specific goals of each family or
              business.
            </p>
            <p>
              The office serves clients across Kadapa town and YSR Kadapa
              District, with easy access from nearby areas such as Badvel and
              Sidhout. Local court familiarity helps align filings with
              procedure and avoids unnecessary delays.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title mb-5">Courts Practiced</h2>

          <div className="cards cards-four">
            {COURTS.map((court) => (
              <div key={court} className="card">
                <div className="mb-3 h-40 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={courtImageOverrides[court] || "/images/rajeshkumarreddyofficefront.jpeg"}
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
              <strong>Office Location:</strong> {BUSINESS.address}
            </p>
            <p className="prose">
              <strong>Phone:</strong> {BUSINESS.phone} |{" "}
              <strong>Email:</strong> {BUSINESS.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
