import Header from "@/components/header";
import { FeaturedPosts } from "@/components/featured-posts";

const PostsPage = () => {
  return (
    <>
      <Header firstLink={{ text: "Posts", href: "posts" }} />
      <section className="flex flex-col gap-4">
        <h1 className="animate-slide-from-down-and-fade-1 text-4xl font-semibold">
          All Posts
        </h1>
        <div className="animate-slide-from-down-and-fade-2 min-h-[60vh]">
          <FeaturedPosts />
        </div>
      </section>
    </>
  );
};

export default PostsPage;
