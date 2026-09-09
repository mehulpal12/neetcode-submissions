class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        let set = new Set(nums);
        for(let i = 0; i < nums.length; i++){
            let streak = 0;
            let curr = nums[i];
            if(!set.has(curr-1)){
            while(set.has(curr)){
                streak++
                curr++
            }
            }
            res = Math.max(streak, res)
        }
        return res
    }
}
