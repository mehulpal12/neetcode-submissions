class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
        if(!arr.length) return 0
        arr.sort((a,b) => a-b);
        let count = -1;
        let max = -1;
        for(let i = 0; i< arr.length;i++){
            if(arr[i] === arr[i - 1]){
                continue;
            }
            if(arr[i] === arr[i-1] +1){
                count++
            }else{
                if(count>max){
                    max = count;
                }
                count = 1
            }
        }
        if(count>max){
                    max = count;
                }
        return max
    }
}
