/* 为btn按钮绑定单击事件,我们将单击事件绑定的函数，称为单击响应函数*/
btn.ondblclick = function () {
    alert("Wow!");
}

/* 为btn按钮绑定双击事件 */
btn.ondblclick = function () {
    alert("Wow!");
}

//另外的绑定方式：
var btn = document.getElementById("btn");
btn.nodeName = "I am button";
