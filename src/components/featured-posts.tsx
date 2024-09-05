import React from "react";
import Link from "next/link";

interface PostItemProps {
  title: string;
  linkHref: string;
  date: string;
}

const PostItem = ({ title, linkHref, date }: PostItemProps) => (
  <Link
    href={linkHref}
    className="rounded-[6px] bg-background p-2 transition duration-150 ease-in-out hover:bg-[#161716]"
  >
    <div className="flex justify-between">
      <h1>{title}</h1>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  </Link>
);

interface FeaturedPostsProps {
  limit?: number;
}

export const FeaturedPosts = ({ limit }: FeaturedPostsProps) => {
  const posts = [
    {
      title: "Optimizing SEO in Next.js",
      linkHref: "/posts/optimizing-seo-in-nextjs",
      date: "May 15, 2024",
    },
    {
      title: "Next.js blog with MDX",
      linkHref: "/posts/nextjs-blog-with-mdx",
      date: "Sept 09, 2024",
    },
  ];

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="flex flex-col gap-2 pt-4">
      {displayedPosts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title}
          linkHref={post.linkHref}
          date={post.date}
        />
      ))}
    </div>
  );
};
