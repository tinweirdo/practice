console.clear();

/*  去除数组中重复的数字 */
//使用嵌套for循环
var arry = [1, 2, 3, 2, 2, 1, 3, 4, 5];
//获取数组中的每一个元素
for (var i = 0; i < arry.length; i++) {
    //内层for循环：获取当前元素后的所有元素
    for (var j = i + 1; j < arry.length; j++) {
        if (arry[i] == arry[j]) {//判断两个元素是否相等
            arry.splice(j, 1);//如果相等，则证明出现了重复元素，删除j对应的元素
            /* 但是当删除了当前j所在的元素以后，后面的元素会自动补位，
            此时不会再比较这个元素，我们需要再比较一次j所在位置的元素，所以需j自减 */
            j--;//这一步很重要
        }
    }
}
console.log(arry);//[ 1, 2, 3, 4, 5 ]

var arry = [1, 2, 3, 2, 2, 1, 3, 4, 5];

for (var i = 0; i < arry.length; i++) {
    for (var j = i + 1; j < arry.length; j++) {
        if (arry[i] == arry[j]) {
            arry.splice(j, 1);
        }
    }
}
console.log(arry);//[ 1, 2, 3, 2, 4, 5 ]
/* j不自减，则无法删除两个连续的重复元素 */