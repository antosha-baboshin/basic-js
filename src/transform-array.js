const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let res = [];
  
  if (typeof arr !== 'object' || !(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      console.log(res)
      switch (arr[i]) {
        case '--discard-next':
          i += 1; 
          break;
        case '--discard-prev':
          if (res[res.length - 1] === res[res.length - 2]) {
            res.pop();
            res.pop();
          } else {
            res.pop();
          }
          break;
        case '--double-next':
          if (arr[i + 1]) {
            res.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (arr[i - 1]) {
            res.push(arr[i - 1]);
          }
          break;
        default: 
          res.push(arr[i]);
          break;
      }
    }
    return res;
  } 
}

module.exports = {
  transform
};
