import Seo from "@/components/Seo";
import PracticeAreaPage from "@/components/PracticeAreaPage";
import { SITE_URL } from "@/lib/site-data";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getLegalServiceSchema,
  getServiceSchema,
} from "@/lib/schema";
import {
  PRACTICE_PAGES,
  PRACTICE_PAGE_MAP,
  getDefaultFaqs,
} from "@/lib/practice-pages";

export default function PracticePage({ page, related, faqs }) {
  const path = `/${page.slug}`;
  const schema = [
    getLegalServiceSchema(),
    getServiceSchema({
      name: page.service,
      description: page.metaDescription,
      url: `${SITE_URL}${path}`,
    }),
    getFaqSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: page.service, href: path },
    ]),
  ];

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        schema={schema}
        keywords={page.keywords}
      />
      <PracticeAreaPage page={page} related={related} faqs={faqs} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: PRACTICE_PAGES.map((page) => ({ params: { slug: page.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = PRACTICE_PAGE_MAP[params.slug];

  if (!page) {
    return { notFound: true };
  }

  const relatedSame = PRACTICE_PAGES.filter(
    (item) => item.category === page.category && item.slug !== page.slug
  ).slice(0, 4);

  const relatedOther = PRACTICE_PAGES.filter(
    (item) => item.category !== page.category
  ).slice(0, 2);

  const related = [...relatedSame, ...relatedOther]
    .slice(0, 6)
    .map(({ faqs, ...rest }) => rest);
  const faqs = page.faqs && page.faqs.length ? page.faqs : getDefaultFaqs(page);
  const safePage = { ...page, faqs: page.faqs || null };

  return {
    props: {
      page: safePage,
      related,
      faqs,
    },
  };
}
