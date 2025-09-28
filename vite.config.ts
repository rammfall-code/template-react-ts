import { join } from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: join(process.cwd(), '/src'),
  test: {
    setupFiles: ['../.vitest/setup.ts'],
    environment: 'jsdom',
  },
});
