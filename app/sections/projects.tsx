"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { profile } from "@/app/data/profile";
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
          subtitle="Only measurable metrics are shown; unverified items are explicitly labeled TODO."
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
                  {filtered.map((project, index) => (
                    <motion.div
                      key={project.id}
                      id={`project-${project.id}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Card className="h-full p-6">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <Badge variant="accent">{project.category}</Badge>
                        </div>

                        <p className="mb-3 text-sm text-primary">{project.impact}</p>
                        <p className="mb-4 text-sm text-muted-foreground">{project.shortStory}</p>

                        <div className="mb-4 flex flex-wrap gap-2">
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
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
