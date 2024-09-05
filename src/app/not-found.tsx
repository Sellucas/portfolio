import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background py-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-medium">Page Not Found</h2>
        <p className="opacity-50">
          We couldn&apos;t find the requested resource
        </p>
        <Button asChild className="mt-3 rounded-[6px] bg-foreground">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </section>
  );
}
