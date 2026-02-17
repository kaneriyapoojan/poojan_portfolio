import Image from "next/image";

import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Card } from "@/components/ui/card";

export function SpotlightSection() {
  const featured = profile.projects.filter((project) =>
    ["vit-cats-dogs", "s2s-connect"].includes(project.id)
  );

  return (
    <section id="spotlight" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured"
          title="Project Spotlight"
          subtitle="Deeper visual focus on one ML and one mobile product project."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/15 to-transparent" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-primary">{project.impact}</p>
                <p className="text-sm text-muted-foreground">{project.shortStory}</p>
                {project.screenshots?.[0] ? (
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.name} preview`}
                    width={1200}
                    height={600}
                    className="rounded-xl border border-border"
                  />
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
