import Link from "next/link";

const PRACTICE_AREAS = [
  { label: "Civil Litigation", href: "/civil-suits-kadapa" },
  { label: "Criminal Defence", href: "/criminal-lawyer-kadapa" },
  { label: "Sessions Trials", href: "/sessions-trials-kadapa" },
  { label: "Bail & Anticipatory Bail", href: "/bail-lawyer-kadapa" },
  { label: "Family Court Matters", href: "/family-court-kadapa" },
  { label: "Property & Land Disputes", href: "/property-disputes-kadapa" },
  { label: "NDPS Cases", href: "/ndps-lawyer-kadapa" },
  { label: "Appeals & Revisions", href: "/criminal-appeals-kadapa" },
  { label: "Revenue Court Matters", href: "/revenue-cases-kadapa" },
];

export default function PracticeMarquee() {
  return (
    <section className="w-full bg-gray-900 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="marquee-inner">

          {/* FIRST TRACK */}
          <div className="marquee-track shrink-0 py-4 pr-10">
            {PRACTICE_AREAS.map((item, index) => (
              <MarqueeItem key={`a-${index}`} item={item} />
            ))}
          </div>

          {/* DUPLICATE TRACK */}
          <div className="marquee-track shrink-0 py-4 pr-10">
            {PRACTICE_AREAS.map((item, index) => (
              <MarqueeItem key={`b-${index}`} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* SINGLE ITEM */
function MarqueeItem({ item }) {
  return (
    <Link
      href={item.href}
      className="flex items-center uppercase gap-4 text-white  md:text-3xl  font-semibold hover:text-blue-500 transition whitespace-nowrap"
    >
      {/* CENTERED * */}
      <span
        className="
          inline-flex
          items-center
          justify-center
         
          text-2xl md:text-3xl
          leading-none
          align-middle
        "
        aria-hidden="true"
      >
        *
      </span>

      <span className="leading-none">
        {item.label}
      </span>
    </Link>
  );
}
