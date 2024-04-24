import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

type TagProps = {
  children: React.ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return (
    <Badge className="font-normal text-base bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100">
      {children} <MoveUpRight className="ml-1 w-4" />
    </Badge>
  );
};
