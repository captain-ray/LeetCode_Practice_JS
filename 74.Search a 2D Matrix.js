/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {


    let m, n;
    m = matrix.length;

    if(m===0) return false;

    n = matrix[0].length;

    let len = m * n;
    let left = 0, right = len - 1;
    let mid, midValue;
    while (left <= right) {
        mid = (left + right) >> 1;
        midValue = matrix[Math.floor(mid / n)][Math.floor(mid % n)];
        if (midValue === target) return true;
        if (midValue > target) right = right - 1;
        else left = left + 1;
    }

    return false;
};



//test
let res1 = searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 3);
console.log(res1);



let res2 = searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 13);
console.log(res2);

let res3 = searchMatrix([
    [1, 3, 5, 7],

], 7);
console.log(res3);

let res4 = searchMatrix([
    [1],

], 1);
console.log(res4);

let res5 = searchMatrix(
    [], 1);
console.log(res5);

let res6 = searchMatrix(
    [[1], [3]]
    , 0);
console.log(res6);

