class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let l = 0;
        let r = arr.length-1;
        let res = 0;
        while(l < r){
            let sum = Math.min(arr[l], arr[r]) * Math.abs(l-r);
            res = Math.max(res,sum)
            if(arr[r] > arr[l]){
                l++
            }else{
                r--
            }
        }
        return res
    }
}
