// 141. 环形链表

/**
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 */


// 解法一：利用数组判断
// 初始化一个空数组，用于存放节点。遍历链表，如果当前节点已经在数组中，则该链表为环形链表。否则把节点存入数组。 
const hasCycle = function(head) {
  const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;
};


// 解法二：标志法
// 众所周知，Javascript 里面，你定义的任何数据结构，其类型都是object 这意味着，你可以给一个对象设定任何的属性
// 给每个已遍历过的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表有环
var hasCycle = function(head) {
  while(head) {
      if(head.flag) return true
      head.flag = true
      head = head.next
  }
  return false
};
