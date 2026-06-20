class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(str) {
        let map = new Map();
        for(let i = 0; i < str.length; i++){
           let sorted = str[i].split('').sort().join('');
           if(map[sorted] === undefined){
            map[sorted] = []
           }
            map[sorted].push(str[i])
        }
        return Object.values(map)
    }
}
