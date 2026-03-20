import { defineConfig } from '@playwright/test';
import path from 'node:path';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    browserName: 'chromium',
    baseURL: 'http://localhost:3000',
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: {
    // Ensure the dev server starts from this project even if tests
    // are invoked from a parent directory.
    command: 'npm run dev',
    cwd: path.resolve(__dirname),
    port: 3000,
    reuseExistingServer: true,
  },
});
