class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        let n = arr.length;
        let res = new Array(n);
        for(let i = 0; i < arr.length; i++){
            let product = 1;
            for(let j = 0; j < arr.length; j++){
                if(i !== j){
                    product *= arr[j]
                }
            }
         res[i] = product
        }
        return res
    }
}
