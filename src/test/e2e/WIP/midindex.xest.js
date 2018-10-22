const midIndex = require('./midIndex.js');

describe ('low level tests', () => {

  test ('it returns highest index key not value', async () => {
    var array = [1,2,3];
    const index = midIndex(array);
    expect(index).toEqual(2);
  });

  test ('it returns index 1 for test case 1', async () => {
    var index1 = [5,1,1,1,1,1,1];
    const answer = midIndex(index1);
    expect(answer).toEqual(1);
  });

  test ('it returns index 4 test case 4', async () => {
    var index4 = [2,1,1,1,10,4,1];
    const answer = midIndex(index1);
    expect(answer).toEqual(4);
  })
});


describe ('test midindex function on sample arrays', () => {

  test('even items', async () => {
   var evenindex= [1,2,3,4,3,3];
   const answer = midIndex(evenindex);
   expect(answer).toEqual(null);
  });

  test('no mid index', async () => {
    var nomid = [1,2];
    const answer = midIndex(no-mid);
    expect(answer).toEqual(null);
  });

  test('no parity', async () => {
    var nomid = [1,2,2,1,3,3,3];
    const answer = midIndex(nomid);
    expect(answer).toEqual(null);
  });

  test('example', async () => {
    var example = [10, 15, 5, 7, 1, 24, 36, 2];
    const answer = midIndex(example);
    expect(answer).toEqual(5);
    });

  test('zeroes', async () => {
    var zeroes = [0, 0, 0, 0, 0, 0, 0, 0];
    const answer = midIndex(zeroes);
    expect(answer).toEqual(Null);
  });
  test('negative numbers', async () => {
    var negative = [-10, -15, -5, -7, -1, -24, -36, -2];
    const answer = midIndex(example);
    expect(answer).toEqual(5);
  });

  test('decimals', async () => {
    var example = [2, 2.0, 0.8, 0.7, 0.3, 0.2];
    const answer = midIndex(example);
    expect(answer).toEqual(1);
  });

  test('NaN', async () => {
    var nan = ["a", "b", "a", "b","a", "b"];
    const answer = midIndex(nan);
    expect(answer).toEqual(null);
  });
});
