import { FilterTag } from "@/components/filter-tag";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";

const POSTS_PER_PAGE = 12;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div>
      <div className="flex gap-2">
        <FilterTag isActive>Recente</FilterTag>
        <FilterTag>Nextjs</FilterTag>
        <FilterTag>SEO</FilterTag>
        <FilterTag>Otimização</FilterTag>
        <FilterTag>Data Base</FilterTag>
        <FilterTag>Animação</FilterTag>
        <FilterTag>Práticas</FilterTag>
        <FilterTag>Dicas</FilterTag>
      </div>
      <h1 className="mt-14 text-4xl font-medium">Todos os Posts</h1>
      <div className="mt-8">
        {displayPosts?.length > 0 ? (
          <ul className="flex flex-wrap gap-4">
            {displayPosts.map((post) => {
              const { slug, title, description, date, image } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    title={title}
                    description={description}
                    date={date}
                    image={image}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Ops! Parece que ainda não há nenhum post aqui.</p>
        )}
      </div>
      <QueryPagination
        totalPages={totalPages}
        className="justify-center mt-4"
      />
    </div>
  );
};

export default BlogPage;
