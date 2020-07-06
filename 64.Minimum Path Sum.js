/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
* @param {number[][]} grid
* @return {number}
*/
var minPathSum = function (grid) {
    let i, j, m, n;
    m = grid.length;
    n = grid[0].length;

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0 && j !== 0) grid[i][j] = grid[i][j] + grid[i][j - 1];
            if (i !== 0 && j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j];
            if (i !== 0 && j !== 0) grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }

    return grid[m - 1][n - 1];
};


//test
console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));
console.log(minPathSum([
    [1]
]));


