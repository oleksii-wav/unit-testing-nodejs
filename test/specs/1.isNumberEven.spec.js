const NumbersValidator = require('../../app/numbers_validator.js');
const {expect, assert} = require('chai');

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
  it('Should return true if number is 0', () => {
    expect(validator.isNumberEven(0)).to.be.equal(true);
  });
});

describe('isNumberEven negative scenatios', () =>{
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = undefined;
  });

  it('Should return false if number is not even', () => {
    expect(validator.isNumberEven(5))
        .to.equal(false);
  });

  it('Should throw an error if the type of variable is string', () => {
    assert.throws(() => {
      validator.isNumberEven('a');
    }, Error, 'a is not of type "Number". It is of type string');
  });

  it('Should throw an error if the type of variable is null', () => {
    assert.throws(() => {
      validator.isNumberEven(null);
    }, Error, 'null is not of type "Number". It is of type object');
  });
});

