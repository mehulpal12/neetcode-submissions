/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l = 0;
    let r = arr.length-1;
    while(l <= r){
    let mid = l + Math.floor((r-l) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return -1
};