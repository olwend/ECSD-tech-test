/**
 * @jest-environment jest-environment-webdriver
 */

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().usingServer()
  .withCapabilities({
    browserName: "chrome"
  })
  .build();
const url = 'http://localhost:3000/';

describe('ECS Intro page renders', () => {
  test('it has ECSDigital in h1', async () => {
    await browser.get(url);
    const title = await browser.findElement(by.tagName('h1')).getText();
    expect(title).toContain('ECSDigital')
  });

  test('it renders "Arrays Challenge" by clicking "render the challenge" button', async () => {
    await browser.get(url);
    const button = await browser.findElement(by.xpath('//*[@id="home"]/div/div/button'));
    const renderchallenge = button.click();
    const chtitle = await browser.findElement(by.xpath('//h1[@id="chtitle"]')).getText();
    expect(chtitle).toContain('Arrays');
  });
  //
  // afterAll(() => {
  //   return browser.quit();
  // });
});
