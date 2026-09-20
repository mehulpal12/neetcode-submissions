class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let map = new Map();
        for(let i = 0; i < arr.length; i++){
            let toFind = target - arr[i];
            if(map.has(toFind)){
                return [i,map.get(toFind)]
            }
            map.set(arr[i],i)
        }
    }
}
