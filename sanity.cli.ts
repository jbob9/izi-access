import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
    dataset: String(process.env.NEXT_PUBLIC_SANITY_DATASET),
  },
});
