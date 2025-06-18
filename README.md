![ A website with the title "Rabia's internet space"](/public/images/ogimage.png)

# Product marketing portfolio

**Live site → [rabiaahmed.me](https://rabiaahmed.me/)**

A “show-don’t-tell” space where I break down how I take dev-heavy, AI-powered products from MVP to must-have.

## Why I built this

Most portfolio themes are built for engineers. This one isn’t. It’s for **product marketers, growth leads, and founders** who operate at the intersection of product, strategy, and execution—and need a site that reflects both strategic thinking *and* technical fluency.

It blends case-study storytelling, clean design, and growth analytics plumbing, without the bloat.

| What startup teams care about | How this theme delivers |
| --- | --- |
| **Proof of business impact** | Case blocks with pull quotes, crisp KPIs, and real GTM insights |
| **Technical empathy** | Terminal-style hero, minimal UI, dark mode toggle, snappy performance |
| **Strategic thinking** | Long-form MDX support for GTM breakdowns or teardown posts |
| **Growth tracking** | PostHog event tagging baked in (opt-in, privacy-first) |

## Stack overview

- **Astro** — partial hydration = fast-as-heck pages
- **Tailwind CSS** —  +sprinkle of custom CSS vars
- **TypeScript** — for clean type safety and confidence.
- Biome — pre-configured
- **Lucide Icons** – featherlight SVG icons.
- **Docker + Nginx-alpine** – one-liner deploys to any VPS (I use DigitalOcean).
- **GitHub Actions** – CI/CD that builds and pushes on commit.

## Analytics (opt-in)

PostHog is wired in but disabled by default.

To enable it:

```
if (import.meta.env.PUBLIC_POSTHOG_KEY) {
  ;(async () => {
    const { default: posthog } = await import('posthog-js')
    posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, { api_host: 'https://app.posthog.com' })
  })()
}

```

No analytics load unless you add your own key—so cloned builds stay clean.

## ✨ What you’ll find

| Area | TL;DR |
| --- | --- |
| Case-study engine | Narrative + metrics + pull-quotes to prove impact |
| Terminal-style hero | Boot screen sequence to set the tone |
| Dark-mode toggle | Because retina burn at 2 a.m. is rude |
| MDX-powered writing | With code blocks, embeds, and call-outs |
| Lighthouse-friendly | 90%+ scores across Perf / A11y / SEO |
| PostHog-ready | Drop a key in `.env` and it just works |

## Design notes

Minimal. Monochrome. Developer-first.

Whitespace is intentional. Accent colours only where attention belongs.

Typography: `Inter` for body, `JetBrains Mono` for anything “code-y”.

## Local dev

```bash
# 1. Clone & install
git clone https://github.com/BiaAhmed/product-marketing-portfolio.git
cd product-marketing-portfolio
npm install

# 2. Start dev server
npm run dev

```

## 🐳 Docker workflow (prod-ish)

```bash
# Build the image
docker build -t rabia/portfolio .

# Run the container
docker run -d \
  -p 80:80 \
  --env PUBLIC_POSTHOG_KEY=xyz123 \
  rabia/portfolio

```

On DigitalOcean, I just run: `docker compose up -d`.

The Compose file exposes port 80. You can bolt on Caddy/Traefik for SSL.

## Environment variables

| Key | Purpose |
| --- | --- |
| `PUBLIC_POSTHOG_KEY` | Optional analytics setup |
| `PUBLIC_SITE_URL` | Used in meta tags for canonical URLs |

Create a `.env` at the root—**never commit it**.

## Contributions

PRs welcome—especially for:

- Accessibility / a11y
- Better lighthouse scores
- New content plug-ins (MDX shortcodes, CMS adapters)
- Polish on motion / micro-copy

To contribute:

1. Fork the repo
2. `git checkout -b feat/your-idea`
3. Push + open a PR with atomic commits and clear messages

See [CODE_OF_CONDUCT.md](https://chatgpt.com/c/CODE_OF_CONDUCT.md) + [CONTRIBUTING.md](https://chatgpt.com/c/CONTRIBUTING.md) for boring bits.

Good first issues: a11y, motion polish, Netlify adapter.

## Contact

Lettuce jam on marketing, growth, or tooling?

📬 [work@rabiaahmed.me](mailto:work@rabiaahmed.me)

🐦 [@biaahmedly](https://twitter.com/biaahmedly)

🌐 [rabiaahmed.me](https://rabiaahmed.me/)


## License

Apache-2.0 – do what you like, just keep the attribution.
