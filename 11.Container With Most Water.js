/**
 * @param {number[]} height
 * @return {number}
 */

 //brute-force
/*  var maxArea = function(height) {
    let len=height.length
    let i,j
    let maxRes=0
    for(i=0;i<len-1;i++){
        for(j=i+1;j<len;j++){
            maxRes=Math.max(maxRes,Math.min(height[i],height[j])*(j-i))
        }
    }

    return maxRes
}; */


//optimized
var maxArea = function(height) {
    let len=height.length
    let left=0
    let right=len-1
    let maxRes=0
    
    while(left<right){
        maxRes=Math.max(maxRes,Math.min(height[left],height[right])*(right-left))
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxRes
};

//test
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))