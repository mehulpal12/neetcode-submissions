class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l = 0;
        let r = arr.length-1;
        while(l <= r){
            let m = l+ Math.floor((r-l)/2);
            if(arr[m] === target) return m;
            if(arr[m] > target){
                r = m-1
            }else{
                l = m+1
            }
        }
        return -1
    }
}
