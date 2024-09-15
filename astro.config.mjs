import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import { fileURLToPath } from 'url';
import { resolve } from 'path';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],

  // Add the build.rollupOptions configuration
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        external: ["/@assets/talo-link-image.svg"],
      },
    },
  },
});