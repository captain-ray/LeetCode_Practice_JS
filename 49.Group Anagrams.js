/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();

    strs.forEach(element => {
        
        //sorting string letters in alphabetic order
        let sorted=element.split('').sort().join('');

        if(sorted in map){
            map[sorted].push(element);
        }else{
            map[sorted]=[element];
        }
    });


    let result=[];
    for (let item in map){
        result.push(map[item]);
    }

    return result;
};


//test
let strs=["eat", "tea", "tan", "ate", "nat", "bat"];
let res=groupAnagrams(strs);
console.log(res);