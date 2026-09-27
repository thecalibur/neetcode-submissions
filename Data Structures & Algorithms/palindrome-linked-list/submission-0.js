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
    isPalindrome(head) {
        let curr = head;

        const rec = (node) => {
            if (node !== null) {
                if (!rec(node.next)) {
                    return false;
                }
                if (node.val !== curr.val) {
                    return false;
                }
                curr = curr.next;
            }
            return true;
        };

        return rec(head);
    }
}
