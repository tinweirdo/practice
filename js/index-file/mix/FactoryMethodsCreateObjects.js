function createPerson(name, age, gender) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;

    // this
    obj.sayName = function () {
        console.log(this.name);
    }
    return obj;
}

var obj1 = createPerson("tingting", 18, "boy");
var obj2 = createPerson("guanchao", 23, "boy");

console.log(obj1);
console.log(obj2);

obj1.sayName();

