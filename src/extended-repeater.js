const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let res = [];
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.repeatTimes; i += 1) {
    let subStr = [];
    for (let j = 0; j < options.additionRepeatTimes; j += 1) {
      if (options.addition === null) {
        options.addition = String(options.addition);
      }
      subStr.push(options.addition);
    }
    if (options.additionSeparator) {
      res.push(str + subStr.join(options.additionSeparator));
    } else {
      res.push(str + subStr.join('|'));
    }
  }
  
  if (options.separator) {
    return res.join(options.separator);
  } else {
    return res.join('+');
  }
}
module.exports = {
  repeater
};
