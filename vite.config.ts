import { resolve as pathResolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const resolve = (path: string) => pathResolve(__dirname, path);

export default defineConfig({
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
