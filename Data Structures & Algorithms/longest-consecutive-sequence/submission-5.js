class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
        let res = 0;
        let map = new Set(arr);
        for(let i = 0; i < arr.length; i++){
            let streak = 0;
           let curr = arr[i];
            while(map.has(curr)){
                streak++;
                curr++;
            }
            res = Math.max(res,streak)
        }
        return res
    }

}
