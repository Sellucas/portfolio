import Header from "@/components/header";
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";
import { ScrollTop } from "@/components/scroll-top";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <>
      <Header
        firstLink={{ text: "Posts", href: "posts" }}
        secondLink={{
          text: blog.frontmatter.title,
          href: `/posts/${blog.slug}`,
        }}
      />
      <ScrollTop />
      <main className="prose prose-invert">
        <article>{blog.content}</article>
      </main>
    </>
  );
}
