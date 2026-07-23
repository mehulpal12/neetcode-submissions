class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, x) {
        let l = 0;
        let r = arr.length-1;
        while(l <= r){
            let m = Math.floor(l+ (r-l)/2);
            if(arr[m] === x) return m;
            if(arr[l] <= arr[m]){ // check the right part is sorted or not
                if(arr[l] <= x && x < arr[m]){ // check x is lies btw in left or not
                    r = m-1
                }else{
                    l = m+1
                }
            }else{
                if(arr[m] < x && x <= arr[r]){ // not check the m because it check before
                    l = m+1
                }else{
                    r = m-1
                }
            }
        }
        return -1
    }
}
