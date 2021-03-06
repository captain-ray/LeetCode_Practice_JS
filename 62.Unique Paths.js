/* A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let diagram = [];
    let i, j;
    for (i = 0; i < m; i++) {
        diagram.push(new Array(n).fill(0));
    }

    for (i = 0; i < m; i++) diagram[i][0] = 1;
    for (j = 0; j < n; j++) diagram[0][j] = 1;

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            diagram[i][j] = diagram[i - 1][j] + diagram[i][j - 1];
        }
    }

    return diagram[m - 1][n - 1];
};



//test
console.log(uniquePaths(7,3));
console.log(uniquePaths(3,2));
console.log(uniquePaths(1,1));