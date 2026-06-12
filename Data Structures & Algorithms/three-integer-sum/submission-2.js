class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    threeSum(arr) {
        arr.sort((a, b) => a - b);
        let ans = [];
        for(let i = 0; i < arr.length-2; i++){
            if(i === 0 || arr[i] !== arr[i-1]){
               this.twoSum(arr,i,ans)
            }
        }
        return ans;
    }

    twoSum(arr,x,ans){
        let l = x+1;
        let r = arr.length-1;
        while(l<r){
            let sum = arr[l] + arr[r] + arr[x];
            if(sum === 0){
                // FIX 1: Push as a structured nested triplet array
                ans.push([arr[x], arr[l], arr[r]]);
                l++;
                r--;
                
                // FIX 2: Check standard pointer bounds, remove the broken sum variable condition
                while(l < r && arr[l] === arr[l-1]){
                    l++;
                }
                while (l < r && arr[r] === arr[r + 1]) {
                    r--;
                }
            }else if(sum < 0){
                l++;
            }else{
                r--;
            }
        }
    }
}