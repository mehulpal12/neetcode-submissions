class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(num, target) {
        let start = 0;
        let end = num.length-1;
        while(start < end){
            if(num[start] + num[end] === target){
                return [start+1,end+1]
            } else if (num[start] + num[end] > target){
                end--
            }else{
                start++
            }
        }
    }
}
