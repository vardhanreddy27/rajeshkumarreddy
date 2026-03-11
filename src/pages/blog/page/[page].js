import Seo from "@/components/Seo";
import BlogIndex from "@/components/BlogIndex";
import { SITE_URL } from "@/lib/site-data";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";
import { BLOG_POSTS, BLOG_POSTS_PER_PAGE, getBlogPage } from "@/lib/blog-posts";

export default function BlogPage({ posts, page, totalPages }) {
  const title = `Kadapa Legal Blog - Page ${page}`;
  const description =
    "Kadapa legal blog with practical guidance for civil, criminal, property, and family court matters in YSR Kadapa District.";
  const path = `/blog/page/${page}`;
  const keywords =
    "Kadapa legal blog, Kadapa lawyer tips, advocate Kadapa guidance, Kadapa District Court process";
  const prevPage = page > 2 ? `/blog/page/${page - 1}` : page === 2 ? "/blog" : undefined;
  const nextPage = page < totalPages ? `/blog/page/${page + 1}` : undefined;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${path}#collection`,
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const schema = [
    getLegalServiceSchema(),
    itemListSchema,
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: `Page ${page}`, href: path },
    ]),
  ];

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={schema}
        keywords={keywords}
        prevUrl={prevPage}
        nextUrl={nextPage}
      />

      <BlogIndex posts={posts || []} page={page || 1} totalPages={totalPages || 1} />
    </>
  );
}

export async function getStaticPaths() {
  const totalPages = Math.ceil(BLOG_POSTS.length / BLOG_POSTS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).slice(
    1
  );

  return {
    paths: pages.map((page) => ({ params: { page: String(page) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const { posts, page, totalPages } = getBlogPage(pageNumber);

  return {
    props: {
      posts,
      page,
      totalPages,
    },
  };
}
