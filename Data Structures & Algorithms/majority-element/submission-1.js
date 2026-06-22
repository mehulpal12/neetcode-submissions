class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(arr) {
        let n = arr.length;
        let m = n/2;
        let map = new Map()
        for(let i = 0; i<n;i++){
            if(map.has(arr[i])){
               map.set(arr[i], map.get(arr[i]) + 1)
            }else{
                map.set(arr[i],1)
            }
            if(map.get(arr[i]) > m){
                return arr[i]
            }
        }
    }
}
