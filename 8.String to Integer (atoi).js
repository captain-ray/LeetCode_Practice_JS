/**
 * @param {string} str
 * @return {number}
 */

const MAX = 2**31-1
const MIN = -(2**31)
var myAtoi = function (str) {

    if(str==="")return 0

    let isNegative = false
    // let isNumberStarted = false

    while (str[0] === ' ') {
        str = str.slice(1)
    }

    if (str[0] === '-') {
        isNegative = true
    } else if (str[0] === '+') {
        isNegative = false
    }

    if (str[0] === '+' || str[0] === '-') {
        str = str.slice(1)
    }

    let firstDigit = parseInt(str[0])
    if (isNaN(firstDigit)) {
        // isNumberStarted = false;
        return 0
    }

    let i = 1
    let result = firstDigit
    let digit
    while (i < str.length) {
        digit = parseInt(str[i])
        if (isNaN(digit)) {
            return getResult(result,isNegative)
        } else {
            result = result * 10 + digit
        }
        i = i + 1
    }
    return getResult(result,isNegative)
};

function getResult(result,isNegative){
    if (isNegative) {
        result = result * (-1)
        if (result < MIN) {
            result = MIN
        }
    } else {
        if (result > MAX) {
            result = MAX
        }
    }

    return result
}


//test
console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi(""))

