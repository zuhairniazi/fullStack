import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  globalSetup: './tests/global-setup.ts',

  use: {
    baseURL: process.env.BASE_URL,     // important for UI tests
    storageState: './.auth/user.json', // makes tests start logged in
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: process.env.CI
    ? [['list'], ['html', { open: 'never' }]]
    : [['html', { open: 'on-failure' }], ['list']],

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: 'test-results',

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
   // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
