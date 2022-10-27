const NumbersValidator = require('../../app/numbers_validator.js');
const {expect} = require('chai');

describe('isNumberEven positive scenarios', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = undefined;
  });
  it('Should return true if number is even', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it('Should return false if number if odd', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
});
