/* A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    if(obstacleGrid[0][0]===1) return 0; //obstable at the start point, resulting in no paths.

    //change obstacle sign from 1 to -1
    let i, j, m, n;
    m = obstacleGrid.length;
    n = obstacleGrid[0].length;

    for (i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            for (j = i; j < m; j++) obstacleGrid[j][0] = -1;
            break;
        } else {
            obstacleGrid[i][0] = 1;
        }
    }

    for (i = 1; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            for (j = i; j < n; j++) obstacleGrid[0][j] = -1;
            break;
        } else {
            obstacleGrid[0][i] = 1;
        }
    }

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = -1;
        }
    }

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {

            if (obstacleGrid[i][j] === -1) continue;

            if (obstacleGrid[i - 1][j] !== -1 && obstacleGrid[i][j - 1] !== -1) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else if (obstacleGrid[i - 1][j] === -1 && obstacleGrid[i][j - 1] !== -1) {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1];
            } else if (obstacleGrid[i - 1][j] !== -1 && obstacleGrid[i][j - 1] === -1) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j];
            } else if (obstacleGrid[i - 1][j] === -1 && obstacleGrid[i][j - 1] === -1) {
                obstacleGrid[i][j] = -1;
            }
        }
    }

    if (obstacleGrid[m - 1][n - 1] === -1) return 0;
    return obstacleGrid[m - 1][n - 1];
};


//test
console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]));
console.log(uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
]));
console.log(uniquePathsWithObstacles([
    [0, 1, 0, 0],
]));
console.log(uniquePathsWithObstacles([
    [1]
]));
console.log(uniquePathsWithObstacles([
    [1,0]
]));