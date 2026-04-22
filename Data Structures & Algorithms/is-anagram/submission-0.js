class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length){
        return false;
     }

     let sCopy = s.split('').sort().join();
     let tCopy = t.split('').sort().join();

     return sCopy == tCopy;
    }
}
