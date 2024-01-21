import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
// import { structure } from "./feature/sanity/studio/desk";

import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  name: "default",
  basePath: "/admin",
  title: "Izi Access",

  projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
  dataset: String(process.env.NEXT_PUBLIC_SANITY_DATASET),

  plugins: [
    // structureTool({ structure }),
    structureTool(),
    imageHotspotArrayPlugin(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource
        );
      },
    },
  },
});
