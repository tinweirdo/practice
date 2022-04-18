console.clear();

var arr = ["pig", "monkey", "cat"];
// 使用for循环遍历数组
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 使用foreach遍历数组 - 只支持IE8以上的浏览器
/* 
foreach（）方法需要一个函数作为参数 
    - 下列的匿名函数由我们创建，但不由我们调用，我们称为回调函数
    - 数组中有几个元素就会被执行几次
    
浏览器会在回调函数中传递3个参数：value, index, arry
    value:当前正在遍历的元素；
    index:当前正在遍历的元素的索引；
    arry:正在遍历的数组
*/
arr.forEach(function (value, index, arry) {
    console.log("value : " + value);
    console.log("index : " + index);
    console.log("arry : " + arry);
})