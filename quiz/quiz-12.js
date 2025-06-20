// 题目：
// 创建一个名为 getLast 的函数，接收一个非空数组（长度不固定）
// 并返回该数组的最后一个元素。

// 示例：
// getLast([1, 2, 3]) 应返回 3
// getLast([9, 7, 5]) 应返回 5


const getLast = (arr) => arr[arr.length - 1];

// 测试用例
console.log(getLast([1, 2, 3]));       // 输出: 3
console.log(getLast([9, 7, 5]));       // 输出: 5
console.log(getLast(['apple', 'banana', 'cherry'])); // 输出: 'cherry'
