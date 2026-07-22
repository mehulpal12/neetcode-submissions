/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, x) {
    let l = 0;
    let r = arr.length-1;
    while(l <= r){
        let m = Math.floor(l + (r-l) / 2);
        if(arr[m] === x) return m;
        if(arr[l] <= arr[m]){
            if(arr[l] <= x && x <= arr[m]){
                r = m - 1
            }else{
                l = m +1
            }
        }else{
            if(arr[m] <= x && x <= arr[r]){
                l = m+1
            }else{
                r = m-1
            }
        }
    }
    return -1
};