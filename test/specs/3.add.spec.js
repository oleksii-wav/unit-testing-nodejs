const MathOperations = require('../../app/add_multiply.js');
const {expect, assert} = require('chai');

describe('Addition positive scenarios', () => {
  let math;
  beforeEach(() => {
    math = new MathOperations();
  });
  afterEach(() => {
    math = undefined;
  });

  it('Should return a valid sum of two positive numbers', () => {
    expect(math.add(2, 5)).to.be.equal(7);
  });

  it('Should return a valid sum of two negative numbers', () => {
    expect(math.add(-2, -5)).to.be.equal(-7);
  });

  it('Should return a valid sum positive and negative numbers', () => {
    expect(math.add(2, -5)).to.be.equal(-3);
  });
});

describe('Addition negative scenarios', () => {
  let math;
  beforeEach(() => {
    math = new MathOperations();
  });
  afterEach(() => {
    math = undefined;
  });

  it('Should throw an error if first variable not of type "Number".', () => {
    assert.throws(() => {
      math.add('1', 1);
    }, Error, '1 is not of type "Number".');
  });

  it('Should throw an error if second variable not of type "Number".', () => {
    assert.throws(() => {
      math.add(1, '1');
    }, Error, '1 is not of type "Number".');
  });

  it('Should throw an error if both variables not of type "Number".', () => {
    assert.throws(() => {
      math.add('1', '2');
    }, Error, 'Both variables are not of type "Number".');
  });
});

