"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import type { ProjectItem } from "@/app/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

export function ProjectModal({ project }: { project: ProjectItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Case Study
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.shortStory}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm font-medium text-primary">Impact: {project.impact}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>

          {project.screenshots?.[0] ? (
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src={project.screenshots[0]}
                alt={`${project.name} screenshot`}
                width={1400}
                height={800}
                className="h-auto w-full"
              />
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {project.repoUrl ? (
              <Button asChild variant="outline" size="sm">
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-1 h-4 w-4" /> Repo
                </a>
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button asChild variant="outline" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" /> Live
                </a>
              </Button>
            ) : null}
          </div>

          {project.note ? <p className="text-xs text-muted-foreground">{project.note}</p> : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
