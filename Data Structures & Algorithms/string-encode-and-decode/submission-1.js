class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let i = 0; i < strs.length; i++){
            encoded += strs[i].length + "#" + strs[i]
        }

        return encoded // this return 5#hello5#world
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encoded) {

        let res = [];
        let i = 0;
        while(i < encoded.length){
            let j = i;
            while(encoded[j] !== "#"){
                j++
            }
                let length = Number(encoded.slice(i,j))
                j++; // move j one time because i know the next is #
                let str = encoded.slice(j,j+length)
                res.push(str);
                i = j + length
        }
        return res
    }
}
