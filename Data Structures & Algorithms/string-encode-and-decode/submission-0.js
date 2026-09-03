class Solution {
    encode(strs) {
        let encoded = "";

        for (let i = 0; i < strs.length; i++) {
            encoded += strs[i].length + "#" + strs[i]; // 5 + "#" + "Hello"
        }

        return encoded;
    }

    decode(encoded) {
        const result = [];
        let i = 0;

        while (i < encoded.length) {

            // Find the separator after the length
            let j = i; // both at same position

            while (encoded[j] !== "#") {
                j++;
            }
            // now j = #
            // Extract the length
            const length = Number(encoded.slice(i, j)); // 5# so it take only 5

            // Move past '#'
            j++; // after this j move from # to first letter

            // Extract exactly `length` characters
            const str = encoded.slice(j, j + length); // like j = 2 so it run to 7 index

            result.push(str); // it get the first word in it

            // Move pointer to the beginning of next encoded string
            i = j + length;
        }

        return result;
    }
}