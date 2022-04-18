console.clear();

/* 创建正则表达式检查字符串中是否含有连续出现的3个a */
/* 量词：
    - 设置内容出现的次数
    - {n}表示出现的次数，且只对它前面的1个内容起作用
    - {m,n}出现m~n次 
    - {m,}出现m次以上*/
var reg = /a{3}/;
console.log(reg.test("aaaaaaac"));

reg = /ab{3}/;//检查b是否连续出现3次
reg = /(ab){3}/;//检查ab是否连续出现3次
reg = /ab{1,3}/;//检查b是否连续出现1~3次
reg = /ab{3,}/;//检查b是否连续出现3次以上

reg = /ab+c/;//+表示至少1个，与{1,}类似 
reg = /ab*c/;//*表示0个或多个，有没有都行,与{0,}类似
reg = /ab?c/;//?表示0个或1个，与{0,1}类似

reg = /^a/;//检查1个字符串中是否以a开头,^表示开头
reg = /a$/;//检查1个字符串中是否以a结尾

/* 注意，同时使用^和$ */
reg = /^a$/; //匹配a，不匹配aba,aaa,...
reg = /^a|a$/;//匹配a开头，或a结尾

/* 字符串是否含有. */
reg = /./;
console.log(reg.test("as"));//true?,.在正则表达式中有特殊意义，表示任意字符
reg = /\./;//字面量，直接使用转义字符
/* 用构造函数创建正则表达式，由于它的参数是1个字符串，而\是字符串中的转义字符 */
reg = new RegExp("\."); //与正则表达式/./类似, 匹配任意字符
reg = new RegExp("\\.");//与正则表达式/\./类似,匹配字符.
console.log(reg);//


/* 
\w:任意字母、数字、_（下划线）
\W:除了字母、数字、_（下划线）
\d:任意数字[0-9]
\D:除了数字[0-9]，还有其他元素
\s:有空格
\S:除了空格有其他元素
\b:单词边界
\B:除了单词边界
*/

reg = /\D/;
console.log(reg.test("12A"));//true
reg1 = /child/;
reg2 = /\bchild\b/;
console.log(reg1.test("hello children"));//true
console.log(reg2.test("hello children"));//false

/* 去除用户名中的空格,只考虑前后空格 */
var userName = "     hi Amy    ";
var str1 = userName.replace(/^\s*/, "");//去除开头的空格
var str2 = userName.replace(/\s*$/, "");//去除结尾的空格
var str = userName.replace(/^\s*|\s*$/g, "");//去除开头和结尾的空格，注意需要全局匹配，因为|表示或，去除开头空格后结尾空格就不会考虑了
console.log(str);