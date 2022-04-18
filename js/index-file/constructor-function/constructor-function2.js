/* 
create a constructor function */

function MyClass() {

}
// add "name" property to "MyClass" prototype
MyClass.prototype.name = "I am prototype's name.";
// create an instance of MyClass
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("name" in mc); //true

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
// 使用该方法只有当对象自身含有该属性时，才会返回true
console.log(mc.hasOwnProperty("name")); //false
console.log(mc.hasOwnProperty("age")); //true

/* 注意，对象hasOwnProperty的属性是在原型中的，不是自身具有的 */
console.log(mc.hasOwnProperty("hasOwnProperty")); //false

/* 
但经过测试，mc的原型里也没有hasOwnProperty
*/
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty")); //false
// hasOwnProperty在mc原型的原型
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty")); //true

/* 
原型对象也是对象，所以它也有原型
当我们使用一个对象的属性或方法时，会先在自身中寻找
    自身中如果有，则直接使用
    如果没有则去原型中寻找，如果原型对象中有，则使用
    如果没有则去原型的原型中寻找，直到找到Object对象的原型
    Objects对象的原型没有原型，如果Object中依然没有，则返回undefined */
// 一般只有两三层
console.log(mc.__proto__.__proto__.__proto__); //null


