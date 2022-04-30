const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let numArr = [];
  let midArr = arr.map((i) => {
    if (i != -1) {
      numArr.push(i);
      return 'X';
    } else {
      return i;
    }
  });

  numArr.sort((a,b) => b - a);
  
  let res = midArr.map((i) => {
      if (i == 'X') {
        let num = numArr[numArr.length - 1];
        numArr.pop();
        return num;
      } else {
        return i;
      }
  })

  return res;
}

module.exports = {
  sortByHeight
};
