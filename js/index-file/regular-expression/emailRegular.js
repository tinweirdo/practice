console.clear();
/* 
xutt_178.test@ljtwork.com.cn
1 任意字母下划线  \w{3,}
2 .任意字母下划线  (\.\w+)*
3 @
4 任意字母数字  [A-z0-9]+
5 .任意字母(2~5)位  \.[A-z]{2,5}
6 .任意字母(2~5)位
*/
//要注意开头和结尾的限制
reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
var emailStr = "tinweirdo@gmail.com";
console.log(reg.test(emailStr));

/* 可以直接网上检索需要的正则表达式，注意需要验证 */