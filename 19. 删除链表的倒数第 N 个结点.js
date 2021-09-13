// 19. 删除链表的倒数第 N 个结点
/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 */


/**
 * 这里我们可以使用双指针算法，不妨设为指针 A 和 指针 B。指针 A 先移动 n 次， 指针 B 再开始移动。当 A 到达 null 的时候， 指针 B 的位置正好是倒数第 n。这个时候将 B 的指针指向 B 的下下个指针即可完成删除工作。
 * 
 * 算法：
 * 设置虚拟节点 dummy 指向 head（简化判断，使得头结点不需要特殊判断）
 * 设定双指针 p 和 q，初始都指向虚拟节点 dummyHead
 * 移动 q，直到 p 与 q 之间相隔的元素个数为 n
 * 同时移动 p 与 q，直到 q 指向的为 NULL
 * 将 p 的下一个节点指向下下个节点
 */

var removeNthFromEnd = function (head, n) {
  // 哨兵节点
  let dummy = new ListNode();
  dummy.next = head
  // 快慢指针
  let fast = dummy,
    slow = dummy;
  // 快指针先走n步
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }
  // 快指针走到最后，当前slow为倒数第n+1个节点
  while (fast !== null && slow !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.mext.next
  return dummy.next;
};