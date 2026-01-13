import Seo from "@/components/Seo";
import BlogIndex from "@/components/BlogIndex";
import { getBreadcrumbSchema, getLegalServiceSchema } from "@/lib/schema";
import { getBlogPage } from "@/lib/blog-posts";

export default function BlogIndexPage({ posts, page, totalPages }) {
  const title = "Kadapa Legal Blog | Rajesh Kumar Reddy Advocate Office";
  const description =
    "Local legal guides for Kadapa on choosing a lawyer, preparing documents, and understanding court process.";
  const path = "/blog";
  const keywords =
    "Kadapa legal blog, Kadapa lawyer tips, advocate Kadapa guidance, Kadapa District Court process";

  const schema = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
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
      />

      <BlogIndex posts={posts || []} page={page || 1} totalPages={totalPages || 1} />
    </>
  );
}

export async function getStaticProps() {
  const { posts, page, totalPages } = getBlogPage(1);

  return {
    props: {
      posts,
      page,
      totalPages,
    },
  };
}
