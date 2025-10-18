import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import paths from "@/data/paths.json";
import Link from "next/link";

export function Menu({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={cn(
        "fixed bg-background right-0 top-15 w-full gap-4 px-4 py-5 md:hidden flex-col text-center items-center justify-center z-20",
        isActive ? "flex" : "hidden"
      )}
    >
      <ul className="md:hidden flex flex-col gap-2 text-sm w-full">
        {paths.map((path) => (
          <Link
            href={`${path.path}`}
            key={path.id}
            className="cursor-pointer hover:bg-accent duration-300 py-2"
          >
            {path.name}
          </Link>
        ))}
      </ul>
      <Button className="w-full font-bold flex gap-1 items-center justify-center cursor-pointer">
        <p>Try it now</p>
        <ChevronRight />
      </Button>
    </div>
  );
}
