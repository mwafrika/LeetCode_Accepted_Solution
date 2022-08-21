/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[i] === nums[j]){
               check++
            }
        }
    }
    
    if(check >= 1){
        return true
    }else{
        return false
    }
    
};