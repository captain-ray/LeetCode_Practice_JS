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


//structure
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//-----main code-----
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
//-----main code-----




//test 
function generateData(l1_arr) {

    let head_l1 = new ListNode(l1_arr[0])
    let current_l1 = head_l1
    for (let i = 1; i < l1_arr.length; i++) {
        current_l1.next = new ListNode(l1_arr[i])
        current_l1 = current_l1.next
    }
    return head_l1
}



let l1_arr = [2, 4, 3]
let l2_arr = [5, 6, 4]

let l1 = generateData(l1_arr)
let l2 = generateData(l2_arr)

// console.log(l1)
// console.log(l2)

let head = addTwoNumbers(generateData([5]), generateData([5]))
console.log(head)