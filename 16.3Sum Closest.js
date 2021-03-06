/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//similar to 15.3Sum
var threeSumClosest = function (nums, target) {
    let len = nums.length
    let i, j, k, sum, dist
    let closestDist = Number.MAX_VALUE
    let res = 0

    //sort nums
    nums = nums.sort((a, b) => a - b)

    for (i = 0; i < len - 2; i++) {

        j = i + 1
        k = len - 1

        while (j < k) {
            sum = nums[i] + nums[j] + nums[k]
            dist = Math.abs(sum - target)
            if (dist < closestDist) {
                closestDist = dist
                res = sum
            }

            if (sum === target) {
                return target
            } else if (sum > target) {
                k--
            } else {
                j++
            }
        }

    }

    return res
};



//test
console.log(threeSumClosest([-1, 2, 1, -4], 1))