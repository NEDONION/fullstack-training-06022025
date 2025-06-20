/**
 * 接收任意多个函数作为参数，返回一个组合函数，按顺序执行
 * @param  {...Function} fns 任意多个单参数函数
 * @returns {Function} 组合后的函数
 */
function compose(...fns) {
    return function (input) {
        return fns.reduce((acc, fn) => fn(acc), input);
    };
}

// 示例函数
const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

// 测试
console.log(compose(addOne, multiplyByTwo)(3)); // 输出: 8
