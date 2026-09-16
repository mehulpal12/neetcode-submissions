/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
    let count = 0
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 1){
            count = 0;
        }else{
            count++;
            if(count > max){
                max = count
            }
        }
    }
    return max
    
};