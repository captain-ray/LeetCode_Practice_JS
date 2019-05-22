/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res=[];
    candidates.sort((a,b)=>a-b);
    backTrack(candidates,target,[],0,res);
    return res
};



function backTrack(candidates,target,path,index,res){
    if(target<0) return;

    if(target==0){
        //push the copy of the array
         res.push(path.slice(0));
    }

    let len=candidates.length;
    for(let i=index;i<len;i++){
        if(i>index && candidates[i]===candidates[i-1]) continue;
        if(candidates[i]<=target){
            path.push(candidates[i])
            backTrack(candidates,target-candidates[i],path,i+1,res);
            path.pop();
        }
    }


};

// test

let candidates=[10,1,2,7,6,1,5];
res=combinationSum2(candidates,8)
console.log(res);

let candidates2=[2,5,2,1,2];
res2=combinationSum2(candidates2,5)
console.log(res2);

