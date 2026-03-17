import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import sanity from "@sanity/astro";

export default defineConfig({
  site: "https://www.rabiaahmed.me",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    mdx(),
    sitemap({
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    }),
    tailwind(),
    react(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
      useCdn: false,
      apiVersion: "2025-03-18",
      studioBasePath: "/studio",
    }),
  ],
});
