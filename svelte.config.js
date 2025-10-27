import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/lib/components')
    }
  }
};

export default config;
