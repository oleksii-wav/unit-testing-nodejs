/**
 *
 *a math operations class
 * @class MathOperations
 */
class MathOperations {
  /**
   * Creates an instance of mathOperations.
   * @memberof MathOperations
   */
  constructor() {
  }

  /**
   *
   *
   * @param {Number} a first number to add
   * @param {Number} b second number to add
   * @return {Number} sum ot two numbers
   * @memberof MathOperations
   */
  add(a, b) {
    if (typeof a != 'number' && typeof b != 'number') {
      throw new Error('Both variables are not of type "Number".');
    } else if (typeof a != 'number') {
      throw new Error(a + ' is not of type "Number".');
    } else if (typeof b != 'number') {
      throw new Error(b + ' is not of type "Number".');
    } return a + b;
  };

  /**
   *
   *
   * @param {Number} a first multiplier
   * @param {Number} b first multiplier
   * @return {Number} the result of multiply
   * @memberof MathOperations
   */
  multiply(a, b) {
    if (typeof a != 'number' && typeof b != 'number') {
      throw new Error('Both variables are not of type "Number".');
    } else if (typeof a != 'number') {
      throw new Error(a + ' is not of type "Number".');
    } else if (typeof b != 'number') {
      throw new Error(b + ' is not of type "Number".');
    } else return a * b;
  };
};

module.exports = MathOperations;
