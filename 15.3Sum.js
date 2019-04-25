/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const target = 0
    let len = nums.length
    let i, j, k, sum
    let result = []


    //sort nums in ascending order
    nums = nums.sort((a, b) => { return a - b })


    for (i = 0; i < len - 2; i++) {

        //when nums[i]>0 there is no chance to make a sum of 0
        if(nums[i]>0) break


        //ignore repetitive number
        // if you wrote ' if(nums[i]===nums[i+1]) continue', it would be wrong, consider the situation of [-1,0,0,0], which will ignore [0,0,0]
        if (i>0 && nums[i] === nums[i - 1]) continue

        j = i + 1
        k = len - 1
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])

                //avoid repetitive value like [-5,1,1,4,4]
                while(j<k &&nums[j]===nums[j+1])j++
                while(j<k &&nums[k]===nums[k-1])k--

                j++
                k--
            } else if (sum < target) {
                j++
            } else {
                k--
            }
        }

    }

    return result
};





//test
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0,0,0]))
console.log(threeSum([-1,0,0,0]))


// let nums = [-1, 0, 1, 2, -1, -4]
// nums = nums.sort((a, b) => { return a - b })
// console.log(nums)

