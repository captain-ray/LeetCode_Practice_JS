/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    const MAX = 2 ** 31 - 1

    sign = 1
    if (dividend < 0) sign = sign * (-1)
    if (divisor < 0) sign = sign * (-1)

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    originalDivisor = divisor

    res = 0

    while (dividend >= divisor) {
        shift = 0;

        //if using divisor<<1, will overflow, so think in the opposite way
        while (divisor <= (dividend >> 1)) {
            shift++;
            divisor = divisor << 1
        }

        res = res + (1 << shift)
        dividend = dividend - divisor
        divisor = originalDivisor

    }


    if (res > MAX && sign === 1) return MAX
    if (res > MAX + 1 && sign === -1) return MAX

    if (sign === -1 && res != 0) { res = res * (-1) }
    return res
};

//test
console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(0, -3))
console.log(divide(2 ** 31, 1))
