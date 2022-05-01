const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let count = 0;
  let width = matrix[0].length - 1;
  let height = matrix.length - 1;
  let newMatrix = [];
  
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      console.log(i, j)
        if (i - 1 >= 0 & j - 1 >= 0) {
          if (matrix[i - 1][j - 1] === true) {count += 1}
        }
        if (i - 1 >= 0) {
          if (matrix[i - 1][j] === true) {count += 1}
        }
        if (i - 1 >= 0 & j + 1 <= height) {
          if (matrix[i - 1][j + 1] & matrix[i - 1][j + 1] === true) {count += 1}
        }
        if (j - 1 >= 0) {
          if (matrix[i][j - 1] === true) {count += 1}
        }
        if (j + 1 <= height & matrix[i][j + 1]) {
          if (matrix[i][j + 1] === true) {count += 1}
        }
        if (i + 1 < width & j - 1 >= 0) {
          if (matrix[i + 1][j - 1] === true) {count += 1} 
        }
        if (i + 1 < width) {
          if (matrix[i + 1][j] === true) {count += 1}
        }
        if (i + 1 < width & j + 1 <= height) {
          if (matrix[i + 1][j + 1] === true) {count += 1}
        }
        newMatrix[i][j] = count;
        count = 0;
      }
    } 
  return newMatrix;
}
module.exports = {
  minesweeper
};
