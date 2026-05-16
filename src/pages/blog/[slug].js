import Link from "next/link";
import Seo from "@/components/Seo";
import { BUSINESS, SITE_URL } from "@/lib/site-data";
import { getBreadcrumbSchema, getHowToSchema, getLegalServiceSchema } from "@/lib/schema";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";

export default function BlogPostPage({ post }) {
  const path = `/blog/${post.slug}`;
  const articleUrl = `${SITE_URL}${path}`;
  const articleImage = `${SITE_URL}/images/rajeshkumarreddyofficefront.jpeg`;
  const articleBody = [
    ...(post.intro || []),
    ...(post.keyPoints || []),
    ...(post.steps || []),
    ...(post.documents || []),
    ...(post.localNotes || []),
  ].join(" ");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: post.title,
    name: post.title,
    description: post.description,
    image: [articleImage],
    author: {
      "@type": "Person",
      name: BUSINESS.advocateName,
      jobTitle: "Advocate",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: articleUrl,
    articleSection: "Legal Guidance",
    inLanguage: "en-IN",
    keywords: post.keywords,
    articleBody,
    wordCount: articleBody.split(/\s+/).filter(Boolean).length,
    datePublished: post.date,
    dateModified: post.date,
  };

  const schema = [
    getLegalServiceSchema(),
    articleSchema,
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: path },
    ]),
  ];

  // Add HowTo schema for posts with steps — AEO gold for featured snippets
  if (post.steps && post.steps.length > 0) {
    schema.push(
      getHowToSchema({
        name: post.title,
        description: post.description,
        steps: post.steps,
      })
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        path={path}
        schema={schema}
        keywords={post.keywords}
        image={articleImage}
        imageAlt={post.title}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.date}
      />

      <section className="hero">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Kadapa Legal Blog
          </p>
          <h1 className="hero-title mt-2">{post.title}</h1>
          <p className="hero-subtitle mt-3 max-w-2xl">{post.description}</p>
          <p className="prose max-w-2xl">
            Guidance by Rajesh Kumar Reddy, senior advocate in Kadapa with 36+
            years of courtroom experience.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-8">
              <div className="prose max-w-3xl">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card">
                  <h3>Key points</h3>
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                    {post.keyPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Step-by-step process</h3>
                  <ol className="mt-3 list-decimal pl-5 text-sm text-slate-600">
                    {post.steps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card">
                  <h3>Documents to keep ready</h3>
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                    {post.documents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Kadapa local notes</h3>
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                    {post.localNotes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card overflow-x-auto">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {post.table.heading}
                </h3>
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="text-slate-700">
                      {post.table.headers.map((header) => (
                        <th key={header} className="border-b border-slate-200 pb-2">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    {post.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${rowIndex}-${cellIndex}`}
                            className={`py-3 ${
                              rowIndex < post.table.rows.length - 1
                                ? "border-b border-slate-100"
                                : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="callout">
                <p className="prose">
                  <strong>Need clarity for a Kadapa legal matter?</strong> Call{" "}
                  {BUSINESS.phone} or visit the office beside Kadapa District
                  Court for a focused consultation.
                </p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="card">
                <h3>Kadapa Advocate Snapshot</h3>
                <p className="prose">
                  Local court-ready guidance for Kadapa District Court matters
                  with clear documentation and timelines.
                </p>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                  {post.snapshot.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Quick Contact</h3>
                <p className="prose">
                  Speak directly with the advocate office in Kadapa for a clear
                  case assessment.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    className="cta-primary text-center"
                    href={`tel:${BUSINESS.phoneTel}`}
                  >
                    Call {BUSINESS.phone}
                  </a>
                  <Link className="cta-secondary text-center" href="/contact">
                    Visit Office
                  </Link>
                </div>
              </div>
              <div className="card">
                <h3>Related Services</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                  {post.relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href}>{service.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: BLOG_POSTS.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}
