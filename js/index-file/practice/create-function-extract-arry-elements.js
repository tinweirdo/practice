console.clear();
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var per1 = new Person("xiaoming", 18);
var per2 = new Person("xiaowang", 22);
var per3 = new Person("xiaohua", 12);
var per4 = new Person("xiaozhang", 19);
var per5 = new Person("xiaoli", 23);

perArry = [per1, per2, per3, per4, per5];
// 我的方法
var newArry = [];
for (let i = 0; i < perArry.length; i++) {
    if (perArry[i].age >= 18) {
        newArry.push(perArry[i]);
    }
}

console.log(newArry);

// 参考方法
// 创建一个函数，将arr中满18岁的Person提取出来，封装到一个新的数组并返回
function getAdult(arry) {
    // 创建1个新数组
    var newArry2 = [];
    // 遍历perArry，获取perArry中Person对象
    for (let i = 0; i < perArry.length; i++) {
        // 判断Person对象的age是否大于18
        var p = perArry[i];
        if (p.age >= 18) {
            // 如果大于18，则将这个对象添加到newArry2中
            newArry2.push(p);
        }
    }
    // 将新的数组返回
    return newArry2;
}
var result = getAdult(perArry);
console.log(result);
