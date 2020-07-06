/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //check input
    if(nums.length==0) return 0;
    
    let cache={};
    const targetIndex = nums.length-1;
  
    function getMoney(n){
      if(n===0) return nums[0]
      if(n===1) return Math.max(nums[0],nums[1]);
      
      if(n in cache){
        return cache[n];
      }else{
        const val=Math.max(getMoney(n-2)+nums[n],getMoney(n-1))
        cache[n]=val;
        return cache[n];
      }
  }
  
    return getMoney(targetIndex);
  };
  
  
  rob([1,2,3,1]);