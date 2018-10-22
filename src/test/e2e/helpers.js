import { Builder } from 'selenium-webdriver';

export const driver = new Builder()
  .forBrowser('chrome')
  .usingServer('http://localhost:3000')
  .build();

afterAll(async () => {
  // Cleanup `process.on('exit')` event handlers to prevent a memory leak caused by the combination of `jest` & `tmp`.
  for (const listener of process.listeners('exit')) {
    listener();
    process.removeListener('exit', listener);
  }
  await driver.quit();
});

export const defaultTimeout = 10e3;

// to run from cli
// /Users/DOE/Projects/ECSD/selenium-qa-tech-test/ECSD-tech-test
// ./ npm run ci
