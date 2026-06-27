/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0
    let x = 0;
    for(let i = 0; i< nums.length;i++){
        if(nums[i] !== nums[x]){
            x++
            nums[x] = nums[i];
        }
    }
    return x+1
};