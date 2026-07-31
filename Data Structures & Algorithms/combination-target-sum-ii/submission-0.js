class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(arr, target) {
        arr.sort((a,b) => (a-b))
         let result = [];

        let backtrack = (remainSum,path,start) =>{
            if(remainSum === 0){
                result.push([...path])
            }
            if(remainSum <= 0) return
            for(let i = start; i< arr.length; i++){
                if(i > start && arr[i-1] === arr[i]){
                    continue
                }else{
                path.push(arr[i])
                backtrack(remainSum-arr[i], path,i+1)
                path.pop()
                }
            }
        }
        backtrack(target,[],0)
        return result
    }
}
