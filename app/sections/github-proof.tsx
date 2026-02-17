import { Star } from "lucide-react";

import type { GitHubStats } from "@/app/lib/github";
import { SectionHeading } from "@/app/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function GithubProofSection({ stats }: { stats: GitHubStats }) {
  return (
    <section id="proof" className="py-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="GitHub Proof"
          title="Signals from live repository data"
          subtitle="Fetched from GitHub API with ISR revalidation."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Public Repos</p>
            <p className="mt-2 text-3xl font-semibold">{stats.publicRepos}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Total Stars</p>
            <p className="mt-2 flex items-center gap-2 text-3xl font-semibold">
              <Star className="h-5 w-5 text-accent" /> {stats.stars}
            </p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Recent Push Events (last 100 events)</p>
            <p className="mt-2 text-3xl font-semibold">{stats.recentPushEvents}</p>
          </Card>
        </div>

        <Card className="mt-4 p-5">
          <p className="mb-3 text-sm text-muted-foreground">Top Languages by bytes (sampled repos)</p>
          <div className="flex flex-wrap gap-2">
            {stats.topLanguages.length ? (
              stats.topLanguages.map((language) => (
                <Badge key={language.name}>
                  {language.name} · {Math.round(language.bytes / 1000)}k
                </Badge>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">No language stats available.</span>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
