/**
 * 将任意值包装成一个 Promise
 * @param {*} value - 任意类型的值
 * @returns {Promise} 一个 resolve 到该值的 Promise
 */
function promisifyValue(value) {
    return Promise.resolve(value);
}

// 示例测试（使用 async 函数）
async function test() {
    const result1 = await promisifyValue(2);
    console.log(result1); // 输出: 2

    const result2 = await promisifyValue(3).then(val => val + 1);

    promisifyValue(3)
        .then(val => val + 1)
        .then(result3 => {
            console.log(result3); // 输出: 4
        });

    console.log(result2); // 输出: 4
}

test();
