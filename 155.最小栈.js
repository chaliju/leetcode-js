// 155. 最小栈

/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 
 输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */


// 在常数时间内检索到最小元素的栈，即仅需保证 getMin 的时间复杂度为 O(1) 即可
var MinStack = function () {
  this.items = []
  this.min = null
};

/** 
 * @param {number} val
 * @return {void}
 */
// 进栈
MinStack.prototype.push = function (val) {
  if (!this.items.length) this.min = val
  this.min = Math.min(val, this.min)
  this.items.push(val)
};

/**
 * @return {void}
 */
// 出栈
MinStack.prototype.pop = function () {
  let num = this.items.pop()
  this.min = Math.min(...this.items)
  return num
};

/**
 * @return {number}
 */
// 获取栈顶元素
MinStack.prototype.top = function () {
  if (!this.items.length) return null
  return this.items[this.items.length - 1]
};

/**
 * @return {number}
 */
// 检索栈中的最小元素
MinStack.prototype.getMin = function () {
  return this.min
};