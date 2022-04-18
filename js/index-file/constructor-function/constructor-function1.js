/* 
创建一个构造函数，专门用来创建Person对象
- 构造函数的创建方式和普通函数没有区别，不同的是构造函数名称习惯上首字母大写
*/

/* 
构造函数和普通函数的区别就是调用方式的不同
- 普通函数：直接调用；构造函数：关键字new来调用
*/

/* 
构造函数的执行流程
    1.立刻创建一个新的对象；
    2.将新建的对象设置为函数中的this，在构造函数中可以使用this来引用新建的对象
    3.逐行执行函数中的代码
    4.将新建的对象作为返回值返回
*/

/* 
使用同一个构造函数创建对象，我们称为一类对象，也将一个构造函数称为一个类
而通过构造函数创建的对象，我们称为是该类的实例
*/

/* 
this的情况：
    1.以函数的形式调用，this就是window
    2.以方法的形式调用，谁调用this就是谁
    3.以构造函数的形式调用，this就是新创建的对象
*/

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        console.log(this.name);
    }
}

function Dog(name, age) {
    this.name = name;
    this.age = age;
}


var per1 = new Person("guaizai", 23, "boy");
var per2 = new Person("tingting", 18, "girl");
// console.log(per1);
// console.log(per2);

per1.sayName(); //guaizai

/* 
instanceof判断一个对象是否是一个类的实例
语法：
    对象 instanceof 构造函数
*/
console.log(per1 instanceof Person); //true
console.log(per2 instanceof Dog); //false

console.log(per1.sayName == per2.sayName); //false
/* 
创建的Person构造函数中，在内部为每一个对象都添加了一个sayName的方法，也就是构造函数每执行一次就会创建一个新的方法
这就导致构造函数执行一次就会创建一个新的方法
- 所以per1.sayName !== per2.sayName

这是完全没有必要，因此可以在全局定义一个方法，使所有对象共享同一个方法
*/

// 将sayName方法在全局作用域中定义
var fun = function () {
    console.log("Hello, I am " + this.name + ".");
}

function PersonOptimize(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = fun;
}

var per3 = new PersonOptimize("xiaoming", 18, "boy");
var per4 = new PersonOptimize("xiaohong", 18, "girl");
per3.sayName();
console.log(per3.sayName == per4.sayName);

