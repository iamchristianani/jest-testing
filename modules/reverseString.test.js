const reverseString = require('./reverseString');

test('the reverse of stop is pots', () => {
  expect(reverseString('stop')).toBe('pots');
});

test('An empty string can not be reversed', () => {
  expect(reverseString('')).toBe('Empty string can not be reversed');
});