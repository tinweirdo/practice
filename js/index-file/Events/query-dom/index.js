window.onload = function () {
    var bj = document.getElementById("bj");
    bj.onclick = function () {
        alert(bj.innerHTML);
    }
}

/* 获取元素节点
getElementById() 通过id获取1个元素节点对象
getElementsByTagName() 通过标签名获取1组元素节点对象
getElementsByName() 通过name属性获取1组元素节点对象
 */

/* innerHTML对于单标签无意义 */