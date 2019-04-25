/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    let map={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }

    
    if(digits.length===0) return []

    let chars
    let res=[""]
    for(let digit of digits){
        chars=map[parseInt(digit)]
        res=expand(res,chars)
    }
    return res
    
};

//expand the current result by adding new characters
function expand(res,chars){
    let next=[]
    res.forEach(ele => {
        chars.forEach(ch=>{
            next.push(ele+ch)
        })
    });
    return next
}



//test
console.log(letterCombinations('23'))
console.log(letterCombinations(""))
// console.log(letterCombinations("234"))
// console.log(letterCombinations("2345"))
// console.log(letterCombinations("23456"))