import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { onlookPreprocess } from "@onlook/svelte";
import path from "path";

const config = {
  preprocess: [vitePreprocess(), onlookPreprocess({
    root: path.resolve('.'),
  })],
  kit: {
    adapter: adapter(),
  },
};

export default config;
