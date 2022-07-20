import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import eslint from 'vite-plugin-eslint';

import pkg from '../../package.json';

export default defineConfig({
  root: __dirname,
  base: './',
  plugins: [svelte(), eslint()],
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
  },
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: parseInt(pkg.env.VITE_DEV_SERVER_PORT),
  },
});
