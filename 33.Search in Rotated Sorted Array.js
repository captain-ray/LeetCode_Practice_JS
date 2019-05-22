/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len=nums.length;
    let left=0,right=len-1;
    let mid;

    //find the smallest value, which is the pivot
    while(left<right){
        mid=(left+right)/2;
        mid=Math.floor(mid);
        if(nums[mid]>nums[right]){
            left=mid+1;
        }else{
            right=mid;
        }
    }

    let pivot=left;
    let actualMid;
    left=0;
    right=len-1;

    //Binary search for rotated array
    while(left<=right){
        mid=(left+right)/2;
        mid=Math.floor(mid);

        //actual mid in a sorted array
        actualMid=(mid+pivot)%len;

        if(nums[actualMid]==target)return actualMid;
        if(nums[actualMid]>target){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }

    return -1;
   

};


//test
let nums=[4,5,6,7,0,1,2]
console.log(search(nums,0));
console.log(search(nums,3));