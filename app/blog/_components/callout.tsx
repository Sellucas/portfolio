import { cn } from "@/lib/utils";
import { CalloutProps } from "@/types";

export const Callout = ({
  children,
  type = "default",
  ...props
}: CalloutProps) => {
  return (
    <div
      className={cn(
        "my-2 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-600 bg-red-50 text-red-600": type === "danger",
          "border-yellow-600 bg-yellow-50 text-yellow-600": type === "warning",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
};
