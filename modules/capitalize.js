const capitalize = (string) => {
  if (/^\d$/.test(string.charAt(0))) {
    return 'Invalid string format';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;