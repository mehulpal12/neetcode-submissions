class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {

        // 1. Create sorted key from strs[i]
        let key = strs[i].split('').sort().join('');

        // 2. If key doesn't exist
        if (!map.has(key)) {
            map.set(key,[strs[i]])
        } 
        // 3. Otherwise add strs[i] to existing group
        else {
            map.get(key).push(strs[i])
        }
    }

    // 4. Return all groups
    return [...map.values()]
}
}
