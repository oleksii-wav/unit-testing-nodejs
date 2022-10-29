const MathOperations = require('../../app/add_multiply.js');
const {expect, assert} = require('chai');

describe('Multiplication positive scenarios', () => {
  let math;
  beforeEach(() => {
    math = new MathOperations();
  });
  afterEach(() => {
    math = undefined;
  });

  // eslint-disable-next-line max-len
  it('Should return a valid result of two positive numbers multiplication', () => {
    expect(math.multiply(2, 5)).to.be.equal(10);
  });

  // eslint-disable-next-line max-len
  it('Should return a valid result of two negative numbers multiplication', () => {
    expect(math.multiply(-2, -5)).to.be.equal(10);
  });

  // eslint-disable-next-line max-len
  it('Should return a valid result positive and negative numbers multiplication', () => {
    expect(math.multiply(2, -5)).to.be.equal(-10);
  });
});

describe('Multiplication negative scenarios', () => {
  let math;
  beforeEach(() => {
    math = new MathOperations();
  });
  afterEach(() => {
    math = undefined;
  });

  it('Should throw an error if first variable not of type "Number".', () => {
    assert.throws(() => {
      math.multiply('1', 1);
    }, Error, '1 is not of type "Number".');
  });

  it('Should throw an error if second variable not of type "Number".', () => {
    assert.throws(() => {
      math.multiply(1, '1');
    }, Error, '1 is not of type "Number".');
  });

  it('Should throw an error if both variables not of type "Number".', () => {
    assert.throws(() => {
      math.multiply('1', '2');
    }, Error, 'Both variables are not of type "Number".');
  });
});

