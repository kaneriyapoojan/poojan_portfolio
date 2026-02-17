# Poojan Portfolio (Next.js)

Production-ready personal portfolio built with:

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- shadcn-style reusable UI components
- Framer Motion (subtle reveals)
- Dark/light mode
- Command palette (Cmd/Ctrl + K)
- GitHub API-powered stats block (ISR)

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Data source of truth

Edit profile content in:

- `app/data/profile.ts`

This file stores summary variants, skills, experience, projects, education, and certifications.

## Source verification notes

- GitHub profile and repos were extracted via GitHub API.
- Resume was extracted from `/Users/poojan/UB/JOB SEARCH/Poojan_Kaneriya_Resume.pdf` and copied to `public/resume/Poojan_Kaneriya_Resume.pdf`.
- LinkedIn public content is behind auth wall during scraping, so fields needing confirmation are marked as TODO in `app/data/profile.ts`.

## Environment variables (optional)

GitHub unauthenticated API calls work for low traffic. To increase rate limits, set:

```bash
GITHUB_TOKEN=your_token
```

Create `.env.local`:

```bash
GITHUB_TOKEN=...
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Add `GITHUB_TOKEN` in Vercel Project Settings (optional but recommended).
5. Deploy.

## Custom domain on Vercel

1. In Vercel: Project -> Settings -> Domains.
2. Add your domain (`poojankaneriya.in` or subdomain).
3. Update DNS records as instructed by Vercel.
4. Wait for SSL issuance and propagation.

## Accessibility and motion

- Reduced-motion users are respected via CSS media query and parallax fallback.
- Semantic headings and color contrast-friendly palette are used.

## TODOs to confirm

- LinkedIn headline/experience text from public profile.
- Public repository links for resume-listed projects without GitHub URLs.
- Certification verification URL.
