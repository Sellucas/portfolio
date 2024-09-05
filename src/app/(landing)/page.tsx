import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeaturedPosts } from "@/components/featured-posts";
import { FeaturedSocials } from "@/components/featured-socials";
import { FeaturedProjects } from "@/components/featured-projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Avatar className="size-14">
              <AvatarImage src="profile.png" />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold">Lucas Sell Machado</h1>
              <h2 className="text-sm text-muted-foreground">
                Software Developer
              </h2>
            </div>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for work
          </div>
        </div>
        <FeaturedSocials />
      </section>
      <section className="pt-10">
        <h1 className="font-semibold">About me</h1>
        <p className="pt-4 font-medium text-muted-foreground">
          Hi, I&apos;m Lucas from Florianópolis, Brazil. I enjoy building
          fullstack web applications, contributing to every stage from
          conception to delivery. Passionate about sharing my knowledge and
          experience, learning new technologies and open-source software.
        </p>
      </section>
      <section className="pt-10">
        <h1 className="font-semibold">Featured Projects</h1>
        <FeaturedProjects limit={3} />
        <div className="flex justify-end">
          <Button variant={"link"} className="mt-4">
            <Link
              href={"/projects"}
              className="flex items-center gap-1 text-muted-foreground underline transition duration-150 ease-in-out hover:text-white"
            >
              <p>All projects</p>
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="pt-10">
        <h1 className="font-semibold">Featured Posts</h1>
        <FeaturedPosts limit={3} />
        <div className="flex justify-end">
          <Button variant={"link"} className="mt-4">
            <Link
              href={"/posts"}
              className="flex items-center gap-1 text-muted-foreground underline transition duration-150 ease-in-out hover:text-white"
            >
              <p>All posts</p>
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
