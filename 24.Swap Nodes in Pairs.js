/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    //dummy node
    dummy = new ListNode(0)
    dummy.next = head

    current = dummy
    while (current.next && current.next.next) {
        temp1 = current.next
        temp2 = current.next.next

        current.next.next = current.next.next.next
        current.next = temp2
        current.next.next = temp1

        //current move to next 2 pos
        current = current.next.next
    }

    return dummy.next

};