import { BUSINESS, COURTS, GEO, SERVICES, SITE_URL, SOCIALS } from "@/lib/site-data";

/**
 * @typedef {import("schema-dts").WithContext<import("schema-dts").LegalService>} LegalServiceSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").Service>} ServiceSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").BreadcrumbList>} BreadcrumbSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").FAQPage>} FaqSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").Organization>} OrganizationSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").LocalBusiness>} LocalBusinessSchema
 * @typedef {import("schema-dts").WithContext<import("schema-dts").WebSite>} WebSiteSchema
 */

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:00",
  },
];

/** @returns {LegalServiceSchema} */
export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-kadapa.svg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    openingHoursSpecification: OPENING_HOURS,
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
      { "@type": "City", name: "Proddatur" },
      { "@type": "City", name: "Badvel" },
      { "@type": "City", name: "Pulivendula" },
      { "@type": "City", name: "Rajampet" },
      { "@type": "City", name: "Sidhout" },
      { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
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
      "Bail and anticipatory bail",
      "Revenue matters",
      "Land disputes",
      "Appeals and revisions",
      "Legal advisory",
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

/** @returns {OrganizationSchema} */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: SOCIALS.map((item) => item.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        areaServed: "IN-AP",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    foundingDate: "1990",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 5,
    },
  };
}

/** @returns {LocalBusinessSchema} */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-kadapa.svg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    openingHoursSpecification: OPENING_HOURS,
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
      { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
      { "@type": "State", name: BUSINESS.region },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: SOCIALS.map((item) => item.href),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * Attorney schema — Google explicitly supports this for lawyer knowledge panels
 */
export function getAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#attorney`,
    name: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/rajeshkumarreddyofficefront.jpeg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    openingHoursSpecification: OPENING_HOURS,
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
      { "@type": "City", name: "Proddatur" },
      { "@type": "City", name: "Badvel" },
      { "@type": "City", name: "Pulivendula" },
      { "@type": "City", name: "Rajampet" },
      { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
      { "@type": "State", name: BUSINESS.region },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: SOCIALS.map((item) => item.href),
    founder: { "@id": `${SITE_URL}/#person` },
    knowsAbout: [
      "Criminal Defense Law",
      "Civil Litigation",
      "Property Law",
      "Family Law",
      "Cheque Bounce Cases (Section 138 NI Act)",
      "Bail Applications",
      "Appeals and Revisions",
      "Revenue Court Matters",
    ],
  };
}

/**
 * Person schema — E-E-A-T signal for the advocate himself
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: BUSINESS.advocateName,
    givenName: "Rajesh Kumar",
    familyName: "Reddy",
    jobTitle: "Senior Advocate",
    description: `Senior advocate in Kadapa with ${BUSINESS.experience} of courtroom experience. Enrolled as ${BUSINESS.enrollment} with the Bar Council of Andhra Pradesh. Former President of the Kadapa District Bar Association.`,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/rajeshkumarreddyofficefront.jpeg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bar Council of Andhra Pradesh",
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "Bar Council of Andhra Pradesh",
      },
      {
        "@type": "Organization",
        name: "Kadapa District Bar Association",
      },
    ],
    knowsAbout: [
      "Criminal Law",
      "Civil Law",
      "Property Law",
      "Family Law",
      "Revenue Law",
      "Indian Penal Code",
      "Code of Criminal Procedure",
      "Code of Civil Procedure",
      "Negotiable Instruments Act",
      "Bharatiya Nyaya Sanhita",
    ],
    sameAs: SOCIALS.map((item) => item.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
  };
}

/**
 * ProfessionalService schema — more specific than LocalBusiness
 */
export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professionalservice`,
    name: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-kadapa.svg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    openingHoursSpecification: OPENING_HOURS,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: SOCIALS.map((item) => item.href),
  };
}

/**
 * HowTo schema generator — AEO gold for step-by-step blog posts
 * @param {{ name: string; description: string; steps: string[] }} data
 */
export function getHowToSchema({ name, description, steps }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step,
    })),
    totalTime: "PT30M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
  };
}

/** @returns {WebSiteSchema} */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: `Senior advocate office in Kadapa with ${BUSINESS.experience} of courtroom experience. Civil, criminal, property, family, cheque bounce, and appellate legal support across YSR Kadapa District.`,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
    areaServed: [
      { "@type": "City", name: BUSINESS.city },
      { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
    ],
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
