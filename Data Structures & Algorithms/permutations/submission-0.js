class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(arr) {
        let result = [];
        let backtrack = (path, start) => {
            if (path.length === arr.length) {
                result.push([...path]);
            }
            for (let i = 0; i < arr.length; i++) {
                if (!path.includes(arr[i])) {
                    path.push(arr[i]);
                    backtrack(path, i + 1);
                    path.pop();
                }
            }
        };
        backtrack([]);
        return result;
    }
}
