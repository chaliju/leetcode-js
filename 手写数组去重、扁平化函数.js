// 数组扁平化

/**
 MDN：flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

 const test = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

// 不传参数时，默认扁平化一层
test.flat()
// ["a", "b", "c", "d", ["e", ["f"]], "g"]

// 传入一个整数参数，整数即扁平化的层数
test.flat(2)
// ["a", "b", "c", "d", "e", ["f"], "g"]

// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
test.flat(Infinity)
// ["a", "b", "c", "d", "e", "f", "g"]

// 传入 <=0 的整数将返回原数组，不扁平化
test.flat(0)
test.flat(-10)
// ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

// 如果原数组有空位，flat()方法会跳过空位。
["a", "b", "c", "d",,].flat()
// ["a", "b", "c", "d"]
 */

/** 方法一：使用reduce方法 */
// 一次性扁平化所有
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// accumulator:累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）
// currentValue:数组中正在处理的元素
function flattenDeep(arr) {
  return Array.isArray(arr) ? arr.reduce((acc, cur) => [...acc, ...flattenDeep(cur)], []) : [arr]
}

// 测试
var test = ["a", ["b", "c"],
  ["d", ["e", ["f"]], "g"]
]
flattenDeep(test)
// ["a", "b", "c", "d", "e", "f", "g"]


// 实现flat函数：
function flat(arr, depth = 1) {
  return depth > 0 ? arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flat(cur, depth - 1)]
    }
    return [...acc, cur]
  }, []) : arr
}

/** 方法二：栈——一次性降维所有 */
function flattenDeep(arr) {
  const result = []
  //将数组元素拷贝至栈，直接赋值会改变原数组
  const stack = [...arr]
  // 如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      // 如果是数组再次入栈，并且展开了一层
      stack.push(...val)
    } else {
      // 如果不是数组，就用头插法插入到结果数组中
      result.unshift(val)
    }
  }
  return result
}


// ------------------------------------------------------
// 数组去重
/** 方法一：Set(ES6) */
function unique(arr) {
  return Array.from(new Set(arr))
}

// 或者
var unique = arr => [...new Set(arr)]

// 测试
var arr = [1, 2, 2, 3]
unique(arr); // [1, 2, 3]

/** 方法二：reduce */
function unique(arr) {
  return arr.sort().reduce((acc, cur) => {
    if (acc.length === 0 || acc[acc.length - 1] !== cur) {
      acc.push(cur)
    }
    return acc
  }, [])
}

// 测试
var arr = [1, 2, 2, 3]
unique(arr); // [1,2,3]

/** 方法三：filter */
function unique(arr) {
  return arr.filter((element, index, array) => {
    return array.indexOf(element) === index
  })
}

// 测试
var arr = [1, 2, 2, 3]
unique(arr) //[1,2,3]