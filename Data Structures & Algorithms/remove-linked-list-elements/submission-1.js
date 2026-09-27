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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        if (!head) {
            return null;
        }
        head.next = this.removeElements(head.next, val);
        if (head.val === val) {
            head = head.next;
        }
        return head;
    }
}
