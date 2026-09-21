class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(arr) {
        arr.sort((a,b) => a-b)
        return arr[0]
    }
}
