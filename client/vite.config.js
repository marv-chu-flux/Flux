import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/cart': 'https://flux-backend-wrmh.onrender.com',
    },
  },
  plugins: [react()],
});
