/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let arr = clean.split('');
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    let reverse = arr.join('');
    return reverse === clean
};