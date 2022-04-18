/* JS提供3个包装类，通过这3个包装类可以将基本数据类型转换为对象 
    - String():将基本数据类型转换为String对象
    - Number():将基本数据类型转换为Number对象
    - Boolean():将基本数据类型转换为Boolean对象*/
console.clear();

var num = new Number(3);
console.log(num);

var str = new String("Hello");
console.log(str);

var bool = new Boolean(true);
console.log(bool);

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

// 向num添加一个属性
num.sayHello = "hello!";
console.log(num.sayHello); //hello!





/* 但是需要注意,实际应用中一般不会使用基本数据类型的对象，
    如果使用基本数据类型的对象，可能在做一些比较的时候，带来一些不可预料的结果 */
var num2 = new Number(3);
console.log(num == num2);//false

var bool2 = new Boolean(true);
console.log(bool == bool2);//false





/* 布尔值不管是true还是false，对象转换为布尔值都是true，下列if语句都会执行，判断有问题 */
var b = new Boolean(false);
if (b) {
    console.log("我运行了~~~！");
}




/* 当我们对一些基本的数据类型的值去调用属性和方法时，
    浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法 */
var s = 123;
s = s.toString();//解析器临时将s包装为Number对象，再调用Number的toString（）方法，再转回来
console.log(s);
console.log(typeof s); //string

s.hello = "hello!";//临时将s包装成一个对象，向里边添加hello属性，添加完后销毁对象
console.log(s.hello);//undefined，包装成一个新的对象，读不出上列的hello属性