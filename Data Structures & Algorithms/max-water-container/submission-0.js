class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let l = 0;
        let r = arr.length-1;
        let ans = 0;
        while(l<r){
            let area = Math.min(arr[l],arr[r]) * (r-l);
            ans = Math.max(ans,area);
            if(arr[l] < arr[r]){
             l++
            }else{
                r--
            }
        }
        return ans;
    }
}
