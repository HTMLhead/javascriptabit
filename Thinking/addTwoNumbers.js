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
var addTwoNumbers = function(l1, l2) {
  let arr1 = [];
  let arr2 = [];
  while (l1 !== null) {
    arr1.unshift(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    arr2.unshift(l2.val);
    l2 = l2.next;
  }

  let list = String(BigInt(arr1.join("")) + BigInt(arr2.join(""))).split("");

  let list2 = new ListNode(null);
  let head = list2;
  list.reverse().forEach(v => {
    list2.next = new ListNode(v);
    list2 = list2.next;
  });
  return head.next;
};
