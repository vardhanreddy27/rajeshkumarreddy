import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLink,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const VIDEO_CARD =
  "relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50";

const VIDEO_FRAME =
  "absolute inset-0 h-full w-full";

export default function BentoGridLeadership() {
  return (
    <div className="w-full">
      <BentoGrid>
        <BentoGridItem
          className="md:col-span-2"
          title="Leadership in the Legal Community"
          description="Former President of Kadapa District Bar Association with decades of leadership in protecting advocate rights and strengthening the judicial ecosystem in YSR Kadapa District."
          header={
            <div className={`${VIDEO_CARD} aspect-video`}>
              <iframe
                className={VIDEO_FRAME}
                src="https://www.youtube.com/embed/7RAxhqxswMo"
                title="Leadership in the Legal Community"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />

        <BentoGridItem
          title="Judicial Infrastructure Contribution"
          description={
            <div className="space-y-3">
              <p>
                Instrumental in establishing the State Bank of India branch
                inside the Kadapa District Court complex, simplifying court fee
                payments for advocates and litigants in Kadapa and YSR Kadapa
                District. This initiative improved on-site banking access for
                court filings across Andhra Pradesh.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-600">
                <li>On-site fee payments reduce delays for Kadapa filings</li>
                <li>Supports daily court workflow for local advocates</li>
                <li>Improves access for litigants visiting Kadapa courts</li>
              </ul>
              <p>
                Rajesh Kumar Reddy initiated and contributed to establishing
                the SBI counter inside Kadapa District Court, improving fee
                payments and filing timelines for advocates and clients across
                YSR Kadapa District.
              </p>
            </div>
          }
          header={
            <div className="space-y-3">
              <Image
                src="/images/sbicourtbranch.jpg"
                alt="State Bank of India branch inside Kadapa District Court complex"
                width={1200}
                height={720}
                className="h-48 w-full rounded-xl border border-slate-200 object-cover"
                sizes="(max-width: 768px) 90vw, 360px"
                unoptimized
              />
              <p className="text-xs text-slate-600">
                SBI court branch access in Kadapa District Court supports faster
                fees and filings for local advocates and litigants.
              </p>
            </div>
          }
        />

        <BentoGridItem
          title="Samaikyandhra Movement"
          description="Played a prominent role in the Samaikyandhra Movement advocating for a united Andhra Pradesh, organizing legal protests and representing the voice of the Kadapa legal fraternity. The advocacy emphasized regional unity, fair representation, and responsible public discourse while coordinating legal efforts across Kadapa town and YSR Kadapa District."
          header={
            <div className={`${VIDEO_CARD} aspect-video`}>
              <iframe
                className={VIDEO_FRAME}
                src="https://www.youtube.com/embed/jK01kS5y0Xk"
                title="Samaikyandhra Movement"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />

        <BentoGridItem
          title="36+ Years of Legal Standing"
          description="Enrolled in 1990 (AP/104/1990), representing clients across Kadapa District and YSR Kadapa District courts, Family Court, and High Court of Andhra Pradesh. Known for precise filings, procedural depth, and disciplined advocacy in criminal, civil, property, and family matters with strong local court readiness."
          header={
            <Image
              src="/images/rajeshkumarreddyid.jpeg"
              alt="Rajesh Kumar Reddy advocate ID"
              width={1200}
              height={720}
              className="w-full h-auto object-contain rounded-xl"
              sizes="(max-width: 768px) 90vw, 360px"
              unoptimized
            />
          }
        />

        <BentoGridItem
          className="bg-blue-50 border-blue-100 hover:shadow-lg"
          title="Follow & Verified Profiles"
          description={
            <div className="space-y-4">
              <p>
                Follow Rajesh Kumar Reddy Advocate Office on social media and
                view verified profiles across trusted legal directories.
              </p>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Social Media
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700"
                    href="https://www.instagram.com/rajeshpalagiri104/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram /> Instagram
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    href="https://www.facebook.com/profile.php?id=61585921914550"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook /> Facebook
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
                    href="https://www.youtube.com/channel/UCbg5nXNvJTKN33TehtDz7aQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube /> YouTube
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-900"
                    href="https://x.com/RajeshPala31233"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter /> Twitter
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800"
                    href="https://www.linkedin.com/in/rajesh-kumar-reddy-p-aa87363a4/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Legal Profiles
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      className="inline-flex items-center gap-2 text-sm underline"
                      href="https://www.pathlegal.in/Advocate-rajesh-kumar-reddy-Kadapa/L000000000672611.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink /> Path Legal Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-2 text-sm underline"
                      href="https://share.google/uaRWLedBlh0r7VoFS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink /> Google Business Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-2 text-sm underline"
                      href="https://ecourtsindia.com/lawyer/p-rajesh-kumar-reddy?cc=APKD00"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink /> eCourts Advocate Listing
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-2 text-sm underline"
                      href="https://lawrato.com/advocate-rajesh-kumar-reddy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink /> LawRato Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-2 text-sm underline"
                      href="https://truelawyer.in/lawyer/rajesh-kumar-reddy-p"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink /> TrueLawyer Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
