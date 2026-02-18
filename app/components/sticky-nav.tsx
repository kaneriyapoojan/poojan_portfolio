"use client";

import Link from "next/link";
import { Home } from "lucide-react";

import { useActiveSection } from "@/app/hooks/use-active-section";
import { cn } from "@/app/lib/utils";
import { ThemeToggle } from "@/app/components/theme-toggle";

type NavItem = {
  id: string;
  label: string;
};

export function StickyNav({
  items
}: {
  items: NavItem[];
}) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="section-container">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3 shadow-glow">
          <Link href="#top" className="inline-flex items-center gap-2.5 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
              PK
            </span>
            <span className="hidden sm:inline">Poojan</span>
            <Home className="h-4 w-4 text-primary sm:hidden" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition",
                  active === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
