/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


//find pattern--interval=(numRows-2)*2+2
var convert = function (s, numRows) {
    const interval=(numRows-2)*2+2
    const len=s.length
    let res=""
    let i,j
    let interval1,interval2
    let rowStr

    if(numRows===1){
        return s
    }

    for(i=0;i<numRows;i++){
        
        j=i
        interval1=(numRows-j-1)*2
        interval2=interval-interval1
        
        rowStr=s.charAt(j)
        while(j<len){
            j=j+interval1

            //i=numRows-1 situation
            if(interval1===0){
                j=j+interval2
            }
            if(j<len){
                rowStr=rowStr+s.charAt(j)
                j=j+interval2
                if(j<len && (i!=0&&i!=len-1)){
                    rowStr=rowStr+s.charAt(j)
                }
            }
        }

        res=res+rowStr
        
    }

    return res

};


//test
console.log(convert("PAYPALISHIRING",3))
console.log(convert("PAYPALISHIRING",4))
console.log(convert("PAYPALISHIRING",5))
console.log(convert("A",1))