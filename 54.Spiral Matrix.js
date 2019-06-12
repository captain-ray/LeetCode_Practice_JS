/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) return [];

    let result = []
    let flag = [[]]; //an auxiliary array to record if the element has been traveled
    let columns = matrix[0].length, rows = matrix.length;
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let i, j;

    //initialized with false
    for (i = 0; i < rows; i++) {
        flag[i] = []
        for (j = 0; j < columns; j++) {
            flag[i][j] = false;
        }
    }

    let r = 0, c = 0, d = 0;
    while (c >= 0 && c < columns && r >= 0 && r < rows && flag[r][c] == false) {
        flag[r][c] = true;
        result.push(matrix[r][c]);

        rr = r + direction[d][0];
        cc = c + direction[d][1];

        if (cc >= 0 && cc < columns && rr >= 0 && rr < rows && flag[rr][cc] == false) {
            r = rr;
            c = cc;
        } else {
            d = (d + 1) % 4;
            r = r + direction[d][0];
            c = c + direction[d][1];
        }
    }

    return result;
};




//test
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

let matrix = [[1]]
console.log(spiralOrder(matrix));