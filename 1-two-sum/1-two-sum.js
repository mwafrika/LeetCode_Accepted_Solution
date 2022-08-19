/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) =>{
   let acc = [];
    
    for(let i=0; i<nums.length; i++){
         for(let j=i+1; j<nums.length; j++){
             if(nums[i] + nums[j] === target){
                    acc.push(i)
                    acc.push(j)
             }
         }
    }
    return acc
};