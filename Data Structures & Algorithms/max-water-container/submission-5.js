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
            let area = Math.abs(l-r) * Math.min(arr[l], arr[r]);
            res = Math.max(res,area);
            if(arr[r] > arr[l] ){
                l++
            }else{
                r--
            }

        }
        return res
    }
}
