const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res = [];
  let count = 1;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] != str[i - 1]) {
      res.push(str[i]);
      if (count > 1) {
        res.push(count);
      }
      count = 1;
    } else {
      count += 1;
    }
  }
  return res.reverse().join('');
}

module.exports = {
  encodeLine
};
