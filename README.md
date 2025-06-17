![ A website with the title "Rabia's internet space"](/public/images/ogimage.png)

# Product Marketing Portfolio

**Live site → [rabiaahmed.me](https://rabiaahmed.me/)**

a “show-don’t-tell” space where I break down how I take dev heavy, AI-powered products from MVP to must-have.

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

## ✨ What you’ll find

| Area | TL;DR |
| --- | --- |
| Case-study engine | Each project page mixes narrative, metrics, and pull-quotes to prove impact (not just *describe* it) |
| Terminal-style hero | A playful boot-screen sequence that sets the techy tone right away |
| Dark-mode toggle | Because retina-searing white at 2 a.m. is rude |
| MDX-powered writing | Long-form posts with code blocks, call-outs, and embeds |
| Lighthouse-friendly | 90 %+ scores across Perf / A11y / SEO out of the box |
| Ready for PostHog | Drop one key in `.env` and user analytics light up |

---

## 🧰 Tech stack

| Layer | What & Why |
| --- | --- |
| **Framework** | [Astro](https://astro.build/) – partial hydration = fast-as-heck pages |
| **Styling** | Tailwind CSS + a sprinkle of custom CSS vars |
| **Type safety** | TypeScript everywhere |
| **Icons** | [Lucide](https://lucide.dev/) for feather-weight SVGs |
| **Lint / Format** | Biome (pre-configured) |
| **Container** | Multi-stage **Dockerfile** (build → tiny Nginx-alpine serve) |
| **Infra** | DigitalOcean droplet (+ optional Cloudflare DNS) |
| **CI** | GitHub Actions workflow for test → build → push → |

---

## 🖌️ Design notes

Minimal, monochrome, and developer-first. White-space is a feature, not an accident. Accent colour only appears where your eye should linger. Typography leans on `Inter` for body text and `JetBrains Mono` for anything “code-y”.

---

## 🔧 Local development

```bash
# 1. Clone & install
git clone <https://github.com/BiaAhmed/product-marketing-portfolio.git>
cd product-marketing-portfolio
npm install

# 2. Spin up dev server
npm run dev

```

---

## 🐳 Docker workflow (prod-ish)

```jsx
# Build the image
docker build -t rabia/portfolio .

# Run the container
docker run -d \
  -p 80:80 \
  --env PUBLIC_POSTHOG_KEY=xyz123 \
  rabia/portfolio
```

On my DigitalOcean droplet I simply `docker compose up -d`. The compose file exposes port 80 and lets you bolt on Caddy or Traefik SSL if you fancy.

## 🔑 Environment variables

| Key | What it does |
| --- | --- |
| `PUBLIC_POSTHOG_KEY` | Optional. Drop your PostHog project key in here to get analytics. |
| `PUBLIC_SITE_URL` | Used for canonical URLs in meta tags. |

Create a `.env` in the project root and **never** commit it.

## Contributing

PRs welcome—especially on:

- Accessibility / a11y audits
- Better lighthouse scores
- New content plug-ins (MDX shortcodes, CMS adapters)
- Polish on motion / micro-copy
1. **Fork** the repo
2. `git checkout -b feat/your-idea`
3. Push & open a **PR** – keep commits atomic and write clear messages.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) + [CONTRIBUTING.md](CONTRIBUTING.md) for the boring bits. Good first issues: accessibility tweaks, animation polish, Netlify adapter.


---

## Contact

If you’re using this template or want to talk marketing, tooling, or growth:

📬 work@rabiaahmed.me

🐦 [twitter.com/biaahmedly](https://twitter.com/biaahmedly)

🌐 [rabiaahmed.me](https://rabiaahmed.me/)

---

## License

Apache-2.0 – do what you like, just keep the attribution.
