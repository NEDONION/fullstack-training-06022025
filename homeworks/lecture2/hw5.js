// Hoisting

// 1.
// 输出：undefined, 5, 5
var x;

if (x !== 3) {
  console.log(y);     // y 提升了但未赋值，输出 undefined
  var y = 5;
  if (y === 5) {
    var x = 3;        // 给 x 重新赋值为 3
  }
  console.log(y);     // y = 5，输出 5
}
if (x === 3) {
  console.log(y);     // x === 3，输出 y（5）
}


// 2.
// 输出：2, 2
var x = 3;
if (x === 3) {
  var x = 2;          // 重新给全局 x 赋值为 2
  console.log(x);     // 输出 2
}
console.log(x);       // 同一个 x，输出 2
