import Header from "@/components/header";
import { FeaturedPosts } from "@/components/featured-posts";

const PostsPage = () => {
  return (
    <>
      <Header firstLink={{ text: "Posts", href: "posts" }} />
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">All Posts</h1>
        <FeaturedPosts />
      </section>
    </>
  );
};

export default PostsPage;
