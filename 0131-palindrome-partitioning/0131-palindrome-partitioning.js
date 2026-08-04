/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = []
    let isPalindrome = (s) => {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s[l++] != s[r--]) return false
        }
        return true
    }
    let backtrack = (path, remainstr) => {
        if(!remainstr.length){
            result.push([...path])
            return
        }
        for(let i = 1; i <= remainstr.length;i++){

        let choice = remainstr.substring(0,i)
        if(!isPalindrome(choice)){
            continue;
        }
        path.push(choice);
        backtrack(path, remainstr.substring(i))
        path.pop()
        }
    }
    backtrack([], s)
    return result
};