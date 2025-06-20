// 题目：
// 创建一个函数 setDefault，它接受一个任意值作为参数，并返回一个新的函数。
// 当这个返回的函数被调用时：
// 1. 如果传入的是 truthy 值（如 1, "a", [], {}），则返回这个值；
// 2. 如果传入的是 falsy 值（如 0, "", null, undefined, false），则返回最初传给 setDefault 的默认值。

// 示例：
// setDefault(72)(true)         // 返回 true
// setDefault('foobar')(false)  // 返回 'foobar'
// setDefault('hello')(null)    // 返回 'hello'
// setDefault('x')(1)           // 返回 1

/**
 * 高阶函数：根据传入参数返回默认值函数
 * @param {*} value - 默认值
 * @returns {function} - 一个带参数 x 的函数，根据 x 是否为 truthy 返回不同值
 */
function setDefault(value) {
    return function (x) {
        // 如果 x 是 truthy，则返回 x，否则返回默认值
        return x ? x : value;
    };
}

// 测试用例：
console.log(setDefault(72)(true));         // 输出: true
console.log(setDefault('foobar')(false));  // 输出: 'foobar'
console.log(setDefault('hello')(null));    // 输出: 'hello'
console.log(setDefault('x')(1));           // 输出: 1
console.log(setDefault('default')(0));     // 输出: 'default'
console.log(setDefault('default')(''));    // 输出: 'default'
console.log(setDefault('default')([]));    // 输出: []（空数组是 truthy）
console.log(setDefault('default')({}));    // 输出: {}（空对象是 truthy）
