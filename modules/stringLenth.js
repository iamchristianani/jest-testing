const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
  return `${string} is less than 1 or greater than 10`;
};

module.exports = stringLength;