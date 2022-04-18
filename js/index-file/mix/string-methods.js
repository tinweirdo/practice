console.clear();

/* 在底层字符串是以字符数组的形式保存的 */
var str = "Hello Emma!";//["H","e","l","l","o"," ","E","m","m","a","!"]
console.log(str[0]);//H




/* length可以获取字符串的长度 */
console.log(str.length);




/* charAt
    - 不影响原字符，可以根据索引返回字符串中指定位置的字符 */
var result = str.charAt(1);
console.log(result);//e




/* charCodeAt()
    获取指定位置字符的字符编码（Unicode编码） */
console.log(str.charCodeAt(0));//"H"的Unicode编码是72




/* fromCharCode
    - 可以根据字符编码去获取字符
    - 使用方法：通过构造函数的对象调用该方法
        String.fromCharCode() */
result = String.fromCharCode(72);//H
result = String.fromCharCode(73);//I
result = String.fromCharCode(20013);//中
console.log(result);




/* concat
    - 连接多个字符串
    - 作用和+一样 */
result = str.concat("test1 ", "test2");
console.log(result);//Hello Emma!test1test2




/* indexOf
    - 检索字符串中是否含有指定内容
    - 返回该内容的索引位置
    - 如果没有找到指定内容，则返回-1 */
// str = "Hello Emma!"
result = str.indexOf("e");//1
result = str.indexOf("!");//10
result = str.indexOf("t");//-1
console.log(result);

/* 
    - 可以指定第2个参数，从指定位置开始查找,包括指定的参数位置 */
console.log(str.indexOf("l", 1));

/* lastIndexOf()
    - 该方法和indexOf()一样，不同的是indexOf是从前往后找，lastIndexOf()是从后往前找该元素最后一次出现位置的索引
    - 也可指定开始查找的位置 */
console.log(str);
result = str.lastIndexOf("l");//3
result = str.lastIndexOf("m");//8
console.log(result);




/* slice()
    - 可以从字符串中截取指定的内容
    - 不会影响原字符串，而是将截取到的内容返回
    - 参数：
        第一个参数，开始索引的位置（包括开始的位置）
        第二个参数，结束位置的索引（不包括结束位置） */
var str = "abcdefg";
result = str.slice(0, 2);//ab
result = str.slice(1, 2);//b
// 如果省略第2个参数，则会截取到后边所有的
result = str.slice(1);//bcdefg
// 也可以传递1个负数作为参数，负数会从后边开始计算
result = str.slice(0, -1);//abcdef




/* substring()
    - 使用方法和slice()类似
    - 不同的是：
        这个方法不能接收负值作为参数，如果传递负值作为参数，则默认使用0 
    - 如果第二个参数小于第一个参数，会自动交换两个参数的位置*/
var str = "abcdefg";
result = str.substring(3, 1);





/* substr()
    - 参数：
        1.截取开始位置的索引
        2.截取的长度 */
result = str.substr(1, 4);//bcde




/* split()
    - 可以将一个字符串拆分为一个数组
    - 参数：
        - 需要一个字符串作为参数，根据该字符串去拆分数组 */
var str = "pig-cat-monkey-dog";
result = str.split("-");//[ 'pig', 'cat', 'monkey', 'dog' ]
console.log(result);
console.log(typeof result);//object
console.log(Array.isArray(result));//true
console.log(result[0]);//pig
console.log(result.length);//4
// 如果传递1个空字符串作为参数，则会将每个字符串都拆分为数组中的1个元素
console.log(str.split(""));//  'p', 'i', 'g', '-', 'c','a', 't', '-', 'm', 'o','n', 'k', 'e', 'y', '-','d', 'o', 'g'




/* toUpperCase()
    - 将字符串转换为大写并返回
    toLowerCase()
    - 将字符串转换为小写并返回 */