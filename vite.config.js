import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'; // Fix the import here

export default defineConfig({
  plugins: [svelte()],
});
