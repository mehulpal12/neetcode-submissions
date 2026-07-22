/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n;
        while( l < r){
            let m = Math.floor(l+(r-l)/2);
            if(!isBadVersion(m)){ // agar ye bad verison nahi h to ise aage dekho
                l = m+1
            }else{ // agar hai to middle ko bhi include kro kyuki hame nahi pta ki middle bad hai ya nahi
                r=m
            }
        }
        return r
    };
};