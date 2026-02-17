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
          subtitle="Each role highlights user, reliability, and delivery outcomes."
        />

        <div className="space-y-4">
          {profile.experience.map((item) => (
            <Card key={`${item.company}-${item.start}`} className="p-6">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {item.role} · {item.company}
                </h3>
                <p className="text-sm text-muted-foreground">
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
