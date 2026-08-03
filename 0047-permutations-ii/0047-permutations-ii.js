/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (arr) {
    arr.sort((a, b) => a - b)
    let result = [];
    let backtrack = (path, choices) => {
        if (path.length === arr.length) {
            result.push([...path])
        }

        for (let i = 0; i < choices.length; i++) {
            if (i > 0 && choices[i - 1] === choices[i]) {
                continue
            } else {
                path.push(choices[i])
                backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
                path.pop()
            }
        }

    }
    backtrack([], arr)
    return result
};