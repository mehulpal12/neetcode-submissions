class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map = new Map();
        for(let i = 0; i < t.length; i++){
            if(map.has(t[i])){
                map.set(t[i], (map.get(t[i])) + 1)
            }else{
                map.set(t[i],1)
            }
        }
        let l = 0;
        let r = 0;
         let minWindow = ''
        let len = Infinity
        let count  = map.size;
        while(r < s.length){
            let rLetter = s[r];
            if(map.has(rLetter)){
                map.set(rLetter, map.get(rLetter)-1)
                if(map.get(rLetter) === 0) count --;
            }
            r++
            while(count === 0){
                if(r - l < len){
                    len = r - l;
                    minWindow = s.slice(l,r)
                }
                let lLetter = s[l];
                if(map.has(lLetter)){
                map.set(lLetter, map.get(lLetter)+1)
                if(map.get(lLetter) > 0) count++;
            }
            l++
            }

            
        }
        return minWindow
    }
}
