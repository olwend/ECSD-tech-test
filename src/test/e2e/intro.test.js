/**
 * @jest-environment jest-environment-webdriver
 */
 function midIndex(array){
   var lastIndex = array.length - 1;
   return lastIndex;
 };

var array1 = new Array;
var array2 = new Array;
var array3 = new Array;
var answer1 = " ";
var answer2 = " ";
var answer3 = " ";

jest.setTimeout(15000);

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().usingServer()
  .withCapabilities({
    browserName: "chrome"
  })
  .build();
const url = 'http://localhost:3000/';
const fullName = "Olwen Davies";

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
  test('read in tr1 gives array1 length as per 9 cols', async () => {

    const tablerow1 = await browser.findElement(by.xpath('//tr[@id="tr1"]')).getText();
    array1 = tablerow1.split(" ");
    expect(array1.length).toBe(9);
    console.log(array1);
  });

  test('read in tr2 gives array2 length as per 9 cols', async () => {

    const tablerow2 = await browser.findElement(by.xpath('//tr[@id="tr2"]')).getText();
    array2 = tablerow2.split(" ");
    expect(array2.length).toBe(9);
    console.log(array2);
  });

  test('read in tr3 gives array3 length as per 9 cols', async () => {

    const tablerow3 = await browser.findElement(by.xpath('//tr[@id="tr3"]')).getText();
    array3 = tablerow3.split(" ");
    expect(array3.length).toBe(9);
    console.log(array3);
  });
});


describe ('low level function tests', () => {

  test ('it returns index key not value', async () => {
    var array = [4,4,4];
    const lastIndex = midIndex(array);
    expect(lastIndex).toEqual(2);
  });
});

describe ('submit answers', () => {
  test ('it can input answer1', async () => {
  const ans1Input = await browser.findElement
  (by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[1]/input'));
  await ans1Input.sendKeys(answer1);
  });

  test ('it can input answer2', async () => {
  const ans2Input = await browser.findElement
  (by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[2]/input'));
  await ans2Input.sendKeys(answer2);
  });

  test ('it can input answer3', async () => {
  const ans3Input = await browser.findElement
  (by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[3]/input'));
  await ans3Input.sendKeys(answer3);
  });

  test ('it can input fullName', async () => {
  const nameInput = await browser.findElement
  (by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[4]/input'));
  await nameInput.sendKeys(fullName);
  });

  test ('it can submit input answers via button', async () => {
  const submitButton = await browser.findElement
  (by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[2]/button'));
  await submitButton.click();
  });
});

  afterAll(() => {
    return browser.quit();
  });
