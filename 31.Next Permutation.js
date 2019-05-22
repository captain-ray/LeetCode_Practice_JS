/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
   let i=nums.length,j;
   for(i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            for(j=nums.length-1;j>=i;j--){
                if(nums[j]>nums[i-1]){
                    temp=nums[j];
                    nums[j]=nums[i-1];
                    nums[i-1]=temp;

                    break;
                }
            }
            break;
        }
   }

   //currently index of i is the start of the subarray that need to be sorted reversely
   j=nums.length-1;
   while(i<j){
       temp=nums[i];
       nums[i]=nums[j];
       nums[j]=temp;

       i++;
       j--;
   }
};


// test
let nums=[[1,2,3],[3,2,1],[1,1,5],[1],[1,2,3,5,4,2],[1,5,8,4,7,5,3,1]];
for(let i=0;i<nums.length;i++){
    nextPermutation(nums[i]);
    console.log(nums[i]);
}

