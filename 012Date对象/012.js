var date =new Date();
console.log(date);

var date1 =new Date("2022-02-09 17:55:56");
console.log(date1);

// 调用对象的各种方法
var v=date1.getHours();
console.log(v);
// 
var ms=date1.getTime();
console.log(ms/1000/60/60/24/365);