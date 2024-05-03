import { projects } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";
import { Filter } from "@/components/filter";

const POSTS_PER_PAGE = 12;

interface ProjectPageProps {
  searchParams: {
    page?: string;
  };
}

const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(projects.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const filterItems = [
    { id: "recent", title: "Recente" },
    { id: "frontend", title: "Front-End" },
    { id: "fullstack", title: "Fullstack" },
    { id: "plugin", title: "Plugin" },
  ];

  return (
    <div>
      <div className="flex gap-2">
        <Filter items={filterItems} />
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

export default ProjectPage;
