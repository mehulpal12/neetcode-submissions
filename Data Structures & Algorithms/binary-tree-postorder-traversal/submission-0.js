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
    postorderTraversal(root) {
        let ans = [];
        function traversal(curr){
            if(!curr) return ans;
            traversal(curr.left);
            traversal(curr.right);
            ans.push(curr.val);
        }
        traversal(root);
        return ans;
    }
}
