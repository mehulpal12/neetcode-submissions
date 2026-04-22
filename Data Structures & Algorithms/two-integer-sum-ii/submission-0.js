class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let l = 0;
        let r = arr.length-1;
        for(let i = 0; i < arr.length; i++){
            let sum = arr[l] + arr[r];
            if(target === sum){
                return [l+1, r+1]
            }else if (target < sum){
                  r--
            }else{
               l++
            }
        }
    }
}
