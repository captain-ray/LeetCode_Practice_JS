/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res;
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);

    res=[];
    
    backTrack(nums,[]);

    return res;
};


function backTrack(nums,path){
    if(nums.length===0){
        res.push(path.slice());
    }

    let last=''; 
    for(let i=0;i<nums.length;i++){

        if(last===nums[i]) continue; //ignore the situation of nums[i-1]==nums[i]
        
        path.push(nums[i]);
        last=nums[i]
        backTrack(nums.slice(0,i).concat(nums.slice(i+1)),path);
        path.pop();

    }
}

//test
permuteUnique([1,1,0]);

