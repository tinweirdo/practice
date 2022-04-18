console.clear();

/* 使用字面量来创建正则表达式 
    语法：
        var 变量 = /正则表达式/匹配模式
    虽然字面量的方式创建更加简单，但是使用构造函数创建更加灵活
*/
var str = "abcddde"
// var reg = new RegExp("a", "i");
var reg = /a/i;//与上述创建正则表达式对象是一样的
console.log(reg.test(str));


/* 创建一个正则表达式，是否含有字母a或b */
reg = /a|b/;
reg = /[ab]/;

/* 创建一个正则表达式，是否含有任意小写字母 */
reg = /[a-z]/;

/* 创建一个正则表达式，是否含有任意大写字母 */
reg = /[A-Z]/;

/* 创建一个正则表达式，是否含有字母,忽略大小写 */
reg = /[A-z]/;
// 或者在匹配模式中使用i忽略大小写

/* 检查一个字符串是否含有abc或adc或aec */
// reg = /abc|adc|aec/;
reg = /a[bde]c/;//首尾字母相同，中间差异部分用[]括起来，[]表示或

/* ^表示除了 
    如，除了a或b是否含有其他元素*/
reg = /[^ab]/;
console.log(reg.test("aw"));//true
console.log(reg.test("a"));//false

/* 是否含有任意数字 */
reg = /[0-9]/;
console.log(reg.test("123"));//true
