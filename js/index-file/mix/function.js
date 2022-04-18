console.clear();
console.log('\n\n\n');


// 函数function    
//     - 函数也是一个对象，函数中可以封装一些功能。
//     - 函数中可以保存一些代码在需要的时候调用。


// 创建函数对象
// 将封装的代码以字符串的形式传递给构造函数
/* var fun = new Function("console.log('Hello,this is my first function');");
fun(); */

// 封装到函数中的代码不会立即执行
// 只有在函数被调用的时候才会被执行
// 当调用函数时，函数中封装的代码会按照顺序执行

//使用函数声明来创建一个函数 
/* function name(params) {
    ...
} */
 
//使用函数表达式来创建一个函数
/* 
var fun2 = function([a,b...n]){
    ...
} 
*/
// 本质是创建一个匿名函数，再赋值给fun2






console.log('\n\n\n');