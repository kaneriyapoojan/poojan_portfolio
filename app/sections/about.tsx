import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Engineer focused on outcomes, not just features"
          subtitle="Two to three concise narratives you can reuse for applications, intros, and interviews."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {profile.aboutVariants.map((about) => (
            <Card key={about} className="p-5 text-sm text-muted-foreground">
              {about}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
