export interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}
export interface FilterItem {
  id: string;
  title: string;
}
export interface MdxArticleProps {
  code: string;
}
export interface PostItemsProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  image: string;
}
export interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}
export interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}
export interface ArticlePageProps {
  searchParams: {
    page?: string;
  };
}
export interface PostPageProps {
  params: {
    slug: string[];
  };
}
export interface ProjectPageProps {
  searchParams: {
    page?: string;
  };
}
