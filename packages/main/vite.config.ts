import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import pkg from '../../package.json';
import { join } from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [eslint()],
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: true,
    rollupOptions: {
      input: {
        preload: join(__dirname, 'preload.ts'),
        index: join(__dirname, 'index.ts'),
      },
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        manualChunks: {},
      },
      external: [
        'electron',
        ...builtinModules,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (pkg as Record<string, any>).dependencies || {},
      ],
    },
  },
});
