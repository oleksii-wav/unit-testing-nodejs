const NumbersValidator = require('../../app/numbers_validator.js');
const {expect, assert} = require('chai');

describe('getEvenNumbersFromArray positive scenarios', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = undefined;
  });

  it('Should return an array of even numbers', () => {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4, 5])).to.eqls([2, 4]);
  });
});

describe('getEvenNumbersFromArray negative scenarios', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = undefined;
  });

  // eslint-disable-next-line max-len
  it('Should return an error if the variables in array are not of type number', () => {
    assert.throws(() => {
      validator.getEvenNumbersFromArray([1, 2, 3, 'b', 5]);
    }, Error, '1,2,3,b,5 is not an array of "Numbers"');
  });
});
