class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let i = 0; i< nums.length;i++){
            let num = nums[i];
            if(!map.has(num)){
                map.set(num,1)
            }
            else{
                map.set(num,map.get(num) + 1);
            }
        }
        let unique = Array.from(map.keys())
        unique.sort((a,b) => map.get(b)-map.get(a));
        let result = [];
        for(let i = 0; i < k; i++){
            result.push(unique[i])
        }
        return result
    }
}
