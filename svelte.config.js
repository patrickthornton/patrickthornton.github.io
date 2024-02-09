import adapter from "@sveltejs/adapter-static";

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
};

export default config;
