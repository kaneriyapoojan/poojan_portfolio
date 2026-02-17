const GITHUB_API = "https://api.github.com";

export type GitHubStats = {
  stars: number;
  publicRepos: number;
  topLanguages: Array<{ name: string; bytes: number }>;
  recentPushEvents: number;
  reposAnalyzed: number;
};

type GitHubRepo = {
  name: string;
  stargazers_count: number;
  fork: boolean;
  languages_url: string;
};

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${GITHUB_API}${path}`, {
    headers: process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : undefined
  });

  if (!res.ok) {
    throw new Error(`GitHub API request failed: ${path} (${res.status})`);
  }

  return (await res.json()) as T;
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const [user, repos, events] = await Promise.all([
      ghFetch<{ public_repos: number }>(`/users/${username}`),
      ghFetch<GitHubRepo[]>(`/users/${username}/repos?per_page=100&sort=updated`),
      ghFetch<Array<{ type: string }>>(`/users/${username}/events/public?per_page=100`)
    ]);

    const ownRepos = repos.filter((repo) => !repo.fork);
    const stars = ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    const languageMaps = await Promise.all(
      ownRepos.slice(0, 12).map(async (repo) => {
        const res = await fetch(repo.languages_url, {
          headers: process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : undefined
        });
        if (!res.ok) {
          return {} as Record<string, number>;
        }
        return (await res.json()) as Record<string, number>;
      })
    );

    const languageTotals = languageMaps.reduce<Record<string, number>>((acc, cur) => {
      Object.entries(cur).forEach(([name, bytes]) => {
        acc[name] = (acc[name] ?? 0) + bytes;
      });
      return acc;
    }, {});

    const topLanguages = Object.entries(languageTotals)
      .map(([name, bytes]) => ({ name, bytes }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 6);

    const recentPushEvents = events.filter((event) => event.type === "PushEvent").length;

    return {
      stars,
      publicRepos: user.public_repos,
      topLanguages,
      recentPushEvents,
      reposAnalyzed: ownRepos.length
    };
  } catch {
    return {
      stars: 0,
      publicRepos: 0,
      topLanguages: [],
      recentPushEvents: 0,
      reposAnalyzed: 0
    };
  }
}
