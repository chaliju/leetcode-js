// 20. 有效的括号

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *    1.左括号必须用相同类型的右括号闭合。
 *    2.左括号必须以正确的顺序闭合。
 * 
 输入：s = "([)]"
 输出：false
 */


/**
 * 利用栈结构：将字符串中的字符依次入栈，遍历字符依次判断
 * 如果当前字符为左半边括号时，则将其压入栈中
 * 如果遇到右半边括号时，分类讨论：
 *    1）如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环
 *    2）若此时栈为空，则直接返回 false
 *    3）若不为对应的左半边括号，反之返回 false
 */

 var isValid = function (s) {
  const stack = [];
  const map = {
      "{": "}",
      "[": "]",
      "(": ")",
  };

  for (let i in s) {
      const v = s[i];
      if (["(", "[", "{"].indexOf(v) > -1) {
          stack.push(v);
      } else {
          const peak = stack.pop();
          if (v !== map[peak]) {
              return false;
          }
      }
  }

  if (stack.length > 0) return false;

  return true;
};