//SOLUTION 1
//Backtracking
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let len=nums.length;
    let results=[];
    
    for(let i=0;i<=len;i++){
      backtrack(0,i,[]);
    }
    
  
    function backtrack(first,size,arr){
  
      if(arr.length===size){
        results.push(arr.slice());
        return; 
      }
  
      const remain=len-first;
      //if the current arr and remaining elements cannot adds up to the expected size, simply return, because there is no meaning
      if(remain+arr.len<size) return;
  
      for(let i=first;i<len;i++){
        arr.push(nums[i]);
        // console.log(arr)
        backtrack(i+1,size,arr);
        arr.pop();
      }
  
    }
  
    return results;
  };



//SOLUTION 2
//Binary Bitmasks
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results=[];
    results.push([]);
    const len=nums.length;
  
    for(let i=1;i<(1<<len);i++){
      let arr=[];
      for(let j=0;j<len;j++){
        if(i & (1<<j)) arr.push(nums[j]);
      }
      results.push(arr);
    }
    return results;
  };
