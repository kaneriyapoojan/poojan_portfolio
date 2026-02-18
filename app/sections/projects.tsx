"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { profile } from "@/app/data/profile";
import { openSourceAssets } from "@/app/data/open-source-assets";
import { SectionHeading } from "@/app/components/section-heading";
import { ProjectModal } from "@/app/components/project-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Mobile", "Full-stack", "ML"] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies across mobile, full-stack, and ML"
          subtitle="Visual cards + filterable categories. Metrics stay factual and source-backed."
        />

        <Tabs defaultValue="All" className="space-y-6">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => {
            const filtered =
              category === "All"
                ? profile.projects
                : profile.projects.filter((project) => project.category === category);

            return (
              <TabsContent key={category} value={category}>
                <div className="grid gap-4 md:grid-cols-2">
                  {filtered.map((project, index) => {
                    const cover =
                      project.screenshots?.[0] ?? openSourceAssets.categoryCovers[project.category];

                    return (
                      <motion.div
                        key={project.id}
                        id={`project-${project.id}`}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: index * 0.04 }}
                        className="h-full"
                      >
                        <Card className="group h-full overflow-hidden p-0">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={cover}
                              alt={`${project.name} visual`}
                              width={1200}
                              height={700}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                            <Badge variant="accent" className="absolute right-3 top-3">
                              {project.category}
                            </Badge>
                          </div>

                          <div className="space-y-4 p-6">
                            <div>
                              <h3 className="text-lg font-semibold">{project.name}</h3>
                              <p className="mt-1 text-sm text-primary">{project.impact}</p>
                            </div>

                            <p className="text-sm text-muted-foreground">{project.shortStory}</p>

                            <div className="flex flex-wrap gap-2">
                              {project.stack.slice(0, 5).map((stack) => (
                                <Badge key={`${project.id}-${stack}`}>{stack}</Badge>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <ProjectModal project={project} />
                              {project.repoUrl ? (
                                <Button asChild size="sm" variant="ghost">
                                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                    <Github className="mr-1 h-4 w-4" /> Repo
                                  </a>
                                </Button>
                              ) : null}
                              {project.liveUrl ? (
                                <Button asChild size="sm" variant="ghost">
                                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <ExternalLink className="mr-1 h-4 w-4" /> Live
                                  </a>
                                </Button>
                              ) : null}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
