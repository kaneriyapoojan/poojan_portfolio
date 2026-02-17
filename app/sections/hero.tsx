"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/app/data/profile";
import { useParallax } from "@/app/hooks/use-parallax";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const offset = useParallax(0.06);

  return (
    <section id="hero" className="relative pt-36 pb-16">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <Badge variant="accent" className="mb-4">
              Open to Software Engineer roles (Mobile / Full-Stack)
            </Badge>
            <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
              <span className="font-serif italic">{profile.name}</span>
              <br />
              {profile.oneLiner}
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">{profile.goals}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href={profile.links.resume} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </div>

          <Card
            className="space-y-4 p-6"
            style={{ transform: `translateY(${Math.max(-18, -offset)}px)` }}
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Quick Proof</p>
            <ul className="space-y-3 text-sm">
              {profile.proofPoints.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <p className="pt-2 text-xs text-muted-foreground">
              Based on resume + GitHub profile. LinkedIn details marked for manual confirmation.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
