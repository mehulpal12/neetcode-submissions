/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, x) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (x === arr[m]) return m;
        if (arr[l] <= arr[m]) {
            if (x >= arr[l] && x < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1
            }
        } else {
            if (x > arr[m] && x <= arr[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
};