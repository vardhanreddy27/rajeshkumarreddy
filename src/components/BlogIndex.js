import Link from "next/link";
import Image from "next/image";

export default function BlogIndex({ posts = [], page = 1, totalPages = 1 }) {
  const getPageHref = (pageNumber) =>
    pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}`;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Kadapa Legal Blog{page > 1 ? ` · Page ${page}` : ""}
            </p>
            <h1 className="hero-title">Kadapa Legal Blog</h1>
            <p className="hero-subtitle">
              Practical legal guidance from a senior advocate with decades of
              courtroom experience. Each post focuses on real questions from
              clients in Kadapa.
            </p>
            <p className="prose max-w-2xl">
              Written by Rajesh Kumar Reddy, senior advocate in Kadapa and
              former President of Kadapa District Bar Association.
            </p>
            <p className="prose max-w-2xl">
              Topics include Kadapa District Court procedures, document
              preparation, timelines, and case strategy for civil, criminal,
              family, property, and cheque bounce matters. Each guide helps
              clients in YSR Kadapa District make informed decisions before a
              consultation.
            </p>
            <p className="prose max-w-2xl">
              New posts focus on common questions from Kadapa, Proddatur,
              Badvel, Pulivendula, Rajampet, and surrounding towns in Andhra
              Pradesh.
            </p>
          </div>
          <div className="hero-card max-w-[240px] md:max-w-[300px] justify-self-center">
            <Image
              src="/images/rajeshkumarreddyofficefront.jpeg"
              alt="Rajesh Kumar Reddy Advocate Office Kadapa"
              width={1200}
              height={720}
              sizes="(max-width: 860px) 70vw, 300px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <div key={post.slug} className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {post.date}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">
                  {post.title}
                </h2>
                <p className="prose mt-3">{post.excerpt}</p>
                <Link className="cta-secondary mt-4 inline-flex" href={`/blog/${post.slug}`}>
                  Read Article
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {page > 1 ? (
              <Link className="cta-secondary" href={getPageHref(page - 1)}>
                Previous
              </Link>
            ) : null}

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === page;
              return (
                <Link
                  key={pageNumber}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-900"
                  }`}
                  href={getPageHref(pageNumber)}
                >
                  {pageNumber}
                </Link>
              );
            })}

            {page < totalPages ? (
              <Link className="cta-secondary" href={getPageHref(page + 1)}>
                Next
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
