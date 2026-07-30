/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    let result = [];

    let backtrack = (remainSum,path,start) =>{
        if(remainSum === 0){
            result.push([...path])
        }
        if ( remainSum <= 0) return

        for(let i = start; i< arr.length; i++){
            path.push(arr[i])
            backtrack(remainSum-arr[i],path,i)
            path.pop()
        }
    }
    backtrack(target,[],0)
    return result
};