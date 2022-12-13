const stringLength = require('./stringLenth');

test('the number of strings for the word boy should be 3', () => {
  expect(stringLength('boy')).toBe(3);
});

test('The string length for encyclopedia is greater than 10', () => {
  expect(stringLength('encyclopedia')).toBe('encyclopedia is less than 1 or greater than 10');
});

test('The empty string is less than 1', () => {
  expect(stringLength('')).toBe(' is less than 1 or greater than 10');
});