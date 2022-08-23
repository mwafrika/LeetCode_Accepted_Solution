/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rev = Number(x.toString().trim().split("").reverse().join(""))
    return rev === x ? true : false 
};