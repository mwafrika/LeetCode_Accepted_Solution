/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let count = [];
  for(let i = 0; i<nums.length; i++){
      for(let j = i+1; j<nums.length; j++){
          if(nums[i]+ nums[j] === target){
              count.push(i)
              count.push(j)
          }
      }
  }
    return count
};