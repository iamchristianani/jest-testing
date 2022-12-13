const reverseString = (string) => {
  if (string.length > 0) {
    return string.split('').reverse().join('');
  }
  return 'Empty string can not be reversed';
};

module.exports = reverseString;