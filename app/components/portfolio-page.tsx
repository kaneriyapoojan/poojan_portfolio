"use client";

import { useMemo, useState } from "react";

import { profile } from "@/app/data/profile";
import type { GitHubStats } from "@/app/lib/github";
import { CommandMenu } from "@/app/components/command-menu";
import { StickyNav } from "@/app/components/sticky-nav";
import { AboutSection } from "@/app/sections/about";
import { ContactSection } from "@/app/sections/contact";
import { EducationSection } from "@/app/sections/education";
import { ExperienceSection } from "@/app/sections/experience";
import { GithubProofSection } from "@/app/sections/github-proof";
import { HeroSection } from "@/app/sections/hero";
import { ProjectsSection } from "@/app/sections/projects";
import { SkillsSection } from "@/app/sections/skills";
import { SpotlightSection } from "@/app/sections/spotlight";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export function PortfolioPage({ stats }: { stats: GitHubStats }) {
  const [openCommand, setOpenCommand] = useState(false);

  const projectCommands = useMemo(
    () =>
      profile.projects.map((project) => ({
        label: project.name,
        href: `project-${project.id}`
      })),
    []
  );

  return (
    <>
      <div className="noise" />
      <StickyNav items={navItems} onOpenCommand={() => setOpenCommand(true)} />
      <main id="top" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SpotlightSection />
        <GithubProofSection stats={stats} />
        <EducationSection />
        <ContactSection />
      </main>

      <CommandMenu
        sections={navItems.map((item) => ({ label: item.label, href: item.id }))}
        projects={projectCommands}
        open={openCommand}
        setOpen={setOpenCommand}
      />
    </>
  );
}
