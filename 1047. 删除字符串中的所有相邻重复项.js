// 1047. 删除字符串中的所有相邻重复项

/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * 
 输入："abbaca"
 输出："ca"
 解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */


// 结题思路
/**
 * 利用栈：遍历字符串，依次入栈，入栈时判断与栈头元素是否一致：
 *    如果一致，即这两个元素相同相邻，则需要将栈头元素出栈，并且当前元素也无需入栈
 *    如果不一致，则将当前元素入栈
 * 遍历完成后，返回栈中字符串
 */

var removeDuplicates = function (s) {
  let stack = []

  for (let c of s) {
    let top = stack[stack.length - 1]
    if (c === top) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.join('')
};