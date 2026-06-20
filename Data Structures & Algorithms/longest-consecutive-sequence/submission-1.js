class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a,b) => a-b);
         let longest = -1;
            let count = -1;
        for(let i = 0; i< nums.length; i++){
            if(nums[i] === nums[i - 1]){
                continue;
            }

            if(nums[i] === nums[i - 1] + 1){
                count++
            }else{
                if(count > longest){
                    longest = count;
                }
            count = 1
            }
        }
        if(count > longest){
            longest = count;
        }
        return longest
    }
}
