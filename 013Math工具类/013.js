console.log(typeof Date);  //function
console.log(typeof Math); //object

//Math工具类，采用类名.方法名();  形式调用
var a= Math.abs(-2);
console.log("a="+a);

// 随机数取整
var random=Math.random();
var z_t=Math.round((random*9)+1);
console.log(z_t);

//向上取整
var s= Math.ceil(1.0001);
console.log("s="+s);

//向下取整
var x= Math.floor(1.99999);
console.log("x="+x);