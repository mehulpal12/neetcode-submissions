/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    let n = arr.length
    let l = 0;
    let r = n-1;
    let index = n-1;
    let res = new Array(n)
    while(l <= r){
        let leftS = arr[l] * arr[l];
        let rightS = arr[r] * arr[r];
        if(leftS > rightS){
            res[index] = leftS;
            l++
        }else{
            res[index] = rightS;
            r--
        }
        index--
    }
    return res
};