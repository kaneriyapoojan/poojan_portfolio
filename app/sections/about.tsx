import { Compass, Target } from "lucide-react";

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
          subtitle="Concise narratives you can reuse for applications, intros, and interviews."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {profile.aboutVariants.map((about) => (
              <Card key={about} className="p-5 text-sm text-muted-foreground">
                {about}
              </Card>
            ))}
          </div>

          <div className="grid gap-4">
            <Card className="p-5">
              <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Target className="h-4 w-4 text-primary" /> What I am looking for
              </p>
              <p className="text-sm text-muted-foreground">{profile.goals}</p>
            </Card>

            <Card className="p-5">
              <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Compass className="h-4 w-4 text-primary" /> Current focus
              </p>
              <p className="text-sm text-muted-foreground">
                Building mobile-first products with strong backend foundations while expanding into practical
                transformer, diffusion, and model-evaluation workflows.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
