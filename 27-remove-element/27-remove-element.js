/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    
   nums.filter((value, index) =>{
      if(value !== val){
          nums[count] = value
          count++
      } 
   })
   
    
   return count
};