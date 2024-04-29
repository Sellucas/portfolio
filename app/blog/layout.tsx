import { Sidebar } from "@/components/sidebar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1575px] mx-auto flex mt-32">
      <Sidebar />
      <div className="ml-0 px-2 lg:px-0 lg:ml-72 w-full">{children}</div>
    </div>
  );
};

export default BlogLayout;
