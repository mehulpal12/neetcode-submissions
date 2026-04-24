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
    mergeTwoLists(l1, l2) {
        let start = new ListNode(); // Dummy node
        let curr = start; // Our "tail" pointer

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1; // STEP 1: Link the tail to the smaller node
                l1 = l1.next;   // STEP 2: Move the l1 pointer forward
            } else {
                curr.next = l2; // STEP 1: Link the tail to the smaller node
                l2 = l2.next;   // STEP 2: Move the l2 pointer forward
            }
            curr = curr.next;   // STEP 3: Move our "tail" pointer forward
        }

        // Attach the remaining nodes from whichever list isn't empty
        curr.next = l1 || l2;

        return start.next; // The real head starts after the dummy
    }
}