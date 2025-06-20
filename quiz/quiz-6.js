/**
 * 将十六进制字符串转换为十进制整数
 * @param {string} hexStr - 表示十六进制数的字符串
 * @returns {number} 十进制整数
 */
function convertHexadecimal(hexStr) {
    return parseInt(hexStr, 16); // 使用 parseInt 指定进制为 16
}

// 测试用例
console.log(convertHexadecimal('10')); // 输出: 16
console.log(convertHexadecimal('af')); // 输出: 175
console.log(convertHexadecimal('FF')); // 输出: 255
console.log(convertHexadecimal('0'));  // 输出: 0
