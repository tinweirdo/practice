/* 数组也是一个对象
    -和普通对象功能类似，也是用来存储一些值的
    -不同的是普通对象是使用字符串作为属性名，而数组使用数字来作为索引的操作元素
 */

// 创建数组对象
var arr = new Array();
console.log(typeof arr);//object

// 向数组中添加元素
/* 语法：
数组[索引] = 值 */
arr[0] = 10;
console.log(arr);//[ 10 ]

arr[1] = 12;
console.log(arr);//[ 10, 12 ]

/* 读取数组的元素 */
console.log(arr[0]);//10

/* 读取数组的长度 */
console.log(arr.length);//2

/* 对于连续的数组，使用length可以获取到数组的长度（元素的个数）
对于非连续的数组，使用length可获取到数组的最大索引+1
    （尽量不要创建非连续的数组） */
arr[100] = 0;
console.log(arr.length); //101
console.log(arr); //[ 10, 12, <98 empty items>, 0 ]

/* 可以使用length设置（修改）数组的长度
    如果修改的length大于原长度，则多出部分会空出来
    如果修改的length小于原长度，则多出的元素会被删除 */

// 向数组最后一个位置添加元素
arr[arr.length] = 70;