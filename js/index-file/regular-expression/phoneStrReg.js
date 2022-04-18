console.clear();
/* 创建1个正则表达式，检查1个字符串是否是1个手机号
手机号规则：
    1.以1开头
    2.第二位3-9任意数字
    3.三位以后任意9个数字*/

var phoneStr = "17844645257";
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));