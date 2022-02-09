// 声明构造方法
function Person(){
    
}

// 调用
var person=new Person();
console.log(person);

//类名.prototype  表示一个原型对象
var pro=Person.prototype;
console.log("pro:"+pro);

// 向原型对象添加属性
pro.name="yjl";
// 对象.__proto__  表示一个原型对象， 两个指向了同一块内存
var __pro__=person.__proto__.name;
console.log("__pro__:"+__pro__);


// 首先检查person对象是否有age属性，若无age属性，向原型对象pro查找，原型对象若无，
//向原型的原型(pro2) 查找age属性。  查不到则返回undefined， 最多允许两次原型。
var pro2= pro.__proto__;
console.log("pro2:"+pro2);
pro2.age=22;
console.log(person.age);
// 检查对象自身是否有该属性
console.log(person.hasOwnProperty("age"));
console.log(pro.hasOwnProperty("age"));
console.log(pro2.hasOwnProperty("age"));


// object对象原型是一个对象  原型的原型是null
var objpro=Object.prototype;
console.log("objpro:"+objpro);
var objpro2=objpro.__proto__;
console.log("objpro2:"+objpro2);