console.clear();
// 使用字面量来创建数组
var arr = [];
console.log(typeof arr);

// 使用字面量创建数组时，可以在创建时就指定数组中的元素
var arr2 = [1, 2, 3];
console.log(arr2);
// 使用构造函数创建数组，也可以同时添加元素，将要添加的元素作为构造函数的参数传递，元素之间使用','隔开
var arr3 = new Array(1, 2, 3);
console.log(arr3);
/* 上述两种方式都可以对数组初始化赋值 */


/* 但是注意以下情况 */
// 创建只有1个元素的数组
arr4 = [10];
console.log(arr4); //[ 10 ]
// 创建一个长度为10的数组
var arr5 = new Array(10);
console.log(arr5); //[ <10 empty items> ]
console.log(arr5.length); //10


/* 数组中的元素可以是任意的数据类型 */
arr = ["hello", 1, true, null, undefined];

// 可以是对象
var obj = {
    name: "pig"
}
arr[arr.length] = obj;
console.log(arr);//[ 'hello', 1, true, null, undefined, { name: 'pig' } ]

arr = [{ name: "xiaoming" }, { name: "xiaohong" }, { name: "xiaoli" }];
console.log(arr);//[ { name: 'xiaoming' }, { name: 'xiaohong' }, { name: 'xiaoli' } ]

// 也可以是一个函数
arr = [function () {
    console.log("1");
}, function () {
    console.log("2");
}];
arr[0]();//1

// 数组里面可以放数组，如二维数组
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr);
console.log(arr[1]);//[ 4, 5, 6 ]



