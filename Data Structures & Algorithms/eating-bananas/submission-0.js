class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles)
        let res = r;
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);
            let maxTime = 0;
            for(let i =0; i< piles.length;i++){
                maxTime += Math.ceil(piles[i]/m)
            }
            if(maxTime <= h){
                res = m
                r = m-1
            }else{
                l = m+1
            }
        }
        return res
    }
}
