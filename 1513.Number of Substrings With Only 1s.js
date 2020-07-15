/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const base=10**9+7;
    let left=0;
    let count=0;
  
    for(let right=0;right<s.length;right++){
      if(s[right]==="1"){
        count=(count%base + (right-left)%base+1)%base;
      }else{
        left=right+1;
      }
    }
    return count;
  };