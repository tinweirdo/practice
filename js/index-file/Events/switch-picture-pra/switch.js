window.onload = function () {
    /* 点击按钮切换图片 */
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img")[0];
    var imgArray = ["../../imagines/1.png", "../../imagines/2.jpg", "../../imagines/3.jpg", "../../imagines/4.png"];

    var index = 0;

    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArray.length - 1;
        }

        img.src = imgArray[index];

    }

    next.onclick = function () {
        index++;
        if (index > imgArray.length - 1) {
            index = 0;
        }
        img.src = imgArray[index];

    }
}