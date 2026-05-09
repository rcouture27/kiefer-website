import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  server: {
    port: 8899,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@config": new URL("./src/config", import.meta.url).pathname,
        "@styles": new URL("./src/styles", import.meta.url).pathname,
        "@components": new URL("./src/components", import.meta.url).pathname,
        "@layouts": new URL("./src/layouts", import.meta.url).pathname,
        "@utils": new URL("./src/utils", import.meta.url).pathname,
      },
    },
  },
  integrations: [react(), markdoc(), keystatic()],
  adapter: cloudflare(),
});
