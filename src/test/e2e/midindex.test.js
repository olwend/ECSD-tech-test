const midIndex = require('./midIndex.js');


describe (' test midindex function on sample arrays', () => {

 test('even items', async () => {
   var evenindex= [1,2,3,4,3,3];
   const answer = midIndex(even-index);
   expect(answer).toEqual(null);
  });

  test('no mid index', async () => {
    var nomid = [1,2];
    const answer = midIndex(no-mid);
    expect(answer).toEqual(null);
  });

  test('no parity', async () => {
    var nomid = [1,2,2,1,3,3,3];
    const answer = midIndex(no-mid);
    expect(answer).toEqual(null);
  });

  test('example', async () => {
    var example = [10, 15, 5, 7, 1, 24, 36, 2];
    expect(answer).toEqual(5);
    });
});
test('zeroes', async () => {

  });

  test('negative numbers', async () => {

  });

  test('decimals', async () => {

  });

  test('NaN', async () => {

  });
});
