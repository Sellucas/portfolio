import { Sidebar } from "@/app/blog/_components/sidebar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background">
      <div className="max-w-[1575px] mx-auto flex mt-32">
        <div className="hidden xl:block sticky top-32 h-screen flex-none w-16">
          <Sidebar />
        </div>
        <div className="ml-0 px-2 xl:px-0 xl:ml-64 w-full">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
