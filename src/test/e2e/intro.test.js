/**
 * @jest-environment jest-environment-webdriver
 */

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().usingServer()
  .withCapabilities({
    browserName: "chrome"
  })
  .build();
const url = 'http://localhost:3000/'

describe('ECS Intro page renders', () => {
  test('it has ECSDigital in h1', async () => {
    await browser.get(url)
    const title = await browser.findElement(by.tagName('h1')).getText()
    expect(title).toContain('ECSDigital')
  });

  afterAll(() => {
    return browser.quit();
  });
});
