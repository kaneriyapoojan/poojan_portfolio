"use client";

import Link from "next/link";
import { Command, Home } from "lucide-react";

import { useActiveSection } from "@/app/hooks/use-active-section";
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";

type NavItem = {
  id: string;
  label: string;
};

export function StickyNav({
  items,
  onOpenCommand
}: {
  items: NavItem[];
  onOpenCommand: () => void;
}) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="section-container">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3">
          <Link href="#top" className="inline-flex items-center gap-2 font-semibold">
            <Home className="h-4 w-4 text-primary" />
            Poojan
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
            <Button variant="outline" size="sm" onClick={onOpenCommand} className="gap-1">
              <Command className="h-4 w-4" />
              <span className="hidden sm:inline">Command</span>
              <span className="ml-1 rounded border border-border px-1.5 text-xs">K</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
