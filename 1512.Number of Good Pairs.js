/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let cache={};
    for(let i=0;i<nums.length;i++){
      if(nums[i] in cache){
        cache[nums[i]]+=1;
      }else{
        cache[nums[i]]=1;
      }
    }

    let result=0;
    const keys=Object.keys(cache);
    keys.forEach(key=>{
      if(cache[key]>=2){
        result+=Cmn(cache[key]);
      }
    })

    return result;
};

function Cmn(num){
  return num*(num-1)/2;
}