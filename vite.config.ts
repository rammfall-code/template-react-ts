import { join } from 'node:path';
import { defineConfig } from 'vitest/config';
import { cwd } from 'node:process';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: join(cwd(), '/src'),
  test: {
    setupFiles: ['../.vitest/setup.ts'],
    environment: 'jsdom',
  },
});
