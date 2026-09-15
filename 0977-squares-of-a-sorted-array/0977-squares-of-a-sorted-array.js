/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    Math.abs(arr);
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
    let arrSort = arr.sort((a,b) => a-b);
    return arrSort
};