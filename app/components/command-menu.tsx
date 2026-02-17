"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

type LinkItem = {
  label: string;
  href: string;
};

export function CommandMenu({
  sections,
  projects,
  open,
  setOpen
}: {
  sections: LinkItem[];
  projects: LinkItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        project.label.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [projects, query]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Command Menu</DialogTitle>
          <DialogDescription>Navigate to sections and projects quickly</DialogDescription>
        </DialogHeader>

        <Command>
          <CommandInput
            placeholder="Go to section or project..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Sections">
              {sections.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    window.location.hash = item.href;
                    setOpen(false);
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Projects">
              {filteredProjects.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    window.location.hash = item.href;
                    setOpen(false);
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
