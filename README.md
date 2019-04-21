####2. Add Two Numbers

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let head
    let current
    let digit
    let carry = 0

    while (l1 || l2) {
        digit = 0
        if (l1) {
            digit = digit + l1.val
            l1 = l1.next
        }
        if (l2) {
            digit = digit + l2.val
            l2 = l2.next
        }
        digit = digit + carry
        carry = digit >= 10 ? 1 : 0
        digit = digit % 10

        if (head == null) {
            head = new ListNode(digit)
            current = head
        } else {
            current.next = new ListNode(digit)
            current = current.next
        }

    }

    if (carry > 0) {
        current.next = new ListNode(carry)
    }

    return head

};
```

