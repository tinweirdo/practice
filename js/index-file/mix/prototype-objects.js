// 将sayName方法在全局作用域中定义
/* 
但是将函数定义在全局作用域，会污染全局作用域的命名空间，而且定义在全局作用域中也很不安全
*/
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

/* 
原型prototype
*/

/* 
解析器都会向创建的每一个函数中添加一个属性prototype
这个属性对应着一个对象，这个对象就是所谓的原型对象
*/

function DogClass(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = DogClass.prototype.fun;
}
//向DogClass的原型中添加一个方法
DogClass.prototype.fun = function sayHello() {
    console.log("I call my dog " + this.name);
}

var dog1 = new DogClass("Emma", 3);
var dog2 = new DogClass("Baby", 5);

dog1.sayHello();
/* 
如果函数作为普通函数调用prototype没有任何作用
当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，
指向该构造函数的原型对象，我们可以使用__proto__来访问该属性 */
console.log(dog1.__proto__ == DogClass.prototype); //true
console.log(dog2.__proto__ == DogClass.prototype); //true
/* 
原型对象就相当于一个公共区域，所有同一个类的实例都可以访问到这个原型对象，
我们可以将对象中共有的内容，统一设置到原型对象中 */

/* 
访问对象中的一个属性或者方法时，它会先在对象自身中寻找，如果有则直接使用，
如果没有则会去原型对象中寻找，如果找到则直接使用
*/
