import Header from "@/components/header";
import { FeaturedProjects } from "@/components/featured-projects";

const ProjectsPage = () => {
  return (
    <>
      <Header firstLink={{ text: "Projects", href: "projects" }} />
      <section className="flex flex-col gap-4">
        <h1 className="animate-slide-from-down-and-fade-1 text-4xl font-semibold">
          All Projects
        </h1>
        <div className="animate-slide-from-down-and-fade-2">
          <FeaturedProjects />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
