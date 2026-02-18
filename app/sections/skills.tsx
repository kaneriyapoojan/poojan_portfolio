import {
  BrainCircuit,
  CloudCog,
  LayoutTemplate,
  ServerCog,
  Smartphone
} from "lucide-react";

import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillIcons = {
  Mobile: Smartphone,
  Frontend: LayoutTemplate,
  Backend: ServerCog,
  "Cloud/DevOps": CloudCog,
  "AI/ML": BrainCircuit
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Capability map"
          subtitle="Role-oriented stack grouped to make recruiter scanning faster."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => {
            const Icon = skillIcons[group.group];

            return (
              <Card key={group.group} className="group relative overflow-hidden p-5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-accent" />
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary transition group-hover:scale-105">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.group}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
