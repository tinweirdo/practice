console.clear();
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
// 创建Person实例
var per = new Person("pig", 22, "boy");
var per2 = new Person("monkey", 24, "girl");

/* 当我们直接在页面打印一个对象时，实际上是输出对象的toString()方法的返回值 */
console.log(per); //Person { name: 'pig', age: 22, gender: 'boy' }
console.log('' + per); //[object Object]
console.log(per.toString()); //[object Object]

console.log(per.hasOwnProperty("toString"));//false
console.log(per.__proto__.hasOwnProperty("toString"));//false
console.log(per.__proto__.__proto__.hasOwnProperty("toString"));//true

/* 修改对象的toString（）方法 */
// 直接修改，但每个实例是独立的，应用比较局限
per.toString = function () {
    return "I am " + this.name + ". I am " + this.age + ". I am " + this.gender
}
console.log('' + per); //I am pig. I am 22. I am boy
console.log('' + per2); //[object Object]

// 修改原型的toString()方法
Person.prototype.toString = function () {
    return "I am " + this.name + ". I am " + this.age + ". I am " + this.gender
}
console.log('' + per); //I am pig. I am 22. I am boy
console.log('' + per2); //I am monkey. I am 24. I am girl


