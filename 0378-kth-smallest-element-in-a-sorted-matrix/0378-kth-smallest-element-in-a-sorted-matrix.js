/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // find the length of first row
    let n = matrix[0].length;
    // create a minPQ with x val
    let heap = new MinPriorityQueue(x => x.val)
    // add all the first rom elem into minPQ
    for(let i = 0; i < n; i++){
        heap.push({val: matrix[i][0], row: i, col:0})
    }
    for(let count = 0; count < k-1; count++){
        let {val,row,col} = heap.pop()
        // check the last elem in that row
        if(col+1 < n ){
            heap.push({val: matrix[row][col+1], row: row, col: col+1})
        }
    }
    return heap.pop().val
};