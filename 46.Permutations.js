/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 let res;
var permute = function(nums) {
    res=[];
    backTracking(nums,[]);
    return res;

};

function backTracking(nums,path){

    if(nums.length===0){
        //.slice() copy of string
        res.push(path.slice());
        return;
    }

    for(let i=0;i<nums.length;i++){
        path.push(nums[i]);
        backTracking(nums.slice(0,i).concat(nums.slice(i+1)),path); //nums.slice(0,i).concat(nums.slice(i+1)) ----nums[i] removed
        path.pop();

    }
}


//test
console.log(permute([1,2,3]))