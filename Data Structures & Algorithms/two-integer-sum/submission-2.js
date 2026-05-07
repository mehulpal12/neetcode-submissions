class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        for(let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] + arr[j] === target && i != j){
                    return [i,j]
                }
            }
        }
    }
}
