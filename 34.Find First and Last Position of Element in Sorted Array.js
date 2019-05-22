/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let len=nums.length;
  let left=0,right=len-1;
  let mid,targetIndex=-1;

  while(left<=right){
      mid=(left+right)/2;
      mid=Math.floor(mid);

      if(nums[mid]==target){
          targetIndex=mid;
          break;
      }

      if(nums[mid]>target){
          right=mid-1;
      }else{
          left=mid+1;
      }
  }

  if(targetIndex==-1) return [-1,-1];

  let leftIndex,rightIndex;
  leftIndex=targetIndex;
  rightIndex=targetIndex;

  while(leftIndex-1>=0){
      if(nums[leftIndex-1]==target){
          leftIndex=leftIndex-1;
      }else{
          break;
      }
  }

  while(rightIndex+1<=len-1){
    if(nums[rightIndex+1]==target){
        rightIndex=rightIndex+1;
    }else{
        break;
    }
}
    return [leftIndex,rightIndex];
};



//test
let nums=[5,7,7,8,8,10];
console.log(searchRange(nums,8));
console.log(searchRange(nums,6));
