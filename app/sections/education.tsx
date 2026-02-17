import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Card } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background and certifications"
          subtitle="Verified from resume extraction."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {profile.education.map((item) => (
            <Card key={item.degree} className="p-6">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} · {item.location}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </Card>
          ))}

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {profile.certifications.map((cert) => (
                <li key={cert.name}>• {cert.name} ({cert.link})</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
