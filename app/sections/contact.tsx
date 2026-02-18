"use client";

import { CalendarDays, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
          subtitle="Reach out for Software Engineer roles, technical interviews, or collaboration opportunities."
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
                Send Message
              </Button>
            </form>
          </Card>

          <div className="grid gap-4">
            <Card className="space-y-4 p-6 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                <CalendarDays className="h-4 w-4 text-primary" /> Fastest contact
              </div>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> {profile.phone}
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {profile.location}
              </p>
            </Card>

            <Card className="space-y-3 p-6 text-sm text-muted-foreground">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Download Resume
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
