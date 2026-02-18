import { BriefcaseBusiness } from "lucide-react";

import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Card } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Timeline of impact"
          subtitle="Product execution, reliability work, and measurable outcomes across each role."
        />

        <div className="relative space-y-5 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:bg-border md:before:left-6">
          {profile.experience.map((item) => (
            <Card key={`${item.company}-${item.start}`} className="relative p-6 pl-12 md:pl-16">
              <span className="absolute left-0 top-7 inline-flex h-8 w-8 translate-x-0 items-center justify-center rounded-full border border-border bg-card text-primary md:left-2">
                <BriefcaseBusiness className="h-4 w-4" />
              </span>

              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {item.role} · {item.company}
                </h3>
                <p className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {item.start} - {item.end}
                </p>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{item.location}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
