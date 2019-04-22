/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let map=new Map()
    map.set(4,'IV')
    map.set(9,'IX')
    map.set(40,'XL')
    map.set(90,'XC')
    map.set(400,'CD')
    map.set(900,'CM')

    let symbolValue=[
        ['I','V'],
        ['X','L'],
        ['C','D'],
        ['M']
    ]

    let i,digit,currentNum,j
    let divisor=1000
    let res=""
    for(i=3;i>=0;i--){
        digit=Math.floor(num/divisor)
        if(digit===0){
            divisor=divisor/10
            continue
        }
        currentNum=digit*divisor

        if(map.get(currentNum)){
            res=res+map.get(currentNum)
            divisor=divisor/10
            num=num-currentNum
            continue
        }

        if(digit>0){
            if(digit<5){
                for(j=0;j<digit;j++){
                    res=res+symbolValue[i][0]
                }
            }else{
                res=res+symbolValue[i][1]
                for(j=0;j<digit-5;j++){
                    res=res+symbolValue[i][0]
                }
            }
        }

        divisor=divisor/10
        num=num-currentNum
    }
    return res

};



//test


console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))