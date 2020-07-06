/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 */


/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function (matrix) {
    let i, j, m, n;
    m = matrix.length;
    n = matrix[0].length;
    let row, col; //to know if the matrix[0][0]=0 from the row or the col

    let leftTop_value = matrix[0][0]; //make a copy of the value on the top left, will be used later.

    for (i = 1; i < m; i++) if (matrix[i][0] === 0) row = true;;
    for (j = 1; j < n; j++) if (matrix[0][j] === 0) col = true;


    for (i = 0; i < m; i++) {

        for (j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue; //does not consider matrix[0][0] here.

            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }

        }
    }

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (leftTop_value === 0) {
        for (i = 1; i < m; i++)matrix[i][0] = 0;
        for (j = 1; j < n; j++) matrix[0][j] = 0;
    } else {
        if (matrix[0][0] === 0) {
            if (row) for (i = 1; i < m; i++) matrix[i][0] = 0;
            if (col) for (j = 1; j < n; j++) matrix[0][j] = 0;
        }
    }

};



//test
setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]);
setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]);
setZeroes([
    [1]
]);
setZeroes([
    [0]
]);
setZeroes([
    [1, 0, 3]
]);
setZeroes([
    [1, 1, 1],
    [0, 1, 2]
]);
setZeroes([
    [-4, -2147483648, 6, -7, 0],
    [-8, 6, -8, -6, 0],
    [2147483647, 2, -9, -6, -10]
]);