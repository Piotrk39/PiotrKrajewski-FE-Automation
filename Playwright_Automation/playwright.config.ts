// @ts-check
import { devices } from '@playwright/test';

const config = {
  workers: 1,
  outputDir: './test-results',
  tesDir: 'tests/UI',
  timeout: 300000,
  use: {
      video:'on-first-retry',
      screenshot: 'only-on-failure',
      headless: false,
      bypassCSP: false,
      acceptDownloads: true,
      actiontimeout: 60000,
      expect: {
          timeout: 10000
      },
      launchOptions: {
        //   slowMo: 250,
          downloadsPath: 'resources/downloads',
          args: ['--start-maximized']
      },
      viewport: null,

      /*Igonore insecure connections */
      ignoreHTTPSErrors: true,
      // bypassCSP: true,
  },
  retries: 0,

  reporter: 'html',

  projects :[
      {
          name: 'Chrome',
          use: {
              channel: 'chrome',
              baseURL : 'http://localhost:5500/'
          },
      },
       /* Test against mobile viewports. */
      {
        name: 'Mobile Chrome',
        use: {
            ...devices['iPhone 13'],
            baseURL : 'http://localhost:5500/'
        },
      },
  ]

}
module.exports = config;

