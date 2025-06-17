# AGENTS

This repository contains a personal website built with [Astro](https://astro.build/). The project uses TypeScript and Tailwind CSS. Formatting and linting are handled by [Biome](https://biomejs.dev/).

## Repository structure
- `src/components` – Astro/React components
- `src/layouts` – Layout templates
- `src/pages` – Site pages and API routes
- `src/utils` – Shared utility functions
- `src/data` – Structured data for the site
- `public` – Static assets served as-is

## Development
1. Install dependencies with `npm install` (requires Node 20 as used in the `Dockerfile`).
2. Run a development server with `npm run dev`.

## Programmatic checks
Run the following commands before committing. All should succeed:
```bash
npm run lint   # lint and format checks via Biome
npm run build  # create production build
```
If any command fails due to missing dependencies or network restrictions, mention this in the PR's testing section.

## Git workflow
- Work directly on the current branch; do not create new branches.
- Keep your working tree clean (`git status`) before committing.
- Use clear, descriptive commit messages.
- After committing, run the programmatic checks again to ensure the repository remains in a good state.

## PR expectations
- Summarize your changes and the results of the programmatic checks.
- Include a **Testing** section with command output. Note any failures or network restrictions.
- If anything remains unfinished, add a **Notes** section explaining why.

## Additional notes
- Code formatting is enforced by Biome; you can automatically apply fixes with `npm run format`.
- The project uses path aliases defined in `tsconfig.json` (e.g., `@components/*`).
- The build output is written to `dist/`.