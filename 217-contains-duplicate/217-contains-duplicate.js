/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const duplicates = (item, index) => nums.indexOf(item) !== index
    
    const hh = nums.some(duplicates)
    if(hh){
       return true
    }else{
        return false
    }
};