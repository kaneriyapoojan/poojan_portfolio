"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
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
  { label: "AWS + Cloud", icon: Cloud },
  { label: "Applied AI/ML", icon: BrainCircuit }
];

const quickStats = [
  { label: "Booking conversion", value: "+18%" },
  { label: "Cold start", value: "-35%" },
  { label: "Crash-free sessions", value: "99%" }
];

export function HeroSection() {
  const offset = useParallax(0.08);

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <Badge variant="accent" className="mb-5 gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Open to Software Engineer roles
            </Badge>

            <h1 className="text-5xl leading-none md:text-7xl">
              <span className="font-serif italic">Poojan</span>
              <br />
              <span className="font-serif italic">Kaneriya</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-foreground/90 md:text-2xl">
              Mobile + Full-Stack Software Engineer
            </p>

            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              I build high-performance mobile apps and cloud-backed APIs with a focus on measurable
              product outcomes.
            </p>

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

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {quickStats.map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px]">
            <motion.div
              className="section-glow absolute left-0 top-10 z-10 w-[70%]"
              style={{ transform: `translateY(${Math.max(-24, -offset * 0.6)}px)` }}
            >
              <Card className="overflow-hidden p-0">
                <Image
                  src={openSourceAssets.heroPanels[0].src}
                  alt={openSourceAssets.heroPanels[0].alt}
                  width={1400}
                  height={900}
                  className="h-48 w-full object-cover"
                />
                <div className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mobile + Product</p>
                  <p className="text-sm text-muted-foreground">
                    Building app flows that are fast, reliable, and conversion-driven.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 z-20 w-[50%]"
              style={{ transform: `translateY(${Math.max(-32, -offset * 0.8)}px)` }}
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
              style={{ transform: `translateY(${Math.max(-16, -offset * 0.4)}px)` }}
            >
              <Card className="overflow-hidden p-0">
                <Image
                  src={openSourceAssets.heroPanels[1].src}
                  alt={openSourceAssets.heroPanels[1].alt}
                  width={1400}
                  height={900}
                  className="h-36 w-full object-cover"
                />
                <div className="space-y-1 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Cloud + Reliability</p>
                  <p className="text-sm text-muted-foreground">
                    API and release infrastructure designed for consistency at scale.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute bottom-14 left-8 z-30 hidden w-44 lg:block"
              style={{ transform: `translateY(${Math.max(-10, -offset * 0.25)}px)` }}
            >
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Now exploring</p>
                <p className="mt-2 text-sm font-medium">Practical AI/ML in product workflows</p>
                <ArrowUpRight className="mt-2 h-4 w-4 text-primary" />
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
