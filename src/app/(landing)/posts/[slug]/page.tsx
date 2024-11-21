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
      <main className="prose prose-invert animate-slide-from-down-and-fade-2 max-w-2xl">
        <article>{blog.content}</article>
      </main>
      <p className="text-sm text-muted-foreground text-center mt-12">Published: {blog.frontmatter.date}</p>
    </>
  );
}
