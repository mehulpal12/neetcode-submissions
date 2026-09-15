/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let res = nums[0] + nums[1] + nums[2];
    for(let i = 0; i< nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue

        let l = i+1;
        let r = nums.length-1;

        while(l < r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === target) return target
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
            if(sum < target){
                l++
            }else{
                r--
            }
        }
    }
    return res
    
};