/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //using hash table can reduce the look up time from O(n) to O(1)
var twoSum = function(nums, target) {
    let map={}
    for(let i=0;i<nums.length-1;i++){
        map[target-nums[i]]=i
        if(nums[i+1] in map){
            return [map[nums[i+1]],i+1]
        }
    }
};


//test
console.log(twoSum([2,7,11,15],9))
