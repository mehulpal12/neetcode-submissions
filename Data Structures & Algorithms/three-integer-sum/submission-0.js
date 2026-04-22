class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let ans = []
        for(let i = 0; i < nums.length; i++){
           if(i>0 && nums[i] === nums[i-1]) continue;
           this.twoSum(nums,ans,i)
        }
        return ans;
    }

    twoSum(arr,ans,x){
        let l = x+1;
        let r = arr.length-1;
        while(l < r){
            let sum = arr[l] + arr[r]  + arr[x];
            if(sum === 0){
                ans.push([arr[l],arr[r],arr[x]])

                while(l<r && arr[l] === arr[l+1]) l++;
                while(l<r && arr[r] === arr[r-1]) r--;

                l++;
                r--;
            }else if(sum < 0){
                l++
            }else{
                r--
            }
        }
    }
}
