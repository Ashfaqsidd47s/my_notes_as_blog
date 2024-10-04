import { H1 } from "@/components/typography/H1";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start">
        <H1>Coding Blogs</H1>
        <div className="w-full p-4 flex items-center justify-between">
          <Link href="/testblogs/tree" >
            <Button>Tree</Button>
          </Link>
          <Link href="/testblogs/sql" >
            <Button>SQL</Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        This is footer
      </footer>
    </div>
  );
}
