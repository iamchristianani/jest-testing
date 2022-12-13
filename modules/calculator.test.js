const Calculator = require('./calculator.js');

describe('Adding ', () => {
  test('5 and 12 equals 17', () => {
    expect(Calculator.add(5, 12)).toEqual(17);
  });

  test('0 and 0 is wrong', () => {
    expect(Calculator.add(0, 0)).toEqual('both numbers are zero');
  });

  test('5 and 0 equals 5', () => {
    expect(Calculator.add(5, 0)).toEqual(5);
  });
});

describe('Subtracting ', () => {
  test('5 from 12 equals 7', () => {
    expect(Calculator.subtract(12, 5)).toEqual(7);
  });

  test('8 from 0 remains 8', () => {
    expect(Calculator.subtract(8, 0)).toEqual('8 remains the same');
  });

  test('8 from 2 equals -6', () => {
    expect(Calculator.subtract(2, 8)).toEqual(-6);
  });
});

describe('Dividing ', () => {
  test('18 by 3 equals 6', () => {
    expect(Calculator.divide(18, 3)).toEqual(6);
  });

  test('24 by 7 equals 3.43', () => {
    expect(Calculator.divide(24, 7)).toBeCloseTo(3.43);
  });

  test('-52 by 9 equals -5.78', () => {
    expect(Calculator.divide(-52, 9)).toBeCloseTo(-5.78);
  });

  test('23 by 0 can not be equated because 0 can not be a divisor', () => {
    expect(Calculator.divide(23, 0)).toBe('can not divide by 0');
  });
});

describe('Multiplying ', () => {
  test('5 and 12 equals 60', () => {
    expect(Calculator.multiply(5, 12)).toEqual(60);
  });

  test('18 and 0 equals 0', () => {
    expect(Calculator.multiply(18, 0)).toEqual(0);
  });

  test('7 and 7 equals 49', () => {
    expect(Calculator.multiply(7, 7)).toEqual(49);
  });

  test('0.36 and 8 equals 2.88', () => {
    expect(Calculator.multiply(0.36, 8)).toEqual(2.88);
  });
});
