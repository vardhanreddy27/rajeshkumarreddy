import Head from "next/head";
import { JsonLdScript } from "next-seo";
import { BUSINESS, GEO, SITE_URL } from "@/lib/site-data";

function toAbsoluteUrl(url) {
  if (!url) return `${SITE_URL}/images/hero-kadapa.svg`;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

function inferImageType(url) {
  if (url.endsWith(".png")) return "image/png";
  if (url.endsWith(".webp")) return "image/webp";
  if (url.endsWith(".svg")) return "image/svg+xml";
  return "image/jpeg";
}

export default function Seo({
  title,
  description,
  path,
  image,
  schema,
  noindex,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  imageAlt,
  prevUrl,
  nextUrl,
}) {
  const normalizedPath = path || "/";
  const canonical = `${SITE_URL}${normalizedPath}`;
  const metaImage = toAbsoluteUrl(image);
  const imageMimeType = inferImageType(metaImage.toLowerCase());
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#legalservice` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: metaImage,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-title", ".section-title", ".prose", "h1", "h2", ".callout"],
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  const allSchemaItems = [webpageSchema, ...schemaItems];
  const defaultKeywords =
    "best lawyer in Kadapa, top lawyer in Kadapa, best advocate in Kadapa, top advocate in Kadapa, best civil lawyer in Kadapa, best criminal lawyer in Kadapa, advocate in Kadapa, Kadapa District Court, YSR Kadapa District, Andhra Pradesh";
  const mergedKeywords = keywords
    ? `${keywords}, ${defaultKeywords}`
    : defaultKeywords;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={mergedKeywords} />
        <meta
          name="robots"
          content={
            noindex
              ? "noindex,nofollow"
              : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
          }
        />
        <meta
          name="googlebot"
          content={
            noindex
              ? "noindex,nofollow"
              : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
          }
        />
        <link rel="canonical" href={canonical} />
        {prevUrl ? <link rel="prev" href={toAbsoluteUrl(prevUrl)} /> : null}
        {nextUrl ? <link rel="next" href={toAbsoluteUrl(nextUrl)} /> : null}

        {/* Open Graph */}
        <meta property="og:site_name" content={BUSINESS.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:alt" content={imageAlt || title} />
        <meta property="og:image:type" content={imageMimeType} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Article-specific OG tags */}
        {type === "article" && publishedTime ? (
          <meta property="article:published_time" content={publishedTime} />
        ) : null}
        {type === "article" && modifiedTime ? (
          <meta property="article:modified_time" content={modifiedTime} />
        ) : null}
        {type === "article" ? (
          <meta property="article:author" content={BUSINESS.advocateName} />
        ) : null}
        {type === "article" ? (
          <meta property="article:section" content="Legal Guidance" />
        ) : null}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:image:alt" content={imageAlt || title} />
        <meta name="twitter:site" content="@RajeshPala31233" />
        <meta name="twitter:creator" content="@RajeshPala31233" />

        {/* Language and Locale */}
        <link rel="alternate" hrefLang="en-IN" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />

        {/* GEO meta tags — critical for local SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Kadapa" />
        <meta name="geo.position" content={`${GEO.latitude};${GEO.longitude}`} />
        <meta name="ICBM" content={`${GEO.latitude}, ${GEO.longitude}`} />

        {/* Dublin Core metadata — AEO/citation signals for AI engines */}
        <meta name="dc.title" content={title} />
        <meta name="dc.creator" content={BUSINESS.advocateName} />
        <meta name="dc.subject" content={mergedKeywords} />
        <meta name="dc.description" content={description} />
        <meta name="dc.publisher" content={BUSINESS.name} />
        <meta name="dc.language" content="en-IN" />
        <meta name="dc.coverage" content="YSR Kadapa District, Andhra Pradesh, India" />

        {/* Citation meta — used by AI engines for sourcing */}
        <meta name="citation_title" content={title} />
        <meta name="citation_author" content={BUSINESS.advocateName} />
        <meta name="citation_publisher" content={BUSINESS.name} />
        {type === "article" && publishedTime ? (
          <meta name="citation_publication_date" content={publishedTime} />
        ) : null}

        {/* Author and brand */}
        <meta name="author" content={BUSINESS.advocateName} />
        <meta name="theme-color" content="#8b1f1a" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="India" />
      </Head>

      {allSchemaItems.map((item, index) => (
        <JsonLdScript
          key={`${canonical}-schema-${index}`}
          data={item}
          scriptKey={`${canonical}-schema-${index}`}
        />
      ))}
    </>
  );
}