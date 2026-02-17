import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Stack grouped by role and delivery"
          subtitle="Designed to be recruiter-skimmable while still technically specific."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <Card key={group.group} className="p-5">
              <h3 className="mb-4 text-lg font-semibold">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
