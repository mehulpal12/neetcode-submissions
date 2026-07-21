class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;
        let l = 0;
        let r = (row*col)-1 // convert into 1d array
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);

            let midrow = Math.floor(m/col);
            let midcol = m % col
            let midval = matrix[midrow][midcol]
            if(midval === target){
                return true
            }else if(midval > target){
                r = m-1
            }else{
                l = m +1
            }
        }
        return false
    }
}
