// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'node:cluster';
import { permission } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 5000,
  },
  // reporter: 'html',
  projects: [
    {
      name: 'safari',
      use: {
    browserName: 'webkit',
    headless: true,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    screenshot: 'only-on-failure',
  },  
    },
    {
      name: 'firefox execution',
      use: {
    browserName: 'firefox',
    headless: true,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    screenshot: 'only-on-failure',
  },  
},
  {
    name : 'chromium',
    use : {
      video: 'retain-on-failure',
    browserName: 'webkit',
    headless: false,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    // screenshot: 'only-on-failure',
    // ignoreHttpErrors: true,
    // permissions: ['geolocation','microphone', 'camera'],
    ...devices['iPhone 16 Pro'],
    }
  }

  ]
  
});

module.exports = config;

