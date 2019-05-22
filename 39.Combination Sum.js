/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[];
    candidates.sort();
    backTrack(candidates,target,[],0,res);
    return res
};



function backTrack(candidates,target,path,index,res){
    if(target<0) return;

    if(target==0){
         res.push(path.slice(0));
    }

    let len=candidates.length;
    for(let i=index;i<len;i++){
        if(candidates[i]<=target){
            path.push(candidates[i])
            backTrack(candidates,target-candidates[i],path,i,res);
            path.pop();
        }
    }

}

// test

let candidates=[2,3,5]
res=combinationSum(candidates,8)
console.log(res);