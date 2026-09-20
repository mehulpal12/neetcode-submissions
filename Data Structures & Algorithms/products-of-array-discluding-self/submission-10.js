class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        let res = new Array(arr.length).fill(1);
        for(let i = 1; i < arr.length; i++ ){
            res[i] = res[i-1] * arr[i-1]
        }
        let suffix = 1;
        for(let i = arr.length-1; i >= 0; i--){
            res[i] *= suffix;
            suffix *= arr[i]
        }
        return res
    }
}
