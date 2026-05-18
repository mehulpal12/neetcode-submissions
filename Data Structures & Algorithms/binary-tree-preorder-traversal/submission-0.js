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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let ans = [];
        function traversal(curr){
            if(!curr) return ans
            ans.push(curr.val);
            traversal(curr.left);
            traversal(curr.right);
        }
        traversal(root)
        return ans
    }
}
