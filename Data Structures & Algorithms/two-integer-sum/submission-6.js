class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(); // to store the value and index also
        for(let i =0; i< nums.length; i++){
            let toFind = target - nums[i];
            if(map.has(toFind)){
                return [i,map.get(toFind)] // this will return the index of toFind num
            }else{
                map.set(nums[i],i) // this will save the index with the value
            }
        }
    }
}
