/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    nodes = []
    count = 0
    let cur = head
    while (cur !== null) {
        nodes.push(cur)
        count++
        cur = cur.next
    }
    let reconnect = count - n - 1
    if (reconnect >= 0)
        nodes[reconnect].next = nodes[reconnect + 1].next

    if(count===n){
        head=head.next
    }
    return head

};


//test--use test case on leetcode
