/* 
concat()
    - 可以连接两个或多个数组，并将新的数组返回
    - 该方法不会对原数组产生影响 */
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];

var result = array1.concat(array2, array3);
console.log(result);

var result = array1.concat(array2, array3, "pig", "cat");//可以连接其他元素
console.log(result);
console.log("concat end\n\n");





/* join()
    - 该方法可以将数组转换为1个字符串
    - 该方法不会对原数组产生影响 */
var nameArray = ["pig", "cat", "dog"];
var result = nameArray.join();
console.log(nameArray); //[ 'pig', 'cat', 'dog' ]
console.log(typeof nameArray); //object
console.log(result); //pig,cat,dog
console.log(typeof result); //string
/*  - 在join()中可以指定一个字符串作为参数连接数组中的元素，如果不指定连接符，则默认使用,作为连接符 */
var result = nameArray.join("-");
console.log(result); //pig-cat-dog
console.log("join end\n\n");





/* reverse
    - 反转数组
    - 直接修改原数组 */
var array1 = [1, 2, 3];
var result = array1.reverse();
console.log(result);//[ 3, 2, 1 ]
console.log("reverse end\n\n");





/* sort()
    - 对数组中的元素按Unicode编码进行排序,对于纯数字，可能会得到非预期结果
    - 会直接修改原数组 */
arr = ["b", "e", "a", "c", "m"];
arr.sort();
console.log(arr);//[ 'a', 'b', 'c', 'e', 'm' ]

arr = [8, 2, 1, 6, 11];
arr.sort();
console.log(arr);//[ 1, 11, 2, 6, 8 ]，按照Unicode排序，得到不理想结果

/* 可在sort()中添加回调函数自定义排序规则 
    return 大于0的值，则元素会交换位置
    return 小于0的值，则元素会位置不变
    return 0，认为两个元素相等，则元素会位置也不变
*/
Narr = [21, 9, 12, 1, 5, 28];

Narr.sort(function (a, b) {
    /*     if (a > b) {
            return -1;
        }
        else if (a < b) {
            return 1;
        }
        else {
            return 0;
        } */

    // 升序排列
    return a - b;

    // 降序排列
    // return b - a;
})
console.log(Narr);