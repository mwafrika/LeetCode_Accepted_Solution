/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let check = false
   for(let i = 0; i<nums.length-1; i++){
       for(let j=i+1; j<nums.length; j++){       
               if(Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k){
                  check = true
               }
       }
   }
    return check;
};