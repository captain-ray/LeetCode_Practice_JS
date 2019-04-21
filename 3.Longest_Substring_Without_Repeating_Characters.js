/**
 * @param {string} s
 * @return {number}
 */

//Sliding window [i,j)
//using 'Set'
/* var lengthOfLongestSubstring = function(s) {
    let set=new Set()
    let result=0
    let i=0,j=0
    const n=s.length
    while(i<n&&j<n){
        if(set.has(s[j])){
            set.delete(s[i])
            i++
        }else{
            set.add(s[j])
            j++
            result=Math.max(result,j-i)
        }
    }
    return result
}; */


//Sliding window [i,j)
//using 'HashMap'
var lengthOfLongestSubstring = function(s) {
    let map=new Map()
    let result=0
    let i=0,j=0
    const n=s.length
    while(i<n&&j<n){
        if(map.has(s[j])){
            i=Math.max(map.get(s[j])+1,i)
            map.delete(s[j])
        }else{
            map.set(s[j],j)
            j++
            result=Math.max(result,j-i)
        }
    }
    return result
}


//test
let res=lengthOfLongestSubstring("abcabcbb")
console.log(res)
let res2=lengthOfLongestSubstring("bbbbb")
console.log(res2)
let res3=lengthOfLongestSubstring("pwwkew")
console.log(res3)
let res4=lengthOfLongestSubstring(" ")
console.log(res4)
let res5=lengthOfLongestSubstring("abba")
console.log(res5)