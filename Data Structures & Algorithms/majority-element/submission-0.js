class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};
        let mostNums = nums.length / 2;
        for(let i =0; i< nums.length; i++){
            let num = nums[i];
            if(map[num] === undefined){
                map[num] = 1;
            }else{
                map[num]++
            }
        if(map[num] > mostNums){
            return num
        }
        }
    }
}
