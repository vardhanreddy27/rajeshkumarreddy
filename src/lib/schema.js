import { BUSINESS, COURTS, GEO, SERVICES, SITE_URL, SOCIALS } from "@/lib/site-data";

/**
 * @typedef {import("schema-dts").WithContext<import("schema-dts").LegalService>} LegalServiceSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").Service>} ServiceSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").BreadcrumbList>} BreadcrumbSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").FAQPage>} FaqSchema
 */

/** @returns {LegalServiceSchema} */
export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#legalservice`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-kadapa.svg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      { "@type": "City", name: BUSINESS.city },
      { "@type": "AdministrativeArea", name: "Kadapa District" },
      { "@type": "State", name: BUSINESS.region },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: SOCIALS.map((item) => item.href),
    founder: {
      "@type": "Person",
      name: BUSINESS.advocateName,
      jobTitle: "Advocate",
    },
    employee: {
      "@type": "Person",
      name: BUSINESS.advocateName,
      jobTitle: "Advocate",
    },
    knowsAbout: [
      "Criminal defense",
      "Civil litigation",
      "Property disputes",
      "Cheque bounce cases",
      "Family law",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services in Kadapa",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE_URL}${service.href}`,
        },
      })),
    },
    department: COURTS.map((court) => ({
      "@type": "GovernmentOffice",
      name: court,
    })),
  };
}

/**
 * @param {{ name: string; description: string; url: string }} data
 * @returns {ServiceSchema}
 */
export function getServiceSchema({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    provider: { "@id": `${SITE_URL}/#legalservice` },
    areaServed: { "@type": "City", name: BUSINESS.city },
    url,
  };
}

/**
 * @param {{ name: string; href: string }[]} items
 * @returns {BreadcrumbSchema}
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * @param {{ question: string; answer: string }[]} faqs
 * @returns {FaqSchema}
 */
export function getFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
