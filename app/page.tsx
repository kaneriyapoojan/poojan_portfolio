import { profile } from "@/app/data/profile";
import { getGitHubStats } from "@/app/lib/github";
import { PortfolioPage } from "@/app/components/portfolio-page";

export default async function HomePage() {
  const stats = await getGitHubStats("kaneriyapoojan");

  return <PortfolioPage stats={stats} />;
}

export async function generateMetadata() {
  return {
    title: profile.name,
    description: profile.oneLiner,
    alternates: {
      canonical: profile.links.website
    }
  };
}
