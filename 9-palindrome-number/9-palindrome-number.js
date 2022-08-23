/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rev = Number(x.toString().split("").reverse().join(""))
    return rev === x ? true : false 
};