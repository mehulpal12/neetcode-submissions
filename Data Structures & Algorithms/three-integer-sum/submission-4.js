class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        arr.sort((a,b) => a-b);
        let ans  = []
        for(let i =0; i < arr.length; i++){
            if(i === 0 || arr[i] !== arr[i-1]){
                this.twoSum(arr,i,ans)
            }
        }
        return ans
    }
    twoSum(nums, x,ans){
        let l = x+1;
        let r = nums.length-1;
        while(l < r){
            if(nums[l] + nums[r] + nums[x] === 0){
                ans.push([nums[l] , nums[r] , nums[x]])
                r--
                l++
                while(nums[l] == nums[l-1]) {
                    l++
                }

            }else if(nums[l] + nums[r] + nums[x] > 0){
                r--
            }else{
                l++
            }
        }
    }
}
