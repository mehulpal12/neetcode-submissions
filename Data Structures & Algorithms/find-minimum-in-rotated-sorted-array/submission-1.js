class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(arr) {
        let l = 0;
        let r = arr.length - 1;
        if (arr[l] < arr[r]) return arr[l];
        while (l < r) {
            let m = Math.floor(l + (r - l) / 2);
            if (arr[m] > arr[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return arr[l];
    }
}
