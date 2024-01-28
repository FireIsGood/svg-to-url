import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
    server: {
        port: 1625,
    },
    // Hosting on GitHub
    outDir: "./docs",
    site: "https://fireisgood.github.io/",
    base: "/svg-to-url",
});
