class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(arr) {
        arr.sort((a,b) => (a-b))
        let result = [];
        let backtrack = (path,start) =>{
            result.push([...path])
            for(let i = start; i < arr.length; i++){
                if(i > start && arr[i-1] === arr[i]){
                    continue
                }
                path.push(arr[i])
                backtrack(path,i+1)
                path.pop()
            }
        }
        backtrack([],0)
        return result
    }
}
