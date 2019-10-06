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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    list = list.next;
  }

  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  return head.next;
};
