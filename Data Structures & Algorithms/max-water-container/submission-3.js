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
            let area = Math.min(arr[l], arr[r]) * Math.abs(l-r);
            res = Math.max(area,res)
            if(arr[l] < arr[r]){
                l++
            }else{
                r--
            }
        }
        return res
    }
}
