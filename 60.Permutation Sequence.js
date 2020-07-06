/* 
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {

    let results = [];

    let factorial = getFactorial(n);//[1,1!,2!,3!,4!...n!]

    let i, count, j;

    let arr = [];
    for (i = 1; i <= n; i++) arr.push(i);

    for (i = n - 1; i >= 0; i--) {
        count = Math.ceil(k / factorial[i]) - 1;
        results.push(arr.splice(count, 1)[0]);
        k = k - count * factorial[i];
    }

    results = results.join('');


    return results;
}


getFactorial = (n) => {
    let factorial = []; //[1,1!,2!,3!,4!...n!]
    let fact = 1;
    factorial.push(1);

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
        factorial.push(fact);
    }
    return factorial;
}



//test 
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 3));
console.log(getPermutation(2, 2));
console.log(getPermutation(1, 1));
console.log(getPermutation(3, 4));



