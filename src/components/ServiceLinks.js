import Link from "next/link";
import { SERVICES } from "@/lib/site-data";

export default function ServiceLinks({ currentSlug, title }) {
  const heading = title || "Related Legal Services";

  return (
    <div className="related-services">
      <h3>{heading}</h3>
      <ul className="link-list">
        {SERVICES.filter((service) => service.slug !== currentSlug).map(
          (service) => (
            <li key={service.slug}>
              <Link href={service.href}>
                {service.shortTitle || service.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
