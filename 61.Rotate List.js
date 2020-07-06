/* Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL 

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) return null;
    if (head.next === null) return head;

    let sizeOfList = 0;
    let node = head;
    while (node) {
        sizeOfList += 1;
        node = node.next;
    }

    if (k % sizeOfList === 0) return head;

    let startPos = sizeOfList - k % sizeOfList;
    let count = 0;
    node = head;
    while (count < startPos - 1) {
        node = node.next;
        count = count + 1;
    }

    let startNode = node.next;

    node.next = null;

    let node2 = startNode;
    while (node2) {
        if (node2.next === null) {
            node2.next = head;
            break;
        } else {
            node2 = node2.next;
        }
    }

    return startNode;




};
