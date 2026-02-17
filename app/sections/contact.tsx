"use client";

import { profile } from "@/app/data/profile";
import { SectionHeading } from "@/app/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 pb-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          subtitle="Quick form sends a draft email. For production form backend, TODO: connect Formspree or Resend API."
        />

        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const name = String(formData.get("name") ?? "");
                const email = String(formData.get("email") ?? "");
                const message = String(formData.get("message") ?? "");
                const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
                window.location.href = `mailto:${profile.email}?subject=Portfolio Contact&body=${body}`;
              }}
            >
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Your email" required />
              <Textarea name="message" placeholder="Tell me about the role or project" required />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </Card>

          <Card className="space-y-3 p-6 text-sm text-muted-foreground">
            <p>{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="hover:text-foreground">
              Download Resume
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
