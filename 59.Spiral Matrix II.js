/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = [];
    let i, j, current_direction, num, nextPosition_i, nextPosition_j;

    for (i = 0; i < n + 2; i++) {
        matrix.push(new Array(n + 2));
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]//right,down,left,up

    // set boundaries
    for (i = 0; i < n + 2; i++)matrix[0][i] = -1;
    for (i = 0; i < n + 2; i++)matrix[n + 2 - 1][i] = -1;
    for (i = 0; i < n + 2; i++)matrix[i][0] = -1;
    for (i = 0; i < n + 2; i++)matrix[i][n + 2 - 1] = -1;

    i = 1;
    j = 1;
    current_direction = 0;
    matrix[1][1] = 1;
    num = 2;
    while (num <= n * n) {
        nextPosition_i = i + directions[current_direction][0];
        nextPosition_j = j + directions[current_direction][1];

        if (matrix[nextPosition_i][nextPosition_j] !== -1 && matrix[nextPosition_i][nextPosition_j] === undefined) {
            i = nextPosition_i;
            j = nextPosition_j;
            matrix[i][j] = num;
            num = num + 1;
        } else {
            current_direction = (current_direction + 1) % 4;
        }
    }

    matrix = matrix.slice(1, n + 1); //remove the boundraies
    for (i = 0; i < n; i++) {
        matrix[i] = matrix[i].slice(1, n + 1);
    }

    return matrix;

};


//test
console.log(generateMatrix(3));

