class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(arr) {
       let l = 0;
    let set = new Set();
    let res = 0;
    for(let r = 0; r < arr.length; r++){
        while(set.has(arr[r])){
            set.delete(arr[l])
            l++
        }
        set.add(arr[r])
    res = Math.max(res, r-l+1)
    }
    return res
    }
    // O(n*m)
}
