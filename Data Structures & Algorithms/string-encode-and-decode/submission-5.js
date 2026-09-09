class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for(let i = 0; i < strs.length; i++){
            encode += strs[i].length + "#" + strs[i]
        }
        return encode
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encode) {
        let i = 0;
        let res = [];
        while(i < encode.length){
            let j = encode.indexOf("#", i)
            let num = Number(encode.substring(i,j));
            i = j+1
            let word = encode.substring(i, i + num);
            res.push(word);
            i+= num
        }
        return res
    }
}
