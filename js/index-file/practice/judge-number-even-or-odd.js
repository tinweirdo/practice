/* 
function isOu(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
} */

// 优化
function isOu(num) {
    return num % 2 == 0;
} 
var result = isOu(15);
console.log("result = " + result);
