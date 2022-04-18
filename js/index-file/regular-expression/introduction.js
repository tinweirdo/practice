/*正则表达式用于定义一些字符串的规则
    - 计算机可以根据正则表达式来检查字符串是否符合规则（检查）
    - 获取将字符串中符合规则的内容提取出来（提取）
 */

console.clear();
// 创建正则表达式对象
/* 语法：
    var 变量名 = new RegExp("正则表达式"，"匹配模式");
    - 匹配模式：
        i：忽略大小写
        g：全局匹配模式 */
var str = "hello,my dear!"
var reg = new RegExp("a", "i");//查找str中是否含有"a",忽略大小写
console.log(typeof reg);//object

/* test()
    - 该方法可以用来检查一个字符串是否符合正则表达式的规则
    符合则返回true，否则则返回false */
var result = reg.test(str);
console.log(result);//true
