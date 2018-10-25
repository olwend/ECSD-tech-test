/**
 * @jest-environment jest-environment-webdriver
 */

// Functions to run tests

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

function convertStoNum(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = +array[i];
  }
}

function findAnswer(array, row) {
  var arrayLR = loopLR(array);
  var arrayRL = loopRL(array);
  const answers = [];

  for (var i = 0; i < array.length; i++) {
    if (arrayLR[i] == arrayRL[i]) {
        answers[row-1] =i;

      console.log('answer: ' + answers[row -1]);
      break;
    }
  }
  return answers[row-1];
}
// tests

var array1 = new Array;
var array2 = new Array;
var array3 = new Array;
const answers = [null, null, null];
const row = row;

jest.setTimeout(20000);

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().usingServer()
  .withCapabilities({
    browserName: "chrome"
  })
  .build();
const url = 'http://localhost:3000/';
const fullName = "Olwen Davies";

describe('ECS Intro page', () => {
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

describe('Iterate to create running sum arrays', () => {

  test('getTotal gives sum of array items', async () => {
    var array = [4, 4, 4];
    var total = getTotal(array);
    expect(total).toEqual(12);
  });

  test('iterate from L -> R and each element returns a runningSum', async () => {
    var array = [5, 1, 1, 1, 1, 1, 1];
    var array_LR = loopLR(array);
    expect(array_LR).toContain(7);
  });

  test('iterate from R -> L and each element returns a runningSum', async () => {
    var array = [5, 1, 1, 1, 1, 1, 1];
    var array_RL = loopRL(array);
    expect(array_RL).toContain(11);
  });
});

describe('findAnswer() test cases', () => {
  test('it shows null when there is no match', async () => {
    const tcnull = [1,2,2,1,3,13,3];
    console.log(tcnull);
    findAnswer(tcnull,1);
    expect(answers[row-1]).toEqual(null);
  });

  test('it handles zeroes when there is no match', async () => {
    const tcnull = [0,0,0,0,0,0,0];
    console.log(tcnull);
    findAnswer(tcnull,1);
    expect(answers[row-1]).toEqual(null);
  });

  test('it handles decimals', async () => {
    const tcnull = [1.0,2.0,3.0,1.0,3.0,3.0];
    console.log(tcnull);
    findAnswer(tcnull,1);
    expect(answers[row-1]).toEqual(3);
  });

  test('it handles decimals < 1', async () => {
    const tcnull = [2.0,1.0,0.2,0.8,0.3,0.7];
    console.log(tcnull);
    findAnswer(tcnull,1);
    expect(answers[row-1]).toEqual(1);
  });
});


describe('Data table scrape', () => {
  test('it reads in tr1 gives array1 length as per 9 cols and & call findAnswer', async () => {

    const tablerow1 = await browser.findElement(by.xpath('//tr[@id="tr1"]')).getText();
    array1 = tablerow1.split(" ");
    convertStoNum(array1);
    expect(array1.length).toBe(9);
    console.log(array1);
    findAnswer(array1,1);
  });

  test('it reads in tr2 gives array2 length as per 9 cols & call findAnswer', async () => {

    const tablerow2 = await browser.findElement(by.xpath('//tr[@id="tr2"]')).getText();
    array2 = tablerow2.split(" ");
    convertStoNum(array2);
    expect(array2.length).toBe(9);
    console.log(array2);
    findAnswer(array2,2);
  });

  test('it reads in tr3 gives array3 length as per 9 cols & call findAnswer', async () => {

    const tablerow3 = await browser.findElement(by.xpath('//tr[@id="tr3"]')).getText();
    array3 = tablerow3.split(" ");
    convertStoNum(array3);
    expect(array3.length).toBe(9);
    console.log(array3);
    findAnswer(array3,3);
  });
});

describe('Answers', async () => {
//
//   test('it has visibility of answers in an array', async () => {
//   });

  test('it can input answer1', async () => {
    const ans1Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[1]/input'));
    await ans1Input.sendKeys(answers[0]);
  });

  xtest('it can input answer2', async () => {
    const ans2Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[2]/input'));
    await ans2Input.sendKeys(answers[1]);
  });

  test('it can input answer3', async () => {
    const ans3Input = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[3]/input'));
    await ans3Input.sendKeys(answers[2]);
  });

  test('it can input fullName', async () => {
    const nameInput = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[1]/div[4]/input'));
    await nameInput.sendKeys(fullName);
  });

  xtest('it can submit input answers via button', async () => {
    const submitButton = await browser.findElement(by.xpath('//*[@id="challenge"]/div/div/div[2]/div/div[2]/button'));
    await submitButton.click();
  });
});

afterAll(() => {
  return browser.quit();
});
