import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "rabia-portfolio",
  title: "Rabia Ahmed Portfolio",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
