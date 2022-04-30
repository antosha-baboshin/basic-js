const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(adress) {
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '-'];
  
  if (adress.length == 17) {
    for (let i = 0; i < adress.length; i += 1) {
      if (!hex.includes(adress[i])) {
        return false;
      } 
    }
    for (let i = 2; i < adress.length; i += 3) {
      if (adress[i] != '-') {
        return false;
      } 
    }
    return true;
  } else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
