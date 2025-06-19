// 1. 输出多少？
// 输出：7
// 因为 a 初始是 10，大于 5，于是被重新赋值为 7
function f1() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a); // 输出 7
}
f1();


// 2. 输出多少？
// 输出：5
// 使用 var 定义变量是函数作用域，即使在 if 块里定义，外面也能访问到
function f2() {
  if (true) {
    var a = 5;
  }
  console.log(a); // 输出 5
}
f2();


// 3. 输出多少？
// 输出：3
// 在函数中赋值但未声明变量 a，会自动创建为全局变量
// 注意：这种写法容易造成全局污染，不推荐
function f3() {
  a = 3; // 相当于 window.a = 3
}
f3();
console.log(a); // 输出 3（全局变量）



// 4. 输出多少？
// 输出：6
// first() 修改了全局变量 a 的值，所以 second() 打印的是修改后的值
var a = 5;
function first() {
  a = 6; // 修改全局变量 a
}

function second() {
  console.log(a); // 输出 6
}
first();
second();


// 5. 输出多少？
// 输出：7
// 函数内部定义了局部变量 var a，会屏蔽外面的全局变量 a
var a = 5;
function f5() {
  var a = 7; // 局部变量 a
  console.log(a); // 输出 7
}
f5();


// 6. 输出多少？
// 输出：1
// 函数 b 中有 function a() 的声明，这会被提升为局部变量声明，覆盖了全局 a
// 所以 b() 中的 a = 10 实际是赋值给局部变量，不影响外部的全局变量 a
var a = 1;
function b() {
  // function a() {} 会被提升，所以 a 变成了函数内部的局部变量
  a = 10; // 实际修改的是上面 function a 定义的局部变量
  return;
  function a() {} // 提升到函数顶部
}
b();
console.log(a); // 输出 1（全局变量未被修改）


// 函数 b() 里通过函数声明 function a() 创建了一个局部变量 a，所以 a = 10 实际修改的是局部变量，
// 不影响外部的 var a = 1。这就是作用域和提升的综合效果。