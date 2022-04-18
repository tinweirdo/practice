
function fun() {
    console.log(this.name);
}

var obj1 = {
    name: "pig",
    sayName: fun
}

var obj2 = {
    name: "monkey",
    sayName: fun
}

obj1.sayName();
obj2.sayName();

