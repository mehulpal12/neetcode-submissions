class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let l = 0;
        let r = arr.length-1;
        let ans =0
        while(l < r){
            let area = Math.min(arr[l],arr[r]) * Math.abs(l-r);
            ans = Math.max(area,ans)
            if(arr[l] < arr[r]){
                l++
            }else{
                r--
            }
        }
        return ans
    }
}
