class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(arr) {
        let stack = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === "+" || arr[i] === "*" || arr[i] === "-" || arr[i] === "/" ){
                let a = stack.pop();
                let b = stack.pop();
                let val = eval(`${b} ${arr[i]} ${a}`)
                stack.push(Math.trunc(val))
            }else{
                stack.push(arr[i])
            }
        }
        return Number(stack.pop())
    }
}
