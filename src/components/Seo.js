import Head from "next/head";
import { JsonLdScript } from "next-seo";
import { BUSINESS, GEO, SITE_URL } from "@/lib/site-data";

export default function Seo({
  title,
  description,
  path,
  image,
  schema,
  noindex,
  keywords,
}) {
  const canonical = `${SITE_URL}${path || ""}`;
  const metaImage = image || `${SITE_URL}/images/hero-kadapa.svg`;
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const defaultKeywords =
    "best lawyer in Kadapa, top lawyer in Kadapa, best advocate in Kadapa, top advocate in Kadapa, best civil lawyer in Kadapa, best criminal lawyer in Kadapa, advocate in Kadapa, Kadapa District Court, YSR Kadapa District, Andhra Pradesh";
  const mergedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={mergedKeywords} />
        <meta
          name="robots"
          content={noindex ? "noindex,nofollow" : "index,follow"}
        />
        <link rel="canonical" href={canonical} />

        <meta property="og:site_name" content={BUSINESS.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImage} />

        <link rel="alternate" hrefLang="en-IN" href={canonical} />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Kadapa" />
        <meta name="geo.position" content={`${GEO.latitude};${GEO.longitude}`} />
        <meta name="ICBM" content={`${GEO.latitude}, ${GEO.longitude}`} />

        <meta name="author" content={BUSINESS.advocateName} />
        <meta name="theme-color" content="#8b1f1a" />
      </Head>

      {schemaItems.map((item, index) => (
        <JsonLdScript
          key={`${canonical}-schema-${index}`}
          data={item}
          scriptKey={`${canonical}-schema-${index}`}
        />
      ))}
    </>
  );
}
