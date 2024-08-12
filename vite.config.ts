import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-task-labint/',
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true, // also necessary
  },
});
