import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="text-2xl font-medium">Página não encontrada</h2>
        <p className="opacity-50">Não foi possível encontrar o recurso solicitado</p>
        <Button asChild className="mt-3 bg-foreground">
          <Link href="/blog">Retorne ao Blog</Link>
        </Button>
      </div>
    </section>
  );
}
