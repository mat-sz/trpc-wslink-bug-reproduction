import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '127.0.0.1',
    },
    build: {
      assetsInlineLimit: 0,
      outDir: 'dist',
    },
    plugins: [
      react(),
    ],
  };
});
