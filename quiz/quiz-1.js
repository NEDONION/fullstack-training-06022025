// 题目：
// 创建一个名为 `concatenate` 的函数，接收两个字符串作为参数，
// 并返回一个由这两个字符串组合成的新字符串，中间不加空格。

// 例如：
// concatenate('foo', 'bar') 应该返回 'foobar'
// concatenate('hello', 'world') 应该返回 'helloworld'


function concatenate(str1, str2) {
    // 直接使用 + 运算符拼接两个字符串
    return str1 + str2;
}

// 测试示例
console.log(concatenate('foo', 'bar'));       // 输出: 'foobar'
console.log(concatenate('hello', 'world'));   // 输出: 'helloworld'
console.log(concatenate('good', 'job'));      // 输出: 'goodjob'
