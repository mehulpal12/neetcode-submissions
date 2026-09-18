class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        let n = arr.length;
        let res = new Array(n).fill(1);
        for(let i = 1; i < arr.length; i++){
            res[i] = res[i-1] * arr[i-1]
        }
        let suffix = 1;
        for(let i = n-1; i >= 0; i--){
            res[i] *= suffix
            suffix *= arr[i];
        }
        return res
    }
}
