/**
 *
 *a math operations class
 * @class mathOperations
 */
class mathOperations {
  /**
   * Creates an instance of mathOperations.
   * @memberof mathOperations
   */
  constructor() {
  }

  /**
   *
   *
   * @param {Number} a first number to add
   * @param {Number} b second number to add
   * @return {Number} sum ot two numbers
   * @memberof mathOperations
   */
  add(a, b) {
    if (typeof a != 'number') {
      throw new Error(a + ' is not of type "Number".')
    } else if (typeof b != 'number') {
      throw new Error(b + ' is not of type "Number".')
    }
    return a + b;
  };

  /**
   *
   *
   * @param {Number} a first multiplier
   * @param {Number} b first multiplier
   * @return {Number} the result of multiply
   * @memberof mathOperations
   */
  multiply(a, b) {
    if (typeof a != 'number') {
      throw new Error(a + ' is not of type "Number".');
    } else if (typeof b != 'number') {
      throw new Error(b + ' is not of type "Number".');
    }
    return a + b;
  };
};

module.exports = mathOperations;
