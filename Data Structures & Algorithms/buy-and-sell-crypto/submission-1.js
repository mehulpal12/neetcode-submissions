class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let min = arr[0];
        let max = 0;
        for(let i = 0; i < arr.length;i++){
            if(arr[i] - min > max){
                max = arr[i] - min
            }else if(arr[i] < min){
                min = arr[i]
            }
        }
        return max
    }
}
