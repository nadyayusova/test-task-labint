import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nadyayusova.github.io/test-task-labint',
  plugins: [react()],
});
