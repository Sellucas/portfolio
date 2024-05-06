import { cn } from "@/lib/utils";

interface HomeTagProps {
  children: React.ReactNode;
  className?: string;
}

export const HomeTag = ({ children, className }: HomeTagProps) => {
  return (
    <p
      className={cn(
        "text-xl py-2 px-4 rounded-full bg-white/35 cursor-default hover:bg-blue-700 ease-in-out duration-300",
        className
      )}
    >
      {children}
    </p>
  );
};
