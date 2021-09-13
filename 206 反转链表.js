// 206 反转链表
/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
  let curr = head // 当前节点
  let prev = null  // 当前节点的前一个节点
  // 一次循环是把当前的节点的next指向prev 周而复始
  // 千万不要想着 一次循环是两个节点位置的互换
  while (curr) {
      let nextTemp = curr.next // 保留剩余未反转的链表
      curr.next = prev // 当前节点的next指向prev
      prev = curr // 做完上面一步后 把当前的节点设置为prev，供下次迭代作为prev使用
      curr = nextTemp // 将当前指针指向剩余未反转的链表
  }
  return prev
};