/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(n, target) {
    let l = 0;
    let r = n.length-1;
    while(l < r){
        if(n[l] + n[r] === target){
            return [l + 1,r +1]
        }else if(n[l] + n[r] > target){
            r--
        }else{
            l++
        }
    }
};