"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Smartphone
} from "lucide-react";

import { profile } from "@/app/data/profile";
import { openSourceAssets } from "@/app/data/open-source-assets";
import { useParallax } from "@/app/hooks/use-parallax";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const capabilityChips = [
  { label: "Android + React Native", icon: Smartphone },
  { label: "AWS + Cloud Systems", icon: Cloud },
  { label: "Applied AI/ML", icon: BrainCircuit }
];

export function HeroSection() {
  const offset = useParallax(0.09);

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <Badge variant="accent" className="mb-5 gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Open to Software Engineer roles
            </Badge>

            <h1 className="max-w-3xl text-4xl leading-[1.05] md:text-6xl">
              <span className="font-serif italic">{profile.name}</span>
              <br />
              {profile.oneLiner}
            </h1>

            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{profile.goals}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {capabilityChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {chip.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="relative min-h-[460px]">
            <motion.div
              className="section-glow absolute left-0 top-12 z-10 w-[74%]"
              style={{ transform: `translateY(${Math.max(-28, -offset * 0.5)}px)` }}
            >
              <Card className="overflow-hidden p-0">
                <Image
                  src={openSourceAssets.heroPanels[0].src}
                  alt={openSourceAssets.heroPanels[0].alt}
                  width={1400}
                  height={900}
                  className="h-44 w-full object-cover"
                />
                <div className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mobile + Product</p>
                  <p className="text-sm text-muted-foreground">
                    Shipping performant app journeys with measurable conversion impact.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 z-20 w-[52%]"
              style={{ transform: `translateY(${Math.max(-34, -offset * 0.75)}px)` }}
            >
              <Card className="overflow-hidden p-0">
                <Image
                  src="https://avatars.githubusercontent.com/u/58319619?v=4"
                  alt="Poojan Kaneriya avatar"
                  width={600}
                  height={600}
                  className="h-52 w-full object-cover"
                />
                <div className="p-3 text-xs text-muted-foreground">New York, USA · Available for interviews</div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-8 z-10 w-[62%]"
              style={{ transform: `translateY(${Math.max(-18, -offset * 0.35)}px)` }}
            >
              <Card className="overflow-hidden p-0">
                <Image
                  src={openSourceAssets.heroPanels[1].src}
                  alt={openSourceAssets.heroPanels[1].alt}
                  width={1400}
                  height={900}
                  className="h-40 w-full object-cover"
                />
                <div className="space-y-1 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Cloud + Reliability</p>
                  <p className="text-sm text-muted-foreground">
                    Building resilient APIs, release pipelines, and real-time systems at scale.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profile.proofPoints.map((point, index) => (
            <Card key={point} className="p-4 text-sm text-muted-foreground">
              <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                {index + 1}
              </span>
              <p>{point}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
