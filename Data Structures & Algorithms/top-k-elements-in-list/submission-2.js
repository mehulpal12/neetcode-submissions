class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i = 0; i< nums.length; i++){
            if(map.has(nums[i])){
                 map.set(nums[i], map.get(nums[i]) + 1)
            }else{
                map.set(nums[i], 1)
            }
        }
        let uni = Array.from(map.keys())
        uni.sort((a,b) => map.get(b) - map.get(a))
        let res = []
        for(let i = 0; i< k; i++){
            res.push(uni[i])
        }
        return res
    }
}
