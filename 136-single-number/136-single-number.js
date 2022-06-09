/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let sortedArray = nums.sort((a,b)=>a-b)
    
    for(let i=0;i<sortedArray.length; i+=2){
        
        if(i===sortedArray.length || sortedArray[i] !== sortedArray[i+1]){
            
            return sortedArray[i]
        }
    }
};