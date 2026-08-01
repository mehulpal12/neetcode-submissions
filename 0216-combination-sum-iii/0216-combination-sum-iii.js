/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    let backtrack = (remainSum, path, start) =>{
        if(remainSum === 0 && path.length === k){
            result.push([...path])
        }
        if(remainSum <= 0) return

        for(let i = start; i <= 9; i++){

            path.push(i);
            backtrack(remainSum-i, path, i+1)
            path.pop()
        }
    }
    backtrack(n,[],1)
    return result
};