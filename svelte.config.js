import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: "app",
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "404.html",
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;
