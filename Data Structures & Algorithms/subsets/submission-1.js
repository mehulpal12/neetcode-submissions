class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let result = [];
        let backtracking = (path, start) =>{
            result.push([...path])
            for(let i = start; i < nums.length; i++){
                path.push(nums[i]);
                backtracking(path,i+1);
                path.pop()
            }
        }
        backtracking([],0)
        return result
    }
}
