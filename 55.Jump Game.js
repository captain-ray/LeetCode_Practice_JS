/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let N = nums.length;
    let pos = 0;
    for (let i = 0; i < N; i++) {
        if (nums[pos] >= (N - 1 - pos)) return true; //current element is able to reach the last index
        if (nums[pos] === 0) return false; 

        if ((nums[pos] - (i - pos)) <= nums[i]) pos = i; // Xi has more options to jump
        else pos = pos
    }
};



// test
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));