/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x;
    let rev = 0;
    while(n > 0){
        let last = n % 10;
        rev = (10*rev) + last
        n = Math.floor(n / 10);
    }
    return rev === x
};