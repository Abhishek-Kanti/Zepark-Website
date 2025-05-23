import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 ensures routes work correctly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
