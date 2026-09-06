import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

// After running `npx sanity login` and `npx sanity init` (or creating a
// project at sanity.io/manage), replace these with your real project ID and
// dataset name — see docs/content-model.md at the repo root.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "REPLACE_WITH_PROJECT_ID";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

export default defineConfig({
  name: "prism-technosys-studio",
  title: "Prism Technosys CMS",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
