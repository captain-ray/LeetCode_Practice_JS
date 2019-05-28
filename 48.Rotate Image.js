/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix[0].length;
    let i, j;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {

            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (i = 0; i < len; i++) {
        matrix[i].reverse();
    }

};


//test
let matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];
rotate(matrix);
console.log(matrix);


