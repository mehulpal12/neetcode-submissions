class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(arr) {
        let l = 0;
        let r = arr.length-1;
        if(arr[l] < arr[r]) return arr[l]
        while(l < r){
            let mid =  Math.floor(l+(r-l) / 2);
            if(arr[mid] > arr[r]){
                l = mid + 1
            }else{
                r = mid
            }
        }
        return arr[l]
    }
}
