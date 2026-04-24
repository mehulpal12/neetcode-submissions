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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let sentinal = new ListNode();
        sentinal.next = head;
        let length = 0;

        while (head) {
            head = head.next;
            length++;
        }
        let prevpos = length - n;
        let prev = sentinal;
        for(let i = 0; i < prevpos; i++){
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return sentinal.next;
    }
}
