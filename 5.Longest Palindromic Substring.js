/**
 * @param {string} s
 * @return {string}
 */

//Dynamic Programming
var longestPalindrome = function (s) {

    let n = s.length
    let isPa = []
    let start=0, end=0, max = 1

    for (let i = 0; i < n; i++) {
        isPa.push(new Array(n))
        isPa[i][i] = true
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {

            if (s[i] === s[j] && i+1 === j) {
                isPa[i][j] = true
            } else if (s[i] === s[j] && isPa[i + 1][j - 1]) {
                isPa[i][j] = true
            }


            if (isPa[i][j] && j - i + 1 > max) {
                start = i
                end = j
                max = j - i + 1
            }
        }
    }
    return s.slice(start, end + 1)
};

//test
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("abcda"))