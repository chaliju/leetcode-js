// 15. 三数之和

/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */

var threeSum = function (nums) {
  let set = new Set() // 使用 Set() 即可满足需求, 相对节省内存
  let result = []
  nums.sort((a, b) => (a - b))

  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) {
      i++
    } // 去重
    // 第一个数
    let first = nums[i]
    let j = i + 1
    while (j < nums.length) {
      // 第三个数
      let second = 0 - nums[j] - first
      let third = nums[j]

      if (set.has(second)) {
        result.push([first, second, third])

        set.add(third)
        j++

        while (nums[j] === nums[j - 1]) {
          j++
        } // 去重
      } else {
        set.add(third)
        j++
      }
    }
    set = new Set()
  }
  return result
};