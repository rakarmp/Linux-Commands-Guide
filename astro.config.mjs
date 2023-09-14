import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "LCG",
      social: {
        github: "https://github.com/rakarmp/Linux-Commands-Guide",
      },
      sidebar: [
        {
          label: "Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Started", link: "/started/example/" },
          ],
        },
        {
          label: "Guide To Package Management",
          autogenerate: { directory: "package" },
        },
      ],
    }),
  ],
});
