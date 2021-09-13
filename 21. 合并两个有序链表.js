// 21. 合并两个有序链表

/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */

// 解法一
 var mergeTwoLists = function (l1, l2) {
  if (!l1) {
      return l2
  }
  if (!l2) {
      return l1
  }
  if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  }
};


// 解法二
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(),
    curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  if (!l1) curr.next = l2
  if (!l2) curr.next = l1
  return dummy.next
};