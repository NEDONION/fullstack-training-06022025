// 题目：
// 8. 创建一个名为 sum 的函数，它接受一个非空的整数数组，
// 并返回这些整数的总和。

// 示例：
// sum([1, 2, 3]) 应返回 6
// sum([0, 4, 4, 4]) 应返回 12


function sum(arr) {
    // 使用 reduce 方法累加数组中的所有数
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 测试用例
console.log(sum([1, 2, 3]));        // 输出: 6
console.log(sum([0, 4, 4, 4]));     // 输出: 12
console.log(sum([-2, 5, 1]));       // 输出: 4
console.log(sum([100]));            // 输出: 100
