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
        let r = (row*col)-1; // convert this matrix into 1d;
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);

            let midrow = Math.floor(m/col);
            let midcol = m%col
            let midval = matrix[midrow][midcol];
            if(midval === target) return true;
            if(midval < target){
                l = m+1
            }else{
                r = m-1
            }
        }
        return false
    }
}
