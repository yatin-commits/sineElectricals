import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/index.html',
    }
  },
  server: {
    historyApiFallback: true, // This helps with client-side routing
  }
});
