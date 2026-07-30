/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(arr, k) {
    let low = 0;
    let high = k-1;
    let sum = 0;
    for(let i = 0; i <= high; i++){
        sum += arr[i]
    }
    let result = sum
    while(high < arr.length-1){
        low++
        high++
        sum = sum-arr[low-1] + arr[high]
        result = Math.max(result,sum)
    }
    return result/k
};