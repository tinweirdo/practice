console.clear();

function fun() {
    console.log("我是fun函数！");
}

/* call()和apply()
    - 这两个方法都是函数对象的方法，需要通过函数对象来调用 */

// 当对函数调用call()和apply()都会调用函数执行，以下方式输出一致
fun.call(); //我是fun函数！
fun.apply();
fun();

/* 调用call()和apply()可以将一个对象指定为第一个参数 
    此时函数执行的this会指向这个对象*/
var obj = {
    name: "pig",
    age: 16
}
function fun2(a, b) {
    console.log(this.name);
    console.log("a : " + a);
    console.log("b : " + b);
}
fun2.call(obj);//pig
fun2.call(obj, 1, 2);//call()可以将实参在对象之后依次传递
fun2.apply(obj, [1, 2]);//apply()可以将实参在对象之后依次传递,实参必须以[]的形式传递，将实参封装到一个数组中统一传递

/* 
this的情况：
    1.以函数的形式调用，this就是window
    2.以方法的形式调用，谁调用this就是谁
    3.以构造函数的形式调用，this就是新创建的对象
    4.使用call、apply调用时，this是指定的那个对象
*/

