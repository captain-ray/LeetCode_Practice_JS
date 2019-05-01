/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    ans=[]
    function backtrack(S,left,right){
        if(S.length===n*2){
            ans.push(S)
            return
        }
        if(left<n) backtrack(S+'(',left+1,right)
        if(right<left) backtrack(S+')',left,right+1)
    }
    backtrack('',0,0)
    return ans
};


//test
console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
console.log(generateParenthesis(4))

