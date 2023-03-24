import { resolve as pathResolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const resolve = (path: string) => pathResolve(__dirname, path);

export default defineConfig({
  base: '/react-pokemons/',
  build: {
    rollupOptions: {
      // index for dev
      // 404 for gh-pages
      input: ['404.html', 'index.html'],
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
});
