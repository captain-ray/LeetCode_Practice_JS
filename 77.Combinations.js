/* Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
] */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    let arr = [];
    let i, j;
    for (i = 1; i <= n; i++) arr.push(i);

    let allCombinations = [];
    backTrack(arr, k, [], allCombinations);

    return allCombinations;
};

backTrack = (arr, k, res, allCombinations) => {
    if (arr.length < k) return;

    if (arr.length === k) {
        res = res.concat(arr);
        allCombinations.push(res.slice());
        return;
    }

    if (k === 0) {
        allCombinations.push(res.slice());
        return;
    }

    let i;
    for (i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        backTrack(arr.slice(i + 1, arr.length), k - 1, res, allCombinations);
        res.pop();
    }
}


//test

// combine(4, 2);
// combine(10, 3);
combine(1, 1);
// combine(2, 2);
