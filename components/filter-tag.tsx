import { Badge } from "@/components/ui/badge";

type TagProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

export const FilterTag = ({ children, isActive = false }: TagProps) => {
  return (
    <Badge
      className={`cursor-pointer bg-background  px-3 py-2 border-2 text-sm font-normal border-muted-foreground text-muted-background hover:bg-muted-foreground/10 ${
        isActive
          ? "bg-blue-500 dark:bg-gray-900 text-white border-blue-500 hover:bg-blue-500"
          : ""
      }`}
    >
      {children}
    </Badge>
  );
};
