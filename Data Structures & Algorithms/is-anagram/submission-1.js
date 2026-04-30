class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
       let ansS = s.split('').sort().join('');
        let ansT = t.split('').sort().join('');
       return ansS === ansT
    }
}
