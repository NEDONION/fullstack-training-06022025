// 创建一个对象 person，包含 name 和 age 两个属性
const person = { name: "John", age: 24 };

function changeName(person) {
    person.name = "Alex"; // 修改对象的 name 属性
}

// 调用函数，传入原始 person 对象
// 注意：在 JavaScript 中，对象是引用类型，传递对象时传递的是引用
changeName(person);

// 打印修改后的 name 属性
console.log(person.name); // 输出: "Alex"
