/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let ans = true;
        function calculate(curr){
            if(!curr) return [];
            let left = calculate(curr.left);
            let right = calculate(curr.right);
            if(Math.abs(left-right) > 1){
                ans = ans && false;
            }
                return 1 + Math.max(left,right)
        }
        calculate(root);
        return ans;
    }
}
