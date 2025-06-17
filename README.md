![ A website with the title "Rabia's internet space"](/public/images/ogimage.png)

# Product Marketing Portfolio Template (Built with Astro + Tailwind)

**Live site → [rabiaahmed.me](https://rabiaahmed.me/)**

A portfolio theme for marketers who don’t just write copy—they own funnels, ship GTM plays, and talk API without blinking. I built this template to show—not tell—how product marketers like me help early-stage products find traction and turn MVPs into revenue.

---

## Why I built this

Most portfolio themes out there are aimed at engineers. This one isn’t. I designed it for **product marketers, growth leads, and founders** who sit at the intersection of product, strategy, and execution—and need a site that reflects both strategic thinking *and* technical fluency.

It’s a mix of case-study storytelling, clean design, and growth analytics plumbing—without getting bloated.

| What startup teams care about | How this theme delivers |
| --- | --- |
| **Proof of business impact** | Case-study blocks with pull quotes, crisp KPIs, and real GTM insights |
| **Technical empathy** | Terminal-style hero, minimal UI, dark mode toggle, snappy performance |
| **Strategic thinking** | Long-form MDX support to break down go-to-market bets or teardown experiments |
| **Growth tracking** | Optional PostHog instrumentation and event tagging baked in (opt-in, privacy-friendly) |

---

## Stack Overview

- **Astro** – Optimised for speed and modularity via component islands.
- **Tailwind CSS** – Utility-first styling with sensible design tokens.
- **TypeScript** – For clean type safety and confidence in logic.
- **Lucide Icons** – SVG-based icons that don’t slow things down.
- **Docker + Nginx-alpine** – Packaged for one-liner deploys to any VPS (I use a DigitalOcean droplet).
- **GitHub Actions** – Handles CI/CD: builds Docker image and pushes it to registry on commit.

---

## Hosting & Deployment

This site is deployed on a DigitalOcean droplet using Docker. The `Dockerfile` builds an Nginx production image from the Astro build output, and the deploy process is handled via GitHub Actions.

If you're using this template and want to self-host:

1. Clone the repo
2. Run `docker compose up -d`

---

## Analytics (Opt-in Setup)

I built PostHog tracking as an opt-in. Nothing loads by default.

If you want analytics, just supply a key via env vars. The logic lives in `src/utils/analytics.ts`, and looks like this:

```
ts
CopyEdit
if (import.meta.env.PUBLIC_POSTHOG_KEY) {
  ;(async () => {
    const { default: posthog } = await import('posthog-js')
    posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, { api_host: 'https://app.posthog.com' })
  })()
}

```

This keeps your build clean and avoids leaking analytics traffic if someone clones the repo and forgets to replace your script key.

---

## Theme Features

- **Writings** → Long-form MDX blog support for thought leadership, teardown posts, or playbooks
- **Resources** → A home for fragments: quotes, tweets, ideas in progress
- **Ships** → A list of launched or contributed-to projects (with GitHub-style commit calendar)
- **Dark Mode** → Automatic or toggle-based
- **Performance** → Extremely fast load, no unnecessary JS
- **Terminal-style Hero** → To instantly signal "I get how things are built" to technical audiences

---

## Design Principles

The design follows minimal, functional aesthetics. Think: plenty of whitespace, strong contrast, no distractions. I’ve kept it monochrome with a single accent colour—clean enough for hiring managers, personal enough to reflect my style.

---

## Analytics Flexibility

If you prefer other analytics tools, the theme has placeholders for:

- **Umami**
- **Microsoft Clarity**

Add the following environment variables in your `.env` if you’re using them:

```
ini
CopyEdit
# Umami
UMAMI_WEBSITE_ID=your_umami_website_id
UMAMI_TRACKING_URL=your_umami_tracking_url

# Microsoft Clarity
CLARITY_TRACKING_ID=your_clarity_tracking_id

```

You can safely remove or swap these with your preferred analytics setup—scripts live in `src/components/seo/base-head.astro`.

---

## Contributing

Open to suggestions, contributions, and forks. This template is built with the dev-marketer in mind, so if you have ideas for better GTM visuals, portfolio components, or new layout patterns—feel free to open a PR or start a discussion.

For detailed guidelines, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.


---

## Contact

If you’re using this template or want to talk marketing, tooling, or growth:

📬 work@rabiaahmed.me

🐦 [twitter.com/biaahmedly](https://twitter.com/biaahmedly)

🌐 [rabiaahmed.me](https://rabiaahmed.me/)

---

## License

Apache License 2.0

You can use, adapt, and share freely. Attribution appreciated, but not required.
