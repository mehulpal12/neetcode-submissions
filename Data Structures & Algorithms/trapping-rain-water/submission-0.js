class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        if(arr.length <= 2) return 0
        let maxL = [];
        maxL[0] = arr[0];
        for(let i = 1; i <arr.length;i++){
            maxL[i] = Math.max(maxL[i-1], arr[i])
        }

        let maxR = [];
        maxR[arr.length-1] = arr[arr.length-1];
        for(let i = arr.length-2; i >=0;i--){
            maxR[i] = Math.max(maxR[i+1], arr[i])
        }
         let ans = 0;
        for(let i = 0; i < arr.length; i++){
         let area = Math.max(0, Math.min(maxL[i],maxR[i]) - arr[i]);
         ans +=area

        }
        return ans


    }
}
