import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://www.rabiaahmed.me",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    mdx(),
    sitemap({
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString().split("T")[0],
    }),
    tailwind(),
    react(),
  ],
});