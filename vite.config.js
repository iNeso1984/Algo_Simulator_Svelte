import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      external: ['chart.js'],  // This will tell Rollup to treat chart.js as an external dependency
    },
  },
});


