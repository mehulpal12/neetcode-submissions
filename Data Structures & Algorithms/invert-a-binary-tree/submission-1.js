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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null
        let q = [root];
        let curr = [];
        while(q.length){
            curr = q.shift();
                let temp = curr.left;
                curr.left = curr.right;
                curr.right = temp;
               curr.left && q.push(curr.left);
                curr.right && q.push(curr.right);
            
        }
        return root
    }
}
