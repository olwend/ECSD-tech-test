/**
 * @jest-environment jest-environment-webdriver
 */
var array1 = new Array;
var array2 = new Array;
var array3 = new Array;
jest.setTimeout(15000);

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
  });
});

describe('Data table scrape into arrays', () => {
  test('read in tr1 gives length as per 9 cols', async () => {
    const tablerow1 = await browser.findElement(by.xpath('//tr[@id="tr1"]')).getText();
    array1 = tablerow1.split(" ");
    expect(array1.length).toBe(9);
    console.log(array1);
  });

  test('read in tr2 gives length as per 9 cols', async () => {
    const tablerow2 = await browser.findElement(by.xpath('//tr[@id="tr2"]')).getText();
    array2 = tablerow2.split(" ");
    expect(array2.length).toBe(9);
    console.log(array2);
  });

  test('read in tr3 gives length as per 9 cols', async () => {
    const tablerow3 = await browser.findElement(by.xpath('//tr[@id="tr3"]')).getText();
    array3 = tablerow3.split(" ");
    expect(array3.length).toBe(9);
      console.log(array3);
  });
});

  
  afterAll(() => {
    return browser.quit();
  });
