class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length === 0) return false
        if(t.length === 0) return false
        return s.split('').sort().join('') === t.split('').sort().join('') 
    }
}
