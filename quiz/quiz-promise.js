// 宏任务队列：空
// 微任务队列：添加了 promise1 的 then

Promise.resolve().then(() => {
    console.log('promise1'); // ✅ 微任务1：执行时输出 'promise1'

    // 注册一个宏任务：timer2
    setTimeout(() => {
        console.log('timer2'); // ✅ 宏任务2：最后执行
    }, 0);
});

// 注册一个宏任务：timer1
setTimeout(() => {
    console.log('timer1'); // ✅ 宏任务1：先于 timer2 执行

    // 宏任务内部添加一个微任务：promise2
    Promise.resolve().then(() => {
        console.log('promise2'); // ✅ 微任务2：在 timer1 后立刻执行
    });
}, 0);

// 同步代码立即执行
console.log('start'); // ✅ 首先输出：start


/**
 *
 * start         // 同步代码
 * promise1      // 微任务（主线程执行完后立即跑）
 * timer1        // 宏任务1
 * promise2      // timer1 内部注册的微任务
 * timer2        // 宏任务2，最晚执行
 *
 *
 * 结论：
 * 这题考察的是 JS 的事件循环（Event Loop）顺序：
 *
 * 同步代码 → 微任务（Promise.then）→ 宏任务（setTimeout）
 *
 * 额外规则：
 * 每个宏任务执行完后，会立即执行它产生的微任务，再进入下一个宏任务。
 */