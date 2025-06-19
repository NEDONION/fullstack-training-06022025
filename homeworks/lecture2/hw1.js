/*
* 复制对象 p 的所有可枚举属性到对象 o 中，并返回 o。
* 如果 o 和 p 有同名属性，则 o 的属性会被覆盖。
* 这个函数不处理 getter/setter，也不复制属性的特性（如 writable, configurable 等）。
*/
function extend(o, p) {
    for (let prop in p) {
        o[prop] = p[prop]; // 将 p 中的每个属性复制到 o
    }
    return o;
}

/*
* 返回一个新对象，这个对象包含 o 和 p 的所有属性。
* 如果 o 和 p 有同名属性，使用 o 中的值。
*/
function union(o, p) {
    let result = {}; // 创建一个新对象
    extend(result, p); // 先复制 p 的属性
    extend(result, o); // 再复制 o 的属性（o 的值会覆盖 p 的同名属性）
    return result;
}

/*
* 从对象 o 中删除那些在对象 p 中不存在的属性。
* 返回 o。
*/
function restrict(o, p) {
    for (let prop in o) {
        if (!(prop in p)) {
            delete o[prop]; // 删除 o 中 p 不包含的属性
        }
    }
    return o;
}

/*
* 返回一个新对象，它只包含那些同时在 o 和 p 中出现的属性。
* 使用 o 的值，忽略 p 的值。
*/
function intersection(o, p) {
    let result = {};
    for (let prop in o) {
        if (prop in p) {
            result[prop] = o[prop]; // 如果属性在 p 中也存在，则复制 o 的值
        }
    }
    return result;
}


let a = {x: 1, y: 2, z: 3};
let b = {y: 10, z: 20, w: 30};

console.log(extend({}, a));            // {x:1, y:2, z:3}
console.log(union(a, b));              // {y:2, z:3, w:30, x:1}
console.log(restrict({...a}, b));      // {y:2, z:3}  （x 被删了）
console.log(intersection(a, b));       // {y:2, z:3}


// 什么是 {...a}
// ...a 把 a 的所有属性复制出来；
// { ...a } 创建一个和 a 内容相同的新对象；
// restrict(...) 接收这个新对象当作参数，这样不会修改原始对象 a 的内容。