console.clear();

/* split()
    - 可以将1个字符串拆分为1个数组
    - 即使不指定全局匹配，都可以全局拆分*/

/* 根据任意字母来将字符串拆分 */
var str = "1a2b3c4e5f6g";
var result = str.split(/[A-z]/);
console.log(result);




/* search()
    - 可以搜索字符串是否具有指定内容
    - 如果搜索到指定内容，则返回第一次出现的索引，如果没有则返回-1
    - 可以接收1个正则表达式作为参数，根据正则表达式去检索字符串
    - 即使进行全局匹配，也只能查找第一个指定内容 */
str = "hello abc adc aec afc";
/* 搜索字符串是否含有abc aec adc */
result = str.search(/a[bed]c/);//6
result = str.search("adc");//10





/* match()
    - 可以根据正则表达式，从1个字符串中将符合条件的内容提取出来
    - 默认情况下match只会找到第一个符合要求的内容，找到以后就停止检索
        - 可设置正则表达式为全局匹配模式，就可以得到匹配的所有内容
        - 可为正则表达式设置多个匹配模式，且顺序无所谓 */
str = "1a2b3c4e5f6g";
result = str.match(/[a-z]/ig);

console.log(typeof result);//object?
console.log(Array.isArray(result));//true
/* match()会将匹配到的内容封装道1个数组中返回，即使只查询到1个结果 */





/* replace()
    -将字符串中指定内容替换为新的内容
    - 参数：
        1.被替换的内容,可以接收1个正则表达式作为参数
        2.新的内容
    - 默认只会替换第一个匹配到的结果*/
str = "1a2b3a4e5F6g";
result = str.replace("a", 2);//122b3c4e5f6g
result = str.replace(/[a-z]/ig, "@");//1@2@3@4@5@6@,替换所有字母
result = str.replace(/[a-z]/ig, "");//123456，删除所有字母
console.log(result);
