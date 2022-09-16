/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   return x === Number(x.toString().split('').reverse().join(''));
};

//return x == x.toString().split('').reverse().join('');