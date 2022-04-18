console.clear();

var arr = [1, 2, 3];

/* push 
    - 向数组的末尾添加一个或多个元素，并返回数组的新长度*/
var result = arr.push(4, 5, 6);
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log("arry length = " + result);//6

/* pop
    - 删除并返回最后一个元素 */
var mydelete = arr.pop();
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log("delete : " + mydelete); //delete : 6

/* unshift
    - 向数组的开头添加1个或多个元素，并返回新的数组长度
    - 向前边插元素以后，其他元素索引会一次调整 */
var myAdd = arr.unshift(-1, 0, 1);
console.log(arr);
console.log("arry length : " + myAdd);

/* shift 
    - 删除并返回数组的第一个元素（与pop类似）*/

/* slice()
    - 提取数组指定元素
    - 不会改变数组元素，而是将截取到的元素封装到一个新的数组中返回*/
arr2 = ["pig", "cat", "monkey", "koala"];
var result = arr2.slice(1, 3);//截取内容包含开始索引，不包含结束索引
console.log(result);

var result = arr2.slice(1);//第2个参数可以不写,此时会截取从开始索引往后的索引元素
console.log(result);

var result = arr2.slice(1, -1);//索引可以传递负值，-1表示最后1个元素
console.log(result);

/* splice()
    - 删除数组指定元素
    - 使用splice()会影响到原数组，会将指定元素从原数组中删除，并将删除的元素作为返回值返回 
    
    - 参数：
        第一个：开始位置的索引；
        第二个：删除元素的个数
        第三个及以后：传递新的元素，这些元素将会自动插入到开始位置索引前面*/
arr2 = ["pig", "cat", "monkey", "koala"];
var result = arr2.splice(1, 2);
console.log(result);
/* splice()添加元素 */
arr2 = ["pig", "cat", "monkey", "koala"];
arr2.splice(0, 1, "dog", "bird");
console.log(arr2);//[ 'dog', 'bird', 'cat', 'monkey', 'koala' ]