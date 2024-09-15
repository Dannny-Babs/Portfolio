import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],

  // Add the build.rollupOptions configuration
  vite: {
    build: {
      rollupOptions: {
        external: ["/@assets/talo-link-image.svg"], // Add the external path
      },
    },
  },
});
