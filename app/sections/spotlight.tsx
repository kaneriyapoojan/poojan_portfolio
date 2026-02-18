"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { profile } from "@/app/data/profile";
import { openSourceAssets } from "@/app/data/open-source-assets";
import { useParallax } from "@/app/hooks/use-parallax";
import { SectionHeading } from "@/app/components/section-heading";
import { Card } from "@/components/ui/card";

export function SpotlightSection() {
  const offset = useParallax(0.04);
  const featured = profile.projects.filter((project) =>
    ["vit-cats-dogs", "s2s-connect"].includes(project.id)
  );

  return (
    <section id="spotlight" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured"
          title="Project spotlight"
          subtitle="Expanded visual treatment for one mobile and one ML project."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => {
            const fallback =
              project.category === "ML"
                ? openSourceAssets.heroPanels[2].src
                : openSourceAssets.heroPanels[0].src;
            const cover = project.screenshots?.[0] ?? fallback;

            return (
              <motion.div
                key={project.id}
                style={{ transform: `translateY(${Math.max(-14, -offset * (index + 1))}px)` }}
              >
                <Card className="overflow-hidden p-0">
                  <div className="relative h-56">
                    <Image
                      src={cover}
                      alt={`${project.name} preview`}
                      width={1200}
                      height={700}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-white/90">
                      {project.category}
                    </p>
                  </div>

                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-primary">{project.impact}</p>
                    <p className="text-sm text-muted-foreground">{project.shortStory}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
