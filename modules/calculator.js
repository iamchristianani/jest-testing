class Calculator {
  static add(a, b) {
    if (a === 0 && b === 0) {
      return 'both numbers are zero';
    }
    return a + b;
  }

  static subtract(a, b) {
    if (a !== 0 && b === 0) {
      return `${a} remains the same`;
    }
    return a - b;
  }

  static divide(a, b) {
    if (a !== 0 && b === 0) {
      return 'can not divide by 0';
    }
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;