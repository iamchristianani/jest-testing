const capitalize = require('./capitalize');

test('The string dance should be Dance', () => {
  expect(capitalize('dance')).toBe('Dance');
});

test('The string 0dance is an invalid string format', () => {
  expect(capitalize('0dance')).toBe('Invalid string format');
});