/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        return [].concat(nums,target).sort((a,b)=>a-b).indexOf(target)
    }
};