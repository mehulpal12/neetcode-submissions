class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // t = O(log(mxn)) s=O(1)
        if(!matrix.length) return false
        let row = matrix.length;
        let col = matrix[0].length;

        let l = 0;
        let r = (row*col)-1 // convert the 2d matrix into 1d array

        while(l <= r){
            let m = Math.floor(l + (r-l)/2)
            // again convert into 2d matrix
            let midrow = Math.floor(m/col) // suppose the m = 6, find the row where the 6 is present
            let midcol = m % col;
            let midval = matrix[midrow][midcol];
            if(midval === target){
                return true
            }else if(midval > target){
                r = m-1
            }else{
                l = m+1
            }
        }
        return false 
    }
}
