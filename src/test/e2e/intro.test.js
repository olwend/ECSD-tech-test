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
});

describe('Data table', () => {
  test('read in array1-tr1', async () => {
    const tablerow1 = await browser.findElement(by.xpath('//tr[@id="tr1"]')).getText();
    console.log(tablerow1);

  });

  test('read in array2-tr2', async () => {
    const tablerow2 = await browser.findElement(by.xpath('//tr[@id="tr2"]')).getText();
    console.log(tablerow2);

  });

  test('read in array3-tr3', async () => {
    const tablerow3 = await browser.findElement(by.xpath('//tr[@id="tr3"]')).getText();
    console.log(tablerow3);

  })
});

















  //
  // afterAll(() => {
  //   return browser.quit();
  // });
