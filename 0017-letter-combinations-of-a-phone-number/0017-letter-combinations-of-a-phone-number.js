/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(arr) {
    if(!arr.length) return []
    let letter = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    let result = [];
    let backtrack = (path,index) =>{
        if(index === arr.length){
            result.push(path.join(""))
            return
        }
        let choice = letter[arr[index]]; // this will give 2 from arr arr[0] for the 2 is map with "abc"
        for(let i = 0 ; i < choice.length; i++){
            path.push(choice[i])
            backtrack(path, index+1)
            path.pop()
        }
    }
    backtrack([],0)
    return result
};