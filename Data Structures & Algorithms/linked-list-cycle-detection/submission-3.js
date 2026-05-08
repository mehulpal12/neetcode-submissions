/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head
        let list = new Set()
        while(curr){
            if(list.has(curr)){
                return true
            }else{
                list.add(curr)
                curr = curr.next
            }
        }
        return false
    }
}
