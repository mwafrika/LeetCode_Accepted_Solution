/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const duplicates = (item, index) => nums.indexOf(item) !== index
    return nums.some(duplicates)
};