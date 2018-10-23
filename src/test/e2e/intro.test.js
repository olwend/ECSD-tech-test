/**
 * @jest-environment jest-environment-webdriver
 */

function getTotal(array) {
  var Total = array.reduce((a, b) => a + b, 0);
  return Total;
};

function loopLR(array) {
  var runningSum = 0;
  var x;
  var array_LR = [];

  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      array_LR[0] = array[0];
    } else {
      x = i;
      runningSum = array[x];
      while (x > 0) {
        x--;
        runningSum = runningSum + array[x];
      }
      array_LR[i] = runningSum;
    }
  }
  console.log('arrayLR: ' + array_LR);
  return array_LR;
}

function loopRL(array) {
  var runningSum = 0;
  var x;
  var array_RL = [];
  for (var i = array.length - 1; i > -1; i--) {
    if (i == array.length - 1) {
      array_RL[i] = array[i];
    } else {
      x = i;
      runningSum = array[x];
      while (x < array.length - 1) {
        x++;
        runningSum = runningSum + array[x];
      }
      array_RL[i] = runningSum;
    }
  }
  console.log('arrayRL: ' + array_RL);
  return array_RL;
}

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

describe('low level running sum function tests', () => {

  test('getTotal gives sum of array items', async () => {
    var array = [4, 4, 4];
    var total = getTotal(array);
    expect(total).toEqual(12);
  });

  test('iterate from L -> R and each element returns a runningSum', async () => {
    var array = [5, 1, 1, 1, 1, 1, 1];
    var array_LR=loopLR(array);
    console.log('arrayLR: ' + array_LR);
  });

  test('iterate from R -> L and each element returns a runningSum', async () => {
    var array = [5, 1, 1, 1, 1, 1, 1];
    var array_RL =loopRL(array);
    console.log('arrayRL: ' + array_RL);
  });



  // test('at each loop it checks accum for equal both sides of the value', async () {
  //   // loop and for each accum do a checks
  //   // if lefthand sum === total - (lefthandsum + (array[i +1])
  //   // THEN declare key i to be mid index
  //   // send that as answer ....  set answer1 for array1, answer2 for array2 etc..


});

describe('submit answers', () => {
  test('it can input answer1', async () => {
    const ans1Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[1]/input'));
    await ans1Input.sendKeys(xxx);
  });

  test('it can input answer2', async () => {
    const ans2Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[2]/input'));
    await ans2Input.sendKeys(answer2);
  });

  test('it can input answer3', async () => {
    const ans3Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[3]/input'));
    await ans3Input.sendKeys(answer3);
  });

  test('it can input fullName', async () => {
    const nameInput = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[4]/input'));
    await nameInput.sendKeys(fullName);
  });

  test('it can submit input answers via button', async () => {
    const submitButton = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[2]/button'));
    await submitButton.click();
  });
});

afterAll(() => {
  return browser.quit();
});
